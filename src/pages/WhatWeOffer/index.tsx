import React from 'react'
import './styles.scss'
import goldenDog from '../../assets/dog-golden.png'


const WhatWeOffer = () => {
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
              
            </div>
        </div>
      </div>
    </>
  )
}

export default WhatWeOffer