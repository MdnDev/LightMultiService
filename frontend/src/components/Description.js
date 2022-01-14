import React, { useState } from 'react'
import { Collapse, Button } from 'react-bootstrap'

const Description = () => {
    const [open, setOpen] = useState(false);
    
    return (
        <>
            <Button
                onClick={() => setOpen(!open)}
                aria-controls="example-collapse-text"
                aria-expanded={open}
                variant='outline-dark'
            >
            click
            </Button>
            <Collapse in={open}>
                <div className="py-3" id="example-collapse-text">
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                labore wes anderson cred nesciunt sapiente ea proident.
                </div>
            </Collapse>
        </>
    )
}

export default Description
