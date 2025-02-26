import type { SubmitCompany } from "@/modules/companies/interfaces/company";
import { createCompany } from "@/modules/companies/services/mutations/createCompany";
import { updateCompany } from "@/modules/companies/services/mutations/updateCompany";
import { toast } from "sonner";

export const handleSubmitCompany = async (data: SubmitCompany, id?: string) => {
  // Si el id existe entonces se actualiza, si el id no existe se crea
  if (id) {
    // Si picture no existe entonces no se actualiza la imagen
    if (!data.picture) {
      toast.promise(
        updateCompany({ name: data.name, active: data.active }, id),
        {
          loading: "Actualizando compañia",
          error: (response) => {
            return response.message;
          },
          success: (response) => {
            return response?.message ?? "Compañia Actualizada con exito";
          },
        }
      );
    } else {
      toast.promise(updateCompany(data, id), {
        loading: "Actualizando compañia",
        error: (response) => {
          return response.message;
        },
        success: (response) => {
          return response?.message ?? "Compañia Actualizada con exito";
        },
      });
    }
  } else {
    toast.promise(createCompany(data), {
      success: (response) => {
        return response?.message ?? "Compañia Creada con exito";
      },
    });
  }
};
