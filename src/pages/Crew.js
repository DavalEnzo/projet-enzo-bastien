import SpaceXNavbar from '../components/SpaceXNavbar'
import CrewCard from '../components/Crew/CrewCard'
import { useParams } from 'react-router-dom'
import CrewDetails from '../components/Crew/CrewDetails'

export default function Crew() {
    const { id } = useParams()

    if (!id) {
        return (
            <>
                <SpaceXNavbar />
                <CrewCard />
            </>
        )
    } else {
        return (
            <>
                <SpaceXNavbar />
                <CrewDetails id={id} />
            </>
        )
    }
}
