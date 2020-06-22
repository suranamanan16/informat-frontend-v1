import React from 'react'
import FeaturedItem from './FeaturedItem'

class Featured extends React.Component{
  render(){

    const container = {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      padding: '50px',
      margin: '15px'
    }


    return(
      <div style={container}>

        <FeaturedItem />
        <FeaturedItem />
        <FeaturedItem />
        <FeaturedItem />


      </div>
    )
  }
}

export default Featured
