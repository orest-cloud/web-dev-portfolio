import React from 'react';

// Components
import ProjectsGridItem from '../projects-grid-item/projects-grid-item';

// Styles
import './projects-grid.scss';

// Skills data from JSON
const projectsData = require('../../data/projects.json');

export default function ProjectsGrid( {heading, exclude} ) {

  // Exclude the project that we are currently on the page of
  let filteredData = projectsData.filter(item => item.name !== exclude );

  return (

    <section className="projects-grid">

      <div className="projects-grid__content-container">

        <h2 className="projects-grid__heading">{heading}</h2>

        <div className="projects-grid__container">

          { filteredData.map(data => {
            return (<ProjectsGridItem key={data.id} name={data.name} heading={data.heading} sub_heading={data.sub_heading} image={data.image} tools={data.tools} />)
          })}

        </div>
      </div>

    </section>
  )
}