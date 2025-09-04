"use client";
import { faPencilAlt, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Tooltip } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import useSWR from "swr";

import InputSearch from "@/components/ui/Inputs/InputSearch";
import { FTable, FTableColumn } from "@/components/ui/Table/FTable";
import { UserDto } from "@/models/users/userDTO";
import { EnumEndpoints, getAllUsers } from "@/services/users/user.service";
import Link from "next/link";
import { Fragment } from "react";
import {
  Delete01Icon,
  Delete02Icon,
  Edit01Icon,
  Edit02Icon,
} from "hugeicons-react";

const UsersComponent = () => {
  const { data: users, isLoading } = useSWR([EnumEndpoints.Users], () =>
    getAllUsers()
  );

  const router = useRouter();

  const handleNavigate = () => {
    router.push("/users/create");
  };

  const form = useForm();

  return (
    <div className="flex flex-col gap-5">
      <div className="font-bold text-slate-700 text-xl">
        Gestion de usuarios
      </div>

      <div className="flex flex-col gap-5">
        <div className="flex gap-6 justify-between items-center">
          <div className="flex gap-4">
            <InputSearch form={form} name="search" placeholder="Buscar..." />
          </div>

          <Link href="/users/create">
            <Button className="bg-sky-900 text-white">Nuevo registro</Button>
          </Link>
        </div>
        <FTable<UserDto>
          dataList={users ?? []}
          isLoading={isLoading}
          keyIdentifier="id"
        >
          <FTableColumn<UserDto>
            labelHeader="Nombre"
            colRender={(_, user) => `${user.firstName} ${user.lastName}`}
          />
          <FTableColumn<UserDto>
            labelHeader="Documento"
            colRender={(_, user) => user.nif ?? "no hay registro"}
          />
          <FTableColumn<UserDto>
            labelHeader="Correo"
            colRender={(_, user) => user.email ?? "no hay registro"}
          />
          <FTableColumn<UserDto>
            labelHeader="Estado"
            colRender={(_, user) => (
              <Fragment>
                {user.active ? (
                  <div className="flex">
                    <span className="flex-shrink bg-green-300 text-green-800 rounded-full py-1 px-3">
                      Activo
                    </span>
                  </div>
                ) : (
                  <div className="flex">
                    <span className="flex-shrink bg-red-300 text-red-800 rounded-full py-1 px-3">
                      Inactivo
                    </span>
                  </div>
                )}
              </Fragment>
            )}
          />
          <FTableColumn<UserDto>
            labelHeader="Rol"
            colRender={(_, user) => user.role ?? "no hay registro"}
          />
          <FTableColumn<UserDto>
            labelHeader="Acciones"
            colRender={(_, user) => (
              <div className="flex gap-3">
                <Tooltip
                  closeDelay={0}
                  content="Editar usuario"
                  delay={0}
                  color="success"
                >
                  <Link href={"/users/" + user.id}>
                    <Edit02Icon
                      className="text-sky-700 cursor-pointer"
                      size={17}
                    />
                  </Link>
                </Tooltip>
                <Tooltip
                  closeDelay={0}
                  content="Eliminar usuario"
                  className="bg-red-400 text-white"
                  delay={0}
                >
                  <Delete02Icon size={17} color="#f87171" />
                </Tooltip>
              </div>
            )}
          />
        </FTable>
      </div>
    </div>
  );
};

export default UsersComponent;
