import React from 'react';
// import { Link } from 'react-router-dom';

import './project-page-element.scss';

export default function ProjectPageElement({ type, id, margin_bottom, media, url, content, caption }) {

  let renderElement = null;

  if (type === "code") {
    renderElement = `code, ${id}, ${margin_bottom}, ${media}, ${url}, ${content}, ${caption}`;
  }
  else if (type === "custom") {
    renderElement = "custom";
  }
  else if (type === "h3") {
    renderElement = <h3 className="project-page-element__sub-heading">{content}</h3>;
  }
  else if (type === "image") {
    renderElement = <img src={`/assets/images/${media}`} alt={content} className="project-page-element__image"/>;
  }
  else if (type === "paragraph") {
    renderElement = <p className="project-page-element__paragraph">{content}</p>;
  }
  else if (type === "text-with-link") {
    renderElement = <p className="project-page-element__paragraph"><b>
    {content} <a href={url} rel="noreferrer" target="_blank" className="project-page-element__text-link">{url}</a>
  </b></p>;
  }
  else  {
    renderElement = "Unrecognized type";
  }

  return (
    <p>{renderElement}</p>
  )
}