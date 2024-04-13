import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './pages/Shop'; 
import Shopcategory from './pages/Shopcategory'; 
import Product from './pages/Product'; 
import Cart from './pages/Cart'; 
import LoginSignup from './pages/LoginSignup'; 
import Footer from './components/Footer/Footer';
import men_banner from './components/Assets/banner_mens.png'
import women_banner from './components/Assets/banner_women.png'
import kid_banner from './components/Assets/banner_kids.png'



function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/mens' element={<Shopcategory banner={men_banner} category="Mens" />} />
          <Route path='/womens' element={<Shopcategory banner={women_banner} category="Women" />} />
          <Route path='/kids' element={<Shopcategory banner={kid_banner} category="Kids" />} />
          <Route path='product' element={<Product />}>
            <Route path=':productID' element={<Product />} />
          </Route>
          <Route path='/Cart' element={<Cart />} />
          <Route path='/login' element={<LoginSignup />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
