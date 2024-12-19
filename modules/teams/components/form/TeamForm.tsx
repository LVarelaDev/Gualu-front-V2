"use client";

import type { UserDto } from "@/models/users/userDTO";
import { AutoCompleteField } from "@/modules/core/components/form/AutoCompleteField";
import CheckboxField from "@/modules/core/components/form/CheckboxField";
import InputField from "@/modules/core/components/form/InputField";
import SelectField from "@/modules/core/components/form/SelectField";
import { handleSubmitTeam } from "@/modules/teams/helpers/handleSubmitTeam";
import type { InputTeam, Team } from "@/modules/teams/interfaces/team";
import { Button } from "@nextui-org/button";
import { AutocompleteItem } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { type SubmitHandler, useForm } from "react-hook-form";

interface Props {
  userData: UserDto[];
  teamData?: Team;
}
const TeamForm = ({ userData, teamData }: Props) => {
  const router = useRouter();
  const memberIds = teamData?.membersId.map((member) => member.user_id);
  const { reset, handleSubmit, control, watch } = useForm<InputTeam>();

  const leader_seleted = teamData?.leaderId ?? watch("leaderId");
  const submitData: SubmitHandler<InputTeam> = (data) => {
    // Si en la data teams member existe entonces se convierte en un array de string y se pasa al backend
    console.log("data", data);
    let team_members: number[] = [];
    if (data.membersId && data.membersId.length > 0) {
      team_members = data.membersId.split(",").map(Number);
    }

    handleSubmitTeam({ ...data, membersId: team_members }, teamData?.id);
    reset();
    router.push("/teams");
    router.refresh();
  };
  return (
    <>
      <form
        onSubmit={handleSubmit(submitData)}
        className="w-full flex flex-col gap-y-5 border rounded-2xl px-4 py-4 bg-white dark:border-white/20"
      >
        <h1 className="text-xl font-bold text-center py-3">
          {teamData ? "Editar Equipo" : "Agregar nuevo Equipo"}
        </h1>

        <InputField
          control={control}
          name="name"
          label=" Nombre del equipo"
          placeholder="Agregar nombre"
          defaultValue={teamData?.name}
          rules={{ required: "Este campo es requerido" }}
        />

        <AutoCompleteField
          control={control}
          name="leaderId"
          label="Jefe de equipo"
          placeholder="Selecciona un jefe de equipo"
          defaultSelectedKey={teamData?.leaderId}
          rules={{ required: "Este campo es requerido" }}
        >
          {userData.map((user) => (
            <AutocompleteItem key={user.id} value={user.id}>
              {`${user.firstName} ${user.lastName}`}
            </AutocompleteItem>
          ))}
        </AutoCompleteField>

        <SelectField
          name="membersId"
          label="Miembros del equipo"
          placeholder="Selecciona miembros"
          selectionMode="multiple"
          control={control}
          disabledKeys={[leader_seleted]}
          defaultSelectedKeys={memberIds}
        >
          {userData.map((user) => (
            <AutocompleteItem key={user.id} value={user.id}>
              {`${user.firstName} ${user.lastName}`}
            </AutocompleteItem>
          ))}
        </SelectField>

        {/* 	<Select
					disabledKeys={[`${teamData?.leader_id}`]}
					label="Miembros del equipo"
					placeholder="Selecciona miembros"
					variant="bordered"
					size="lg"
					labelPlacement="outside"
					selectionMode="multiple"
					defaultSelectedKeys={memberIds}
					{...register('team_members')}
				>
					{userData.map((user) => (
						<SelectItem key={user.id} value={user.id}>
							{`${user.first_name} ${user.last_name}`}
						</SelectItem>
					))}
				</Select> */}

        <CheckboxField
          control={control}
          defaultSelected={teamData?.active}
          name="active"
        >
          Equipo Activo
        </CheckboxField>

        <Button type="submit" color="primary">
          {teamData ? "Editar equipo" : "Crear equipo"}
        </Button>
      </form>
    </>
  );
};

export default TeamForm;
