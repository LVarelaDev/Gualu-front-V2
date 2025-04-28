export interface Client {
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

export interface Consumption {
  cups: string;
  consumption: number;
  fee: number;
  iban: string;
}

export interface ContractPayload {
  companyId: number;
  client: Client;
  commercialId: number;
  contractType: string;
  statusId: number;
  consumptionEnergy: Consumption;
  consumptionGas: Consumption | null;
  operation: string;
  address: string;
  postalCode: string;
  population: string;
  province: string;
  accessTariffId: number;
  planId: number;
  conceptId: number;
  powerOne: number;
  powerTwo: number;
  powerThree: number | null;
  powerFour: number | null;
  powerFive: number | null;
  powerSix: number | null;
  internsObservation: string;
  observations: string;
}
