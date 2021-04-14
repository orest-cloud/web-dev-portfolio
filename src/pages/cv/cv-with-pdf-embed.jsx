import React from 'react';
// import { StyleSheet } from "react-pdf";
import { Document, Page, pdfjs } from "react-pdf";
// import { Link } from 'react-router-dom';

// Components 
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';

// Images 
import pdfIcon from '../../assets/icons/pdf.svg';
// import CV_PDF from '../../assets/pdfs/OrestSzopiak_CV.pdf';

// Styles 
import './cv.scss';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


export default class CV extends React.Component {

  state = {
    pdfWidth: 500
  }

  documentWrapperRef = React.createRef();

  componentDidMount = () => {
    let dummySize = this.documentWrapperRef.current.getBoundingClientRect();

    console.log('%c Dummysize in componentDidMount:', "color: red; font-weight: bold;");
    console.log(dummySize.width);

    this.setState({
      pdfWidth: dummySize.width
    })
  }

  componentDidUpdate() {
    let dummySize = this.documentWrapperRef.current.getBoundingClientRect();

    console.log('%c Dummysize in componentDidUpdate:', "color: green; font-weight: bold;");
    console.log(dummySize.width);
    
    console.log('%c State from componentDidUpdate:', "color: blue; font-weight: bold;");
    console.log(this.state.pdfWidth);

    // console.log('%c prevState from componentDidUpdate:', "color: blue; font-weight: bold;");
    // console.log(prevState);

    if ((dummySize.width) !== this.state.pdfWidth) {
      this.setState({
        pdfWidth: dummySize.width
      })
    }
  }

  render() {

  document.title = "Curriculum Vitae | Orest's Web Development Portfolio";

  return (
    <>
      <Header />
        <section className="cv">
          <div  ref={this.documentWrapperRef} className="cv__content-container">
          
            <h2 className="cv__main-heading">Professional CV</h2>

            <a href="/assets/pdfs/OrestSzopiak_CV.pdf" target="_blank" className="cv__link"><img src={pdfIcon} alt="PDF" className="cv__icon"/>Download PDF (73kb)</a>

            <Document file="/assets/pdfs/OrestSzopiak_CV.pdf">
       
              <Page className="cv__pdf-embed" pageNumber={1} width={this.pdfWidth} />
            </Document>
            
          </div>
        </section>

      <Footer />
    </>
  )
  }
}    