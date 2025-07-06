// CalendarSummary.jsx
import React from "react";
import "../components/CSS/CalendarSummary.css"; // Optional: for your summary styling

const highlights = [
  "All major Indian and international holidays included.",
  "Conveniently marked weekends and special observances.",
  "Room for notes and reminders on every page.",
  "Custom highlights for birthdays, anniversaries, and company events.",
  "Available in English, Hindi, and other regional languages upon request.",
];

const CalendarSummary = () => {
  return (
    <div className="calendar-summary" style={{ padding: "20px", maxWidth: "900px", margin: "0 auto" }}>
      {/* Company Info */}
      <section className="company-info" style={{ marginBottom: "30px" }}>
        <h1>KARTHIK CALENDARS</h1>
        <p>
          Established in the year 2003 at Sivakasi in South Tamilnadu, we fulfill the needs of our valuable customers.
          The founder of this concern is Mr. S. Kartheeswaran. The first and foremost aim of our concern is quality
          and customer satisfaction.
        </p>
        <p>
          We are manufacturing various designs and sizes of calendars. We are one of the major manufacturers of
          calendars, notebooks, and publication guides and one of the leading companies in the printing sector.
        </p>
        <p>
          Our highly skilled and experienced workforce is dedicated to understanding the diverse needs of our
          customers. We pride ourselves on delivering products that not only meet but exceed expectations in terms
          of quality, functionality, and durability. With a commitment to continuous improvement, we ensure that
          each product we offer provides lasting value and satisfaction.
        </p>
      </section>

      {/* Calendar Features & Highlights */}
      <section className="summary-section" style={{ marginBottom: "30px" }}>
        <h2>Calendar Features & Highlights</h2>
        <ul>
          {highlights.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </section>

    </div>
  );
};

export default CalendarSummary;
