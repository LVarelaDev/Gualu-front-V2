"use client";
import FCard from "@/components/ui/Card/FCard";
import SelectComponent from "@/components/ui/Inputs/AutoComplete";
import { useLogicCommisionsInpuitFile } from "./hooks/useLogicCommisionsInpuitFile";

const Comisions = () => {
  const {
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
  } = useLogicCommisionsInpuitFile();

  return (
    <FCard title="Importar tarifas de comisiones">
      <div className="flex justify-between items-center w-full">
        <div className="min-w-[500px]">
          <SelectComponent
            dataList={companies}
            displayValue="name"
            form={form}
            itemValue="id"
            keyIdentifier="id"
            label="Comercializadora"
            name="companyId"
            placeholder="Selecciona una comercializadora"
          />
        </div>
      </div>
      <div className="w-full ">
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
            accept=".xlsx,.xls,.csv"
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
              className={`text-lg ${isDragging ? "text-blue-500" : "text-gray-600"}`}
            >
              {isDragging
                ? "Drop the file here"
                : "Drag & drop your file here or click to browse"}
            </p>
            <p className="text-sm text-gray-500">
              Soporta formatos: .xlsx, .xls, .csv
            </p>
          </div>
        </div>

        {selectedFile && (
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <svg
                  className="w-6 h-6 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                <div>
                  <p className="font-medium text-gray-700">
                    {selectedFile.name}
                  </p>
                  <p className="text-sm text-gray-500">
                    {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                  </p>
                </div>
              </div>
              <button
                onClick={removeFile}
                className="text-red-500 hover:text-red-700"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
              </button>
            </div>

            {isUploading && (
              <div className="mt-4">
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-blue-600 h-2.5 rounded-full"
                    style={{ width: `${uploadProgress}%` }}
                  ></div>
                </div>
                <p className="text-sm text-gray-500 mt-1 text-center">
                  Uploading: {uploadProgress}%
                </p>
              </div>
            )}

            {!isUploading && !uploadSuccess && (
              <button
                onClick={uploadFile}
                disabled={isUploading}
                className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Upload File
              </button>
            )}

            {uploadSuccess && (
              <div className="mt-4 p-3 bg-green-100 text-green-700 rounded-md flex items-center">
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
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                File uploaded successfully!
              </div>
            )}

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
    </FCard>
  );
};

export default Comisions;
