import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Carousel, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Clients from '../components/Clients';
import Products from '../components/Products';
import Message from '../components/Message'
import Loader from '../components/Loader'
import { listProducts } from '../actions/productActions';
import ProductCarousel from '../components/ProductCarousel';




const HomeScreen = () => {
    const dispatch = useDispatch()

    const productList = useSelector((state) => state.productList)
    const { loading, error, products } = productList
    
    useEffect(() => {
        dispatch(listProducts({}))
    }, [dispatch])

    
    const [clients, setClients] = useState([])

    useEffect(() => {
        const fetchClients = async () => {
            const { data } = await axios.get('/api/clients')

            setClients(data)
        }
        fetchClients()
    }, [])

    
    return (
        < div className=' px-0' >
            <Row variant="bg-dark">
                <div className="d-flex">
                <h1 style={{ textAlign: 'center', color: "green"}}>LIGHT</h1>
                <h1 style={{ textAlign: 'center'}} className="px-2">MULTISERVICE</h1>
                </div>
                
            </Row>
            <Row className="my-5" style={{ textAlign: 'center', backgroundColor: 'snow'}}>
                <Carousel fade style={{width: '100%'}}>
                    <Carousel.Item>
                        <img
                        style={{ height: '100%', width: '100%', borderRadius: '0%'}}
                        className="d-block w-100"
                        src="../../images/Materiel9.jpg"
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        <h3>Third slide label</h3>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                        style={{ height: '100%', width: '100%', borderRadius: '0%'}}
                        className="d-block w-100"
                        src="../../images/protPartner1.jpg"
                        alt="Second slide"
                        />

                        <Carousel.Caption>
                        <h3>Third slide label</h3>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                        style={{ height: '100%', width: '100%', borderRadius: '0%'}}
                        className="d-block w-100"
                        src="../../images/protPartner2.jpg"
                        alt="Third slide"
                        />

                        <Carousel.Caption>
                        <h3>Third slide label</h3>
                        
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                        style={{height: '100%', width: '100%', borderRadius: '0%'}}
                        className="d-block w-100"
                        src="../../images/protPartner3.jpg"
                        alt="Third slide"
                        />

                        <Carousel.Caption>
                        <h3>Third slide label</h3>
                        
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                        style={{height: '100%', width: '100%', borderRadius: '0%'}}
                        className="d-block w-100"
                        src="../../images/protPartner4.jpg"
                        alt="Third slide"
                        />

                        <Carousel.Caption>
                        <h3>Third slide label</h3>
                        
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Row>

            
            <Row className="py-5">
                <div className="d-flex">
                    <h1 style={{ textAlign: 'center', color: 'green'}}>NOTRE</h1>
                    <h1 style={{ textAlign: 'center', color: 'black'}} className="px-2">MATERIEL</h1>
                </div>
            </Row>

            <ProductCarousel/>

            <div className="text-center py-4">
                    <Link to='/gear' className='btn btn-success my-3'>
                        En voir plus
                    </Link>
            </div>
            

            <Row className="py-5">
            <div className="d-flex">
                <h1 style={{ textAlign: 'center', color: 'green'}}>NOS</h1>
                <h1 style={{ textAlign: 'center', color: 'black'}} className="px-2">CLIENTS</h1>
                </div>
            </Row>

            <Row>
            {clients.map(client => (
                        <Col key={client._id} sm={12} md={12} lg={3} xl={3}>
                            <Clients client={client} style={{ width: '100%'}}/>
                        </Col>
                    ))}
                
            </Row>

            <div className="py-4 text-center">
                <Button variant="success">
                    PRENDRE CONTACT
                </Button>
            </div>

            
        </ div>
    )
}

export default HomeScreen