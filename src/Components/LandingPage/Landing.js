import React from 'react'
import Featured from './FeaturedSection/Featured'
import Slider from './Slider'
import Footer from './Footer/Footer'


class Landing extends React.Component{

  render(){



    return(
      <div>
        <Featured />
        <Slider />
        <Footer />
      </div>



    )


  }


}

export default Landing
