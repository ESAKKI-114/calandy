import React, { useState, useEffect } from 'react';
import '../components/CSS/Home.css';


const sliderImages = [
  {
    src: '/pdfs/WallCalender.jpg', // random wall calendar
    alt: 'Wall Calendar',
    link: '/design?type=wall',
  },
  {
    src: '/pdfs/DeskCalender.jpeg', // random desk calendar
    alt: 'Desk Calendar',
    link: '/design?type=desk',
  },
  {
    src: 'pdfs/CustomCalender.png', // random custom calendar
    alt: 'Custom Calendar',
    link: '/design?type=custom',
  },
];



const Home = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % sliderImages.length);
    }, 10000); // 10 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home">
      <header className="home-banner">
        <h1>Welcome to Karthik's Calender 🗓️</h1>
        <p>Your one-stop shop for personalized and professional calendars!</p>
      </header>

      {/* 💡 New Responsive Split Section */}
      <section className="home-slider-content">
        <div className="slider-image-container">
          <img
            src={sliderImages[current].src}
            alt={sliderImages[current].alt}
            className="slider-image"
          />
        </div>

        <div className="home-intro">
          <h2>Why Choose Us?</h2>
          <ul>
            <li>📅 Wide range of calendar types – wall, desk, custom, corporate.</li>
            <li>🎨 Unique and elegant designs tailored for every occasion.</li>
            <li>💼 Bulk orders & branding for businesses available.</li>
            <li>🚚 Fast shipping and excellent customer service.</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Home;
