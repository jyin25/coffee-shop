import React from 'react';
import './AboutMe.css'; 

class AbutMe extends React.Component {
  render() {
    return (
      <>
        <div className="about-me-container" id="about">
          <div className="video-container">
            <video autoPlay loop muted>
              <source src="https://www.rescatecoffee.com/wp-content/uploads/2016/03/roasting-video-rescate.mp4" type="video/mp4"/>
            </video>
          </div>
          <div className="video-text">
            <div className="video-text-box">
              <h1>B.C.</h1>
              <h1>SHOT BOX</h1>
              <p>Through the power of friendship, B.C. Shot Box is able to create quality coffee and food. </p>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default AbutMe;