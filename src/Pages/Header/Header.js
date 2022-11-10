import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Authcontext } from '../Authprovider/Authprovider';
import { FaUserGraduate } from "react-icons/fa";
import './Header.css';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';


const Header = () => {
    const { user, logout } = useContext(Authcontext);


    const handlelogout = () => {
        logout()
            .then(() => { })
            .catch(error => console.error(error))
    }

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home" className='me-5'>Sweet Delights</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto ms-5">
                        <Nav.Link href='/'>Home</Nav.Link>
                        <Nav.Link href='blog'>Blog</Nav.Link>
                        {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown> */}
                    </Nav>
                    <Nav>
                        <Nav.Link href='/'>


                            {
                                user?.uid ?
                                    <>
                                        {/* <button >LogOut</button>
                                        <Button onClick={handlelogout} variant="danger">LogOut</Button> */}
                                        <Link to='/reviews' className='me-3'>
                                            <Button variant="warning">My reviews</Button>
                                        </Link>
                                        <Link to='/addservice' className='me-3'>
                                            <Button variant="warning">Add Services</Button>
                                        </Link>

                                        <Link className='me-3'>
                                            <Button onClick={handlelogout} variant="danger">LogOut</Button>
                                        </Link>


                                    </>
                                    :
                                    <>
                                        <Link to='/register' className='me-3'>
                                            <Button variant="warning">Register</Button>
                                        </Link>
                                        <Link to='login'>
                                            <Button variant="danger">LogIn</Button>
                                        </Link>
                                    </>
                            }
                        </Nav.Link>
                        <FaUserGraduate></FaUserGraduate>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;