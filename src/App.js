import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./Components/Home/Home"
import About from "./Components/About/About"
import Body from "./Components/Body/Body"
function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/body" element={<Body />} />
      </Routes>
    </Router>
  )
}

export default App
