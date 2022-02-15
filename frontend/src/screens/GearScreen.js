import React, { useEffect } from 'react'
import { MDBRow, MDBCol, MDBContainer, MDBBreadcrumb, MDBBreadcrumbItem } from "mdb-react-ui-kit";
import Product from '../components/Product';
import SearchBox from '../components/SearchBox';
import Loader from '../components/Loader';
import Message from '../components/Message';
import { listProductCategories, listProducts } from '../actions/productActions';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Dropdown, Button } from 'react-bootstrap'









const GearScreen = () => {
    {/*const [products, setProducts] = useState([])

    const dispatch = useDispatch()

    useEffect(() => {
        const fetchProducts = async () => {
            const { data } = await axios.get('/api/products')

            setProducts(data)
        }
        fetchProducts()
    }, [])*/}
    
    const { name = 'all', category = 'all' } = useParams()
    const dispatch = useDispatch()

    const productList =  useSelector((state) => state.productList)
    const { loading, error, products } = productList

    const productCategoryList = useSelector((state) => state.productCategoryList);
    const {
        loading: loadingCategories,
        error: errorCategories,
        categories,
    } = productCategoryList;

    useEffect(() => {
        dispatch(listProductCategories());
    }, [dispatch]);

    useEffect(() => {
        dispatch(listProducts({ 
            name: name !== 'all' ? name: '',
            category: category !== 'all' ? category : '',
        }))
    }, [dispatch, name, category])
    
    const getFilterUrl = (filter) => {
        const filterCategory = filter.category || category;
        const filterName = filter.name || name;
        return `/search/category/${filterCategory}/name/${filterName}`;
      };

    return (
        <>
            <MDBContainer>
                <h4 className="py-3">Articles</h4>
                <MDBRow className="py-1">
                    <MDBCol xs="12" sm="12" md="3" lg="3" xl="3">
                        <SearchBox />  
                        <h3>Catégories</h3>
                        <div>
                            {loadingCategories ? ( <Loader/> ) : errorCategories ? ( <Message variant="danger">{error}</Message> ) : (
                            <div>
                                {categories.map(c => (
                                <div key={c}>
                                    <Link
                                    className={c === category ? 'active': ''}
                                    to={getFilterUrl({category:c})}>
                                        <Button 
                                        className="btn btn-primary"
                                        style={{width: '100%', margin: '2px'}}>
                                            {c}
                                        </Button>
                                    </Link>
                                </div>
                                ))} 
                            </div>
                            )}
                        </div>
                    </MDBCol>

                    <MDBCol  xs="12" sm="12" md="9" lg="9" xl="9">
                        <MDBRow >
                            {loading ? ( <Loader/> ) : error ? ( <Message variant="danger">{error}</Message> ) : (
                            <>
                            {products.map(product => (
                                <MDBCol key={product._id} sm={12} md={12} lg={4} xl={3}>
                                <Product product={product} style={{ width: '100%'}}/>
                                </MDBCol>
                            ))}
                            </>
                            )}
                        </MDBRow>
                    </MDBCol>
                </MDBRow>
                        
            </MDBContainer>
            
        </>
    )
}

export default GearScreen
