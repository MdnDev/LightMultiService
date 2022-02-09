import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import GearScreen from './screens/GearScreen';
import AboutScreen from './screens/AboutScreen';
import ContactScreen from './screens/ContactScreen';
import ProductScreen from './screens/ProductScreen';
import ProductListScreen from './screens/ProductListScreen';
import ProductEditScreen from './screens/ProductEditScreen';
import CategoryEditScreen from './screens/CategoryEditScreen';
import CategoryListScreen from './screens/CategoryListScreen';
import LoginScreen from './screens/LoginScreen';
import SearchScreen from './screens/SearchScreen'

function App() {
  return (
    <Router>
      <Header/>
      <main className="py-3">
        <Container>
          <Routes>
            <Route path="/" element={<HomeScreen/>}/>
            <Route path="/gear" element={<GearScreen/>}/>
            <Route path="/products/:id" element={<ProductScreen/>}/>
            <Route path="/about" element={<AboutScreen/>}/>
            <Route path="/contact" element={<ContactScreen/>}/>
            <Route path="/admin/productlist" element={<ProductListScreen/>}/>
            <Route path="/admin/product/:id/edit" element={<ProductEditScreen/>}/>
            <Route path="/admin/categorylist" element={<CategoryListScreen/>}/>
            <Route path="/admin/category/:id/edit" element={<CategoryEditScreen/>}/>
            <Route path="/login" element={<LoginScreen/>}/>
            <Route path="/search/name" element={<SearchScreen />} exact></Route>
            <Route path="/search/name/:name" element={<SearchScreen/>}/>
            <Route path="/search/category/:category" element={<SearchScreen/>}/>
            <Route path="/search/category/:category/name/:name" element={<SearchScreen/>}/>
            
          </Routes>
        </Container>
      </main>
      <Footer/>
    </Router>
  );
}

export default App;
