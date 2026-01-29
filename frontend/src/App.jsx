import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Login from './pages/Login'
import Register from './pages/Register'
import Expense from './pages/Expense'
import CustomCursor from './components/CustomCursor'
const App = () => {
  return (
    <>
      {/* <CustomCursor /> */}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/expense" element={<Expense />} />
        </Routes>
      </Router>
    </>
  )
}

export default App