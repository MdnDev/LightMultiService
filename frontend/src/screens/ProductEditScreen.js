import React, {useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import { MDBFile, MDBFileInput } from 'mdb-react-ui-kit'
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
        <>
          <Link to='/admin/productlist' className='btn btn-light my-3'>
                RETOUR
            </Link>
            <FormContainer>
            <h1 className='my-5'>Gérer les articles</h1>
            {loadingUpdate && <Loader/>}
            {errorUpdate && <Message>{errorUpdate}</Message>}
            {loading ? <Loader /> : error ? <Message variant='danger'>{error}</Message> : (
                <div>
                <form className="form" onSubmit={submitHandler}>
                  <div>
                    <h1>Edit Product {productId}</h1>
                  </div>
                  {loadingUpdate && <Loader></Loader>}
                  {errorUpdate && <Message variant="danger">{errorUpdate}</Message>}
                  {loading ? (
                    <Loader></Loader>
                  ) : error ? (
                    <Message variant="danger">{error}</Message>
                  ) : (
                    <>
                      <div>
                        <label htmlFor="name">Name</label>
                        <input
                          id="name"
                          type="text"
                          placeholder="Enter name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        ></input>
                      </div>
                      
                      <div>
                        <label htmlFor="image">Image</label>
                        <input
                          id="image"
                          type="text"
                          placeholder="Enter image"
                          value={image}
                          onChange={(e) => setImage(e.target.value)}
                        ></input>
                      </div>
                      <div>
                        <label htmlFor="imageFile">Image File</label>
                        <input
                          type="file"
                          id="imageFile"
                          label="Choose Image"
                          onChange={uploadFileHandler}
                        ></input>
                        {uploading && <Loader/>}
                        
                      </div>
                      <div>
                        <label htmlFor="category">Category</label>
                        <input
                          id="category"
                          type="text"
                          placeholder="Enter category"
                          value={category}
                          onChange={(e) => setCategory(e.target.value)}
                        ></input>
                      </div>
                      <div>
                        <label htmlFor="brand">Brand</label>
                        <input
                          id="brand"
                          type="text"
                          placeholder="Enter brand"
                          value={brand}
                          onChange={(e) => setBrand(e.target.value)}
                        ></input>
                      </div>
                      
                      <div>
                        <label htmlFor="description">Description</label>
                        <textarea
                          id="description"
                          rows="3"
                          type="text"
                          placeholder="Enter description"
                          value={description}
                          onChange={(e) => setDescription(e.target.value)}
                        ></textarea>
                      </div>
                      <div>
                        <label></label>
                        <button className="primary" type="submit">
                          Update
                        </button>
                      </div>
                    </>
                  )}
                </form>
              </div>
            )}
            
            
        </FormContainer>
        </>
    )
}

export default ProductEditScreen


