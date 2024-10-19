import type { ContractStatus } from '@/modules/core/interfaces/contract/contractStatus'

export interface Contract {
	id: string
	company_id: string
	client_id: string
	status: ContractStatus
	comercial_id: string
	concept_id: string
	tariff_id: string
	cups: string
	consumption: string
	fee: number
	contact_person: string
	observations: string
	power_one: number
	power_two: number
	power_three: number
	power_four: number
	power_five: number
	delivery_address: string
	delivery_road_type: string
	delivery_number: number
	delivery_portal: string
	delivery_ladder: string
	delivery_floor: string
	delivery_door: string
	delivery_postal_code: string
	delivery_population: string
	delivery_province: string
	created_at: string
	updated_at: string
}
