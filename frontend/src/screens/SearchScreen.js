import React, { useEffect } from 'react';
import { listProducts } from '../actions/productActions';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import Message from '../components/Message'
import Loader from '../components/Loader'
import Product from '../components/Product'
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';






const SearchScreen = () => {
const {name = 'all'} = useParams()
const dispatch = useDispatch()
const navigate = useNavigate()
const productList =  useSelector((state) => state.productList)
const { loading, error, products } = productList

useEffect(() => {
    dispatch(listProducts({ name: name !== 'all' ? name: '' }))
}, [dispatch, name])

const getFilterUrl = (filter) => {
    const filterName = filter.name || name;
    return `/search/name/${filterName}`;
  };
  return (
    <MDBContainer>
        <MDBRow>
        {loading ? ( <Loader/> ) : error ? ( <Message variant="danger">{error}</Message> ) : (
            <div>
                {products.length} Results
            </div>
        )}
        </MDBRow>
        <MDBRow>
            <MDBCol>
                <h3>Department</h3>
                <ul>
                    <li>Category 1</li>
                </ul>
            </MDBCol>

            <MDBCol>
                {loading ? ( <Loader/> ) : error ? ( <Message variant="danger">{error}</Message> ) : (
                <>
                    {products.length === 0 && (
                        <Message>Aucun Produit trouvé</Message>
                    )}
                    <MDBRow>
                        {products.map((product) => (
                            <Product 
                                key={product._id}
                                product={product}>
                            </Product>
                        ))}
                    </MDBRow>
                </>
                )}
            </MDBCol>
        </MDBRow>
    </MDBContainer>
  )
};

export default SearchScreen;

