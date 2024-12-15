import { useRouter } from "next/navigation";
import { useState } from "react";
import { CreateUserDto } from "@/models/users/userDTO";
import { createUser } from "@/services/users/user.service";
import { toast } from "sonner";

export const useCreateOrUpdate = (id?: string) => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const handleCreateUser = async (data: any) => {
    setLoading(true);
    const payload: CreateUserDto = {
      names: data.names,
      lastNames: data.lastNames,
      email: data.email,
      nif: data.nif,
      rol: data.rol,
      typeCategory: data.typeCategory,
      permissions: data.permissions,
      autoInvoiceData:
        data.rol === "commerce_team" || data.rol === "commerce"
          ? {
              dni: data.dni,
              addres: data.addres,
              bankAccount: data.bankAccount,
              iban: data.iban,
              iva: data.iva,
              population: data.population,
              postalCode: data.postalCode,
              province: data.province,
              retentionImport: data.retentionImport,
            }
          : null,
    };

    toast.promise(createUser(payload), {
      loading: "Creando usuario...",
      error: "Error al crear el usuario",
      success(response) {
        setLoading(false);
        router.push("/users");
        return response?.message ?? "Usuario creado con exito";
      },
    });
  };

  const handleUpdateUser = async (data: any) => {
    setLoading(true);
    const payload: CreateUserDto = {
      names: data.names,
      lastNames: data.lastNames,
      email: data.email,
      nif: data.nif,
      rol: data.rol,
      typeCategory: data.typeCategory,
      permissions: data.permissions,
      autoInvoiceData: {
        dni: data.dni,
        addres: data.addres,
        bankAccount: data.bankAccount,
        iban: data.iban,
        iva: data.iva,
        population: data.population,
        postalCode: data.postalCode,
        province: data.province,
        retentionImport: data.retentionImport,
      },
    };

    toast.promise(createUser(payload), {
      loading: "Actualizando usuario...",
      error: "Error al actualizando el usuario",
      success(response) {
        setLoading(false);
        router.push("/users");
        return response?.message ?? "Usuario actualizado con exito";
      },
    });
  };

  return {
    handleCreateUser,
    loading,
    handleUpdateUser,
  };
};
