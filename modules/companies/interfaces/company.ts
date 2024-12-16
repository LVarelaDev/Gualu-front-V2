import type { CompanyContracts } from "@/modules/companies/modules/contracts/interfaces/companyContracts";

export interface Company {
  id: string;
  name: string;
  picture: string;
  active: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface OneCompany extends Company, CompanyContracts {}

export interface InputCompany {
  name: string;
  picture: FileList;
  active: boolean;
}

export interface SubmitCompany extends Omit<InputCompany, "picture"> {
  picture?: string;
}
