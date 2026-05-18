import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTopArrow from './components/ScrollToTopArrow'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Writeups from './pages/Writeups'

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/writeups" element={<Writeups />} />
      </Routes>
      <Footer />
      <ScrollToTopArrow />
    </BrowserRouter>
  )
}
