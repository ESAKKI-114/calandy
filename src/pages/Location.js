import React from 'react';
import '../components/CSS/Location.css'; // Optional: customize styling

const Location = () => {
  return (
    <div className="location">
      <h1>Our Location</h1>
      <section className="location-section">
        <div className="address-details">
          <h2>Visit Our Store</h2>
          <p>
            Karthik Calendars<br/>
            2/806B1, ThandayuthaPuram<br/>
            Sivakasi 626189<br />
          </p>
          <ul>
            <li><strong>Phone:</strong> +91 95655 03920</li>
            <li><strong>Email:</strong> karthickcalendars2020@gmail.com</li>
            <li><strong>Working Hours:</strong> Mon - Sat, 10:00am - 7:00pm</li>
          </ul>
        </div>

        <div className="map-container">
          <div className="map-embed-container" style={{ width: '100%', height: '400px' }}>
            <iframe
              title="Karthik Calendars Sivakasi"
              className="map-iframe"
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3935.390764859214!2d77.80486907502436!3d9.474699190605541!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOcKwMjgnMjguOSJOIDc3wrA0OCcyNi44IkU!5e0!3m2!1sen!2sin!4v1759585902459!5m2!1sen!2sin"
              width="70%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Location;
