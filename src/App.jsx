import './App.css'
import { Routes, Route } from 'react-router-dom'
import HomePage from './components/HomePage'
import PostData from './components/PostData'
import NavbarPage from './components/NavbarPage'
import FooterPage from './components/FooterPage'

function App() {

  return (
    <>
    <NavbarPage/>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/post' element={<PostData/>}/>
    </Routes>
    <FooterPage/>
    </>
  )
}

export default App
