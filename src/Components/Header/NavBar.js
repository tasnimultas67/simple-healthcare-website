import React from 'react';
import { Container, Nav, Navbar,} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import './NavBar.css';
import useAuth from '../Hooks/useAuth';


const NavBar = () => {

    const {user, logout} = useAuth()

    return (
        <>
            <Navbar collapseOnSelect expand="lg" className='sticky-top navbar-style shadow w-100'>
            <Container>
                <Link className=' nav-logo fs-2 text-uppercase' to='/home'>Medica</Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="m-auto text-center">
                        <Link className='nav-link fw-bold' to="/home">Home</Link>
                        <Link className='nav-link fw-bold' to="/services">Services</Link>
                        <Link className='nav-link fw-bold' to="/news">News</Link>
                        <Link className='nav-link fw-bold' to="/about-us">About Us</Link>
                        <Link className='nav-link fw-bold' to="/contact">Contact</Link>
                    </Nav>
                    {user?.displayName &&<span className='text-white text-center'><small className='text-primary fw-bold'>Hello</small> <br /> <span className='fs-5 text-black'>{user.displayName}</span></span>}
                    {!user?.displayName && <span><Link className='nav-link ms-4' to='/register'><Button variant="primary">Register</Button></Link></span>}
                    {!user.displayName && <Link className='nav-link ms-4' to='/login'><Button variant="primary">Log In</Button></Link>}

                    {user?.displayName && <span><Link onClick={logout} className='nav-link ms-4' to='/login'><Button variant="primary">Log Out</Button></Link></span>}
                    

                </Navbar.Collapse>
            </Container>
            </Navbar>
        </>
    );
};

export default NavBar;