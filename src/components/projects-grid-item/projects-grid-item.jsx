import React from 'react';

// Components
// import ProjectsGridItem from '../projects-grid-item-item/projects-grid-item-item';

// Styles
import './projects-grid-item.scss';

// Skills data from JSON
// const projectsData = require('../../data/projects.json');

export default function ProjectsGridItem( {name, heading, sub_heading, image, tools} ) {

  // Exclude the project that we are currently on the page of
  // let filteredData = projectsData.filter(item => item.name !== exclude );

  return (
    <div className="projects-grid-item">
      
      <img src={`/assets/images/${image}`} alt={heading} className="projects-grid-item__image"/>

      <h3 className="projects-grid-item__heading">{heading}</h3>
      <h4 className="projects-grid-item__sub-heading">{sub_heading}</h4>


    </div>
  )
}