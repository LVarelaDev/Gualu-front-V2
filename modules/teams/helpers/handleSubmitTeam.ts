import type { SubmitTeam } from "@/modules/teams/interfaces/team";
import { createTeam } from "@/modules/teams/services/mutations/createTeam";
import { updateTeam } from "@/modules/teams/services/mutations/updateTeam";
import { toast } from "sonner";

export const handleSubmitTeam = async (data: SubmitTeam, teamId?: string) => {
  if (teamId) {
    const dataSubmit: SubmitTeam = data.membersId
      ? data
      : { name: data.name, active: data.active, leaderId: data.leaderId };

    toast.promise(updateTeam(dataSubmit, teamId), {
      loading: "Actualizando equipo...",
      error: "Error al actualizar equipo",
      success(response) {
        return response?.message ?? "Equipo actualizado con exito";
      },
    });
  } else {
    const payload = { ...data, leader_id: Number(data.leaderId) };
    toast.promise(createTeam(payload), {
      loading: "Creando equipo...",
      error: "Error al crear equipo",
      success: (response) => {
        return response?.message ?? "Equipo creado con exito";
      },
    });
  }
};
