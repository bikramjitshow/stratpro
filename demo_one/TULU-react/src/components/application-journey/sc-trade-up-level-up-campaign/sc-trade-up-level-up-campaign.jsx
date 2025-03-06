import React, { useEffect } from 'react';
import ScTulu from './sc-trade-up-level-up-campaign.js';

export const TradeUpLevelUpCampaigns = () => {
  useEffect(() => {
    ScTulu.init();
  }, []);
  return (
    <div className="sc-tulu-camp">
      {/* Main Page 
        Add class : sc-tulu-camp-page--blue for blue bg for page
        Add class : sc-tulu-camp-page--green for blue bg for page
        Add class : sc-tulu-camp-page--purple for blue bg for page
        */}
      <div className="sc-tulu-camp-page">
        {/* Header */}
        <div className="sc-tulu-camp-header">
          <div className="sc-tulu-camp__wrapper">
            <div className="sc-tulu-camp-header__inner">
              <div className="sc-tulu-camp-header__left">
                <button className="sc-tulu-camp-header__back">
                  <svg
                    width="64"
                    height="64"
                    viewBox="0 0 64 64"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M52.571 31.218H14.593"
                      stroke="black"
                      strokeWidth="3.2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M26.123 46.1861L11.429 31.6641L26.123 17.1431"
                      stroke="black"
                      strokeWidth="3.2"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
                Trade up, Level up
              </div>

              <div className="sc-tulu-camp-header__right">
                <button className="sc-tulu-camp-header__help">
                  <svg
                    width="64"
                    height="64"
                    viewBox="0 0 64 64"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M30.027 5.338c-5.219.367-10.283 2.324-14.548 5.624-1.362 1.053-3.785 3.528-4.829 4.931-2.785 3.743-4.515 7.932-5.176 12.534-.252 1.756-.252 5.39 0 7.146.852 5.934 3.431 11.103 7.64 15.313 4.206 4.205 9.384 6.789 15.313 7.64 1.756.252 5.39.252 7.146 0 3.565-.512 7.209-1.796 10.187-3.589 3.621-2.179 6.998-5.556 9.177-9.177 1.793-2.978 3.077-6.622 3.589-10.187.252-1.756.252-5.39 0-7.146-.842-5.861-3.437-11.099-7.535-15.208-1.538-1.543-2.331-2.208-3.951-3.318-4.929-3.375-10.947-4.989-17.013-4.563M34.4 9.387c5.242.576 9.961 2.839 13.659 6.55C52.4 20.292 54.72 25.886 54.72 32c0 7.796-3.851 14.83-10.509 19.197-2.605 1.709-6.266 3.004-9.648 3.414-1.163.14-3.963.14-5.126 0-3.382-.41-7.043-1.705-9.648-3.414-3.048-1.999-5.627-4.67-7.373-7.637a22.824 22.824 0 0 1 0-23.12c1.876-3.188 4.836-6.148 8.024-8.024 2.708-1.594 5.917-2.67 9-3.018 1.141-.129 3.833-.135 4.96-.011m-3.52 8.328c-.997.099-2.498.516-3.286.913-1.665.839-3.213 2.187-4.15 3.612-1.355 2.062-2.071 5.268-1.458 6.533.62 1.28 2.473 1.449 3.345.306.228-.299.317-.571.394-1.212.269-2.229.707-3.231 1.945-4.454 1.189-1.173 2.628-1.757 4.33-1.757 1.696 0 3.12.579 4.324 1.757 1.331 1.302 1.863 2.588 1.863 4.503 0 1.672-.543 3.065-1.646 4.221-1.145 1.202-2.523 1.852-4.168 1.966-1.241.086-1.87.462-2.235 1.335-.194.465-.23 2.67-.053 3.305.223.804 1.088 1.466 1.915 1.466 1.05 0 2.023-.998 2.026-2.078.001-.175.132-.249.71-.401 2.101-.551 4.183-1.992 5.541-3.835 1.197-1.624 1.824-3.438 1.927-5.575.077-1.59-.12-2.756-.719-4.254-.533-1.335-1.203-2.354-2.226-3.385-2.195-2.212-5.212-3.28-8.379-2.966m.601 25.715c-1.971.352-3.092 2.595-2.192 4.383.248.493.879 1.128 1.378 1.386.611.317 1.82.382 2.474.132 1.423-.544 2.272-2.146 1.903-3.589-.422-1.648-1.904-2.609-3.563-2.312"
                      fillRule="evenodd"
                      fill="#000"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Body Section */}
        <div className="sc-tulu-camp-main active">
          {/* Milescard */}
          <div className="sc-tulu-camp-milescard">
            <div className="sc-tulu-camp__wrapper">
              <div className="sc-tulu-camp-milescard__main">
                <div className="sc-tulu-camp-milescard__inner">
                  <div className="sc-cvp__col">
                    <p className="sc-cvp__top">
                      Total Miles{' '}
                      <span className="sc-tooltip sc-tooltip--blue" tabIndex="0">
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          width="64"
                          height="64"
                          viewBox="0 0 64 64"
                          role="img"
                          aria-label="icon-info"
                        >
                          <path
                            fill="none"
                            stroke="#919191"
                            strokeLinejoin="miter"
                            strokeLinecap="butt"
                            strokeMiterlimit="10"
                            strokeWidth="3.563"
                            d="M32 3.299c15.851 0 28.701 12.848 28.701 28.701 0 15.851-12.85 28.701-28.701 28.701-15.854 0-28.701-12.85-28.701-28.701S16.147 3.299 32 3.299z"
                          ></path>
                          <path
                            fill="#919191"
                            d="M30.351 27.162h2.639v18.474h-2.639V27.162zm0-10.556h2.639v5.278h-2.639v-5.278z"
                          ></path>
                        </svg>
                        <span className="sc-tooltip__text">
                          Last 2 days’ progress may not be reflected
                        </span>
                      </span>
                    </p>
                    <p className="sc-cvp__middle">
                      <strong>5,350</strong> Miles
                    </p>
                    <p className="sc-cvp__bottom">As of 20 Feb 2025 (1 Jan - 31 Mar 2024 Cycle)</p>
                  </div>
                </div>
                <p className="sc-tulu-camp-milescard__desc">
                  Total Miles Accumulated:<strong> 100,800</strong> miles
                </p>
              </div>
            </div>
          </div>
          {/* Tab 
          Add class : 'sc-tulu-camp-tab--with-icon' for tab with icon*/}
          <div className="sc-tulu-camp-tab">
            <div className="sc-tulu-camp__wrapper">
              <div
                className="splide"
                data-splide='{
            "arrows":false,
            "trimSpace":"move",
            "pagination":false,
            "autoWidth":true,
            "slideFocus":false,
            "perMove": "1"
          }'
              >
                <div className="splide__track">
                  <div className="splide__list">
                    <div className="splide__slide">
                      <button
                        tabIndex="0"
                        className="sc-tulu-camp-tab__head-button sc-tulu-camp-tab__head-button--active"
                        data-tab-btn-id="1"
                      >
                        <span>Your Missions</span>
                      </button>
                    </div>
                    <div className="splide__slide">
                      <button
                        tabIndex="0"
                        className="sc-tulu-camp-tab__head-button"
                        data-tab-btn-id="2"
                      >
                        <span>Earning History</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="sc-tulu-camp-tab__content">
                {/* 1st Tab Starts */}
                <div
                  className="sc-tulu-camp-tab__content-item sc-tulu-camp-tab__content-item--active"
                  data-tab-content="1"
                >
                  <div className="sc-tulu-camp-product-card sc-tulu-camp-product-card--blue">
                    <div className="sc-tulu-camp-product-card__main">
                      <div className="sc-tulu-camp-product-card__inner">
                        <div className="sc-tulu-camp-product-card__icon">
                          <svg
                            width="64"
                            height="64"
                            viewBox="0 0 21 21"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M9.1875 3.28125V5.90625H11.8125V3.28125H9.1875ZM8.53125 1.96875C8.16881 1.96875 7.875 2.26256 7.875 2.625V6.5625C7.875 6.92494 8.16881 7.21875 8.53125 7.21875H12.4688C12.8312 7.21875 13.125 6.92494 13.125 6.5625V2.625C13.125 2.26256 12.8312 1.96875 12.4688 1.96875H8.53125Z"
                              fill="#4CA0F7"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M5.25 14.7656V17.3906H7.875V14.7656H5.25ZM4.59375 13.4531C4.23131 13.4531 3.9375 13.7469 3.9375 14.1094V18.0469C3.9375 18.4093 4.23131 18.7031 4.59375 18.7031H8.53125C8.89369 18.7031 9.1875 18.4093 9.1875 18.0469V14.1094C9.1875 13.7469 8.89369 13.4531 8.53125 13.4531H4.59375Z"
                              fill="#4CA0F7"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M13.125 14.7656V17.3906H15.75V14.7656H13.125ZM12.4688 13.4531C12.1063 13.4531 11.8125 13.7469 11.8125 14.1094V18.0469C11.8125 18.4093 12.1063 18.7031 12.4688 18.7031H16.4062C16.7687 18.7031 17.0625 18.4093 17.0625 18.0469V14.1094C17.0625 13.7469 16.7687 13.4531 16.4062 13.4531H12.4688Z"
                              fill="#4CA0F7"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M2.95312 10.5C2.95312 10.1376 3.24694 9.84375 3.60938 9.84375H17.2266C17.589 9.84375 17.8828 10.1376 17.8828 10.5C17.8828 10.8624 17.589 11.1562 17.2266 11.1562H3.60938C3.24694 11.1562 2.95312 10.8624 2.95312 10.5Z"
                              fill="#4CA0F7"
                            />
                            <path
                              d="M10.5 10.3359V8.53125"
                              stroke="#4CA0F7"
                              strokeWidth="1.3125"
                              strokeLinecap="round"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M6.5625 9.84375C6.92494 9.84375 7.21875 10.1376 7.21875 10.5V12.3047C7.21875 12.6671 6.92494 12.9609 6.5625 12.9609C6.20006 12.9609 5.90625 12.6671 5.90625 12.3047V10.5C5.90625 10.1376 6.20006 9.84375 6.5625 9.84375Z"
                              fill="#4CA0F7"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M14.4375 9.84375C14.7999 9.84375 15.0938 10.1376 15.0938 10.5V12.3047C15.0938 12.6671 14.7999 12.9609 14.4375 12.9609C14.0751 12.9609 13.7812 12.6671 13.7812 12.3047V10.5C13.7812 10.1376 14.0751 9.84375 14.4375 9.84375Z"
                              fill="#4CA0F7"
                            />
                          </svg>
                        </div>
                        <div className="sc-tulu-camp-product-card__details">
                          <p className="sc-tulu-camp-product-card__title">Diversify</p>
                          <p className="sc-tulu-camp-product-card__desc">
                            Expand your trades across different products
                          </p>

                          <div className="sc-tulu-camp-product-card__progress">
                            <p className="sc-tulu-camp-product-card__progress-value">5000</p>
                            <p className="sc-tulu-camp-product-card__progress-total">
                              <strong>12000</strong>miles
                            </p>
                            <div className="sc-tulu-camp-product-card__progress-bar">
                              <div
                                className="sc-tulu-camp-product-card__progress-bar-inner"
                                style={{ width: '60%' }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="sc-tulu-camp-product-card__bottom">
                      <p className="sc-tulu-camp-product-card__task">Next Task</p>
                      <div className="sc-tulu-camp-product-card__task-desc">
                        <div className="sc-tulu-camp-product-card__task-icon">
                          <svg
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            width="64"
                            height="64"
                            viewBox="0 0 64 64"
                          >
                            <title>trading</title>
                            <path
                              fill="#38d200"
                              d="M31.784 16c-8.728 0-15.784 7.047-15.784 15.717 0 1.547 0.224 3.040 0.64 4.449 1.203-1.252 2.313-2.363 3.736-3.785l0.003-0.002c1.172-1.172 3.071-1.172 4.243 0s1.172 3.071 0 4.243c-2.491 2.491-3.952 3.952-6.637 6.899-0.634 0.696-1.559 1.054-2.497 0.967s-1.78-0.611-2.274-1.413c-2.038-3.306-3.213-7.199-3.213-11.357 0-12.004 9.763-21.717 21.784-21.717 3.641 0 7.082 0.893 10.106 2.474 1.468 0.768 2.036 2.58 1.269 4.049s-2.58 2.036-4.049 1.269c-2.186-1.143-4.675-1.791-7.326-1.791z"
                            ></path>
                            <path
                              fill="#0f7aed"
                              d="M31.716 47.5c8.728 0 15.784-7.047 15.784-15.717 0-1.547-0.224-3.040-0.641-4.449-1.203 1.252-2.313 2.363-3.736 3.785l-0.002 0.003c-1.172 1.172-3.071 1.172-4.243 0s-1.172-3.071 0-4.243c2.491-2.491 3.952-3.952 6.637-6.899 0.634-0.696 1.559-1.054 2.497-0.967s1.78 0.611 2.275 1.413c2.038 3.306 3.213 7.199 3.213 11.357 0 12.004-9.763 21.717-21.784 21.717-3.641 0-7.082-0.893-10.106-2.474-1.468-0.768-2.036-2.58-1.269-4.048s2.58-2.036 4.049-1.269c2.186 1.143 4.675 1.791 7.326 1.791z"
                            ></path>
                          </svg>
                        </div>
                        Complete your 4th trade
                      </div>
                      <div className="sc-tulu-camp-product-card__task-value">
                        <svg
                          width="64"
                          height="64"
                          viewBox="0 0 12 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6 0L7.39583 4.60417L12 6L7.39583 7.39583L6 12L4.60417 7.39583L0 6L4.60417 4.60417L6 0Z"
                            fill="#3BBD77"
                          />
                        </svg>
                        1000
                      </div>
                    </div>
                  </div>

                  <div className="sc-tulu-camp-product-card sc-tulu-camp-product-card--green">
                    <div className="sc-tulu-camp-product-card__main">
                      <div className="sc-tulu-camp-product-card__inner">
                        <div className="sc-tulu-camp-product-card__icon">
                          <svg
                            width="64"
                            height="64"
                            viewBox="0 0 21 21"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M9.1875 3.28125V5.90625H11.8125V3.28125H9.1875ZM8.53125 1.96875C8.16881 1.96875 7.875 2.26256 7.875 2.625V6.5625C7.875 6.92494 8.16881 7.21875 8.53125 7.21875H12.4688C12.8312 7.21875 13.125 6.92494 13.125 6.5625V2.625C13.125 2.26256 12.8312 1.96875 12.4688 1.96875H8.53125Z"
                              fill="#4CA0F7"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M5.25 14.7656V17.3906H7.875V14.7656H5.25ZM4.59375 13.4531C4.23131 13.4531 3.9375 13.7469 3.9375 14.1094V18.0469C3.9375 18.4093 4.23131 18.7031 4.59375 18.7031H8.53125C8.89369 18.7031 9.1875 18.4093 9.1875 18.0469V14.1094C9.1875 13.7469 8.89369 13.4531 8.53125 13.4531H4.59375Z"
                              fill="#4CA0F7"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M13.125 14.7656V17.3906H15.75V14.7656H13.125ZM12.4688 13.4531C12.1063 13.4531 11.8125 13.7469 11.8125 14.1094V18.0469C11.8125 18.4093 12.1063 18.7031 12.4688 18.7031H16.4062C16.7687 18.7031 17.0625 18.4093 17.0625 18.0469V14.1094C17.0625 13.7469 16.7687 13.4531 16.4062 13.4531H12.4688Z"
                              fill="#4CA0F7"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M2.95312 10.5C2.95312 10.1376 3.24694 9.84375 3.60938 9.84375H17.2266C17.589 9.84375 17.8828 10.1376 17.8828 10.5C17.8828 10.8624 17.589 11.1562 17.2266 11.1562H3.60938C3.24694 11.1562 2.95312 10.8624 2.95312 10.5Z"
                              fill="#4CA0F7"
                            />
                            <path
                              d="M10.5 10.3359V8.53125"
                              stroke="#4CA0F7"
                              strokeWidth="1.3125"
                              strokeLinecap="round"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M6.5625 9.84375C6.92494 9.84375 7.21875 10.1376 7.21875 10.5V12.3047C7.21875 12.6671 6.92494 12.9609 6.5625 12.9609C6.20006 12.9609 5.90625 12.6671 5.90625 12.3047V10.5C5.90625 10.1376 6.20006 9.84375 6.5625 9.84375Z"
                              fill="#4CA0F7"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M14.4375 9.84375C14.7999 9.84375 15.0938 10.1376 15.0938 10.5V12.3047C15.0938 12.6671 14.7999 12.9609 14.4375 12.9609C14.0751 12.9609 13.7812 12.6671 13.7812 12.3047V10.5C13.7812 10.1376 14.0751 9.84375 14.4375 9.84375Z"
                              fill="#4CA0F7"
                            />
                          </svg>
                        </div>
                        <div className="sc-tulu-camp-product-card__details">
                          <p className="sc-tulu-camp-product-card__title">Diversify</p>
                          <p className="sc-tulu-camp-product-card__desc">
                            Expand your trades across different products
                          </p>

                          <div className="sc-tulu-camp-product-card__progress">
                            <p className="sc-tulu-camp-product-card__progress-value">5000</p>
                            <p className="sc-tulu-camp-product-card__progress-total">
                              <strong>12000</strong>miles
                            </p>
                            <div className="sc-tulu-camp-product-card__progress-bar">
                              <div
                                className="sc-tulu-camp-product-card__progress-bar-inner"
                                style={{ width: '60%' }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="sc-tulu-camp-product-card__bottom">
                      <p className="sc-tulu-camp-product-card__task">Next Task</p>
                      <div className="sc-tulu-camp-product-card__task-desc">
                        <div className="sc-tulu-camp-product-card__task-icon">
                          <svg
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            width="64"
                            height="64"
                            viewBox="0 0 64 64"
                          >
                            <title>trading</title>
                            <path
                              fill="#38d200"
                              d="M31.784 16c-8.728 0-15.784 7.047-15.784 15.717 0 1.547 0.224 3.040 0.64 4.449 1.203-1.252 2.313-2.363 3.736-3.785l0.003-0.002c1.172-1.172 3.071-1.172 4.243 0s1.172 3.071 0 4.243c-2.491 2.491-3.952 3.952-6.637 6.899-0.634 0.696-1.559 1.054-2.497 0.967s-1.78-0.611-2.274-1.413c-2.038-3.306-3.213-7.199-3.213-11.357 0-12.004 9.763-21.717 21.784-21.717 3.641 0 7.082 0.893 10.106 2.474 1.468 0.768 2.036 2.58 1.269 4.049s-2.58 2.036-4.049 1.269c-2.186-1.143-4.675-1.791-7.326-1.791z"
                            ></path>
                            <path
                              fill="#0f7aed"
                              d="M31.716 47.5c8.728 0 15.784-7.047 15.784-15.717 0-1.547-0.224-3.040-0.641-4.449-1.203 1.252-2.313 2.363-3.736 3.785l-0.002 0.003c-1.172 1.172-3.071 1.172-4.243 0s-1.172-3.071 0-4.243c2.491-2.491 3.952-3.952 6.637-6.899 0.634-0.696 1.559-1.054 2.497-0.967s1.78 0.611 2.275 1.413c2.038 3.306 3.213 7.199 3.213 11.357 0 12.004-9.763 21.717-21.784 21.717-3.641 0-7.082-0.893-10.106-2.474-1.468-0.768-2.036-2.58-1.269-4.048s2.58-2.036 4.049-1.269c2.186 1.143 4.675 1.791 7.326 1.791z"
                            ></path>
                          </svg>
                        </div>
                        Complete your 4th trade
                      </div>
                      <div className="sc-tulu-camp-product-card__task-value">
                        <svg
                          width="64"
                          height="64"
                          viewBox="0 0 12 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6 0L7.39583 4.60417L12 6L7.39583 7.39583L6 12L4.60417 7.39583L0 6L4.60417 4.60417L6 0Z"
                            fill="#3BBD77"
                          />
                        </svg>
                        1000
                      </div>
                    </div>
                  </div>

                  <div className="sc-tulu-camp-product-card sc-tulu-camp-product-card--purple">
                    <div className="sc-tulu-camp-product-card__main">
                      <div className="sc-tulu-camp-product-card__inner">
                        <div className="sc-tulu-camp-product-card__icon">
                          <svg
                            width="64"
                            height="64"
                            viewBox="0 0 21 21"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M9.1875 3.28125V5.90625H11.8125V3.28125H9.1875ZM8.53125 1.96875C8.16881 1.96875 7.875 2.26256 7.875 2.625V6.5625C7.875 6.92494 8.16881 7.21875 8.53125 7.21875H12.4688C12.8312 7.21875 13.125 6.92494 13.125 6.5625V2.625C13.125 2.26256 12.8312 1.96875 12.4688 1.96875H8.53125Z"
                              fill="#4CA0F7"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M5.25 14.7656V17.3906H7.875V14.7656H5.25ZM4.59375 13.4531C4.23131 13.4531 3.9375 13.7469 3.9375 14.1094V18.0469C3.9375 18.4093 4.23131 18.7031 4.59375 18.7031H8.53125C8.89369 18.7031 9.1875 18.4093 9.1875 18.0469V14.1094C9.1875 13.7469 8.89369 13.4531 8.53125 13.4531H4.59375Z"
                              fill="#4CA0F7"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M13.125 14.7656V17.3906H15.75V14.7656H13.125ZM12.4688 13.4531C12.1063 13.4531 11.8125 13.7469 11.8125 14.1094V18.0469C11.8125 18.4093 12.1063 18.7031 12.4688 18.7031H16.4062C16.7687 18.7031 17.0625 18.4093 17.0625 18.0469V14.1094C17.0625 13.7469 16.7687 13.4531 16.4062 13.4531H12.4688Z"
                              fill="#4CA0F7"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M2.95312 10.5C2.95312 10.1376 3.24694 9.84375 3.60938 9.84375H17.2266C17.589 9.84375 17.8828 10.1376 17.8828 10.5C17.8828 10.8624 17.589 11.1562 17.2266 11.1562H3.60938C3.24694 11.1562 2.95312 10.8624 2.95312 10.5Z"
                              fill="#4CA0F7"
                            />
                            <path
                              d="M10.5 10.3359V8.53125"
                              stroke="#4CA0F7"
                              strokeWidth="1.3125"
                              strokeLinecap="round"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M6.5625 9.84375C6.92494 9.84375 7.21875 10.1376 7.21875 10.5V12.3047C7.21875 12.6671 6.92494 12.9609 6.5625 12.9609C6.20006 12.9609 5.90625 12.6671 5.90625 12.3047V10.5C5.90625 10.1376 6.20006 9.84375 6.5625 9.84375Z"
                              fill="#4CA0F7"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M14.4375 9.84375C14.7999 9.84375 15.0938 10.1376 15.0938 10.5V12.3047C15.0938 12.6671 14.7999 12.9609 14.4375 12.9609C14.0751 12.9609 13.7812 12.6671 13.7812 12.3047V10.5C13.7812 10.1376 14.0751 9.84375 14.4375 9.84375Z"
                              fill="#4CA0F7"
                            />
                          </svg>
                        </div>
                        <div className="sc-tulu-camp-product-card__details">
                          <p className="sc-tulu-camp-product-card__title">Diversify</p>
                          <p className="sc-tulu-camp-product-card__desc">
                            Expand your trades across different products
                          </p>

                          <div className="sc-tulu-camp-product-card__progress">
                            <p className="sc-tulu-camp-product-card__progress-value">5000</p>
                            <p className="sc-tulu-camp-product-card__progress-total">
                              <strong>12000</strong>miles
                            </p>
                            <div className="sc-tulu-camp-product-card__progress-bar">
                              <div
                                className="sc-tulu-camp-product-card__progress-bar-inner"
                                style={{ width: '60%' }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="sc-tulu-camp-product-card__bottom">
                      <p className="sc-tulu-camp-product-card__task">Next Task</p>
                      <div className="sc-tulu-camp-product-card__task-desc">
                        <div className="sc-tulu-camp-product-card__task-icon">
                          <img
                            src="https://av.sc.com/sg/content/images/sg-crafting-a-balanced-portfolio-pintile.jpg"
                            alt="Article Image"
                          />
                        </div>
                        Complete your 4th trade
                      </div>
                      <div className="sc-tulu-camp-product-card__task-value">
                        <svg
                          width="64"
                          height="64"
                          viewBox="0 0 12 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6 0L7.39583 4.60417L12 6L7.39583 7.39583L6 12L4.60417 7.39583L0 6L4.60417 4.60417L6 0Z"
                            fill="#3BBD77"
                          />
                        </svg>
                        1000
                      </div>
                    </div>
                  </div>
                </div>
                {/* 1st Tab Ends 
             2nd Tab Starts */}
                <div className="sc-tulu-camp-tab__content-item" data-tab-content="2">
                  <div className="sc-tulu-camp-earnings">
                    <div className="sc-tulu-camp-earnings__inner">
                      <div className="sc-tulu-camp-earnings__title">1 Mar 2022</div>
                      <div className="sc-tulu-camp-earnings__cards">
                        <div className="sc-tulu-camp-earnings__card sc-tulu-camp-earnings--blue">
                          <div className="sc-tulu-camp-earnings__left">
                            <div className="sc-tulu-camp-earnings__icon">
                              <svg
                                width="64"
                                height="64"
                                viewBox="0 0 64 64"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M28 10V18H36V10H28ZM26 6C24.8954 6 24 6.89542 24 8V20C24 21.1046 24.8954 22 26 22H38.0002C39.1046 22 40 21.1046 40 20V8C40 6.89542 39.1046 6 38.0002 6H26Z"
                                  fill="#4CA0F7"
                                />
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M16 44.9999V52.9999H24V44.9999H16ZM14 40.9999C12.8954 40.9999 12 41.8953 12 43.0001V55.0001C12 56.1045 12.8954 56.9999 14 56.9999H26C27.1046 56.9999 28 56.1045 28 55.0001V43.0001C28 41.8953 27.1046 40.9999 26 40.9999H14Z"
                                  fill="#4CA0F7"
                                />
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M40 44.9999V52.9999H48V44.9999H40ZM38.0002 40.9999C36.8954 40.9999 36 41.8953 36 43.0001V55.0001C36 56.1045 36.8954 56.9999 38.0002 56.9999H49.9998C51.1046 56.9999 52 56.1045 52 55.0001V43.0001C52 41.8953 51.1046 40.9999 49.9998 40.9999H38.0002Z"
                                  fill="#4CA0F7"
                                />
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M9 32C9 30.8955 9.89545 30 11 30H52.5001C53.6046 30 54.5 30.8955 54.5 32C54.5 33.1045 53.6046 33.9998 52.5001 33.9998H11C9.89545 33.9998 9 33.1045 9 32Z"
                                  fill="#4CA0F7"
                                />
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M20 30C21.1046 30 22 30.8955 22 32V37.5C22 38.6045 21.1046 39.4999 20 39.4999C18.8954 39.4999 18 38.6045 18 37.5V32C18 30.8955 18.8954 30 20 30Z"
                                  fill="#4CA0F7"
                                />
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M44 30C45.1045 30 46.0002 30.8955 46.0002 32V37.5C46.0002 38.6045 45.1045 39.4999 44 39.4999C42.8956 39.4999 41.9999 38.6045 41.9999 37.5V32C41.9999 30.8955 42.8956 30 44 30Z"
                                  fill="#4CA0F7"
                                />
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M32 24C33.1045 24 34.0002 24.8955 34.0002 26V31.5C34.0002 32.6045 33.1045 33.4999 32 33.4999C30.8956 33.4999 29.9999 32.6045 29.9999 31.5V26C29.9999 24.8955 30.8956 24 32 24Z"
                                  fill="#4CA0F7"
                                />
                              </svg>
                            </div>
                            <div className="sc-tulu-camp-earnings__text">
                              <div className="sc-tulu-camp-earnings__head">Account Opening</div>
                              <p className="sc-tulu-camp-earnings__sub-head">FX</p>
                            </div>
                          </div>
                          <div className="sc-tulu-camp-earnings__right">
                            <p>
                              <strong>1,000</strong>Miles
                            </p>
                          </div>
                        </div>
                        <div className="sc-tulu-camp-earnings__card sc-tulu-camp-earnings--blue">
                          <div className="sc-tulu-camp-earnings__left">
                            <div className="sc-tulu-camp-earnings__icon">
                              <svg
                                width="64"
                                height="64"
                                viewBox="0 0 64 64"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M28 10V18H36V10H28ZM26 6C24.8954 6 24 6.89542 24 8V20C24 21.1046 24.8954 22 26 22H38.0002C39.1046 22 40 21.1046 40 20V8C40 6.89542 39.1046 6 38.0002 6H26Z"
                                  fill="#4CA0F7"
                                />
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M16 44.9999V52.9999H24V44.9999H16ZM14 40.9999C12.8954 40.9999 12 41.8953 12 43.0001V55.0001C12 56.1045 12.8954 56.9999 14 56.9999H26C27.1046 56.9999 28 56.1045 28 55.0001V43.0001C28 41.8953 27.1046 40.9999 26 40.9999H14Z"
                                  fill="#4CA0F7"
                                />
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M40 44.9999V52.9999H48V44.9999H40ZM38.0002 40.9999C36.8954 40.9999 36 41.8953 36 43.0001V55.0001C36 56.1045 36.8954 56.9999 38.0002 56.9999H49.9998C51.1046 56.9999 52 56.1045 52 55.0001V43.0001C52 41.8953 51.1046 40.9999 49.9998 40.9999H38.0002Z"
                                  fill="#4CA0F7"
                                />
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M9 32C9 30.8955 9.89545 30 11 30H52.5001C53.6046 30 54.5 30.8955 54.5 32C54.5 33.1045 53.6046 33.9998 52.5001 33.9998H11C9.89545 33.9998 9 33.1045 9 32Z"
                                  fill="#4CA0F7"
                                />
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M20 30C21.1046 30 22 30.8955 22 32V37.5C22 38.6045 21.1046 39.4999 20 39.4999C18.8954 39.4999 18 38.6045 18 37.5V32C18 30.8955 18.8954 30 20 30Z"
                                  fill="#4CA0F7"
                                />
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M44 30C45.1045 30 46.0002 30.8955 46.0002 32V37.5C46.0002 38.6045 45.1045 39.4999 44 39.4999C42.8956 39.4999 41.9999 38.6045 41.9999 37.5V32C41.9999 30.8955 42.8956 30 44 30Z"
                                  fill="#4CA0F7"
                                />
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M32 24C33.1045 24 34.0002 24.8955 34.0002 26V31.5C34.0002 32.6045 33.1045 33.4999 32 33.4999C30.8956 33.4999 29.9999 32.6045 29.9999 31.5V26C29.9999 24.8955 30.8956 24 32 24Z"
                                  fill="#4CA0F7"
                                />
                              </svg>
                            </div>
                            <div className="sc-tulu-camp-earnings__text">
                              <div className="sc-tulu-camp-earnings__head">Extra bonus</div>
                              <p className="sc-tulu-camp-earnings__sub-head">Online Equities</p>
                            </div>
                          </div>
                          <div className="sc-tulu-camp-earnings__right">
                            <p>
                              <strong>2,000</strong>Miles
                            </p>
                          </div>
                        </div>
                        <div className="sc-tulu-camp-earnings__card sc-tulu-camp-earnings--blue">
                          <div className="sc-tulu-camp-earnings__left">
                            <div className="sc-tulu-camp-earnings__icon">
                              <svg
                                width="64"
                                height="64"
                                viewBox="0 0 64 64"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M28 10V18H36V10H28ZM26 6C24.8954 6 24 6.89542 24 8V20C24 21.1046 24.8954 22 26 22H38.0002C39.1046 22 40 21.1046 40 20V8C40 6.89542 39.1046 6 38.0002 6H26Z"
                                  fill="#4CA0F7"
                                />
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M16 44.9999V52.9999H24V44.9999H16ZM14 40.9999C12.8954 40.9999 12 41.8953 12 43.0001V55.0001C12 56.1045 12.8954 56.9999 14 56.9999H26C27.1046 56.9999 28 56.1045 28 55.0001V43.0001C28 41.8953 27.1046 40.9999 26 40.9999H14Z"
                                  fill="#4CA0F7"
                                />
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M40 44.9999V52.9999H48V44.9999H40ZM38.0002 40.9999C36.8954 40.9999 36 41.8953 36 43.0001V55.0001C36 56.1045 36.8954 56.9999 38.0002 56.9999H49.9998C51.1046 56.9999 52 56.1045 52 55.0001V43.0001C52 41.8953 51.1046 40.9999 49.9998 40.9999H38.0002Z"
                                  fill="#4CA0F7"
                                />
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M9 32C9 30.8955 9.89545 30 11 30H52.5001C53.6046 30 54.5 30.8955 54.5 32C54.5 33.1045 53.6046 33.9998 52.5001 33.9998H11C9.89545 33.9998 9 33.1045 9 32Z"
                                  fill="#4CA0F7"
                                />
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M20 30C21.1046 30 22 30.8955 22 32V37.5C22 38.6045 21.1046 39.4999 20 39.4999C18.8954 39.4999 18 38.6045 18 37.5V32C18 30.8955 18.8954 30 20 30Z"
                                  fill="#4CA0F7"
                                />
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M44 30C45.1045 30 46.0002 30.8955 46.0002 32V37.5C46.0002 38.6045 45.1045 39.4999 44 39.4999C42.8956 39.4999 41.9999 38.6045 41.9999 37.5V32C41.9999 30.8955 42.8956 30 44 30Z"
                                  fill="#4CA0F7"
                                />
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M32 24C33.1045 24 34.0002 24.8955 34.0002 26V31.5C34.0002 32.6045 33.1045 33.4999 32 33.4999C30.8956 33.4999 29.9999 32.6045 29.9999 31.5V26C29.9999 24.8955 30.8956 24 32 24Z"
                                  fill="#4CA0F7"
                                />
                              </svg>
                            </div>
                            <div className="sc-tulu-camp-earnings__text">
                              <div className="sc-tulu-camp-earnings__head">First Trading</div>
                              <p className="sc-tulu-camp-earnings__sub-head">Online Equities</p>
                            </div>
                          </div>
                          <div className="sc-tulu-camp-earnings__right">
                            <p>
                              <strong>1,000</strong>Miles
                            </p>
                          </div>
                        </div>
                        <div className="sc-tulu-camp-earnings__card sc-tulu-camp-earnings--green">
                          <div className="sc-tulu-camp-earnings__left">
                            <div className="sc-tulu-camp-earnings__icon">
                              <svg
                                width="64"
                                height="64"
                                viewBox="0 0 21 21"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M10.4293 5.25C7.5655 5.25 5.25 7.56228 5.25 10.4072C5.25 10.9148 5.3234 11.4046 5.46017 11.8671C5.85473 11.4563 6.21923 11.0918 6.68593 10.6251L6.68675 10.6243C7.07118 10.2398 7.69445 10.2398 8.07887 10.6243C8.46329 11.0087 8.46329 11.6319 8.07887 12.0164C7.2615 12.8337 6.78226 13.313 5.90117 14.2801C5.69301 14.5086 5.38962 14.6261 5.08187 14.5973C4.77412 14.5685 4.49775 14.3969 4.33555 14.1338C3.66684 13.049 3.28125 11.7716 3.28125 10.4072C3.28125 6.46832 6.48485 3.28125 10.4293 3.28125C11.6239 3.28125 12.7529 3.5742 13.7452 4.09296C14.2269 4.34485 14.4133 4.93961 14.1614 5.42139C13.9095 5.90317 13.3148 6.08953 12.833 5.83764C12.1158 5.46267 11.299 5.25 10.4293 5.25Z"
                                  fill="#3BBD77"
                                />
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M10.4067 15.5859C13.2704 15.5859 15.5859 13.2737 15.5859 10.4287C15.5859 9.92112 15.5125 9.43132 15.3758 8.96884C14.9812 9.37966 14.6167 9.74416 14.15 10.2109L14.1492 10.2117C13.7648 10.5961 13.1415 10.5961 12.7571 10.2117C12.3726 9.82726 12.3726 9.20399 12.7571 8.81957C13.5744 8.00219 14.0537 7.52292 14.9348 6.55581C15.1429 6.32732 15.4463 6.20988 15.7541 6.23865C16.0618 6.26742 16.3382 6.43907 16.5004 6.70218C17.1691 7.78694 17.5547 9.06437 17.5547 10.4287C17.5547 14.3676 14.3511 17.5547 10.4067 17.5547C9.21202 17.5547 8.08299 17.2617 7.09079 16.743C6.60901 16.4911 6.42264 15.8963 6.67454 15.4145C6.92643 14.9328 7.52118 14.7464 8.00296 14.9983C8.72016 15.3733 9.53698 15.5859 10.4067 15.5859Z"
                                  fill="#3BBD77"
                                />
                              </svg>
                            </div>
                            <div className="sc-tulu-camp-earnings__text">
                              <div className="sc-tulu-camp-earnings__head">Trade 3</div>
                              <p className="sc-tulu-camp-earnings__sub-head">Online Equities</p>
                            </div>
                          </div>
                          <div className="sc-tulu-camp-earnings__right">
                            <p>
                              <strong>1,000</strong>Miles
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* 2nd Tab End */}
              </div>
            </div>
          </div>
        </div>

        <div className="sc-tulu-camp-main">
          {/* Tab 
          Add class : 'sc-tulu-camp-tab--with-icon' for tab with icon*/}
          <div className="sc-tulu-camp-tab sc-tulu-camp-tab--with-icon">
            <div className="sc-tulu-camp__wrapper">
              <div
                className="splide"
                data-splide='{
            "arrows":false,
            "trimSpace":"move",
            "pagination":false,
            "autoWidth":true,
            "slideFocus":false,
            "perMove": "1"
          }'
              >
                <div className="splide__track">
                  <div className="splide__list">
                    <div className="splide__slide">
                      <button
                        tabIndex="0"
                        className="sc-tulu-camp-tab__head-button sc-tulu-camp-tab__head-button--blue sc-tulu-camp-tab__head-button--active"
                        data-tab-btn-id="3"
                      >
                        <svg
                          width="64"
                          height="64"
                          viewBox="0 0 64 64"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M28 10V18H36V10H28ZM26 6C24.8954 6 24 6.89542 24 8V20C24 21.1046 24.8954 22 26 22H38.0002C39.1046 22 40 21.1046 40 20V8C40 6.89542 39.1046 6 38.0002 6H26Z"
                            fill="#4CA0F7"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M16 44.9999V52.9999H24V44.9999H16ZM14 40.9999C12.8954 40.9999 12 41.8953 12 43.0001V55.0001C12 56.1045 12.8954 56.9999 14 56.9999H26C27.1046 56.9999 28 56.1045 28 55.0001V43.0001C28 41.8953 27.1046 40.9999 26 40.9999H14Z"
                            fill="#4CA0F7"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M40 44.9999V52.9999H48V44.9999H40ZM38.0002 40.9999C36.8954 40.9999 36 41.8953 36 43.0001V55.0001C36 56.1045 36.8954 56.9999 38.0002 56.9999H49.9998C51.1046 56.9999 52 56.1045 52 55.0001V43.0001C52 41.8953 51.1046 40.9999 49.9998 40.9999H38.0002Z"
                            fill="#4CA0F7"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M9 32C9 30.8955 9.89545 30 11 30H52.5001C53.6046 30 54.5 30.8955 54.5 32C54.5 33.1045 53.6046 33.9998 52.5001 33.9998H11C9.89545 33.9998 9 33.1045 9 32Z"
                            fill="#4CA0F7"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M20 30C21.1046 30 22 30.8955 22 32V37.5C22 38.6045 21.1046 39.4999 20 39.4999C18.8954 39.4999 18 38.6045 18 37.5V32C18 30.8955 18.8954 30 20 30Z"
                            fill="#4CA0F7"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M44 30C45.1045 30 46.0002 30.8955 46.0002 32V37.5C46.0002 38.6045 45.1045 39.4999 44 39.4999C42.8956 39.4999 41.9999 38.6045 41.9999 37.5V32C41.9999 30.8955 42.8956 30 44 30Z"
                            fill="#4CA0F7"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M32 24C33.1045 24 34.0002 24.8955 34.0002 26V31.5C34.0002 32.6045 33.1045 33.4999 32 33.4999C30.8956 33.4999 29.9999 32.6045 29.9999 31.5V26C29.9999 24.8955 30.8956 24 32 24Z"
                            fill="#4CA0F7"
                          />
                        </svg>
                        <span> Diversify</span>
                      </button>
                    </div>
                    <div className="splide__slide">
                      <button
                        tabIndex="0"
                        className="sc-tulu-camp-tab__head-button sc-tulu-camp-tab__head-button--green"
                        data-tab-btn-id="4"
                      >
                        <svg
                          width="64"
                          height="64"
                          viewBox="0 0 21 21"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M10.4293 5.25C7.5655 5.25 5.25 7.56228 5.25 10.4072C5.25 10.9148 5.3234 11.4046 5.46017 11.8671C5.85473 11.4563 6.21923 11.0918 6.68593 10.6251L6.68675 10.6243C7.07118 10.2398 7.69445 10.2398 8.07887 10.6243C8.46329 11.0087 8.46329 11.6319 8.07887 12.0164C7.2615 12.8337 6.78226 13.313 5.90117 14.2801C5.69301 14.5086 5.38962 14.6261 5.08187 14.5973C4.77412 14.5685 4.49775 14.3969 4.33555 14.1338C3.66684 13.049 3.28125 11.7716 3.28125 10.4072C3.28125 6.46832 6.48485 3.28125 10.4293 3.28125C11.6239 3.28125 12.7529 3.5742 13.7452 4.09296C14.2269 4.34485 14.4133 4.93961 14.1614 5.42139C13.9095 5.90317 13.3148 6.08953 12.833 5.83764C12.1158 5.46267 11.299 5.25 10.4293 5.25Z"
                            fill="#3BBD77"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M10.4067 15.5859C13.2704 15.5859 15.5859 13.2737 15.5859 10.4287C15.5859 9.92112 15.5125 9.43132 15.3758 8.96884C14.9812 9.37966 14.6167 9.74416 14.15 10.2109L14.1492 10.2117C13.7648 10.5961 13.1415 10.5961 12.7571 10.2117C12.3726 9.82726 12.3726 9.20399 12.7571 8.81957C13.5744 8.00219 14.0537 7.52292 14.9348 6.55581C15.1429 6.32732 15.4463 6.20988 15.7541 6.23865C16.0618 6.26742 16.3382 6.43907 16.5004 6.70218C17.1691 7.78694 17.5547 9.06437 17.5547 10.4287C17.5547 14.3676 14.3511 17.5547 10.4067 17.5547C9.21202 17.5547 8.08299 17.2617 7.09079 16.743C6.60901 16.4911 6.42264 15.8963 6.67454 15.4145C6.92643 14.9328 7.52118 14.7464 8.00296 14.9983C8.72016 15.3733 9.53698 15.5859 10.4067 15.5859Z"
                            fill="#3BBD77"
                          />
                        </svg>
                        <span>Trade Up</span>
                      </button>
                    </div>
                    <div className="splide__slide">
                      <div
                        tabIndex="0"
                        className="sc-tulu-camp-tab__head-button sc-tulu-camp-tab__head-button--purple"
                        data-tab-btn-id="5"
                      >
                        <svg
                          width="64"
                          height="64"
                          viewBox="0 0 21 21"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M2.625 12.1406C2.625 11.4158 3.21263 10.8281 3.9375 10.8281H10.1719V17.0625C10.1719 17.7874 9.58425 18.375 8.85938 18.375C8.1345 18.375 7.54688 17.7874 7.54688 17.0625V13.4531H3.9375C3.21263 13.4531 2.625 12.8655 2.625 12.1406Z"
                            fill="#917CE3"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M6.5625 8.20312C6.5625 7.47825 7.15013 6.89062 7.875 6.89062H14.1094V13.125C14.1094 13.8499 13.5217 14.4375 12.7969 14.4375C12.072 14.4375 11.4844 13.8499 11.4844 13.125V9.51562H7.875C7.15013 9.51562 6.5625 8.928 6.5625 8.20312Z"
                            fill="#917CE3"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M10.5 4.26562C10.5 3.54075 11.0876 2.95312 11.8125 2.95312H18.0469V9.1875C18.0469 9.91237 17.4592 10.5 16.7344 10.5C16.0095 10.5 15.4219 9.91237 15.4219 9.1875V5.57812H11.8125C11.0876 5.57812 10.5 4.9905 10.5 4.26562Z"
                            fill="#917CE3"
                          />
                        </svg>
                        <span>Level Up</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="sc-tulu-camp-tab__content">
                {/* 1st Tab Starts */}
                <div
                  className="sc-tulu-camp-tab__content-item sc-tulu-camp-tab__content-item--active"
                  data-tab-content="3"
                >
                  <div className="sc-tulu-camp-product-card sc-tulu-camp-product-card--blue">
                    <div className="sc-tulu-camp-product-card__main">
                      <div className="sc-tulu-camp-product-card__inner">
                        <div className="sc-tulu-camp-product-card__details">
                          <p className="sc-tulu-camp-product-card__title">Diversify</p>
                          <p className="sc-tulu-camp-product-card__desc">
                            Expand your trades across different products
                          </p>

                          <div className="sc-tulu-camp-product-card__progress">
                            <p className="sc-tulu-camp-product-card__progress-value">5000</p>
                            <p className="sc-tulu-camp-product-card__progress-total">
                              <strong>12000</strong>miles
                            </p>
                            <div className="sc-tulu-camp-product-card__progress-bar">
                              <div
                                className="sc-tulu-camp-product-card__progress-bar-inner"
                                style={{ width: '60%' }}
                              ></div>
                            </div>

                            <p className="sc-tulu-camp-product-card__progress-desc">
                              Expand your trades across different products
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="sc-tulu-camp-wrapper-full">
                    <div className="sc-tulu-camp-wrapper-full__inner">
                      <div className="sc-tulu-camp-wrapper-full__column">
                        <div className="sc-tulu-camp-wrapper-full__title">First 5 streak</div>
                        <div className="sc-tulu-camp-timeline">
                          <div className="sc-tulu-camp-timeline__wrapper">
                            {/* Add Class: sc-tulu-camp-timeline__box--active for timeline completed
         Add Class: sc-tulu-camp-timeline__box--progress for timeline in progress
          Add Class: sc-tulu-camp-timeline__box--disabled for timeline in locked
          */}

                            <div className="sc-tulu-camp-timeline__box sc-tulu-camp-timeline__box--active">
                              <div className="sc-tulu-camp-timeline__box-wrapper">
                                <div className="sc-tulu-camp-timeline__box-title">
                                  Open an Account
                                </div>
                                <div className="sc-tulu-camp-timeline__box-right">
                                  <div className="sc-tulu-camp-timeline__box-icon">
                                    <svg
                                      width="13"
                                      height="12"
                                      viewBox="0 0 13 12"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M6.5 0L7.89583 4.60417L12.5 6L7.89583 7.39583L6.5 12L5.10417 7.39583L0.5 6L5.10417 4.60417L6.5 0Z"
                                        fill="#939393"
                                      />
                                    </svg>
                                  </div>
                                  <p className="sc-tulu-camp-timeline__box-text">1000</p>
                                </div>
                              </div>
                            </div>
                            <div className="sc-tulu-camp-timeline__box sc-tulu-camp-timeline__box--active">
                              <div className="sc-tulu-camp-timeline__box-wrapper">
                                <div className="sc-tulu-camp-timeline__box-title">
                                  Open an Account
                                </div>
                                <div className="sc-tulu-camp-timeline__box-right">
                                  <div className="sc-tulu-camp-timeline__box-icon">
                                    <svg
                                      width="13"
                                      height="12"
                                      viewBox="0 0 13 12"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M6.5 0L7.89583 4.60417L12.5 6L7.89583 7.39583L6.5 12L5.10417 7.39583L0.5 6L5.10417 4.60417L6.5 0Z"
                                        fill="#939393"
                                      />
                                    </svg>
                                  </div>
                                  <p className="sc-tulu-camp-timeline__box-text">1000</p>
                                </div>
                              </div>
                            </div>
                            <div className="sc-tulu-camp-timeline__box sc-tulu-camp-timeline__box--active">
                              <div className="sc-tulu-camp-timeline__box-wrapper">
                                <div className="sc-tulu-camp-timeline__box-title">
                                  Open an Account
                                </div>
                                <div className="sc-tulu-camp-timeline__box-right">
                                  <div className="sc-tulu-camp-timeline__box-icon">
                                    <svg
                                      width="13"
                                      height="12"
                                      viewBox="0 0 13 12"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M6.5 0L7.89583 4.60417L12.5 6L7.89583 7.39583L6.5 12L5.10417 7.39583L0.5 6L5.10417 4.60417L6.5 0Z"
                                        fill="#939393"
                                      />
                                    </svg>
                                  </div>
                                  <p className="sc-tulu-camp-timeline__box-text">1000</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="sc-tulu-camp-wrapper-full__column">
                        <div className="sc-tulu-camp-wrapper-full__title">Double the miles</div>
                        <div className="sc-tulu-camp-timeline">
                          <div className="sc-tulu-camp-timeline__wrapper">
                            {/* Add Class: sc-tulu-camp-timeline__box--active for timeline completed
         Add Class: sc-tulu-camp-timeline__box--progress for timeline in progress
          Add Class: sc-tulu-camp-timeline__box--disabled for timeline in locked
          */}
                            <div className="sc-tulu-camp-timeline__box sc-tulu-camp-timeline__box--active">
                              <div className="sc-tulu-camp-timeline__box-wrapper">
                                <div className="sc-tulu-camp-timeline__box-title">
                                  Open an Account
                                </div>
                                <div className="sc-tulu-camp-timeline__box-right">
                                  <div className="sc-tulu-camp-timeline__box-icon">
                                    <svg
                                      width="13"
                                      height="12"
                                      viewBox="0 0 13 12"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M6.5 0L7.89583 4.60417L12.5 6L7.89583 7.39583L6.5 12L5.10417 7.39583L0.5 6L5.10417 4.60417L6.5 0Z"
                                        fill="#939393"
                                      />
                                    </svg>
                                  </div>
                                  <p className="sc-tulu-camp-timeline__box-text">1000</p>
                                </div>
                              </div>
                            </div>

                            <div className="sc-tulu-camp-timeline__box sc-tulu-camp-timeline__box--progress">
                              <div className="sc-tulu-camp-timeline__box-wrapper">
                                <div className="sc-tulu-camp-timeline__box-title">
                                  Make your first trade
                                </div>
                                <div className="sc-tulu-camp-timeline__box-right">
                                  <div className="sc-tulu-camp-timeline__box-icon">
                                    <svg
                                      width="13"
                                      height="12"
                                      viewBox="0 0 13 12"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M6.5 0L7.89583 4.60417L12.5 6L7.89583 7.39583L6.5 12L5.10417 7.39583L0.5 6L5.10417 4.60417L6.5 0Z"
                                        fill="#939393"
                                      />
                                    </svg>
                                  </div>
                                  <p className="sc-tulu-camp-timeline__box-text">1000</p>
                                </div>
                              </div>
                            </div>

                            <div className="sc-tulu-camp-timeline__box sc-tulu-camp-timeline__box--disable">
                              <div className="sc-tulu-camp-timeline__box-wrapper">
                                <div className="sc-tulu-camp-timeline__box-title">
                                  Finish all actions to earn bonus miles
                                </div>
                                <div className="sc-tulu-camp-timeline__box-right">
                                  <div className="sc-tulu-camp-timeline__box-icon">
                                    <svg
                                      width="13"
                                      height="12"
                                      viewBox="0 0 13 12"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M6.5 0L7.89583 4.60417L12.5 6L7.89583 7.39583L6.5 12L5.10417 7.39583L0.5 6L5.10417 4.60417L6.5 0Z"
                                        fill="#939393"
                                      />
                                    </svg>
                                  </div>
                                  <p className="sc-tulu-camp-timeline__box-text">3000</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="sc-tulu-camp-wrapper-full__column">
                        <div className="sc-tulu-camp-wrapper-full__title">
                          Reach the finishing line
                        </div>
                        <div className="sc-tulu-camp-timeline">
                          <div className="sc-tulu-camp-timeline__wrapper">
                            {/* Add Class: sc-tulu-camp-timeline__box--active for timeline completed
         Add Class: sc-tulu-camp-timeline__box--progress for timeline in progress
          Add Class: sc-tulu-camp-timeline__box--disabled for timeline in locked
          */}
                            <div className="sc-tulu-camp-timeline__box sc-tulu-camp-timeline__box--active">
                              <div className="sc-tulu-camp-timeline__box-wrapper">
                                <div className="sc-tulu-camp-timeline__box-title">
                                  Open an Account
                                </div>
                                <div className="sc-tulu-camp-timeline__box-right">
                                  <div className="sc-tulu-camp-timeline__box-icon">
                                    <svg
                                      width="13"
                                      height="12"
                                      viewBox="0 0 13 12"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M6.5 0L7.89583 4.60417L12.5 6L7.89583 7.39583L6.5 12L5.10417 7.39583L0.5 6L5.10417 4.60417L6.5 0Z"
                                        fill="#939393"
                                      />
                                    </svg>
                                  </div>
                                  <p className="sc-tulu-camp-timeline__box-text">1000</p>
                                </div>
                              </div>
                            </div>

                            <div className="sc-tulu-camp-timeline__box">
                              <div className="sc-tulu-camp-timeline__box-wrapper">
                                <div className="sc-tulu-camp-timeline__box-title">
                                  Make your first trade
                                </div>
                                <div className="sc-tulu-camp-timeline__box-right">
                                  <div className="sc-tulu-camp-timeline__box-icon">
                                    <svg
                                      width="13"
                                      height="12"
                                      viewBox="0 0 13 12"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M6.5 0L7.89583 4.60417L12.5 6L7.89583 7.39583L6.5 12L5.10417 7.39583L0.5 6L5.10417 4.60417L6.5 0Z"
                                        fill="#939393"
                                      />
                                    </svg>
                                  </div>
                                  <p className="sc-tulu-camp-timeline__box-text">1000</p>
                                </div>
                              </div>
                            </div>

                            <div className="sc-tulu-camp-timeline__box sc-tulu-camp-timeline__box--disable">
                              <div className="sc-tulu-camp-timeline__box-wrapper">
                                <div className="sc-tulu-camp-timeline__box-title">
                                  Finish all actions to earn bonus miles
                                </div>
                                <div className="sc-tulu-camp-timeline__box-right">
                                  <div className="sc-tulu-camp-timeline__box-icon">
                                    <svg
                                      width="13"
                                      height="12"
                                      viewBox="0 0 13 12"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M6.5 0L7.89583 4.60417L12.5 6L7.89583 7.39583L6.5 12L5.10417 7.39583L0.5 6L5.10417 4.60417L6.5 0Z"
                                        fill="#939393"
                                      />
                                    </svg>
                                  </div>
                                  <p className="sc-tulu-camp-timeline__box-text">3000</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* 1st Tab Ends 
             2nd Tab Starts */}
                <div className="sc-tulu-camp-tab__content-item" data-tab-content="4">
                  <div className="sc-tulu-camp-product-card sc-tulu-camp-product-card--green">
                    <div className="sc-tulu-camp-product-card__main">
                      <div className="sc-tulu-camp-product-card__inner">
                        <div className="sc-tulu-camp-product-card__details">
                          <p className="sc-tulu-camp-product-card__title">Diversify</p>
                          <p className="sc-tulu-camp-product-card__desc">
                            Expand your trades across different products
                          </p>

                          <div className="sc-tulu-camp-product-card__progress">
                            <p className="sc-tulu-camp-product-card__progress-value">5000</p>
                            <p className="sc-tulu-camp-product-card__progress-total">
                              <strong>12000</strong>miles
                            </p>
                            <div className="sc-tulu-camp-product-card__progress-bar">
                              <div
                                className="sc-tulu-camp-product-card__progress-bar-inner"
                                style={{ width: '60%' }}
                              ></div>
                            </div>

                            <p className="sc-tulu-camp-product-card__progress-desc">
                              Expand your trades across different products
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="sc-tulu-camp-wrapper-full">
                    <div className="sc-tulu-camp-wrapper-full__inner">
                      <div className="sc-tulu-camp-wrapper-full__column">
                        <div className="sc-heading-inner">
                          <h2 className="sc-title sc-title--inner">First 6 streak</h2>
                          <p className="sc-description">
                            Earn 100 miles for each of your first 6 trades
                          </p>
                        </div>
                        <div className="sc-tulu-camp-progress">
                          <ul className="sc-tulu-camp-progress__inner">
                            <li className="sc-tulu-camp-progress__section sc-tulu-camp-progress__section--completed">
                              <div className="sc-tulu-camp-progress__circle">
                                <svg
                                  width="21"
                                  height="16"
                                  viewBox="0 0 21 16"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M18.8334 2L7.72224 13.6667L2.16675 7.83333"
                                    stroke="#0C3A66"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </div>
                              <div className="sc-tulu-camp-progress__number">
                                <svg
                                  width="13"
                                  height="13"
                                  viewBox="0 0 13 13"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M6.5 0.5L7.89583 5.10417L12.5 6.5L7.89583 7.89583L6.5 12.5L5.10417 7.89583L0.5 6.5L5.10417 5.10417L6.5 0.5Z"
                                    fill="#3BBD77"
                                  />
                                </svg>
                                <span>100</span>
                              </div>
                              <div className="sc-tulu-camp-progress__line"></div>
                            </li>
                            <li className="sc-tulu-camp-progress__section sc-tulu-camp-progress__section--completed">
                              <div className="sc-tulu-camp-progress__circle">
                                <svg
                                  width="21"
                                  height="16"
                                  viewBox="0 0 21 16"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M18.8334 2L7.72224 13.6667L2.16675 7.83333"
                                    stroke="#0C3A66"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </div>
                              <div className="sc-tulu-camp-progress__number">
                                <svg
                                  width="13"
                                  height="13"
                                  viewBox="0 0 13 13"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M6.5 0.5L7.89583 5.10417L12.5 6.5L7.89583 7.89583L6.5 12.5L5.10417 7.89583L0.5 6.5L5.10417 5.10417L6.5 0.5Z"
                                    fill="#3BBD77"
                                  />
                                </svg>
                                <span>100</span>
                              </div>
                              <div className="sc-tulu-camp-progress__line"></div>
                            </li>
                            <li className="sc-tulu-camp-progress__section sc-tulu-camp-progress__section--completed sc-tulu-camp-progress__section--next-in-progress">
                              <div className="sc-tulu-camp-progress__circle">
                                <svg
                                  width="21"
                                  height="16"
                                  viewBox="0 0 21 16"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M18.8334 2L7.72224 13.6667L2.16675 7.83333"
                                    stroke="#0C3A66"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </div>
                              <div className="sc-tulu-camp-progress__number">
                                <svg
                                  width="13"
                                  height="13"
                                  viewBox="0 0 13 13"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M6.5 0.5L7.89583 5.10417L12.5 6.5L7.89583 7.89583L6.5 12.5L5.10417 7.89583L0.5 6.5L5.10417 5.10417L6.5 0.5Z"
                                    fill="#3BBD77"
                                  />
                                </svg>
                                <span>100</span>
                              </div>
                              <div className="sc-tulu-camp-progress__line"></div>
                            </li>
                            <li className="sc-tulu-camp-progress__section sc-tulu-camp-progress__section--in-progress">
                              <div className="sc-tulu-camp-progress__circle">
                                <svg
                                  width="21"
                                  height="16"
                                  viewBox="0 0 21 16"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M18.8334 2L7.72224 13.6667L2.16675 7.83333"
                                    stroke="#0C3A66"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                                <span>4</span>
                              </div>
                              <div className="sc-tulu-camp-progress__number">
                                <svg
                                  width="13"
                                  height="13"
                                  viewBox="0 0 13 13"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M6.5 0.5L7.89583 5.10417L12.5 6.5L7.89583 7.89583L6.5 12.5L5.10417 7.89583L0.5 6.5L5.10417 5.10417L6.5 0.5Z"
                                    fill="#3BBD77"
                                  />
                                </svg>
                                <span>100</span>
                              </div>
                              <div className="sc-tulu-camp-progress__line"></div>
                            </li>
                            <li className="sc-tulu-camp-progress__section">
                              <div className="sc-tulu-camp-progress__circle">
                                <svg
                                  width="21"
                                  height="16"
                                  viewBox="0 0 21 16"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M18.8334 2L7.72224 13.6667L2.16675 7.83333"
                                    stroke="#0C3A66"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </div>
                              <div className="sc-tulu-camp-progress__number">
                                <svg
                                  width="13"
                                  height="13"
                                  viewBox="0 0 13 13"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M6.5 0.5L7.89583 5.10417L12.5 6.5L7.89583 7.89583L6.5 12.5L5.10417 7.89583L0.5 6.5L5.10417 5.10417L6.5 0.5Z"
                                    fill="#3BBD77"
                                  />
                                </svg>
                                <span>100</span>
                              </div>
                              <div className="sc-tulu-camp-progress__line"></div>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className="sc-tulu-camp-wrapper-full__column">
                        <div className="sc-heading-inner">
                          <h2 className="sc-title sc-title--inner">Double the miles</h2>
                          <p className="sc-description">
                            Earn 200 miles for each of your next 6 trades
                          </p>
                        </div>
                        <div className="sc-tulu-camp-progress">
                          <ul className="sc-tulu-camp-progress__inner">
                            <li className="sc-tulu-camp-progress__section">
                              <div className="sc-tulu-camp-progress__circle">
                                <svg
                                  width="21"
                                  height="16"
                                  viewBox="0 0 21 16"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M18.8334 2L7.72224 13.6667L2.16675 7.83333"
                                    stroke="#0C3A66"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </div>
                              <div className="sc-tulu-camp-progress__number">
                                <svg
                                  width="13"
                                  height="13"
                                  viewBox="0 0 13 13"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M6.5 0.5L7.89583 5.10417L12.5 6.5L7.89583 7.89583L6.5 12.5L5.10417 7.89583L0.5 6.5L5.10417 5.10417L6.5 0.5Z"
                                    fill="#3BBD77"
                                  />
                                </svg>
                                <span>100</span>
                              </div>
                              <div className="sc-tulu-camp-progress__line"></div>
                            </li>
                            <li className="sc-tulu-camp-progress__section">
                              <div className="sc-tulu-camp-progress__circle">
                                <svg
                                  width="21"
                                  height="16"
                                  viewBox="0 0 21 16"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M18.8334 2L7.72224 13.6667L2.16675 7.83333"
                                    stroke="#0C3A66"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </div>
                              <div className="sc-tulu-camp-progress__number">
                                <svg
                                  width="13"
                                  height="13"
                                  viewBox="0 0 13 13"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M6.5 0.5L7.89583 5.10417L12.5 6.5L7.89583 7.89583L6.5 12.5L5.10417 7.89583L0.5 6.5L5.10417 5.10417L6.5 0.5Z"
                                    fill="#3BBD77"
                                  />
                                </svg>
                                <span>100</span>
                              </div>
                              <div className="sc-tulu-camp-progress__line"></div>
                            </li>
                            <li className="sc-tulu-camp-progress__section">
                              <div className="sc-tulu-camp-progress__circle">
                                <svg
                                  width="21"
                                  height="16"
                                  viewBox="0 0 21 16"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M18.8334 2L7.72224 13.6667L2.16675 7.83333"
                                    stroke="#0C3A66"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </div>
                              <div className="sc-tulu-camp-progress__number">
                                <svg
                                  width="13"
                                  height="13"
                                  viewBox="0 0 13 13"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M6.5 0.5L7.89583 5.10417L12.5 6.5L7.89583 7.89583L6.5 12.5L5.10417 7.89583L0.5 6.5L5.10417 5.10417L6.5 0.5Z"
                                    fill="#3BBD77"
                                  />
                                </svg>
                                <span>100</span>
                              </div>
                              <div className="sc-tulu-camp-progress__line"></div>
                            </li>
                            <li className="sc-tulu-camp-progress__section ">
                              <div className="sc-tulu-camp-progress__circle">
                                <svg
                                  width="21"
                                  height="16"
                                  viewBox="0 0 21 16"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M18.8334 2L7.72224 13.6667L2.16675 7.83333"
                                    stroke="#0C3A66"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </div>
                              <div className="sc-tulu-camp-progress__number">
                                <svg
                                  width="13"
                                  height="13"
                                  viewBox="0 0 13 13"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M6.5 0.5L7.89583 5.10417L12.5 6.5L7.89583 7.89583L6.5 12.5L5.10417 7.89583L0.5 6.5L5.10417 5.10417L6.5 0.5Z"
                                    fill="#3BBD77"
                                  />
                                </svg>
                                <span>100</span>
                              </div>
                              <div className="sc-tulu-camp-progress__line"></div>
                            </li>
                            <li className="sc-tulu-camp-progress__section">
                              <div className="sc-tulu-camp-progress__circle">
                                <svg
                                  width="21"
                                  height="16"
                                  viewBox="0 0 21 16"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M18.8334 2L7.72224 13.6667L2.16675 7.83333"
                                    stroke="#0C3A66"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </div>
                              <div className="sc-tulu-camp-progress__number">
                                <svg
                                  width="13"
                                  height="13"
                                  viewBox="0 0 13 13"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M6.5 0.5L7.89583 5.10417L12.5 6.5L7.89583 7.89583L6.5 12.5L5.10417 7.89583L0.5 6.5L5.10417 5.10417L6.5 0.5Z"
                                    fill="#3BBD77"
                                  />
                                </svg>
                                <span>100</span>
                              </div>
                              <div className="sc-tulu-camp-progress__line"></div>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className="sc-tulu-camp-wrapper-full__column">
                        <div className="sc-heading-inner">
                          <h2 className="sc-title sc-title--inner">Reach the finishing line</h2>
                          <p className="sc-description">
                            Earn 100 miles for each of your first 6 trades
                          </p>
                        </div>
                        <div className="sc-tulu-camp-progress">
                          <ul className="sc-tulu-camp-progress__inner">
                            <li className="sc-tulu-camp-progress__section">
                              <div className="sc-tulu-camp-progress__circle">
                                <svg
                                  width="21"
                                  height="16"
                                  viewBox="0 0 21 16"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M18.8334 2L7.72224 13.6667L2.16675 7.83333"
                                    stroke="#0C3A66"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </div>
                              <div className="sc-tulu-camp-progress__number">
                                <svg
                                  width="13"
                                  height="13"
                                  viewBox="0 0 13 13"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M6.5 0.5L7.89583 5.10417L12.5 6.5L7.89583 7.89583L6.5 12.5L5.10417 7.89583L0.5 6.5L5.10417 5.10417L6.5 0.5Z"
                                    fill="#3BBD77"
                                  />
                                </svg>
                                <span>100</span>
                              </div>
                              <div className="sc-tulu-camp-progress__line"></div>
                            </li>
                            <li className="sc-tulu-camp-progress__section">
                              <div className="sc-tulu-camp-progress__circle">
                                <svg
                                  width="21"
                                  height="16"
                                  viewBox="0 0 21 16"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M18.8334 2L7.72224 13.6667L2.16675 7.83333"
                                    stroke="#0C3A66"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </div>
                              <div className="sc-tulu-camp-progress__number">
                                <svg
                                  width="13"
                                  height="13"
                                  viewBox="0 0 13 13"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M6.5 0.5L7.89583 5.10417L12.5 6.5L7.89583 7.89583L6.5 12.5L5.10417 7.89583L0.5 6.5L5.10417 5.10417L6.5 0.5Z"
                                    fill="#3BBD77"
                                  />
                                </svg>
                                <span>100</span>
                              </div>
                              <div className="sc-tulu-camp-progress__line"></div>
                            </li>
                            <li className="sc-tulu-camp-progress__section">
                              <div className="sc-tulu-camp-progress__circle">
                                <svg
                                  width="21"
                                  height="16"
                                  viewBox="0 0 21 16"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M18.8334 2L7.72224 13.6667L2.16675 7.83333"
                                    stroke="#0C3A66"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </div>
                              <div className="sc-tulu-camp-progress__number">
                                <svg
                                  width="13"
                                  height="13"
                                  viewBox="0 0 13 13"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M6.5 0.5L7.89583 5.10417L12.5 6.5L7.89583 7.89583L6.5 12.5L5.10417 7.89583L0.5 6.5L5.10417 5.10417L6.5 0.5Z"
                                    fill="#3BBD77"
                                  />
                                </svg>
                                <span>100</span>
                              </div>
                              <div className="sc-tulu-camp-progress__line"></div>
                            </li>
                            <li className="sc-tulu-camp-progress__section ">
                              <div className="sc-tulu-camp-progress__circle">
                                <svg
                                  width="21"
                                  height="16"
                                  viewBox="0 0 21 16"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M18.8334 2L7.72224 13.6667L2.16675 7.83333"
                                    stroke="#0C3A66"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </div>
                              <div className="sc-tulu-camp-progress__number">
                                <svg
                                  width="13"
                                  height="13"
                                  viewBox="0 0 13 13"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M6.5 0.5L7.89583 5.10417L12.5 6.5L7.89583 7.89583L6.5 12.5L5.10417 7.89583L0.5 6.5L5.10417 5.10417L6.5 0.5Z"
                                    fill="#3BBD77"
                                  />
                                </svg>
                                <span>100</span>
                              </div>
                              <div className="sc-tulu-camp-progress__line"></div>
                            </li>
                            <li className="sc-tulu-camp-progress__section">
                              <div className="sc-tulu-camp-progress__circle">
                                <svg
                                  width="21"
                                  height="16"
                                  viewBox="0 0 21 16"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M18.8334 2L7.72224 13.6667L2.16675 7.83333"
                                    stroke="#0C3A66"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </div>
                              <div className="sc-tulu-camp-progress__number">
                                <svg
                                  width="13"
                                  height="13"
                                  viewBox="0 0 13 13"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M6.5 0.5L7.89583 5.10417L12.5 6.5L7.89583 7.89583L6.5 12.5L5.10417 7.89583L0.5 6.5L5.10417 5.10417L6.5 0.5Z"
                                    fill="#3BBD77"
                                  />
                                </svg>
                                <span>100</span>
                              </div>
                              <div className="sc-tulu-camp-progress__line"></div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="sc-tulu-camp-timeline">
                      <div className="sc-tulu-camp-timeline__wrapper">
                        <div className="sc-tulu-camp-timeline__box sc-tulu-camp-timeline__box--disable">
                          <div className="sc-tulu-camp-timeline__box-wrapper">
                            <div className="sc-tulu-camp-timeline__box-title">
                              Finish all tradings with below products to earn extra miles
                            </div>
                            <div className="sc-tulu-camp-timeline__box-right">
                              <div className="sc-tulu-camp-timeline__box-icon">
                                <svg
                                  width="13"
                                  height="12"
                                  viewBox="0 0 13 12"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M6.5 0L7.89583 4.60417L12.5 6L7.89583 7.39583L6.5 12L5.10417 7.39583L0.5 6L5.10417 4.60417L6.5 0Z"
                                    fill="#939393"
                                  />
                                </svg>
                              </div>
                              <p className="sc-tulu-camp-timeline__box-text">up to 3,000</p>
                            </div>
                          </div>
                          <div className="sc-tulu-camp-progress sc-tulu-camp-progress--column-view">
                            <ul className="sc-tulu-camp-progress__inner">
                              <li className="sc-tulu-camp-progress__section sc-tulu-camp-progress__section--completed">
                                <div className="sc-tulu-camp-progress__circle">
                                  <svg
                                    width="21"
                                    height="16"
                                    viewBox="0 0 21 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M18.8334 2L7.72224 13.6667L2.16675 7.83333"
                                      stroke="#0C3A66"
                                      strokeWidth="3"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    ></path>
                                  </svg>
                                </div>
                                <div className="sc-tulu-camp-progress__title">FX</div>
                                <div className="sc-tulu-camp-progress__number">
                                  <svg
                                    width="13"
                                    height="13"
                                    viewBox="0 0 13 13"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M6.5 0.5L7.89583 5.10417L12.5 6.5L7.89583 7.89583L6.5 12.5L5.10417 7.89583L0.5 6.5L5.10417 5.10417L6.5 0.5Z"
                                      fill="#3BBD77"
                                    ></path>
                                  </svg>
                                  <span>100</span>
                                </div>
                              </li>
                              <li className="sc-tulu-camp-progress__section">
                                <div className="sc-tulu-camp-progress__circle">
                                  <svg
                                    width="21"
                                    height="16"
                                    viewBox="0 0 21 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M18.8334 2L7.72224 13.6667L2.16675 7.83333"
                                      stroke="#0C3A66"
                                      strokeWidth="3"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    ></path>
                                  </svg>
                                </div>
                                <div className="sc-tulu-camp-progress__title">Online Equity</div>
                                <div className="sc-tulu-camp-progress__number">
                                  <svg
                                    width="13"
                                    height="13"
                                    viewBox="0 0 13 13"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M6.5 0.5L7.89583 5.10417L12.5 6.5L7.89583 7.89583L6.5 12.5L5.10417 7.89583L0.5 6.5L5.10417 5.10417L6.5 0.5Z"
                                      fill="#3BBD77"
                                    ></path>
                                  </svg>
                                  <span>100</span>
                                </div>
                              </li>
                              <li className="sc-tulu-camp-progress__section">
                                <div className="sc-tulu-camp-progress__circle">
                                  <svg
                                    width="21"
                                    height="16"
                                    viewBox="0 0 21 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M18.8334 2L7.72224 13.6667L2.16675 7.83333"
                                      stroke="#0C3A66"
                                      strokeWidth="3"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    ></path>
                                  </svg>
                                </div>
                                <div className="sc-tulu-camp-progress__title">Unit Trust</div>
                                <div className="sc-tulu-camp-progress__number">
                                  <svg
                                    width="13"
                                    height="13"
                                    viewBox="0 0 13 13"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M6.5 0.5L7.89583 5.10417L12.5 6.5L7.89583 7.89583L6.5 12.5L5.10417 7.89583L0.5 6.5L5.10417 5.10417L6.5 0.5Z"
                                      fill="#3BBD77"
                                    ></path>
                                  </svg>
                                  <span>100</span>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 2nd Tab End */}

                {/* 2nd Tab Ends 
             3rd Tab Starts */}
                <div className="sc-tulu-camp-tab__content-item" data-tab-content="5">
                  <div className="sc-tulu-camp-product-card sc-tulu-camp-product-card--purple">
                    <div className="sc-tulu-camp-product-card__main">
                      <div className="sc-tulu-camp-product-card__inner">
                        <div className="sc-tulu-camp-product-card__details">
                          <p className="sc-tulu-camp-product-card__title">Diversify</p>
                          <p className="sc-tulu-camp-product-card__desc">
                            Expand your trades across different products
                          </p>

                          <div className="sc-tulu-camp-product-card__progress">
                            <p className="sc-tulu-camp-product-card__progress-value">5000</p>
                            <p className="sc-tulu-camp-product-card__progress-total">
                              <strong>12000</strong>miles
                            </p>
                            <div className="sc-tulu-camp-product-card__progress-bar">
                              <div
                                className="sc-tulu-camp-product-card__progress-bar-inner"
                                style={{ width: '60%' }}
                              ></div>
                            </div>

                            <p className="sc-tulu-camp-product-card__progress-desc">
                              Expand your trades across different products
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="sc-tulu-camp-wrapper-full">
                    <div className="sc-tulu-camp-wrapper-full__inner">
                      <div className="sc-tulu-camp-wrapper-full__column">
                        <div className="sc-tulu-camp-wrapper-full__title">First 5 streak</div>
                        <div className="sc-tulu-camp-timeline">
                          <div className="sc-tulu-camp-timeline__wrapper">
                            {/* Add Class: sc-tulu-camp-timeline__box--active for timeline completed
         Add Class: sc-tulu-camp-timeline__box--progress for timeline in progress
          Add Class: sc-tulu-camp-timeline__box--disabled for timeline in locked
          */}
                            <div className="sc-tulu-camp-timeline__box sc-tulu-camp-timeline__box--active">
                              <div className="sc-tulu-camp-timeline__box-wrapper">
                                <div className="sc-tulu-camp-timeline__box-title">
                                  Open an Account
                                </div>
                                <div className="sc-tulu-camp-timeline__box-right">
                                  <div className="sc-tulu-camp-timeline__box-icon">
                                    <svg
                                      width="13"
                                      height="12"
                                      viewBox="0 0 13 12"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M6.5 0L7.89583 4.60417L12.5 6L7.89583 7.39583L6.5 12L5.10417 7.39583L0.5 6L5.10417 4.60417L6.5 0Z"
                                        fill="#939393"
                                      />
                                    </svg>
                                  </div>
                                  <p className="sc-tulu-camp-timeline__box-text">1000</p>
                                </div>
                              </div>
                              <div className="sc-tulu-camp-timeline__cvp">
                                <div className="sc-tulu-camp-timeline__cvp-image">
                                  <img
                                    src="https://av.sc.com/sg/content/images/sg-crafting-a-balanced-portfolio-pintile.jpg"
                                    alt="Article Image"
                                  />
                                </div>
                                <div className="sc-tulu-camp-timeline__cvp-item sc-rte">
                                  <h2 className="sc-tulu-camp-timeline__cvp-title">REITs 101</h2>
                                  <p className="sc-tulu-camp-timeline__cvp-text">
                                    The Beginner’s Guide to REITs: What They Are and How to Invest
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="sc-tulu-camp-timeline__box sc-tulu-camp-timeline__box--progress">
                              <div className="sc-tulu-camp-timeline__box-wrapper">
                                <div className="sc-tulu-camp-timeline__box-title">
                                  Make your first trade
                                </div>
                                <div className="sc-tulu-camp-timeline__box-right">
                                  <div className="sc-tulu-camp-timeline__box-icon">
                                    <svg
                                      width="13"
                                      height="12"
                                      viewBox="0 0 13 12"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M6.5 0L7.89583 4.60417L12.5 6L7.89583 7.39583L6.5 12L5.10417 7.39583L0.5 6L5.10417 4.60417L6.5 0Z"
                                        fill="#939393"
                                      />
                                    </svg>
                                  </div>
                                  <p className="sc-tulu-camp-timeline__box-text">1000</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="sc-tulu-camp-wrapper-full__column">
                        <div className="sc-tulu-camp-timeline">
                          <div className="sc-tulu-camp-timeline__wrapper">
                            {/* Add Class: sc-tulu-camp-timeline__box--active for timeline completed
         Add Class: sc-tulu-camp-timeline__box--progress for timeline in progress
          Add Class: sc-tulu-camp-timeline__box--disabled for timeline in locked
          */}
                            <div className="sc-tulu-camp-timeline__box sc-tulu-camp-timeline__box--progress">
                              <div className="sc-tulu-camp-timeline__box-wrapper">
                                <div className="sc-tulu-camp-timeline__box-title">
                                  Open an Account
                                </div>
                                <div className="sc-tulu-camp-timeline__box-right">
                                  <div className="sc-tulu-camp-timeline__box-icon">
                                    <svg
                                      width="13"
                                      height="12"
                                      viewBox="0 0 13 12"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M6.5 0L7.89583 4.60417L12.5 6L7.89583 7.39583L6.5 12L5.10417 7.39583L0.5 6L5.10417 4.60417L6.5 0Z"
                                        fill="#939393"
                                      />
                                    </svg>
                                  </div>
                                  <p className="sc-tulu-camp-timeline__box-text">1000</p>
                                </div>
                              </div>
                              <div className="sc-tulu-camp-timeline__cvp">
                                <div className="sc-tulu-camp-timeline__cvp-image">
                                  <img
                                    src="https://av.sc.com/sg/content/images/sg-crafting-a-balanced-portfolio-pintile.jpg"
                                    alt="Article Image"
                                  />
                                </div>
                                <div className="sc-tulu-camp-timeline__cvp-item sc-rte">
                                  <h2 className="sc-tulu-camp-timeline__cvp-title">REITs 101</h2>
                                  <p className="sc-tulu-camp-timeline__cvp-text">
                                    The Beginner’s Guide to REITs: What They Are and How to Invest
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="sc-tulu-camp-timeline__box sc-tulu-camp-timeline__box">
                              <div className="sc-tulu-camp-timeline__box-wrapper">
                                <div className="sc-tulu-camp-timeline__box-title">
                                  Make your first trade
                                </div>
                                <div className="sc-tulu-camp-timeline__box-right">
                                  <div className="sc-tulu-camp-timeline__box-icon">
                                    <svg
                                      width="13"
                                      height="12"
                                      viewBox="0 0 13 12"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M6.5 0L7.89583 4.60417L12.5 6L7.89583 7.39583L6.5 12L5.10417 7.39583L0.5 6L5.10417 4.60417L6.5 0Z"
                                        fill="#939393"
                                      />
                                    </svg>
                                  </div>
                                  <p className="sc-tulu-camp-timeline__box-text">1000</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="sc-tulu-camp-wrapper-full__column">
                        <div className="sc-tulu-camp-timeline">
                          <div className="sc-tulu-camp-timeline__wrapper">
                            {/* Add Class: sc-tulu-camp-timeline__box--active for timeline completed
         Add Class: sc-tulu-camp-timeline__box--progress for timeline in progress
          Add Class: sc-tulu-camp-timeline__box--disabled for timeline in locked
          */}
                            <div className="sc-tulu-camp-timeline__box sc-tulu-camp-timeline__box--progress">
                              <div className="sc-tulu-camp-timeline__box-wrapper">
                                <div className="sc-tulu-camp-timeline__box-title">
                                  Open an Account
                                </div>
                                <div className="sc-tulu-camp-timeline__box-right">
                                  <div className="sc-tulu-camp-timeline__box-icon">
                                    <svg
                                      width="13"
                                      height="12"
                                      viewBox="0 0 13 12"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M6.5 0L7.89583 4.60417L12.5 6L7.89583 7.39583L6.5 12L5.10417 7.39583L0.5 6L5.10417 4.60417L6.5 0Z"
                                        fill="#939393"
                                      />
                                    </svg>
                                  </div>
                                  <p className="sc-tulu-camp-timeline__box-text">1000</p>
                                </div>
                              </div>
                              <div className="sc-tulu-camp-timeline__cvp">
                                <div className="sc-tulu-camp-timeline__cvp-image">
                                  <img
                                    src="https://av.sc.com/sg/content/images/sg-crafting-a-balanced-portfolio-pintile.jpg"
                                    alt="Article Image"
                                  />
                                </div>
                                <div className="sc-tulu-camp-timeline__cvp-item sc-rte">
                                  <h2 className="sc-tulu-camp-timeline__cvp-title">REITs 101</h2>
                                  <p className="sc-tulu-camp-timeline__cvp-text">
                                    The Beginner’s Guide to REITs: What They Are and How to Invest
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="sc-tulu-camp-timeline__box sc-tulu-camp-timeline__box">
                              <div className="sc-tulu-camp-timeline__box-wrapper">
                                <div className="sc-tulu-camp-timeline__box-title">
                                  Make your first trade
                                </div>
                                <div className="sc-tulu-camp-timeline__box-right">
                                  <div className="sc-tulu-camp-timeline__box-icon">
                                    <svg
                                      width="13"
                                      height="12"
                                      viewBox="0 0 13 12"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M6.5 0L7.89583 4.60417L12.5 6L7.89583 7.39583L6.5 12L5.10417 7.39583L0.5 6L5.10417 4.60417L6.5 0Z"
                                        fill="#939393"
                                      />
                                    </svg>
                                  </div>
                                  <p className="sc-tulu-camp-timeline__box-text">1000</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* 3rd Tab End */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*Modal content For T & C 
      Add Class : visible to show modal
      Add Class : sc-tulu-camp-modal--full-height to show modal with full height
      Add Class : sc-tulu-camp-modal--close-btn to show modal with close
      Add Class : sc-tulu-camp-modal--popup to show popup
      */}

      <div
        className="sc-tulu-camp-modal"
        id="sc-terms-and-condition"
        role="dialog"
        aria-labelledby="sc-terms-and-condition"
        aria-hidden="true"
      >
        <div className="sc-tulu-camp-modal__dialog">
          <div className="sc-tulu-camp-modal__content ">
            <div className="sc-tulu-camp-modal__header">
              <button type="button" className="sc-tulu-camp-modal__close">
                <svg
                  width="17"
                  height="10"
                  viewBox="0 0 17 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.80005 9.5L0.800049 1.5L1.80005 0.5L8.80005 7.25L15.8 0.5L16.8 1.5L8.80005 9.5Z"
                    fill="#000000"
                  />
                </svg>
              </button>
              <p className="sc-tulu-camp-modal__header-title">Terms & Conditions</p>
              <button type="button" className="sc-tulu-camp-modal__download">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.0625 10.8125L12 14.75L15.9375 10.8125"
                    stroke="#2772C7"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M12 4.24707V14.7471"
                    stroke="#2772C7"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M21 13.25V20C21 20.1989 20.921 20.3897 20.7803 20.5303C20.6397 20.671 20.4489 20.75 20.25 20.75H3.75C3.55109 20.75 3.36032 20.671 3.21967 20.5303C3.07902 20.3897 3 20.1989 3 20V13.25"
                    stroke="#2772C7"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </button>
            </div>
            <div className="sc-tulu-camp-modal__body">
              <div className="sc-tulu-camp__wrapper">
                <div className="sc-tulu-camp-doc">
                  <div className="sc-tulu-camp-doc__tab-panel sc-sc-rte">
                    <article className="sc-tulu-camp-doc__content">
                      <h4 className="sc-tulu-camp-doc__title">
                        Account Opening Customer Declaration
                      </h4>
                      <strong>By submitting this application,</strong>
                      <ul>
                        <li>
                          You (being the person named as the “applicant” in the application)
                          represent and warrant that all information (including any documents) you
                          have given to us (being each member of the Standard Chartered Group
                          identified in the application or the approval as the person providing the
                          facility, product or service to you, and its successors and assigns) in
                          connection with this application is correct, complete and not misleading -
                          important note: if this is not the case you may be personally liable;
                        </li>
                        <li>
                          You acknowledge that we may decline your application in its entirety or in
                          part (in respect of any one or more particular product(s), service(s) or
                          account(s) / sub-account(s) you are applying for in this application)
                          without giving you any reason for doing so; if this happens, no
                          contractual relationship arises between you and us in respect of any
                          product(s), service(s) or account(s) / sub-account(s) requested in this
                          application which we have declined to provide to you;
                        </li>
                        <li>
                          Renminbi (“RMB”) exchange rate, like any other currency, is affected by a
                          wide range of factors and is subject to fluctuations. Such fluctuations
                          may result in gains and losses in the event that the client subsequently
                          converts RMB to another currency (including Hong Kong dollars); and
                        </li>
                        <li>
                          RMB is currently not freely convertible and conversion of RMB through
                          banks in Hong Kong is subject to restrictions specified by the Bank and
                          regulatory requirements applicable from time to time. The actual
                          conversion arrangement will depend on the restrictions prevailing at the
                          relevant time.
                        </li>
                      </ul>
                      <strong>Deposit Protection Scheme:</strong>
                      <ul>
                        <li>
                          Deposit(s) in the Account(s) applied for hereunder is (are) deposit(s)
                          qualified for protection under the Deposit Protection Scheme in Hong Kong.
                          However, a time deposit with a tenor exceeding 5 years or a deposit
                          subject to any foreign exchange forward contract under Currency Switching
                          services will NOT be protected under the Scheme.
                        </li>
                        <li>
                          If there is any inconsistency between the English version and the Chinese
                          version of this application form, the English version prevails.
                        </li>
                        <li>Issued by Standard Chartered Bank (Hong Kong) Limited</li>
                      </ul>
                    </article>
                  </div>
                </div>
              </div>
              <div className="sc-tulu-camp-modal__footer">
                {/* Remove class 'sc-tulu-camp-modal__footer-btn--disabled' when scroling is completed */}
                <button
                  type="button"
                  className="sc-btn sc-btn--medium sc-btn--curved sc-tulu-camp-modal__footer-btn sc-tulu-camp-modal__footer-btn--disabled"
                  id="sc-scroll-tc-btn"
                >
                  Scroll Down
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*Modal For Questionnaire
      Add Class : visible to show modal
      */}

      <div
        className="sc-tulu-camp-modal sc-tulu-camp-modal--close-btn sc-tulu-camp-modal--full-height"
        id="sc-questionnaire"
        role="dialog"
        aria-labelledby="sc-questionnaire"
        aria-hidden="true"
      >
        <div className="sc-tulu-camp-modal__dialog">
          <div className="sc-tulu-camp-modal__content ">
            <div className="sc-tulu-camp-modal__header">
              <button type="button" className="sc-tulu-camp-modal__close">
                <svg
                  width="17"
                  height="18"
                  viewBox="0 0 17 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.0382 2.63609C16.4287 2.24557 16.4287 1.6124 16.0382 1.22188C15.6476 0.831353 15.0145 0.831353 14.6239 1.22188L0.481813 15.364C0.0912886 15.7545 0.0912882 16.3877 0.481813 16.7782C0.872337 17.1688 1.5055 17.1688 1.89603 16.7782L16.0382 2.63609Z"
                    fill="#000000"
                  />
                  <path
                    d="M14.6243 16.7783C15.0148 17.1688 15.648 17.1688 16.0385 16.7783C16.429 16.3877 16.429 15.7546 16.0385 15.3641L1.89636 1.22192C1.50584 0.831401 0.872674 0.831401 0.48215 1.22192C0.0916255 1.61245 0.0916259 2.24561 0.48215 2.63614L14.6243 16.7783Z"
                    fill="#000000"
                  />
                </svg>
              </button>
            </div>
            <div className="sc-tulu-camp-modal__body">
              <div className="sc-tulu-camp__wrapper">
                <div className="sc-tulu-camp-questionnaire">
                  <div className="sc-tulu-camp-questionnaire__test sc-sc-rte">
                    <p className="sc-tulu-camp-questionnaire__test-text">Test your knowledge</p>
                    <h2 className="sc-tulu-camp-questionnaire__heading">REITs 101</h2>
                    <p className="sc-tulu-camp-questionnaire__test-text">
                      <span>1 </span>of <span>2</span>
                    </p>
                  </div>
                  <div className="sc-tulu-camp-questionnaire__question">
                    <p className="sc-tulu-camp-questionnaire__question-text">
                      What is the minimum percentage of taxable income tha tREITs must distribute to
                      Unit holders as dividends each year?
                    </p>
                    <div className="sc-radio-box">
                      <input
                        type="radio"
                        className="sc-radio-box__input"
                        id="one"
                        tabIndex="-1"
                        name="radio"
                      />
                      <label className="sc-radio-box__input-label" htmlFor="one" tabIndex="0">
                        50%
                      </label>
                    </div>

                    <div className="sc-radio-box">
                      <input
                        type="radio"
                        className="sc-radio-box__input"
                        id="two"
                        tabIndex="-1"
                        name="radio"
                      />
                      <label className="sc-radio-box__input-label" htmlFor="two" tabIndex="0">
                        70%
                      </label>
                    </div>

                    <div className="sc-radio-box">
                      <input
                        type="radio"
                        className="sc-radio-box__input"
                        id="three"
                        tabIndex="-1"
                        name="radio"
                      />
                      <label className="sc-radio-box__input-label" htmlFor="three" tabIndex="0">
                        90%
                      </label>
                    </div>

                    <div className="sc-radio-box">
                      <input
                        type="radio"
                        className="sc-radio-box__input"
                        id="four"
                        tabIndex="-1"
                        name="radio"
                      />
                      <label className="sc-radio-box__input-label" htmlFor="four" tabIndex="0">
                        100%
                      </label>
                    </div>

                    <div className="sc-tulu-camp-questionnaire__feedback sc-tulu-camp-questionnaire__feedback--success sc-tulu-camp-questionnaire__feedback--show">
                      <p>Success Feedback</p>
                    </div>
                    <div className="sc-tulu-camp-questionnaire__feedback-desc">
                      Explanation goes here. Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit, sed do eiusmod tempor incididunt ut
                    </div>
                  </div>
                  <div className="sc-tulu-camp-questionnaire__btn">
                    <button
                      type="button"
                      className="sc-btn sc-btn--medium  sc-btn--curved sc-tulu-camp-modal__footer-btn sc-tulu-camp-modal__footer-btn--dark"
                      id="sc-scroll-agree"
                    >
                      Continue
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*Modal For Get started
      Add Class : visible to show modal
      */}

      <div
        className="sc-tulu-camp-modal visible"
        id="sc-get-started"
        role="dialog"
        aria-labelledby="sc-get-started"
        aria-hidden="true"
      >
        <div className="sc-tulu-camp-modal__dialog">
          <div className="sc-tulu-camp-modal__content ">
            <div className="sc-tulu-camp-modal__header">
              <button type="button" className="sc-tulu-camp-modal__close">
                <svg
                  width="17"
                  height="10"
                  viewBox="0 0 17 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.80005 9.5L0.800049 1.5L1.80005 0.5L8.80005 7.25L15.8 0.5L16.8 1.5L8.80005 9.5Z"
                    fill="#000000"
                  />
                </svg>
              </button>
            </div>
            <div className="sc-tulu-camp-modal__body">
              <div className="sc-tulu-camp__wrapper">
                <div className="sc-tulu-camp-doc">
                  <div className="sc-tulu-camp-doc__tab-panel sc-rte">
                    <article className="sc-tulu-camp-doc__content">
                      <div className="sc-tulu-camp-doc__image">
                        <img
                          src="https://av.sc.com/sg/content/images/sg-trade-up-level-up-journey-vector.png"
                          alt="Trade Up level up Image"
                        />
                      </div>
                      <h4 className="sc-tulu-camp-doc__title">Trade up, Level Up!</h4>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a suscipit
                        diam.
                      </p>

                      <div className="sc-tulu-camp-how-it-works">
                        <div className="sc-heading-inner">
                          <h2 className="sc-title sc-title--inner">How it works</h2>
                        </div>
                        <ul className="sc-tulu-camp-how-it-works__card">
                          <li className="sc-tulu-camp-how-it-works__card-item">
                            <div className="sc-tulu-camp-how-it-works__item-title">Register</div>
                            <div className="sc-tulu-camp-how-it-works__item-description">
                              Click below &quot;Get Started&quot; button to join the promotion.
                            </div>
                          </li>
                          <li className="sc-tulu-camp-how-it-works__card-item">
                            <div className="sc-tulu-camp-how-it-works__item-title">
                              Complete Mission
                            </div>
                            <div className="sc-tulu-camp-how-it-works__item-description">
                              Trade and hit your targets to earn miles
                            </div>
                            <a href="#" className="sc-tulu-camp-how-it-works__item-link">
                              See Missions &gt;&gt;
                            </a>
                          </li>
                          <li className="sc-tulu-camp-how-it-works__card-item">
                            <div className="sc-tulu-camp-how-it-works__item-title">
                              Track Your Progress
                            </div>
                            <div className="sc-tulu-camp-how-it-works__item-description">
                              Check your progress and see how close you are to leveling up.
                            </div>
                          </li>
                        </ul>
                      </div>
                      <strong>Disclaimer</strong>
                      <p>
                        Your tracker updates within 2 days after successful registration. If it’s
                        been longer and your tracker still isn’t updated, please contact support for
                        assistance.
                      </p>
                    </article>
                  </div>
                </div>
              </div>
              <div className="sc-tulu-camp-modal__footer">
                <button type="button" className="sc-btn sc-btn--medium" id="sc-get-started-btn">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*Modal For Help 
      Add Class : visible to show modal
      */}

      <div
        className="sc-tulu-camp-modal sc-tulu-camp-modal--full-height"
        id="sc-help"
        role="dialog"
        aria-labelledby="sc-help"
        aria-hidden="true"
      >
        <div className="sc-tulu-camp-modal__dialog">
          <div className="sc-tulu-camp-modal__content ">
            <div className="sc-tulu-camp-modal__header">
              <button type="button" className="sc-tulu-camp-modal__close">
                <svg
                  width="17"
                  height="10"
                  viewBox="0 0 17 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.80005 9.5L0.800049 1.5L1.80005 0.5L8.80005 7.25L15.8 0.5L16.8 1.5L8.80005 9.5Z"
                    fill="#000000"
                  />
                </svg>
              </button>
            </div>
            <div className="sc-tulu-camp-modal__body">
              <div className="sc-tulu-camp__wrapper">
                <div className="sc-tulu-camp-doc">
                  <div className="sc-tulu-camp-doc__tab-panel sc-rte">
                    <article className="sc-tulu-camp-doc__content">
                      <div className="sc-tulu-camp-how-it-works">
                        <div className="sc-heading-inner">
                          <h2 className="sc-title sc-title--inner">How it works</h2>
                        </div>
                        <ul className="sc-tulu-camp-how-it-works__card">
                          <li className="sc-tulu-camp-how-it-works__card-item">
                            <div className="sc-tulu-camp-how-it-works__item-title">Register</div>
                            <div className="sc-tulu-camp-how-it-works__item-description">
                              Click below &quot;Get Started&quot; button to join the promotion.
                            </div>
                          </li>
                          <li className="sc-tulu-camp-how-it-works__card-item">
                            <div className="sc-tulu-camp-how-it-works__item-title">
                              Complete Mission
                            </div>
                            <div className="sc-tulu-camp-how-it-works__item-description">
                              Trade and hit your targets to earn miles
                            </div>
                            <a href="#" className="sc-tulu-camp-how-it-works__item-link">
                              See Missions &gt;&gt;
                            </a>
                          </li>
                          <li className="sc-tulu-camp-how-it-works__card-item">
                            <div className="sc-tulu-camp-how-it-works__item-title">
                              Track Your Progress
                            </div>
                            <div className="sc-tulu-camp-how-it-works__item-description">
                              Check your progress and see how close you are to leveling up.
                            </div>
                          </li>
                        </ul>
                      </div>

                      <div className="sc-faq">
                        <div className="sc-content-wrapper">
                          <div className="sc-heading-inner">
                            <h2 className="sc-title sc-title--inner">Faq&apos;s</h2>
                          </div>
                          <div className="sc-faq__accordion">
                            <input
                              className="sc-faq__accordion-input"
                              type="checkbox"
                              tabIndex="-1"
                              id="one"
                            />
                            <label
                              tabIndex="0"
                              className="sc-faq__accordion-label sc-faq__accordion-label--plus"
                              htmlFor="one"
                            >
                              How does the SC Referral Club work?
                            </label>
                            <div className="sc-faq__accordion-content sc-rte">
                              The SC Referral Club is open to all existing primary account holder of
                              deposit accounts and principal cardholders of credit cards to invite
                              their friends to Standard Chartered and earn CashBack/cash rebates or
                              Asia Miles on successful referrals.
                            </div>
                          </div>
                          <div className="sc-faq__accordion">
                            <input
                              className="sc-faq__accordion-input"
                              type="checkbox"
                              tabIndex="-1"
                              id="two"
                            />
                            <label
                              tabIndex="0"
                              className="sc-faq__accordion-label sc-faq__accordion-label--plus"
                              htmlFor="two"
                            >
                              What will I receive when I refer a friend?
                            </label>
                            <div className="sc-faq__accordion-content sc-rte">
                              For details on Referrer offers, please refer to the Additional Terms
                              and Conditions of the respective SC Referral Club Programs/Products.
                            </div>
                          </div>
                          <div className="sc-faq__accordion">
                            <input
                              className="sc-faq__accordion-input"
                              type="checkbox"
                              tabIndex="-1"
                              id="three"
                            />
                            <label
                              tabIndex="0"
                              className="sc-faq__accordion-label sc-faq__accordion-label--plus"
                              htmlFor="three"
                            >
                              What will my friend or family receive?
                            </label>
                            <div className="sc-faq__accordion-content sc-rte">
                              Your friend and family will receive a sign-up reward if he/she has
                              successfully signed up for an eligible product and fulfil the sign-up
                              eligibility criteria. for details, please refer to each of the Terms
                              and Conditions of these products that he/she is applying for.
                            </div>
                          </div>
                          <div className="sc-faq__accordion">
                            <input
                              className="sc-faq__accordion-input"
                              type="checkbox"
                              tabIndex="-1"
                              id="four"
                            />
                            <label
                              tabIndex="0"
                              className="sc-faq__accordion-label sc-faq__accordion-label--plus"
                              htmlFor="four"
                            >
                              Are there any restrictions and/or eligibility criteria for referrals?
                            </label>
                            <div className="sc-faq__accordion-content sc-rte">
                              For details on Referee eligibility for each Products/Programs on New
                              Services(s) , please refer to the Additional Terms and Conditions of
                              the respective SC Referral Club Programs/products
                            </div>
                          </div>
                          <div className="sc-faq__accordion">
                            <input
                              className="sc-faq__accordion-input"
                              type="checkbox"
                              tabIndex="-1"
                              id="five"
                            />
                            <label
                              tabIndex="0"
                              className="sc-faq__accordion-label sc-faq__accordion-label--plus"
                              htmlFor="five"
                            >
                              When will I receive my reward?
                            </label>
                            <div className="sc-faq__accordion-content sc-rte">
                              Your referral cashback will be credited to your account. For detail
                              timing for each product/program, please refer to each of the Terms and
                              Conditions of these products.
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="sc-faq">
                        <div className="sc-content-wrapper">
                          <div className="sc-heading-inner">
                            <h2 className="sc-title sc-title--inner undefined">T&Cs</h2>
                          </div>

                          <a
                            target="_blank"
                            rel="noreferrer noopener"
                            href="https://av.sc.com/hk/content/docs/hk-online-mgm-referrer-tnc.pdf"
                            title="Terms &amp; Conditions of SC Referral Club"
                            className="sc-faq__terms-link"
                          >
                            Terms &amp; Conditions of SC Referral Club
                          </a>
                          <a
                            target="_blank"
                            rel="noreferrer noopener"
                            href="https://av.sc.com/hk/content/docs/hk-online-mgm-referrer-tnc.pdf"
                            title="Terms &amp; Conditions of SC Referral Club"
                            className="sc-faq__terms-link"
                          >
                            Terms &amp; Conditions of SC Referral Club
                          </a>
                          <a
                            target="_blank"
                            rel="noreferrer noopener"
                            href="https://av.sc.com/hk/content/docs/hk-online-mgm-referrer-tnc.pdf"
                            title="Terms &amp; Conditions of SC Referral Club"
                            className="sc-faq__terms-link"
                          >
                            Terms &amp; Conditions of SC Referral Club
                          </a>
                          <a
                            target="_blank"
                            rel="noreferrer noopener"
                            href="https://av.sc.com/hk/content/docs/hk-online-mgm-referrer-tnc.pdf"
                            title="Terms &amp; Conditions of SC Referral Club"
                            className="sc-faq__terms-link"
                          >
                            Terms &amp; Conditions of SC Referral Club
                          </a>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*Modal For Popup
      Add Class : visible to show popup
      */}

      <div
        className="sc-tulu-camp-modal sc-tulu-camp-modal--popup"
        id="sc-popup"
        role="dialog"
        aria-labelledby="sc-popup"
        aria-hidden="true"
      >
        <div className="sc-tulu-camp-modal__dialog">
          <div className="sc-tulu-camp-modal__content ">
            <div className="sc-tulu-camp-modal__body">
              <div className="sc-tulu-camp__wrapper">
                <article className="sc-tulu-camp-doc__content">
                  <div className="sc-tulu-camp-doc__image">
                    <img
                      src="https://av.sc.com/sg/content/images/sg-trade-up-level-up-journey-vector.png"
                      alt="Trade Up level up Image"
                    />
                  </div>
                  <h4 className="sc-tulu-camp-doc__title">Trade up, Level Up!</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a suscipit diam.
                  </p>
                </article>
                <div className="sc-tulu-camp-modal__footer">
                  <button
                    type="button"
                    className="sc-btn sc-btn--medium sc-btn--curved sc-tulu-camp-modal__footer-btn sc-tulu-camp-modal__footer-btn--dark"
                    id="sc-complete"
                  >
                    Ok
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
