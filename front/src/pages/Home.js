import React from 'react'
import Navbar from '../components/Navbar'
import Category from '../components/Category'
import Footer from '../components/Footer'
import Banner from '../components/Banner'
import Subscribe from '../components/Subscribe'

const Home = () => {
  return (
    <div>
        <Navbar />
        <Banner />
        <Category />
        <Subscribe />
        <Footer />


    </div>
  )
}

export default Home