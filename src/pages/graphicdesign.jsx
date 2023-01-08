import React from 'react'
import Navbar from './../components/Home/Navbar'
import GetInToutch from './../components/Home/GetInTouch'
import Footer from './../components/Home/Footer'
import GraphicDesign from '../components/GraphicDesign/GraphicDesign'
import ViewProjects from '../components/GraphicDesign/ViewProjects'
import Cards from '../components/GraphicDesign/Cards'

const graphicdesign = () => {
  return (
    <div>
        <Navbar/>
        <GraphicDesign/>
        <Cards/>
        <ViewProjects/>
        <GetInToutch/>
        <Footer/>
    </div>
  )
}

export default graphicdesign