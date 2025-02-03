import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar/navbar'
import Home from './components/home/home'
import Footer from './components/footer/footer'
function App() {

  return (
    <>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      <Footer />
    </>
  )
}

export default App
