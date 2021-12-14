import React from 'react'
import { Container, Row, Col, Carousel, Card, Button } from 'react-bootstrap';
import { MDBContainer } from 'mdb-react-ui-kit'
import Clients from '../components/Clients';



const HomeScreen = () => {
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
                        src="../../images/protPartner.jpg"
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

            <Row xs={1} md={2} className="g-4">
                {Array.from({ length: 4 }).map((_, idx) => (
                    <Col sm={12} md={6} lg={4} xl={3}>
                    <Card style={{ maxWidth: '22rem' }}>
                        <Card.Img className="mx-auto" style={{ maxWidth: '15rem' }} variant="top" src="../../images/protProduct1.jpg"/>
                        <Card.Body>
                        <Card.Title className="text-center py-4">Card title</Card.Title>
                        <div className="text-center">
                            <Button className="text-center my-2" variant="success">Go somewhere</Button>
                        </div>
                        </Card.Body>
                    </Card>
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
                <Col sm={12} md={6} lg={4} xl={3}>
                    <Clients></Clients>
                </Col>

                <Col sm={12} md={6} lg={4} xl={3}>
                    <Clients></Clients>
                </Col>

                <Col sm={12} md={6} lg={4} xl={3}>
                    <Clients></Clients>
                </Col>

                <Col sm={12} md={6} lg={4} xl={3}>
                    <Clients></Clients>
                </Col>

                <Col sm={12} md={6} lg={4} xl={3}>
                    <Clients></Clients>
                </Col>

                <Col sm={12} md={6} lg={4} xl={3}>
                    <Clients></Clients>
                </Col>
                
                <Col sm={12} md={6} lg={4} xl={3}>
                    <Clients></Clients>
                </Col>

                <Col sm={12} md={6} lg={4} xl={3}>
                    <Clients></Clients>
                </Col>
                
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
