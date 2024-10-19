import type { ContractStatus } from '@/modules/core/interfaces/contract/contractStatus'

export interface ContractCompany {
	id: string
	created_at: string
	status: ContractStatus
	consumption: string
	fee: number
	clients: { name: string }
	tariffs: { name: string }
}

export interface CompanyContracts {
	contracts: ContractCompany[]
}
