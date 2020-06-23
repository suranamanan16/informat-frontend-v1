import React from 'react'
import Header from '../LandingPage/Header.js'
import Navbar from '../LandingPage/Navbar.js'
import Footer from '../LandingPage/Footer/Footer.js'
import Featured from './Components/LandingPage/FeaturedSection/Featured'


class Product extends React.Component{

  render(){


    const flexBox = {

      display: 'flex',
      flexDirection: 'row',
      borderStyle: 'solid',
      borderWidth: 'thin',
      margin: '25px',
      height: '500px',
      justifyContent: 'space-around'
    }

    const flexItem = {
      margin: '25px'
    }

    return(

      <div>

        <Header />
        <Navbar />

        <div style={flexBox}>

          <div style={flexItem}>
            <h5>Name of the product</h5>
            <img />
          </div>

          <h6 style={flexItem}>Description of the product</h6>

          <h6 style={flexItem}>Price of the product</h6>

        </div>

        <Footer />


      </div>





    )


  }

}

export default Product
