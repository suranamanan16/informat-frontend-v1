import React from 'react'
import Product from './Product'
import Price from './Price/Price'

class Body extends React.Component{


  render(){

    const style = {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-start'
    }

    const flexItem = {
      margin: '10px'
    }

    const product = {
      display: 'flex',
      flexDirection: 'column'
    }

    return(

      <div>

      <div style={style}>

        <div>
          <Price />
        </div>

          <div style={product}>
            <Product />
            <Product />
            <Product />
            <Product />
          </div>



      </div>


      </div>





    )


  }

}

export default Body
