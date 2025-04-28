import FCard from "@/components/ui/Card/FCard";
import { FTable, FTableColumn } from "@/components/ui/Table/FTable";
import { formatDate } from "@/modules/core/utils/formatDate";
import { Button } from "@nextui-org/react";
import { PlusMinusIcon } from "hugeicons-react";
import { CommissionDto } from "../../interfaces/InformationAction";
import InputSearch from "@/components/ui/Inputs/InputSearch";
import { useForm } from "react-hook-form";

interface TabCommisionsProps {
  comisiones: CommissionDto[];
}

const TabCommisions = ({ comisiones }: TabCommisionsProps) => {
  const form = useForm();
  return (
    <FCard title="Comisiones del Contrato">
      <div className="flex justify-between items-center">
        <div className="w-1/4">
          <InputSearch form={form} name="search" placeholder="Buscar..." />
        </div>
        <Button
          className="bg-purple-800 text-white"
          size="sm"
          startContent={<PlusMinusIcon size={20} />}
        >
          Crear comisión
        </Button>
      </div>
      <FTable<CommissionDto>
        dataList={comisiones}
        keyIdentifier="id"
        isLoading={comisiones.length === 0}
        shadow="none"
      >
        <FTableColumn<CommissionDto>
          labelHeader="Comercial"
          colRender={(_, commision) =>
            `${commision.commercial.firstName} ${commision.commercial.lastName}`
          }
        />
        <FTableColumn<CommissionDto>
          labelHeader="Tarifa de acceso"
          colRender={(_, commision) => `${commision.accessTariff.name}`}
        />
        <FTableColumn<CommissionDto>
          labelHeader="Plan"
          colRender={(_, commision) => `${commision.plan.name}`}
        />
        <FTableColumn<CommissionDto>
          labelHeader="Concepto"
          colRender={(_, commision) => `${commision.concepto.name}`}
        />
        <FTableColumn<CommissionDto>
          labelHeader="Valor"
          colRender={(_, commision) => `$${commision.value}`}
        />
        <FTableColumn<CommissionDto>
          labelHeader="Fecha creacion"
          colRender={(_, commision) => `${formatDate(commision.createdAt)}`}
        />
      </FTable>
    </FCard>
  );
};

export default TabCommisions;
