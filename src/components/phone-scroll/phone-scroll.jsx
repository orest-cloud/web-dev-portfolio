import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';

// Images
import mobileView from '../../assets/images/msrx/MSRX_landing_page_Mobile_in_phone.png';

// Styles
import './phone-scroll.scss';

export default function PhoneScroll({media, title, caption}) {

  // const insetImage = <img src={`/assets/images/${media}`} alt={title} className="phone-scroll__image"/>;

  return (
    <>
    <p className="phone-scroll__text">{caption}</p>
    <div className="phone-scroll">

      <div className="phone-scroll__container">
      <Scrollbars className="poopoo"
          autoHide
          autoHideTimeout={200}
          autoHideDuration={200}
          style={{width: 359, height: 630, top: 121}}
        >
          <div className="phone-scroll__image-container">
            <img src={`/assets/images/${media}`} alt={title} className="phone-scroll__image" />
          </div>
        </Scrollbars>
      </div>
    </div>

    <img src={mobileView} alt="MSRX landing page mobile" className="phone-scroll__mobile-image"/>


    </>
  )
}