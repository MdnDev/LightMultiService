import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { MDBBreadcrumb, MDBBreadcrumbItem } from 'mdb-react-ui-kit'
import Description from '../components/Description';
import { listProductDetails } from '../actions/productActions';
import { useParams } from 'react-router-dom';
import Loader from '../components/Loader';
import Message from '../components/Message';
import Accessory from '../components/Accessory';








const ProductScreen = () => {
    const dispatch = useDispatch()
    const params = useParams()
    
    const productDetails = useSelector((state) => state.productDetails)
    const { loading, error, product } = productDetails

   useEffect(() => {
       dispatch(listProductDetails(params.id))
   }, [dispatch, params])

   const [accessories, setAccessories] = useState([])

    useEffect(() => {
        const fetchAccessories = async () => {
            const { data } = await axios.get('/api/accessories')

            setAccessories(data)
        }
        fetchAccessories()
    }, [])

    return (
        <Container className="py-5">
            <Row style={{border: "1px solid blue"}} >
                <Col style={{border: "1px solid blue"}} xs="12" sm="12" md="12" lg="6" xl="6">
                    <MDBBreadcrumb className="mx-auto">
                        <MDBBreadcrumbItem>Element cliqué</MDBBreadcrumbItem>
                        <MDBBreadcrumbItem>Element cliqué</MDBBreadcrumbItem>
                        <MDBBreadcrumbItem>Element cliqué</MDBBreadcrumbItem>
                    </MDBBreadcrumb>
                    {loading ? ( <Loader />) : error ? ( <Message variant="danger">{error}</Message> ) : (
                        <Image src={product.image} alt={product.name} fluid/>   
                    )}
                    <Row style={{border: "1px solid blue"}}>
                    {accessories.map(accessory => (
                        <Col key={accessory._id} sm={12} md={12} lg={4} xl={3}>
                        <Accessory accessory={accessory} style={{ width: '100%'}}/>
                        </Col>
                    ))}
                    </Row>
                 </Col>
                

                <Col style={{border: "1px solid blue"}} xs="12" sm="12" md="12" lg="6" xl="6">
                    <h3 className="mb-3">{product.name}</h3>
                    <Description />
                    <div className="d-flex my-5">
                        <h5 className="mt-1">Catégories:</h5>
                        <div className="d-flex">
                            <p>Cat1, </p>
                            <p>Cat1, </p>
                            <p>Cat1</p>
                        </div>
                    </div>
                </Col>
            </Row>

        </Container>
    )
}

export default ProductScreen
