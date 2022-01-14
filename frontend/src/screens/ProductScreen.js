import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { MDBBreadcrumb, MDBBreadcrumbItem } from 'mdb-react-ui-kit'
import Description from '../components/Description';
import { listProductDetails } from '../actions/productActions';
import { useParams } from 'react-router-dom';
import Loader from '../components/Loader';
import Message from '../components/Message';








const ProductScreen = () => {
    const dispatch = useDispatch()
    const params = useParams()
    
    const productDetails = useSelector((state) => state.productDetails)
    const { loading, error, product } = productDetails

   useEffect(() => {
       dispatch(listProductDetails(params.id))
   }, [dispatch, params])

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
                        <Col xs="12" sm="12" md="2" lg="2" xl="2">1</Col>
                        <Col xs="12" sm="12" md="2" lg="2" xl="2">1</Col>
                        <Col xs="12" sm="12" md="2" lg="2" xl="2">1</Col>
                        <Col xs="12" sm="12" md="2" lg="2" xl="2">1</Col>
                        <Col xs="12" sm="12" md="2" lg="2" xl="2">1</Col>
                        <Col xs="12" sm="12" md="2" lg="2" xl="2">1</Col>
                        <Col xs="12" sm="12" md="2" lg="2" xl="2">1</Col>
                        <Col xs="12" sm="12" md="2" lg="2" xl="2">1</Col>
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
