import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { MDBRow, MDBCol, MDBContainer, MDBBtn, MDBBreadcrumb, MDBBreadcrumbItem } from "mdb-react-ui-kit";
import NavBar from '../components/NavBar';
import Product from '../components/Product';
import Footer from '../components/Footer';


const GearScreen = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        const fetchProducts = async () => {
            const { data } = await axios.get('/api/products')

            setProducts(data)
        }
        fetchProducts()
    }, [])

    return (
        < >
            <h1 className="py-3">Famille d'article</h1>
            <MDBContainer>
                
                <MDBRow>
                    <MDBCol>
                        <MDBBreadcrumb className="pt-1">
                            <MDBBreadcrumbItem>
                                <p>Element 1</p>
                            </MDBBreadcrumbItem>
                            <MDBBreadcrumbItem>
                                <p>Element 2</p>
                            </MDBBreadcrumbItem>
                            <MDBBreadcrumbItem>
                                <p>Element 3</p>
                            </MDBBreadcrumbItem>
                        </MDBBreadcrumb>
                    </MDBCol>
                    
                </MDBRow>
                    
                <MDBRow className="py-4">
                    <MDBCol  xs="12" sm="12" md="9" lg="9" xl="9">
                    <MDBRow >
                    {products.map(product => (
                        <MDBCol key={product._id} sm={12} md={12} lg={4} xl={3}>
                        <Product product={product} style={{ width: '100%'}}/>
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
            
        </>
    )
}

export default GearScreen
