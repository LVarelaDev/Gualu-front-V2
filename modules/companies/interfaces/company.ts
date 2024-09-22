export interface Company {
	id: string
	name: string
	picture: string
	active: boolean
	created_at: string
	updated_at: string
}

export interface InputCompany {
	name: string
	picture: FileList
	active: boolean
}

export interface SubmitCompany extends Omit<InputCompany, 'picture'> {
	picture: string
}
