import React, { useRef } from 'react'
import '../index.css'
import Navbar from '../components/Navbar'
import Image1 from '../assets/Home_Image1.jpg'
import MultiSelectSearchForm from '../components/MultiSelectSearchForm'
import Footer from '../sections/Footer'
import AboutUs from '../sections/AboutUs'
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  const handleSearch = () => {
    navigate('/results');
  };

  const aboutRef = useRef();
  function scrollToAbout() {
    if(aboutRef.current){
      const yOffset = -80;
      const y = aboutRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({top:y,behavior:'smooth'});
    }
  }
  return (
    <div className='home-container' >
      <Navbar onAboutClick={() => scrollToAbout()} />
      <div className="page-container">
        <section className='home-layout'>
          <div className='home-layout-left'>
            <h1>Find Reliable </h1>
            <h1>Service Experts</h1>
            <span>Choose the service you need and book easily</span>
            <div style={{display:'flex',gap:'17px',margin:'7px 0px'}}>
              <MultiSelectSearchForm/>
              <MultiSelectSearchForm/>
            </div>
            <button className='orange-btn' onClick={handleSearch} >Search</button>
          </div>
          <div className='home-layout-right'>
              <img src={Image1} alt='Home-Image-1' />
          </div>
        </section>
        <AboutUs ref={aboutRef}/>
      </div>
      <Footer/>
    </div>
  )
}

export default Home