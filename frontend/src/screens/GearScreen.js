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
import { Dropdown } from 'react-bootstrap'









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
        const filterName = filter.name || name;
        const filterCategory = filter.category || category;
        return `/search/name/${filterName}category/${filterCategory}`;
      };

    return (
        < >
            <h1 className="py-3">Famille d'article</h1>
            <MDBContainer>
                
                <MDBRow>
                        <MDBBreadcrumb className="pt-1">
                            <MDBBreadcrumbItem>
                                Element 1
                            </MDBBreadcrumbItem>
                            <MDBBreadcrumbItem>
                                Element 2
                            </MDBBreadcrumbItem>
                            <MDBBreadcrumbItem>
                                Element 3
                            </MDBBreadcrumbItem>
                        </MDBBreadcrumb>
                </MDBRow>
                    
                <MDBRow className="py-4">
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
                    

                    <MDBCol xs="12" sm="12" md="3" lg="3" xl="3">
                            <SearchBox/>
                            <h3>Catégories</h3>
                <div>
                {loadingCategories ? ( <Loader/> ) : errorCategories ? ( <Message variant="danger">{error}</Message> ) : (
                <ul>
                    {categories.map(c => (
                        <Dropdown key={c} className="py-1">
                            <Dropdown.Toggle
                            variant="dark" id="dropdown-basic" style={{width: '100%'}} 
                                className={c === category ? 'active': ''}
                                to={getFilterUrl({category:c})}>
                                    {c}
                            </Dropdown.Toggle>
                        </Dropdown>
                    ))} 
                </ul>
            )}
            </div>
                    </MDBCol>

                </MDBRow>
                        
            </MDBContainer>
            
        </>
    )
}

export default GearScreen
