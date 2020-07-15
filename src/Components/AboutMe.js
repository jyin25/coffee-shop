import React from 'react';
import './AboutMe.css'; 

class AbutMe extends React.Component {
  render() {
    return (
      <>
        <div className="about-me-container">
          <div className="video-container">
            <video autoPlay loop muted>
              <source src="https://www.rescatecoffee.com/wp-content/uploads/2016/03/roasting-video-rescate.mp4" type="video/mp4"/>
            </video>
          </div>
          <div className="video-text">
            <div className="video-text-box">
              <h1>About Me</h1>
              <p>Coffe Shop</p>
              <p>description: </p>
              <p>sdfsdfff sdfsdf s sdf sdf sdf sdfs d fsd fsdf sdf</p>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default AbutMe;