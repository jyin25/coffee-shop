import React from 'react';
import './Location.css';

class Location extends React.Component {
  render() {
    return (
      <>
        <div className="location" id="location">
          <div className="location-opacity"></div>

          <div className="location-text-container">
            <h1>Location</h1>
            <div className="location-map-container">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49977.41395075496!2d-121.4147312856929!3d38.47406335758674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809ac437eb76ba0f%3A0x52520ce578e38d8f!2sChevron%20ExtraMileSacramento!5e0!3m2!1sen!2sus!4v1595393940388!5m2!1sen!2sus" aria-hidden="true"></iframe>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Location;