import React from 'react' 
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import AboutUs from './pages/AboutUs'
import Products from './pages/Products'
import Home from './pages/Home'
import TestimonalsPage from './components/TestimonalsPage'
import Blogs from './components/Blogs'
import ScrollToTop from './components/ScrollToTop'

function App() {


  return (
    <>
     <BrowserRouter basename="/APC">
      <ScrollToTop />
     <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/aboutus' element={<AboutUs/>}/>
      <Route path='/testimonals' element={<TestimonalsPage/>}/>
      <Route path='/products' element={<Products/>}/>
      <Route path='/blogs' element={<Blogs/>}/>
       {/* <Route path="/accessories/:type" element={<AccessoryDetail />} />  */}
     </Routes>
     <Footer/>
     </BrowserRouter>
    </>
  )
}

export default App
