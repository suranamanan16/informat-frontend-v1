import React from 'react'
import {Link} from 'react-router-dom'

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
          <Link to="/Category" style={navbarItems}>Office</Link>
          <Link to="/Category" style={navbarItems}>Stationary</Link>
          <Link to="/Category" style={navbarItems}>IT Products</Link>
          <Link to="/Category" style={navbarItems}>Electronics</Link>
        </div>

      )
  }
}

export default Navbar
