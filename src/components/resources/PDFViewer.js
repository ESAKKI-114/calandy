// PDFViewer.jsx
import React, { useState, useEffect, useRef } from "react";
import { Document, Page, pdfjs } from "react-pdf";

// Tell react-pdf where to find the worker
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function PDFViewer({ fileUrl, setLoading }) {
  const [numPages, setNumPages] = useState(null);
  const [pageWidth, setPageWidth] = useState(800);
  const containerRef = useRef(null);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    if (setLoading) setLoading(false); // hide loader
  };

  // ✅ Dynamically resize based on container
  useEffect(() => {
    function handleResize() {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        setPageWidth(containerWidth > 800 ? 800 : containerWidth - 20);
      }
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ✅ Simple back function
  const handleBack = () => {
    window.history.back();
  };

  return (
    <div
      ref={containerRef}
      style={{
        height: "100%",
        overflowY: "auto",
        backgroundColor: "#f9f9f9",
        padding: "10px",
      }}
    >
      {/* ✅ Simple Back Button */}
      <button
        onClick={handleBack}
        style={{
          padding: "6px 12px",
          marginBottom: "10px",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        ← Back
      </button>

      <Document file={fileUrl} onLoadSuccess={onDocumentLoadSuccess}>
        {Array.from(new Array(numPages), (el, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "20px",
            }}
          >
            <Page pageNumber={index + 1} width={pageWidth} />
          </div>
        ))}
      </Document>
    </div>
  );
}

export default PDFViewer;
