"use client";
import FCard from "@/components/ui/Card/FCard";
import InputSearch from "@/components/ui/Inputs/InputSearch";
import InputText from "@/components/ui/Inputs/InputText";
import HeaderForms from "@/modules/core/components/common/HeaderForms";
import SearchInput from "@/modules/core/components/SearchInput";
import {
  Button,
  Card,
  Chip,
  Divider,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  Tabs,
} from "@nextui-org/react";
import {
  DollarCircleIcon,
  Download01Icon,
  Download05Icon,
  Edit01Icon,
  EyeIcon,
  File01Icon,
  FileUploadIcon,
  PlusMinusIcon,
  Upload01Icon,
} from "hugeicons-react";
import React from "react";
import { useForm } from "react-hook-form";
import TabDocuments from "./partials/TabDocuments";
import GeneralInformation from "./partials/GeneralInformation";
import TabCommisions from "./partials/TabCommisions";
import useSWR from "swr";
import {
  EndpointsContract,
  getContractByCups,
} from "../../services/querys/getAllContracts";

interface Props {
  cups: string;
}

const ContainerActions = ({ cups }: Props) => {
  const form = useForm();

  const { data } = useSWR([EndpointsContract.Contract, cups], () =>
    getContractByCups(cups)
  );

  return (
    <div className="flex flex-col  gap-5 flex-1 overflow-auto">
      <HeaderForms />
      <GeneralInformation data={data} />
      <Tabs
        aria-label="Documentos y Comisiones"
        color="primary"
        variant="underlined"
      >
        <Tab
          key="documentos"
          title={
            <div className="flex items-center gap-2">
              <File01Icon size={24} />
              <span>Documentos</span>
              {data && data.documents.length > 0 && (
                <Chip size="sm" variant="flat" color="primary">
                  {data.documents.length}
                </Chip>
              )}
            </div>
          }
        >
          <TabDocuments form={form} data={data?.documents ?? []} />
        </Tab>
        <Tab
          key="comisiones"
          title={
            <div className="flex items-center gap-2">
              <DollarCircleIcon size={24} />
              <span>Comisiones</span>
              {data && data.commisions.length > 0 && (
                <Chip size="sm" variant="flat" color="primary">
                  {data.commisions.length}
                </Chip>
              )}
            </div>
          }
        >
          <TabCommisions comisiones={data?.commisions ?? []} />
        </Tab>
      </Tabs>
    </div>
  );
};

export default ContainerActions;
