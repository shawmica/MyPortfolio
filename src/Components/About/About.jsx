import React from 'react';
import './About.css';
import theme_pattern from '../../assets/theme_pattern.svg';

const detailedSkills = [
  {
    category: 'Programming Languages',
    items: ['Python', 'C and C++', 'Java', 'JavaScript', 'PHP'],
  },
  {
    category: 'Front-End Web Development',
    items: [
      'HTML5, CSS3',
      'Bootstrap (Framework)',
      'JavaScript (DOM manipulation & interactivity)',
      'React.js',
      'Web Design Principles',
      'Responsive UI development',
    ],
  },
  {
    category: 'UI/UX Design',
    items: [
      'Figma (Prototyping, Wireframing)',
      'User Interface (UI) Design',
      'User Experience (UX) Design',
      'Graphics and Image Processing',
    ],
  },
  {
    category: 'Cloud Platforms & Developer Tools',
    items: ['Microsoft Azure (Cloud Computing)', 'Qt Creator', 'Git & GitHub'],
  },
  {
    category: 'AI & Intelligent Systems',
    items: [
      'Artificial Intelligence',
      'Machine Learning',
      'Digital Image Processing',
      'Computer Vision',
    ],
  },
  {
    category: 'Project & Workflow Management',
    items: [
      'Agile Methodologies',
      'Project Planning & Team Collaboration',
      'Foundations of Project Management',
    ],
  },
  {
    category: 'Other Competencies',
    items: [
      'Problem Solving (HackerRank - Basic)',
      'Database Knowledge (SQL fundamentals)',
      'Self-learning and continuous improvement mindset',
    ],
  },
];

const About = () => {
  return (
    <div id="about" className="about">
      {/* Title */}
      <div className="t1">
        <div className="about-title">
          <h1>About Me</h1>
          <img src={theme_pattern} alt="underline" />
        </div>
      </div>

      {/* Image + Paragraph */}
      <div className="about-sections">
        <div className="about-left">
          <img src="/src/assets/profile.jpg" alt="Profile" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I’m an enthusiastic and dedicated undergraduate pursuing a BSc in Information Technology at Rajarata University of Sri Lanka (2022–2026), with a strong passion for Artificial Intelligence, Machine Learning, Digital Image Processing, and Computer Vision.
            </p>
            <p>
              My academic and self-learning journey has equipped me with a diverse skill set spanning cloud computing, front-end development, UI/UX design, and full-stack programming. I have hands-on experience in agile workflows, project collaboration, and delivering user-centered digital solutions.
            </p>
          </div>
        </div>
      </div>

      {/* Categorized Skills List */}
      <div className="about-skills">
        <div className="detailed-skills">
          {detailedSkills.map((section, index) => (
            <div className="skill-category" key={index}>
              <h3 className="skill-title">{section.category}</h3>
              <ul className="skill-list">
                {section.items.map((item, subIndex) => (
                  <li key={subIndex}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Personal Branding Summary */}
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>Self-Taught</h1>
          <p>Python, React & OpenCV Explorer</p>
        </div>
        <div className="about-achievement">
          <h1>AI Enthusiast</h1>
          <p>With a Passion for Vision-Based Projects</p>
        </div>
        <div className="about-achievement">
          <h1>Always Building</h1>
          <p>From Code to Creativity</p>
        </div>
      </div>
    </div>
  );
};

export default About;
