import axios from 'axios';
import React , { useState, useEffect } from 'react';
import { Dropdown } from 'react-bootstrap'
import { listProductCategories, listProducts } from '../actions/productActions';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Message from '../components/Message'
import Loader from '../components/Loader'
import { Link } from 'react-router-dom';


const NavBar = () => {
    const {category = 'all' } = useParams()
    const dispatch = useDispatch()
    const productCategoryList =  useSelector((state) => state.productCategoryList)
    const { loading:loadingCategories, errorCategories, categories } = productCategoryList

    useEffect(() => {
        dispatch(listProductCategories({ 
            category: category !== 'all' ? category: ''
        }))
    }, [dispatch, category])

    const getFilterUrl = (filter) => {
        const filterCategory = filter.category || category;
        return `/search/category/${filterCategory}`;
      };

    

    return (
        <div>
            {categories.map(category => (
            <Dropdown key={category._id} className="py-1">
                <Dropdown.Toggle variant="dark" id="dropdown-basic" style={{width: '100%'}}>
                    {category.name}
                </Dropdown.Toggle>

                

            </Dropdown>
            ))}

            <div>
                {loadingCategories ? (
                <Loader></Loader>
                ) : errorCategories ? (
                <Message variant="danger">{errorCategories}</Message>
                ) : (
                <ul>
                    <li>
                    <Link
                        className={'all' === category ? 'active' : ''}
                        to={getFilterUrl({ category: 'all' })}
                    >
                        Any
                    </Link>
                    </li>
                    {categories.map((c) => (
                    <li key={c}>
                        <Link
                        className={c === category ? 'active' : ''}
                        to={getFilterUrl({category:c})}
                        >
                        {c}
                        </Link>
                    </li>
                    ))}
                </ul>
                )}
            </div>
        </div>
    )
}


export default NavBar
