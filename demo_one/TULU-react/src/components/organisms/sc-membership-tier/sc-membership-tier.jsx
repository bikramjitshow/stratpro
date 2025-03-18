import React, { useEffect } from 'react';
import { HeadingInners } from '../../molecules/sc-heading-inner/sc-heading-inner';
import ScMembership from './sc-membership-tier.js';

export const MembershipTiers = props => {
  useEffect(() => {
    var elms = document.getElementsByClassName('splide');
    for (var i = 0; i < elms.length; i++) {
      // eslint-disable-next-line no-undef
      new Splide(elms[i]).mount();
    }
    ScMembership.init();
  }, []);
  return (
    <div className="sc-membership-tier">
      <div className="sc-content-wrapper">
        <HeadingInners className="sc-title--center" />
        <div className="sc-membership-tier__header">
          <p>
            If you are trading HKD 1,000 more, you will be rewarded up to HKD 88 Cash Rebates and
            eligible for Blue! Join our FX membership now and dive into a world of exclusive
            benefits waiting just for you.
          </p>
        </div>
        <div className="sc-membership-tier__content">
          <div className="sc-membership-tier__column ">
            <div className="sc-membership-tier__info-item-head">
              <div className="sc-membership-tier__info-item-icon">
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="64"
                  height="64"
                  viewBox="0 0 64 64"
                >
                  <title>assets</title>
                  <path
                    fill="#0f7aed"
                    d="M8 37c0-2.209 1.791-4 4-4h19v19c0 2.209-1.791 4-4 4s-4-1.791-4-4v-11h-11c-2.209 0-4-1.791-4-4z"
                  ></path>
                  <path
                    fill="#0f7aed"
                    d="M20 25c0-2.209 1.791-4 4-4h19v19c0 2.209-1.791 4-4 4s-4-1.791-4-4v-11h-11c-2.209 0-4-1.791-4-4z"
                  ></path>
                  <path
                    fill="#38d200"
                    d="M32 13c0-2.209 1.791-4 4-4h19v19c0 2.209-1.791 4-4 4s-4-1.791-4-4v-11h-11c-2.209 0-4-1.791-4-4z"
                  ></path>
                </svg>
              </div>
              <h3 className="sc-membership-tier__info-item-title">FX Membership</h3>
              <div className="sc-membership-tier__info-desc only-mobile">
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M36 18C36 8.1 27.9 0 18 0C8.1 0 0 8.1 0 18C0 27.9 8.1 36 18 36C27.9 36 36 27.9 36 18ZM2 18C2 9.2 9.2 2 18 2C26.8 2 34 9.2 34 18C34 26.8 26.8 34 18 34C9.2 34 2 26.8 2 18Z"
                    fill="#0070f3"
                  />
                  <path
                    d="M23 19V20H22V21H21V20V19H11V17H21V15H22V16H23V17H24V19H23Z"
                    fill="#0070f3"
                  />
                </svg>{' '}
                <p>Swipe right to view the next tier</p>
              </div>
            </div>
            <div className="sc-membership-tier__info only-desktop">
              <div className="sc-membership-tier__info-item">
                <p>
                  Membership eligibility<sup>1</sup>
                </p>
              </div>
              <div className="sc-membership-tier__info-item sc-membership-tier__info-item--border">
                <p>Preferential exchange rates</p>
              </div>
              <div className="sc-membership-tier__info-item">
                <p>Cash rewards</p>
              </div>
            </div>
          </div>
          <div
            className="sc-membership-tier__slider splide"
            data-splide='{
                    "arrows": false,
                    "trimSpace": "move",
                    "pagination": false,
                    "perPage": "4",
                    "gap": "16px",
                    "breakpoints": {
                        "1024": {
                            "perPage": "2"
                        },
                        "991": {
                            "perPage": "2"
                        },
                        "680": {
                            "perPage": "1"
                        }
                    }
                }'
          >
            <div className="splide__track">
              <div className="splide__list">
                <div
                  className="splide__slide sc-membership-tier__card sc-membership-tier__card--blue sc-membership-tier__card--active"
                  data-card-head="Welcome to the blue tier! Enjoy basic benefits and rewards."
                  tabIndex={0}
                  data-card="blue"
                >
                  <h4 className="sc-membership-tier__card-main-title">Blue</h4>
                  <div className="sc-membership-tier__card-details">
                    <p className="sc-membership-tier__card-title only-mobile">
                      Membership eligibility<sup>1</sup>
                    </p>
                    <p className="sc-membership-tier__card-desc">HKD 10,000*</p>
                  </div>

                  <div className="sc-membership-tier__card-details sc-membership-tier__card-details--border">
                    <p className="sc-membership-tier__card-title only-mobile">
                      Preferential exchange rates
                    </p>
                    <p className="sc-membership-tier__card-desc">
                      <svg
                        width="64"
                        height="64"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.85 15.325L10 13.425L13.15 15.35L12.325 11.75L15.1 9.35L11.45 9.025L10 5.625L8.55 9L4.9 9.325L7.675 11.75L6.85 15.325ZM3.825 19.5L5.45 12.475L0 7.75L7.2 7.125L10 0.5L12.8 7.125L20 7.75L14.55 12.475L16.175 19.5L10 15.775L3.825 19.5Z"
                          fill="#0473EA"
                        />
                      </svg>
                    </p>
                  </div>

                  <div className="sc-membership-tier__card-details">
                    <p className="sc-membership-tier__card-title only-mobile">Cash rewards</p>
                    <p className="sc-membership-tier__card-desc">
                      Benefit $ <br></br>Up to HKD 88
                    </p>
                  </div>
                </div>
                <div
                  className="splide__slide sc-membership-tier__card sc-membership-tier__card--silver"
                  data-card-head="Congratulations on reaching the Silver tier! Enjoy enhanced benefits."
                  tabIndex={0}
                  data-card="silver"
                >
                  <h4 className="sc-membership-tier__card-main-title">Silver</h4>
                  <div className="sc-membership-tier__card-details">
                    <p className="sc-membership-tier__card-title only-mobile">
                      Membership eligibility<sup>1</sup>
                    </p>
                    <p className="sc-membership-tier__card-desc">HKD 10,000*</p>
                  </div>

                  <div className="sc-membership-tier__card-details sc-membership-tier__card-details--border">
                    <p className="sc-membership-tier__card-title only-mobile">
                      Preferential exchange rates
                    </p>
                    <p className="sc-membership-tier__card-desc">
                      <svg
                        width="64"
                        height="64"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.85 15.325L10 13.425L13.15 15.35L12.325 11.75L15.1 9.35L11.45 9.025L10 5.625L8.55 9L4.9 9.325L7.675 11.75L6.85 15.325ZM3.825 19.5L5.45 12.475L0 7.75L7.2 7.125L10 0.5L12.8 7.125L20 7.75L14.55 12.475L16.175 19.5L10 15.775L3.825 19.5Z"
                          fill="#0473EA"
                        />
                      </svg>
                      <svg
                        width="64"
                        height="64"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.85 15.325L10 13.425L13.15 15.35L12.325 11.75L15.1 9.35L11.45 9.025L10 5.625L8.55 9L4.9 9.325L7.675 11.75L6.85 15.325ZM3.825 19.5L5.45 12.475L0 7.75L7.2 7.125L10 0.5L12.8 7.125L20 7.75L14.55 12.475L16.175 19.5L10 15.775L3.825 19.5Z"
                          fill="#0473EA"
                        />
                      </svg>
                    </p>
                  </div>

                  <div className="sc-membership-tier__card-details">
                    <p className="sc-membership-tier__card-title only-mobile">Cash rewards</p>
                    <p className="sc-membership-tier__card-desc">
                      Benefit $ <br></br>Up to HKD 88
                    </p>
                  </div>
                </div>
                <div
                  className="splide__slide sc-membership-tier__card sc-membership-tier__card--gold"
                  data-card-head="Welcome to the Gold tier! Premium benefits await you"
                  tabIndex={0}
                  data-card="gold"
                >
                  <h4 className="sc-membership-tier__card-main-title">Gold</h4>
                  <div className="sc-membership-tier__card-details">
                    <p className="sc-membership-tier__card-title only-mobile">
                      Membership eligibility<sup>1</sup>
                    </p>
                    <p className="sc-membership-tier__card-desc">HKD 10,000*</p>
                  </div>

                  <div className="sc-membership-tier__card-details sc-membership-tier__card-details--border">
                    <p className="sc-membership-tier__card-title only-mobile">
                      Preferential exchange rates
                    </p>
                    <p className="sc-membership-tier__card-desc">
                      <svg
                        width="64"
                        height="64"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.85 15.325L10 13.425L13.15 15.35L12.325 11.75L15.1 9.35L11.45 9.025L10 5.625L8.55 9L4.9 9.325L7.675 11.75L6.85 15.325ZM3.825 19.5L5.45 12.475L0 7.75L7.2 7.125L10 0.5L12.8 7.125L20 7.75L14.55 12.475L16.175 19.5L10 15.775L3.825 19.5Z"
                          fill="#0473EA"
                        />
                      </svg>
                      <svg
                        width="64"
                        height="64"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.85 15.325L10 13.425L13.15 15.35L12.325 11.75L15.1 9.35L11.45 9.025L10 5.625L8.55 9L4.9 9.325L7.675 11.75L6.85 15.325ZM3.825 19.5L5.45 12.475L0 7.75L7.2 7.125L10 0.5L12.8 7.125L20 7.75L14.55 12.475L16.175 19.5L10 15.775L3.825 19.5Z"
                          fill="#0473EA"
                        />
                      </svg>
                      <svg
                        width="64"
                        height="64"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.85 15.325L10 13.425L13.15 15.35L12.325 11.75L15.1 9.35L11.45 9.025L10 5.625L8.55 9L4.9 9.325L7.675 11.75L6.85 15.325ZM3.825 19.5L5.45 12.475L0 7.75L7.2 7.125L10 0.5L12.8 7.125L20 7.75L14.55 12.475L16.175 19.5L10 15.775L3.825 19.5Z"
                          fill="#0473EA"
                        />
                      </svg>
                    </p>
                  </div>

                  <div className="sc-membership-tier__card-details">
                    <p className="sc-membership-tier__card-title only-mobile">Cash rewards</p>
                    <p className="sc-membership-tier__card-desc">
                      Benefit $ <br></br>Up to HKD 88
                    </p>
                  </div>
                </div>
                <div
                  className="splide__slide sc-membership-tier__card sc-membership-tier__card--platinum"
                  data-card-head="You've achieved Platinum status! Enjoy the highest level of benefits."
                  tabIndex={0}
                  data-card="platinum"
                >
                  <h4 className="sc-membership-tier__card-main-title">Platinum</h4>
                  <div className="sc-membership-tier__card-details">
                    <p className="sc-membership-tier__card-title only-mobile">
                      Membership eligibility<sup>1</sup>
                    </p>
                    <p className="sc-membership-tier__card-desc">HKD 10,000*</p>
                  </div>

                  <div className="sc-membership-tier__card-details sc-membership-tier__card-details--border">
                    <p className="sc-membership-tier__card-title only-mobile">
                      Preferential exchange rates
                    </p>
                    <p className="sc-membership-tier__card-desc">
                      <svg
                        width="64"
                        height="64"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.85 15.325L10 13.425L13.15 15.35L12.325 11.75L15.1 9.35L11.45 9.025L10 5.625L8.55 9L4.9 9.325L7.675 11.75L6.85 15.325ZM3.825 19.5L5.45 12.475L0 7.75L7.2 7.125L10 0.5L12.8 7.125L20 7.75L14.55 12.475L16.175 19.5L10 15.775L3.825 19.5Z"
                          fill="#0473EA"
                        />
                      </svg>
                      <svg
                        width="64"
                        height="64"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.85 15.325L10 13.425L13.15 15.35L12.325 11.75L15.1 9.35L11.45 9.025L10 5.625L8.55 9L4.9 9.325L7.675 11.75L6.85 15.325ZM3.825 19.5L5.45 12.475L0 7.75L7.2 7.125L10 0.5L12.8 7.125L20 7.75L14.55 12.475L16.175 19.5L10 15.775L3.825 19.5Z"
                          fill="#0473EA"
                        />
                      </svg>
                      <svg
                        width="64"
                        height="64"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.85 15.325L10 13.425L13.15 15.35L12.325 11.75L15.1 9.35L11.45 9.025L10 5.625L8.55 9L4.9 9.325L7.675 11.75L6.85 15.325ZM3.825 19.5L5.45 12.475L0 7.75L7.2 7.125L10 0.5L12.8 7.125L20 7.75L14.55 12.475L16.175 19.5L10 15.775L3.825 19.5Z"
                          fill="#0473EA"
                        />
                      </svg>
                      <svg
                        width="64"
                        height="64"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.85 15.325L10 13.425L13.15 15.35L12.325 11.75L15.1 9.35L11.45 9.025L10 5.625L8.55 9L4.9 9.325L7.675 11.75L6.85 15.325ZM3.825 19.5L5.45 12.475L0 7.75L7.2 7.125L10 0.5L12.8 7.125L20 7.75L14.55 12.475L16.175 19.5L10 15.775L3.825 19.5Z"
                          fill="#0473EA"
                        />
                      </svg>
                    </p>
                  </div>

                  <div className="sc-membership-tier__card-details">
                    <p className="sc-membership-tier__card-title only-mobile">Cash rewards</p>
                    <p className="sc-membership-tier__card-desc">
                      Benefit $ <br></br>Up to HKD 88
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ul id="custom-pagination" className="sc-membership-tier__slide-btns only-mobile">
            <li
              data-index="0"
              className="sc-membership-tier__slide-btn sc-membership-tier__slide-btn--blue sc-membership-tier__slide-btn--active"
            >
              Blue
            </li>
            <li
              data-index="1"
              className="sc-membership-tier__slide-btn sc-membership-tier__slide-btn--silver"
            >
              Silver
            </li>
            <li
              data-index="2"
              className="sc-membership-tier__slide-btn sc-membership-tier__slide-btn--gold"
            >
              Gold
            </li>
            <li
              data-index="3"
              className="sc-membership-tier__slide-btn sc-membership-tier__slide-btn--platinum"
            >
              Platinum
            </li>
          </ul>
        </div>

        <div className="sc-membership-tier__footer">
          <div className="sc-membership-tier__footer-note">
            <input
              className="sc-membership-tier__footer-note-input"
              defaultChecked={props.check}
              type="checkbox"
              tabIndex="-1"
              id="note-id"
            />
            <label tabIndex="0" className="sc-membership-tier__footer-note-label" htmlFor="note-id">
              Note
            </label>
            <div className="sc-membership-tier__details sc-rte">
              <p>Foreign Exchange Membership Rewards details</p>
              <p>
                1. The membership tiers are determined by reference to the total Accumulated
                Transaction Amount of all Eligible Foreign Exchange Transactions in every half year
                (i.e., from 1 January - 30 June or from 1 July - 31 December every year).
              </p>
              <p>* Accumulated FX transaction amount from 1 July - 31 December 2024</p>
            </div>
          </div>
          <div className="sc-membership-tier__button">
            <ul className="sc-inline-buttons">
              <li className="sc-inline-buttons__item ">
                <a
                  href="https://ob.sc.com/sg/ngl-apply?intcid=web_listing-sc_com_top_nav-homepg1-staticmedia_others-sng-homepage_new-bsaver-acquisition-sc_com_organic-sg-en&amp;product=900&amp;campaign=9201"
                  title="Apply Now"
                  data-context="Persistent Bar CTA"
                  className="sc-btn sc-btn--medium"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-widget-name="persistent bar"
                >
                  <span className="sc-only-desktop">Apply Now</span>
                  <span className="sc-only-mobile">Apply Now</span>
                </a>
              </li>
              <li className="sc-inline-buttons__item ">
                <a
                  href="https://ob.sc.com/sg/ngl-apply?intcid=web_listing-sc_com_top_nav-homepg1-staticmedia_others-sng-homepage_new-bsaver-acquisition-sc_com_organic-sg-en&amp;product=900&amp;campaign=9201"
                  title="Apply Now"
                  data-context="Persistent Bar CTA"
                  className="sc-btn  sc-btn--secondary-blue sc-btn--medium"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-widget-name="persistent bar"
                >
                  <span className="sc-only-desktop">Terms and conditions apply</span>
                  <span className="sc-only-mobile">Terms and conditions apply</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
