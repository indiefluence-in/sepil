import React from 'react'
import { Routes, Route } from "react-router-dom";
import './App.css'
import Header from './components/header';
import Footer from './components/footer';
import Home from './page/home';

function App() {

  return (
    <>
      <Header />
      <Home />
      {/* <Routes>
         <Route path="/" element={<Home />} />
      </Routes>
      <Footer /> */}
    </>
  )
}

export default App