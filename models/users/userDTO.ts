export type UserDto = {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  active: boolean;
  created_at: Date;
  updated_at: Date;
  role: string;
  nif: string;
  kind: string;
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
  autoInvoiceData: AutoInvoiceData;
};

export type usersById = {
  first_name: string;
  last_name: string;
  nif: string;
  email: string;
  role: string | null;
  kind: string | null;
  auto_invoices: {
    dni: string | null;
    address: string | null;
    population: string | null;
    postal_code: string | null;
    province: string | null;
    bank_account: number | null;
    iban: string | null;
    retention_percent: number;
    iva: string | null;
  }[];
  permissions: {
    name: string;
  }[];
};
