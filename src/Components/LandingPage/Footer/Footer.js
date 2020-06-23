import React from 'react'
import FooterItem from './FooterItem'


class Footer extends React.Component{
  render(){

    const style = {

      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      textAlign: 'center',
      borderStyle: 'solid',
      borderWidth: 'thin',
      padding: '25px',
      margin: '25px'
    }


    return(

        <div style={style}>

        <FooterItem />
        <FooterItem />
        <FooterItem />
        <FooterItem />


        </div>

    )
  }
}

export default Footer
