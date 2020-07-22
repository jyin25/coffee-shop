import React from 'react';
import './Footer.css';

class Footer extends React.Component {
  render() {
    return (
      <>
        <div className="footer">
          <div className="store-hour-container">
            <h3>Store Hours</h3>
            <ul className="hour-list">
              <li>Monday-Friday: 8:00am - 5:00pm</li>
              <li>Saturday-Sunday: 6:00am - 5:00pm</li>
            </ul>
          </div>
          <div className="footer-location-container">
            <h3>Our Location</h3>
            <p>1234 Friendship Way</p>
            <p>San Diego, CA </p>
          </div>
        </div>
      </>
    )
  }
}

export default Footer;