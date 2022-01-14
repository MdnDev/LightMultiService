import React, {useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import { listAccessoryDetails, updateAccessory } from '../actions/accessoryActions'
import { ACCESSORY_UPDATE_RESET } from '../constants/accessoryConstants'

const AccessoryEditScreen = () => {
    const navigate = useNavigate()
    const params = useParams()
    

    const accessoryId = params.id

    const [name, setName] = useState('')
    const [image, setImage] = useState('')
    const [brand, setBrand] = useState('')
    const [category, setCategory] = useState('')
    const [description, setDescription] = useState('')
    const [uploading, setUploading] = useState(false)

    const dispatch = useDispatch()


    const accessoryDetails = useSelector((state) => state.accessoryDetails)
    const { loading, error, accessory } = accessoryDetails
    

    const accessoryUpdate = useSelector((state) => state.accessoryUpdate)
    const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
    } = accessoryUpdate

    useEffect(() => {
        if (successUpdate) {
          dispatch({ type: ACCESSORY_UPDATE_RESET })
          navigate('/admin/accessorylist')
        } else {
          if (!accessory.name || accessory._id !== accessoryId) {
            dispatch(listAccessoryDetails(accessoryId))
          } else {
            setName(accessory.name)
            setImage(accessory.image)
            setBrand(accessory.brand)
            setCategory(accessory.category)
            setDescription(accessory.description)
          }
        }
      }, [dispatch, navigate, accessory, accessoryId, successUpdate])


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
          updateAccessory({
            _id: accessoryId,
            name,
            image,
            brand,
            category,
            description,
          })
        )
      }

    return (
        <div>
            <Link to='/admin/accessorylist' className='btn btn-light my-3'>
                Retour
            </Link>
            <FormContainer>
                <h1>Ajouter/Modifier les Accessoires</h1>
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

                    <Form.Group controlId='description'>
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='Enter description'
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    ></Form.Control>
                    </Form.Group>

                    <Button type='submit' variant='primary'>
                    Valider
                    </Button>
                </Form>
                )}
            </FormContainer>
        </div>
    )
}

export default AccessoryEditScreen