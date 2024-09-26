export interface ContractCompany {
	id: string
	created_at: string
	status: string
	clients: { name: string }
	tariffs: { name: string }
}

export interface CompanyContracts {
	contracts: ContractCompany[]
}
