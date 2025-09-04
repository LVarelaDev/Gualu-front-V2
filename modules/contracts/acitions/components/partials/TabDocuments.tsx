import FCard from "@/components/ui/Card/FCard";
import InputSearch from "@/components/ui/Inputs/InputSearch";
import { FTable, FTableColumn } from "@/components/ui/Table/FTable";
import { FileUploadIcon } from "hugeicons-react";
import { UseFormReturn } from "react-hook-form";
import { DocumentsDto } from "../../interfaces/InformationAction";
import Documents from "./documents/Documents";
import DocumentsForm from "./documents/DocumentsForm";
import { Button } from "@heroui/react";

interface TabDocumentsProps {
  form: UseFormReturn<any, any>;
  data: DocumentsDto[];
  cups: string;
}

const TabDocuments = ({ form, data, cups }: TabDocumentsProps) => {
  const [isCreate, setIsCreate] = useState(false);

  return (
    <Fragment>
      {!isCreate ? (
        <Documents
          data={data}
          form={form}
          setIsCreate={setIsCreate}
          cups={cups}
        />
      ) : (
        <DocumentsForm cups={cups} form={form} setIsCreate={setIsCreate} />
      )}
    </Fragment>
  );
};

export default TabDocuments;
