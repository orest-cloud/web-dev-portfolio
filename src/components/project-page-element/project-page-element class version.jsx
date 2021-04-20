// import { render } from '@testing-library/react';
import React from 'react';
// import { Link } from 'react-router-dom';

// Styles
import './project-page-element.scss';

// Highlight JS
// const hljs = require('highlight.js/lib/core');
// hljs.registerLanguage('javascript', require('highlight.js/lib/languages/javascript'));

// { type, id, margin_bottom, media, url, content, caption }
export default class ProjectPageElement extends React.Component() {

  constructor(props){
    super(props);
    this.state = {
      codeContent: ""
    }
  }

  
  // componentDidUpdate() {
  //   if (codeContent) {
      
  //   }

  // }
  
  render() {

    const { type, media, url, content, caption } = this.props;
    
  // captionElement = null;
  // renderElement = null;
  
  if (this.type === "code") {
    // const SG_ClientCode = require(`../../data/${media}`);
    // let codeContent = "";

    console.log('%c This is the code file we are getting.', "color: blue; font-weight: bold;");
      console.log(media);

    fetch(`../../data/${media}`)
    .then((r) => r.text())
    .then( data => {
      console.log('%c This is the data.', "color: green; font-weight: bold;");
      console.log(data);
      this.setState({codeContent: data});
      // codeContent = data;
	    renderElement = <pre className="project-page-element__code">{this.state.props.codeContent}</pre>;
	  
	  console.log('%c This is the render element.', "color: brown; font-weight: bold;");
      console.log(renderElement);


    }) 
   
  }
  else if (type === "custom") {
    renderElement = "custom";
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
  else if (type === "image") {
    // Include the caption, if there is one
    if (caption) {
      captionElement = <figcaption className="project-page-element__image-caption">{caption}</figcaption>;
    }

    renderElement = <figure className='project-page-element__image-container'><img src={`/assets/images/${media}`} alt={content} className="project-page-element__image"/>{captionElement}</figure>;
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
}