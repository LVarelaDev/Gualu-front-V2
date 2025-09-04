import FCard from "@/components/ui/Card/FCard";
import SelectComponent from "@/components/ui/Inputs/AutoComplete";
import DeleteIconSvg from "@/modules/core/components/common/DeleteIconSvg";
import FileIconSvg from "@/modules/core/components/common/FileIconSvg";
import DragDropFileUpload from "@/modules/core/components/form/DropAndDragInput";
import { Button } from "@nextui-org/react";
import React, { Dispatch, SetStateAction } from "react";
import { UseFormReturn } from "react-hook-form";
import { toast } from "sonner";
import ButtonSaveDocuments from "./ButtonSaveDocuments";

interface DocumentsFormProps {
  form: UseFormReturn<any, any>;
  setIsCreate: Dispatch<SetStateAction<boolean>>;
  cups: string;
}

export interface SelectedDocumentDto {
  type: string;
  file: File;
}

const typeDocuments = [
  { name: "Documento" },
  { name: "Comprobante" },
  { name: "Otros" },
];

const DocumentsForm = ({ form, setIsCreate, cups }: DocumentsFormProps) => {
  const [filesSelected, setFilesSelected] = React.useState<
    SelectedDocumentDto[]
  >([]);

  const file = form.watch("file");
  const handleSelectFile = () => {
    if (!file) {
      toast.warning("Debe seleccionar un documento!");
    }
    const selectedDocument: SelectedDocumentDto = {
      type: form.watch("typeDocument"),
      file: file,
    };
    setFilesSelected((prev) => [...prev, selectedDocument]);
    form.setValue("file", undefined);
  };
  const validForm = (): boolean => {
    let typeDocument = form.watch("typeDocument");
    if (form && typeDocument !== "" && file) return false;
    return true;
  };

  return (
    <FCard title="Subir Documento">
      <div className="flex gap-3 flex-1">
        <div className="flex flex-col gap-2 w-1/2">
          <div className="flex justify-between items-center gap-4">
            <SelectComponent
              dataList={typeDocuments}
              displayValue="name"
              itemValue="name"
              keyIdentifier="name"
              form={form}
              name="typeDocument"
              label="Tipo de documento"
            />
            <Button
              className="bg-purple-800 text-white max-w-1/2 w-1/2"
              size="md"
              isDisabled={validForm()}
              onPress={() => handleSelectFile()}
            >
              Seleccionar documento
            </Button>
          </div>

          <DragDropFileUpload
            name="file"
            setValue={form.setValue}
            accept=".pdf,.png,.jpg,.jpeg"
          />
        </div>
        <div className="flex flex-col flex-1 gap-4 justify-between">
          {filesSelected.length > 0 ? (
            <div className="flex flex-col gap-2 max-h-[360px] overflow-y-auto">
              {filesSelected.map((item, index) => (
                <div
                  className="flex items-center justify-between w-full p-3 bg-slate-100 rounded-md"
                  key={index}
                >
                  <div className="flex items-center gap-2">
                    <FileIconSvg />
                    <p className="text-sm text-slate-700">
                      {item.type} - {item.file.name}
                    </p>
                  </div>

                  <button
                    className="text-red-500 hover:text-red-700"
                    onClick={() => {
                      setFilesSelected((prev) =>
                        prev.filter((_, i) => i !== index)
                      );
                    }}
                  >
                    <DeleteIconSvg />
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex-1 w-full flex items-center justify-center p-4">
              <p className="text-lg text-slate-600 font-bold">
                Seleccióna los documentos
              </p>
            </div>
          )}
          <ButtonSaveDocuments cups={cups} selectedFile={filesSelected} />
        </div>
      </div>
    </FCard>
  );
};

export default DocumentsForm;
