import React from 'react';
// import {BrowserRouter} from 'react-router-dom';
// import {Route} from 'react-router-dom';
import Body from './Components/CategoryPage/Body'

import Header from './Components/LandingPage/Header.js'
import Navbar from './Components/LandingPage/Navbar.js'
import Featured from './Components/LandingPage/FeaturedSection/Featured.js'
import Footer from './Components/LandingPage/Footer/Footer.js'
import Slider from './Components/LandingPage/Slider.js'





class App extends React.Component {

  render(){

    return (
      // <BrowserRouter>
      <div>


          <Header />

          <Navbar />

          

          <Featured />
          <Slider />
          <Footer />

      </div>
      // </BrowserRouter>
    )
  }



}

export default App;
