import React from 'react'
import Footer from '../components/Footer'
import Freebook from '../components/Freebook'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'

function Home() {
  return (
    <>
        <Navbar/>
        <Banner/>
        <Freebook/>
        <Footer/>
    </>
  )
}

export default Home