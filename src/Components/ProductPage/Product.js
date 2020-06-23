import React from 'react'
import Header from '../LandingPage/Header.js'
import Navbar from '../LandingPage/Navbar.js'
import Footer from '../LandingPage/Footer/Footer.js'

class Product extends React.Component{

  render(){


    const flexBox = {

      display: 'flex',
      flexDirection: 'row',

    }

    return(

      <div>

        <Header />
        <Navbar />

        <div style={flexBox}>

          <div>
            <h5>Name of the product</h5>
            <img />
          </div>

          <h6>Description of the product</h6>

          <h6>Price of the product</h6>

        </div>

        <Footer />


      </div>





    )


  }

}

export default Product
