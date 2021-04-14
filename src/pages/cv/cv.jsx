import React from 'react';
// import { StyleSheet } from "react-pdf";
import { Document, Page, pdfjs } from "react-pdf";
// import { Link } from 'react-router-dom';

// Components 
import Header from '../../components/header/header';
// import CircleButton from '../../components/circle-button/circle-button';
// import ProjectPageElement from '../../components/project-page-element/project-page-element';
import Footer from '../../components/footer/footer';

// Images 
import pdfIcon from '../../assets/icons/pdf.svg';
import CV_PDF from '../../assets/pdfs/OrestSzopiak_CV.pdf';

// Styles 
import './cv.scss';

// const styles = StyleSheet.create({
//   page: { border: '5px solid red' },
//   section: { border: '5px solid purple' }
// });

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
// Page content from JSON
// const pageData = require('../../data/page_stomping-ground.json');


export default function CV() {
  document.title = "Curriculum Vitae | Orest's Web Development Portfolio";


  return (
    <>
      <Header />
        <section className="cv">

          <div className="cv__content-container">
            <h2 className="cv__main-heading">Professional CV</h2>

            <a href={CV_PDF} className="cv__link"><img src={pdfIcon} alt="PDF" className="cv__icon"/>Download PDF (73kb)</a>

            <Document
        file="/assets/pdfs/OrestSzopiak_CV.pdf"
  
      >
        <Page className="cv__pdf-embed" pageNumber={1} width={798} height={700} />

      </Document>
            
          </div>
        </section>

      <Footer />
    </>
  )
}    