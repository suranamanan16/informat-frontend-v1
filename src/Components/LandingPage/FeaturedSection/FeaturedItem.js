import React from 'react'

class FeaturedItem extends React.Component {

  render() {
    const container = {
      display: 'flex',
      flexDirection: 'column',
      padding: '25px',
      textAlign: 'center'
    }

    const image = {
      height: '300px',
      width: '150px',
      borderStyle: 'solid'
    }
    return (
      <div style={container}>

        <img style={image} alt="featured-products" src = "" />
        <title> Product Title </title>
        <p> Price of Product </p>
        <button> More Info </button>

      </div>

    )

  }


}

export default FeaturedItem
