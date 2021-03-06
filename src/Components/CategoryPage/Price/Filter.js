import React from 'react'
import Button from 'react-bootstrap/Button'

class Filter extends React.Component{

  render(){

    const style = {
      display: 'flex',
      flexDirection: 'column',
      padding: '30px',
      textAlign: 'center'
    }

    const button = {
      margin: '10px'
    }

    return(

      <div style={style}>
        <h6> Price </h6>
        <Button style={button} variant="primary" size="sm">Price Range 1</Button>
        <Button style={button} variant="primary" size="sm">Price Range 2</Button>
        <Button style={button} variant="primary" size="sm">Price Range 3</Button>
        <Button style={button} variant="primary" size="sm">Price Range 4</Button>
        <Button style={button} variant="primary" size="sm">Price Range 5</Button>
        <Button style={button} variant="primary" size="sm">Price Range 6</Button>
      </div>



    )


  }



}


export default Filter
