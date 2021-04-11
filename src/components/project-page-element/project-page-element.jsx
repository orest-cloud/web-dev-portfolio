import React from 'react';
// import { Link } from 'react-router-dom';

// Styles
import './project-page-element.scss';

// Highlight JS
const hljs = require('highlight.js/lib/core');
hljs.registerLanguage('javascript', require('highlight.js/lib/languages/javascript'));


export default function ProjectPageElement({ type, id, margin_bottom, media, url, content, caption }) {

  let renderElement = null;

  if (type === "code") {
    // const SG_ClientCode = require(`../../data/${media}`);
    let codeContent = "";

    console.log('%c This is the code file we are getting.', "color: blue; font-weight: bold;");
      console.log(media);

    fetch(`../../data/${media}`)
    .then((r) => r.text())
    .then( data => {
      console.log('%c This is the data.', "color: green; font-weight: bold;");
      console.log(data);
      codeContent = data;
    }) 

    renderElement = <pre className="project-page-element__code">{`${codeContent}`}</pre>;
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