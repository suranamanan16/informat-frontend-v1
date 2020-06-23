import React from 'react'
import Filter from './Filter'

class Price extends React.Component{

  render(){

    const style = {
      display: 'flex',
      flexDirection: 'column',
      borderStyle: 'solid',
      borderWidth: 'thin',
      padding: '20px',
      margin: '30px'
    }

    const items = {
      marginBottom: '25px'
    }


    return(

      <div style={style}>

        <h6 style={items}>Filter By:</h6>

        <Filter />

      </div>


    )
  }

}

export default Price
