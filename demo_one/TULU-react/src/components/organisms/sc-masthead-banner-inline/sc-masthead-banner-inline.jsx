import React, { useEffect } from 'react';
import ScBannerInline from './sc-banner-inline.js';

export const BannerInline = () => {
  useEffect(() => {
    ScBannerInline.init();
  }, []);
  return (
    // sc-banner--inline : Add this class with sc-banner class to make view inline
    <>
      <div className="sc-banner sc-banner--inline sc-banner--inline-left">
        <picture>
          <source
            srcSet="
    https://av.sc.com/sg/others/sg-wealth-saver-masthead-banners-desktop-1600x490px.webp
  "
            media="(min-width: 768px)"
          />
          <source
            srcSet="
    https://av.sc.com/sg/others/sg-wealth-saver-masthead-banners-mobile-768x350px.webp
  "
            media="(max-width: 767px)"
          />
          <img
            src="https://av.sc.com/sg/others/sg-wealth-saver-masthead-banners-desktop-1600x490px.webp"
            className="sc-banner__bg"
            width="1600"
            height="490"
            alt="Speeding up your wealth accumulation"
          />
        </picture>
        <div className="sc-content-wrapper">
          <div className="sc-banner__content">
            <h1 className="sc-banner__title">Signature CIO Funds </h1>
            <p className="sc-banner__desc">
              Get your savings up to speed with a Wealth $aver deposit account
            </p>
            <ul className="sc-inline-buttons">
              <li className="sc-inline-buttons__item">
                <a href="#" className="sc-btn" title="Find out more">
                  Apply Now
                </a>
              </li>
              <li className="sc-inline-buttons__item">
                <a href="#" className="sc-btn sc-btn--secondary" title="Find out more">
                  Find out more
                </a>
              </li>
            </ul>

            <p className="sc-banner__note">
              Get your savings up to speed with a Wealth $aver deposit account{' '}
              <a href="#" title="here">
                here
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="sc-banner sc-banner--inline">
        <picture>
          <source
            srcSet="https://av.sc.com/sg/content/images/cashone_personal_loan_desktop.png"
            media="(min-width: 768px)"
          />
          <source
            srcSet="https://av.sc.com/sg/content/images/cashone_personal_loan_mobile.png"
            media="(max-width: 767px)"
          />
          <img
            src="https://av.sc.com/sg/content/images/cashone_personal_loan_desktop.png"
            className="sc-banner__bg"
            width="1600"
            height="490"
            alt="Adult, Female, Person"
          />
        </picture>
        <div className="sc-content-wrapper">
          <div className="sc-banner__content">
            <h1 className="sc-banner__title">Save bigger and win bigger</h1>
            <p className="sc-banner__desc">Get your savings up to</p>
            <ul className="sc-inline-buttons">
              <li className="sc-inline-buttons__item">
                <a href="#" className="sc-btn" title="Find out more">
                  Apply Now
                </a>
              </li>
              <li className="sc-inline-buttons__item">
                <a href="#" className="sc-btn sc-btn--secondary" title="Find out more">
                  Find out more
                </a>
              </li>
            </ul>

            <p className="sc-banner__note">
              Get your savings up to speed with a Wealth $aver deposit account{' '}
              <a href="#" title="here">
                here
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
