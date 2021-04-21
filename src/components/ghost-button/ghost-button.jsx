import React from 'react';
import {Link} from 'react-router-dom';

// Images
import {ReactComponent as Arrow} from '../../assets/icons/arrow.svg';

// Styles
import './ghost-button.scss';

export default function GhostButton({cta, url, mode}) {

  let nightModeStyle = "";

  if (mode) {
    nightModeStyle = ' ghost-button__text--night-mode';
  }

  return (
    <Link className="ghost-button__link" to={url}>
      <button className="ghost-button">
        <Arrow alt="Arrow" className={`ghost-button__icon`} />
        <p className={`ghost-button__text${nightModeStyle}`}>{cta}</p>
      </button>
    </Link>
  )
}