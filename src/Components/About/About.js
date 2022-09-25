import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  return <div>
    <span>About</span>
    <div>
      <Link to={`/`}>Home</Link>
      <Link to={`/body`}>Body</Link>
    </div>
  </div>;
}

export default About;
