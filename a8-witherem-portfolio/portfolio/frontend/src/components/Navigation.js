import React from 'react';
import { Link } from 'react-router-dom';

// Change the function names and links
// to fit your portfolio topic.

function Navigation() {
  return (
    <nav>
      <Link to="/">Home</Link>

      <Link to="/projects">Project Log</Link>

      <Link to="/pages/Topics">Topics</Link>
      <Link to="/pages/Gallery">Gallery</Link>
    </nav>
  );
}

export default Navigation;
