import React from "react";
import BackButton from "./BackButton";
import {
  FieldValues,
  SubmitErrorHandler,
  SubmitHandler,
  UseFormReturn,
} from "react-hook-form";
import { Button } from "@heroui/react";

interface HeaderFormsProps {
  handleCancel?: () => void;
  handleSave?: (e: any) => void;
  form?: UseFormReturn<any, any>;
  loading?: boolean;
  actions?: boolean;
}

const HeaderForms = ({
  handleCancel,
  handleSave,
  loading,
  form,
  actions = true,
}: HeaderFormsProps) => {
  return (
    <div className="flex justify-between items-center p-3 bg-white rounded-lg shadow-sm">
      <BackButton />
      {actions && handleCancel && handleSave && form && (
        <div className="flex gap-3">
          <Button
            className="bg-default-200 border text-slate-600 shadow"
            onClick={() => handleCancel()}
          >
            Cancelar
          </Button>
          <Button
            disabled={loading}
            className={`flex gap-2 ${loading ? "bg-gray-500 " : "bg-sky-900 text-white"}  shadow`}
            onClick={() => form.handleSubmit(handleSave)()}
          >
            Guardar
          </Button>
        </div>
      )}
    </div>
  );
};

export default HeaderForms;
