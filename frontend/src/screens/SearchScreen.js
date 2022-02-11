import React, { useEffect } from 'react';
import { listProducts } from '../actions/productActions';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Message from '../components/Message'
import Loader from '../components/Loader'
import Product from '../components/Product'
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';


const SearchScreen = () => {
const { name = 'all', category = 'all' } = useParams()
const dispatch = useDispatch()

const productList =  useSelector((state) => state.productList)
const { loading, error, products } = productList

const productCategoryList =  useSelector((state) => state.productCategoryList)
const { loading:loadingCategories, errorCategories, categories } = productCategoryList



useEffect(() => {
    dispatch(listProducts({ 
        name: name !== 'all' ? name: '',
        category: category !== 'all' ? category : '',
    }))
}, [dispatch, name, category])

const getFilterUrl = (filter) => {
    const filterName = filter.name || name;
    const filterCategory = filter.category || category;
    return `/search/name/${filterName}category/${filterCategory}`;
  };
  return (
    <MDBContainer>
        <Link to='/gear' className='btn btn-light my-3'>
        Retour
      </Link>
        <MDBRow>
            {loading ? ( <Loader/> ) : error ? ( <Message variant="danger">{error}</Message> ) : (
                <div>
                    {products.length} Article(s) trouvé(s)
                </div>
            )}
        </MDBRow>
        <MDBRow>
            <MDBCol>
                <h3>Catégories</h3>
                <div>
                {loadingCategories ? ( <Loader/> ) : errorCategories ? ( <Message variant="danger">{error}</Message> ) : (
                <ul>
                    {categories.map(c => (
                        <li key={c}>
                            <Link 
                                className={c === category ? 'active': ''}
                                to={getFilterUrl({category:c})}>
                                    {c}
                            </Link>
                        </li>
                    ))} 
                </ul>
            )}
            </div>
            </MDBCol>

            <MDBRow>
                {loading ? ( <Loader/> ) : error ? ( <Message variant="danger">{error}</Message> ) : (
                <>
                    {products.length === 0 && (
                        <Message>Aucun Produit trouvé</Message>
                    )}
                    <MDBRow>
                        {products.map((product) => (
                           <MDBCol key={product._id} sm={12} md={12} lg={4} xl={3}>
                           <Product product={product} style={{ width: '100%'}}/>
                           </MDBCol>
                        ))}
                    </MDBRow>
                </>
                )}
            </MDBRow>
        </MDBRow>
    </MDBContainer>
  )
};

export default SearchScreen;

