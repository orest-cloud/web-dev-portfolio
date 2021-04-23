import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// Styles
import './project-page-element.scss';
// import { useState } from 'react';
// import { useEffect } from 'react';

// Highlight JS
// const hljs = require('highlight.js');

// Highlight JS "smaller footprint"
// const hljs = require('highlight.js/lib/core');
// hljs.registerLanguage('javascript', require('highlight.js/lib/languages/xml'));

export default function ProjectPageElement({ type, media, url, content, caption }) {
  const [codeContent, setCodeContent] = useState("");

  // useEffect(() => {
  //   // Update the document title using the browser API
  //   renderElement = <pre className="project-page-element__code">{codeContent}</pre>;
  // });

  let captionElement = null;
  let renderElement = null;

  if (type === "code") {
    renderElement = <pre className="project-page-element__code"><code>{codeContent}</code></pre>;

    fetch(`../../data/${media}`)
    .then((r) => r.text())
    .then( data => {
      // const highlightedCode = hljs.highlightAuto('<h3>Hello World!</h3>').value;

      // Sets the state of codeContent in order to re-render
      // setCodeContent(highlightedCode);
      setCodeContent(data);
    })
	  
  } // end of CODE type
  else if (type === "custom") {
    renderElement = "custom";
  }
  else if (type === "fineprint") {
    renderElement = <p className="project-page-element__fine-print">{content}</p>;
  }
  else if (type === "h2") {
    renderElement = <h2 className="project-page-element__main-heading">{content}</h2>;
  }
  else if (type === "h3") {
    renderElement = <h3 className="project-page-element__sub-heading">{content}</h3>;
  }
  else if (type === "h4") {
    renderElement = <h4 className="project-page-element__h4">{content}</h4>;
  }
  else if (type === "hr") {
    renderElement = <div className="project-page-element__hr" />;
  }
  else if (type === "image") {
    // Include the caption, if there is one
    if (caption) {
      captionElement = <figcaption className="project-page-element__image-caption">{caption}</figcaption>;
    }

    renderElement = <figure className='project-page-element__image-container'><img src={`/assets/images/${media}`} alt={content} className="project-page-element__image"/>{captionElement}</figure>;
  }

  else if (type === "image_with_text") {
    // Include the caption, if there is one
    if (caption) {
      captionElement = <figcaption className="project-page-element__image-caption">{caption}</figcaption>;
    }

    renderElement = <div className="image-with-text"><figure className='image-with-text__figure'><img src={`/assets/images/${media}`} alt={content} className="image-with-text__image"/>{captionElement}</figure><p className="image-with-text__paragraph">{content}</p></div>;
  }

  else if (type === "image_with_text_reverse") {
    // Include the caption, if there is one
    if (caption) {
      captionElement = <figcaption className="project-page-element__image-caption">{caption}</figcaption>;
    }

    renderElement = <div className="image-with-text"><p className="image-with-text__paragraph">{content}</p><figure className='image-with-text__figure'><img src={`/assets/images/${media}`} alt={content} className="image-with-text__image"/>{captionElement}</figure></div>;
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
    <>{renderElement}</>
  )
}