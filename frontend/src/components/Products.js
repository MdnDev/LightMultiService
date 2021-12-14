import React from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardImage, MDBCol } from 'mdb-react-ui-kit';

const Products = () => {
    return (
        <div >
            <MDBCol className="py-2">
            <MDBCard style={{ width: '13rem' }}>
                <MDBCardImage src='../../images/hmi1.jpg' alt='...' position='top' />
                <MDBCardBody>
                <MDBCardTitle>Card title</MDBCardTitle>
                </MDBCardBody>
            </MDBCard>
            </MDBCol>
            
        </div>
    )
}

export default Products
