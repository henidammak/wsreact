import React from 'react'
import {Carousel} from "react-bootstrap";

export const Second = () => {
    return (
        <div>
            <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      height="400"
      src="https://eskipaper.com/images/skateboard-wallpaper-27.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Marques</h3>
      <p>GlOBE -  TRUSHER  - DC  - SKATEDELUXE
</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      height="400"
      src="https://i.pinimg.com/originals/e0/8e/85/e08e85316f01ea6abd7b03af148f12af.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Skateboards</h3>
      <p>khboro  - oxelo  - Girl -  Emerica</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      height="400"
      src="https://wallpaperaccess.com/full/1668047.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Vétements</h3>
      <p>Nike SB -  Adidas  - Vans</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    )
}

export default Second


