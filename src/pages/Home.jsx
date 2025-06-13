import React from 'react'
import '../index.css'
import Navbar from '../components/Navbar'
import Image1 from '../assets/Home_Image1.jpg'
import MultiSelectSearchForm from '../components/MultiSelectSearchForm'

function Home() {
  return (
    <div className='home-container' >
      <Navbar/>
      <div className="page-container">
        <div className='home-layout'>
          <div>
            <h1>Find Reliable Service Experts</h1>
            <span>Choose the service you need and book easily</span>
            <MultiSelectSearchForm/>
            <MultiSelectSearchForm/>
            <button className='orange-btn' >Search</button>
          </div>
          <div>
              <img className='Home-Image-1' src={Image1} alt='Home-Image-1' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home