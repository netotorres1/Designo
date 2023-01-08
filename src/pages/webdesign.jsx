import React from 'react'
import Footer from '../components/Home/Footer'
import GetInTouch from '../components/Home/GetInTouch'
import Navbar from '../components/Home/Navbar'
import ViewProjects from '../components/WebDesign/ViewProjects'
import WebDesign from '../components/WebDesign/WebDesign'
import WebSites from '../components/WebDesign/WebSites'

const webdesign = () => {
  return (
    <div>
        <Navbar/>
        <WebDesign/>
        <WebSites/>
        <ViewProjects/>
        
        <GetInTouch/>
        <Footer/>
    </div>
  )
}

export default webdesign