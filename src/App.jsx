import './App.css'
import MainPage from './components/MainPage/MainPage';
import AboutPage from './components/AboutPage/AboutPage'
import BlogPage from './components/Blog/BlogPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ContactPage from './components/ContactPage/ContactPage';
import React from 'react'

export default function App() {
  return(
    <Router>
    <Routes>
    <Route path='/' element={<MainPage/>} />
    <Route path='/about' element={<AboutPage/>}  />
    <Route path='/blog' element={<BlogPage/>}  />
    <Route path='/contact' element={<ContactPage/>}  />
    </Routes>
    </Router>
    
  )
}