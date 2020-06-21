import React from 'react'

class Header extends React.Component{
  render(){

    const header = {
      display: 'flex',
      flex-direction: 'column'
    }

    const searchBar = {

    }

    return(
        <div>
          //Flexbox
          <div className={header}>

            <img src="" />

            <div className={searchBar}>
              <input type="text" placeholder="Search..." name="Search"/>
              <button type="submit">Submit</button>
            </div>

            <div>
              <p>Contact Us</p>
              <p>About Us</p>
            </div>



          </div>
        </div>
    )

  }
}

export default Header
