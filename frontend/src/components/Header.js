import React from 'react'
import { Navbar, Container, Nav} from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import { MDBNavbarBrand } from 'mdb-react-ui-kit';
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../actions/userActions'
import { NavDropdown } from 'react-bootstrap'






const Header = () => {
    const dispatch = useDispatch()
    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin

    const logoutHandler = () => {
        dispatch(logout())
    }
    return (
        
        <Navbar expand="lg" collapseOnSelect
        style={{backgroundColor: '#94F29F'}}>
        <Container >
            <div className="mx-auto" >
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse  id="basic-navbar-nav">
                <NavLink className="Nav_link" to="/">Acceuil</NavLink>
                <NavLink className="Nav_link" to="/gear">Catalogue</NavLink>
                <MDBNavbarBrand href='#'>
                    <img
                    src='../../images/LMS.png'
                    height='75px'
                    alt=''
                    loading='lazy'
                    />
                </MDBNavbarBrand>
                <NavLink className="Nav_link" to="/about">A Propos</NavLink>
                <NavLink className="Nav_link" to="/contact">Contact</NavLink>
                { !userInfo ? (
                    <NavLink className="Nav_link" to="/login">Se connecter</NavLink>
                ) : (
                        <NavDropdown title={userInfo.name} id='username'>
                            <Nav.Link className="Nav_link" style={{ display: "block"}}>
                                <NavDropdown.Item>Profil</NavDropdown.Item>
                            </Nav.Link>
                            <Nav.Link className="Nav_link" style={{ display: "block"}}>
                                <NavDropdown.Item onClick={logoutHandler}>Déconnexion</NavDropdown.Item>
                            </Nav.Link>
                        </NavDropdown>
                )}
                
            </Navbar.Collapse>
            </div>
            
        </Container>
        </Navbar>
    )
}

export default Header