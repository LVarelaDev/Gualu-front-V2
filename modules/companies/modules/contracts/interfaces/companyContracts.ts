export interface ContractCompany {
	id: string
	created_at: string
	status: string
	consumption: string
	fee: number
	clients: { name: string }
	tariffs: { name: string }
}

export interface CompanyContracts {
	contracts: ContractCompany[]
}
