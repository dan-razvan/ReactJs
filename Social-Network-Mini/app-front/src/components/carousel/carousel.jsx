import React from 'react'
import { useEffect, useState } from 'react'

import './carousel.styles.scss'

const Carousel = ({ images }) => {
  const [photo, setPhoto] = useState(images[0])

  useEffect(() => {
    let i = 0

    setInterval(() => {
      setPhoto(images[i])
      i++
      if (i > 7) i = 0
    }, 3000)
  }, [])

  return (
    <div className="carousel-container">
      <h3>CAROUSEL</h3>
      <div className="carousel-elements">
        <div
          className="element"
          style={{
            backgroundImage: `url(${photo})`,
          }}
        ></div>
      </div>
    </div>
  )
}

export default Carousel
