import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/home/home'
import About from './pages/about/about'
import Gallery from './pages/gallery/gallery'
import Statute from './pages/statute/statute'
import Help from './pages/help/help'
import Contact from './pages/contact/contact'
import NotFound from './pages/notFound/notFound'
import Navbar from './components/navbar'


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