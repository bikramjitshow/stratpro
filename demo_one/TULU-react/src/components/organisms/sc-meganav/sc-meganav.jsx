import React, { useEffect } from 'react';
import ScMeganav from './sc-meganav.js';

export const ScNavbar = function() {
  useEffect(() => {
    ScMeganav.init();
  }, []);
  return (
    <>
      <style>
        {`
      .sb-show-main.sb-main-padded {
        padding: 0 !important;
      }
    `}
      </style>
      <header className="sc-meganav">
        <div className="sc-meganav__wrapper sc-nav__wrapper">
          {/* Top Nav */}
          <div className="sc-meganav__top">
            <div className="sc-meganav__container sc-meganav__top-container">
              <ul className="sc-meganav__personal-lists">
                <li className="sc-meganav__personal-box">
                  <a
                    className="sc-meganav__personal-box-link sc-meganav__personal-box-link--active"
                    href="/sg/"
                    title="Personal Banking"
                  >
                    Personal
                  </a>
                </li>
                <li className="sc-meganav__personal-box">
                  <a
                    className="sc-meganav__personal-box-link"
                    href="/sg/priority/"
                    title="Priority Banking"
                  >
                    Priority
                  </a>
                </li>
                <li className="sc-meganav__personal-box">
                  <a
                    className="sc-meganav__personal-box-link"
                    href="/sg/international-banking/"
                    title="International"
                  >
                    International
                  </a>
                </li>

                <li className="sc-meganav__personal-box">
                  <a
                    className="sc-meganav__personal-box-link"
                    href="/sg/business/"
                    title="Business"
                  >
                    Business
                  </a>
                </li>
                <li className="sc-meganav__personal-box">
                  <a
                    className="sc-meganav__personal-box-link"
                    href="/sg/priority/priority-private/"
                    title="Private"
                  >
                    Private
                  </a>
                </li>
              </ul>

              <div className="sc-meganav__top-right sc-only-desktop-nav">
                {/* Desktop screen - Services, Help and Search menu */}
                <ul className="sc-meganav__top-menu sc-only-desktop-nav">
                  <li className="sc-meganav__top-item">
                    <a href="/sg/promotions/referral-signup/" title="Referral Sign Up">
                      <div className="sc-meganav__top-item-icon">
                        <svg
                          width="16"
                          height="17"
                          viewBox="0 0 16 17"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M3.25 6.12C3.25 3.49663 5.37663 1.37 8 1.37C10.6234 1.37 12.75 3.49663 12.75 6.12C12.75 8.74336 10.6234 10.87 8 10.87C5.37663 10.87 3.25 8.74336 3.25 6.12ZM8 2.87C6.20506 2.87 4.75 4.32506 4.75 6.12C4.75 7.91493 6.20506 9.37 8 9.37C9.79494 9.37 11.25 7.91493 11.25 6.12C11.25 4.32506 9.79494 2.87 8 2.87Z"
                            fill="#525355"
                          />
                          <path
                            d="M1.93652 13.6194C2.55125 12.5554 3.43515 11.6719 4.49944 11.0576C5.56376 10.4434 6.77096 10.12 7.99979 10.12C9.22862 10.12 10.4358 10.4434 11.5001 11.0577C12.5644 11.672 13.4483 12.5555 14.063 13.6195"
                            stroke="#525355"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      Referral Sign Up
                    </a>
                  </li>

                  <li className="sc-meganav__top-item">
                    <a href="/sg/search/" title="Search">
                      <div className="sc-meganav__top-item-icon">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M7.875 10.75C9.73896 10.75 11.25 9.23896 11.25 7.375C11.25 5.51104 9.73896 4 7.875 4C6.01104 4 4.5 5.51104 4.5 7.375C4.5 9.23896 6.01104 10.75 7.875 10.75ZM7.875 12.25C10.5674 12.25 12.75 10.0674 12.75 7.375C12.75 4.68261 10.5674 2.5 7.875 2.5C5.18261 2.5 3 4.68261 3 7.375C3 10.0674 5.18261 12.25 7.875 12.25Z"
                            fill="#525355"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M10.1644 10.7562C10.4761 10.4834 10.9499 10.515 11.2227 10.8267L12.4788 12.2623C12.7516 12.574 12.72 13.0478 12.4082 13.3206C12.0965 13.5934 11.6227 13.5618 11.3499 13.25L10.0938 11.8145C9.82102 11.5028 9.85261 11.0289 10.1644 10.7562Z"
                            fill="#525355"
                          />
                        </svg>
                      </div>
                      Search
                    </a>
                  </li>
                  <li className="sc-meganav__top-item">
                    <a
                      href="/sg/bank-with-us/mobile-banking-services/standard-chartered-mobile/"
                      title="Digital Banking"
                    >
                      <div className="sc-meganav__top-item-icon">
                        <svg
                          width="10"
                          height="14"
                          viewBox="0 0 10 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_4606_94)">
                            <path
                              d="M8 0.5H2C1.44772 0.5 1 0.94772 1 1.5V12.5C1 13.0523 1.44772 13.5 2 13.5H8C8.5523 13.5 9 13.0523 9 12.5V1.5C9 0.94772 8.5523 0.5 8 0.5Z"
                              stroke="#525355"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M1 2.5H9"
                              stroke="#525355"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M1 11.5H9"
                              stroke="#525355"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_4606_94">
                              <rect width="10" height="14" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                      Digital Banking
                    </a>
                  </li>
                </ul>

                {/* <div className="sc-meganav__country">
        <button className="sc-meganav__country-btn">Singapore</button>
      </div> */}
              </div>
            </div>
          </div>
          {/* Menubar */}
          <nav className="sc-meganav__nav sc-meganav__container">
            {/* Logo  */}
            <div className="sc-meganav__logo">
              <a
                href="/sg/"
                className="sc-meganav__logo-drop sc-meganav__logo-link"
                title="Standard Chartered"
              >
                <span className="visuallyhidden">Standard Chartered</span>
              </a>
            </div>

            {/* Menu Section */}
            <ul className="sc-meganav__list">
              {/* Accounts & Deposits */}
              <li className="sc-meganav__item sc-meganav__item--has-meganav">
                <button className="sc-meganav__btn sc-meganav__menu">
                  Accounts & Deposits
                  <span className="sc-only-mobile-nav">Savings, Fixed Deposits, Remittances</span>
                </button>

                <div className="sc-meganav__mgnv-wrapper">
                  <div className="sc-meganav-drop">
                    <button className="sc-meganav__btn sc-meganav-drop__back sc-meganav__back sc-only-mobile-nav">
                      Accounts & Deposits
                    </button>

                    <div className="sc-meganav-drop__content">
                      <div className="sc-meganav-drop__wrapper sc-meganav__container">
                        <div className="sc-meganav-drop__w-full sc-meganav-drop__col-flex">
                          <div className="sc-meganav-drop__col-60 sc-meganav-drop__col-flex sc-meganav-drop__border-right">
                            <div className="sc-meganav-drop__tiles sc-meganav-drop__col-70 sc-meganav-drop__tiles--2 sc-meganav-drop__padding-right">
                              <div className="sc-meganav-drop__tiles-col">
                                <a
                                  className="sc-meganav-product-tile sc-meganav-product-tile--hover sc-meganav-product-tile--hover-animated sc-meganav-product-tile--h-200"
                                  href="/sg/save/current-accounts/bonussaver/?intcid=web_listing-sc_com_top_nav-homepg1-staticmedia_others-sng-homepage_new-bsaver-acquisition-sc_com_organic-sg-en"
                                  title="Bonus$aver Account"
                                >
                                  <div className="sc-badge sc-badge--gradient">
                                    <span className="sc-badge__text">Everyday Use</span>
                                  </div>
                                  <div className="sc-meganav-product-tile__icon">
                                    <svg
                                      width="18"
                                      height="18"
                                      viewBox="0 0 16 16"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M8 4.5V5.5"
                                        stroke="black"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        d="M8 10.5V11.5"
                                        stroke="black"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        d="M8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14Z"
                                        stroke="black"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        d="M6.5 10.5H8.75C9.08152 10.5 9.39946 10.3683 9.63388 10.1339C9.8683 9.89946 10 9.58152 10 9.25C10 8.91848 9.8683 8.60054 9.63388 8.36612C9.39946 8.1317 9.08152 8 8.75 8H7.25C6.91848 8 6.60054 7.8683 6.36612 7.63388C6.1317 7.39946 6 7.08152 6 6.75C6 6.41848 6.1317 6.10054 6.36612 5.86612C6.60054 5.6317 6.91848 5.5 7.25 5.5H9.5"
                                        stroke="#1F8845"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                    </svg>
                                  </div>
                                  <div className="sc-meganav-product-tile__title">
                                    Bonus$aver Account
                                  </div>
                                  <div className="sc-meganav-product-tile__content-wrapper">
                                    <div className="sc-meganav-product-tile__value">
                                      Up to <strong>7.68 % </strong>p.a interest
                                    </div>
                                    <p className="sc-meganav-product-tile__desc">
                                      Save smarter from your first dollar
                                    </p>
                                  </div>
                                  <div className="sc-meganav-product-tile__hover-item">
                                    <div className="sc-meganav-product-tile__hover-item">
                                      <ul>
                                        <li>
                                          <strong>2% p.a.</strong> for Salary Credit
                                        </li>
                                        <li>
                                          <strong>2% p.a</strong> for Invest
                                        </li>
                                        <li>
                                          <strong>2% p.a</strong> for Insure
                                        </li>
                                        <li>
                                          Up to <strong>1.4% p.a.</strong> for Card Spends
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </a>
                              </div>
                              <div className="sc-meganav-drop__tiles-col">
                                <a
                                  className="sc-meganav-product-tile sc-meganav-product-tile--hover sc-meganav-product-tile--hover-animated sc-meganav-product-tile--h-200"
                                  href="/sg/save/savings-accounts/esaver/?intcid=web_listing-sc_com_top_nav-homepg1-staticmedia_others-sng-homepage_new-esaver-acquisition-sc_com_organic-sg-en"
                                  title="e$aver Account"
                                >
                                  <div className="sc-badge sc-badge--gradient">
                                    <span className="sc-badge__text">Savings</span>
                                  </div>
                                  <div className="sc-meganav-product-tile__icon">
                                    <svg
                                      width="18"
                                      height="18"
                                      viewBox="0 0 16 16"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M8 4.5V5.5"
                                        stroke="black"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        d="M8 10.5V11.5"
                                        stroke="black"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        d="M8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14Z"
                                        stroke="black"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        d="M6.5 10.5H8.75C9.08152 10.5 9.39946 10.3683 9.63388 10.1339C9.8683 9.89946 10 9.58152 10 9.25C10 8.91848 9.8683 8.60054 9.63388 8.36612C9.39946 8.1317 9.08152 8 8.75 8H7.25C6.91848 8 6.60054 7.8683 6.36612 7.63388C6.1317 7.39946 6 7.08152 6 6.75C6 6.41848 6.1317 6.10054 6.36612 5.86612C6.60054 5.6317 6.91848 5.5 7.25 5.5H9.5"
                                        stroke="#1F8845"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                    </svg>
                                  </div>
                                  <div className="sc-meganav-product-tile__title">
                                    e$aver Account
                                  </div>
                                  <div className="sc-meganav-product-tile__content-wrapper">
                                    <div className="sc-meganav-product-tile__value">
                                      Earn up to <strong>3.35 % </strong>p.a
                                    </div>
                                    <p className="sc-meganav-product-tile__desc">
                                      High yield savings account with the flexibility to access your
                                      cash at any time
                                    </p>
                                  </div>
                                  <div className="sc-meganav-product-tile__hover-item">
                                    <ul>
                                      <li>No lock in period</li>
                                      <li>Easy and quick withdrawal</li>
                                      <li>Transfer funds overseas at $0 charges</li>
                                    </ul>
                                  </div>
                                </a>
                              </div>
                              <div className="sc-meganav-drop__tiles-col">
                                <a
                                  className="sc-meganav-product-tile sc-meganav-product-tile--hover sc-meganav-product-tile--hover-animated sc-meganav-product-tile--h-200"
                                  href="/sg/save/current-accounts/wealth-saver/?intcid=web_listing-sc_com_top_nav-homepg1-staticmedia_others-sng-homepage_new-wealth-saver-acquisition-sc_com_organic-sg-en"
                                  title="Wealth Saver Account"
                                >
                                  <div className="sc-badge sc-badge--gradient">
                                    <span className="sc-badge__text">Wealth Building</span>
                                  </div>
                                  <div className="sc-meganav-product-tile__icon">
                                    <svg
                                      width="24"
                                      height="24"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M3.75 20.2501L6.91969 17.5133C7.29403 17.1901 7.77212 17.0122 8.26669 17.0122H13.9874C14.6441 17.0122 15.1765 17.5446 15.1765 18.2013V18.2013M10.9412 19.3903H13.9874C14.6441 19.3903 15.1765 18.8579 15.1765 18.2013V18.2013M15.1765 18.2013L19.6105 17.1621C20.0101 17.0684 20.4301 17.1803 20.7302 17.4602V17.4602C21.3545 18.0426 21.2101 19.0683 20.4493 19.4556L15.7069 21.8705C14.8942 22.2843 13.9952 22.5 13.0832 22.5H6"
                                        stroke="black"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                      />
                                      <circle
                                        cx="12"
                                        cy="6.75"
                                        r="5.25"
                                        stroke="black"
                                        strokeWidth="1.5"
                                      />
                                      <path d="M12 12L12 16.5" stroke="black" strokeWidth="1.5" />
                                      <path
                                        d="M14.7354 16.8741L21.0001 10.5001"
                                        stroke="black"
                                        strokeWidth="1.5"
                                      />
                                      <path
                                        d="M17.0789 11.7272C16.2319 12.7545 16.0342 14.3723 16.0118 15.3778C16.0111 15.4106 16.0218 15.4265 16.0276 15.4328C16.031 15.4366 16.0347 15.4393 16.039 15.4413C16.0428 15.4432 16.0504 15.446 16.0639 15.4467C17.1391 15.5016 19.0793 15.3525 20.453 13.8872C21.8324 12.4159 21.5467 10.9271 21.2951 10.2166C21.2901 10.215 21.2812 10.2129 21.2677 10.2132L21.253 9.46335L21.2677 10.2132C20.7683 10.223 19.9667 10.2812 19.1545 10.5093C18.3354 10.7393 17.5782 11.1216 17.0789 11.7272Z"
                                        stroke="black"
                                        strokeWidth="1.5"
                                      />
                                      <path
                                        d="M9.31094 16.7779L3.04629 10.4039"
                                        stroke="black"
                                        strokeWidth="1.5"
                                      />
                                      <path
                                        d="M6.96749 11.631C7.81444 12.6583 8.01222 14.2761 8.03456 15.2816C8.03529 15.3144 8.0246 15.3303 8.01879 15.3367C8.01537 15.3404 8.01165 15.3431 8.00741 15.3452C8.00356 15.347 7.99599 15.3498 7.98248 15.3505C6.90727 15.4054 4.96705 15.2563 3.59334 13.791C2.21401 12.3197 2.49973 10.8309 2.75127 10.1204C2.7563 10.1188 2.76521 10.1167 2.77864 10.117L2.79335 9.36716L2.77864 10.117C3.27813 10.1268 4.07972 10.185 4.89191 10.4131C5.71099 10.6431 6.46823 11.0254 6.96749 11.631Z"
                                        stroke="black"
                                        strokeWidth="1.5"
                                      />
                                      <path
                                        d="M12 3.4502V4.2002"
                                        stroke="#1F8845"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        d="M12 9.4502V10.2002"
                                        stroke="#1F8845"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        d="M10.875 8.7002H12.5625C12.8111 8.7002 13.0496 8.60142 13.2254 8.42561C13.4012 8.24979 13.5 8.01134 13.5 7.7627C13.5 7.51405 13.4012 7.2756 13.2254 7.09978C13.0496 6.92397 12.8111 6.8252 12.5625 6.8252H11.4375C11.1889 6.8252 10.9504 6.72642 10.7746 6.55061C10.5988 6.37479 10.5 6.13634 10.5 5.8877C10.5 5.63905 10.5988 5.4006 10.7746 5.22478C10.9504 5.04897 11.1889 4.9502 11.4375 4.9502H13.125"
                                        stroke="#1F8845"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                    </svg>
                                  </div>
                                  <div className="sc-meganav-product-tile__title">
                                    Wealth $aver Account
                                  </div>
                                  <div className="sc-meganav-product-tile__content-wrapper">
                                    <div className="sc-meganav-product-tile__value">
                                      Up to <strong>5.00 % </strong>p.a
                                    </div>
                                    <p className="sc-meganav-product-tile__desc">
                                      A Priority Banking account to help you grow your wealth
                                    </p>
                                  </div>
                                  <div className="sc-meganav-product-tile__hover-item">
                                    <ul>
                                      <li>
                                        Receive welcome gifts of up to
                                        <strong>S$13,000</strong> in value when you sign up for
                                        Priority Banking
                                      </li>
                                      <li>
                                        <strong>+1%</strong> Unlimited Cashback on your debit card
                                      </li>
                                    </ul>
                                  </div>
                                </a>
                              </div>
                              <div className="sc-meganav-drop__tiles-col">
                                <a
                                  href="/sg/save/?intcid=web_listing-sc_com_top_nav-homepg1-staticmedia_others-sng-homepage_new-CASA-acquisition-sc_com_organic-sg-en"
                                  title="View And Compare Accounts"
                                  className="sc-meganav-product-tile sc-meganav-product-tile--hover sc-meganav-product-tile--h-200"
                                >
                                  <div className="sc-meganav-product-tile__icon">
                                    <svg
                                      width="18"
                                      height="18"
                                      viewBox="0 0 18 18"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M12.0162 0L6.00019 12.336L0.0961914 0H2.78419L6.08019 7.312L9.42419 0H12.0162Z"
                                        fill="#1F8845"
                                      />
                                      <path
                                        d="M13.912 6.83984C13 6.83984 12.264 7.25584 12.264 8.13584C12.264 8.69584 12.616 9.04784 13.256 9.38384L15.656 10.5678C17.096 11.2718 17.784 12.1358 17.784 13.4798C17.784 15.7198 15.976 17.1598 13.48 17.1598C12.12 17.1598 10.776 16.8238 9.68799 16.0238V13.3678C11.032 14.5838 12.44 15.1438 13.528 15.1438C14.472 15.1438 15.256 14.7438 15.256 13.8958C15.256 13.2878 15 12.9838 14.184 12.5518L11.928 11.4638C10.568 10.8078 9.78399 9.91184 9.78399 8.34384C9.78399 6.18384 11.56 4.83984 13.88 4.83984C15.048 4.83984 16.168 5.07984 17.144 5.68784V8.19984C16.024 7.33584 14.92 6.83984 13.912 6.83984Z"
                                        fill="black"
                                      />
                                    </svg>
                                  </div>

                                  <div className="sc-meganav-product-tile__content-wrapper">
                                    <p className="sc-meganav-product-tile__desc">
                                      Compare accounts and choose the one that best suits your needs
                                    </p>
                                  </div>
                                  <p className="sc-btn sc-btn--secondary-blue">
                                    View And Compare Accounts
                                  </p>
                                </a>
                              </div>
                            </div>

                            <div className="sc-meganav-drop__col sc-meganav-drop__col-30 sc-meganav-drop__padding-right">
                              <div className="sc-meganav-drop__col-label">Current and Savings</div>
                              <ul className="sc-meganav-drop__col-list">
                                <li className="sc-meganav-drop__col-item">
                                  <div className="sc-meganav-drop__col-text">
                                    <a
                                      title="SuperSalary Account"
                                      href="/sg/save/current-accounts/supersalary/"
                                    >
                                      <p className="sc-meganav-drop__link">SuperSalary Account</p>
                                      <p className="sc-meganav-drop__desc">
                                        Enjoy 1% cashback on your debit card purchases
                                      </p>
                                    </a>
                                  </div>
                                </li>
                                <li className="sc-meganav-drop__col-item">
                                  <div className="sc-meganav-drop__col-text">
                                    <a
                                      title="JumpStart Account"
                                      href="/sg/save/savings-accounts/jumpstart/"
                                    >
                                      <p className="sc-meganav-drop__link">JumpStart Account</p>
                                      <p className="sc-meganav-drop__desc">
                                        No-frills account for young adults between 18 and 26 years
                                        old
                                      </p>
                                    </a>
                                  </div>
                                </li>
                              </ul>
                              <div className="sc-meganav-drop__col-label">Time deposits</div>
                              <ul className="sc-meganav-drop__col-list">
                                <li className="sc-meganav-drop__col-item">
                                  <div className="sc-meganav-drop__col-text">
                                    <a
                                      title="SGD Time Deposit"
                                      href="/sg/save/time-deposits/singapore-dollar-time-deposit/"
                                    >
                                      <p className="sc-meganav-drop__link">SGD Time Deposit</p>
                                      <p className="sc-meganav-drop__desc">
                                        Earn high interest on your Singapore Dollar Time Deposit
                                        (Fixed Deposit)
                                      </p>
                                    </a>
                                  </div>
                                </li>
                                <li className="sc-meganav-drop__col-item">
                                  <div className="sc-meganav-drop__col-text">
                                    <a
                                      title="Sustainable Time Deposit"
                                      href="/sg/save/time-deposits/sustainable-time-deposit/"
                                    >
                                      <p className="sc-meganav-drop__link">
                                        Sustainable Time Deposit
                                      </p>
                                      <p className="sc-meganav-drop__desc">
                                        Time to invest in a sustainable future
                                      </p>
                                    </a>
                                  </div>
                                </li>
                                <li className="sc-meganav-drop__col-item">
                                  <div className="sc-meganav-drop__col-text">
                                    <a
                                      title="FCY Time Deposit"
                                      href="/sg/save/time-deposits/foreign-currency-time-deposits/"
                                    >
                                      <p className="sc-meganav-drop__link">FCY Time Deposit</p>
                                      <p className="sc-meganav-drop__desc">
                                        Earn high interest for your foreign currency
                                      </p>
                                    </a>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>

                          <hr className="sc-meganav__mbl-line sc-only-mobile-nav" />
                          <div className="sc-meganav-drop__col-40 sc-meganav-drop__col-flex sc-meganav-drop__padding-left">
                            <div className="sc-meganav-drop__col">
                              <div className="sc-meganav-drop__col-label">
                                Services and Useful links
                              </div>
                              <ul className="sc-meganav-drop__col-list">
                                <li className="sc-meganav-drop__col-item">
                                  <div className="sc-meganav-drop__col-text">
                                    <a title="SC Remit" href="/sg/bank-with-us/remittance/">
                                      <p className="sc-meganav-drop__link">SC Remit</p>
                                    </a>
                                  </div>
                                </li>
                                <li className="sc-meganav-drop__col-item">
                                  <div className="sc-meganav-drop__col-text">
                                    <a
                                      title="Frequently Asked Questions"
                                      href="/sg/help/general-information/"
                                    >
                                      <p className="sc-meganav-drop__link">
                                        Frequently Asked Questions
                                      </p>
                                    </a>
                                  </div>
                                </li>
                                <li className="sc-meganav-drop__col-item">
                                  <div className="sc-meganav-drop__col-text">
                                    <a
                                      title="eStatement & eAdvices"
                                      href="/sg/bank-with-us/online-banking-services/online-estatements/"
                                    >
                                      <p className="sc-meganav-drop__link">eStatement & eAdvices</p>
                                    </a>
                                  </div>
                                </li>
                                <li className="sc-meganav-drop__col-item">
                                  <div className="sc-meganav-drop__col-text">
                                    <a
                                      title="Standard Chartered Mobile"
                                      href="/sg/bank-with-us/mobile-banking-services/standard-chartered-mobile/"
                                    >
                                      <p className="sc-meganav-drop__link">
                                        Standard Chartered Mobile
                                      </p>
                                    </a>
                                  </div>
                                </li>
                                <li className="sc-meganav-drop__col-item">
                                  <div className="sc-meganav-drop__col-text">
                                    <a title="Money Lock" href="/sg/bank-with-us/money-lock/">
                                      <p className="sc-meganav-drop__link">Money Lock</p>
                                    </a>
                                  </div>
                                </li>
                              </ul>
                            </div>

                            <div className="sc-meganav-drop__col sc-meganav-drop__padding-left sc-meganav-drop__ml-auto">
                              <a
                                title="View more"
                                href="/sg/saveuplevelup/?aggregator_instance=SULUdropdown&intcid=scweb_ban-sc_com_NULL-homepg1-staticmedia_banner-mul-scw_SULUdropdown-mulprd-acquisition-scw_ban-sg-en"
                                className="sc-meganav-image-tile"
                              >
                                <div className="sc-meganav-image-tile__wrapper">
                                  <div className="sc-meganav-image-tile__content">
                                    <div className="sc-meganav-image-tile__content-box">
                                      <div className="sc-meganav-image-tile__title">
                                        Big savings, even bigger rewards
                                      </div>
                                      <p className="sc-meganav-image-tile__desc">
                                        Stand to win up to S$30,000 in our lucky draw and get up to
                                        S$500 cashback*!
                                      </p>
                                    </div>
                                    <div className="sc-meganav-image-tile__button">
                                      View More
                                      <svg
                                        width="16"
                                        height="16"
                                        viewBox="0 0 16 17"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M8 14.5C11.3137 14.5 14 11.8137 14 8.5C14 5.18629 11.3137 2.5 8 2.5C4.68629 2.5 2 5.18629 2 8.5C2 11.8137 4.68629 14.5 8 14.5Z"
                                          stroke="#2772C7"
                                          strokeMiterlimit="10"
                                        />
                                        <path
                                          d="M8.37868 10.6213L10.5 8.49999L8.37868 6.37868"
                                          stroke="#2772C7"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M5.5 8.5H10.5"
                                          stroke="#2772C7"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                      </svg>
                                    </div>
                                  </div>
                                  <div className="sc-meganav-image-tile__image sc-meganav-image-tile__image--bottom">
                                    <img
                                      src="https://av.sc.com/sg/content/images/nav-promo-1.png"
                                      alt="Promo"
                                    />
                                  </div>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* <div className="sc-meganav-drop__view-all sc-only-desktop-nav">
                  <a title="Find a suitable account and apply" href="/sg/save/"
                    className="sc-meganav-drop__btn sc-btn-link sc-btn-link--blue">
                    Find a suitable account and apply
                  </a>
                </div> */}
                    </div>
                  </div>
                </div>
              </li>

              {/*Credit Cards */}

              <li className="sc-meganav__item sc-meganav__item--has-meganav">
                <button className="sc-meganav__btn sc-meganav__menu">
                  Credit Cards
                  <span className="sc-only-mobile-nav">
                    Cashback Rewards, Fund Transfer, EasyPay
                  </span>
                </button>
                <div className="sc-meganav__mgnv-wrapper">
                  <div className="sc-meganav-drop">
                    <button className="sc-meganav__btn sc-meganav-drop__back sc-meganav__back sc-only-mobile-nav">
                      Credit Cards
                    </button>

                    <div className="sc-meganav-drop__content">
                      <div className="sc-meganav-drop__wrapper sc-meganav__container">
                        <div className="sc-meganav-drop__w-full sc-meganav-drop__col-flex">
                          <div className="sc-meganav-drop__col-60 sc-meganav-drop__col-flex sc-meganav-drop__border-right">
                            <div className="sc-meganav-drop__tiles sc-meganav-drop__col-70 sc-meganav-drop__tiles--2 sc-meganav-drop__padding-right">
                              <div className="sc-meganav-drop__tiles-col">
                                <a
                                  className="sc-meganav-product-tile sc-meganav-product-tile--hover sc-meganav-product-tile--hover-animated sc-meganav-product-tile--h-200"
                                  href="/sg/credit-cards/simply-cash-credit-card/?intcid=web_listing-sc_com_top_nav-homepg1-staticmedia_others-sng-homepage_new-simplycash_cc-acquisition-sc_com_organic-sg-en"
                                  title="Simply Cash Credit Card"
                                >
                                  <div className="sc-badge sc-badge--gradient">
                                    <span className="sc-badge__text">Cashback</span>
                                  </div>
                                  <div className="sc-meganav-product-tile__icon">
                                    <svg
                                      width="24"
                                      height="24"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M1.67647 20.122V19.08C1.67647 17.938 2.60225 17.0122 3.74427 17.0122H9.48745C10.1441 17.0122 10.6765 17.5445 10.6765 18.2012V18.2012M6.44118 19.3902H9.48745C10.1441 19.3902 10.6765 18.8579 10.6765 18.2012V18.2012M10.6765 18.2012L13.902 15.6572C14.3814 15.2792 15.0649 15.3075 15.5113 15.724V15.724C16.0425 16.2195 16.0341 17.064 15.4932 17.5489L11.8635 20.803C10.6446 21.8957 9.06532 22.5 7.42839 22.5H1.5"
                                        stroke="black"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                      />
                                      <path
                                        d="M21 13.0278V4.22631C19.8571 3.05273 16.4286 2.46624 13 3.63964C9.57143 4.81304 8.42857 4.22632 5 3.63954V13.6145C7.28571 14.2013 9 14.2014 13 13.0279C13.9991 12.7348 18.7143 11.8542 21 13.0278Z"
                                        stroke="black"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        d="M13 10C14.1046 10 15 9.10457 15 8C15 6.89543 14.1046 6 13 6C11.8954 6 11 6.89543 11 8C11 9.10457 11.8954 10 13 10Z"
                                        stroke="#1F8845"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        d="M16 3.5L20 9"
                                        stroke="#1F8845"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        d="M16.5 12.5L21 9"
                                        stroke="#1F8845"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        d="M10 4.5L5 8"
                                        stroke="#1F8845"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        d="M10 13L6 9"
                                        stroke="#1F8845"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                    </svg>
                                  </div>
                                  <div className="sc-meganav-product-tile__title">
                                    Simply Cash Credit Card
                                  </div>
                                  <div className="sc-meganav-product-tile__content-wrapper">
                                    <div className="sc-meganav-product-tile__value">
                                      Earn <strong>1.5 % </strong>Cashback
                                    </div>
                                    <p className="sc-meganav-product-tile__desc">on all spends.</p>
                                  </div>
                                  <div className="sc-meganav-product-tile__list">
                                    Get up to <strong>S$400 cashback</strong> when you apply*
                                  </div>
                                  <div className="sc-meganav-product-tile__hover-item">
                                    <img
                                      className="sc-meganav-product-tile__hover-image"
                                      src="https://av.sc.com/sg/content/images/sg-simply-cash-cards-webpage-360-X-360-AT.png"
                                      alt="Simply Cash Credit Card"
                                    />
                                  </div>
                                </a>
                              </div>

                              <div className="sc-meganav-drop__tiles-col">
                                <a
                                  className="sc-meganav-product-tile sc-meganav-product-tile--hover sc-meganav-product-tile--hover-animated sc-meganav-product-tile--h-200"
                                  href="/sg/credit-cards/journey-credit-card/?intcid=web_listing-sc_com_top_nav-homepg1-staticmedia_others-sng-homepage_new-journey_cc-acquisition-sc_com_organic-sg-en"
                                  title="Journey Credit Card"
                                >
                                  <div className="sc-badge sc-badge--gradient">
                                    <span className="sc-badge__text">Miles</span>
                                  </div>
                                  <div className="sc-meganav-product-tile__icon">
                                    <svg
                                      width="24"
                                      height="24"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M2.25 20.25H15.75"
                                        stroke="#1F8845"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        d="M1.58665 13.1598L5.12059 16.4729C5.59144 16.9143 6.19209 17.1921 6.83336 17.2651C7.47463 17.338 8.12232 17.2022 8.68028 16.8778L22.8747 8.62521L21.1273 6.48945C20.674 5.93538 20.0374 5.56169 19.3327 5.43586C18.6279 5.31004 17.9014 5.44039 17.2844 5.80336L13.1247 8.25021L7.49973 6.37521L5.95295 7.03811C5.83723 7.08771 5.73586 7.16564 5.65817 7.26472C5.58049 7.3638 5.529 7.48084 5.50845 7.60505C5.4879 7.72926 5.49895 7.85665 5.54058 7.97547C5.58221 8.09429 5.65309 8.20072 5.74667 8.28494L8.62473 10.8752L5.99973 12.3752L3.37473 11.2502L1.80417 11.9233C1.68963 11.9724 1.58913 12.0492 1.51175 12.1469C1.43437 12.2446 1.38254 12.36 1.36095 12.4827C1.33936 12.6055 1.34869 12.7316 1.3881 12.8498C1.4275 12.9681 1.49575 13.0746 1.58665 13.1598V13.1598Z"
                                        stroke="black"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                    </svg>
                                  </div>
                                  <div className="sc-meganav-product-tile__title">
                                    Journey Credit Card
                                  </div>
                                  <div className="sc-meganav-product-tile__content-wrapper">
                                    <div className="sc-meganav-product-tile__value">
                                      Earn up to <strong>3</strong> miles
                                    </div>
                                    <p className="sc-meganav-product-tile__desc">
                                      with your spends
                                    </p>
                                  </div>
                                  <div className="sc-meganav-product-tile__list">
                                    Get up to 45,000 miles when you apply*
                                  </div>
                                  <div className="sc-meganav-product-tile__hover-item">
                                    <img
                                      className="sc-meganav-product-tile__hover-image"
                                      src="https://av.sc.com/sg/content/images/sg-journey-card-440x280px.png"
                                      alt="Simply Cash Credit Card"
                                    />
                                  </div>
                                </a>
                              </div>
                              <div className="sc-meganav-drop__tiles-col">
                                <a
                                  className="sc-meganav-product-tile sc-meganav-product-tile--hover sc-meganav-product-tile--hover-animated sc-meganav-product-tile--h-200"
                                  href="/sg/credit-cards/smart-credit-card/?intcid=web_listing-sc_com_top_nav-homepg1-staticmedia_others-sng-homepage_new-smart_cc-acquisition-sc_com_organic-sg-en"
                                  title="Smart Credit Card"
                                >
                                  <div className="sc-badge sc-badge--gradient">
                                    <span className="sc-badge__text">Cashback</span>
                                  </div>
                                  <div className="sc-meganav-product-tile__icon">
                                    <svg
                                      width="24"
                                      height="24"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M1.67647 20.122V19.08C1.67647 17.938 2.60225 17.0122 3.74427 17.0122H9.48745C10.1441 17.0122 10.6765 17.5445 10.6765 18.2012V18.2012M6.44118 19.3902H9.48745C10.1441 19.3902 10.6765 18.8579 10.6765 18.2012V18.2012M10.6765 18.2012L13.902 15.6572C14.3814 15.2792 15.0649 15.3075 15.5113 15.724V15.724C16.0425 16.2195 16.0341 17.064 15.4932 17.5489L11.8635 20.803C10.6446 21.8957 9.06532 22.5 7.42839 22.5H1.5"
                                        stroke="black"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                      />
                                      <path
                                        d="M21 13.0278V4.22631C19.8571 3.05273 16.4286 2.46624 13 3.63964C9.57143 4.81304 8.42857 4.22632 5 3.63954V13.6145C7.28571 14.2013 9 14.2014 13 13.0279C13.9991 12.7348 18.7143 11.8542 21 13.0278Z"
                                        stroke="black"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        d="M13 10C14.1046 10 15 9.10457 15 8C15 6.89543 14.1046 6 13 6C11.8954 6 11 6.89543 11 8C11 9.10457 11.8954 10 13 10Z"
                                        stroke="#1F8845"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        d="M16 3.5L20 9"
                                        stroke="#1F8845"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        d="M16.5 12.5L21 9"
                                        stroke="#1F8845"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        d="M10 4.5L5 8"
                                        stroke="#1F8845"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        d="M10 13L6 9"
                                        stroke="#1F8845"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                    </svg>
                                  </div>
                                  <div className="sc-meganav-product-tile__title">
                                    Smart Credit Card
                                  </div>
                                  <div className="sc-meganav-product-tile__content-wrapper">
                                    <div className="sc-meganav-product-tile__value">
                                      Earn <strong>6%</strong> cashback
                                    </div>
                                    <p className="sc-meganav-product-tile__desc">
                                      on selected spends
                                    </p>
                                  </div>
                                  <div className="sc-meganav-product-tile__list">
                                    Get S$288 cashback when you apply*
                                  </div>
                                  <div className="sc-meganav-product-tile__hover-item">
                                    <img
                                      className="sc-meganav-product-tile__hover-image"
                                      src="https://av.sc.com/sg/content/images/sg-smart-credit-card-360x360-v3-2.png"
                                      alt="Simply Cash Credit Card"
                                    />
                                  </div>
                                </a>
                              </div>

                              <div className="sc-meganav-drop__tiles-col">
                                <a
                                  href="/sg/credit-cards/?intcid=web_listing-sc_com_top_nav-homepg1-staticmedia_others-sng-homepage_new-CC-acquisition-sc_com_organic-sg-en"
                                  title="View and Compare All Cards"
                                  className="sc-meganav-product-tile sc-meganav-product-tile--hover sc-meganav-product-tile--h-200"
                                >
                                  <div className="sc-meganav-product-tile__icon">
                                    <svg
                                      width="18"
                                      height="18"
                                      viewBox="0 0 18 18"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M12.0162 0L6.00019 12.336L0.0961914 0H2.78419L6.08019 7.312L9.42419 0H12.0162Z"
                                        fill="#1F8845"
                                      ></path>
                                      <path
                                        d="M13.912 6.83984C13 6.83984 12.264 7.25584 12.264 8.13584C12.264 8.69584 12.616 9.04784 13.256 9.38384L15.656 10.5678C17.096 11.2718 17.784 12.1358 17.784 13.4798C17.784 15.7198 15.976 17.1598 13.48 17.1598C12.12 17.1598 10.776 16.8238 9.68799 16.0238V13.3678C11.032 14.5838 12.44 15.1438 13.528 15.1438C14.472 15.1438 15.256 14.7438 15.256 13.8958C15.256 13.2878 15 12.9838 14.184 12.5518L11.928 11.4638C10.568 10.8078 9.78399 9.91184 9.78399 8.34384C9.78399 6.18384 11.56 4.83984 13.88 4.83984C15.048 4.83984 16.168 5.07984 17.144 5.68784V8.19984C16.024 7.33584 14.92 6.83984 13.912 6.83984Z"
                                        fill="black"
                                      ></path>
                                    </svg>
                                  </div>

                                  <div className="sc-meganav-product-tile__content-wrapper">
                                    <p className="sc-meganav-product-tile__desc">
                                      Compare credit cards and choose the one that best suits your
                                      needs
                                    </p>
                                  </div>
                                  <p className="sc-btn sc-btn--secondary-blue">
                                    View and Compare All Cards
                                  </p>
                                </a>
                              </div>
                            </div>

                            <div className="sc-meganav-drop__col sc-meganav-drop__col-30 sc-meganav-drop__padding-right">
                              <div className="sc-meganav-drop__col-label">
                                CREDIT CARD PROMOTIONS
                              </div>
                              <ul className="sc-meganav-drop__col-list">
                                <li className="sc-meganav-drop__col-item">
                                  <div className="sc-meganav-drop__col-text">
                                    <a
                                      title="Lifestyle Offers - The Good Life "
                                      href="/sg/promotions/the-good-life-privileges/?intcid=web_listing-sc_com_top_nav-homepg1-staticmedia_others-sng-homepage_new-CC-acquisition-sc_com_organic-sg-en"
                                    >
                                      <p className="sc-meganav-drop__link">
                                        Lifestyle Offers - The Good Life
                                      </p>
                                    </a>
                                  </div>
                                </li>
                              </ul>

                              <div className="sc-meganav-drop__col-label">CREDIT CARD FEATURES</div>
                              <ul className="sc-meganav-drop__col-list">
                                <li className="sc-meganav-drop__col-item">
                                  <div className="sc-meganav-drop__col-text">
                                    <a
                                      title="SC Instalment Payment Plan"
                                      href="/sg/bank-with-us/manage-your-finances/ipp/"
                                    >
                                      <p className="sc-meganav-drop__link">
                                        SC Instalment Payment Plan
                                      </p>
                                    </a>
                                  </div>
                                </li>
                                <li className="sc-meganav-drop__col-item">
                                  <div className="sc-meganav-drop__col-text">
                                    <a
                                      title="SC EasyPay Instalments"
                                      href="/sg/bank-with-us/manage-your-finances/easypay/"
                                    >
                                      <p className="sc-meganav-drop__link">
                                        SC EasyPay Instalments
                                      </p>
                                    </a>
                                  </div>
                                </li>
                                <li className="sc-meganav-drop__col-item">
                                  <div className="sc-meganav-drop__col-text">
                                    <a
                                      title="SC EasyBill Payments"
                                      href="/sg/bank-with-us/manage-your-finances/easybill/"
                                    >
                                      <p className="sc-meganav-drop__link">SC EasyBill Payments</p>
                                    </a>
                                  </div>
                                </li>
                                <li className="sc-meganav-drop__col-item">
                                  <div className="sc-meganav-drop__col-text">
                                    <a
                                      title="Credit Card Credit Limit Review "
                                      href="/sg/bank-with-us/manage-your-finances/credit-limit-review/"
                                    >
                                      <p className="sc-meganav-drop__link">
                                        Credit Card Credit Limit Review
                                      </p>
                                    </a>
                                  </div>
                                </li>

                                <li className="sc-meganav-drop__col-item">
                                  <div className="sc-meganav-drop__col-text">
                                    <a
                                      title="Temporary Credit Limit Increase"
                                      href="/sg/bank-with-us/manage-your-finances/temporary-credit-limit-increase/"
                                    >
                                      <p className="sc-meganav-drop__link">
                                        Temporary Credit Limit Increase
                                      </p>
                                    </a>
                                  </div>
                                </li>
                                <li className="sc-meganav-drop__col-item">
                                  <div className="sc-meganav-drop__col-text">
                                    <a
                                      title="360° Rewards Redemption"
                                      href="/sg/rewards-programmes/360-rewards-redemption/"
                                    >
                                      <p className="sc-meganav-drop__link">
                                        360° Rewards Redemption
                                      </p>
                                    </a>
                                  </div>
                                </li>
                                <li className="sc-meganav-drop__col-item">
                                  <div className="sc-meganav-drop__col-text">
                                    <a
                                      title="SC Apple Rewards Store"
                                      href="/sg/rewards-programmes/ars/"
                                    >
                                      <p className="sc-meganav-drop__link">
                                        SC Apple Rewards Store
                                      </p>
                                    </a>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <hr className="sc-meganav__mbl-line sc-only-mobile-nav" />
                          <div className="sc-meganav-drop__col-40 sc-meganav-drop__col-flex sc-meganav-drop__padding-left">
                            <div className="sc-meganav-drop__col">
                              <div className="sc-meganav-drop__col-label">Credit Card Services</div>
                              <ul className="sc-meganav-drop__col-list">
                                <li className="sc-meganav-drop__col-item">
                                  <div className="sc-meganav-drop__col-text">
                                    <a title="Card Activation " href="/sg/help/activate-card/">
                                      <p className="sc-meganav-drop__link">Card Activation</p>
                                    </a>
                                  </div>
                                </li>
                                <li className="sc-meganav-drop__col-item">
                                  <div className="sc-meganav-drop__col-text">
                                    <a
                                      title="Supplementary Card"
                                      href="https://av.sc.com/sg/content/docs/sg-supplementary-card-mobile-update-form-1.pdf"
                                    >
                                      <p className="sc-meganav-drop__link">Supplementary Card</p>
                                    </a>
                                  </div>
                                </li>
                                <li className="sc-meganav-drop__col-item">
                                  <div className="sc-meganav-drop__col-text">
                                    <a
                                      title="E-Statement"
                                      href="/sg/bank-with-us/online-banking-services/online-estatements/"
                                    >
                                      <p className="sc-meganav-drop__link">E-Statement</p>
                                    </a>
                                  </div>
                                </li>
                                <li className="sc-meganav-drop__col-item">
                                  <div className="sc-meganav-drop__col-text">
                                    <a
                                      title="Card Payment Method "
                                      href="/sg/bank-with-us/manage-your-payments/"
                                    >
                                      <p className="sc-meganav-drop__link">Card Payment Method</p>
                                    </a>
                                  </div>
                                </li>
                                <li className="sc-meganav-drop__col-item">
                                  <div className="sc-meganav-drop__col-text">
                                    <a
                                      title="Card Replacement"
                                      href="/sg/bank-with-us/service-requests/card-replacement/"
                                    >
                                      <p className="sc-meganav-drop__link">Card Replacement</p>
                                    </a>
                                  </div>
                                </li>
                                <li className="sc-meganav-drop__col-item">
                                  <div className="sc-meganav-drop__col-text">
                                    <a title="Lost Card" href="/sg/help/lost-card/">
                                      <p className="sc-meganav-drop__link">Lost Card</p>
                                    </a>
                                  </div>
                                </li>
                                <li className="sc-meganav-drop__col-item">
                                  <div className="sc-meganav-drop__col-text">
                                    <a title="Fraud & Scam" href="/sg/fraud-scam/">
                                      <p className="sc-meganav-drop__link">Fraud & Scam</p>
                                    </a>
                                  </div>
                                </li>
                                <li className="sc-meganav-drop__col-item">
                                  <div className="sc-meganav-drop__col-text">
                                    <a title="Pricing Guide " href="/sg/pricing-guide/">
                                      <p className="sc-meganav-drop__link">Pricing Guide</p>
                                    </a>
                                  </div>
                                </li>
                              </ul>
                            </div>

                            <div className="sc-meganav-drop__col sc-meganav-drop__padding-left sc-meganav-drop__ml-auto">
                              <a
                                className="sc-meganav-image-tile"
                                href="/sg/promotions/the-good-life-privileges/?intcid=web_listing-sc_com_masthead-homepg1-staticmedia_banner-sng-homepage_new-CC-acquisition-sc_com_organic-sg-en"
                                title="The Good Life® Promotions"
                              >
                                <div className="sc-meganav-image-tile__wrapper">
                                  <div className="sc-meganav-image-tile__content">
                                    <div className="sc-meganav-image-tile__content-box">
                                      <div className="sc-meganav-image-tile__title">
                                        The Good Life® Promotions
                                      </div>
                                      <p className="sc-meganav-image-tile__desc">
                                        Explore more than 180 offers with your SC Credit Card
                                      </p>
                                    </div>
                                    <div className="sc-meganav-image-tile__button">
                                      Learn More
                                      <svg
                                        width="16"
                                        height="16"
                                        viewBox="0 0 16 17"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M8 14.5C11.3137 14.5 14 11.8137 14 8.5C14 5.18629 11.3137 2.5 8 2.5C4.68629 2.5 2 5.18629 2 8.5C2 11.8137 4.68629 14.5 8 14.5Z"
                                          stroke="#2772C7"
                                          strokeMiterlimit="10"
                                        />
                                        <path
                                          d="M8.37868 10.6213L10.5 8.49999L8.37868 6.37868"
                                          stroke="#2772C7"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M5.5 8.5H10.5"
                                          stroke="#2772C7"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                      </svg>
                                    </div>
                                  </div>
                                  <div className="sc-meganav-image-tile__image sc-meganav-image-tile__image--bottom">
                                    <img
                                      src="https://av.sc.com/sg/content/images/nav-promo-1.png"
                                      alt="promo"
                                    />
                                  </div>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* <div className="sc-meganav-drop__view-all sc-only-desktop-nav">
              <a href="/sg/credit-cards/" title="View and compare all credit cards"
                className="sc-meganav-drop__btn sc-btn-link sc-btn-link--blue">
                View and compare all credit cards
              </a>
            </div> */}
                    </div>
                  </div>
                </div>
              </li>

              {/* Borrow */}

              <li className="sc-meganav__item sc-meganav__item--has-meganav">
                <button className="sc-meganav__btn sc-meganav__menu">
                  Borrow
                  <span className="sc-only-mobile-nav">
                    Personal Loans, Home Loan, Debt Consolidation
                  </span>
                </button>

                <div className="sc-meganav__mgnv-wrapper">
                  <div className="sc-meganav-drop">
                    <button className="sc-meganav__btn sc-meganav-drop__back sc-meganav__back sc-only-mobile-nav">
                      Borrow
                    </button>

                    <div className="sc-meganav-drop__content">
                      <div className="sc-meganav-drop__wrapper sc-meganav__container">
                        <div className="sc-meganav-drop__w-full">
                          <div className="sc-meganav-drop__col-label">Looking for a loan for</div>
                          <div className="sc-meganav-drop__small-tiles">
                            <a
                              href="/sg/borrow/renovation/"
                              title="Home Renovation"
                              className="sc-meganav-tile-small"
                            >
                              <img
                                className="sc-meganav-tile-small__bg"
                                src="https://av.sc.com/sg/content/images/navbar-home-renovation.jpg"
                                alt="home-renovation"
                              />
                              <div className="sc-meganav-tile-small__text">Home Renovation</div>
                            </a>
                            <a
                              href="/sg/borrow/travel/"
                              title="Travel"
                              className="sc-meganav-tile-small"
                            >
                              <img
                                className="sc-meganav-tile-small__bg"
                                src="https://av.sc.com/sg/content/images/navbar-travel.jpg"
                                alt="navbar-travel"
                              />
                              <div className="sc-meganav-tile-small__text">Travel</div>
                            </a>
                            <a
                              href="/sg/borrow/parenthood/"
                              title="Expecting Parents"
                              className="sc-meganav-tile-small"
                            >
                              <img
                                className="sc-meganav-tile-small__bg"
                                src="https://av.sc.com/sg/content/images/navbar-parents.jpg"
                                alt="navbar-parents"
                              />
                              <div className="sc-meganav-tile-small__text">Expecting Parents</div>
                            </a>
                            <a
                              href="/sg/borrow/mortgages/"
                              title="Buying a Home"
                              className="sc-meganav-tile-small"
                            >
                              <img
                                className="sc-meganav-tile-small__bg"
                                src="https://av.sc.com/sg/content/images/navbar-buying-home.jpg"
                                alt="navbar-buying-home"
                              />
                              <div className="sc-meganav-tile-small__text">Buying a Home</div>
                            </a>
                            <a
                              href="/sg/borrow/?intcid=web_listing-sc_com_top_nav-homepg1-staticmedia_others-sng-homepage_new-PL-acquisition-sc_com_organic-sg-en"
                              title="Find a loan for your needs"
                              className="sc-meganav-tile-small sc-only-desktop-nav"
                            >
                              <div className="sc-meganav-tile-small__text">
                                Find a loan for your needs
                              </div>
                            </a>

                            <div className="sc-meganav-product-tile sc-only-mobile-nav">
                              <div className="sc-meganav-product-tile__icon">
                                <svg
                                  width="18"
                                  height="18"
                                  viewBox="0 0 18 18"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M12.0162 0L6.00019 12.336L0.0961914 0H2.78419L6.08019 7.312L9.42419 0H12.0162Z"
                                    fill="#1F8845"
                                  />
                                  <path
                                    d="M13.912 6.83984C13 6.83984 12.264 7.25584 12.264 8.13584C12.264 8.69584 12.616 9.04784 13.256 9.38384L15.656 10.5678C17.096 11.2718 17.784 12.1358 17.784 13.4798C17.784 15.7198 15.976 17.1598 13.48 17.1598C12.12 17.1598 10.776 16.8238 9.68799 16.0238V13.3678C11.032 14.5838 12.44 15.1438 13.528 15.1438C14.472 15.1438 15.256 14.7438 15.256 13.8958C15.256 13.2878 15 12.9838 14.184 12.5518L11.928 11.4638C10.568 10.8078 9.78399 9.91184 9.78399 8.34384C9.78399 6.18384 11.56 4.83984 13.88 4.83984C15.048 4.83984 16.168 5.07984 17.144 5.68784V8.19984C16.024 7.33584 14.92 6.83984 13.912 6.83984Z"
                                    fill="black"
                                  />
                                </svg>
                              </div>

                              <div className="sc-meganav-product-tile__content-wrapper">
                                <p className="sc-meganav-product-tile__desc">
                                  Find a loan for your needs
                                </p>
                              </div>
                              <a
                                href="/sg/borrow/"
                                className="sc-btn sc-btn--secondary-blue"
                                title="Compare and View All Loans"
                              >
                                Compare and View All Loans
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="sc-meganav-drop__w-full sc-meganav-drop__col-flex">
                          <div className="sc-meganav-drop__col-80 sc-meganav-drop__border-right">
                            <div className="sc-meganav-drop__col-label">
                              Or looking for a particular product
                            </div>
                            <div className="sc-meganav-drop__col-flex">
                              <div className="sc-meganav-drop__tiles sc-meganav-drop__tiles--4 sc-meganav-drop__padding-right">
                                <div className="sc-meganav-drop__tiles-col">
                                  <a
                                    className="sc-meganav-product-tile sc-meganav-product-tile--hover sc-meganav-product-tile--no-h"
                                    href="/sg/borrow/loans/cashone/?intcid=web_listing-sc_com_top_nav-homepg1-staticmedia_others-sng-homepage_new-cashone_pl-acquisition-sc_com_organic-sg-en"
                                    title="CashOne Personal Loan"
                                  >
                                    <div className="sc-badge sc-badge--gradient">
                                      <span className="sc-badge__text">Cashback</span>
                                    </div>
                                    <div className="sc-meganav-product-tile__icon">
                                      <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M3 18.9186V15.9471C3 15.33 3.46138 14.8104 4.07411 14.7374L10.0959 14.0198C10.6932 13.9486 11.2801 14.2179 11.6158 14.717C11.9198 15.1691 11.9733 15.7447 11.758 16.2451L11.6897 16.4038L18.873 13.151C19.3879 12.9179 19.9958 13.0807 20.3252 13.54C20.7005 14.0631 20.5896 14.7901 20.0754 15.1776L14.2862 19.5405C13.6753 20.001 12.931 20.25 12.166 20.25H4.33142C3.5961 20.25 3 19.6539 3 18.9186Z"
                                          stroke="black"
                                          strokeWidth="1.5"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M19.3171 10.224C19.4874 6.16076 16.3316 2.72876 12.2683 2.55842C8.20505 2.38809 4.77305 5.54392 4.60271 9.60717C4.56666 10.4671 4.67958 11.2987 4.91854 12.0771"
                                          stroke="black"
                                          strokeWidth="1.5"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <rect
                                          x="12.0986"
                                          y="6.44043"
                                          width="3.61161"
                                          height="3.61161"
                                          transform="rotate(45 12.0986 6.44043)"
                                          stroke="#1F8845"
                                          strokeWidth="1.5"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                      </svg>
                                    </div>
                                    <div className="sc-meganav-product-tile__title">
                                      CashOne Personal Loan
                                    </div>
                                    <div className="sc-meganav-product-tile__content-wrapper">
                                      <div className="sc-meganav-product-tile__value">
                                        <strong>2.88 % </strong>p.a
                                      </div>
                                      <p className="sc-meganav-product-tile__desc">
                                        (EIR from 5.84% p.a.)
                                      </p>
                                    </div>
                                    <div className="sc-meganav-product-tile__list">
                                      <ul>
                                        <li>
                                          Instant approval and disbursement to bank account of
                                          choice
                                        </li>
                                        <li>Plus, stacked rewards of up to S$4,300</li>
                                        <li>Tenures from 1 to 5 years</li>
                                      </ul>
                                    </div>
                                  </a>
                                </div>
                                <div className="sc-meganav-drop__tiles-col">
                                  <a
                                    className="sc-meganav-product-tile sc-meganav-product-tile--hover sc-meganav-product-tile--no-h"
                                    href="/sg/borrow/loans/balance-transfer/?intcid=web_listing-sc_com_top_nav-homepg1-staticmedia_others-sng-homepage_new-CCFT-acquisition-sc_com_organic-sg-en"
                                    title="Credit Card Funds Transfer"
                                  >
                                    <div className="sc-badge sc-badge--gradient">
                                      <span className="sc-badge__text">Interest-Free</span>
                                    </div>
                                    <div className="sc-meganav-product-tile__icon">
                                      <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M3 18.9186V15.9471C3 15.33 3.46138 14.8104 4.07411 14.7374L10.0959 14.0198C10.6932 13.9486 11.2801 14.2179 11.6158 14.717C11.9198 15.1691 11.9733 15.7447 11.758 16.2451L11.6897 16.4038L18.873 13.151C19.3879 12.9179 19.9958 13.0807 20.3252 13.54C20.7005 14.0631 20.5896 14.7901 20.0754 15.1776L14.2862 19.5405C13.6753 20.001 12.931 20.25 12.166 20.25H4.33142C3.5961 20.25 3 19.6539 3 18.9186Z"
                                          stroke="black"
                                          strokeWidth="1.5"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M19.3171 10.224C19.4874 6.16076 16.3316 2.72876 12.2683 2.55842C8.20505 2.38809 4.77305 5.54392 4.60271 9.60717C4.56666 10.4671 4.67958 11.2987 4.91854 12.0771"
                                          stroke="black"
                                          strokeWidth="1.5"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <rect
                                          x="12.0986"
                                          y="6.44043"
                                          width="3.61161"
                                          height="3.61161"
                                          transform="rotate(45 12.0986 6.44043)"
                                          stroke="#1F8845"
                                          strokeWidth="1.5"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                      </svg>
                                    </div>
                                    <div className="sc-meganav-product-tile__title">
                                      Credit Card Funds Transfer
                                    </div>
                                    <div className="sc-meganav-product-tile__content-wrapper">
                                      <div className="sc-meganav-product-tile__value">
                                        <strong>1.80 % </strong>processing fees
                                      </div>
                                      <p className="sc-meganav-product-tile__desc">
                                        (EIR from 4.86%)
                                      </p>
                                    </div>
                                    <div className="sc-meganav-product-tile__list">
                                      <ul>
                                        <li>
                                          Get cash for your financial needs at 0% interest p.a.
                                        </li>
                                        <li>
                                          Instant approval and disbursement to bank account of
                                          choice
                                        </li>
                                        <li>Tenures from 3 to 12 months</li>
                                      </ul>
                                    </div>
                                  </a>
                                </div>
                                <div className="sc-meganav-drop__tiles-col">
                                  <a
                                    className="sc-meganav-product-tile sc-meganav-product-tile--hover sc-meganav-product-tile--no-h"
                                    href="/sg/borrow/loans/debt-consolidation/?intcid=web_listing-sc_com_top_nav-homepg1-staticmedia_others-sng-homepage_new-debt_consolidation-acquisition-sc_com_organic-sg-en"
                                    title="Debit Consolidation Plan"
                                  >
                                    <div className="sc-badge sc-badge--gradient">
                                      <span className="sc-badge__text">Cashback</span>
                                    </div>
                                    <div className="sc-meganav-product-tile__icon">
                                      <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M3 18.9186V15.9471C3 15.33 3.46138 14.8104 4.07411 14.7374L10.0959 14.0198C10.6932 13.9486 11.2801 14.2179 11.6158 14.717C11.9198 15.1691 11.9733 15.7447 11.758 16.2451L11.6897 16.4038L18.873 13.151C19.3879 12.9179 19.9958 13.0807 20.3252 13.54C20.7005 14.0631 20.5896 14.7901 20.0754 15.1776L14.2862 19.5405C13.6753 20.001 12.931 20.25 12.166 20.25H4.33142C3.5961 20.25 3 19.6539 3 18.9186Z"
                                          stroke="black"
                                          strokeWidth="1.5"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M19.3171 10.224C19.4874 6.16076 16.3316 2.72876 12.2683 2.55842C8.20505 2.38809 4.77305 5.54392 4.60271 9.60717C4.56666 10.4671 4.67958 11.2987 4.91854 12.0771"
                                          stroke="black"
                                          strokeWidth="1.5"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <rect
                                          x="12.0986"
                                          y="6.44043"
                                          width="3.61161"
                                          height="3.61161"
                                          transform="rotate(45 12.0986 6.44043)"
                                          stroke="#1F8845"
                                          strokeWidth="1.5"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                      </svg>
                                    </div>
                                    <div className="sc-meganav-product-tile__title">
                                      Debt Consolidation Plan
                                    </div>
                                    <div className="sc-meganav-product-tile__content-wrapper">
                                      <div className="sc-meganav-product-tile__value">
                                        <strong>3.48 % </strong>p.a
                                      </div>
                                      <p className="sc-meganav-product-tile__desc">
                                        (EIR from 6.33% p.a.)
                                      </p>
                                    </div>
                                    <div className="sc-meganav-product-tile__list">
                                      <ul>
                                        <li>
                                          Enjoy low interest rate when you consolidate your
                                          repayments into 1 easy plan
                                        </li>
                                        <li>Receive up to S$500 Cashback upon approval</li>
                                        <li>Tenures from 3 to 10 years</li>
                                      </ul>
                                    </div>
                                  </a>
                                </div>

                                <div className="sc-meganav-drop__tiles-col">
                                  <a
                                    className="sc-meganav-product-tile sc-meganav-product-tile--hover sc-meganav-product-tile--no-h"
                                    href="/sg/borrow/mortgages/mortgageone/?intcid=web_listing-sc_com_top_nav-homepg1-staticmedia_others-sng-homepage_new-mortgage_one-acquisition-sc_com_organic-sg-en"
                                    title="MortgageOne"
                                  >
                                    <div className="sc-badge sc-badge--gradient">
                                      <span className="sc-badge__text">Mortgage</span>
                                    </div>
                                    <div className="sc-meganav-product-tile__icon">
                                      <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M19.2768 10.6935L12.4582 4.67224C12.3327 4.5614 12.1691 4.49999 11.9995 4.5C11.8299 4.50001 11.6664 4.56143 11.5408 4.67227L4.72313 10.6935C4.65285 10.7556 4.5967 10.8312 4.55827 10.9156C4.51985 11 4.5 11.0912 4.5 11.1835V18.8377C4.5 19.0134 4.57183 19.1818 4.6997 19.306C4.82757 19.4302 5.00099 19.5 5.18182 19.5H18.8182C18.999 19.5 19.1724 19.4302 19.3003 19.306C19.4282 19.1818 19.5 19.0134 19.5 18.8377V11.1835C19.5 11.0912 19.4801 11 19.4417 10.9156C19.4033 10.8312 19.3471 10.7556 19.2768 10.6935Z"
                                          stroke="black"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M14.9189 11.5576L9.00034 16.5"
                                          stroke="#1F8845"
                                          strokeLinecap="round"
                                        />
                                        <circle cx="10.125" cy="11.625" r="1.125" fill="#1F8845" />
                                        <circle cx="14.625" cy="16.125" r="1.125" fill="#1F8845" />
                                      </svg>
                                    </div>
                                    <div className="sc-meganav-product-tile__title">
                                      Mortgage One
                                    </div>
                                    {/* <div className="sc-meganav-product-tile__content-wrapper">
                            <div className="sc-meganav-product-tile__value">
                              <strong>1 % </strong>p.a
                            </div>
                            <p className="sc-meganav-product-tile__desc">
                              as low as 1%p.a. interest rate
                            </p>
                          </div> */}
                                    <br />
                                    <div className="sc-meganav-product-tile__list">
                                      <ul>
                                        <li>Reduce your mortgage loan interest the smart way</li>
                                        <li>Offset your mortgage loan interest while you save</li>
                                      </ul>
                                    </div>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="sc-meganav-drop__col-20 sc-meganav-drop__padding-left">
                            <div className="sc-meganav-drop__col">
                              <div className="sc-meganav-drop__col-label">
                                HOME & PROPERTY LOANS
                              </div>
                              <ul className="sc-meganav-drop__col-list">
                                <li className="sc-meganav-drop__col-item">
                                  <div className="sc-meganav-drop__col-text">
                                    <a title="Home Suite" href="/sg/borrow/mortgages/home-suite/">
                                      <p className="sc-meganav-drop__link">Home Suite</p>
                                      <p className="sc-meganav-drop__desc">
                                        Build your home with a bundle of perks
                                      </p>
                                    </a>
                                  </div>
                                </li>
                                <li className="sc-meganav-drop__col-item">
                                  <div className="sc-meganav-drop__col-text">
                                    <a
                                      title="Green Mortgage"
                                      href="/sg/borrow/mortgages/green-mortgage/"
                                    >
                                      <p className="sc-meganav-drop__link">Green Mortgage</p>
                                      <p className="sc-meganav-drop__desc">
                                        Make a positive impact on society and the environment
                                      </p>
                                    </a>
                                  </div>
                                </li>
                                <li className="sc-meganav-drop__col-item">
                                  <div className="sc-meganav-drop__col-text">
                                    <a
                                      title="Loan Repricing"
                                      href="/sg/borrow/mortgages/loanrepricing/"
                                    >
                                      <p className="sc-meganav-drop__link">Loan Repricing</p>
                                      <p className="sc-meganav-drop__desc">
                                        Enjoy lower interest rates for your mortgage loan because we
                                        value your relationship with us
                                      </p>
                                    </a>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* <div className="sc-meganav-drop__view-all sc-only-desktop-nav">
              <a href="/sg/borrow/" title="View all loans"
                className="sc-meganav-drop__btn sc-btn-link sc-btn-link--blue">
                View all loans
              </a>
            </div> */}
                    </div>
                  </div>
                </div>
              </li>

              {/* Investments */}

              <li className="sc-meganav__item sc-meganav__item--has-meganav">
                <button className="sc-meganav__btn sc-meganav__menu">
                  Investment
                  <span className="sc-only-mobile-nav">
                    Unit Trusts, Online Trading, Live FX, Wealth Insights
                  </span>
                </button>

                <div className="sc-meganav__mgnv-wrapper">
                  <div className="sc-meganav-drop">
                    <button className="sc-meganav__btn sc-meganav-drop__back sc-meganav__back sc-only-mobile-nav">
                      Investment
                    </button>

                    <div className="sc-meganav-drop__content">
                      <div className="sc-meganav-drop__wrapper sc-meganav__container">
                        <div className="sc-meganav-drop__w-full sc-meganav-drop__col-flex">
                          <div className="sc-meganav-drop__col-60 sc-meganav-drop__padding-right sc-meganav-drop__border-right">
                            <div className="sc-meganav-drop__tiles sc-meganav-drop__tiles--3">
                              <div className="sc-meganav-drop__tiles-col">
                                <a
                                  className="sc-meganav-product-tile sc-meganav-product-tile--hover sc-meganav-product-tile--no-h"
                                  href="/sg/wealth/investment/online-trading/?intcid=web_listing-sc_com_masthead-homepg1-staticmedia_banner-sng-homepage_new-online_trading-acquisition-sc_com_organic-sg-en"
                                  title="Online Trading Account​"
                                >
                                  <div className="sc-badge sc-badge--gradient">
                                    <span className="sc-badge__text">Invest in Equities</span>
                                  </div>
                                  <div className="sc-meganav-product-tile__icon">
                                    <svg
                                      width="24"
                                      height="24"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M21 19.5H3V4.5"
                                        stroke="black"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        d="M19.5 6L12 13.5L9 10.5L3 16.5"
                                        stroke="#1F8845"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        d="M19.5 9.75V6H15.75"
                                        stroke="#1F8845"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                    </svg>
                                  </div>
                                  <div className="sc-meganav-product-tile__title">
                                    Online Trading Account​
                                  </div>
                                  <div className="sc-meganav-product-tile__content-wrapper">
                                    <div className="sc-meganav-product-tile__value">
                                      Up to <strong>S$560 </strong>cash rewards
                                    </div>
                                    <p className="sc-meganav-product-tile__desc">
                                      when you sign up now
                                    </p>
                                  </div>
                                  <div className="sc-meganav-product-tile__list">
                                    Access US equities and 14 global exchanges on the go
                                  </div>
                                </a>
                              </div>
                              <div className="sc-meganav-drop__tiles-col">
                                <a
                                  className="sc-meganav-product-tile sc-meganav-product-tile--hover sc-meganav-product-tile--no-h"
                                  href="/sg/wealth/investment/unit-trusts/?intcid=web_listing-sc_com_masthead-homepg1-staticmedia_banner-sng-homepage_new-unit_trust-acquisition-sc_com_organic-sg-en"
                                  title="Unit Trust Account​"
                                >
                                  <div className="sc-badge sc-badge--gradient">
                                    <span className="sc-badge__text">Invest in Mutual Funds​</span>
                                  </div>
                                  <div className="sc-meganav-product-tile__icon">
                                    <svg
                                      width="24"
                                      height="24"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M12 12V3"
                                        stroke="black"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        d="M19.7945 7.5L4.20605 16.5"
                                        stroke="black"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        d="M3.15008 13.6454C2.76041 11.5366 3.13532 9.35796 4.20749 7.50072C5.27966 5.64348 6.97883 4.22933 8.99988 3.51221V10.268L3.15008 13.6454Z"
                                        stroke="#1F8845"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        d="M12.0002 3C13.577 3.00029 15.1261 3.41485 16.4923 4.20216C17.8585 4.98947 18.9938 6.1219 19.7847 7.48605C20.5755 8.8502 20.9941 10.3982 20.9985 11.975C21.0029 13.5518 20.5929 15.1021 19.8096 16.4706C19.0264 17.8391 17.8973 18.9779 16.5355 19.7728C15.1737 20.5676 13.627 20.9908 12.0502 20.9999C10.4734 21.0089 8.92191 20.6035 7.55108 19.8243C6.18024 19.0451 5.03818 17.9194 4.23926 16.56"
                                        stroke="black"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                    </svg>
                                  </div>
                                  <div className="sc-meganav-product-tile__title">
                                    Unit Trust Account​
                                  </div>
                                  <div className="sc-meganav-product-tile__content-wrapper">
                                    <div className="sc-meganav-product-tile__value">
                                      <strong>0.4% </strong>sales charge
                                    </div>
                                    <p className="sc-meganav-product-tile__desc">
                                      when you invest in unit trusts online
                                    </p>
                                  </div>
                                  <div className="sc-meganav-product-tile__list">
                                    Diversify your portfolio with over 300 fund offerings
                                  </div>
                                </a>
                              </div>
                              <div className="sc-meganav-drop__tiles-col">
                                <a
                                  className="sc-meganav-product-tile sc-meganav-product-tile--hover sc-meganav-product-tile--no-h"
                                  href="/sg/wealth/investment/livefx/?intcid=web_listing-sc_com_masthead-homepg1-staticmedia_banner-sng-homepage_new-livefx-acquisition-sc_com_organic-sg-en"
                                  title="LiveFX​"
                                >
                                  <div className="sc-badge sc-badge--gradient">
                                    <span className="sc-badge__text">
                                      Exchange Foreign Currency​
                                    </span>
                                  </div>
                                  <div className="sc-meganav-product-tile__icon">
                                    <svg
                                      width="24"
                                      height="24"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M11.25 18H4C3.44772 18 3 17.5523 3 17V5.5C3 4.94772 3.44772 4.5 4 4.5H20C20.5523 4.5 21 4.94772 21 5.5V6.75"
                                        stroke="black"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                      />
                                      <path
                                        d="M3 9.75H10.5"
                                        stroke="black"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        d="M18.5 19C20.9853 19 23 16.9853 23 14.5C23 12.0147 20.9853 10 18.5 10C16.0147 10 14 12.0147 14 14.5C14 16.9853 16.0147 19 18.5 19Z"
                                        stroke="#1F8845"
                                        strokeWidth="1.2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        d="M14 14.5H23"
                                        stroke="#1F8845"
                                        strokeWidth="1.2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        d="M18.5 19C19.3284 19 20 16.9853 20 14.5C20 12.0147 19.3284 10 18.5 10C17.6716 10 17 12.0147 17 14.5C17 16.9853 17.6716 19 18.5 19Z"
                                        stroke="#1F8845"
                                        strokeWidth="1.2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                    </svg>
                                  </div>
                                  <div className="sc-meganav-product-tile__title">LiveFX​</div>
                                  <div className="sc-meganav-product-tile__content-wrapper">
                                    <div className="sc-meganav-product-tile__value">
                                      Competitive real-time currency rates
                                    </div>
                                    <p className="sc-meganav-product-tile__desc">
                                      when you convert your funds
                                    </p>
                                  </div>
                                  <div className="sc-meganav-product-tile__list">
                                    Capture market opportunities with countless pairing
                                    possibilities
                                  </div>
                                </a>
                              </div>
                              <div className="sc-meganav-drop__tiles-col sc-only-mobile-nav">
                                <div className="sc-meganav-product-tile">
                                  <div className="sc-meganav-product-tile__icon">
                                    <svg
                                      width="24"
                                      height="24"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M6 20.4854V16.0078H3V20.4854"
                                        stroke="black"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        d="M11.25 20.4847V11.8877H8.25V20.4847"
                                        stroke="black"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        d="M16.5 20.25V15H13.5V20.25"
                                        stroke="black"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        d="M21.75 20.4847V11.8877H18.75V20.4847"
                                        stroke="black"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <circle
                                        cx="4.38782"
                                        cy="9.93128"
                                        r="1.61194"
                                        stroke="#1F8845"
                                      />
                                      <circle
                                        cx="14.4181"
                                        cy="9.93128"
                                        r="1.61194"
                                        stroke="#1F8845"
                                      />
                                      <circle
                                        cx="9.40296"
                                        cy="5.81214"
                                        r="1.61194"
                                        stroke="#1F8845"
                                      />
                                      <circle
                                        cx="19.4327"
                                        cy="5.81214"
                                        r="1.61194"
                                        stroke="#1F8845"
                                      />
                                      <path d="M18.75 6.86426L15.75 9.11426" stroke="#1F8845" />
                                      <path d="M8.25 6.86426L5.25 9.11426" stroke="#1F8845" />
                                      <path d="M10.6567 6.97656L13.0746 8.94671" stroke="#1F8845" />
                                      <path
                                        d="M1.5 20.4854H22.855"
                                        stroke="black"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                    </svg>
                                  </div>

                                  <div className="sc-meganav-product-tile__content-wrapper">
                                    <p className="sc-meganav-product-tile__desc">
                                      Choose the one that best suits your needs
                                    </p>
                                  </div>
                                  <a
                                    href="/sg/wealth/?intcid=web_listing-sc_com_masthead-homepg1-staticmedia_banner-sng-homepage_new-Invest-acquisition-sc_com_organic-sg-en"
                                    className="sc-btn sc-btn--secondary-blue"
                                    title="View all Wealth Solutions"
                                  >
                                    View all Wealth Solutions
                                  </a>
                                </div>
                              </div>
                            </div>

                            <div className="sc-meganav-drop__col sc-meganav-drop__mt">
                              <div className="sc-meganav-drop__col-label">
                                Tools and insights to support your financial decisions
                              </div>
                              <ul className="sc-meganav-drop__col-list sc-meganav-drop__tiles sc-meganav-drop__tiles--3">
                                <li className="sc-meganav-drop__col-item sc-meganav-drop__col-item--mb-0">
                                  <div className="sc-meganav-drop__col-text">
                                    <a title="Wealth Insights" href="/sg/wealth/insights/">
                                      <p className="sc-meganav-drop__link">Wealth Insights</p>
                                      <p className="sc-meganav-drop__desc">
                                        Access our curated reads to help you make informed financial
                                        decisions
                                      </p>
                                    </a>
                                  </div>
                                </li>
                                <li className="sc-meganav-drop__col-item sc-meganav-drop__col-item--mb-0">
                                  <div className="sc-meganav-drop__col-text">
                                    <a
                                      title="Interactive Funds Library"
                                      href="/sg/investment/funds/"
                                    >
                                      <p className="sc-meganav-drop__link">
                                        Interactive Funds Library
                                      </p>
                                      <p className="sc-meganav-drop__desc">
                                        Gain access to research, fund comparisons and
                                        fund-factsheets at a touch
                                      </p>
                                    </a>
                                  </div>
                                </li>
                                <li className="sc-meganav-drop__col-item sc-meganav-drop__col-item--mb-0">
                                  <div className="sc-meganav-drop__col-text">
                                    <a
                                      title="Market Views On-The-Go​"
                                      href="/sg/market-outlook/?intcid=web&lang=en&ctry=sg&seg=GWm&channel=PLRB"
                                    >
                                      <p className="sc-meganav-drop__link">
                                        Market Views On-The-Go
                                      </p>
                                      <p className="sc-meganav-drop__desc">
                                        Tap into our global resources to analyse the financial
                                        markets around the world
                                      </p>
                                    </a>
                                  </div>
                                </li>
                                <li className="sc-meganav-drop__col-item sc-meganav-drop__col-item--mb-0">
                                  <div className="sc-meganav-drop__col-text">
                                    <a
                                      title="myWealth Advisor​"
                                      href="/sg/wealth/mywealth-advisor/"
                                    >
                                      <p className="sc-meganav-drop__link">myWealth Advisor</p>
                                      <p className="sc-meganav-drop__desc">
                                        Access expert analysis and insights tailored to your wealth
                                        goals with our personalised investment planning tool
                                      </p>
                                    </a>
                                  </div>
                                </li>
                                <li className="sc-meganav-drop__col-item sc-meganav-drop__col-item--mb-0">
                                  <div className="sc-meganav-drop__col-text">
                                    <a
                                      title="SC Money Insights​"
                                      href="https://feeds.buzzsprout.com/1662247.rss/"
                                      target="_blank"
                                      rel="noreferrer"
                                    >
                                      <p className="sc-meganav-drop__link">SC Money Insights</p>
                                      <p className="sc-meganav-drop__desc">
                                        Tune into our podcast series for the latest market
                                        views-on-the-go
                                      </p>
                                    </a>
                                  </div>
                                </li>
                                <li className="sc-meganav-drop__col-item sc-meganav-drop__col-item--mb-0">
                                  <div className="sc-meganav-drop__col-text">
                                    <a title="Market Outlook Videos" href="/sg/market-outlook/">
                                      <p className="sc-meganav-drop__link">Market Outlook Videos</p>
                                      <p className="sc-meganav-drop__desc">
                                        Keep yourself up-to-date of the latest market happening with
                                        the market outlook videos
                                      </p>
                                    </a>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>

                          <hr className="sc-meganav__mbl-line sc-only-mobile-nav" />
                          <div className="sc-meganav-drop__col-40 sc-meganav-drop__col-flex sc-meganav-drop__padding-left">
                            <div className="sc-meganav-drop__col sc-meganav-drop__col-40">
                              <div className="sc-meganav-drop__col-label">NEW OFFERS</div>
                              <ul className="sc-meganav-drop__col-list">
                                <li className="sc-meganav-drop__col-item">
                                  <div className="sc-meganav-drop__col-text">
                                    <a
                                      title="New to Online Trading"
                                      href="/sg/wealth/investment/online-trading/"
                                    >
                                      <p className="sc-meganav-drop__link">New to Online Trading</p>
                                    </a>
                                  </div>
                                </li>

                                <li className="sc-meganav-drop__col-item">
                                  <div className="sc-meganav-drop__col-text">
                                    <a
                                      title="New to Unit Trusts"
                                      href="/sg/wealth/investment/unit-trusts/"
                                    >
                                      <p className="sc-meganav-drop__link">New to Unit Trusts</p>
                                    </a>
                                  </div>
                                </li>
                              </ul>

                              <div className="sc-meganav-drop__col-label">INVESTMENT RESOURCES</div>
                              <ul className="sc-meganav-drop__col-list">
                                <li className="sc-meganav-drop__col-item">
                                  <div className="sc-meganav-drop__col-text">
                                    <a title="SC Wealth Select" href="/sg/wealth/sc-wealth-select/">
                                      <p className="sc-meganav-drop__link">SC Wealth Select</p>
                                      <p className="sc-meganav-drop__desc">
                                        Plan your wealth for today, tomorrow and forever with our
                                        investment planning framework
                                      </p>
                                    </a>
                                  </div>
                                </li>
                                <li className="sc-meganav-drop__col-item">
                                  <div className="sc-meganav-drop__col-text">
                                    <a
                                      title="Fund Select Funds"
                                      target="_blank"
                                      rel="noreferrer"
                                      href="https://av.sc.com/sg/content/docs/sg-scb-fund-select-list.pdf"
                                    >
                                      <p className="sc-meganav-drop__link">Fund Select Funds</p>
                                      <p className="sc-meganav-drop__desc">
                                        Quality funds with potential to add value to your portfolio
                                      </p>
                                    </a>
                                  </div>
                                </li>

                                <li className="sc-meganav-drop__col-item">
                                  <div className="sc-meganav-drop__col-text">
                                    <a
                                      title="Accredited Investors"
                                      href="/sg/wealth/accredited-investor/"
                                    >
                                      <p className="sc-meganav-drop__link">Accredited Investors</p>
                                      <p className="sc-meganav-drop__desc">
                                        Access bespoke product offerings and preferential rates for
                                        leverage financing
                                      </p>
                                    </a>
                                  </div>
                                </li>
                              </ul>
                            </div>

                            <div className="sc-meganav-drop__col sc-meganav-drop__col-60 sc-meganav-drop__padding-left sc-meganav-drop__ml-auto">
                              <a
                                className="sc-meganav-image-tile"
                                href="/sg/wealth/signature-cio-funds/"
                                title="View more"
                              >
                                <img
                                  className="sc-meganav-image-tile__bg-image"
                                  src="https://av.sc.com/sg/content/images/navbar-box-img.jpg"
                                  alt="navbar-box-img"
                                />
                                <div className="sc-meganav-image-tile__wrapper">
                                  <div className="sc-meganav-image-tile__content">
                                    <div className="sc-meganav-image-tile__content-box">
                                      <div className="sc-meganav-image-tile__title">
                                        Signature CIO Funds
                                      </div>
                                      <p className="sc-meganav-image-tile__desc">
                                        Foundational portfolios to navigate safely through market
                                        uncertainty
                                      </p>
                                    </div>
                                    <div className="sc-meganav-image-tile__button">
                                      View More
                                      <svg
                                        width="16"
                                        height="16"
                                        viewBox="0 0 16 17"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M8 14.5C11.3137 14.5 14 11.8137 14 8.5C14 5.18629 11.3137 2.5 8 2.5C4.68629 2.5 2 5.18629 2 8.5C2 11.8137 4.68629 14.5 8 14.5Z"
                                          stroke="#2772C7"
                                          strokeMiterlimit="10"
                                        />
                                        <path
                                          d="M8.37868 10.6213L10.5 8.49999L8.37868 6.37868"
                                          stroke="#2772C7"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M5.5 8.5H10.5"
                                          stroke="#2772C7"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                      </svg>
                                    </div>
                                  </div>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="sc-meganav-drop__view-all sc-only-desktop-nav">
                        <a
                          href="/sg/wealth/?intcid=web_listing-sc_com_masthead-homepg1-staticmedia_banner-sng-homepage_new-Invest-acquisition-sc_com_organic-sg-en"
                          title="View all wealth solutions"
                          className="sc-meganav-drop__btn sc-btn-link sc-btn-link--blue"
                        >
                          View all wealth solutions
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              {/* Insurance */}

              <li className="sc-meganav__item sc-meganav__item--has-meganav">
                <button className="sc-meganav__btn sc-meganav__menu">
                  Insurance
                  <span className="sc-only-mobile-nav">
                    Wealth & Legacy Planning, Travel, Health
                  </span>
                </button>

                <div className="sc-meganav__mgnv-wrapper">
                  <div className="sc-meganav-drop">
                    <button className="sc-meganav__btn sc-meganav-drop__back sc-meganav__back sc-only-mobile-nav">
                      Insurance
                    </button>

                    <div className="sc-meganav-drop__content">
                      <div className="sc-meganav-drop__wrapper sc-meganav__container">
                        <div className="sc-meganav-drop__w-full sc-meganav-drop__col-flex">
                          <div className="sc-meganav-drop__col-25 sc-meganav-drop__padding-right sc-meganav-drop__border-right">
                            <div className="sc-meganav-drop__col">
                              <div className="sc-meganav-drop__col-label">
                                Wealth & Legacy Planning
                              </div>
                              <ul className="sc-meganav-drop__col-list">
                                <li className="sc-meganav-drop__col-item">
                                  <div className="sc-meganav-drop__col-text">
                                    <a
                                      title="Insurance Savings Plan"
                                      href="/sg/insurance/insurance-savings-plan/"
                                    >
                                      <p className="sc-meganav-drop__link">
                                        Insurance Savings Plan
                                      </p>
                                    </a>
                                  </div>
                                </li>
                                <li className="sc-meganav-drop__col-item">
                                  <div className="sc-meganav-drop__col-text">
                                    <a title="Legacy​" href="/sg/insurance/legacy/">
                                      <p className="sc-meganav-drop__link">Legacy</p>
                                    </a>
                                  </div>
                                </li>
                                <li className="sc-meganav-drop__col-item">
                                  <div className="sc-meganav-drop__col-text">
                                    <a title="Retirement​" href="/sg/insurance/retirement/">
                                      <p className="sc-meganav-drop__link">Retirement</p>
                                    </a>
                                  </div>
                                </li>
                              </ul>

                              {/* Mobile only button */}
                              <br className="sc-only-mobile-nav" />
                              <a
                                href="/sg/insurance/"
                                title="View all insurances"
                                className="sc-btn sc-btn--secondary-blue sc-only-mobile-nav"
                              >
                                View all insurances
                              </a>
                            </div>
                          </div>

                          <hr className="sc-meganav__mbl-line sc-only-mobile-nav" />

                          <div className="sc-meganav-drop__col-25 sc-meganav-drop__padding-left sc-meganav-drop__border-right">
                            <div className="sc-meganav-drop__col">
                              <div className="sc-meganav-drop__col-label">Health & Accident</div>
                              <ul className="sc-meganav-drop__col-list">
                                <li className="sc-meganav-drop__col-item">
                                  <div className="sc-meganav-drop__col-text">
                                    <a
                                      title="Medical & Health"
                                      href="/sg/insurance/health-insurance/"
                                    >
                                      <p className="sc-meganav-drop__link">Medical & Health</p>
                                    </a>
                                  </div>
                                </li>
                                <li className="sc-meganav-drop__col-item">
                                  <div className="sc-meganav-drop__col-text">
                                    <a
                                      title="Personal Accident"
                                      href="/sg/insurance/personal-accident/"
                                    >
                                      <p className="sc-meganav-drop__link">Personal Accident</p>
                                    </a>
                                  </div>
                                </li>
                                <li className="sc-meganav-drop__col-item">
                                  <div className="sc-meganav-drop__col-text">
                                    <a
                                      title="Critical Illness"
                                      href="/sg/insurance/critical-illness/"
                                    >
                                      <p className="sc-meganav-drop__link">Critical Illness</p>
                                    </a>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <hr className="sc-meganav__mbl-line sc-only-mobile-nav" />
                          <div className="sc-meganav-drop__col-25">
                            <div className="sc-meganav-drop__col sc-meganav-drop__padding-left">
                              <div className="sc-meganav-drop__col-label">Travel, Home & Car</div>
                              <ul className="sc-meganav-drop__col-list">
                                <li className="sc-meganav-drop__col-item">
                                  <div className="sc-meganav-drop__col-text">
                                    <a title="Travel" href="/sg/insurance/msig-traveleasy/">
                                      <p className="sc-meganav-drop__link">Travel</p>
                                    </a>
                                  </div>
                                </li>
                                <li className="sc-meganav-drop__col-item">
                                  <div className="sc-meganav-drop__col-text">
                                    <a title="Home" href="/sg/insurance/allianz-home-protect/">
                                      <p className="sc-meganav-drop__link">Home</p>
                                    </a>
                                  </div>
                                </li>
                                <li className="sc-meganav-drop__col-item">
                                  <div className="sc-meganav-drop__col-text">
                                    <a title="Car" href="/sg/insurance/travel-home-car/">
                                      <p className="sc-meganav-drop__link">Car</p>
                                    </a>
                                  </div>
                                </li>
                                <li className="sc-meganav-drop__col-item">
                                  <div className="sc-meganav-drop__col-text">
                                    <a title="Maid" href="/sg/insurance/msig-maidplus/">
                                      <p className="sc-meganav-drop__link">Maid</p>
                                    </a>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="sc-meganav-drop__col-25">
                            <div className="sc-meganav-drop__col">
                              <a
                                className="sc-meganav-image-tile"
                                href="/sg/insurance/msig-traveleasy/"
                                title="View more"
                              >
                                <div className="sc-meganav-image-tile__wrapper">
                                  <div className="sc-meganav-image-tile__content">
                                    <div className="sc-meganav-image-tile__content-box">
                                      <div className="sc-meganav-image-tile__title">
                                        MSIG TravelEasy®
                                      </div>
                                      <p className="sc-meganav-image-tile__desc">
                                        Enjoy 40% off Single Trip Plans and 20% off Annual Plans
                                        with TravelEasy®. Applicable till 31 August 2024. T&Cs
                                        apply.
                                      </p>
                                    </div>
                                    <div className="sc-meganav-image-tile__button">
                                      View More
                                      <svg
                                        width="16"
                                        height="16"
                                        viewBox="0 0 16 17"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M8 14.5C11.3137 14.5 14 11.8137 14 8.5C14 5.18629 11.3137 2.5 8 2.5C4.68629 2.5 2 5.18629 2 8.5C2 11.8137 4.68629 14.5 8 14.5Z"
                                          stroke="#2772C7"
                                          strokeMiterlimit="10"
                                        />
                                        <path
                                          d="M8.37868 10.6213L10.5 8.49999L8.37868 6.37868"
                                          stroke="#2772C7"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M5.5 8.5H10.5"
                                          stroke="#2772C7"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                      </svg>
                                    </div>
                                  </div>
                                  <div className="sc-meganav-image-tile__image sc-meganav-image-tile__image--padding">
                                    <img
                                      src="https://av.sc.com/sg/content/images/nav-promo-2.png"
                                      alt="promo"
                                    />
                                  </div>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="sc-meganav-drop__view-all sc-only-desktop-nav">
                        <a
                          href="/sg/insurance/"
                          title="View all Insurance Solutions"
                          className="sc-meganav-drop__btn sc-btn-link sc-btn-link--blue"
                        >
                          View all Insurance Solutions
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              <li className="sc-meganav__item sc-meganav__item--has-meganav sc-only-mobile-nav">
                <a
                  href="/sg/promotions/referral-signup/"
                  title="Referral Sign Up"
                  className="sc-meganav__btn sc-meganav__menu sc-meganav__menu--mbl"
                >
                  Referral Sign Up
                  <div className="sc-meganav__menu--mbl-icon" aria-hidden="true">
                    <svg
                      width="37"
                      height="37"
                      viewBox="0 0 37 37"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.4375 2.75V34C1.4375 34.8629 2.13706 35.5625 3 35.5625H34.25C35.1129 35.5625 35.8125 34.8629 35.8125 34V2.75C35.8125 1.88705 35.1129 1.1875 34.25 1.1875H3C2.13706 1.1875 1.4375 1.88705 1.4375 2.75Z"
                        stroke="#0473EA"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M14.7188 12.9062H24.0938V22.2812"
                        stroke="#0473EA"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M13.1562 23.8438L24.0938 12.9062"
                        stroke="#0473EA"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </a>
              </li>
              <li className="sc-meganav__item sc-meganav__item--has-meganav sc-only-mobile-nav">
                <a
                  href="/sg/bank-with-us/mobile-banking-services/standard-chartered-mobile/"
                  title="Digital Banking"
                  className="sc-meganav__btn sc-meganav__menu sc-meganav__menu--mbl"
                >
                  Digital Banking
                  <div className="sc-meganav__menu--mbl-icon" aria-hidden="true">
                    <svg
                      width="37"
                      height="37"
                      viewBox="0 0 37 37"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.4375 2.75V34C1.4375 34.8629 2.13706 35.5625 3 35.5625H34.25C35.1129 35.5625 35.8125 34.8629 35.8125 34V2.75C35.8125 1.88705 35.1129 1.1875 34.25 1.1875H3C2.13706 1.1875 1.4375 1.88705 1.4375 2.75Z"
                        stroke="#0473EA"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M14.7188 12.9062H24.0938V22.2812"
                        stroke="#0473EA"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M13.1562 23.8438L24.0938 12.9062"
                        stroke="#0473EA"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </a>
              </li>

              {/* This below list is added for creating overlay effect via css.  */}
              <li className="sc-meganav__overlay sc-only-desktop-nav"></li>
            </ul>
            <div className="sc-meganav__login-open-btn">
              <a
                className="sc-meganav__btn sc-meganav__btn-search-mbl sc-only-mobile-nav"
                href="/sg/search/"
                title="Search"
                aria-label="Search"
              >
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.875 19.25C15.2242 19.25 18.75 15.7242 18.75 11.375C18.75 7.02576 15.2242 3.5 10.875 3.5C6.52576 3.5 3 7.02576 3 11.375C3 15.7242 6.52576 19.25 10.875 19.25Z"
                    stroke="#525355"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16.4434 16.9434L20.9997 21.4997"
                    stroke="#525355"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                <span>Search</span>
              </a>
              {/* Open an account Button */}
              <div className="sc-meganav__open-account sc-only-desktop-nav">
                <a
                  className="sc-meganav__btn sc-meganav__account-btn"
                  title="Open an account"
                  href="#null"
                  data-navigation-targets='[
                {
                  "page-name":"credit-cards",
                  "item-name":"View And Compare Cards",
                  "item-type":"link",
                  "item-target":"https://www.sc.com/sg/credit-cards/"
                },
                {
                  "page-name":"borrow",
                  "item-name":"Find A Loan For You",
                  "item-type":"link",
                  "item-target":"https://www.sc.com/sg/borrow/"
                },
                {
                  "page-name":"wealth",
                  "item-name":"View All Wealth Solutions",
                  "item-type":"link",
                  "item-target":"https://www.sc.com/sg/wealth/"
                },  
                {
                  "page-name":"insurance",
                  "item-name":"View All Insurance",
                  "item-type":"link",
                  "item-target":"https://www.sc.com/sg/insurance/"
                },
                {
                  "page-name":"default",
                  "item-name":"Open an account",
                  "item-type":"popin",
                  "item-target":"sc-meganav__open-account--hover"
                }
              ]'
                >
                  Open an account
                </a>
                <div className="sc-meganav-account-dropdown">
                  <div className="sc-meganav-account-dropdown__label">
                    <a
                      href="javascript:void(0)"
                      className="sc-meganav-account-dropdown__btn sc-meganav-account-dropdown__btn--active"
                      title="Bonus$aver Account"
                    >
                      <div className="sc-meganav-account-dropdown__btn-icon">
                        <svg
                          width="43"
                          height="43"
                          viewBox="0 0 43 43"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M30.8618 13.9917H9.54102V30.6486C9.54102 32.1205 10.7342 33.3137 12.2061 33.3137H28.1967C31.1405 33.3137 33.527 30.9273 33.527 27.9835V16.6568C33.527 15.1849 32.3337 13.9917 30.8618 13.9917ZM28.1967 25.3184C29.3007 25.3184 30.1956 24.4235 30.1956 23.3196C30.1956 22.2156 29.3007 21.3207 28.1967 21.3207C27.0928 21.3207 26.1979 22.2156 26.1979 23.3196C26.1979 24.4235 27.0928 25.3184 28.1967 25.3184Z"
                            fill="#AAAAAA"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M12.2061 9.32812C10.7342 9.32812 9.54102 10.5213 9.54102 11.9932V13.9921L14.5381 13.9921C13.9861 13.9921 13.5387 13.5446 13.5387 12.9926C13.5387 12.4407 13.9861 11.9932 14.5381 11.9932H29.7821C29.0335 10.4175 27.4275 9.32812 25.567 9.32812H12.2061Z"
                            fill="#AAAAAA"
                          />
                        </svg>
                      </div>
                      <p className="sc-meganav-account-dropdown__btn-text">Bonus$aver Account</p>
                    </a>
                    <a
                      href="javascript:void(0)"
                      className="sc-meganav-account-dropdown__btn"
                      title="Bonus$aver Account + Bonus$aver World Mastercard"
                    >
                      <div className="sc-meganav-account-dropdown__btn-icon">
                        <svg
                          width="112"
                          height="43"
                          viewBox="0 0 112 43"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M30.649 13.9917H9.32812V30.6486C9.32812 32.1205 10.5213 33.3137 11.9932 33.3137H27.9839C30.9276 33.3137 33.3141 30.9273 33.3141 27.9835V16.6568C33.3141 15.1849 32.1209 13.9917 30.649 13.9917ZM27.9839 25.3184C29.0878 25.3184 29.9827 24.4235 29.9827 23.3196C29.9827 22.2156 29.0878 21.3207 27.9839 21.3207C26.8799 21.3207 25.985 22.2156 25.985 23.3196C25.985 24.4235 26.8799 25.3184 27.9839 25.3184Z"
                            fill="#0F7AED"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M11.9932 9.32812C10.5213 9.32812 9.32812 10.5213 9.32812 11.9932V13.9921L14.3252 13.9921C13.7732 13.9921 13.3258 13.5446 13.3258 12.9926C13.3258 12.4407 13.7732 11.9932 14.3252 11.9932H29.5692C28.8207 10.4175 27.2146 9.32812 25.3541 9.32812H11.9932Z"
                            fill="#0F7AED"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M55.9042 25.9846C58.48 25.9846 60.5681 23.8965 60.5681 21.3207C60.5681 18.7449 58.48 16.6567 55.9042 16.6567C53.3283 16.6567 51.2402 18.7449 51.2402 21.3207C51.2402 23.8965 53.3283 25.9846 55.9042 25.9846ZM53.5658 21.8376C53.2898 21.8376 53.0661 21.6139 53.0661 21.3379C53.0661 21.0619 53.2898 20.8382 53.5658 20.8382H55.412L55.412 18.9919C55.412 18.716 55.6358 18.4922 55.9117 18.4922C56.1877 18.4922 56.4114 18.716 56.4114 18.9919V20.8382H58.2577C58.5337 20.8382 58.7574 21.0619 58.7574 21.3379C58.7574 21.6139 58.5337 21.8376 58.2577 21.8376H56.4114V23.6839C56.4114 23.9599 56.1877 24.1836 55.9117 24.1836C55.6358 24.1836 55.412 23.9599 55.412 23.6839L55.412 21.8376H53.5658Z"
                            fill="#2772C7"
                          />
                          <path
                            d="M83.1602 19.3218C83.1602 17.8499 84.3534 16.6567 85.8253 16.6567H105.147C106.619 16.6567 107.812 17.8499 107.812 19.3218V30.6485C107.812 32.1204 106.619 33.3136 105.147 33.3136H85.8253C84.3534 33.3136 83.1602 32.1204 83.1602 30.6485V19.3218Z"
                            fill="#38D200"
                          />
                          <path
                            d="M74.7762 13.25C73.4117 13.7585 72.7079 15.268 73.1956 16.64L77.0661 27.528C77.5628 28.9253 79.1039 29.6475 80.4944 29.1377V17.9893C80.4944 15.7815 82.2842 13.9917 84.4921 13.9917H98.0068L95.9629 8.24196C95.4646 6.84018 93.9152 6.11779 92.5211 6.63729L74.7762 13.25Z"
                            fill="#0F7AED"
                          />
                        </svg>
                      </div>
                      <p className="sc-meganav-account-dropdown__btn-text">
                        Bonus$aver Account + Bonus$aver World Mastercard
                      </p>
                    </a>
                  </div>
                  <div className="sc-meganav-account-dropdown__container">
                    <div className="sc-meganav-account-dropdown__top">
                      <div className="sc-meganav-account-dropdown__title">Bonus$aver Account</div>
                    </div>
                    <div className="sc-meganav-account-dropdown__bottom">
                      <div className="sc-meganav-account-dropdown__content">
                        <div className="sc-meganav-account-dropdown__content-title">
                          Application time: 10-15 mins
                        </div>
                        <p className="sc-meganav-account-dropdown__content-desc">
                          Before starting, make sure you are:
                        </p>
                        <ul className="sc-meganav-account-dropdown__list">
                          <li className="sc-meganav-account-dropdown__item">
                            For clients applying for Bonus$aver account and Bonus$aver Debit Card:
                            Minimum 18 years old
                          </li>
                          <li className="sc-meganav-account-dropdown__item">
                            For clients applying for Bonus$aver account and Bonus$aver Credit Card:
                            21 to 65 years old
                          </li>
                        </ul>
                      </div>
                      <div className="sc-meganav-account-dropdown__image">
                        <ul className="sc-inline-buttons">
                          <li className="sc-inline-buttons__item">
                            <a
                              target="_blank"
                              rel="noreferrer"
                              href="https://ob.sc.com/sg/ngl-apply?product=338&campaign=CA001&intcid=web_listing-sc_com_top_nav-homepg1-staticmedia_others-sng-homepage_new-bsaver-acquisition-sc_com_organic-sg-en"
                              className="sc-btn"
                              title="Apply Now"
                            >
                              Apply Now
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="sc-meganav-account-dropdown__container hide">
                    <div className="sc-meganav-account-dropdown__top">
                      <div className="sc-meganav-account-dropdown__title">
                        Bonus$aver Account + Bonus$aver World Mastercard
                      </div>
                    </div>
                    <div className="sc-meganav-account-dropdown__bottom">
                      <div className="sc-meganav-account-dropdown__content">
                        <div className="sc-meganav-account-dropdown__content-title">
                          Application time: 10-15 mins
                        </div>
                        <p className="sc-meganav-account-dropdown__content-desc">
                          Before starting, make sure you are:
                        </p>
                        <ul className="sc-meganav-account-dropdown__list">
                          <li className="sc-meganav-account-dropdown__item">
                            For clients applying for Bonus$aver account and Bonus$aver Debit Card:
                            Minimum 18 years old
                          </li>
                          <li className="sc-meganav-account-dropdown__item">
                            For clients applying for Bonus$aver account and Bonus$aver Credit Card:
                            21 to 65 years old
                          </li>
                        </ul>
                      </div>
                      <div className="sc-meganav-account-dropdown__image">
                        <ul className="sc-inline-buttons">
                          <li className="sc-inline-buttons__item">
                            <a
                              target="_blank"
                              rel="noreferrer"
                              href="https://ob.sc.com/sg/apply?product=162,338&campaign=6206,CA001"
                              className="sc-btn"
                              title="Apply Now"
                            >
                              Apply Now
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Login Buttons */}
              <div className="sc-meganav__login sc-meganav__login--full">
                <button
                  title="Close"
                  aria-label="Close Button"
                  className="sc-meganav__btn sc-meganav__login-close sc-only-mobile-nav"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M15.2803 0.71967C15.5732 1.01256 15.5732 1.48744 15.2803 1.78033L1.78033 15.2803C1.48744 15.5732 1.01256 15.5732 0.71967 15.2803C0.426777 14.9874 0.426777 14.5126 0.71967 14.2197L14.2197 0.71967C14.5126 0.426777 14.9874 0.426777 15.2803 0.71967Z"
                      fill="#2772C7"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0.71967 0.71967C1.01256 0.426777 1.48744 0.426777 1.78033 0.71967L15.2803 14.2197C15.5732 14.5126 15.5732 14.9874 15.2803 15.2803C14.9874 15.5732 14.5126 15.5732 14.2197 15.2803L0.71967 1.78033C0.426777 1.48744 0.426777 1.01256 0.71967 0.71967Z"
                      fill="#2772C7"
                    ></path>
                  </svg>

                  <span className="sc-meganav__close-button-text">Login</span>
                </button>
                <button
                  className="sc-meganav__btn sc-meganav__login-btn"
                  title="Login"
                  aria-expanded="false"
                >
                  <span className="sc-meganav__icon">
                    <svg
                      width="12"
                      height="14"
                      viewBox="0 0 12 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M4.25 8.75C4.25 7.7835 5.0335 7 6 7C6.9665 7 7.75 7.7835 7.75 8.75C7.75 9.7165 6.9665 10.5 6 10.5C5.0335 10.5 4.25 9.7165 4.25 8.75ZM6 8C5.58578 8 5.25 8.33578 5.25 8.75C5.25 9.16422 5.58578 9.5 6 9.5C6.41422 9.5 6.75 9.16422 6.75 8.75C6.75 8.33578 6.41422 8 6 8Z"
                        fill="#525355"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M6 9.5C6.27614 9.5 6.5 9.72386 6.5 10V11.5C6.5 11.7761 6.27614 12 6 12C5.72386 12 5.5 11.7761 5.5 11.5V10C5.5 9.72386 5.72386 9.5 6 9.5Z"
                        fill="#525355"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0 6C0 5.44772 0.447718 5 1 5H11C11.5522 5 12 5.44769 12 6V13C12 13.5522 11.5522 14 11 14H1C0.447692 14 0 13.5522 0 13V6ZM11 6H1V13H11V6Z"
                        fill="#525355"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M6 1.5C5.53587 1.5 5.09076 1.68437 4.76256 2.01256C4.43437 2.34076 4.25 2.78587 4.25 3.25V5.5C4.25 5.77614 4.02614 6 3.75 6C3.47386 6 3.25 5.77614 3.25 5.5V3.25C3.25 2.52065 3.53973 1.82118 4.05546 1.30546C4.57118 0.789728 5.27065 0.5 6 0.5C6.72935 0.5 7.42882 0.789728 7.94454 1.30546C8.46018 1.82116 8.75 2.52063 8.75 3.25V5.5C8.75 5.77614 8.52614 6 8.25 6C7.97386 6 7.75 5.77614 7.75 5.5V3.25C7.75 2.7859 7.5656 2.34078 7.23744 2.01256C7.23744 2.01257 7.23743 2.01256 7.23744 2.01256M6 1.5C6.46412 1.5 6.90925 1.68438 7.23744 2.01256L6 1.5Z"
                        fill="#525355"
                      />
                    </svg>
                  </span>
                  Login
                </button>
                {/* Login Dropdown */}
                <div className="sc-meganav-login-drop">
                  <div className="sc-meganav-drop__wrapper sc-meganav__container">
                    <div className="sc-meganav-drop__w-full sc-meganav-drop__col-flex">
                      <div className="sc-meganav-drop__col-20">
                        <div className="sc-meganav-drop__col">
                          <a
                            className="sc-meganav-image-tile sc-meganav-image-tile--separate sc-meganav-image-tile__ml-0"
                            href="https://www.sc.com/sg/wealth/insights/crafting-a-balanced-portfolio-for-financial-longevity/"
                            title="Crafting a balanced portfolio for financial longevity"
                          >
                            <img
                              className="sc-meganav-image-tile__bg-image"
                              src="https://av.sc.com/sg/content/images/sg-crafting-a-balanced-portfolio-pintile.jpg"
                              alt="navbar-box-img"
                            />
                            <div className="sc-meganav-image-tile__wrapper">
                              <div className="sc-meganav-image-tile__content">
                                <div className="sc-meganav-image-tile__content-box">
                                  <div className="sc-meganav-image-tile__title">
                                    From CIO Office
                                  </div>
                                  <p className="sc-meganav-image-tile__desc">
                                    Crafting a balanced portfolio for financial longevity
                                  </p>
                                </div>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div className="sc-meganav-drop__col-80">
                        <div className="sc-meganav-login-drop-lists">
                          <div className="sc-meganav-login-drop__col-100">
                            <div className="sc-meganav-login-drop__col">
                              <a
                                className="sc-meganav-login-drop__link"
                                title="Online Banking Login"
                                href="https://ibank.standardchartered.com.sg/nfs/login.htm?&_ga=2.55342635.1250817750.1612628392-585638684.1569585475"
                                data-send="null"
                                data-context="Meganav Links Online Banking Login"
                              >
                                <div className="sc-meganav__icon">
                                  <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M3.75 15.75H19.875C19.875 17.4069 18.5319 18.75 16.875 18.75H6.75C5.09315 18.75 3.75 17.4069 3.75 15.75Z"
                                      fill="#38D200"
                                    />
                                    <path
                                      d="M11.1941 5.25H7.5C6.25736 5.25 5.25 6.25736 5.25 7.5V14.25H18.75V10.3357L17.8036 11.2443C16.9072 12.1049 15.4828 12.0758 14.6223 11.1794C14.1522 10.6897 13.9475 10.0424 14.0048 9.41559L12.375 9.41558C11.1324 9.41558 10.125 8.40822 10.125 7.16558C10.125 6.35604 10.5525 5.64636 11.1941 5.25Z"
                                      fill="#0F7AED"
                                    />
                                    <path
                                      fillRule="evenodd"
                                      clipRule="evenodd"
                                      d="M15.0749 3.7045C15.5142 3.26517 16.2266 3.26517 16.6659 3.7045L20.113 7.15165L19.2238 8.0409L16.6659 10.5988C16.2266 11.0381 15.5142 11.0381 15.0749 10.5988C14.6356 10.1595 14.6356 9.44715 15.0749 9.00781L15.7123 8.3704L12.375 8.3704C11.7537 8.3704 11.25 7.86672 11.25 7.2454C11.25 6.62408 11.7537 6.1204 12.375 6.1204L15.8998 6.1204L15.0749 5.2955C14.6356 4.85616 14.6356 4.14384 15.0749 3.7045Z"
                                      fill="#38D200"
                                    />
                                  </svg>
                                </div>
                                <div className="sc-meganav-login-drop__maintitle">
                                  Online Banking Login
                                </div>
                                <div className="sc-meganav-login-drop__desc-wrapper">
                                  <div className="sc-meganav-login-drop__desc">
                                    Manage and view your transactions easily
                                  </div>
                                </div>
                              </a>
                            </div>
                            <div className="sc-meganav-login-drop__col">
                              <a
                                className="sc-meganav-login-drop__link"
                                title="Online Rewards"
                                href="https://retail.sc.com/in/rewards360/rewards_home/sg"
                                data-send="null"
                                data-context="Meganav Links Online Rewards"
                              >
                                <div className="sc-meganav__icon">
                                  <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      clipRule="evenodd"
                                      d="M11.8126 1.875C12.2842 1.875 12.7058 2.16923 12.8685 2.61195L14.4181 6.82877L18.8023 7.03276C19.2679 7.05442 19.672 7.36095 19.8182 7.8035C19.9645 8.24606 19.8227 8.73298 19.4617 9.02783L16.0123 11.8453L17.1865 16.2076C17.3086 16.661 17.1361 17.1426 16.754 17.4155C16.3719 17.6884 15.8604 17.6953 15.4711 17.4327L11.8126 14.9651L8.15401 17.4327C7.76471 17.6953 7.25326 17.6884 6.87112 17.4155C6.48899 17.1426 6.31656 16.661 6.43861 16.2076L7.6128 11.8453L4.16338 9.02783C3.8024 8.73298 3.66062 8.24606 3.80689 7.8035C3.95315 7.36095 4.35717 7.05442 4.82277 7.03276L9.20698 6.82877L10.7566 2.61195C10.9193 2.16923 11.3409 1.875 11.8126 1.875ZM11.8126 6.2615L11.0613 8.30589C10.9052 8.73069 10.5097 9.02059 10.0576 9.04163L7.8621 9.14378L9.60005 10.5633C9.9432 10.8436 10.0899 11.2992 9.97472 11.727L9.39468 13.8819L11.1835 12.6754C11.5637 12.419 12.0614 12.419 12.4416 12.6754L14.2304 13.8819L13.6504 11.727C13.5352 11.2992 13.6819 10.8436 14.0251 10.5633L15.763 9.14378L13.5675 9.04163C13.1154 9.02059 12.72 8.73069 12.5638 8.30589L11.8126 6.2615Z"
                                      fill="#0F7AED"
                                    />
                                    <path
                                      fillRule="evenodd"
                                      clipRule="evenodd"
                                      d="M12 21.75C11.1716 21.75 10.5 21.0784 10.5 20.25C10.5 19.4216 11.1716 18.75 12 18.75C12.8284 18.75 13.5 19.4216 13.5 20.25C13.5 21.0784 12.8284 21.75 12 21.75Z"
                                      fill="#38D200"
                                    />
                                  </svg>
                                </div>
                                <div className="sc-meganav-login-drop__maintitle">
                                  Online Rewards
                                </div>
                                <div className="sc-meganav-login-drop__desc-wrapper">
                                  <div className="sc-meganav-login-drop__desc">
                                    Redeem for your e-Vouchers or convert points to Miles
                                  </div>
                                </div>
                              </a>
                            </div>

                            <div className="sc-meganav-login-drop__col">
                              <a
                                title="Straight2Bank Login"
                                href="https://s2b.standardchartered.com/unifiedlogin/login/index.html?utm_source=sc.com-sg-en&utm_medium=login-button-menu-item&utm_campaign=sc-retail-traffic"
                                className="sc-meganav-login-drop__link"
                                data-send="null"
                                data-context="Meganav Links Straight2Bank Login"
                              >
                                <div className="sc-meganav__icon">
                                  <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M15.75 20.25V7.5C15.75 6.67157 16.4216 6 17.25 6C18.0784 6 18.75 6.67157 18.75 7.5V20.25H15.75Z"
                                      fill="#38D200"
                                    />
                                    <path
                                      fillRule="evenodd"
                                      clipRule="evenodd"
                                      d="M10.5 20.25V12C10.5 11.1716 11.1716 10.5 12 10.5C12.8284 10.5 13.5 11.1716 13.5 12V20.25H10.5Z"
                                      fill="#0F7AED"
                                    />
                                    <path
                                      d="M8.25 20.25H5.25L5.25 14.625C5.25 13.7966 5.92157 13.125 6.75 13.125C7.57843 13.125 8.25 13.7966 8.25 14.625V20.25Z"
                                      fill="#38D200"
                                    />
                                  </svg>
                                </div>
                                <div className="sc-meganav-login-drop__maintitle">
                                  Straight2Bank Login
                                </div>
                                <div className="sc-meganav-login-drop__desc-wrapper">
                                  <div className="sc-meganav-login-drop__desc">
                                    Login to view and manage your business account
                                  </div>
                                </div>
                              </a>
                            </div>
                          </div>
                          <div className="sc-meganav-login-drop__col-100">
                            <div className="sc-meganav-login-drop__col">
                              <a
                                title="SC eSign"
                                href="/sg/esign/"
                                className="sc-meganav-login-drop__link"
                                data-send="null"
                                data-context="Meganav Links SC eSign"
                              >
                                <div className="sc-meganav__icon">
                                  <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M6.75 16.5H4C3.44772 16.5 3 16.9477 3 17.5V19.25C3 19.8023 3.44772 20.25 4 20.25H21"
                                      stroke="#0F7AED"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                    />
                                    <path
                                      d="M12.4991 16.5H9.53131C9.3904 16.5 9.25526 16.444 9.15562 16.3444C9.05598 16.2447 9 16.1096 9 15.9687V13.0009C9 12.9311 9.01374 12.8621 9.04044 12.7976C9.06714 12.7331 9.10628 12.6746 9.15562 12.6252L17.1252 4.65562C17.2249 4.55598 17.36 4.5 17.5009 4.5C17.6418 4.5 17.777 4.55598 17.8766 4.65562L20.8444 7.62339C20.944 7.72303 21 7.85817 21 7.99908C21 8.13999 20.944 8.27513 20.8444 8.37477L12.8748 16.3444C12.8254 16.3937 12.7669 16.4329 12.7024 16.4596C12.6379 16.4863 12.5689 16.5 12.4991 16.5Z"
                                      stroke="#0F7AED"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M15.75 6.75L18.75 9.75"
                                      stroke="#0F7AED"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M18 15L21 12L19.5 10.5"
                                      stroke="#38D200"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M9.75 12.75L12.75 15.75"
                                      stroke="#0F7AED"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                </div>
                                <div className="sc-meganav-login-drop__maintitle">SC eSign</div>
                                <div className="sc-meganav-login-drop__desc-wrapper">
                                  <div className="sc-meganav-login-drop__desc">
                                    Get signatures easily, in minutes, not days
                                  </div>
                                </div>
                              </a>
                            </div>
                            <div className="sc-meganav-login-drop__col">
                              <a
                                title="SC Digital KYC Review"
                                href="/sg/cddreview/"
                                className="sc-meganav-login-drop__link"
                                data-send="null"
                                data-context="Meganav Links SC Digital KYC Review"
                              >
                                <div className="sc-meganav__icon">
                                  <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      clipRule="evenodd"
                                      d="M14.6195 4.5C12.3129 4.5 11.8187 5.75397 11.8187 7.30083V8.21277C11.6217 8.32672 11.4891 8.53969 11.4891 8.78362V9.77215C11.4891 10.1076 11.7398 10.3845 12.064 10.4258C12.205 10.7394 12.4021 11.0223 12.6424 11.2618V13.0672L9.56135 15.2273C8.60744 15.8314 8.0293 16.8819 8.0293 18.0111V18.6689H13.7957L14.2307 15.624C13.878 15.473 13.631 15.1228 13.631 14.7148C13.631 14.1689 14.0735 13.7263 14.6195 13.7263C15.1654 13.7263 15.608 14.1689 15.608 14.7148C15.608 15.1157 15.3694 15.4608 15.0265 15.616L15.608 18.6689H21.3744V17.9781C21.3744 16.867 20.8145 15.8307 19.8851 15.2218L16.5965 13.0672V11.2618C16.8369 11.0223 17.034 10.7394 17.175 10.4258C17.4992 10.3845 17.7498 10.1076 17.7498 9.77215V8.78362C17.7498 8.53969 17.6173 8.32672 17.4203 8.21277V7.30083C17.4203 5.75397 16.9261 4.5 14.6195 4.5Z"
                                      fill="#0F7AED"
                                    />
                                    <path
                                      fillRule="evenodd"
                                      clipRule="evenodd"
                                      d="M9.59019 4.5C7.28362 4.5 6.78936 5.75397 6.78936 7.30083V8.21277C6.59238 8.32672 6.45985 8.53969 6.45985 8.78362V9.77215C6.45985 10.1076 6.71046 10.3845 7.03466 10.4258C7.17572 10.7394 7.3728 11.0223 7.61313 11.2618V13.0672L4.53205 15.2273C3.57814 15.8314 3 16.8819 3 18.0111V18.6689H6.25681V18.0173C6.25681 16.8989 6.82947 15.8584 7.77434 15.2599L10.8262 13.1204V11.332C10.5882 11.0948 10.393 10.8146 10.2532 10.504C9.93211 10.463 9.68387 10.1888 9.68387 9.85649V8.87733C9.68387 8.63571 9.81514 8.42475 10.0103 8.31189V7.40859C10.0103 6.27986 10.276 5.30857 11.3293 4.8753C10.9154 4.63662 10.3515 4.5 9.59019 4.5Z"
                                      fill="#38D200"
                                    />
                                  </svg>
                                </div>
                                <div className="sc-meganav-login-drop__maintitle">
                                  SC Digital KYC Review
                                </div>
                                <div className="sc-meganav-login-drop__desc-wrapper">
                                  <div className="sc-meganav-login-drop__desc">
                                    Manage and view your transactions easily
                                  </div>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Overlay */}
              <div className="sc-meganav__overlay sc-only-desktop-nav"></div>
            </div>
            {/* Hamburger Menu: Visible only for mobile */}
            <button
              title="Close Menu"
              aria-label="Close Button"
              className="sc-meganav__btn sc-meganav__close-button"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M15.2803 0.71967C15.5732 1.01256 15.5732 1.48744 15.2803 1.78033L1.78033 15.2803C1.48744 15.5732 1.01256 15.5732 0.71967 15.2803C0.426777 14.9874 0.426777 14.5126 0.71967 14.2197L14.2197 0.71967C14.5126 0.426777 14.9874 0.426777 15.2803 0.71967Z"
                  fill="#2772C7"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.71967 0.71967C1.01256 0.426777 1.48744 0.426777 1.78033 0.71967L15.2803 14.2197C15.5732 14.5126 15.5732 14.9874 15.2803 15.2803C14.9874 15.5732 14.5126 15.5732 14.2197 15.2803L0.71967 1.78033C0.426777 1.48744 0.426777 1.01256 0.71967 0.71967Z"
                  fill="#2772C7"
                />
              </svg>
              <span className="sc-meganav__close-button-text">Menu</span>
            </button>
            <button
              title="Menu"
              aria-label="Menu Expand Button"
              className="sc-meganav__btn sc-meganav__hamburger sc-only-mobile-nav"
            >
              <svg
                width="18"
                height="15"
                viewBox="0 0 18 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0 7.5C0 7.08579 0.335786 6.75 0.75 6.75H17.25C17.6642 6.75 18 7.08579 18 7.5C18 7.91421 17.6642 8.25 17.25 8.25H0.75C0.335786 8.25 0 7.91421 0 7.5Z"
                  fill="#525355"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0 1.5C0 1.08579 0.335786 0.75 0.75 0.75H17.25C17.6642 0.75 18 1.08579 18 1.5C18 1.91421 17.6642 2.25 17.25 2.25H0.75C0.335786 2.25 0 1.91421 0 1.5Z"
                  fill="#525355"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0 13.5C0 13.0858 0.335786 12.75 0.75 12.75H17.25C17.6642 12.75 18 13.0858 18 13.5C18 13.9142 17.6642 14.25 17.25 14.25H0.75C0.335786 14.25 0 13.9142 0 13.5Z"
                  fill="#525355"
                />
              </svg>

              <span className="sc-meganav__hamburger-text">Menu</span>
            </button>
          </nav>
        </div>
      </header>
    </>
  );
};
