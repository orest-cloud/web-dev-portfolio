import React from 'react';
// import { Link } from 'react-router-dom';

// Components 
import Header from '../../components/header/header';
import ProjectsGrid from '../../components/projects-grid/projects-grid';
import Footer from '../../components/footer/footer';

// Images 
import pdfIcon from '../../assets/icons/pdf.svg';
import {ReactComponent as PdfImage} from '../../assets/images/cv_image.svg';

// Styles 
import './cv.scss';


export default class CV extends React.Component {

  render() {

  document.title = "Curriculum Vitae | Orest's Web Development Portfolio";

  return (
    <>
      <Header />
        <section className="cv">
          <div className="cv__content-container">
          
            <h2 className="cv__main-heading">Professional CV</h2>

            <div className="cv__hr" />

            <a href="/assets/pdfs/OrestSzopiak_CV.pdf" target="_blank" className="cv__link"><img src={pdfIcon} alt="PDF download" className="cv__icon"/>View / Download PDF (73kb)</a>

            <PdfImage className="cv__image" />
            
          </div>
        </section>

        <ProjectsGrid heading="Projects" exclude="" />

      <Footer />
    </>
  )
  }
}    