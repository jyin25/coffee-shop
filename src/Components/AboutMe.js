import React from 'react';
import './AboutMe.css'; 
import roast from '../pics/roast.mp4';

class AbutMe extends React.Component {
  render() {
    return (
      <>
        <div className="about-me-container">
          <video autoPlay loop muted>
            <source src="https://www.rescatecoffee.com/wp-content/uploads/2016/03/roasting-video-rescate.mp4" type="video/mp4"/>
          </video>
        </div>
      </>
    )
  }
}

export default AbutMe;