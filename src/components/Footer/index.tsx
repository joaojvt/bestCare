import React from 'react'
import './styles.scss'
import logoWhite from '../../assets/logo-white.svg'
import facebookLogo from '../../assets/facebook-logo.svg'
import instagramLogo from '../../assets/instagram-logo.svg'
import whatsappLogo from '../../assets/whatsapp-logo.svg'
import { Link, NavLink } from 'react-router-dom'


const Footer = () => {
  return (
    <footer>
      <div className="links">
        <Link to="/"><img src={logoWhite} alt="logo" /></Link>
        <div className="social-media">
          <img src={whatsappLogo} alt="logo" />
          <img src={facebookLogo} alt="logo" />
          <img src={instagramLogo} alt="logo" />
        </div>
      </div>

      <nav>
        <NavLink to="/" >Home</NavLink>
        <NavLink to="/what-we-offer" >What We Offer</NavLink>
        <NavLink to="/prices" >Prices</NavLink>
        <NavLink to="/contact" >Contact</NavLink>
      </nav>
    </footer>
  )
}

export default Footer;