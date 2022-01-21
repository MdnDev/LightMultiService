import React from 'react';
import { MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle } from 'mdb-react-ui-kit'

const Accessory = ({ accessory }) => {
    return (
        <MDBCard className="mx-auto my-2" style={{ width: '100%'}}>
            <a href={`/accessories/${accessory._id}`}>
                <MDBCardImage src={accessory.image} alt='...' position='top' style={{ width: '100%'}}/>
            </a>
            <MDBCardBody>
                <MDBCardTitle><h6>{accessory.name}</h6></MDBCardTitle>
                </MDBCardBody>
                
        </MDBCard>
    )
}

export default Accessory