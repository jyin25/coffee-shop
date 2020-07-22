import React from 'react';
import './Banner.css'
import banner from '../pics/3.jpg'
import { HashLink as Link } from 'react-router-hash-link';

class Banner extends React.Component {



  render() {
    return (
      <>
      <header className="header-container">
        <div className="header-nav-container">
          <img className="banner-picture" src={banner} alt="banner"></img>
          <nav className="nav-container">
            <ul className="nav-text">
              <Link to="/About#about"><li>About Us</li></Link>
              <Link to="/Menu#menu"><li>Menu</li></Link>
              <Link to="/Location#location"><li>Location</li></Link>
            </ul>
          </nav>
        </div>
      </header>
      </>
    )
  }
}

export default Banner;