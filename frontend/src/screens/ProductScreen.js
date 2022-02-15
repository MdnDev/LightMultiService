import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row, Col, Image, Button, Collapse } from 'react-bootstrap';
import { listProductDetails } from '../actions/productActions';
import { Link, useParams } from 'react-router-dom';
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

   const [products, setProducts] = useState([])
   

    useEffect(() => {
        const fetchProducts = async () => {
            const { data } = await axios.get('/api/products')

            setProducts(data)
        }
        fetchProducts()
    }, [])

    const [open, setOpen] = useState(false);

    

    return (
        <Container className="py-5">
            <Link to='/gear' className='btn btn-light my-3'>
                Retour
            </Link>
            <Row >
                <Col xs="12" sm="12" md="12" lg="6" xl="6">
                   
                    {loading ? ( <Loader />) : error ? ( <Message variant="danger">{error}</Message> ) : (
                        <div>
                           <Image src={product.image} alt={product.name} fluid/>
                        </div>

                    )}
                    {loading ? ( <Loader />) : error ? ( <Message variant="danger">{error}</Message> ) : (
                    <Row className="py-3">
                        <h5 className="py-2">Accessoires fréquemment utilisés avec {product.name}</h5>
                        <Col sm={12} md={12} lg={4} xl={3}>
                            <Image src={product.accessoryImage} style={{width: '100%'}}/>
                            <h6 className="my-2">{product.accessoryName}</h6>
                        </Col>

                        <Col sm={12} md={12} lg={4} xl={3}>
                            <Image src={product.accessoryImage2} style={{width: '100%'}}/>
                            <h6 className="my-2">{product.accessoryName2}</h6>
                        </Col>

                        <Col sm={12} md={12} lg={4} xl={3}>
                            <Image src={product.accessoryImage3} style={{width: '100%'}}/>
                            <h6 className="my-2">{product.accessoryName3}</h6>
                        </Col>

                        <Col sm={12} md={12} lg={4} xl={3}>
                            <Image src={product.accessoryImage4} style={{width: '100%'}}/>
                            <h6 className="my-2">{product.accessoryName4}</h6>
                        </Col>

                        <Col sm={12} md={12} lg={4} xl={3}>
                            <Image src={product.accessoryImage5} style={{width: '100%'}}/>
                            <h6 className="my-2">{product.accessoryName5}</h6>
                        </Col>

                        
                    </Row>
                    )}
                    
                 </Col>
                

                <Col xs="12" sm="12" md="12" lg="6" xl="6">
                    <h3 className="mb-3">{product.name}</h3>
                    <Button
                        onClick={() => setOpen(!open)}
                        aria-controls="example-collapse-text"
                        aria-expanded={open}
                        variant='outline-dark'>
                        click
                    </Button>
                    <Collapse in={open}>
                        <p>{product.description}</p>
                    </Collapse>
                    <div className="d-flex my-5">
                        <h5 className="mt-1">Catégories:</h5>
                        <div className="d-flex">
                            {product.category}
                        </div>
                    </div>
                </Col>
            </Row>

        </Container>
    )
}

export default ProductScreen
