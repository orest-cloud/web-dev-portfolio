import React from 'react';
// import { Link } from 'react-router-dom';

import './skill-tag.scss';

export default function SkillTag({ id, icon, link, name }) {
  return (
    // <Link id={id} className="skill-tag__link" to={`projects/${link}`}>
      <div className="skill-tag">
        <img src={`/assets/icons/${icon}`} alt={name} className="skill-tag__icon"/>
        <p className="skill-tag__text">{name}</p>
      </div>
    // </Link>
  )
}