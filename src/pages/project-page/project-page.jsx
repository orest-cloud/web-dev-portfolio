import React from 'react';
// import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

// Components 
import Header from '../../components/header/header';
// import CircleButton from '../../components/circle-button/circle-button';
import SkillsGroup from '../../components/skills-group/skills-group';
import ProjectPageElement from '../../components/project-page-element/project-page-element';
import Footer from '../../components/footer/footer';

// Images 
// import imageHomePage from '../../assets/images/StompingGround_Home_1.jpg';

// Styles 
import './project-page.scss';

// Page data from JSON
const projectsData = require('../../data/projects.json');


export default function ProjectPage() {
  // Get params
  let params = useParams();
  
  
  // Get project data to be displayed
  const currentProject = projectsData.find((data) => 
    data.name === params.project_ID
  );

  // Display 404 if page url is invalid
  if (!currentProject) {
    console.log('%c Page not found', "color: red; font-weight: bold;");
	  console.log(`${params} is not a valid page.`);
    return (
      <h2 className="">404 - Page Not Found</h2>
    )
  }

  // If there are JS libraries used n the project, create the element to display them
  let jsLibrariesElement = null;
  if (currentProject.libraries) {
    jsLibrariesElement = <><h4 className="project-page__heading--inline">JS Libraries Used:</h4>
    <p className="project-page__paragraph--inline">{currentProject.libraries}</p></>;
  }

  const pageData = require(`../../data/page_${currentProject.name}.json`);



  // Set page title
  document.title = `${currentProject.heading} | Orest's Web Development Portfolio`;

  return (
    <>
      <Header />
        <section className="project-page">

          <div className="project-page__content-container">
            <h2 className="project-page__main-heading">{currentProject.heading}</h2>

            <div className="project-page__hr" />

            <div className="project-page__skills-section">
              <SkillsGroup heading="Tools" displaySkills={currentProject.tools} />

              {jsLibrariesElement}
              
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