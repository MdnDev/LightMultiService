import axios from 'axios';
import React , { useState, useEffect } from 'react';
import { Dropdown } from 'react-bootstrap'


const NavBar = () => {
    const [categories, setCategories] = useState([])
    const [subCategories, setSubCategories] = useState([])
    

    useEffect(() => {
       const fetchCategories = async () => {
           const { data } = await axios.get('/api/categories')

           setCategories(data)
       }

       fetchCategories()
    }, [])

    useEffect(() => {
        const fetchSubCategories = async () => {
            const { data } = await axios.get('/api/categories')
 
            setSubCategories(data)
        }
 
        fetchSubCategories()
     }, [])

    return (
        <div>
        {categories.map(category => (
        <Dropdown key={category._id} className="py-1">
            <Dropdown.Toggle variant="dark" id="dropdown-basic" style={{width: '100%'}}>
                {category.name}
            </Dropdown.Toggle>

            <Dropdown.Menu>
                {subCategories.map(article => (
                    <Dropdown.Item href="#/action-1">{article.name}</Dropdown.Item>
                ))}
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
