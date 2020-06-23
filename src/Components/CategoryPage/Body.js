import React from 'react'
import Product from './Product'
import Price from './Price/Price'

import Header from '../LandingPage/Header.js'
import Navbar from '../LandingPage/Navbar.js'

class Body extends React.Component{


  render(){

    const style = {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between'
    }

    const flexItem = {
      marginLeft: '10px'
    }

    return(

      <div>

      <Header />
      <Navbar />

      <div style={style}>

        <div style={flexItem}>
          <Price />
        </div>



        <Product />

      </div>

      </div>





    )


  }

}

export default Body
