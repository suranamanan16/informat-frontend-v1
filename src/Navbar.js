import React from 'react'

class Navbar extends React.Component{

  render(){

    const container = {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      borderStyle: 'solid',
      borderWidth: 'thin',
      margin: '20px'
    }

    const navbarItems = {
      padding: '15px'
    }

      return(

        <div style={container}>
          <a style={navbarItems}>Office</a>
          <a style={navbarItems}>Stationary Store</a>
          <a style={navbarItems}>IT Products</a>
          <a style={navbarItems}>Electronics</a>
        </div>

      )
  }
}

export default Navbar
