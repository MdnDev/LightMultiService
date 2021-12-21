import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Row, Col, Carousel, Button } from 'react-bootstrap';
import Clients from '../components/Clients';
import Products from '../components/Products';




const HomeScreen = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        const fetchProducts = async () => {
            const { data } = await axios.get('/api/products')

            setProducts(data)
        }
        fetchProducts()
    }, [])

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
            <Row className="my-5" style={{ textAlign: 'center'}}>
                <Carousel fade style={{width: '100%'}}>
                    <Carousel.Item>
                        <img
                        style={{height: '800px', width: '450px'}}
                        className="d-block w-100"
                        src="../../images/Materiel9.jpg"
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="../../images/protPartner1.jpg"
                        alt="Second slide"
                        />

                        <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="../../images/protPartner2.jpg"
                        alt="Third slide"
                        />

                        <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="../../images/protPartner3.jpg"
                        alt="Third slide"
                        />

                        <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="../../images/protPartner4.jpg"
                        alt="Third slide"
                        />

                        <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
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

            <Row >
                {products.map(product => (
                        <Col key={product._id} sm={12} md={12} lg={3} xl={3}>
                        <Products product={product} style={{ width: '100%'}}/>
                        </Col>
                    ))}
            </Row>

            <div className="text-center py-4">
                <Button variant="success">
                    EXPLORER
                </Button>
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
