import React from 'react'
import { Carousel, Image } from 'react-bootstrap'



const FooterCarousel = () => {
    
    return (
            <Carousel fade pause="hover" style={{ textAlign: 'center', color: 'snow', width: '100%' }}>
                <Carousel.Item>
                    <Image className="d-block w-100" style={{height: '100%', width: '100%', borderRadius: '0%'}}src="../../images/guyane1.jpg" alt="paysage guyane" fluid/>
                </Carousel.Item>

                <Carousel.Item>
                    <Image 
                    className="d-block w-100" 
                    style={{height: '100%', width: '100%', borderRadius: '0%'}}
                    src="../../images/guyane2.jpg" alt="paysage guyane" fluid/>
                </Carousel.Item>

                <Carousel.Item>
                    <Image 
                    className="d-block w-100" 
                    style={{height: '100%', width: '100%', borderRadius: '0%'}}
                    src="../../images/guyane3.jpg" alt="paysage guyane" fluid/>
                </Carousel.Item>

                <Carousel.Item>
                    <Image 
                    className="d-block w-100" 
                    style={{height: '100%', width: '100%', borderRadius: '0%'}}
                    src="../../images/guyane4.jpg" alt="paysage guyane" fluid/>
                </Carousel.Item>

                <Carousel.Item>
                    <Image 
                    className="d-block w-100" 
                    style={{height: '100%', width: '100%', borderRadius: '0%'}}
                    src="../../images/guyane5.jpg" alt="paysage guyane" fluid/>
                </Carousel.Item>
            </Carousel>
        )
}

export default FooterCarousel