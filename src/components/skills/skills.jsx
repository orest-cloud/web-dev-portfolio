import React from 'react';
// import { Link } from 'react-router-dom';

// Components
import SkillTag from '../skill-tag/skill-tag';

// Styles
import './skills.scss';

// Skills data from JSON
const skillsData = require('../../data/skills.json');

export default function Skills() {
  return (
    <aside className="skills">
  
    <h3 className="skills__heading">Skills</h3>

    <div className="skills__group-container">
      <h4 className="skills__sub-heading">Front-End</h4>
      { skillsData.filter( skillsData => skillsData.group === "Front End" ).map(skillsData => {
          return (<SkillTag key={skillsData.id} id={skillsData.id} name={skillsData.name} icon={skillsData.icon} link={skillsData.link} />)
        })}
    </div>

    <div className="skills__group-container">
    <h4 className="skills__sub-heading">Back-End</h4>
    { skillsData.filter( skillsData => skillsData.group === "Back End" ).map(skillsData => {
        return (<SkillTag key={skillsData.id} id={skillsData.id} name={skillsData.name} icon={skillsData.icon} link={skillsData.link} />)
      })}
    </div>

    <div className="skills__group-container">
    <h4 className="skills__sub-heading">Testing</h4>
    { skillsData.filter( skillsData => skillsData.group === "Testing" ).map(skillsData => {
        return (<SkillTag key={skillsData.id} id={skillsData.id} name={skillsData.name} icon={skillsData.icon} link={skillsData.link} />)
      })}
    </div>

    <div className="skills__group-container">
    <h4 className="skills__sub-heading">Development</h4>
    { skillsData.filter( skillsData => skillsData.group === "Development" ).map(skillsData => {
        return (<SkillTag key={skillsData.id} id={skillsData.id} name={skillsData.name} icon={skillsData.icon} link={skillsData.link} />)
      })}
    </div>

    <div className="skills__group-container">
    <h4 className="skills__sub-heading">Graphics</h4>
    { skillsData.filter( skillsData => skillsData.group === "Graphics" ).map(skillsData => {
        return (<SkillTag key={skillsData.id} id={skillsData.id} name={skillsData.name} icon={skillsData.icon} link={skillsData.link} />)
      })}      
    </div>

    </aside>
  )
}