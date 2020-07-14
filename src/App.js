import React from 'react';
import './App.css';
import AboutMe from './Components/AboutMe';
import Banner from './Components/Banner';
import Footer from './Components/Footer';
import Location from './Components/Location';
import Menu from './Components/Menu';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="container">
        <Banner></Banner>
        <AboutMe></AboutMe>
        <Menu></Menu>
        <Location></Location>
        <Footer></Footer>
        </div>
      </div>
    );
  }

}

export default App;
