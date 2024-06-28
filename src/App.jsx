import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/home/Home'
import About from './pages/about/About'
import Gallery from './pages/gallery/Gallery'
import Statute from './pages/statute/Statute'
import Help from './pages/help/Help'
import Contact from './pages/contact/Contact'
import NotFound from './pages/notFound/NotFound'
import Navbar from './components/Navbar'


const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Home/>
      <About/>
      <Gallery/>
      <Statute/>
      <Help/>
      <Contact/>
      <NotFound/>
    </BrowserRouter>
  )
}

export default App