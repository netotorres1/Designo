import React from 'react'
import Navbar from './../components/Home/Navbar'
import GetInToutch from './../components/Home/GetInTouch'
import Footer from './../components/Home/Footer'
import AppDesign from '../components/AppDesign/AppDesign'
import ViewProjects from '../components/AppDesign/ViewProjects'
import Cards from '../components/AppDesign/Cards'


const appdesign = () => {
  return (
    <div>
        <Navbar/>
        <AppDesign/>
        <Cards/>
        <ViewProjects/>
        <GetInToutch/>
        <Footer/>
    </div>
  )
}

export default appdesign