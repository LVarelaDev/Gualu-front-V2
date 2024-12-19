"use client";
import { faPencilAlt, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  Tooltip,
} from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import useSWR from "swr";

import InputSearch from "@/components/ui/Inputs/InputSearch";
import { EnumRols } from "@/enums/users/enumRols";
import { EnumEndpoints, getAllUsers } from "@/services/users/user.service";
import Link from "next/link";

const UsersComponent = () => {
  const { data: users } = useSWR([EnumEndpoints.Users], () => getAllUsers());

  const router = useRouter();

  const handleNavigate = () => {
    router.push("/users/create");
  };

  const form = useForm();

  if (users === null || users === undefined) {
    return <div>Cargando</div>;
  }

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
        <Table aria-label="Example table with custom cells">
          <TableHeader>
            <TableColumn>Nombre</TableColumn>
            <TableColumn>NIF</TableColumn>
            <TableColumn>Correo</TableColumn>
            <TableColumn>Estado</TableColumn>
            <TableColumn>Rol</TableColumn>
            <TableColumn>Acciones</TableColumn>
          </TableHeader>
          <TableBody items={users}>
            {(item) => (
              <TableRow key={item.id}>
                <TableCell>{`${item.firstName} ${item.lastName}`}</TableCell>
                <TableCell>{item.nif}</TableCell>
                <TableCell>{item.email}</TableCell>
                <TableCell>
                  {item.active ? (
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
                </TableCell>
                <TableCell>
                  {(() => {
                    switch (item.role) {
                      case EnumRols.Administrador:
                        return "Administrador";
                      case EnumRols.CommerTeam:
                        return "Jefe de equipo";
                      case EnumRols.Commerce:
                        return "Comercial";
                      default:
                        return "-";
                    }
                  })()}
                </TableCell>
                <TableCell>
                  <div className="flex gap-3">
                    <Tooltip
                      closeDelay={0}
                      content="Editar usuario"
                      delay={0}
                      color="success"
                    >
                      <FontAwesomeIcon
                        className="text-sky-700 cursor-pointer"
                        icon={faPencilAlt}
                        onClick={() => router.push("/users/" + item.id)}
                      />
                    </Tooltip>
                    <Tooltip
                      closeDelay={0}
                      content="Eliminar usuario"
                      className="bg-red-400 text-white"
                      delay={0}
                    >
                      <FontAwesomeIcon
                        className="text-red-500 cursor-pointer"
                        icon={faTrash}
                      />
                    </Tooltip>
                  </div>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default UsersComponent;
