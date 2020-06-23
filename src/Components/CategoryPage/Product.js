import React from 'react'


class Product extends React.Component{


  render(){

      const style = {
        display: 'flex',
        flexDirection: 'row',
        margin: '25px',
        borderStyle: 'solid',
        borderWidth: 'thin',
        padding: '25px'
      }

      const container = {
        display: 'flex',
        flexDirection: 'column',
        padding: '20px'
      }

      const title = {
        flex: '1'
      }

      const productImage = {
        flex: '2'
      }

      const price = {
        width: '700px',
        textAlign: 'center'
      }


    return(

      <div style={style}>

        <div style={container}>
          <h5 style={title}>The title of the product</h5>
          <img style={productImage} />
        </div>

        <div style={price}>
          <h6>The price of the product</h6>
          <p>Some description</p>
        </div>



      </div>

    )





  }

}


export default Product
