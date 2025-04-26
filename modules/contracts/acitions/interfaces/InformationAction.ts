export interface DocumentsDto {
  id: number;
  name: string;
  type: string;
  createdAt: Date;
}

export interface CommissionDto {
  id: number;
  commercial: {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    active: boolean;
    role: string;
    nif: string;
    kind: string;
  };
  accessTariff: {
    id: number;
    name: string;
  };
  plan: {
    id: number;
    name: string;
  };
  concepto: {
    id: number;
    name: string;
  };
  value: number;
  principalValue: number;
  createdAt: string;
}

export interface InformationActionsContractDto {
  cups: string;
  consumption: number;
  fee: number;
  iban: string;
  status: string | null;
  clientName: string;
  companyName: string;
  contractType: string;
  documents: DocumentsDto[];
  commisions: CommissionDto[];
}
