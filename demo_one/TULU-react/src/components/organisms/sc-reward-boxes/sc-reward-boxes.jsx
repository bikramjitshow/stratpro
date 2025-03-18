import React, { useEffect } from 'react';
import { HeadingInner } from '../../../../stories/components/molecules/sc-heading-inner/sc-heading-inner.stories.js';
import ScRewardBoxes from './sc-reward-boxes.js';

export const RewardBoxes = props => {
  useEffect(() => {
    ScRewardBoxes.init();
  }, []);
  return (
    <div
      className={`sc-reward-boxes ${props.class}
      ${props.BgBlue ? 'sc-blue-bg' : ''}
      ${props.BgDark ? 'sc-dark-bg' : ''}
      ${props.BgImg ? 'sc-module-bg' : ''}`}
    >
      {props.BgImg && (
        <div className="sc-module-bg__img-wrapper">
          <picture>
            <source
              srcSet="https://av.sc.com/sg/content/images/SG_welcome-offer-bg.jpg"
              media="(min-width: 768px)"
            />
            <source
              srcSet="https://av.sc.com/sg/content/images/SG_welcome-offer-bg.jpg"
              media="(max-width: 767px)"
            />
            <img
              src="https://av.sc.com/sg/content/images/SG_welcome-offer-bg.jpg"
              className="sc-module-bg__img"
              width="1600"
              height="490"
              alt="Adult, Female, Person"
            />
          </picture>
        </div>
      )}
      <div className="sc-content-wrapper">
        <HeadingInner class="sc-title--center" icon={true} />
        <div className="sc-reward-boxes__wrapper">
          <div className="sc-reward-boxes__box">
            <div className="sc-reward-boxes__inner">
              <div className="sc-icon-head">
                <div className="sc-icon-head__icon">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.7506 8H4.25061C3.8364 8 3.50061 8.33579 3.50061 8.75V11.75C3.50061 12.1642 3.8364 12.5 4.25061 12.5H20.7506C21.1648 12.5 21.5006 12.1642 21.5006 11.75V8.75C21.5006 8.33579 21.1648 8 20.7506 8Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M20.0006 12.5V19.25C20.0006 19.4489 19.9216 19.6397 19.7809 19.7803C19.6403 19.921 19.4495 20 19.2506 20H5.75061C5.5517 20 5.36093 19.921 5.22028 19.7803C5.07963 19.6397 5.00061 19.4489 5.00061 19.25V12.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12.5006 8V20"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16.7433 6.93933C15.6826 7.99999 12.5006 7.99999 12.5006 7.99999C12.5006 7.99999 12.5006 4.81801 13.5613 3.75735C13.9833 3.33579 14.5555 3.09907 15.152 3.09924C15.7485 3.09941 16.3205 3.33645 16.7423 3.75825C17.1641 4.18005 17.4012 4.75209 17.4014 5.3486C17.4015 5.94512 17.1648 6.51729 16.7433 6.93933V6.93933Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8.25796 6.93933C9.31862 7.99999 12.5006 7.99999 12.5006 7.99999C12.5006 7.99999 12.5006 4.81801 11.4399 3.75735C11.0179 3.33579 10.4457 3.09907 9.84921 3.09924C9.2527 3.09941 8.68066 3.33645 8.25886 3.75825C7.83706 4.18005 7.60002 4.75209 7.59985 5.3486C7.59968 5.94512 7.8364 6.51729 8.25796 6.93933V6.93933Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <span className="sc-icon-head__title">
                  <p>Exclusive Welcome Rewards</p>
                </span>
              </div>
              <div className="sc-reward-boxes__radio">
                <div className="sc-radio-box sc-radio-box-1">
                  <input
                    type="radio"
                    className="sc-radio-box__input"
                    id="check-box-cash-rewards-1"
                    tabIndex="-1"
                    name="checkbox-radio-1"
                    defaultValue="cash-rewards"
                    defaultChecked="checked"
                  />
                  <label
                    className="sc-radio-box__input-label"
                    htmlFor="check-box-cash-rewards-1"
                    tabIndex="0"
                  >
                    Cash Rewards
                  </label>
                </div>
                <div className="sc-radio-box sc-radio-box-1">
                  <input
                    type="radio"
                    className="sc-radio-box__input"
                    id="check-box-signature-cio-2"
                    tabIndex="-1"
                    name="checkbox-radio-1"
                    defaultValue="signature-cio-funds"
                  />
                  <label
                    className="sc-radio-box__input-label"
                    htmlFor="check-box-signature-cio-2"
                    tabIndex="0"
                  >
                    Signature CIO Funds
                  </label>
                </div>
              </div>
              <div className="sc-reward-boxes__deposits sc-reward-boxes__deposits--wbgc">
                <div className="sc-reward-boxes__result cash-rewards">
                  <div className="sc-reward-boxes__result-desc">
                    <p>Fresh Funds Rewards up to</p>
                  </div>
                  <div className="sc-reward-boxes__result-amount">
                    <p>
                      <span>S$6000</span>
                    </p>
                  </div>
                </div>
                <div className="sc-reward-boxes__result signature-cio-funds hide">
                  <div className="sc-reward-boxes__result-desc">
                    <p>Enjoy Up to</p>
                  </div>
                  <div className="sc-reward-boxes__result-amount">
                    <p>
                      <span>S$7,000</span>
                    </p>
                  </div>
                  <div className="sc-reward-boxes__result-desc">
                    <p>In equivalent Signature CIO Funds</p>
                  </div>
                </div>
                <div className="sc-reward-boxes__cvp">
                  <div className="sc-reward-boxes__cvp-tile cash-rewards">
                    <p>
                      Reward Value
                      <br />
                      <strong>S$6,000</strong>
                      <br />
                      With funding of
                      <br />
                      <strong>*S$1.5M</strong>
                    </p>
                  </div>
                  <div className="sc-reward-boxes__cvp-tile cash-rewards">
                    <p>
                      Reward Value
                      <br />
                      <strong>S$3,000</strong>
                      <br />
                      With funding of
                      <br />
                      <strong>*S$1M</strong>
                    </p>
                  </div>
                  <div className="sc-reward-boxes__cvp-tile cash-rewards">
                    <p>
                      Reward Value
                      <br />
                      <strong>S$7,000</strong>
                      <br />
                      With funding of
                      <br />
                      <strong>S$200,000</strong>
                    </p>
                  </div>
                  <div className="sc-reward-boxes__cvp-tile signature-cio-funds hide">
                    <p>
                      Reward Value
                      <br />
                      <strong>S$800</strong>
                      <br />
                      With funding of
                      <br />
                      <strong>S$200,000</strong>
                    </p>
                  </div>
                  <div className="sc-reward-boxes__cvp-tile signature-cio-funds hide">
                    <p>
                      Reward Value
                      <br />
                      <strong>S$3,500</strong>
                      <br />
                      With funding of
                      <br />
                      <strong>*S$1M</strong>
                    </p>
                  </div>
                  <div className="sc-reward-boxes__cvp-tile signature-cio-funds hide">
                    <p>
                      Reward Value
                      <br />
                      <strong>S$7,000</strong>
                      <br />
                      With funding of
                      <br />
                      <strong>*S$1.5M</strong>
                    </p>
                  </div>
                </div>
                <div className="sc-reward-boxes__box-desc sc-reward-boxes__box-desc--left-align">
                  <p>
                    *S$1 million and above and also signs up as a Priority Private client and
                    consents to be treated as an Accredited Investor (where applicable and as
                    determined by the Bank in its sole and absolute discretion)
                  </p>
                  <p>
                    Customers who bring in between S$200,000 to S$1M and consent to be treated as an
                    Accredited Investor (as determined by the Bank in its sole and absolute
                    discretion) are eligible to receive an additional <strong>S$1,000</strong> Cash
                    Reward
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="sc-reward-boxes__box">
            <div className="sc-reward-boxes__inner">
              <div className="sc-icon-head">
                <div className="sc-icon-head__icon icon-sc-gift">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.7506 8H4.25061C3.8364 8 3.50061 8.33579 3.50061 8.75V11.75C3.50061 12.1642 3.8364 12.5 4.25061 12.5H20.7506C21.1648 12.5 21.5006 12.1642 21.5006 11.75V8.75C21.5006 8.33579 21.1648 8 20.7506 8Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M20.0006 12.5V19.25C20.0006 19.4489 19.9216 19.6397 19.7809 19.7803C19.6403 19.921 19.4495 20 19.2506 20H5.75061C5.5517 20 5.36093 19.921 5.22028 19.7803C5.07963 19.6397 5.00061 19.4489 5.00061 19.25V12.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12.5006 8V20"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16.7433 6.93933C15.6826 7.99999 12.5006 7.99999 12.5006 7.99999C12.5006 7.99999 12.5006 4.81801 13.5613 3.75735C13.9833 3.33579 14.5555 3.09907 15.152 3.09924C15.7485 3.09941 16.3205 3.33645 16.7423 3.75825C17.1641 4.18005 17.4012 4.75209 17.4014 5.3486C17.4015 5.94512 17.1648 6.51729 16.7433 6.93933V6.93933Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8.25796 6.93933C9.31862 7.99999 12.5006 7.99999 12.5006 7.99999C12.5006 7.99999 12.5006 4.81801 11.4399 3.75735C11.0179 3.33579 10.4457 3.09907 9.84921 3.09924C9.2527 3.09941 8.68066 3.33645 8.25886 3.75825C7.83706 4.18005 7.60002 4.75209 7.59985 5.3486C7.59968 5.94512 7.8364 6.51729 8.25796 6.93933V6.93933Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <span className="sc-icon-head__title">
                  <p>Investment Cash Reward</p>
                </span>
              </div>
              <div className="sc-reward-boxes__deposits sc-reward-boxes__deposits--wbgc">
                <div className="sc-reward-boxes__result">
                  <div className="sc-reward-boxes__result-desc">
                    <p>Up to</p>
                  </div>
                  <div className="sc-reward-boxes__result-amount">
                    <p>
                      <span>S$12,000</span>
                    </p>
                  </div>
                </div>
                <div className="sc-reward-boxes__cvp">
                  <div className="sc-reward-boxes__cvp-tile sc-reward-boxes__cvp-tile--full-width">
                    <p>
                      <strong>S$ 100</strong>
                      <br />
                      for every S$50,000 (or equivalent in foreign currencies) investment purchased
                      in Eligible Unit Trust, Bonds and structured Products offered by the Bank in a
                      single day.
                    </p>
                  </div>
                </div>
              </div>
              <div className="sc-reward-boxes__box-desc">
                <p>
                  <strong>+</strong>
                </p>
              </div>
              <div className="sc-reward-boxes__cvp">
                <div className="sc-reward-boxes__cvp-tile sc-reward-boxes__cvp-tile--full-width">
                  <p>
                    <strong>Up to S$6000</strong>
                    <br />
                    Successfully transfer in Eligible Unit Trust(s), with a minimum transfer-in
                    amount of S$10,000 (or its foreign currency equivalents) in a single
                    transaction, during the Promotion Period to receive 0.4% cash rebate on the
                    Cumulative Value of Eligible Unit Trust(s) transferred in (in SGD or its foreign
                    currency equivalents).
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="sc-reward-boxes__box">
            <div className="sc-reward-boxes__inner">
              <div className="sc-icon-head">
                <div className="sc-icon-head__icon">
                  <svg
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinejoin="miter"
                      strokeLinecap="butt"
                      strokeMiterlimit="4"
                      strokeWidth="1.5"
                      d="M14.333 13.5c0 3.314-2.686 6-6 6s-6-2.686-6-6c0-3.314 2.686-6 6-6s6 2.686 6 6z"
                    ></path>
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinejoin="miter"
                      strokeLinecap="round"
                      strokeMiterlimit="4"
                      strokeWidth="1.5"
                      d="M8.333 10.5v2.964l-1.5 2.286"
                    ></path>
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinejoin="miter"
                      strokeLinecap="butt"
                      strokeMiterlimit="4"
                      strokeWidth="1.8"
                      d="M5.833 3h5c0.276 0 0.5 0.224 0.5 0.5v1.25c0 0.276-0.224 0.5-0.5 0.5h-5c-0.276 0-0.5-0.224-0.5-0.5v-1.25c0-0.276 0.224-0.5 0.5-0.5z"
                    ></path>
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinejoin="miter"
                      strokeLinecap="butt"
                      strokeMiterlimit="4"
                      strokeWidth="1.5"
                      d="M8.333 4.5v3"
                    ></path>
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      strokeMiterlimit="4"
                      strokeWidth="1.5"
                      d="M12.833 9v-1.5h6v12h-6v-1.5"
                    ></path>
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      strokeMiterlimit="4"
                      strokeWidth="1.5"
                      d="M13.583 10.5h5.25"
                    ></path>
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      strokeMiterlimit="4"
                      strokeWidth="1.5"
                      d="M18.833 13.5h4.5"
                    ></path>
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      strokeMiterlimit="4"
                      strokeWidth="1.5"
                      d="M18.833 16.5h4.5"
                    ></path>
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      strokeMiterlimit="4"
                      strokeWidth="1.5"
                      d="M14.333 15h3.75"
                    ></path>
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      strokeMiterlimit="4"
                      strokeWidth="1.5"
                      d="M18.833 10.5h4.5v9h-4.5"
                    ></path>
                  </svg>
                </div>
                <div className="sc-icon-head__title">
                  <p>In addition, get the following when you sign up today</p>
                </div>
              </div>
              <div className="sc-reward-boxes__deposits sc-reward-boxes__deposits--dark-bg">
                <div className="sc-reward-boxes__result sc-rte">
                  <div className="sc-reward-boxes__result-desc">
                    <p>Enjoy cash rewards up to</p>
                  </div>
                  <div className="sc-reward-boxes__result-amount">
                    <p>
                      <span>S$6000</span>
                    </p>
                  </div>
                  <div className="sc-reward-boxes__result-desc">
                    <p>Interest with Wealth Saver, inclusive of up to $12,500 bonus interest</p>
                  </div>
                </div>
                <div className="sc-reward-boxes__result sc-rte">
                  <div className="sc-reward-boxes__result-desc">
                    <p>Up to</p>
                  </div>
                  <div className="sc-reward-boxes__result-amount">
                    <p>
                      <span>7.68% p.a</span>
                    </p>
                  </div>
                  <div className="sc-reward-boxes__result-desc">
                    <p>Fresh Funds Rewards up to</p>
                  </div>
                </div>
                <div className="sc-reward-boxes__result sc-rte">
                  <div className="sc-reward-boxes__result-desc">
                    <p>Up to</p>
                  </div>
                  <div className="sc-reward-boxes__result-amount">
                    <p>
                      <span>4.70% p.a</span>
                    </p>
                  </div>
                  <div className="sc-reward-boxes__result-desc">
                    <p>Interest with Bonus$aver</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
