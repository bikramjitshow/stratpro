import React from 'react';

export const QrBoxs = props => {
  return (
    <div className={`sc-qr-box ${props.class}`}>
      <div className="sc-qr-box__container sc-only-desktop">
        <div className="sc-qr-box__text">
          Scan to get your account open within 8 mins via mobile
          <br />
          <br />
          Or click on QR to apply
        </div>
        <a href="#" title="QR code">
          <img
            className="sc-qr-box__img"
            src="https://av.sc.com/hk/content/images/hk-mgm-129x128-1.png"
            alt="QR code"
          />
        </a>
      </div>
      {/* This is mobile only button */}
      <a href="#" title="Apply Now" className="sc-btn sc-only-mobile" target="_blank">
        <span className="sc-only-desktop">Apply Now</span>
        <span className="sc-only-mobile">Apply Now</span>
      </a>
    </div>
  );
};
