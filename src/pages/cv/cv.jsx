import React from 'react';
// import { Link } from 'react-router-dom';

// Components 
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';

// Images 
import pdfIcon from '../../assets/icons/pdf.svg';
import pdfImage from '../../assets/images/cv_image.png';

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

            <a href="/assets/pdfs/OrestSzopiak_CV.pdf" target="_blank" className="cv__link"><img src={pdfIcon} alt="PDF download" className="cv__icon"/>View / Download PDF (73kb)</a>

            <a href="/assets/pdfs/OrestSzopiak_CV.pdf" target="_blank" className="cv__link">
              <img src={pdfImage} alt="My CV" className="cv__image"/>
            </a>
            
            
          </div>
        </section>

      <Footer />
    </>
  )
  }
}    