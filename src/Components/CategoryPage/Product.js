import React from 'react'


class Product extends React.Component{


  render(){

      const style = {
        display: 'flex',
        flexDirection: 'row'
      }

      const container = {
        display: 'flex',
        flexDirection: 'column'
      }

      const title = {
        flex: '1'
      }

      const productImage = {
        flex: '2'
      }


    return(

      <div style={style}>

        <div style={container}>
          <h5 style={title}>The title of the product</h5>
          <img style={productImage} />
        </div>
        
        <div>
          <h6>The price of the product</h6>
        </div>



      </div>

    )





  }

}


export default Product
