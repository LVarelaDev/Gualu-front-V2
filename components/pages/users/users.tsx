"use client";
import { EnumRols } from "@/enums/users/enumRols";
import { UserDto } from "@/models/users/userDTO";
import { EnumEndpoints, getAllUsers } from "@/services/users/user.service";
import useSWR from "swr";
import { CustomGrid, CustomGridColumn } from "../../ui/Table/FTable";
import { useForm } from "react-hook-form";
import InputText from "@/components/ui/Inputs/InputText";
import { Button, Tooltip } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt, faTrash } from "@fortawesome/free-solid-svg-icons";

const UsersComponent = () => {
  const { data: users } = useSWR([EnumEndpoints.GetAllUsers], () =>
    getAllUsers()
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
        <Tooltip content="Editar usuario" delay={0} closeDelay={0}>
          <FontAwesomeIcon
            icon={faPencilAlt}
            className="text-sky-700 cursor-pointer"
            onClick={() => router.push("/users/" + r.id)}
          />
        </Tooltip>
        <Tooltip content="Eliminar usuario" delay={0} closeDelay={0}>
          <FontAwesomeIcon
            icon={faTrash}
            className="text-red-500 cursor-pointer"
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
              name="search"
              label="Buscar"
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
            labelHeader="Nombre"
            colRender={(_, user) => renderNames(user)}
          />
          <CustomGridColumn<UserDto>
            labelHeader="NIF"
            keyColumnIdentifier="nif"
          />
          <CustomGridColumn<UserDto>
            labelHeader="Correo"
            keyColumnIdentifier="email"
          />
          <CustomGridColumn<UserDto>
            labelHeader="Estado"
            colRender={(_, user) => renderStatus(user)}
          />
          <CustomGridColumn<UserDto>
            labelHeader="Rol"
            colRender={(_, user) => renderRol(user)}
          />
          <CustomGridColumn<UserDto>
            labelHeader="Acciones"
            colRender={(_, user) => renderDetails(user)}
          />
        </CustomGrid>
      </div>
    </div>
  );
};

export default UsersComponent;
