import React from 'react'
import { Carousel, Image } from 'react-bootstrap'

const ProductCarousel = () => {
    return (
        <Carousel pause='hover' variant="dark" sm={12} md={6} lg={4} xl={3}>
            <Carousel.Item>
                <Image src="../../images/protProduct1.jpg" fluid/>
                <Carousel.Caption>
                    <h4>Basic Carousel Caption</h4>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <Image src="../../images/protProduct2.jpg" fluid/>
                <Carousel.Caption>
                    <h4>Basic Carousel Caption</h4>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <Image src="../../images/protProduct3.jpg" fluid/>
                <Carousel.Caption>
                    <h4>Basic Carousel Caption</h4>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <Image src="../../images/protProduct4.jpg" fluid/>
                <Carousel.Caption>
                    <h4>Basic Carousel Caption</h4>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <Image src="../../images/protProduct2.jpg" fluid/>
                <Carousel.Caption>
                    <h4>Basic Carousel Caption</h4>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default ProductCarousel
