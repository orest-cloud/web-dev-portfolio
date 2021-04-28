import React from 'react';

// Components
// import ProjectsGridItem from '../image-grid-item/image-grid-item';

// Styles
import './image-grid.scss';

// Skills data from JSON
// const projectsData = require('../../data/projects.json');

export default function ImageGrid( {imageData, alt, columns} ) {

  // Exclude the project that we are currently on the page of
  // let filteredData = projectsData.filter(item => item.name !== exclude );

  let columnsClass = 2;

  if (columns === 2) {
    columnsClass = 'image-grid__2-columns';
  } else if (columns === 3) {
    columnsClass = 'image-grid__3-columns';
  } else if (columns === 4) {
    columnsClass = 'image-grid__4-columns';
  }

  const ImageGridItem = ({image, alt}) => {
    return (
    <img src={`/assets/images/${image}`} alt={alt} className="image-grid__image"/>
    )
  }

  return (

    <div className={`image-grid ${columnsClass}`}>

          { imageData.map(data => {
            return (<ImageGridItem key={`image-grid-${data}`} alt={alt} image={data} />)
          })}

    </div>
  )
}