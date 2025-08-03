import { useState } from 'react';

import img1 from './assets/imgs/img1.png';
import img2 from './assets/imgs/img2.png';
import img3 from './assets/imgs/img3.png';
import ArrowIcon from './assets/imgs/icon/arrow.svg';

const App = () => {
  const navItems = ['Parents', 'Kids', 'Students', 'Professionals', 'Tutors'];
  const [activeTab, setActiveTab] = useState('Parents');

  const steps = [
    {
      title: 'Tap Any Button',
      description: 'Share your number — we’ll do the rest.',
    },
    {
      title: 'Friendly Call from Madrasa',
      description: 'We’ll understand your child’s needs and suggest a caring tutor.',
    },
    {
      title: '1st Free Demo Class',
      description: 'Your child gets matched with a gentle, verified Ustaad.',
    },
    {
      title: 'Start Monthly Learning',
      description: 'If satisfied, you can start regular classes — or try a second free demo.',
    },
  ];

  const handleTabClick = (e, tab) => {
    e.preventDefault();
    setActiveTab(tab);
  };

  return (
    <div className="page-container">

      <div className='page-section'>
        <nav className="tabs-nav">
          <ul>
            {navItems.map((item) => (
              <li key={item} className={activeTab === item ? 'active' : ''}>
                <a href="#" onClick={(e) => handleTabClick(e, item)}>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <main>
          {activeTab === 'Parents' && (
            <>
              <section className="hero-section">
                <h1 className="hero-title">Parents</h1>
                <div className="image-gallery">
                  <div className="image-wrapper one">
                    <img src={img1} alt="" />
                  </div>
                  <div className="image-wrapper two">
                    <img src={img2} alt="" />
                  </div>
                  <div className="image-wrapper three">
                    <img src={img3} alt="" />
                  </div>
                </div>
                <div className="promo-banner">
                  <p>A thoughtful way to deepen your understanding – no matter your routine.</p>
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.0459 12.7959L14.2959 19.5459C14.0846 19.7573 13.7979 19.876 13.4991 19.876C13.2002 19.876 12.9135 19.7573 12.7022 19.5459C12.4908 19.3346 12.3721 19.048 12.3721 18.7491C12.3721 18.4502 12.4908 18.1635 12.7022 17.9522L17.5312 13.125H3.75C3.45163 13.125 3.16548 13.0065 2.9545 12.7955C2.74353 12.5845 2.625 12.2984 2.625 12C2.625 11.7016 2.74353 11.4155 2.9545 11.2045C3.16548 10.9935 3.45163 10.875 3.75 10.875H17.5312L12.7041 6.04501C12.4927 5.83367 12.374 5.54702 12.374 5.24814C12.374 4.94925 12.4927 4.66261 12.7041 4.45126C12.9154 4.23992 13.2021 4.12119 13.5009 4.12119C13.7998 4.12119 14.0865 4.23992 14.2978 4.45126L21.0478 11.2013C21.1527 11.3059 21.2359 11.4303 21.2926 11.5672C21.3493 11.7041 21.3784 11.8508 21.3782 11.999C21.3781 12.1472 21.3486 12.2939 21.2916 12.4306C21.2346 12.5674 21.1511 12.6915 21.0459 12.7959Z" fill="#564616"/>
                  </svg>
                </div>
              </section>

              <section className="content-section">
                <div className="how-it-works-section">
                  <h2>How it works</h2>
                  <p>We've built a simpler, faster way to match you with the right Ustaad – all streamlined to save you time and effort.</p>
                  <p className="cta-prompt">STRUGGLING TO FIND A PERFECT TUTOR.</p>
                  <button className="cta-button">Start With 2 Free Demo</button>
                </div>
                <div className="steps-section">
                  <ul>
                    {steps.map((step) => (
                      <li key={step.title} className="step-item">
                        <div className="step-icon"></div>
                        <div className="step-content">
                          <h3>{step.title}</h3>
                          <p>{step.description}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>
            </>
          )}

          {/* Placeholder content for other tabs */}
          {activeTab !== 'Parents' && (
            <div className="placeholder-content">
              <h2>Content for {activeTab}</h2>
              <p>This area would display the content specific to the "{activeTab}" tab.</p>
            </div>
          )}
        </main>
      </div>

    </div>
  );
};

export default App;