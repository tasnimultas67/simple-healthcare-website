import React from 'react';
import { Container, Nav, Navbar,} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import './NavBar.css';


const NavBar = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" className='sticky-top navbar-style shadow'>
            <Container>
                <Link className=' nav-logo fs-2 text-uppercase' to='/home'>Medica</Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="m-auto">
                        <Link className='nav-link fw-bold' to="/home">Home</Link>
                        <Link className='nav-link fw-bold' to="/services">Services</Link>
                        <Link className='nav-link fw-bold' to="/news">News</Link>
                        <Link className='nav-link fw-bold' to="/about-us">About Us</Link>
                        <Link className='nav-link fw-bold' to="/contact">Contact</Link>
                    </Nav>
                    <p className='text-white text-center'><small className='text-primary fw-bold'>Hello</small> <br /> <span className='fs-5 text-black'>Tasnimul Haque</span></p>
                    <Link className='nav-link ms-4' to='/login'><Button variant="primary">Login</Button></Link>

                </Navbar.Collapse>
            </Container>
            </Navbar>
        </>
    );
};

export default NavBar;