import React from 'react'
import Navbar from './../components/Home/Navbar'
import GetInToutch from './../components/Home/GetInTouch'
import Footer from './../components/Home/Footer'
import Canada from '../components/Locations/Canada'
import UK from '../components/Locations/UK'
import Australia from '../components/Locations/Australia'

const locations = () => {
  return (
    <div>
        <Navbar/>
        <Canada/>
        <Australia/>
        <UK/>
        <GetInToutch/>
        <Footer/>
    </div>
  )
}

export default locations