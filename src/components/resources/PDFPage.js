// PDFPage.jsx
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import PDFViewer from "./PDFViewer";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const PDFPage = () => {
  const query = useQuery();
  const fileParam = query.get("file");
  const [loading, setLoading] = useState(true);

  if (!fileParam) {
    return <p>No PDF selected</p>;
  }

  // Build absolute URL
  const fileUrl = `${window.location.origin}${decodeURIComponent(fileParam)}`;
  console.log("PDF file param:", fileParam);
  console.log("PDF final URL:", fileUrl);

  return (
    <div
      style={{
        height: "100vh",
        padding: "20px",
        position: "relative", // to keep loader absolute
      }}
    >
      {loading && (
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
          }}
        >
          <div className="loader"></div>
          <p>Loading PDF...</p>
        </div>
      )}

      <div style={{ width: "100%", height: "100%" }}>
        <PDFViewer fileUrl={fileUrl} setLoading={setLoading} />
      </div>
    </div>
  );
};


export default PDFPage;
