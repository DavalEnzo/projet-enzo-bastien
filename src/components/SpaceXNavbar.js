import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

export default function SpaceXNavbar() {
    return (
        <Navbar style={{ marginLeft: '2%' }} bg='light' expand='lg'>
            <Navbar.Brand href='#home'>React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
                <Nav className='me-auto'>
                    <Nav.Link href='/'>Accueil</Nav.Link>
                    <Nav.Link href='/equipage'>Equipage</Nav.Link>
                    <Nav.Link href='/historique'>Historique</Nav.Link>
                    <Nav.Link href='/about'>A propose de SpaceX</Nav.Link>
                    <Nav.Link href='/rockets'>Fusées</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
