import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CarWidget from '../CarWidget/CarWidget';
import Logo from '../Logo/Logo'
import './NavBar'

function NavBar() {
    return (
        <>
            <Navbar className='navbar' bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home"><Logo/></Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Inicio</Nav.Link>
                        <Nav.Link href="#features">Nosotros</Nav.Link>
                        <Nav.Link href="#productos">Productos</Nav.Link>
                        <Nav.Link href="#Contacto">Contacto</Nav.Link>
                        <Nav.Link className='cart' href="#Cart"><CarWidget/></Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default NavBar;