import axiosIntance from "@/lib/axios.config";
import { CompanyDto } from "@/modules/companies/interfaces/company";
import { getAllCompanies } from "@/modules/companies/services/querys/getAllCompanies";
import React, {
  ChangeEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { useForm } from "react-hook-form";

export const useLogicCommisionsInpuitFile = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const form = useForm();
  const [companies, setCompanies] = useState<CompanyDto[]>([]);

  useEffect(() => {
    const fetch = async () => {
      if (companies && companies.length === 0) {
        setCompanies((await getAllCompanies()) ?? []);
      }
    };

    fetch();
  }, []);

  const onDragEnter = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  }, []);

  const onDragLeave = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  }, []);

  const onDragOver = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const onDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const file = e.dataTransfer.files[0];
      setSelectedFile(file);
      setUploadError(null);
      setUploadSuccess(false);
    }
  }, []);

  const onFileInputChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setSelectedFile(file);
      setUploadError(null);
      setUploadSuccess(false);
    }
  }, []);

  const triggerFileInput = useCallback(() => {
    fileInputRef.current?.click();
  }, []);

  const removeFile = useCallback(() => {
    setSelectedFile(null);
    setUploadError(null);
    setUploadSuccess(false);
  }, []);

  const uploadFile = useCallback(async () => {
    if (!selectedFile) return;

    setIsUploading(true);
    setUploadProgress(0);
    setUploadError(null);
    setUploadSuccess(false);

    const formData = new FormData();
    formData.append("file", selectedFile);
    formData.append("companyId", form.getValues("companyId"));

    try {
      const response = await axiosIntance.post(
        "Configurations/import-commissions-file",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          onUploadProgress: (progressEvent) => {
            if (progressEvent.total) {
              const progress = Math.round(
                (progressEvent.loaded * 100) / progressEvent.total
              );
              setUploadProgress(progress);
            }
          },
        }
      );

      setUploadSuccess(true);
      console.log("Upload successful:", response.data);
    } catch (error) {
      console.error("Upload failed:", error);
      setUploadError(
        error instanceof Error ? error.message : "An unknown error occurred"
      );
    } finally {
      setIsUploading(false);
    }
  }, [selectedFile]);

  return {
    isDragging,
    selectedFile,
    isUploading,
    uploadProgress,
    uploadError,
    uploadSuccess,
    fileInputRef,
    form,
    companies,
    onDragEnter,
    onDragLeave,
    onDragOver,
    onDrop,
    onFileInputChange,
    triggerFileInput,
    removeFile,
    uploadFile,
  };
};
