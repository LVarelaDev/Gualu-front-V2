import type { Contract } from '@/modules/core/interfaces/contract/contract'

export interface Allcontract extends Contract {
	clients: {
		name: string
	}
	tariffs: {
		name: string
	}
	companies: {
		name: string
	}
}
