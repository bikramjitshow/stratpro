import React, { useEffect } from 'react';
import IconDoor from '../../../../static/icons/icon-sc-nw-door';

export const Banners = props => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://av.sc.com/sg/assets/js/sc-invest/lottie-player.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    // sc-banner--reqular : Add this class with sc-banner class for make image more visible in mobile and text to bottom
    // sc-banner--no-mbl-img : Add this class with sc-banner class for remove banner image from mobile view
    // sc-banner--text-black : For make text as black
    // sc-banner--title-reverse : To make descrption first and title second
    // sc-banner--head-drop : Add drop icon in title
    // sc-banner--cvp-mbl-horizontal : Make CVP section in horizontal mode on mobile view
    //sc-banner--cvp-tag-bottom : Make tag section order before CVP
    <>
      {props.BannerOne && (
        <div className={`sc-banner ${props.class}`}>
          <picture>
            <source
              srcSet="
          https://av.sc.com/sg/content/images/sg-esaversaving-marathon-desktop-1600x490px.png
        "
              media="(min-width: 768px)"
            />
            <source
              srcSet="
          https://av.sc.com/sg/content/images/sg-esaver-saving-marathon-mobile-banner-768x350px.png
        "
              media="(max-width: 767px)"
            />
            <img
              src="https://av.sc.com/sg/content/images/sg-esaversaving-marathon-desktop-1600x490px.png"
              className="sc-banner__bg"
              width="1600"
              height="490"
              alt="Speeding up your wealth accumulation"
            />
          </picture>
          <div className="sc-content-wrapper">
            <div className="sc-banner__content">
              <span className="sc-banner-content__cvp-tag">Limited Time Promo</span>
              <h1 className="sc-banner__title">Save bigger and win bigger</h1>
              <p className="sc-banner__desc">
                Get your savings up to speed with a Wealth $aver deposit account
              </p>

              <div className="sc-banner-content__cvp-box">
                <div className="sc-banner-content__cvp-item-wrapper">
                  <div className="sc-banner-content__cvp-item ">
                    <div className="sc-banner-content__cvp-icon">
                      <IconDoor />
                    </div>
                    <div className="sc-banner-content__cvp-item-box">
                      <div className="sc-banner-content__cvp-item-top">Invest with</div>
                      <div className="sc-banner-content__cvp-item-middle">
                        <strong>Invest with</strong> pa
                      </div>
                      <div className="sc-banner-content__cvp-item-bottom">
                        bonus interest when you&nbsp;credit your salary, spend and pay bills
                      </div>
                    </div>
                  </div>
                  <div className="sc-banner-content__cvp-item">
                    <div className="sc-banner-content__cvp-icon">
                      <IconDoor />
                    </div>
                    <div className="sc-banner-content__cvp-item-box">
                      <div className="sc-banner-content__cvp-item-top">Interest earn up to</div>
                      <div className="sc-banner-content__cvp-item-middle">
                        <strong>3.68%</strong> pa
                      </div>
                      <div className="sc-banner-content__cvp-item-bottom">
                        bonus interest when you&nbsp;credit your salary, spend and pay bills
                      </div>
                    </div>
                  </div>
                  <div className="sc-banner-content__cvp-item">
                    <div className="sc-banner-content__cvp-icon">
                      <IconDoor />
                    </div>
                    <div className="sc-banner-content__cvp-item-box">
                      <div className="sc-banner-content__cvp-item-top">Interest earn up to</div>
                      <div className="sc-banner-content__cvp-item-middle">
                        <strong>3.68%</strong> pa
                      </div>
                      <div className="sc-banner-content__cvp-item-bottom">
                        bonus interest when you&nbsp;credit your salary, spend and pay bills
                      </div>
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
      )}

      {props.BannerTwo && (
        <div className="sc-banner">
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
              <div className="sc-banner-content sc-banner-content--layout-change">
                <div className="sc-banner-content__col">
                  <div className="sc-banner-content__inner-col">
                    <div className="sc-banner-content__big-cvp">
                      <span className="sc-banner-content__big-cvp-desc">Get up to</span>
                      <br />
                      <br />
                      <span style={{ fontSize: '100px' }}>7.68</span>
                      <span style={{ fontSize: '24px' }}>% p.a.</span>
                    </div>
                    <div className="sc-banner-content__big-cvp-desc">
                      interest from your very first dollar{' '}
                    </div>
                  </div>
                </div>
                <div className="sc-banner-content__col">
                  <div className="sc-banner-content__inner-col">
                    <h1 className="sc-banner-content__main-title">Simply Cash Credit Card</h1>
                  </div>

                  <div className="sc-banner-content__inner-col">
                    <div className="sc-banner-qr sc-only-desktop">
                      <div className="sc-banner-qr__text">
                        Scan to get your account open within 8 mins via mobile
                        <br />
                        <br />
                        Or click on QR to apply
                      </div>
                      <a href="#" title="QR code">
                        <img
                          className="sc-banner-qr__img"
                          src="https://av.sc.com/hk/content/images/hk-mgm-129x128-1.png"
                          alt="QR code"
                        />
                      </a>
                    </div>
                    <a
                      href="#"
                      title="Apply Now"
                      className="sc-btn sc-btn--new sc-btn--capitalize sc-btn--blue sc-only-mobile"
                    >
                      Apply Now
                    </a>
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
            </div>
          </div>
        </div>
      )}

      {props.BannerThree && (
        <div className="sc-banner">
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
              <div className="sc-banner-content">
                <div className="sc-banner-content__col">
                  <div className="sc-banner-content__inner-col">
                    <div className="sc-banner-content__big-cvp">
                      <span className="sc-banner-content__big-cvp-desc">Get up to</span>
                      <br />
                      <br />
                      <span style={{ fontSize: '100px' }}>7.68</span>
                      <span style={{ fontSize: '24px' }}>% p.a.</span>
                    </div>
                    <div className="sc-banner-content__big-cvp-desc">
                      interest from your very first dollar{' '}
                    </div>
                  </div>
                  <div className="sc-banner-content__inner-col">
                    <h1 className="sc-banner-content__main-title">Bonu$aver Account!</h1>
                  </div>
                </div>
                <div className="sc-banner-content__col">
                  <div className="sc-banner-content__inner-col">
                    <div className="sc-banner-content__cvp-box">
                      <span className="sc-banner-content__cvp-tag">Limited Time Promo</span>
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
                        <div className="sc-banner-content__cvp-item">
                          <div className="sc-banner-content__cvp-item-top">Interest earn up to</div>
                          <div className="sc-banner-content__cvp-item-middle">
                            <strong>4.00%</strong> pa
                          </div>
                          <div className="sc-banner-content__cvp-item-bottom">
                            bonus interest when you insure and invest
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="sc-banner-content__inner-col">
                    <div className="sc-banner-qr sc-only-desktop">
                      <div className="sc-banner-qr__text">
                        Scan to get your account open within 8 mins via mobile
                        <br />
                        <br />
                        Or click on QR to apply
                      </div>
                      <a href="#" title="QR code">
                        <img
                          className="sc-banner-qr__img"
                          src="https://av.sc.com/hk/content/images/hk-mgm-129x128-1.png"
                          alt="QR code"
                        />
                      </a>
                    </div>
                    <a
                      href="#"
                      title="Apply Now"
                      className="sc-btn sc-btn--new sc-btn--capitalize sc-btn--blue sc-only-mobile"
                    >
                      Apply Now
                    </a>
                  </div>
                </div>
              </div>

              <ul className="sc-inline-buttons">
                <li className="sc-inline-buttons__item">
                  <a href="#" className="sc-btn sc-btn--secondary-white" title="Find out more">
                    Find out more
                  </a>
                </li>
                <li className="sc-inline-buttons__item">
                  <a href="#" className="sc-btn-link sc-btn-link--white " title="Show More Loans">
                    <div className="sc-btn-link__icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        version="1.1"
                        width="64"
                        height="64"
                        viewBox="0 0 64 64"
                      >
                        <title>icon-sc-calculator</title>
                        <path
                          d="M15.127 11.744c0-0.895 0.725-1.62 1.62-1.62h30.38c0.895 0 1.62 0.726 1.62 1.62v15.19c0 0.895-0.725 1.62-1.62 1.62h-30.38c-0.895 0-1.62-0.725-1.62-1.62v-15.19zM18.367 13.365v11.949h27.139v-11.949h-27.139z"
                          fill="#ffffff"
                        />
                        <path
                          d="M5 4.152c0-2.293 1.859-4.152 4.152-4.152h45.57c2.293 0 4.152 1.859 4.152 4.152v55.696c0 2.293-1.859 4.152-4.152 4.152h-45.57c-2.293 0-4.152-1.859-4.152-4.152v-55.696zM9.152 3.24c-0.503 0-0.911 0.408-0.911 0.911v55.696c0 0.503 0.408 0.911 0.911 0.911h45.57c0.503 0 0.911-0.408 0.911-0.911v-55.696c0-0.503-0.408-0.911-0.911-0.911h-45.57z"
                          fill="#ffffff"
                        />
                        <path
                          d="M19.279 42.124c2.097 0 3.797-1.7 3.797-3.797s-1.7-3.797-3.797-3.797c-2.097 0-3.797 1.7-3.797 3.797s1.7 3.797 3.797 3.797z"
                          fill="#ffffff"
                        />
                        <path
                          d="M19.279 54.782c2.097 0 3.797-1.7 3.797-3.797s-1.7-3.797-3.797-3.797c-2.097 0-3.797 1.7-3.797 3.797s1.7 3.797 3.797 3.797z"
                          fill="#ffffff"
                        />
                        <path
                          d="M31.936 42.124c2.097 0 3.798-1.7 3.798-3.797s-1.7-3.797-3.798-3.797c-2.097 0-3.797 1.7-3.797 3.797s1.7 3.797 3.797 3.797z"
                          fill="#ffffff"
                        />
                        <path
                          d="M31.936 54.782c2.097 0 3.798-1.7 3.798-3.797s-1.7-3.797-3.798-3.797c-2.097 0-3.797 1.7-3.797 3.797s1.7 3.797 3.797 3.797z"
                          fill="#ffffff"
                        />
                        <path
                          d="M44.595 42.124c2.097 0 3.797-1.7 3.797-3.797s-1.7-3.797-3.797-3.797c-2.097 0-3.797 1.7-3.797 3.797s1.7 3.797 3.797 3.797z"
                          fill="#ffffff"
                        />
                        <path
                          d="M44.595 54.782c2.097 0 3.797-1.7 3.797-3.797s-1.7-3.797-3.797-3.797c-2.097 0-3.797 1.7-3.797 3.797s1.7 3.797 3.797 3.797z"
                          fill="#ffffff"
                        />
                      </svg>
                    </div>
                    Show More Loans
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {props.BannerFour && (
        <div className="sc-banner">
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
              <h1 className="sc-banner__title">
                3 Steps to enjoy FX savings to fund your investments
              </h1>
              <p className="sc-banner__desc">
                Get your savings up to speed with a Wealth $aver deposit account
              </p>
              <div className="sc-banner__image-nd-qr">
                <img
                  className="sc-banner__op-img"
                  src="https://av.sc.com/sg/content/images/livefx-banner-image.png"
                  alt="op-image"
                />

                <div className="sc-banner-qr sc-banner-qr--col sc-only-desktop">
                  <div className="sc-banner-qr__text">Scan to start trading now</div>
                  <a href="#" title="QR code">
                    <img
                      className="sc-banner-qr__img"
                      src="https://av.sc.com/hk/content/images/hk-mgm-129x128-1.png"
                      alt="QR code"
                    />
                  </a>
                </div>

                <a
                  href="#"
                  title="Apply Now"
                  className="sc-btn sc-btn--new sc-btn--capitalize sc-btn--blue sc-only-mobile"
                >
                  Apply Now
                </a>
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
            </div>
          </div>
        </div>
      )}

      {props.BannerFive && (
        <div className="sc-banner sc-banner--h-full sc-banner--cvp-with-border">
          <div className="sc-banner__animation">
            <lottie-player
              id="logo-loader"
              src="https://av.sc.com/sg/assets/global/json/sc-invest.json"
              loop=""
              autoplay="true"
              background="transparent"
            ></lottie-player>
          </div>
          <picture>
            <source
              srcSet="
          https://av.sc.com/sg/content/images/sc-invest-nitro-banner-bg-desktop-1920-1080-2.jpg
        "
              media="(min-width: 768px)"
            />
            <source
              srcSet="
          https://av.sc.com/sg/content/images/sc-invest-nitro-banner-bg-mobile-1125-2436-2.jpg
        "
              media="(max-width: 767px)"
            />
            <img
              src="https://av.sc.com/sg/content/images/sc-invest-nitro-banner-bg-desktop-1920-1080-2.jpg"
              className="sc-banner__bg"
              width="1600"
              height="490"
              alt="Speeding up your wealth accumulation"
            />
          </picture>
          <div className="sc-content-wrapper">
            <div className="sc-banner__content">
              <div className="sc-banner__tag">Limited Time Promo</div>
              <div className="sc-banner__top-title">SC Invest</div>
              <h1 className="sc-banner__title">Save bigger and win bigger</h1>
              <p className="sc-banner__desc">
                Get your savings up to speed with a Wealth $aver deposit account
              </p>

              <div className="sc-banner-content__cvp-box">
                <span className="sc-banner-content__cvp-tag">Limited Time Promo</span>

                <div className="sc-banner-content__cvp-title">Get Up to $4100 Cashback</div>
                <div className="sc-banner-content__cvp-item-wrapper">
                  <div className="sc-banner-content__cvp-item ">
                    <div className="sc-banner-content__cvp-icon">
                      <IconDoor />
                    </div>
                    <div className="sc-banner-content__cvp-item-box">
                      <div className="sc-banner-content__cvp-item-top">Invest with</div>
                      <div className="sc-banner-content__cvp-item-middle">
                        <strong>Invest with</strong> pa
                      </div>
                      <div className="sc-banner-content__cvp-item-bottom">
                        bonus interest when you credit your salary, spend and pay bills
                      </div>
                    </div>
                  </div>
                  <div className="sc-banner-content__cvp-item">
                    <div className="sc-banner-content__cvp-icon">
                      <IconDoor />
                    </div>
                    <div className="sc-banner-content__cvp-item-box">
                      <div className="sc-banner-content__cvp-item-top">Interest earn up to</div>
                      <div className="sc-banner-content__cvp-item-middle">
                        <strong>3.68%</strong> pa
                      </div>
                      <div className="sc-banner-content__cvp-item-bottom">
                        bonus interest when you credit your salary, spend and pay bills
                      </div>
                    </div>
                  </div>
                  <div className="sc-banner-content__cvp-item">
                    <div className="sc-banner-content__cvp-icon">
                      <IconDoor />
                    </div>
                    <div className="sc-banner-content__cvp-item-box">
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
              <a href="#null" className="sc-banner__scrolldown"></a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
