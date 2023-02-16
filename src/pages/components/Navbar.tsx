import React, { useState } from 'react';
import Link from 'next/link';
// import logo from './logo.svg';
// import './Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
    <div className="container">
        <a href="/" className="logo">WebSCByDinko</a>
        <nav className="nav-collapse">
          <ul>
            <li className="menu-item active"><Link id='a-text' href="/">Home</Link></li>
            <li className="menu-item active"><Link id='a-text' href="/posts/Services">Services</Link></li>
            <li className="menu-item active"><Link id='a-text' href="/posts/About">About</Link></li>
            <li className="menu-item active"><Link id='a-text' href="/posts/Contact">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
   
  );
}

export default Navbar;
