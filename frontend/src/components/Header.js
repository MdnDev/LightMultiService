import React from 'react'
import { Navbar, Container} from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import { MDBNavbarBrand } from 'mdb-react-ui-kit';






const Header = () => {
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
            </Navbar.Collapse>
            </div>
            
        </Container>
        </Navbar>
    )
}

export default Header
