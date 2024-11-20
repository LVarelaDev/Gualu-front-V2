import type { Company } from '@/modules/companies/interfaces/company'
import type { Client } from '@/modules/core/interfaces/client'
import type { Contract } from '@/modules/core/interfaces/contract/contract'

interface Tariff {
	id: string
	concept_id: string
	name: string
}

interface User {
	id: string
	first_name: string
	last_name: string
	email: string
	active: boolean
	created_at: string
	updated_at: string
	role: string
	nif: string
	kind: string
}

interface Concept {
	id: string
	contract_typology_id: string
	name: string
}

export interface OneContract extends Contract {
	clients: Client
	companies: Company
	concepts: Concept
	tariffs: Tariff
	users: User
}
