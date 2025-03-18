import React from 'react';

export const ScProductApply = function(props) {
  return (
    <div className={`sc-product-apply ${props.class}`}>
      <div className="sc-product-apply__head">
        <h2 className="sc-product-apply__title sc-title">Instant Account Opening with MyInfo</h2>
        <p className="sc-product-apply__desc">Instant Account Opening with MyInfo </p>
      </div>
      {/* sc-product-apply__wrapper--two-col : Add this class for make 2 column view */}
      <div className={`sc-product-apply__wrapper sc-rte ${props.wrapperclass}`}>
        <div className="sc-product-apply__col">
          <h3 className="sc-product-apply__sub-title">I want to apply for a Bonus$aver</h3>

          <div className="sc-product-apply__qr-box">
            <div className="sc-product-apply__qr-img">
              <img
                width="150"
                height="150"
                src="https://preview.standardchartered.com/wom/content/images/QR-FX-live-v2.jpg"
                className="sc-product-apply__qr-image"
                alt="QR Code, Flyer, Advertisement"
                loading="lazy"
              />
              <div className="sc-product-apply__qr-note">
                <p>Scan the QR code and apply.</p>
              </div>
            </div>
            <div className="sc-product-apply__store-btns">
              <a href="#" title="Playstore" className="sc-product-apply__store-btn">
                <img
                  width="138"
                  height="40"
                  src="https://preview.standardchartered.com/wom/content/images/appstore-138x40-1.jpg"
                  className="sc-product-apply__store-btn-img"
                  alt="Word, Text, Number"
                  loading="lazy"
                />
              </a>
              <a href="#" title="Playstore" className="sc-product-apply__store-btn">
                <img
                  width="138"
                  height="40"
                  src="https://preview.standardchartered.com/wom/content/images/googleplay.jpg"
                  className="sc-product-apply__store-btn-img"
                  alt="Word, Text, Number"
                  loading="lazy"
                />
              </a>

              <div className="sc-product-apply__qr-note">
                <p>
                  App Store is a service mark of Apple Inc. Google play is a trademark of Google
                  Inc.
                </p>
              </div>
            </div>
          </div>

          <div className="sc-product-apply__text">
            <p>I want to apply for a Bonus$aver account only</p>
          </div>
          <ul className="sc-inline-buttons">
            <li className="sc-inline-buttons__item">
              <a
                href="https://ob.sc.com/sg/ngl-apply?product=338&campaign=CA001"
                title="Apply Now"
                target="_blank"
                rel="noreferrer"
                className="sc-btn sc-btn--blue sc-btn--new sc-btn--capitalize"
              >
                Apply Now
              </a>
            </li>
          </ul>
        </div>
        <div className="sc-product-apply__col">
          <div className="sc-product-apply__text">
            <p>
              I want to apply for a Bonus$aver account and Bonus$aver World Mastercard Credit Card
            </p>
          </div>
          <ul className="sc-inline-buttons">
            <li className="sc-inline-buttons__item">
              <a
                href="https://ob.sc.com/sg/apply?product=162,338&campaign=6206,CA001"
                title="Apply Now"
                target="_blank"
                rel="noreferrer"
                className="sc-btn sc-btn--blue sc-btn--new sc-btn--capitalize"
              >
                Apply Now
              </a>
            </li>
          </ul>
          <div className="sc-product-apply__text">
            <p>
              <i>
                Note: To qualify for the Bonus$aver Sign-up Promotion, you must apply for a
                Bonus$aver World Mastercard Credit Card. Visit
                <a
                  href="https://av.sc.com/sg/content/docs/bonusaver-signup-promotion-apple.pdf"
                  title="here"
                  target="_blank"
                  rel="noreferrer"
                >
                  here
                </a>
                for the full Bonus$aver Sign-up Promotion Terms and Conditions that apply.
              </i>
            </p>
          </div>
        </div>
        <div className="sc-product-apply__col">
          <div className="sc-product-apply__text">
            <p>
              I want to apply for a Bonus$aver account and Bonus$aver World Mastercard Credit Card
            </p>
          </div>
          <ul className="sc-inline-buttons">
            <li className="sc-inline-buttons__item">
              <a
                href="https://ob.sc.com/sg/apply?product=162,338&campaign=6206,CA001"
                title="Apply Now"
                target="_blank"
                rel="noreferrer"
                className="sc-btn sc-btn--blue sc-btn--new sc-btn--capitalize"
              >
                Apply Now
              </a>
            </li>
          </ul>
          <div className="sc-product-apply__text">
            <p>
              <i>
                Note: To qualify for the Bonus$aver Sign-up Promotion, you must apply for a
                Bonus$aver World Mastercard Credit Card. Visit
                <a
                  href="https://av.sc.com/sg/content/docs/bonusaver-signup-promotion-apple.pdf"
                  title="here"
                  target="_blank"
                  rel="noreferrer"
                >
                  here
                </a>
                for the full Bonus$aver Sign-up Promotion Terms and Conditions that apply.
              </i>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
