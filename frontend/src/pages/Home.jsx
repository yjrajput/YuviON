import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Playground from '../components/Playground'
import Footer from '../components/Footer'
import Pricing from '../components/Pricing'




const Home = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Features/>
      <Pricing/>
      <Playground/>
      <Footer/>
    </>
  )
}

export default Home