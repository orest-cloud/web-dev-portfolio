import React from 'react';
import {Link} from 'react-router-dom';

// Components
import SkillsGroup from '../skills-group/skills-group';

// Styles
import './projects-grid-item.scss';

// Skills data from JSON
// const projectsData = require('../../data/projects.json');

export default function ProjectsGridItem( {name, heading, sub_heading, image, tools} ) {

  // Exclude the project that we are currently on the page of
  // let filteredData = projectsData.filter(item => item.name !== exclude );

  return (
    <div className="projects-grid-item">
      <div className="projects-grid-item__stripe">
      <Link to={`/projects/${name}`} className="projects-grid-item-image-link">
        <img src={`/assets/images/${image}`} alt={heading} className="projects-grid-item__image"/>
      </Link>

      <Link to={`/projects/${name}`} className="projects-grid-item__link">
        <h4 className="projects-grid-item__heading">{heading}</h4>
      </Link>

      <div className="projects-grid-item__skills">
          <SkillsGroup heading="" displaySkills={tools} />     
      </div>

      <h5 className="projects-grid-item__sub-heading">{sub_heading}</h5>

      </div>
    </div>
  )
}