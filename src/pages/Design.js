import React from "react";
import { Link } from "react-router-dom";

const calendarSizes = [
  {
    size: "20x30",
    pdfLink: "/pdfs/calendar-20x30.pdf",
    description: "Elegant large-format calendar with plenty of space for notes.",
  },
  {
    size: "15x25",
    pdfLink: "/pdfs/calendar-15x25.pdf",
    description: "Compact calendar perfect for desks or small spaces.",
  },
  {
    size: "15x20",
    pdfLink: "/pdfs/calendar-15x20.pdf",
    description: "Compact calendar perfect for desks or small spaces.",
  },
  {
    size: "12x18",
    pdfLink: "/pdfs/calendar-12x18.pdf",
    description: "Compact calendar perfect for desks or small spaces.",
  },
  {
    size: "10x15",
    pdfLink: "/pdfs/calendar-10x15.pdf",
    description: "Compact calendar perfect for desks or small spaces.",
  },
];

const Design = () => {
  return (
    <div className="calendar-container">
      {calendarSizes.map((cal) => (
        <div key={cal.size} className="calendar-card">
          <h2 className="calendar-size">{cal.size} cm</h2>
          <p className="calendar-desc">{cal.description}</p>
          <Link to={`/pdf-viewer?file=${encodeURIComponent(cal.pdfLink)}`}>
            <button className="calendar-btn">View PDF</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Design;
