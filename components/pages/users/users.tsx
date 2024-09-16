"use client";
import useSWR from "swr";
import { useForm } from "react-hook-form";
import { Button, Tooltip } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt, faTrash } from "@fortawesome/free-solid-svg-icons";

import { CustomGrid, CustomGridColumn } from "../../ui/Table/FTable";

import InputText from "@/components/ui/Inputs/InputText";
import { EnumEndpoints, getAllUsers } from "@/services/users/user.service";
import { UserDto } from "@/models/users/userDTO";
import { EnumRols } from "@/enums/users/enumRols";

const UsersComponent = () => {
  const { data: users } = useSWR([EnumEndpoints.GetAllUsers], () =>
    getAllUsers(),
  );

  const router = useRouter();

  const handleNavigate = () => {
    router.push("/users/create");
  };

  const form = useForm();

  const renderNames = (r: UserDto) => {
    return (
      <div>
        {r.first_name} {r.last_name}
      </div>
    );
  };

  const renderStatus = (r: UserDto) => {
    if (!r.active) {
      return (
        <div className="flex">
          <span className=" flex-shrink bg-red-300 text-red-800 rounded-full py-1 px-3">
            Inactivo
          </span>
        </div>
      );
    } else {
      return (
        <div className="flex">
          <span className=" flex-shrink bg-green-300 text-green-800 rounded-full py-1 px-3">
            Activo
          </span>
        </div>
      );
    }
  };

  const renderRol = (r: UserDto) => {
    switch (r.role) {
      case EnumRols.Administrador:
        return <div>Administrador</div>;
      case EnumRols.CommerTeam:
        return <div>Jefe de equipo</div>;
      case EnumRols.Commerce:
        return <div>Comercial</div>;
    }
  };

  const renderDetails = (r: UserDto) => {
    return (
      <div className="flex gap-3">
        <Tooltip closeDelay={0} content="Editar usuario" delay={0}>
          <FontAwesomeIcon
            className="text-sky-700 cursor-pointer"
            icon={faPencilAlt}
            onClick={() => router.push("/users/" + r.id)}
          />
        </Tooltip>
        <Tooltip closeDelay={0} content="Eliminar usuario" delay={0}>
          <FontAwesomeIcon
            className="text-red-500 cursor-pointer"
            icon={faTrash}
          />
        </Tooltip>
      </div>
    );
  };

  return (
    <div className="flex flex-col gap-5 pt-8">
      <div className="font-bold text-slate-700 text-xl">
        Gestion de usuarios
      </div>

      <div className="flex flex-col gap-5">
        <div className="flex gap-6 justify-between items-center">
          <div className="flex gap-4">
            <InputText
              form={form}
              label="Buscar"
              name="search"
              placeholder="Valor de busqueda"
            />
          </div>

          <Button
            className="bg-sky-900 text-white"
            onClick={() => handleNavigate()}
          >
            Nuevo registro
          </Button>
        </div>
        <CustomGrid<UserDto> dataList={users ?? []} keyIdentifier="id">
          <CustomGridColumn<UserDto>
            colRender={(_, user) => renderNames(user)}
            labelHeader="Nombre"
          />
          <CustomGridColumn<UserDto>
            keyColumnIdentifier="nif"
            labelHeader="NIF"
          />
          <CustomGridColumn<UserDto>
            keyColumnIdentifier="email"
            labelHeader="Correo"
          />
          <CustomGridColumn<UserDto>
            colRender={(_, user) => renderStatus(user)}
            labelHeader="Estado"
          />
          <CustomGridColumn<UserDto>
            colRender={(_, user) => renderRol(user)}
            labelHeader="Rol"
          />
          <CustomGridColumn<UserDto>
            colRender={(_, user) => renderDetails(user)}
            labelHeader="Acciones"
          />
        </CustomGrid>
      </div>
    </div>
  );
};

export default UsersComponent;
