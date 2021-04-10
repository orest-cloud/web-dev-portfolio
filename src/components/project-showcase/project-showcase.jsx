import React from 'react';
import { Link } from 'react-router-dom';

// Components
import CircleButton from '../circle-button/circle-button'

// Images
import stompingGroundImage from '../../assets/images/StompingGround_Details.jpg';
import stompingGroundImageMobile from '../../assets/images/StompingGround_Details_mobile.jpg';

// Styles
import './project-showcase.scss';


export default function ProjectShowcase() {

  return (
    <section className="project-showcase">
      <Link className="project-showcase__link" to="/projects/stomping-ground"><h2 className="project-showcase__heading">Project Showcase</h2></Link>

      <h4 className="project-showcase__sub-heading">Stomping Ground, a real estate based React app</h4>

      <Link className="project-showcase__link" to="/projects/stomping-ground">
        <picture>
          <source media="(min-width:768px)" srcSet={`${stompingGroundImage} 996w`} />
          <source srcSet={`${stompingGroundImageMobile} 768w`} />
          <img src={stompingGroundImageMobile} alt="Stomping Ground screenshot" className="project-showcase__image" />
        </picture>
      </Link>

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