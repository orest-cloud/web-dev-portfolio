import React from 'react';
// import { Link } from 'react-router-dom';

// Components 
import Header from '../../components/header/header';
// import CircleButton from '../../components/circle-button/circle-button';
import SkillsGroup from '../../components/skills-group/skills-group';
import Footer from '../../components/footer/footer';

// Images 
// import homeBioPortrait from '../../assets/images/orest_portrait_1.jpg';

// Skills data from JSON
const skillsData = require('../../data/skills.json');

// Styles 
import './stomping-ground.scss';

export default function StompingGround() {
  document.title = "Stomping Ground | Orest's Web Development Portfolio";

  return (
    <>
      <Header />
        <section className="stomping-ground">
          <h2 className="stomping-ground__main-heading">Stomping Ground, a React app</h2>

          <h4 className="stomping-ground__h4">Tools Used</h4>

          <SkillsGroup />
          { skillsData.filter( skillsData => skillsData.name === "Front End" ).map(skillsData => {
          return (<SkillTag key={skillsData.id} id={skillsData.id} name={skillsData.name} icon={skillsData.icon} link={skillsData.link} />)
        })}

          <p className="stomping-ground__paragraph">Hello there.</p>

          


        </section>



          
 

      <Footer />
      {/* <CircleButton cta="Read more about my history" url="/about" /> */}

    </>
  )
}    