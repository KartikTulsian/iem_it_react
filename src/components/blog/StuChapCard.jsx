import React, { useState, useEffect } from "react";
import { Container, Button } from "react-bootstrap";
import HTMLFlipBook from "react-pageflip";
import Heading from "../Common/heading/Heading";
// import pdfjsLib from '../../pdfConfig';// Import the common config
import * as pdfjsLib from "pdfjs-dist/build/pdf";

import "pdfjs-dist/build/pdf.worker"; // Required for PDF processing
import "./Blog.css";

// pdfjsLib.GlobalWorkerOptions.workerSrc = new URL(
//   'pdfjs-dist/build/pdf.worker.min.mjs',
//   import.meta.url
// ).toString();

// PDF File Paths
const studentChapFiles = {
  comp_society: "../pdfs/IEM_CSI_TechPulse_2020.pdf",
  entrepreneurship_cell: "../pdfs/E_Cell.pdf",
};

export default function StuChapCard() {
  const [selectedPdf, setSelectedPdf] = useState(studentChapFiles["comp_society"]);
  const [pdfPages, setPdfPages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);

  // Function to Convert PDF to Images
  useEffect(() => {
    const loadPdf = async () => {
      setLoading(true);
      const pdf = await pdfjsLib.getDocument(selectedPdf).promise;
      const pages = [];

      for (let i = 1; i <= pdf.numPages; i++) {
        const page = await pdf.getPage(i);
        const viewport = page.getViewport({ scale: 2 }); // High-Quality
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
  }, [selectedPdf]);

  return (
    <div id="student_chapter-section">
      <Heading
        subtitle="Professional Chapters"
        title="Leading with knowledge. Growing through collaboration."
      />
      <section className="student_chapter">
        <Container className="chap-container">
          <div className="chapter-buttons">
            <Button
              onClick={() => setSelectedPdf(studentChapFiles["comp_society"])}
              className={selectedPdf === studentChapFiles["comp_society"] ? "active" : ""}
            >
              IEM - CSI
            </Button>
            <Button
              onClick={() => setSelectedPdf(studentChapFiles["entrepreneurship_cell"])}
              className={selectedPdf === studentChapFiles["entrepreneurship_cell"] ? "active" : ""}
            >
              IEM - E-Cell
            </Button>
          </div>

          {/* Flipbook Component */}
          <div className="flipbook-container">
            {loading ? (
              <p>Loading PDF...</p>
            ) : (
              <>
                <HTMLFlipBook
                  width={500}
                  height={700}
                  showCover={true}
                  onFlip={(e) => setCurrentPage(e.data)}
                >
                  {pdfPages.map((src, index) => (
                    <div key={index} className="page">
                      <img src={src} alt={`Page ${index + 1}`} className="pdf-page" />
                      <div className="page-number">Page {index + 1}</div>
                    </div>
                  ))}
                </HTMLFlipBook>
                {/* <div className="page-counter">
                  Page {currentPage + 1} / {pdfPages.length}
                </div> */}
              </>
            )}
          </div>
        </Container>
      </section>
    </div>
  );
}


const style = `
.chap-container {
  text-align: center;
  width: 100%;
  max-width: 1200px;
  margin: auto;
  padding: 20px;
  margin-bottom: 20px;
}

.chapter-buttons {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 30px;
}

.chapter-buttons button {
  background: linear-gradient(135deg, #5f75e5, #a3b0fc);
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 18px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  box-shadow: 4px 6px 16px rgba(0, 0, 0, 0.15);
}

.chapter-buttons button:hover,
.chapter-buttons .active {
  background: linear-gradient(135deg, #464fc4, #8988f0);
  transform: scale(1.1);
  box-shadow: 6px 10px 20px rgba(0, 0, 0, 0.3);
}

.flipbook-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  min-height: 600px;
  position: relative;
}

.page {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  position: relative;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
}

.pdf-page {
  max-width: 100%;
  height: auto;
}

.page-number {
  position: absolute;
  bottom: 10px;
  right: 20px;
  font-size: 14px;
  font-weight: bold;
  color: #333;
  background: rgba(255, 255, 255, 0.8);
  padding: 4px 8px;
  border-radius: 5px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
}

.page-counter {
  margin-top: 15px;
  font-size: 18px;
  font-weight: bold;
  color: #464fc4;
  background: rgba(245, 245, 245, 0.8);
  padding: 6px 12px;
  border-radius: 10px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.2);
}

/* General Styling */
#materials-section {
  padding: 50px;
  background: linear-gradient(135deg, #0a0f30, #23395d);
  font-family: 'Poppins', sans-serif;
}

/* Semester Tabs */
.sem_tabs {
  text-align: center;
  margin-bottom: 30px;
}
.sem-buttons {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 15px;
}
.sem-tab {
  padding: 14px 28px;
  border-radius: 8px;
  background: linear-gradient(135deg, #007bff, #00c6ff);
  color: white;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  font-weight: bold;
  box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.3);
  border: none;
  text-transform: uppercase;
  letter-spacing: 1px;
}
.sem-tab:hover,
.sem-tab.active {
  background: linear-gradient(135deg, #0056b3, #0080ff);
  transform: translateY(-3px);
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.35);
}

/* Study Materials & Lab Assignments Layout */
.study-materials-container {
  display: flex;
  justify-content: space-between;
  gap: 40px;
  flex-wrap: wrap;
}

.study-mats-section,
.lab-assign-section {
  flex: 1;
  min-width: 45%;
}

/* Section Headings */
.study_mat_heading,
.lab_heading {
  color: #ffcc00 !important;
  text-align: center;
  font-size: 1.8rem;
  font-weight: bold;
  text-transform: uppercase;
  text-shadow: 0px 0px 8px rgba(255, 215, 0, 0.7);
  animation: glow 1.5s infinite alternate;
}

@keyframes glow {
  0% { text-shadow: 0px 0px 8px rgba(255, 215, 0, 0.7); }
  100% { text-shadow: 0px 0px 15px rgba(255, 215, 0, 1); }
}

/* Subject & Lab Cards */
.subject-card {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  margin-bottom: 20px;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}
.subject-card:hover {
  transform: scale(1.05);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

/* Folder Headers */
.folder-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  font-weight: bold;
  font-size: 1.2rem;
  padding: 14px;
  background: linear-gradient(to right, #e3f2fd, #bbdefb);
  border-radius: 10px;
  transition: all 0.3s ease-in-out;
}
.folder-header:hover {
  background: linear-gradient(to right, #bbdefb, #90caf9);
  transform: scale(1.02);
}
.folder-icon {
  margin-right: 12px;
  color: #007bff;
  font-size: 1.4rem;
  
}

/* File List Animation */
.file-list {
  padding-left: 20px;
  margin-top: 10px;
  display: none; /* Initially hidden */
  opacity: 0;
  transform: translateY(10px);
  transition: all 0.5s ease-in-out;
}

.file-list.show {
  display: block;
  opacity: 1;
  transform: translateY(0);
  animation: fadeInSlideUp 0.5s ease-in-out forwards;
  
}

@keyframes fadeInSlideUp {
  0% {
    opacity: 0;
    transform: translateY(10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Staggered animation for each file */
.file-item {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #eee;
  padding: 10px;
  font-size: 1rem;
  transition: all 0.3s ease-in-out;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.05);
  margin-top: 10px;
  opacity: 0;
  transform: translateY(10px);
}

.file-list.show .file-item {
  opacity: 1;
  transform: translateY(0);
  animation: fadeInSlideUp 0.4s ease-in-out forwards;
}
.file-icon {
  margin-right: 5px;
}

/* .file-list.show .file-item:nth-child(1) {
  animation-delay: 0.1s;
}
.file-list.show .file-item:nth-child(2) {
  animation-delay: 0.2s;
}
.file-list.show .file-item:nth-child(3) {
  animation-delay: 0.3s;
}
.file-list.show .file-item:nth-child(4) {
  animation-delay: 0.4s;
} */

/* Responsive Design */
@media (max-width: 992px) {
  .study-materials-container {
    flex-direction: column;
    align-items: center;
  }
  .study-mats-section,
  .lab-assign-section {
    width: 90%;
  }
  .sem-buttons {
    flex-wrap: wrap;
  }
}

@media (max-width: 600px) {
  #materials-section {
    padding: 30px;
  }
  .sem-tab {
    padding: 12px 20px;
    font-size: 14px;
  }
  .folder-header {
    font-size: 1rem;
    padding: 10px;
  }
  .file-item {
    font-size: 0.9rem;
    padding: 8px;
  }
}
`