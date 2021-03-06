import React from 'react';
import { Link } from 'react-router-dom';

// Import SVGs
import {ReactComponent as MailToIcon} from '../../assets/icons/mailto.svg';
import {ReactComponent as GitIcon} from '../../assets/icons/git.svg';
import {ReactComponent as LinkedinIcon} from '../../assets/icons/linkedin.svg';

import './header.scss';

export default function Header({mode}) {

  // Function adds the night-mode class if "night mode" is on
  // Night mode is simply the inverted version of the header
  const nightModeAdder = (classVar) => {
    if (mode) {

      return `header-night-mode__${classVar}`
    } else {
    return
    }
  }


  return (
    <nav className="header">
      <div className="header__logo-container">
        <Link className="header__link" to="/"><h1 className={`header__heading ${nightModeAdder('heading')}`}>Orest Szopiak</h1></Link>
        <p className="header__logo-text-divider">|</p>
        <div className="header__logo-div-divider"></div>
        <Link className="header__link" to="/"><h2 className={`header__subheading ${nightModeAdder('subheading')}`}>Web Developer</h2></Link>
      </div>

      <div className="header__page-links-container">
        <Link className={`header__page-link ${nightModeAdder('page-link')}`} to="/about">ABOUT</Link>
        <Link className={`header__page-link ${nightModeAdder('page-link')}`}  to="/cv">CV</Link>
      </div>

      <div className="header__contact-links-container">

        <a className="header__contact-link" href="mailto:orest.szopiak@gmail.com"><MailToIcon className={`header__contact-link-icon header__contact-link-icon--mailto ${nightModeAdder('contact-link-icon')}`} /></a>

        <a className="header__contact-link" target="_blank" href="https://github.com/orest-cloud" rel="noreferrer"><GitIcon className={`header__contact-link-icon header__contact-link-icon--git ${nightModeAdder('contact-link-icon')}`} /></a>

        <a className="header__contact-link" target="_blank" href="https://www.linkedin.com/in/orest-szopiak/" rel="noreferrer"><LinkedinIcon className={`header__contact-link-icon header__contact-link-icon--linkedin ${nightModeAdder('contact-link-icon')}`} /></a>

      </div>
    </nav>
  )
}