import React from 'react'
import { MDBFooter, MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import { Nav } from 'react-bootstrap';
import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../actions/userActions'
import { NavDropdown } from 'react-bootstrap'
import FooterCarousel from './FooterCarousel';



const Footer = () => {
    const dispatch = useDispatch()
    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin

    const logoutHandler = () => {
        dispatch(logout())
    }
    return (
        <MDBFooter  className='bg-dark text-center text-lg-left'>
        <FooterCarousel/>
  
        <div className='text-center p-3' style={{ backgroundColor: 'honeydew' }}>
          &copy; {new Date().getFullYear()}{' '}
          <a className='text-dark' href='https://lightmultiservice.com/'>
            lightmultiservice.com
          </a>
          { !userInfo ? (
                    <NavLink className="Nav_link" to="/login">
                        <i className='fas fa-lock'></i>
                    </NavLink>
                ) : (
                        <NavDropdown title={userInfo.name} id='username'>
                            <Link className="Nav_link" to="/profile" style={{ display: "block"}}>
                                <NavDropdown.Item>Profil</NavDropdown.Item>
                            </Link>
                            
                            <Nav.Item>
                              <Link className="Nav_link" to="/admin/productlist" style={{ display: "block"}}>
                                  <div>Articles</div>
                              </Link>
                            </Nav.Item>
                            
                            <Nav.Link className="Nav_link" style={{ display: "block"}}>
                                <NavDropdown.Item onClick={logoutHandler}>Déconnexion</NavDropdown.Item>
                            </Nav.Link>
                        </NavDropdown>
                )}
          
        </div>
      </MDBFooter>

    )
}

export default Footer
