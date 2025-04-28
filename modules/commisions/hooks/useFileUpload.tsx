// hooks/useFileUpload.ts
import { ChangeEvent, useCallback, useRef, useState } from "react";
import { UseFormSetValue } from "react-hook-form";

export interface UseFileUploadOptions {
  accept?: string;
  maxSize?: number; // in bytes
  setValue?: UseFormSetValue<any>;
  name?: string;
}

export const useFileUpload = (options: UseFileUploadOptions = {}) => {
  const [isDragging, setIsDragging] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const validateFile = (file: File): boolean => {
    if (
      options.accept &&
      !options.accept.split(",").some((type) => {
        const acceptedType = type.trim();
        if (acceptedType.startsWith(".")) {
          return file.name.toLowerCase().endsWith(acceptedType.toLowerCase());
        }
        return file.type.match(acceptedType);
      })
    ) {
      setUploadError(
        `Tipo de archivo no soportado. Formatos aceptados: ${options.accept}`
      );
      return false;
    }

    if (options.maxSize && file.size > options.maxSize) {
      setUploadError(
        `Archivo demasiado grande. Tamaño máximo: ${options.maxSize / 1024 / 1024}MB`
      );
      return false;
    }

    return true;
  };

  const handleFileSelection = (file: File) => {
    if (validateFile(file)) {
      setSelectedFile(file);
      setUploadError(null);
      setUploadSuccess(false);

      // Actualiza el valor en react-hook-form si name y setValue están proporcionados
      if (options.name && options.setValue) {
        options.setValue(options.name, file);
      }
    }
  };

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
      handleFileSelection(e.dataTransfer.files[0]);
    }
  }, []);

  const onFileInputChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      handleFileSelection(e.target.files[0]);
    }
  }, []);

  const triggerFileInput = useCallback(() => {
    fileInputRef.current?.click();
  }, []);

  const removeFile = useCallback(() => {
    setSelectedFile(null);
    setUploadError(null);
    setUploadSuccess(false);

    // Limpia el valor en react-hook-form si name y setValue están proporcionados
    if (options.name && options.setValue) {
      options.setValue(options.name, null);
    }
  }, [options.name, options.setValue]);

  return {
    isDragging,
    selectedFile,
    isUploading,
    uploadProgress,
    uploadError,
    uploadSuccess,
    fileInputRef,
    onDragEnter,
    onDragLeave,
    onDragOver,
    onDrop,
    onFileInputChange,
    triggerFileInput,
    removeFile,
  };
};
