import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'


const Header: React.FC = () => {
  return (
    <section className="header">

        <div className="inner">
            <img src="images/logo.png" className="logo" />
        <h2>
        Peer to Peer, Automated Rewards Farming
        </h2>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
        </p>
        <div className="btnOuter">
            <a className="btn-main" href="#">Launch</a>
            <a className="btn-main" href="#">Buy</a>
        </div>
        <div className="socialIcons">
            <a href="#"><img src="images/icons/ic1.png" /></a>
            <a href="#"><img src="images/icons/ic2.png" /></a>
            <a href="#"><img src="images/icons/ic3.png" /></a>
            <a href="#"><img src="images/icons/ic4.png" /></a>
            <a href="#"><img src="images/icons/ic5.png" /></a>
        </div>
        </div>
    </section>
  )
}

export default Header
