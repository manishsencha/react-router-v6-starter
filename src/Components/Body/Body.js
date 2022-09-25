import React from 'react';
import { Link } from 'react-router-dom';

function Body() {
  return <div>
    <span>Body</span>
    <Link to={`/`}>Home</Link>
    <Link to={`/about`}>About</Link>
  </div>;
}

export default Body;
