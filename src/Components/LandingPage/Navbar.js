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
          <a href="/Category" style={navbarItems}>Office</a>
          <a href="/Category" style={navbarItems}>Stationary Store</a>
          <a href="/Category" style={navbarItems}>IT Products</a>
          <a href="/Category" style={navbarItems}>Electronics</a>
        </div>

      )
  }
}

export default Navbar
