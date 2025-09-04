// components/ui/DragDropFileUpload.tsx
import { useFileUpload } from "@/modules/commisions/hooks/useFileUpload";
import React from "react";
import { UseFormSetValue } from "react-hook-form";
import FileIconSvg from "../common/FileIconSvg";
import DeleteIconSvg from "../common/DeleteIconSvg";

interface DragDropFileUploadProps {
  accept?: string;
  maxSize?: number;
  description?: string;
  className?: string;
  // Nuevas props para integración con react-hook-form
  name: string;
  showFileList?: boolean;
  setValue: UseFormSetValue<any>;
}

const DragDropFileUpload: React.FC<DragDropFileUploadProps> = ({
  accept = ".xlsx,.xls,.csv",
  maxSize = 5 * 1024 * 1024, // 5MB
  description = "Drag & drop your file here or click to browse",
  className = "",
  name,
  showFileList = true,
  setValue,
}) => {
  const {
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
  } = useFileUpload({
    accept,
    maxSize,
    setValue,
    name,
  });

  return (
    <div className={`w-full ${className}`}>
      <div
        className={`border-2 border-dashed rounded-lg p-8 text-center transition-all duration-300 ${
          isDragging
            ? "border-blue-500 bg-blue-50 scale-105"
            : "border-gray-300 hover:border-blue-400 hover:bg-blue-50"
        }`}
        onDragEnter={onDragEnter}
        onDragLeave={onDragLeave}
        onDragOver={onDragOver}
        onDrop={onDrop}
        onClick={triggerFileInput}
      >
        <input
          type="file"
          ref={fileInputRef}
          onChange={onFileInputChange}
          className="hidden"
          accept={accept}
        />
        <div className="flex flex-col items-center justify-center space-y-4">
          <svg
            className={`w-12 h-12 ${
              isDragging ? "text-blue-500" : "text-gray-400"
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
            />
          </svg>
          <p
            className={`text-lg ${
              isDragging ? "text-blue-500" : "text-gray-600"
            }`}
          >
            {isDragging ? "Suelta el archivo aquí" : description}
          </p>
          <p className="text-sm text-gray-500">Formatos soportados: {accept}</p>
        </div>
      </div>

      {selectedFile && showFileList && (
        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <FileIconSvg />
              <div>
                <p className="font-medium text-gray-700">{selectedFile.name}</p>
                <p className="text-sm text-gray-500">
                  {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                </p>
              </div>
            </div>
            <button
              onClick={removeFile}
              className="text-red-500 hover:text-red-700"
              type="button"
            >
              <DeleteIconSvg />
            </button>
          </div>

          {uploadError && (
            <div className="mt-4 p-3 bg-red-100 text-red-700 rounded-md flex items-center">
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              {uploadError}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default DragDropFileUpload;
