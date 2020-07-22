import React from 'react';
import './Menu.css';
import './AboutMe.css';

class Menu extends React.Component {
  render() {
    return (
      <>
        <div className="menu-container" id="menu">
          <div className="menu-opacity-container"></div>
          <div className="menu-text-container">
            <div className="menu-text-box">
            <h1>Menu</h1>
            <p>The key to amazing coffee and food is friendship. Each cup of coffee, whether a simple black coffee or an ice blended summer drink is crafted with care and friendship. We feature a full variety of drinks and food to satisfy your palette.</p>
            <a target='_blank' href="https://www.dropbox.com/s/036af0ee1neqytd/Menu%20Board_screenshot.JPG?dl=0"><p className="menu-button">View our menu <span className="arrow">>></span></p></a>
          </div>
          </div>
        </div>
      </>
    )
  }
}

export default Menu;