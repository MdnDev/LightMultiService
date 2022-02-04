import React, { useEffect } from 'react';
import { Table, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'
import Message from '../components/Message'
import Loader from '../components/Loader'
import Paginate from '../components/Paginate'
import {
  listCategories,
  deleteCategory,
  createCategory,
} from '../actions/categoryActions'
import { CATEGORY_CREATE_RESET } from '../constants/categoryConstants'

const CategoryListScreen = () => {
    const params = useParams()
    const navigate = useNavigate()
    const pageNumber = params.pageNumber || 1
  
    const dispatch = useDispatch()
  
    const categoryList = useSelector((state) => state.categoryList)
    const { loading, error, categories, page, pages } = categoryList

    const categoryDelete = useSelector((state) => state.categoryDelete)
    const {
      loading: loadingDelete,
      error: errorDelete,
      success: successDelete,
    } = categoryDelete
  
    const categoryCreate = useSelector((state) => state.categoryCreate)
    const {
      loading: loadingCreate,
      error: errorCreate,
      success: successCreate,
      category: createdCategory,
    } = categoryCreate

    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin
  
    useEffect(() => {
      dispatch({ type: CATEGORY_CREATE_RESET })
  
      if (!userInfo || !userInfo.isAdmin) {
        navigate('/login')
      }
  
      if (successCreate) {
        navigate(`/admin/category/${createdCategory._id}/edit`)
      } else {
        dispatch(listCategories('', pageNumber))
      }
    }, [
      dispatch,
      navigate,
      userInfo,
      successDelete,
      successCreate,
      createdCategory,
      pageNumber,
    ])
  
    const deleteHandler = (id) => {
      if (window.confirm('Supprimer ?')) {
        dispatch(deleteCategory(id))
      }
    }
  
    const createCategoryHandler = () => {
      dispatch(createCategory())
    }
  return (
  <>
  <Row className='align-items-center'>
    <Col>
      <h1>Articles</h1>
    </Col>
    <Col className='text-right'>
      <Button className='my-3' onClick={createCategoryHandler}>
        <i className='fas fa-plus'></i> Ajouter une categorie
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
          {categories.map((category) => (
            <tr key={category._id}>
              <td>{category._id}</td>
              <td>{category.name}</td>
              <td>{category.category}</td>
              <td>{category.brand}</td>
              <td>
                <a href={`/admin/category/${category._id}/edit`}>
                  <Button variant='light' className='btn-sm'>
                    <i className='fas fa-edit'></i>
                  </Button>
                </a>
                <Button
                  variant='danger'
                  className='btn-sm'
                  onClick={() => deleteHandler(category._id)}
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
};

export default CategoryListScreen;
