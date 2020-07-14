import React from 'react';
import './Banner.css'
import banner from '../pics/3.jpg'

class Banner extends React.Component {
  render() {
    return (
      <>
      <header className="header-container">
        <div className="header-nav-container">
          <img className="banner-picture" src={banner} alt="banner"></img>
          <nav className="nav-container">
            <ul className="nav-text">
              <li>About Us</li>
              <li>Menu</li>
              <li>Location</li>
            </ul>
          </nav>
        </div>
      </header>
      </>
    )
  }
}

export default Banner;