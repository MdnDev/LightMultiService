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
                {subCategories.map(subCategory => (
                    <Dropdown.Item href="#/action-1">{subCategory.name}</Dropdown.Item>
                ))}
               
            </Dropdown.Menu>

        </Dropdown>
        ))}
        </div>
    )
}


export default NavBar
