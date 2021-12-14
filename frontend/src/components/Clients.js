import React from 'react'
import { Card } from 'react-bootstrap'

const Clients = () => {
    return (
        <Card className="my-3 p-3 rounded">
            <Card.Img src="../../images/BMC2.jpg" />
            <Card.Body>
                <Card.Title>
                    Société Prototype
                </Card.Title>
            </Card.Body>
        </Card>
    )
}

export default Clients
