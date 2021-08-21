import React from 'react'
import './styles.scss'
import goldenDog from '../../assets/dog-golden.png'
import fanIcon from '../../assets/fan-icon.svg'
import fenceIcon from '../../assets/fence-icon.svg'
import gridIcon from '../../assets/grid-icon.svg'
import houseWinter from '../../assets/house-winter.svg'
import Card from '../../components/Card/index';


const WhatWeOffer = () => {

  const cardsInfo = [
    { text: 'Our accommodations have thermal insulation to keep your pet warn in the winter', icon: houseWinter },
    { text: 'We have a fan sistem in the cealin to avoid excessive heat', icon: fanIcon },
    { text: 'We have individual accommodations for the shy dogs', icon: fenceIcon },
    { text: 'Your dog will have 400m² to play by himself or with friends', icon: gridIcon },
  ]

  return (
    <>
      <div className="container">
        <div id="dog-container">
          <div className="text">
            <p className="big-text">
              We have everything to <span className="yellow-text">guarantee your pet's comfort</span>
            </p>
            <p className="description">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius quibusdam amet possimus voluptate recusandae? Eos dignissimos impedit maiores ex voluptatum ad possimus architecto fugit rem optio, dolores magnam. Delectus, ratione?
            </p>
          </div>

          <div className="dog-img">
            <img src={goldenDog} alt="dog" />
          </div>
        </div>
      </div>
      <div id="infrasctrure" >
        <div className="container">
          <h3 className="big-text">Our infrastructure</h3>
          <div className="cards-container">
            {cardsInfo.map((cardInfo, idx) => {
              return <Card icon={cardInfo.icon} key={idx}>{cardInfo.text}</Card>
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default WhatWeOffer