import React from 'react';
import './Hero.css';
import profile_img from '../../assets/profile_img.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import resume from '../../assets/resume.pdf'; // ✅ Import the resume file

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src="/src/assets/profile.jpg" alt="Profile" className="round-photo" />
      <h1><span>I'm Shawmica Sivatharan</span></h1>
      <p>
        I am an enthusiastic learner with a strong interest in Artificial Intelligence (AI),
        Machine Learning (ML), Digital Image Processing, and Computer Vision.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <p>
            <AnchorLink className='anchor-link' offset={50} href='#contact'>
              <pre>Connect With Me</pre>
            </AnchorLink>
          </p>
        </div>

        {/* ✅ Styled Resume Button */}
        <a
          href={resume}
          target="_blank"
          rel="noopener noreferrer"
          className="hero-resume"
        >
          My Resume
        </a>
      </div>
    </div>
  );
};

export default Hero;
