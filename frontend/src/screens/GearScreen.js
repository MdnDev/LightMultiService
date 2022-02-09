import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { MDBRow, MDBCol, MDBContainer, MDBBtn, MDBBreadcrumb, MDBBreadcrumbItem } from "mdb-react-ui-kit";
import NavBar from '../components/NavBar';
import Product from '../components/Product';
import SearchBox from '../components/SearchBox';
import { listProductCategories } from '../actions/productActions';
import { useDispatch } from 'react-redux';
;








const GearScreen = () => {
    const [products, setProducts] = useState([])

    const dispatch = useDispatch()

    useEffect(() => {
        const fetchProducts = async () => {
            const { data } = await axios.get('/api/products')

            setProducts(data)
        }
        fetchProducts()
    }, [])

    useEffect(() => {
        dispatch(listProductCategories())
    }, [dispatch])

    return (
        < >
            <h1 className="py-3">Famille d'article</h1>
            <MDBContainer>
                
                <MDBRow>
                        <MDBBreadcrumb className="pt-1">
                            <MDBBreadcrumbItem>
                                Element 1
                            </MDBBreadcrumbItem>
                            <MDBBreadcrumbItem>
                                Element 2
                            </MDBBreadcrumbItem>
                            <MDBBreadcrumbItem>
                                Element 3
                            </MDBBreadcrumbItem>
                        </MDBBreadcrumb>
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
                            <SearchBox/>
                            
                    </MDBCol>

                </MDBRow>
                        
            </MDBContainer>
            
        </>
    )
}

export default GearScreen
