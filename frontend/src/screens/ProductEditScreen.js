import React, {useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
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
    const [accessory, setAccessory] = useState([])

    const [accessoryName, setAccessoryName] = useState('')
    const [accessoryImage, setAccessoryImage] = useState('')

    const [accessoryName2, setAccessoryName2] = useState('')
    const [accessoryImage2, setAccessoryImage2] = useState('')

    const [accessoryName3, setAccessoryName3] = useState('')
    const [accessoryImage3, setAccessoryImage3] = useState('')

    const [accessoryName4, setAccessoryName4] = useState('')
    const [accessoryImage4, setAccessoryImage4] = useState('')

    const [accessoryName5, setAccessoryName5] = useState('')
    const [accessoryImage5, setAccessoryImage5] = useState('')

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
            setAccessoryName(product.accessoryName)
            setAccessoryImage(product.accessoryImage)
            setAccessoryName2(product.accessoryName2)
            setAccessoryImage2(product.accessoryImage2)
            setAccessoryName3(product.accessoryName3)
            setAccessoryImage3(product.accessoryImage3)
            setAccessoryName4(product.accessoryName4)
            setAccessoryImage4(product.accessoryImage4)
            setAccessoryName5(product.accessoryName5)
            setAccessoryImage5(product.accessoryImage5)
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
      
      {/* ACCESSORIES FILE HANDLERS */}

      const uploadAccessoryFileHandler = async (e) => {
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
    
          const { data } = await axios.post('/api/uploadAccessories', formData, config)
    
          setAccessoryImage(data)
          setUploading(false)
        } catch (error) {
          console.error(error)
          setUploading(false)
        }
      }

      const uploadAccessoryFileHandler2 = async (e) => {
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
    
          const { data } = await axios.post('/api/uploadAccessories', formData, config)
    
          setAccessoryImage2(data)
          setUploading(false)
        } catch (error) {
          console.error(error)
          setUploading(false)
        }
      }

      const uploadAccessoryFileHandler3 = async (e) => {
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
    
          const { data } = await axios.post('/api/uploadAccessories', formData, config)
    
          setAccessoryImage3(data)
          setUploading(false)
        } catch (error) {
          console.error(error)
          setUploading(false)
        }
      }

      const uploadAccessoryFileHandler4 = async (e) => {
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
    
          const { data } = await axios.post('/api/uploadAccessories', formData, config)
    
          setAccessoryImage4(data)
          setUploading(false)
        } catch (error) {
          console.error(error)
          setUploading(false)
        }
      }

      const uploadAccessoryFileHandler5 = async (e) => {
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
    
          const { data } = await axios.post('/api/uploadAccessories', formData, config)
    
          setAccessoryImage5(data)
          setUploading(false)
        } catch (error) {
          console.error(error)
          setUploading(false)
        }
      }

      {/* END OF ACCESSORIES FILE HANDLERS */}

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
            accessoryName,
            accessoryImage,
            accessoryName2,
            accessoryImage2,
            accessoryName3,
            accessoryImage3,
            accessoryName4,
            accessoryImage4,
            accessoryName5,
            accessoryImage5
          })
        )
      }

    return (
        <>
          <Link to='/admin/productlist' className='btn btn-light my-3'>
        Retour
      </Link>
      <FormContainer>
        <h1>Créer/ Modifier un article</h1>
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

            

            <Form.Group controlId='image'>
              <Form.Label>Image</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter image url'
                value={image}
                onChange={(e) => setImage(e.target.value)}
              ></Form.Control>
              <input
                type="file"
                id='image-file'
                label='Choose File'
                onChange={uploadFileHandler}
              ></input>
              {uploading && <Loader />}
            </Form.Group>

            <Form.Group controlId='brand'>
              <Form.Label>Marque</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter brand'
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
              ></Form.Control>
            </Form.Group>

           

            <Form.Group controlId='category'>
              <Form.Label>Categorie</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter category'
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group className="mb-4" controlId='description'>
              <Form.Label>Description</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter description'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></Form.Control>
            </Form.Group>
           
          <span></span>
              <h4>Accessoires liés à l'article</h4>
                {/* FIRST ACCESSORY */}
                <h5 className="my-4">Premier accessoire</h5>
                <Form.Group controlId='accessoryName'>
                  <Form.Label>Nom</Form.Label>
                  <Form.Control
                    type='name'
                    placeholder='Enter name'
                    value={accessoryName}
                    onChange={(e) => setAccessoryName(e.target.value)}
                  ></Form.Control>
                </Form.Group>

                <Form.Group controlId='accessoryImage'>
                  <Form.Label>Image</Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='Enter image url'
                    value={accessoryImage}
                    onChange={(e) => setAccessoryImage(e.target.value)}
                  ></Form.Control>
                  <input
                    type="file"
                    id='image-file'
                    label='Choose File'
                    onChange={uploadAccessoryFileHandler}
                  ></input>
                  {uploading && <Loader />}
                </Form.Group>

                {/* END OF FIRST ACCESSORY */}

                {/* SECOND ACCESSORY */}
                <h5 className="my-4">Deuxième accessoire</h5>
                <Form.Group controlId='accessoryName'>
                  <Form.Label>Nom</Form.Label>
                  <Form.Control
                    type='name'
                    placeholder='Enter name'
                    value={accessoryName2}
                    onChange={(e) => setAccessoryName2(e.target.value)}
                  ></Form.Control>
                </Form.Group>

                <Form.Group controlId='accessoryImage'>
                  <Form.Label>Image</Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='Enter image url'
                    value={accessoryImage2}
                    onChange={(e) => setAccessoryImage2(e.target.value)}
                  ></Form.Control>
                  <input
                    type="file"
                    id='image-file'
                    label='Choose File'
                    onChange={uploadAccessoryFileHandler2}
                  ></input>
                  {uploading && <Loader />}
                  </Form.Group>
                {/* END OF SECOND ACCESSORY */}


                {/* THIRD ACCESSORY */}
                <h5 className="my-4">Troisème accessoire</h5>
                <Form.Group controlId='accessoryName'>
                  <Form.Label>Nom</Form.Label>
                  <Form.Control
                    type='name'
                    placeholder='Enter name'
                    value={accessoryName3}
                    onChange={(e) => setAccessoryName3(e.target.value)}
                  ></Form.Control>
                </Form.Group>

                <Form.Group controlId='accessoryImage'>
                  <Form.Label>Image</Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='Enter image url'
                    value={accessoryImage3}
                    onChange={(e) => setAccessoryImage3(e.target.value)}
                  ></Form.Control>
                  <input
                    type="file"
                    id='image-file'
                    label='Choose File'
                    onChange={uploadAccessoryFileHandler3}
                  ></input>
                  {uploading && <Loader />}
                  </Form.Group>
                {/* END OF THIRD ACCESSORY */}

                {/* FOURTH ACCESSORY */}
                <h5 className="my-4">Quatrième accessoire</h5>
                <Form.Group controlId='accessoryName'>
                  <Form.Label>Nom</Form.Label>
                  <Form.Control
                    type='name'
                    placeholder='Enter name'
                    value={accessoryName4}
                    onChange={(e) => setAccessoryName4(e.target.value)}
                  ></Form.Control>
                </Form.Group>

                <Form.Group controlId='accessoryImage'>
                  <Form.Label>Image</Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='Enter image url'
                    value={accessoryImage4}
                    onChange={(e) => setAccessoryImage4(e.target.value)}
                  ></Form.Control>
                  <input
                    type="file"
                    id='image-file'
                    label='Choose File'
                    onChange={uploadAccessoryFileHandler4}
                  ></input>
                  {uploading && <Loader />}
                  </Form.Group>
                {/* END OF FOURTH ACCESSORY */}

                {/* FIFTH ACCESSORY */}
                <h5 className="my-4">Cinquième accessoire</h5>
                <Form.Group controlId='accessoryName'>
                  <Form.Label>Nom</Form.Label>
                  <Form.Control
                    type='name'
                    placeholder='Enter name'
                    value={accessoryName5}
                    onChange={(e) => setAccessoryName5(e.target.value)}
                  ></Form.Control>
                </Form.Group>

                <Form.Group controlId='accessoryImage'>
                  <Form.Label>Image</Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='Enter image url'
                    value={accessoryImage5}
                    onChange={(e) => setAccessoryImage5(e.target.value)}
                  ></Form.Control>
                  <input
                    type="file"
                    id='image-file'
                    label='Choose File'
                    onChange={uploadAccessoryFileHandler5}
                  ></input>
                  {uploading && <Loader />}
                  </Form.Group>
                {/* END OF FIFTH ACCESSORY */}
              
            

            <Button className="my-3" type='submit' variant='primary'>
              Valider
            </Button>
          </Form>
        )}
      </FormContainer>
        </>
    )
}

export default ProductEditScreen


