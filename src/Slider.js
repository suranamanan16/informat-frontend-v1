import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';


class Slider extends React.Component{

  render(){

    return(

  <div>
    <Carousel>
      <Carousel.Item>
              <img className="d-block w-100" src={require('./images/logo.jpg')} alt="First slide" />
                <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
          <img className="d-block w-100" src={require('./images/earth.jpg')} alt="First slide" />

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
