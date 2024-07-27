import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Home from './page/home';
import About from './page/about';
import Shop from './page/shop';
import Reviews from './page/reviews';
import WishList from './page/wishlist';
import Contact from './page/contact';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/review" element={<Reviews />} />
        <Route path="/contacts" element={<Contact />} />
        <Route path="/wishlist" element={<WishList />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
