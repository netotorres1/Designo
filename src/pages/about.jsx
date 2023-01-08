import React from 'react'
import Navbar from './../components/Home/Navbar'
import GetInToutch from './../components/Home/GetInTouch'
import Footer from './../components/Home/Footer'
import AboutUs from '../components/About/AboutUs'
import WordClassTalent from '../components/About/WordClassTalent'
import Countries from '../components/About/Countries'
import TheRealDeal from '../components/About/TheRealDeal'

const about = () => {
  return (
    <div>
        <Navbar/>
        <AboutUs/>
        <WordClassTalent/>
        <Countries/>
        <TheRealDeal/>
        <GetInToutch/>
        <Footer/>
    </div>
  )
}

export default about