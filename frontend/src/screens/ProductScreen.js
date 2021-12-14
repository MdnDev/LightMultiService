import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { MDBBreadcrumb, MDBBreadcrumbItem } from 'mdb-react-ui-kit'
import Product from '../components/Product';
import Description from '../components/Description';



const ProductScreen = () => {
    return (
        <Container className="py-5">
            <Row >
                <Col xs="12" sm="12" md="12" lg="6" xl="6">
                    <MDBBreadcrumb className="mx-auto">
                        <MDBBreadcrumbItem>Element cliqué</MDBBreadcrumbItem>
                        <MDBBreadcrumbItem>Element cliqué</MDBBreadcrumbItem>
                        <MDBBreadcrumbItem>Element cliqué</MDBBreadcrumbItem>
                    </MDBBreadcrumb>
                    <Product />
                </Col>
                <Col xs="12" sm="12" md="12" lg="6" xl="6">
                    <h1 className="mb-3">NOM DE L'ARTICLE</h1>
                    <Description />
                    <div className="d-flex my-5">
                        <h5 className="mt-1">Catégories:</h5>
                        <div className="d-flex">
                            <a href="#">Cat1, </a>
                            <a href="#">Cat1, </a>
                            <a href="#">Cat1</a>
                        </div>
                    </div>
                </Col>
            </Row>

        </Container>
    )
}

export default ProductScreen
