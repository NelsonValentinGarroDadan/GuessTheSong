import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar/navbar'
import Home from './components/home/home'
import Footer from './components/footer/footer'
import About from './components/about/about'
import Ranking from './components/ranking/ranking'
import Login from './components/login/login'
import Register from './components/register/register'
function App() {

  return (
    <>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/ranking" element={<Ranking />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      <Footer />
    </>
  )
}

export default App
