import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

export default function SpaceXNavbar() {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand className="mx-3 mb-2 nav-logo" href="/"><img className="w-100" src="https://logodownload.org/wp-content/uploads/2021/02/spacex-logo-1.png" alt="Logo SpaceX" /></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/">Accueil</Nav.Link>
                    <Nav.Link href="/equipage">Equipage</Nav.Link>
                    <Nav.Link href="/historique">Historique</Nav.Link>
                    <Nav.Link href="/about">A propose de SpaceX</Nav.Link>
                    <Nav.Link href="/rockets">Fusées</Nav.Link>
                    <Nav.Link href="/quizz">Quizz</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
