import FCard from "@/components/ui/Card/FCard";
import React from "react";
import { InformationActionsContractDto } from "../../interfaces/InformationAction";
import { Chip, Skeleton } from "@heroui/react";

interface GeneralInformationProps {
  data: InformationActionsContractDto | undefined;
}

const GeneralInformation = ({ data }: GeneralInformationProps) => {
  return (
    <FCard title="Informacion general del contrato">
      {data ? (
        <div className="p-2">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <p className="text-sm text-gray-500">Cups</p>
              <p className="font-medium">{data.cups}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Cliente</p>
              <p className="font-medium">{data.clientName}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Tipo</p>
              <p className="font-medium">{data.contractType}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Estado</p>
              <Chip color="success" variant="flat">
                {data.status}
              </Chip>
            </div>
            <div>
              <p className="text-sm text-gray-500">Fee Euro/MW</p>
              <p className="font-medium">{data.fee}</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Consumo KW/Año</p>
              <p className="font-medium">{data.consumption}</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Empresa</p>
              <p className="font-medium">{data.companyName}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Iban</p>
              <p className="font-medium">{data.iban}</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-3 md:grid-cols-4 gap-6">
          <div className="flex flex-col gap-2">
            <span className="text-sm text-gray-500">Número de contrato</span>
            <Skeleton className="h-4 w-48 rounded" />
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-sm text-gray-500">Cliente</span>
            <Skeleton className="h-4 w-40 rounded" />
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-sm text-gray-500">Tipo</span>
            <Skeleton className="h-4 w-32 rounded" />
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-sm text-gray-500">Estado</span>
            <Skeleton className="h-6 w-20 rounded-full" />
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-sm text-gray-500">Fee Euro/MW</span>
            <Skeleton className="h-4 w-16 rounded" />
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-sm text-gray-500">Consumo KW/Año</span>
            <Skeleton className="h-4 w-20 rounded" />
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-sm text-gray-500">Empresa</span>
            <Skeleton className="h-4 w-36 rounded" />
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-sm text-gray-500">Iban</span>
            <Skeleton className="h-4 w-60 rounded" />
          </div>
        </div>
      )}
    </FCard>
  );
};

export default GeneralInformation;
