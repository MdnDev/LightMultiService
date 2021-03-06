import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Carousel, Image } from 'react-bootstrap'
import Loader from './Loader'
import Message from './Message'
import { listRandomProducts } from '../actions/productActions'
import { useDispatch, useSelector } from 'react-redux'

const ProductCarousel = () => {
    const dispatch = useDispatch()

    const productRandom = useSelector((state) => state.productRandom)
    const { loading, error, products } = productRandom

    useEffect(() => {
        dispatch(listRandomProducts())
    }, [dispatch])
    return loading ? <Loader /> : error ? 
        <Message variant="danger">{error}</Message> : (
            <Carousel pause="hover" className= 'bg-dark' style={{ textAlign: 'center'}}>
                {products.map(product => (
                    <Carousel.Item key={product._id}>
                        <Link to={`/product/${product._id}`}>
                            <Image src={product.image} alt={product.name} fluid/>
                            <Carousel.Caption className='carousel-caption'>
                                <h2>{product.name}</h2>
                            </Carousel.Caption>
                        </Link>
                    </Carousel.Item>
                ))}
            </Carousel>
        )
}

export default ProductCarousel
