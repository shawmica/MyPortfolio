import React from 'react';
import './Services.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import arrow_icon from '../../assets/arrow_icon.svg';

const Services = () => {
  return (
    <div id="services" className="services">
      {/* Title */}
      <div className="services-title">
        <h1>My Projects</h1>
        <img src={theme_pattern} alt="pattern" />
      </div>

      {/* Project Cards */}
      <div className="services-container">
        {/* Project 1 */}
        <div className="services-format">
          <h3>01</h3>
          <h2>Fungal Growth Analysis</h2>
          <p>
            A 14-day image processing study analyzing black fungi (Hyphae Penta) on coconut flesh
            using OpenCV and Python. Captured via smartphones, segmented with adaptive thresholding
            and floodfill. Peak growth observed on day 4 with decline due to interference.
          </p>
          <div className="services-readmore">
            <p>Read More</p>
            <img src={arrow_icon} alt="arrow" />
          </div>
        </div>

        {/* Project 2 */}
        <div className="services-format">
          <h3>02</h3>
          <h2>Gesture-Controlled Slides</h2>
          <p>
            Built a gesture-based slide tool using OpenCV and cvzone’s HandTrackingModule.
            Navigate slides with thumb/pinky gestures, annotate with finger drawing, and undo
            using a three-finger gesture. Includes presenter video overlay and safe interaction zones.
          </p>
          <div className="services-readmore">
            <p>Read More</p>
            <img src={arrow_icon} alt="arrow" />
          </div>
        </div>

        {/* Project 3 */}
        <div className="services-format">
          <h3>03</h3>
          <h2>Gesture Volume Control</h2>
          <p>
            Developed a hand gesture-based volume system using OpenCV, Python, and Pycaw. Adjust
            volume by pinching fingers together or apart. Includes real-time hand tracking, a
            dynamic volume bar, and FPS counter for responsive control and feedback.
          </p>
          <div className="services-readmore">
            <p>Read More</p>
            <img src={arrow_icon} alt="arrow" />
          </div>
        </div>

        {/* Project 4 */}
        <div className="services-format">
          <h3>04</h3>
          <h2>Frame Focus</h2>
          <p>
            A modern photography portfolio website built with HTML, CSS, JavaScript, and React.
            Designed to beautifully showcase visual stories with smooth navigation, gallery sections,
            and an immersive homepage banner—perfect for capturing life’s most memorable moments.
          </p>
          <div className="services-readmore">
            <p>Read More</p>
            <img src={arrow_icon} alt="arrow" />
          </div>
        </div>
      </div>

      {/* Show More Button */}
      <div className="services-show-more">
        <p>Show More</p>
        <img src={arrow_icon} alt="arrow" />
      </div>
    </div>
  );
};

export default Services;
