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
import AccessoryDetail from './pages/AccessoryDetail'
import BlogDetail from './components/BlogDetail'
import AccessoryLayout from './pages/AccessoryLayout'
import WhatsappFloat from './components/WhatsappFloat'
import ChatbotFloat from './components/ChatbotFloat'
import Infrastructure from './pages/Infrastructure'
import AccessoryProductDetailPage from './pages/AccessoryProductDetailPage'
import Faq from './pages/Faq'
import ContactUs from './pages/ContactUs'

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
       <Route path='/infrastructure' element={<Infrastructure />} />
      <Route path='/blogs' element={<Blogs/>}/>
       <Route path="/blog/:slug" element={<BlogDetail />} />
        <Route path='/accessories' element={<AccessoryLayout />}>

    <Route path=':type' element={<AccessoryDetail />} />
    
   
  </Route>
  <Route path='/accessories/:type/:productId' element={<AccessoryProductDetailPage/>}/>
  <Route path='/faq' element={<Faq/>}/>
  <Route path='/contact' element={<ContactUs/>}/>
     </Routes>
     <Footer/>
     <ChatbotFloat />
     <WhatsappFloat />
     </BrowserRouter>
    </>
  )
  
}

export default App
