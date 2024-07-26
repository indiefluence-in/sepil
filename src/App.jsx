import React from 'react'
import { Routes, Route } from "react-router-dom";
import './App.css'
import Header from './components/header';
import Footer from './components/footer';
// import Home from './page/home';

function App() {

  return (
    <>
      <Header />
      <div>
        <h1>
          hello world
        </h1>
      </div>
      <Footer />
    </>
  )
}

export default App