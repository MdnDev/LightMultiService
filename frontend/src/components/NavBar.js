import axios from 'axios';
import React , { useState, useEffect } from 'react';
import { Dropdown } from 'react-bootstrap'


const NavBar = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
       const fetchCategories = async () => {
           const { data } = await axios.get('/api/categories')

           setCategories(data)
       }

       fetchCategories()
    }, [])
    return (
        <div>
        {categories.map(category => (
        <Dropdown key={category._id} className="py-1">
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                {category.name}
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
