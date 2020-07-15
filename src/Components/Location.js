import React from 'react';
import './Location.css';

class Location extends React.Component {
  render() {
    return (
      <>
        <div className="location">
          <div className="location-opacity"></div>

          <div className="location-text-container">
            <p>Location</p>
          </div>
        </div>
      </>
    )
  }
}

export default Location;