import React from 'react' 
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import AboutUs from './pages/AboutUs'
import Products from './pages/Products'
import Home from './pages/Home'

function App() {


  return (
    <>
     <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/aboutus' element={<AboutUs/>}/>
      <Route path='/products' element={<Products/>}/>
     </Routes>
     <Footer/>
     </BrowserRouter>
    </>
  )
}

export default App
