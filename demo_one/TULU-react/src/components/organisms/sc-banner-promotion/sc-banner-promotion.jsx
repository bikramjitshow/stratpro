import React from 'react';
import ImgDesktop from '../../../../static/images/desktop-app-digital-with-a-lady.png';
import ImgMobile from '../../../../static/images/mobile-app-digital-with-a-lady.png';

export const BannersPromotion = props => {
  return (
    // sc-banner-promotion: Main CSS using from nitro/src/components/organisms/sc-masthead-banner/sc-masthead-banner.scss
    <>
      {props.BannerPromotion && (
        <div className="sc-banner-promotion">
          <div className="sc-content-wrapper">
            <div className="sc-banner">
              <picture>
                <source
                  srcSet="https://av.sc.com/sg/others/sg-wealth-saver-masthead-banners-desktop-1600x490px.webp"
                  media="(min-width: 768px)"
                />
                <source
                  srcSet="https://av.sc.com/sg/others/sg-wealth-saver-masthead-banners-mobile-768x350px.webp"
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
                  <div className="sc-banner__tag">Limited Time Promo</div>
                  <h1 className="sc-banner__title">Save bigger and win bigger</h1>
                  <p className="sc-banner__desc">
                    Get your savings up to speed with a Wealth $aver deposit account
                  </p>
                  <div className="sc-banner-content__cvp-box">
                    <div className="sc-banner-content__cvp-title">Get Up to $4100 Cashback</div>
                    <div className="sc-banner-content__cvp-item-wrapper">
                      <div className="sc-banner-content__cvp-item">
                        <div className="sc-banner-content__cvp-item-top">Interest earn up to</div>
                        <div className="sc-banner-content__cvp-item-middle">
                          <strong>3.68%</strong> pa
                        </div>
                        <div className="sc-banner-content__cvp-item-bottom">
                          bonus interest when you credit your salary, spend and pay bills
                        </div>
                      </div>
                    </div>
                  </div>
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
          </div>
        </div>
      )}
      {props.BannerPromotionBlock && (
        <div className={`sc-banner-promotion ${props.BlockClass}`}>
          <div className="sc-content-wrapper">
            <div className="sc-banner">
              <picture>
                <source
                  srcSet="https://av.sc.com/sg/others/sg-wealth-saver-masthead-banners-desktop-1600x490px.webp"
                  media="(min-width: 768px)"
                />
                <source
                  srcSet="https://av.sc.com/sg/others/sg-wealth-saver-masthead-banners-mobile-768x350px.webp"
                  media="(max-width: 767px)"
                />
                <img
                  src="https://av.sc.com/sg/others/sg-wealth-saver-masthead-banners-desktop-1600x490px.webp"
                  className="sc-banner__bg"
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
                  <div className="sc-banner-content__cvp-box">
                    <div className="sc-banner-content__cvp-title">Get Up to $4100 Cashback</div>
                    <div className="sc-banner-content__cvp-item-wrapper">
                      <div className="sc-banner-content__cvp-item">
                        <div className="sc-banner-content__cvp-item-top">Interest earn up to</div>
                        <div className="sc-banner-content__cvp-item-middle">
                          <strong>3.68%</strong> pa
                        </div>
                        <div className="sc-banner-content__cvp-item-bottom">
                          bonus interest when you credit your salary, spend and pay bills
                        </div>
                      </div>
                    </div>
                  </div>
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
              {props.showImage && (
                <div className="sc-banner__right-image">
                  <picture>
                    <source srcSet={ImgDesktop} media="(min-width: 768px)" />
                    <source srcSet={ImgMobile} media="(max-width: 767px)" />
                    <img src={ImgDesktop} className="sc-banner__img" alt="app digital image" />
                  </picture>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
