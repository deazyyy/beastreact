import React, { useState, useRef, useEffect } from 'react'
// import styled from 'styled-components'


const About: React.FC = () => {
  return (
    <div style={{position:"relative"}}>
        <img src="images/bark1.png" className="bark1" />
       
        <section className="meet wow fadeInDown" data-wow-duration="1s" data-wow-delay="0.60s">
          <img src="images/bush.png" className="bush" />
          <div className="info">
          <h2>
           MEET THE BEAST
          </h2>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          </div>
        </section>
        <section className="meetcards">
        <img src="images/bark2.png" className="bark2" />
        <img src="images/bark3.png" className="bark3" />
        <div className="cardOuter">
            <div className="cards card_left">
                <h3>Auto Burn</h3>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <img src="images/cardleft.png" className="card_left" />
            </div>
            <div className="cards card_right">
                <h3>Auto Burn</h3>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <img src="images/cardright.png" className="card_right" />
            </div>
          </div>
        </section>

        <section className="tokenomics wow fadeInDown" data-wow-duration="1s" data-wow-delay="0.80s">
        
          <h2>
           Tokenomics
          </h2>
          <div className="cardOuter">
            <div className="cards ">
                <h3>Auto Burn</h3>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <img src="images/cardleft.png" className="card_left" />
            </div>
            <div className="cards card_center">
                <h3>Auto Burn</h3>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <img src="images/cardcenter.png" className="card_center" />
            </div>
            <div className="cards card_right">
                <h3>Auto Burn</h3>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <img src="images/cardright.png" className="card_right" />
            </div>
          </div>
        </section>
    </div>
  )
}

export default About
