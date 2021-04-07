import React from 'react';
import {Link} from 'react-router-dom';

// Images
import CircleArrow from '../../assets/icons/circle_arrow_btn.svg';

// Styles
import './circle-button.scss';

export default function CircleButton({cta, url}) {

  return (
    <Link className="circle-button__link" to={url}>
      <button className="circle-button">
        <img src={CircleArrow} alt="Arrow" className={`circle-button__icon`} />
        <p className={`circle-button__text`}>{cta}</p>
      </button>
    </Link>
  )
}