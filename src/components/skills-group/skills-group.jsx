import React from 'react';
// import { Link } from 'react-router-dom';

// Components
import SkillTag from '../skill-tag/skill-tag';

// Styles
import './skills-group.scss';

// Skills data from JSON
const skillsData = require('../../data/skills.json');

export default function SkillsGroup( {displaySkills, heading} ) {

  // Example value of displaySkills: ['React', 'Express.js']


  // Only display the heading if there is one
  let headingElement = null;
  if (heading) {
    headingElement = <h4 className="skills-group__heading">{heading}:</h4>;
  }

  // Filter skillData for entries that match "displaySkills"
  let filteredData = skillsData.filter(items => items.name.split(',').find(query => displaySkills.includes(query)));

  return (
    <div className="skills-group">
      
      {headingElement}

      { filteredData.map(skillsData => {
        return (<SkillTag key={`skill-${skillsData.id}`} id={skillsData.id} name={skillsData.name} icon={skillsData.icon} link={skillsData.link} />)
      })}

    </div>
  )
}