import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Components/Home';
import Fashion from './Components/Fashion';
import Tshirt from './Components/Tshirt';
import Hats from './Components/Hats';
import Shoe from './Components/shoe';
import Mugs from './Components/Mugs';
import Pants from './Components/Pants';
import Gender from './Components/Gender'
import PopularBrands from './Components/Popularbrand';
import AboutUs from './Components/About';
import ContactUs from './Components/Contact';
import Cart from './Components/Cart';



import './App.css';

function App() {
  return (
    <Router>
      <div>
        {/* Header Section */}
        <header>
          <img src="https://logodix.com/logo/2145114.jpg" className="header-image" />
          <h1>PRODUCT STORE...</h1>

          <nav className="navbar">
            <Link to="/">Home</Link>

            {/* Categories Dropdown */}
            <div className="dropdown">
              <span className="dropdown-title">FASHION</span>
              <div className="dropdown-content">
                <Link to="/Tshirt">T-SHIRTS</Link>
                <Link to="/Hats">HATS</Link>
                <Link to="/shoe">SHOES</Link>
                <Link to="/Mugs">MUGS</Link>
                <Link to="/pants">PANTS</Link>
              </div>
            </div>

            <Link to="/Gender">GENDER</Link>
            <Link to="/popular-brands">Popular Brands</Link>
            <Link to="/about">About Us</Link>
            
            <Link to="/contact">Contact Us</Link>
           
            
            
          </nav>
        </header>

        {/* Define Routes for Pages */}
        <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/Fashion" element={<Fashion />} />
  <Route path="/Tshirt" element={<Tshirt />} />
  <Route path="/hats" element={<Hats />} />
  <Route path="/shoe" element={<Shoe />} />
  <Route path="/Mugs" element={<Mugs />} />
  <Route path="/pants" element={<Pants />} />
  <Route path="/Gender" element={<Gender />} />
  <Route path="/popular-brands" element={<PopularBrands />} />
  <Route path="/about" element={<AboutUs />} />
  <Route path="/contact" element={<ContactUs />} />
  <Route path="/cart" element={<Cart />} />

  
</Routes>
      </div>
    </Router>
  );
}

export default App;
