import React from 'react'
import Homepage from './component/Homepage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Education from './component/Education'
import Project from './component/Project'
import Contact from './component/Contact'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/education" element={<Education />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
