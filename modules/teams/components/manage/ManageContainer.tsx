import TeamForm from '@/modules/teams/components/manage/TeamForm'
import { getOneTeam } from '@/modules/teams/services/query/getOneTeam'
import { getAllUsers } from '@/services/users/user.service'
import { notFound } from 'next/navigation'

interface Props {
	id?: string
}

const ManageContainer = async ({ id }: Props) => {
	const userData = await getAllUsers()

	/**
	 *  Si el id existe se obtiene el equipo correspondiente,
	 * si el id existe pero el equipo no existe se redirecciona a 404
	 */
	let team = undefined

	if (id) {
		team = await getOneTeam(id)
		if (!team) {
			notFound()
		}
	}

	return (
		<main className="mt-10 mx-auto max-w-md">
			<TeamForm userData={userData} teamData={team} />
		</main>
	)
}

export default ManageContainer
