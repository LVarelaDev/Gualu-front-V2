export interface ContractDto {
  id: number;
  company: CompanyDto;
  commerce: UserDto;
  contractType: string;
  status: ContractStatusDto;
  cups: string;
  consumption: number;
  fee: number;
  iban: string;
  operation: string;
  powerOne: number;
  powerTwo: number;
  powerThree?: number;
  powerFour?: number;
  powerFive?: number;
  powerSix?: number;
  client: ClientDto;
}

export interface ClientDto {
  id: number;
  name: string;
  type: string;
  nif: string;
  address: string;
  cp: string;
  population: string;
  province: string;
  phone: string;
  email: string;
  iban: string;
  typeNif: string;
}

export interface CompanyDto {
  id: number;
  name: string;
  createdAt: string; // DateTime en .NET, string ISO en TS
  updatedAt: string;
  active?: boolean;
}

export interface UserDto {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  active: boolean;
  role?: string;
  nif: string;
  kind?: string;
}

export interface ContractStatusDto {
  id: number;
  name: string;
}
