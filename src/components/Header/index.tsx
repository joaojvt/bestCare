import React from 'react'
import './styles.scss'
import logo from '../../assets/logo.svg';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className="logo-container">
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
      </div>

      <nav>
        <NavLink exact to="/" activeClassName="selected" >Home</NavLink>
        <NavLink to="/what-we-offer" activeClassName="selected" >What We Offer</NavLink>
        <NavLink to="/prices" activeClassName="selected" >Prices</NavLink>
        <NavLink to="/contact" activeClassName="selected" >Contact</NavLink>
      </nav>
    </header>
  )
}

export default Header