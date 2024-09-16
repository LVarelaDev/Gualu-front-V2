import { EnumCategoryType } from '@/enums/users/enumRols'

export const rols = [
	{ value: 'admin', label: 'Administrador' },
	{ value: 'commerce_team', label: 'Jefe de equipo comercial' },
	{ value: 'commerce', label: 'Comercial' },
]

export const categories = [
	{ label: 'Principal', value: EnumCategoryType.Principal },
	{ label: 'Canal', value: EnumCategoryType.Canal },
	{ label: 'Subcanal', value: EnumCategoryType.Subcanal },
	{ label: 'Externo', value: EnumCategoryType.Externo },
	{ label: 'Comercial I', value: EnumCategoryType.ComercialI },
	{ label: 'Comercial II', value: EnumCategoryType.ComercialII },
	{ label: 'Comercial III', value: EnumCategoryType.ComercialIII },
	{ label: 'Comercial VI', value: EnumCategoryType.ComercialVI },
	{ label: 'Jefe de Equipo I', value: EnumCategoryType.JefeDeEquipoI },
	{ label: 'Jefe de Equipo II', value: EnumCategoryType.JefeDeEquipoII },
	{ label: 'Jefe de Equipo VI', value: EnumCategoryType.JefeDeEquipoVI },
]

export const iva = [
	{ label: 'General', value: 'general' },
	{ label: 'Reducido', value: 'reducido' },
	{ label: 'Super Reducido', value: 'super_reducido' },
	{ label: 'Exento', value: 'exento' },
	{ label: 'Gas', value: 'gas' },
]

export const permissions = [
	{
		section: 'Usuarios',
		permissions: [
			{ label: 'Crear Usuario', value: 'CREATE_USER' },
			{ label: 'Actualizar Usuario', value: 'UPDATE_USER' },
			{ label: 'Eliminar Usuario', value: 'DELETE_USER' },
			{ label: 'Ver Usuarios', value: 'VIEW_USERS' },
		],
	},
	{
		section: 'Equipos Comerciales',
		permissions: [
			{ label: 'Crear Equipo', value: 'CREATE_TEAM' },
			{ label: 'Actualizar Equipo', value: 'UPDATE_TEAM' },
			{ label: 'Eliminar Equipo', value: 'DELETE_TEAM' },
			{ label: 'Ver Equipos', value: 'VIEW_TEAMS' },
		],
	},
	{
		section: 'Comercializadoras',
		permissions: [
			{ label: 'Crear Comercializadora', value: 'CREATE_COMPANY' },
			{ label: 'Actualizar Comercializadora', value: 'UPDATE_COMPANY' },
			{ label: 'Eliminar Comercializadora', value: 'DELETE_COMPANY' },
			{ label: 'Ver Comercializadoras', value: 'VIEW_COMPANIES' },
			{
				label: 'Ver Detalles de Comercializadora',
				value: 'VIEW_COMPANY_DETAILS',
			},
		],
	},

	{
		section: 'Comisiones de contratos',
		permissions: [
			{
				label: 'Ver Comisiones de Contrato',
				value: 'VIEW_CONTRACT_COMMISSIONS',
			},
			{
				label: 'Crear Comisión de Contrato',
				value: 'CREATE_CONTRACT_COMMISSION',
			},
			{
				label: 'Actualizar Comisión de Contrato',
				value: 'UPDATE_CONTRACT_COMMISSION',
			},
			{
				label: 'Eliminar Comisión de Contrato',
				value: 'DELETE_CONTRACT_COMMISSION',
			},
		],
	},
	{
		section: 'Contratos',
		permissions: [
			{ label: 'Crear Contrato', value: 'CREATE_CONTRACT' },
			{ label: 'Actualizar Contrato', value: 'UPDATE_CONTRACT' },
			{ label: 'Eliminar Contrato', value: 'DELETE_CONTRACT' },
			{ label: 'Ver Contratos', value: 'VIEW_CONTRACTS' },
			{ label: 'Ver Acciones de Contrato', value: 'VIEW_CONTRACT_ACTIONS' },
			{ label: 'Ver Documentos de Contrato', value: 'VIEW_CONTRACT_DOCUMENTS' },
			{
				label: 'Crear Documento de Contrato',
				value: 'CREATE_CONTRACT_DOCUMENT',
			},
			{
				label: 'Eliminar Documento de Contrato',
				value: 'DELETE_CONTRACT_DOCUMENT',
			},
		],
	},
	{
		section: 'Otros',
		permissions: [
			{ label: 'Panel de Control', value: 'DASHBOARD' },
			{ label: 'Importar Impuestos', value: 'IMPORT_TAXES' },
		],
	},
]
