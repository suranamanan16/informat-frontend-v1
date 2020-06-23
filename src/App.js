import React from 'react';

import Header from './Components/LandingPage/Header.js'
import Navbar from './Components/LandingPage/Navbar.js'
import Featured from './Components/LandingPage/FeaturedSection/Featured.js'
import Footer from './Components/LandingPage/Footer/Footer.js'
import Slider from './Components/LandingPage/Slider.js'





class App extends React.Component {

  render(){


    return (
      <div>
        <Header />
        <Navbar />
        <Featured />
        <Slider />
        <Footer />

      </div>
    )
  }



}

export default App;
