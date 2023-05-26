import SpaceXNavbar from '../components/SpaceXNavbar'
import React from 'react'
import RocketList from '../components/Rocket/RocketList'
import { Container } from 'react-bootstrap'
export default function Rocket() {
    return (
        <>
            <SpaceXNavbar></SpaceXNavbar>
            <Container className='text-center'>
                    <h1>Listes des fusées</h1>
                <RocketList></RocketList>
            </Container>
        </>
    )
}
