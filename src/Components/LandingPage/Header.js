import React from 'react'

class Header extends React.Component{
  render(){

    const header = {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      padding: '25px'
    }

    const navbarItems = {
      margin: '0',
      padding: '0',
      paddingTop: '25px'
    }

    const searchBar = {
      width: "500px",
      height: "30px"
    }

    const searchButton = {
      height: "30px"
    }


    return(
        <div>
          <div style={header}>

            <img src={require('../../images/logo.jpg')} />

            <div style={navbarItems}>
              <input type="text" placeholder="Search..." style={searchBar} />
              <button type="submit" style={searchButton}>Search</button>
            </div>

              <p style={navbarItems}>Contact Us</p>

              <p style={navbarItems}>About Us</p>

          </div>

        </div>
    )

  }
}

export default Header
