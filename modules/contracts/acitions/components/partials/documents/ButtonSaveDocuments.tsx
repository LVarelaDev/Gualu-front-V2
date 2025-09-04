import { Button } from "@nextui-org/react";
import React, { useState } from "react";
import { SelectedDocumentDto } from "./DocumentsForm";
import { saveDocumentService } from "./services/SaveDocuments";

interface ButtonSaveDocumentsProps {
  cups: string;
  selectedFile: SelectedDocumentDto[];
}

const ButtonSaveDocuments = ({
  cups,
  selectedFile,
}: ButtonSaveDocumentsProps) => {
  const [loading, setLoading] = useState(false);

  const handleSaveDocuments = async () => {
    setLoading(true);
    await saveDocumentService(cups, selectedFile);
    setLoading(false);
  };

  return (
    <Button
      className="bg-purple-800 text-white w-full"
      size="md"
      isLoading={loading}
      onPress={() => handleSaveDocuments()}
    >
      Guardar documentos
    </Button>
  );
};

export default ButtonSaveDocuments;
