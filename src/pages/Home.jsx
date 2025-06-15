import React from 'react'
import '../index.css'
import Navbar from '../components/Navbar'
import Image1 from '../assets/Home_Image1.jpg'
import MultiSelectSearchForm from '../components/MultiSelectSearchForm'
import Footer from '../components/Footer'

function Home() {
  return (
    <div className='home-container' >
      <Navbar/>
      <div className="page-container">
        <div className='home-layout'>
          <div className='home-layout-left'>
            <h1>Find Reliable </h1>
            <h1>Service Experts</h1>
            <span>Choose the service you need and book easily</span>
            <div style={{display:'flex',gap:'17px',margin:'7px 0px'}}>
              <MultiSelectSearchForm/>
              <MultiSelectSearchForm/>
            </div>
            <button className='orange-btn' >Search</button>
          </div>
          <div className='home-layout-right'>
              <img src={Image1} alt='Home-Image-1' />
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Home