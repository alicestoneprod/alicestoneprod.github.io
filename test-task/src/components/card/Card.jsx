import React, { useState } from "react"
import "./styles/Card.css"
import photo from "./img/image_2.svg"
const Card = () => {
  const [currentColor, setCurrentColor] = useState("red")

  const setCurrentColorHandler = (color) => {
    if (!(color === currentColor)) {
      setCurrentColor(color)
    }
  }
  return (
    <div className='Card'>
      <div className='Card__img_container'>
        <img src={photo} alt='Фото товара' />
      </div>
      <div className='Card-items'>
        <div className='Card__info'>
          <div className='Card__info__about'>
            <h1 className='Card__info__about__price'>100$</h1>
            <h2 className='Card__info__about__title'>Zebronics head phone</h2>
            <p className='Card__info__about__description'>
              A portable headphone with a battery life of 20 hours and IP67
              rating. Comes with a 3 years warranty.
            </p>
          </div>
        </div>
        <div className='Card__color-menu'>
          <p className='Card__color-menu__text'>Choose your colour</p>
          <div className='Card__color-menu__container'>
            <div
              className='Card__color-menu-circle red'
              style={{
                borderColor: currentColor === "red" ? "#000" : "#FFF",
              }}
              onClick={() => {
                setCurrentColorHandler("red")
              }}></div>
            <div
              className='Card__color-menu-circle blue '
              style={{
                borderColor: currentColor === "blue" ? "#000" : "#FFF",
              }}
              onClick={() => {
                setCurrentColorHandler("blue")
              }}></div>
            <div
              className='Card__color-menu-circle black'
              style={{
                borderColor: currentColor === "black" ? "#000" : "#FFF",
              }}
              onClick={() => {
                setCurrentColorHandler("black")
              }}></div>
          </div>
        </div>
        <div className='Card__buttons-container'>
          <button className='Card__buttons yellow'>Add to cart</button>
          <button className='Card__buttons white white_button'>Buy now</button>
        </div>
        <div className='Card__other'>
          <a className='Card__other-read'>Read reviews</a>
        </div>
      </div>
    </div>
  )
}

export default Card
