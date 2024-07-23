import './App.css'
import MainPage from './components/MainPage/MainPage';
import AboutPage from './components/AboutPage/AboutPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <Router>
    <Routes>  
    <Route path='/' element={<MainPage/>} />
    <Route path='/about' element={<AboutPage/>}  />
    </Routes>
    </Router>
    
  )
}