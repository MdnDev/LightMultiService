import React, { useEffect } from 'react'
import { Table, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'
import Message from '../components/Message'
import Loader from '../components/Loader'
import Paginate from '../components/Paginate'
import {
  listAccessories,
  deleteAccessory,
  createAccessory,
} from '../actions/accessoryActions'
import { ACCESSORY_CREATE_RESET } from '../constants/accessoryConstants'

const AccessoryListScreen = () => {
    const params = useParams()
    const navigate = useNavigate()
    const pageNumber = params.pageNumber || 1
  
    const dispatch = useDispatch()
  
    const accessoryList = useSelector((state) => state.accessoryList)
    const { loading, error, accessories, page, pages } = accessoryList
  
    const accessoryDelete = useSelector((state) => state.accessoryDelete)
    const {
      loading: loadingDelete,
      error: errorDelete,
      success: successDelete,
    } = accessoryDelete
  
    const accessoryCreate = useSelector((state) => state.accessoryCreate)
    const {
      loading: loadingCreate,
      error: errorCreate,
      success: successCreate,
      accessory: createdAccessory,
    } = accessoryCreate
  
    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin
  
    useEffect(() => {
      dispatch({ type: ACCESSORY_CREATE_RESET })
  
      if (!userInfo || !userInfo.isAdmin) {
        navigate('/login')
      }
  
      if (successCreate) {
        navigate(`/admin/accessory/${createdAccessory._id}/edit`)
      } else {
        dispatch(listAccessories('', pageNumber))
      }
    }, [
      dispatch,
      navigate,
      userInfo,
      successDelete,
      successCreate,
      createdAccessory,
      pageNumber,
    ])
  
    const deleteHandler = (id) => {
      if (window.confirm('Supprimer ?')) {
        dispatch(deleteAccessory(id))
      }
    }
  
    const createAccessoryHandler = () => {
      dispatch(createAccessory())
    }

    return (
        <>
          <Row className='align-items-center'>
            <Col>
              <h1>Accessoires</h1>
            </Col>
            <Col className='text-right'>
              <Button className='my-3' onClick={createAccessoryHandler}>
                <i className='fas fa-plus'></i> Ajouter un article
              </Button>
            </Col>
          </Row>
          {loadingDelete && <Loader />}
          {errorDelete && <Message variant='danger'>{errorDelete}</Message>}
          {loadingCreate && <Loader />}
          {errorCreate && <Message variant='danger'>{errorCreate}</Message>}
          {loading ? (
            <Loader />
          ) : error ? (
            <Message variant='danger'>{error}</Message>
          ) : (
            <>
              <Table striped bordered hover responsive className='table-sm'>
                <thead>
                  <tr>
                    <th>IDENTIFIANT</th>
                    <th>NOM</th>
                    <th>CATEGORIE</th>
                    <th>MARQUE</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {accessories.map((accessory) => (
                    <tr key={accessory._id}>
                      <td>{accessory._id}</td>
                      <td>{accessory.name}</td>
                      <td>{accessory.category}</td>
                      <td>{accessory.brand}</td>
                      <td>
                        <a href={`/admin/accessory/${accessory._id}/edit`}>
                          <Button variant='light' className='btn-sm'>
                            <i className='fas fa-edit'></i>
                          </Button>
                        </a>
                        <Button
                          variant='danger'
                          className='btn-sm'
                          onClick={() => deleteHandler(accessory._id)}
                        >
                          <i className='fas fa-trash'></i>
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
              <Paginate pages={pages} page={page} isAdmin={true} />
            </>
          )}
        </>
      )
    }
    
    export default AccessoryListScreen
  