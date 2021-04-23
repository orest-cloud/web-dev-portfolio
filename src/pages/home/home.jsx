import React from 'react';
// import { Link } from 'react-router-dom';

// Components 
import Header from '../../components/header/header';
import GhostButton from '../../components/ghost-button/ghost-button';
import Skills from '../../components/skills/skills';
import ProjectShowcase from '../../components/project-showcase/project-showcase';
import Footer from '../../components/footer/footer';

// Images 
import homeBioPortrait from '../../assets/images/orest_portrait_1.jpg';

// import stompingGroundDetails from '../../assets/images/StompingGround_Details.jpg';

// Styles 
import './home.scss';

export default function Home() {
  document.title = "Home | Orest's Web Development Portfolio";

  return (
    <>
      <div className="home__top-container">
      <Header mode="night" />

      <section className="home-bio">
        <div className="home-bio__portrait-container">
          <img src={homeBioPortrait} alt="Orest" className="home-bio__portrait"/>
        </div>

        <div className="home-bio__text-container">
          <p className="home-bio__text">
          Hi, my name is Orest. I'm a Web Developer proficient in JavaScript, as well as React.
          </p><p className="home-bio__text">
          My love of new challenges and creating rich web experiences has led me to transition from Digital Design to Web Development. In February 2021, I earned a diploma in Web Development from tech college BrainStation's bootcamp with a cumulative grade of 89%.
          </p><p className="home-bio__text">
          I am an experienced tech industry professional accustomed to working within an Agile Scrum workflow, with skills accumulated working on UI for eCommerce websites and educational platforms. My habit has always been to centralize components, make them versatile and re-usable, and studiously package assets for hand-off.
          </p><p className="home-bio__text">
          With a history of producing finely tuned interfaces, my experience manipulating graphics and layout has proven to be a great advantage in modular web design.
          </p><p className="home-bio__text">
          The keystones of my practice are reliability, attention to detail, and continuous learning.
          </p>

          <GhostButton cta="Read more" url="/about" />
          
        </div>
      </section>
      </div>

      <section className="home-middle">
        <div className="home-middle__content-container">
          <Skills />
          <ProjectShowcase />
        </div>
      </section>

      <Footer />

    </>
  )
}    