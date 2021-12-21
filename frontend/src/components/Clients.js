import React from 'react'
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardImage, MDBCol } from 'mdb-react-ui-kit';

const Clients = ({ client }) => {
    return (
        <div >
            <MDBCol className="py-2">
            <MDBCard style={{ width: '18rem' }}>
                <MDBCardImage src={client.image} alt='...' position='top' />
                <MDBCardBody>
                <MDBCardTitle>{client.name}</MDBCardTitle>
                </MDBCardBody>
            </MDBCard>
            </MDBCol>
            
        </div>
    )
}

export default Clients
