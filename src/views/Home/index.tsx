import React, { useState, useRef, useEffect } from 'react'
// import styled from 'styled-components'
import Header from '../components/Header'
import About from '../components/About'
import Roadmap from '../components/Roadmap'

// const Herotimer = styled.div`
//   align-items: center;
//   display: flex;
//   justify-content: center;
//   flex-direction: column;
//   margin: auto;
//   margin-bottom: 32px;
//   padding: 40px;
//   min-height: 70vh;

//   @media (max-width: 768px) {
//     background-size: 45%, cover;
//     background-position: right 0px bottom 0%, center;
//   }
// `
// const HerotimerBg = styled.div`
//   background-image: url(images/hiroshi/header2.png), url(images/hiroshi/header1.png);
//   background-repeat: no-repeat, no-repeat;
//   background-position: right bottom, left top;
//   background-size: 300px, 300px;
//   height: 480px;
//   width: 100%;
//   position: absolute;
//   z-index: 10;
// `
// const WhiteSection = styled.div`
//   background: linear-gradient(90deg, #f4f8fd 0%, #eefbf9 100%);
//   padding: 0;
//   position: relative;
// `
// const SectionInner = styled.div`
//   max-width: 1200px;
//   margin-left: auto;
//   margin-right: auto;
//   padding-left: 30px;
//   padding-right: 30px;
// `

// const ConnectBtn = styled(Button)`
//   background: #fff;
//   color: #2498a5;
//   margin-top: 20px;
// `
// const BottomPageSec = styled(Page)`
//   max-width: unset;
// `
// const Cards = styled(BaseLayout)`
//   align-items: stretch;
//   justify-content: stretch;
//   margin-bottom: 32px;

//   & > div {
//     grid-column: span 6;
//     width: 100%;
//   }

//   ${({ theme }) => theme.mediaQueries.sm} {
//     & > div {
//       grid-column: span 8;
//     }
//   }

//   ${({ theme }) => theme.mediaQueries.lg} {
//     & > div {
//       grid-column: span 6;
//     }
//   }
//   @media (max-width: 968px) {
//     grid-template-columns: unset;
//   }
// `

const Home: React.FC = () => {
  return (
    <>
    <Header/>
    <About/>
    <Roadmap/>
    <img src="images/bgfooter.png" className="bgfooter wow fadeInDown" data-wow-duration="1s" data-wow-delay="1s"/>
    </>
  )
}

export default Home
