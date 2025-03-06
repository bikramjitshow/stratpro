import React, { useState, useEffect } from 'react';

import ScMsaCalculatorComp from './sc-msa-calc-compact';

export const MarathonSavingCalculators = props => {
  const [key] = useState(0);
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://av.sc.com/assets/global/js/vendor/nouislider.min.js';
    script.async = true;
    script.onload = () => {
      ScMsaCalculatorComp.init();
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [key]);

  return (
    <div
      className={`sc-msa-calculator-compact ${props.class}`}
      data-currency-details='[{"default":"yes","currency":"HKD","currencyCode":"HKD","daysOfInterest":"365","startDate":"2024-09-02","endDate":"2025-01-02","minAmount":"10000","maxAmount":"10000000","defaultAmount":"500000","stepAmount":"100000","msaRate":[{"endDate":"2024-10-31","msaRate":"3.1"},{"endDate":"2024-12-01","msaRate":"3.3"},{"endDate":"2025-01-02","msaRate":"3.8"}]},{"default":"no","currency":"USD","currencyCode":"USD","daysOfInterest":"360","startDate":"2024-09-02","endDate":"2025-01-02","minAmount":"2000","maxAmount":"1300000","defaultAmount":"60000","stepAmount":"10000","msaRate":[{"endDate":"2024-10-31","msaRate":"3.7"},{"endDate":"2024-12-01","msaRate":"4.1"},{"endDate":"2025-01-02","msaRate":"4.5"}]}]'
    >
      <div className="sc-content-wrapper">
        <div className="sc-msa-calculator-compact__container">
          <div className="sc-msa-calculator-compact__left">
            <h2 className="sc-msa-calculator-compact__text-content sc-only-mobile">
              I want to deposit
            </h2>
            <div className="sc-msa-calculator-compact__top">
              <div className="sc-heading-gradient">
                <div className="sc-heading-gradient__icon">
                  <svg
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="64"
                    height="64"
                    viewBox="0 0 64 64"
                  >
                    <title>accounts</title>
                    <path
                      fill="#0f7aed"
                      d="M46 21a4 4 0 014 4v17a8 8 0 01-8 8H18a4 4 0 01-4-4V21h32zm-4 17a3 3 0 100-6 3 3 0 000 6zM19.12 14A5.12 5.12 0 0014 19.12V21h7.5a1.5 1.5 0 010-3h22.879a7 7 0 00-6.326-4H19.12z"
                    ></path>
                  </svg>
                </div>
                <div className="sc-heading-gradient__wrapper">
                  <h3 className="sc-heading-gradient__title">
                    Marathon Savings Account Calculator
                  </h3>
                  <p className="sc-heading-gradient__desc">Find out how much you earn in the MSA</p>
                </div>
              </div>
              <a href="#" className="sc-btn-link sc-btn-link--blue" title="More Accounts">
                <div className="sc-btn-link__icon">
                  <svg
                    width="17"
                    height="16"
                    viewBox="0 0 17 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M2.27344 4.75C2.27344 3.23122 3.50466 2 5.02344 2C6.54222 2 7.77344 3.23122 7.77344 4.75C7.77344 6.26878 6.54222 7.5 5.02344 7.5C3.50466 7.5 2.27344 6.26878 2.27344 4.75ZM5.02344 3C4.05694 3 3.27344 3.7835 3.27344 4.75C3.27344 5.7165 4.05694 6.5 5.02344 6.5C5.98994 6.5 6.77344 5.7165 6.77344 4.75C6.77344 3.7835 5.98994 3 5.02344 3Z"
                      fill="black"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M8.77344 4.75C8.77344 3.23122 10.0046 2 11.5234 2C13.0422 2 14.2734 3.23123 14.2734 4.75C14.2734 6.26877 13.0422 7.5 11.5234 7.5C10.0046 7.5 8.77344 6.26878 8.77344 4.75ZM11.5234 3C10.5569 3 9.77344 3.7835 9.77344 4.75C9.77344 5.7165 10.5569 6.5 11.5234 6.5C12.4899 6.5 13.2734 5.71651 13.2734 4.75C13.2734 3.78349 12.4899 3 11.5234 3Z"
                      fill="black"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M2.27344 11.25C2.27344 9.73126 3.50465 8.5 5.02344 8.5C6.54223 8.5 7.77344 9.73126 7.77344 11.25C7.77344 12.7687 6.54223 14 5.02344 14C3.50465 14 2.27344 12.7687 2.27344 11.25ZM5.02344 9.5C4.05695 9.5 3.27344 10.2835 3.27344 11.25C3.27344 12.2165 4.05695 13 5.02344 13C5.98993 13 6.77344 12.2165 6.77344 11.25C6.77344 10.2835 5.98993 9.5 5.02344 9.5Z"
                      fill="black"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M11.5234 9C11.7996 9 12.0234 9.22386 12.0234 9.5V13C12.0234 13.2761 11.7996 13.5 11.5234 13.5C11.2473 13.5 11.0234 13.2761 11.0234 13V9.5C11.0234 9.22386 11.2473 9 11.5234 9Z"
                      fill="black"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9.27344 11.25C9.27344 10.9739 9.4973 10.75 9.77344 10.75H13.2734C13.5495 10.75 13.7734 10.9739 13.7734 11.25C13.7734 11.5261 13.5495 11.75 13.2734 11.75H9.77344C9.4973 11.75 9.27344 11.5261 9.27344 11.25Z"
                      fill="black"
                    ></path>
                  </svg>
                </div>
                More Accounts
              </a>
            </div>
            <div className="sc-msa-calculator-compact__content">
              <p className="sc-msa-calculator-compact__currency-text">Type of Currency</p>
              <div className="sc-msa-calculator-compact__box sc-msa-calculator-compact__box--no-border">
                <div className="sc-radio-box">
                  <input
                    type="radio"
                    className="sc-radio-box__input sc-msa-calculator-compact__radio"
                    id="check-box-1"
                    value="hkd"
                    tabIndex="-1"
                    name="currency"
                    checked="checked"
                  />
                  <label className="sc-radio-box__input-label" htmlFor="check-box-1" tabIndex="0">
                    HKD
                  </label>
                </div>
                <div className="sc-radio-box">
                  <input
                    type="radio"
                    className="sc-radio-box__input sc-msa-calculator-compact__radio"
                    id="check-box-2"
                    value="usd"
                    tabIndex="-1"
                    name="currency"
                  />
                  <label className="sc-radio-box__input-label" htmlFor="check-box-2" tabIndex="0">
                    USD
                  </label>
                </div>
              </div>
            </div>
            <div className="sc-msa-calculator-compact__content">
              <p className="sc-msa-calculator-compact__deposit-text">How much to deposit?</p>
              <div className="sc-msa-calculator-compact__box">
                <span className="sc-msa-calculator-compact__currency">HKD</span>
                <input
                  type="text"
                  pattern="[0-9]+"
                  inputMode="numeric"
                  className="sc-msa-calculator-compact__input"
                  aria-label="Deposit Amount"
                />
              </div>
            </div>
            <div className="sc-range-slider sc-range-slider--blue"></div>
          </div>
          <div className="sc-msa-calculator-compact__right sc-msa-calculator-compact__right--blue">
            <div className="sc-msa-calculator-compact__calc-dates">
              Bonus Period:&nbsp;
              <span className="sc-msa-calculator-compact__dates">02/09/2024 - 2/1/2025 </span>
              <br />
              Number of days you can enjoy the Preferential Savings Rate:&nbsp;
              <span className="sc-msa-calculator-compact__days">121</span>&nbsp; Days
            </div>
            <p className="sc-msa-calculator-compact__interest-title">Indicative Interest</p>
            <div className="sc-msa-calculator-compact__output-amount">
              <div className="sc-msa-calculator-compact__interest">
                <span className="sc-msa-calculator-compact__interest-value"></span>
              </div>
              <div className="sc-msa-calculator-compact__interest">
                <span className="sc-msa-calculator-compact__interest-value"></span>
              </div>
            </div>
            <div className="sc-msa-calculator-compact__btn">
              <a href="#" className="sc-btn sc-btn--medium" title="Apply now">
                <span className="text">Apply now</span>
              </a>
            </div>
            <p className="sc-msa-calculator-compact__disclaimer">
              The above interest is for reference only. Account opening is not available on Sundays
              and Public Holidays. The final interest will be calculated based on the account sign
              up date and the total account deposit balance during the Bonus Period.
            </p>
            <p className="sc-msa-calculator-compact__disclaimer hide">
              The above interest is for reference only. Account opening is not available on Sundays
              and Public Holidays. The final interest will be calculated based on the account sign
              up date and the total account deposit balance during the Bonus Period.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
