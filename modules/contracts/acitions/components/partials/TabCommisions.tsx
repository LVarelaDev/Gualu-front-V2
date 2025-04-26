import FCard from "@/components/ui/Card/FCard";
import { FTable, FTableColumn } from "@/components/ui/Table/FTable";
import { formatDate } from "@/modules/core/utils/formatDate";
import { Button } from "@nextui-org/react";
import { PlusMinusIcon } from "hugeicons-react";
import { CommissionDto } from "../../interfaces/InformationAction";

interface TabCommisionsProps {
  comisiones: CommissionDto[];
}

const TabCommisions = ({ comisiones }: TabCommisionsProps) => {
  return (
    <FCard title="Comisiones del Contrato">
      <div className="p-4 flex justify-between">
        <Button
          color="primary"
          size="sm"
          startContent={<PlusMinusIcon size={24} />}
        >
          Agregar Comisión
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
