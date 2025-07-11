import React,{forwardRef} from 'react';
import '../styles/AboutUs.css';

const AboutUs = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="about-container">
      <div className="about-inner">
        <div className="about-left">
          <h1>About Us</h1>
          <p>
            At <strong>QuickFix</strong>, we believe finding trusted local service experts should be quick,
            simple, and stress-free.
          </p>
          <p>
            We're a platform built to bridge the gap between customers and skilled service providers across various cities.
            Whether you're looking for an electrician, beautician, cleaner, or any other local expert — we've got you covered.
          </p>
          <p>
            Our mission is to empower customers with reliable choices and help professionals grow their business
            by connecting them to the right people at the right time.
          </p>
        </div>

        <div className="about-right">
          <h2>Why Choose Us?</h2>
          <ul>
            <li>✅ Curated network of verified service providers</li>
            <li>🧰 Wide range of services across multiple categories</li>
            <li>🌐 Easy-to-use platform for booking and managing tasks</li>
            <li>💬 Transparent reviews and ratings</li>
          </ul>
        </div>
      </div>

      <div className="about-provider">
        <h2>For Service Providers</h2>
        <p>
          Are you a skilled professional? Partner with us to grow your business, reach more customers,
          and work on your own terms.
        </p>
      </div>

      <div className="tagline">
        Let’s simplify services — together.
      </div>
    </div>
  );
});

export default AboutUs;
