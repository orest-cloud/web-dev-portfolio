import React from 'react';
// import { Link } from 'react-router-dom';

// Components
import CircleButton from '../circle-button/circle-button'

// Images
// import stompingGroundImage from '../../assets/images/StompingGround_Details.jpg';

// Styles
import './project-showcase.scss';

export default function ProjectShowcase() {
  return (
    <section className="project-showcase">
      <h2 className="project-showcase__heading">Project Showcase</h2>

      <h3 className="project-showcase__sub-heading">Stomping Ground, a real estate based React app</h3>

      {/* <img src={stompingGroundImage} alt="A screenshot of Stomping Ground" className="project-showcase__image"/> */}
      <div alt="A screenshot of Stomping Ground" className="project-showcase__image"/>

      <p className="project-showcase__paragraph">
        A React.js app that brings together data from three APIs: property listings, neighborhood walkability scores, and Google Maps user photos.
      </p>

      <p className="project-showcase__paragraph">
        This was my final "capstone" project while studying at BrainStation, meant to exhibit my skills in designing and coding a mobile-first website.
      </p>

      <p className="project-showcase__paragraph">
        Stomping Ground also exhibits server side JavaScript programming, by the use of popular back end framework Express.js.
      </p>

      <CircleButton cta="See the code behind Stomping Ground" url="/projects/stomping-ground" />

    </section>
  )
}