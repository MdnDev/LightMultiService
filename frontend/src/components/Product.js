import React from 'react';
import { MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle } from 'mdb-react-ui-kit'

const Product = ({ product }) => {
    return (
        <MDBCard className="mx-auto my-2" style={{ width: '100%'}}>
            <a href={`/products/${product._id}`}>
                <MDBCardImage src={product.image} alt='...' position='top' style={{ width: '100%'}}/>
            </a>
            <MDBCardBody>
                <MDBCardTitle>{product.name}</MDBCardTitle>
                </MDBCardBody>
                
        </MDBCard>
    )
}

export default Product
