import React, { useState, useEffect } from "react";
import { Container, Spinner } from "react-bootstrap";
import HTMLFlipBook from "react-pageflip";
import Heading from "../Common/heading/Heading";
import * as pdfjsLib from "pdfjs-dist/build/pdf";
import "pdfjs-dist/build/pdf.worker"; // Required for PDF processing
import "../blog/Blog.css";

// PDF File Paths
const dept_magazine = "../pdfs/Harmony-2nd_Edition.pdf";

export default function MagazineCard() {
  const [pdfPages, setPdfPages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);

  // Function to Convert PDF to Images
  useEffect(() => {
    const loadPdf = async () => {
      setLoading(true);
      const pdf = await pdfjsLib.getDocument(dept_magazine).promise;
      const pages = [];

      for (let i = 1; i <= pdf.numPages; i++) {
        const page = await pdf.getPage(i);
        const viewport = page.getViewport({ scale: 3 }); // High-Quality
        const canvas = document.createElement("canvas");
        const context = canvas.getContext("2d");
        canvas.width = viewport.width;
        canvas.height = viewport.height;

        const renderContext = {
          canvasContext: context,
          viewport: viewport,
        };

        await page.render(renderContext).promise;
        pages.push(canvas.toDataURL("image/png"));
      }

      setPdfPages(pages);
      setLoading(false);
    };

    loadPdf();
  }, []);

  return (
    <div id="magazine-section">
      <Heading
        subtitle="Optimizing Success, One Metric at a Time"
        title="Performance Metrics: The Annual Report"
        subtitleClass="magazine_subheading"
        titleClass="magazine_heading"
      />
      <section className="department_magazine">
        <Container className="flipbook_mag_container">
          <div className="flipbook-mag-container">
            {loading ? (
              <Spinner animation="border" role="status">
                <span className="visually-hidden loading-message">Loading...</span>
              </Spinner>
            ) : (
              <>
                <HTMLFlipBook
                  width={600}
                  height={800}
                  showCover={true}
                  display="double"
                  className="flipbook"
                  onFlip={(e) => setCurrentPage(e.data)}
                >
                  {pdfPages.map((src, index) => (
                    <div key={index} className="mag_page">
                      <img src={src} alt={`Page ${index + 1}`} className="mag_pdf-page" />
                      <div className="mag_page-number">Page {index + 1}</div>
                    </div>
                  ))}
                </HTMLFlipBook>
              </>
            )}
          </div>
        </Container>
      </section>
    </div>
  );
}
