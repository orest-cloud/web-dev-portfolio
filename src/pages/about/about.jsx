import React from 'react';
// import { Link } from 'react-router-dom';

// Components 
import Header from '../../components/header/header';
import ProjectPageElement from '../../components/project-page-element/project-page-element';
import Footer from '../../components/footer/footer';

// Images 
// import imageHomePage from '../../assets/images/StompingGround_Home_1.jpg';

// Styles 
import './about.scss';

// Page content from JSON
const pageData = require('../../data/page_about.json');


export default function About() {
  document.title = "About Me | Orest's Web Development Portfolio";

  return (
    <>
      <Header />
        <section className="about">

          <div className="about__content-container">

            {pageData.map(pageData => {
              return (
                <ProjectPageElement key={pageData.id} {...pageData} />
             )})}

          </div>
        </section>

      <Footer />
    </>
  )
}    