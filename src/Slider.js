import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';


class Slider extends React.Component{

  render(){

    const style = {
      height: '500px',
      padding: '40px'
    }


    return(

  <div>
    <Carousel>
      <Carousel.Item>
              <img className="d-block w-100" style={style} src={require('./images/logo.jpg')} alt="First slide" />
                <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
          <img className="d-block w-100" style={style}src={require('./images/earth.jpg')} alt="First slide" />

        <Carousel.Caption>

          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      < /Carousel.Item>
      </Carousel>
  </div>

    )
  }

}

export default Slider
