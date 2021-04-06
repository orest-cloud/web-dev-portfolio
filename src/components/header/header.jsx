import React from 'react';
import { Link } from 'react-router-dom';

// Import SVGs
import {ReactComponent as MailToIcon} from '../../assets/icons/mailto.svg';
import {ReactComponent as GitIcon} from '../../assets/icons/git.svg';
import {ReactComponent as LinkedinIcon} from '../../assets/icons/linkedin.svg';

import './header.scss';

export default function Header() {
  return (
    <nav className="header">
      <div className="header__logo-container">
        <Link className="header__link"><h1 className="header__heading">Orest Szopiak</h1></Link>
        <h2 className="header__subheading">Web Developer</h2>
      </div>

      <div className="header__page-links-container">
        <Link className="header__page-link">PROJECTS</Link>
        <Link className="header__page-link">ABOUT</Link>
      </div>

      <div className="header__contact-links-container">
        <Link className="header__contact-link"><MailToIcon className="header__contact-link-icon"/></Link>
        <Link className="header__contact-link"><GitIcon className="header__contact-link-icon"/></Link>
        <Link className="header__contact-link"><LinkedinIcon className="header__contact-link-icon"/></Link>
      </div>
    </nav>
  )
}