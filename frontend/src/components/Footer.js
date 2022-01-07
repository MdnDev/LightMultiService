import React from 'react'
import { MDBFooter, MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import { Nav} from 'react-bootstrap';
import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../actions/userActions'
import { NavDropdown } from 'react-bootstrap'


const Footer = () => {
    const dispatch = useDispatch()
    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin

    const logoutHandler = () => {
        dispatch(logout())
    }
    return (
        <MDBFooter style={{backgroundColor: '#94F29F'}} className='text-center text-lg-left'>
        <MDBContainer className='p-4'>
          <MDBRow>
            <MDBCol lg='6' md='12' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Footer Content</h5>
  
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis molestias. Fugiat
                pariatur maxime quis culpa corporis vitae repudiandae aliquam voluptatem veniam, est atque
                cumque eum delectus sint!
              </p>
            </MDBCol>
  
            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Links</h5>
  
              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-dark'>
                    Link 1
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-dark'>
                    Link 2
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-dark'>
                    Link 3
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-dark'>
                    Link 4
                  </a>
                </li>
              </ul>
            </MDBCol>
  
            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase mb-0'>Links</h5>
  
              <ul className='list-unstyled'>
                <li>
                  <a href='#!' className='text-dark'>
                    Link 1
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-dark'>
                    Link 2
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-dark'>
                    Link 3
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-dark'>
                    Link 4
                  </a>
                </li>
              </ul>
            </MDBCol>
            
          </MDBRow>
        </MDBContainer>
  
        <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
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
                                  <>Articles</>
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
