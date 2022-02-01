import React, {useState, useEffect } from 'react';
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import { listCategoryDetails, updateCategory } from '../actions/categoryActions'
import { CATEGORY_UPDATE_RESET } from '../constants/categoryConstants'

const CategoryEditScreen = () => {
    const navigate = useNavigate()
    const params = useParams()
    const categoryId = params.id
    
    const [categoryName, setCategoryName] = useState('')
    const [subCategory, setSubCategory] = useState('')

    const dispatch = useDispatch()

    const categoryDetails = useSelector((state) => state.categoryDetails)
    const { loading, error, category } = categoryDetails

    

    const categoryUpdate = useSelector((state) => state.categoryUpdate)
    const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
    } = categoryUpdate

    useEffect(() => {
        if (successUpdate) {
          dispatch({ type: CATEGORY_UPDATE_RESET })
          navigate('/admin/categorylist')
        } else {
          if (!category.name || category._id !== categoryId) {
            dispatch(listCategoryDetails(categoryId))
          } else {
            setCategoryName(category.category)
            setSubCategory(category.subCategory)
            
          }
        }
      }, [dispatch, navigate, category, categoryId, successUpdate])

      const submitHandler = (e) => {
        e.preventDefault()
        dispatch(
          updateCategory({
            _id: categoryId,
            categoryName,
            subCategory,
            
          })
        )
      }


  return (
    <div>
      <Link to='/admin/categorylist' className='btn btn-light my-3'>
        RETOUR
      </Link>
      <FormContainer>
        <h1>Créer/Modifier une catégorie</h1>
        {loadingUpdate && <Loader />}
        {errorUpdate && <Message variant='danger'>{errorUpdate}</Message>}
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant='danger'>{error}</Message>
        ) : (
          <Form onSubmit={submitHandler}>
            <Form.Group controlId='category'>
              <Form.Label>Catégorie</Form.Label>
              <Form.Control
                type='category'
                placeholder='Catégorie'
                value={category}
                onChange={(e) => setCategoryName(e.target.value)}
              ></Form.Control>
            </Form.Group>

            

            <Form.Group controlId='subcategory'>
              <Form.Label>Sous-Catégorie</Form.Label>
              <Form.Control
                type='text'
                placeholder='sous-catégorie'
                value={subCategory}
                onChange={(e) => setSubCategory(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Button className="my-3" type='submit' variant='primary'>
              Valider
            </Button>
          </Form>
        )}
      </FormContainer>
        
  </div>
  )};

export default CategoryEditScreen;

