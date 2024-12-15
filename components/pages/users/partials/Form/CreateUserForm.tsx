"use client";
import { faPlus, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@nextui-org/button";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { useCreateOrUpdate } from "../../hooks/useCreateOrUpdate";

import AutoInvoiceForm from "./partials/AutoInvoiceForm";
import PermissionsForm from "./partials/PermissionsForm";
import PersonalInformationForm from "./partials/PersonalInformationForm";

import { EnumRols } from "@/enums/users/enumRols";
import type { usersById } from "@/models/users/userDTO";
import { getUsersById } from "@/services/users/user.service";

const CreateUserForm = ({ id }: { id: string }) => {
  const isEdit: boolean = id !== "create" ? true : false;
  const [showAutoInvoiceForm, setShowAutoInvoiceForm] = useState(false);
  const [userData, setUserData] = useState<usersById | null>(null);

  const { handleCreateUser, loading, handleUpdateUser } = useCreateOrUpdate(id);

  const router = useRouter();
  const form = useForm();

  const { handleSubmit, watch } = form;
  const rol = watch("rol");

  const handleConst = (data: any) => {
    console.log(data);
  };

  useEffect(() => {
    if (rol !== undefined) {
      setShowAutoInvoiceForm(
        rol !== EnumRols.Administrador && rol !== "" ? true : false
      );
    }
  }, [rol]);

  const handleNavigate = () => {
    router.push("/users");
  };

  useEffect(() => {
    const fetchExtract = async () => {
      if (isEdit) {
        const response = await getUsersById(+id);

        if (response) {
          setUserData(response);
        }
      }
    };

    fetchExtract();
  }, [id]);

  return (
    <div className="flex flex-col gap-5">
      <div className="flex justify-between items-center">
        <p className="text-xl font-bold text-slate-700">Crear usuario</p>
        <div className="flex gap-3">
          <Button
            className="bg-default-200 border text-slate-600 shadow"
            onClick={() => handleNavigate()}
          >
            Cancelar
          </Button>
          <Button
            disabled={loading}
            className={`flex gap-2 ${loading ? "bg-gray-500 " : "bg-sky-900 text-white"}  shadow`}
            onClick={handleSubmit(isEdit ? handleUpdateUser : handleCreateUser)}
          >
            Guardar
          </Button>
        </div>
      </div>
      <div
        className="grid grid-cols-1 xl:grid-cols-2 gap-5"
        style={{
          gridTemplateAreas: `
          "form1 form2"
          "form3 form2"
        `,
          gridTemplateRows: "auto 1fr",
        }}
      >
        <div style={{ gridArea: "form1" }}>
          <PersonalInformationForm form={form} userData={userData} />
        </div>
        {showAutoInvoiceForm ? (
          <>
            <div style={{ gridArea: "form2" }}>
              <AutoInvoiceForm form={form} userData={userData} />
            </div>
            <div style={{ gridArea: "form3" }}>
              <PermissionsForm form={form} userData={userData} />
            </div>
          </>
        ) : (
          <div style={{ gridArea: "form2" }}>
            <PermissionsForm form={form} userData={userData} />
          </div>
        )}
      </div>
    </div>
  );
};

export default CreateUserForm;
