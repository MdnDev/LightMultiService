import React from 'react';
import { Dropdown } from 'react-bootstrap'


const NavBar = () => {
    return (
        <div>
        {Array.from({ length: 8 }).map((_, idx) => (
        <Dropdown className="py-1">
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                Dropdown Button
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
        ))}
        </div>
    )
}


export default NavBar
