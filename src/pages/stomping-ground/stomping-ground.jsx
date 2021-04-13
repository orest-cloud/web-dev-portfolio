import React from 'react';
// import { Link } from 'react-router-dom';

// Components 
import Header from '../../components/header/header';
// import CircleButton from '../../components/circle-button/circle-button';
import SkillsGroup from '../../components/skills-group/skills-group';
import ProjectPageElement from '../../components/project-page-element/project-page-element';
import Footer from '../../components/footer/footer';

// Images 
// import imageHomePage from '../../assets/images/StompingGround_Home_1.jpg';

// Styles 
import './stomping-ground.scss';

// Page content from JSON
const pageData = require('../../data/page_stomping-ground.json');


export default function StompingGround() {
  document.title = "Stomping Ground | Orest's Web Development Portfolio";

  return (
    <>
      <Header />
        <section className="stomping-ground">

          <div className="stomping-ground__content-container">
            <h2 className="stomping-ground__main-heading">Stomping Ground, a React App</h2>

            <div className="stomping-ground__skills-section">
              <SkillsGroup heading="Tools Used" displaySkills={['React', 'Express.js', 'Illustrator']} />

              <h4 className="stomping-ground__heading--inline">JS Libraries Used:</h4>
              <p className="stomping-ground__paragraph--inline">Axios, CORS, Nodemon, UUID</p>
            </div>


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