import React from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardImage, MDBCol } from 'mdb-react-ui-kit';

const Products = ({ product }) => {
    return (
        <div >
            <MDBCol className="py-2">
            <MDBCard style={{ width: '18rem' }}>
                <MDBCardImage src={product.image} alt='...' position='top' />
                <MDBCardBody>
                <MDBCardTitle>{product.name}</MDBCardTitle>
                </MDBCardBody>
            </MDBCard>
            </MDBCol>
            
        </div>
    )
}

export default Products
