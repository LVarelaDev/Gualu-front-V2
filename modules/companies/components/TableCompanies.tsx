"use client";
import type { Company } from "@/modules/companies/interfaces/company";
import { deleteCompany } from "@/modules/companies/services/mutations/deleteCompany";
import ChipStatus from "@/modules/core/components/common/ChipStatus";
import { formattedDate } from "@/utils/helpers";
import { faPencilAlt, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@nextui-org/button";
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  Tooltip,
} from "@nextui-org/react";
import { PlusSignIcon } from "hugeicons-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface Props {
  data: Company[];
}
const TableCompanies = ({ data }: Props) => {
  const router = useRouter();
  return (
    <>
      <div className="py-3">
        <Button
          as={Link}
          color="primary"
          endContent={<PlusSignIcon size={20} />}
          href="/companies/manage"
        >
          Agregar
        </Button>
      </div>
      <Table aria-label="Example table with custom cells">
        <TableHeader>
          <TableColumn>Nombre</TableColumn>
          <TableColumn>Estado</TableColumn>
          <TableColumn>Fecha de creacion</TableColumn>
          <TableColumn>Acciones</TableColumn>
        </TableHeader>
        <TableBody items={data ?? []}>
          {(company) => (
            <TableRow key={company.id}>
              <TableCell>
                <div className="flex items-center gap-x-2">
                  <img
                    src={company.picture}
                    alt={company.name}
                    className="w-9 h-auto"
                  />
                  <span>{company.name}</span>
                </div>
              </TableCell>
              <TableCell>
                <ChipStatus isActive={company.active} />
              </TableCell>
              <TableCell>{formattedDate(company.createdAt)}</TableCell>
              <TableCell>
                <div className="flex gap-3">
                  <Tooltip
                    closeDelay={0}
                    content="Editar empresa"
                    delay={0}
                    color="success"
                  >
                    <FontAwesomeIcon
                      className="text-sky-700 cursor-pointer"
                      icon={faPencilAlt}
                      onClick={() =>
                        router.push("/companies/manage?id=" + company.id)
                      }
                    />
                  </Tooltip>
                  <Tooltip
                    closeDelay={0}
                    content="Eliminar empresa"
                    className="bg-red-400 text-white"
                    delay={0}
                  >
                    <FontAwesomeIcon
                      className="text-red-500 cursor-pointer"
                      icon={faTrash}
                      onClick={() => deleteCompany(company.id)} // Método para eliminar
                    />
                  </Tooltip>
                </div>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </>
  );
};

export default TableCompanies;
