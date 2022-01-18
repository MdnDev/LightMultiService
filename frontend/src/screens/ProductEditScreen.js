import React, {useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import { listProductDetails, updateProduct } from '../actions/productActions'
import { PRODUCT_UPDATE_RESET } from '../constants/productConstants'

const ProductEditScreen = () => {
    const navigate = useNavigate()
    const params = useParams()
    

    const productId = params.id

    const [name, setName] = useState('')
    const [image, setImage] = useState('')
    const [brand, setBrand] = useState('')
    const [category, setCategory] = useState('')
    const [description, setDescription] = useState('')
    const [accessory, setAccessory] = useState('')
    const [uploading, setUploading] = useState(false)

    const dispatch = useDispatch()


    const productDetails = useSelector((state) => state.productDetails)
    const { loading, error, product } = productDetails
    

    const productUpdate = useSelector((state) => state.productUpdate)
    const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
    } = productUpdate

    useEffect(() => {
        if (successUpdate) {
          dispatch({ type: PRODUCT_UPDATE_RESET })
          navigate('/admin/productlist')
        } else {
          if (!product.name || product._id !== productId) {
            dispatch(listProductDetails(productId))
          } else {
            setName(product.name)
            setImage(product.image)
            setBrand(product.brand)
            setCategory(product.category)
            setDescription(product.description)
            setAccessory(product.accessory)
          }
        }
      }, [dispatch, navigate, product, productId, successUpdate])


      const uploadFileHandler = async (e) => {
        const file = e.target.files[0]
        const formData = new FormData()
        formData.append('image', file)
        setUploading(true)
    
        try {
          const config = {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          }
    
          const { data } = await axios.post('/api/upload', formData, config)
    
          setImage(data)
          setUploading(false)
        } catch (error) {
          console.error(error)
          setUploading(false)
        }
      }

      const submitHandler = (e) => {
        e.preventDefault()
        dispatch(
          updateProduct({
            _id: productId,
            name,
            image,
            brand,
            category,
            description,
            accessory,
          })
        )
      }

    return (
        <div>
          <Link to='/admin/productlist' className='btn btn-light my-3'>
                RETOUR
          </Link>
          <FormContainer>
            <h1>Ajouter/Modifier les produits</h1>
              {loadingUpdate && <Loader />}
              {errorUpdate && <Message variant='danger'>{errorUpdate}</Message>}
              {loading ? (
              <Loader />
              ) : error ? (
              <Message variant='danger'>{error}</Message>
              ) : (
              <Form onSubmit={submitHandler}>
                <Form.Group controlId='name'>
                  <Form.Label>Nom</Form.Label>
                  <Form.Control
                    type='name'
                    placeholder='Enter name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    ></Form.Control>
                </Form.Group>

                  <Form.Group controlId='brand'>
                    <Form.Label>Marque</Form.Label>
                    <Form.Control
                      type='text'
                      placeholder='Enter la marque'
                      value={brand}
                      onChange={(e) => setBrand(e.target.value)}
                    ></Form.Control>
                  </Form.Group>


                    <Form.Group controlId='category'>
                    <Form.Label>Categories</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='Enter category'
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    ></Form.Control>
                    </Form.Group>

                    <Form.Group className="pb-3" controlId='description'>
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='Enter description'
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    ></Form.Control>
                    </Form.Group>

                    {/*ACCESSORIES FORMGROUP*/}
                    <h4 className="py-2">Accesoires</h4>
                        <Form.Group controlId='Accessories'>
                          <Form.Label>Nom</Form.Label>
                          <Form.Control
                              type='name'
                              placeholder='Enter name'
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                          ></Form.Control>

                          <Form.Label>Marque</Form.Label>
                          <Form.Control
                              type='text'
                              placeholder='Enter la marque'
                              value={brand}
                              onChange={(e) => setBrand(e.target.value)}
                          ></Form.Control>


                          <Form.Label>Categories</Form.Label>
                          <Form.Control
                              type='text'
                              placeholder='Enter category'
                              value={category}
                              onChange={(e) => setCategory(e.target.value)}
                          ></Form.Control>

                          <Form.Label>Description</Form.Label>
                          <Form.Control
                              type='text'
                              placeholder='Enter description'
                              value={description}
                              onChange={(e) => setDescription(e.target.value)}
                          ></Form.Control>
                        </Form.Group>

                        
                  {/*END OF ACCESSORIES FORMGROUP*/}

                    <Button className="my-5" type='submit' variant='primary'>
                    Valider
                    </Button>
                </Form>
                )}
            </FormContainer>
        </div>
    )
}

export default ProductEditScreen


