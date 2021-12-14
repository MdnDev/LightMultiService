import React from 'react';
import { MDBCard, MDBCardImage } from 'mdb-react-ui-kit'

const Product = () => {
    return (
        <MDBCard className="my-4 mx-auto" style={{ maxWidth: '22rem' }}>
                <MDBCardImage src='../../images/hmi1.jpg' alt='...' position='top' />
        </MDBCard>
    )
}

export default Product
