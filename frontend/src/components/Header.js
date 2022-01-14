import React from 'react'
import { Navbar, Container, Nav} from 'react-bootstrap';
import { Link, NavLink } from "react-router-dom";
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
            <div style={{border:"1px solid red"}} className="mx-auto" >
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse  id="basic-navbar-nav">
                <NavLink className="Nav_link" to="/"><h4>Acceuil</h4></NavLink>
                <NavLink className="Nav_link" to="/gear"><h4>Catalogue</h4></NavLink>
                <MDBNavbarBrand href='#'>
                    <img
                    src='../../images/LMS.png'
                    height='120px'
                    alt=''
                    loading='lazy'
                    />
                </MDBNavbarBrand>
                <NavLink className="Nav_link" to="/about"><h4>A Propos</h4></NavLink>
                <NavLink className="Nav_link" to="/contact"><h4>Contact</h4></NavLink>
                {userInfo ? (
                        <NavDropdown title={userInfo.name} id='username'>
                            <Link className="Nav_link" to="/profile" style={{ display: "block"}}>
                                <div>Profil</div>
                            </Link>
                            <Nav.Item>
                              <Link className="Nav_link" to="/admin/productlist" style={{ display: "block"}}>
                                  <div>Articles</div>
                              </Link>
                            </Nav.Item>
                            
                            <Nav.Link className="Nav_link" style={{ display: "block"}}>
                                <div onClick={logoutHandler}>Déconnexion</div>
                            </Nav.Link>
                        </NavDropdown>
                ) : <></>}
                
                
            </Navbar.Collapse>
            </div>
            
        </Container>
        </Navbar>
    )
}

export default Header