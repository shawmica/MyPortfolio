import React from 'react'
import './MyWork.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import arrow_icon from '../../assets/arrow_icon.svg'

// Import your certificate images
import cert1 from '../../assets/certificates/cert1.png'
import cert2 from '../../assets/certificates/cert2.png'
import cert3 from '../../assets/certificates/cert3.png'
import cert4 from '../../assets/certificates/cert4.png'
import cert5 from '../../assets/certificates/cert5.png'
import cert6 from '../../assets/certificates/cert6.png'

// Add more as needed...

const MyWork = () => {
  return (
    <div id='mywork' className='mywork'>
      {/* Title */}
      <div className="mywork-title">
        <h1>My Certifications</h1>
        <img src={theme_pattern} alt="underline" />
      </div>

      {/* Certificates */}
      <div className="mywork-container">
        <img src={cert1} alt="Certificate 1" />
        <img src={cert2} alt="Certificate 2" />
        <img src={cert3} alt="Certificate 3" />
        <img src={cert4} alt="Certificate 4" />
        <img src={cert5} alt="Certificate 5" />
        <img src={cert6} alt="Certificate 6" />
        {/* Add more images here */}
      </div>

      {/* Optional Show More Button */}
      <div className="mywork-showmore">
        <p>Show More</p>
        <img src={arrow_icon} alt="Arrow Icon" />
      </div>
    </div>
  )
}

export default MyWork
