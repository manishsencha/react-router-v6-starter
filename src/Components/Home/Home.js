import React from "react"
import { Link } from "react-router-dom"

function Home() {
  return (
    <div>
      <Link to={`/about`}>About</Link>
      <Link to={`/body`}>Body</Link>
    </div>
  )
}

export default Home
