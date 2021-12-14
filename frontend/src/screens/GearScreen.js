import React from 'react'
import { MDBRow, MDBCol, MDBContainer, MDBBtn, MDBBreadcrumb, MDBBreadcrumbItem, MDBBtnGroup, MDBDropdown, MDBDropdownItem, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownLink } from "mdb-react-ui-kit";
import { Col, Card, Button, Row } from 'react-bootstrap'
import Products from '../components/Products';
import NavBar from '../components/NavBar';

const GearScreen = () => {
    return (
        <div >
            <h1 className="py-3">Famille d'article</h1>
            <MDBContainer>
                
                <MDBRow>
                    <MDBCol>
                        <MDBBreadcrumb className="pt-1">
                            <MDBBreadcrumbItem>
                                <a href='#'>Element 1</a>
                            </MDBBreadcrumbItem>
                            <MDBBreadcrumbItem>
                                <a href='#'>Element 2</a>
                            </MDBBreadcrumbItem>
                            <MDBBreadcrumbItem>
                                <a href='#'>Element 3</a>
                            </MDBBreadcrumbItem>
                        </MDBBreadcrumb>
                    </MDBCol>
                    
                </MDBRow>
                    
                <MDBRow className="py-4">
                    <MDBCol  xs="12" sm="12" md="9" lg="9" xl="9">
                    <MDBRow >
                    {Array.from({ length: 12 }).map((_, idx) => (
                        <MDBCol sm={12} md={12} lg={4} xl={3}>
                        <Products style={{ width: '100%'}}/>
                        </MDBCol>
                    ))}
                    </MDBRow>

            
                    </MDBCol>
                    

                    <MDBCol xs="12" sm="12" md="3" lg="3" xl="3">
                        <form className='d-flex input-group w-auto py-2'>
                            <input type='search' className='form-control' placeholder='Type query' aria-label='Search'/>
                            <MDBBtn color='outline-success'>Chercher</MDBBtn>
                        </form>
                        <NavBar/> 
                    </MDBCol>

                </MDBRow>
                        
            </MDBContainer>

        </div>
    )
}

export default GearScreen
