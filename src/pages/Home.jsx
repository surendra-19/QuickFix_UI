import React from 'react'
import '../index.css'
import Navbar from '../components/Navbar'
import Image1 from '../assets/Home_Image1.jpg'
import SearchForm from '../components/SearchForm'

function Home() {
  return (
    <div className='home-container' >
      <Navbar/>
      <div className="page-container">
        <SearchForm/>
      </div>
    </div>
  )
}

export default Home