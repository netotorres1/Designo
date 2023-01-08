import React from 'react'
import Navbar from './../components/Home/Navbar'
import Countries from '../components/About/Countries'
import Footer from './../components/Home/Footer'
import ContactUs from '../components/Contact/ContactUs'



const contact = () => {
  return (
    <div>
        <Navbar/>
        <ContactUs/>
        <Countries/>
        <Footer/>
    </div>
  )
}

export default contact