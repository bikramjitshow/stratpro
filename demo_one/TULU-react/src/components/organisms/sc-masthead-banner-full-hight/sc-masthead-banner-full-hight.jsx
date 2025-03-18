import React from 'react';

export const BannerFullHeight = () => {
  return (
    // sc-banner--h-full : Add this class with sc-banner class for make image more visible in mobile and text to bottom
    // sc-banner--text-black : Add this class with sc-banner class for remove banner image from mobile view
    <div className="sc-banner sc-banner--h-full sc-banner--cvp-border sc-banner--text-black sc-banner--cvp-with-plus ">
      <picture>
        <source
          srcSet="
          https://av.sc.com/sg/content/images/sc-livefx-home-desktop.jpg
        "
          media="(min-width: 768px)"
        />
        <source
          srcSet="
          https://av.sc.com/sg/content/images/sc-livefx-home.jpg
        "
          media="(max-width: 767px)"
        />
        <img
          src="https://av.sc.com/sg/content/images/sc-livefx-home-desktop.jpg"
          className="sc-banner__bg"
          width="1600"
          height="490"
          alt="Speeding up your wealth accumulation"
        />
      </picture>
      <div className="sc-content-wrapper">
        <div className="sc-banner__content">
          <div className="sc-banner__tag">Limited Time Promo</div>
          <h1 className="sc-banner__title">Save bigger and win bigger</h1>
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
              <a href="#" className="sc-btn sc-btn--secondary-black" title="Find out more">
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
      <div className="sc-banner-content__cvp-box">
        <div className="sc-banner-content__cvp-item-wrapper">
          <div className="sc-banner-content__cvp-item sc-banner-content__cvp-item--plus">
            <div className="sc-banner-content__cvp-item-top">Interest earn up to</div>
            <div className="sc-banner-content__cvp-item-middle">
              <strong>14+</strong>
            </div>
            <div className="sc-banner-content__cvp-item-bottom">currencies</div>
          </div>
          <div className="sc-banner-content__cvp-item sc-banner-content__cvp-item--plus">
            <div className="sc-banner-content__cvp-item-top">Interest earn up to</div>
            <div className="sc-banner-content__cvp-item-middle">
              <strong>S$0</strong>
            </div>
            <div className="sc-banner-content__cvp-item-bottom">transaction fees</div>
          </div>
          <div className="sc-banner-content__cvp-item">
            <div className="sc-banner-content__cvp-item-top">Interest earn up to</div>
            <div className="sc-banner-content__cvp-item-middle">
              <strong>24/7</strong>
            </div>
            <div className="sc-banner-content__cvp-item-bottom">converting</div>
          </div>
        </div>
      </div>
    </div>
  );
};
