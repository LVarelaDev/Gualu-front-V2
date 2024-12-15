export type UserDto = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  active: boolean;
  created_at: Date;
  updated_at: Date;
  role: string;
  nif: string;
  kind: string;
  permissions: Permissions[];
};

export type AutoInvoiceData = {
  dni: string;
  addres: string;
  population: string;
  postalCode: string;
  province: string;
  bankAccount: number;
  iban: string;
  retentionImport: number;
  iva: string;
};

export type CreateUserDto = {
  names: string;
  lastNames: string;
  nif: string;
  email: string;
  rol: string;
  typeCategory: string;
  permissions: string[];
  autoInvoiceData: AutoInvoiceData | null;
};

export type usersById = {
  firstName: string;
  lastName: string;
  nif: string;
  email: string;
  role: string | null;
  kind: string | null;
  autoInvoice: AutoInvoiceData | null;
  permissions: Permissions[];
};

export type Permissions = {
  id: number;
  name: string;
};
