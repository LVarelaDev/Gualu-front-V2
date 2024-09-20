import { useRouter } from 'next/navigation'
import { toast } from 'sonner'
import type { InputTeam } from '../interfaces/team'
import { createTeam } from '../services/mutations/createTeam'
import { updateTeam } from '../services/mutations/updateTeam'

interface Props {
	data: InputTeam
	teamId?: string
}
const useHandleSubmit = () => {
	const router = useRouter()
	const handleSubmitTeam = async ({ data, teamId }: Props) => {
		// muestra el toast de creando el equipo
		const team_members = !Array.isArray(data.team_members)
			? data.team_members?.split(',')
			: data.team_members

		const dataTeam = { ...data, team_members }

		if (teamId) {
			toast.promise(updateTeam(dataTeam, teamId), {
				success(response) {
					return response?.message
				},
			})
		} else {
			toast.promise(createTeam(dataTeam), {
				success: (response) => {
					return response?.message
				},
			})
		}

		router.push('/teams')
	}
	return {
		handleSubmitTeam,
	}
}

export default useHandleSubmit
