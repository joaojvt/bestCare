import React from 'react'
import './styles.scss'
import logo from '../../assets/logo.svg';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className="logo-container">
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
      </div>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/">What We Offer</Link>
        <Link to="/">Prices</Link>
        <Link to="/">Contact</Link>
      </nav>
    </header>
  )
}

export default Header