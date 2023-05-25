import { Container } from 'react-bootstrap'
import SpaceXNavbar from '../components/SpaceXNavbar'

export default function CrewList() {
    return (
        <>
            <SpaceXNavbar/>
            <Container>
                <div className="text-center">
                    <h1>Equipage</h1>
                    <p className="fs-2">Voici la liste des membres d'équipage de Dragon</p>
                </div>
            </Container>
        </>
    )
}
