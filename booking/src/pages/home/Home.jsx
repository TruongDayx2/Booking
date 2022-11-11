import React from 'react'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <h1 className="homeTitle">Browse by property type</h1>
        <h1 className="homeTitle">Homes guests love</h1>
        <Footer/>
      </div>
    </div>
  )
}

export default Home