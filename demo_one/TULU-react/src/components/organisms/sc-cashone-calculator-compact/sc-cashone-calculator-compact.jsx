import React, { useEffect, useState } from 'react';

import ScCashOnePlCalculator from './sc-cashone-calc-compact.js';

export const CashoneCalculators = props => {
  const [key] = useState(0);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://av.sc.com/assets/global/js/vendor/nouislider.min.js';
    script.async = true;
    script.onload = () => {
      ScCashOnePlCalculator.init();
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [key]);

  return (
    <div
      className={`sc-cashone-pl-calc-compact ${props.class}`}
      data-eir-fee="199"
      data-apr="2.88"
      data-loan-period="yearly"
      data-cashback='{"restricted":{"min-amount":"10000","min-tenure":"3"},"unrestricted":{"max-cashback":"4000","additional-amount":"0"},"cny":[{"min-amount":"0","max-amount":"11999","max-tenure":"2","cashback":"0"},{"min-amount":"12000","max-amount":"19999","min-tenure":"3","max-tenure":"-1","cashback":"100"},{"min-amount":"20000","max-amount":"29999","min-tenure":"3","max-tenure":"-1","cashback":"200"},{"min-amount":"30000","max-amount":"-1","min-tenure":"3","max-tenure":"-1","cashback":"300"}]}'
    >
      <div className="sc-content-wrapper">
        <div className="sc-cashone-pl-calc-compact__container">
          <div className="sc-cashone-pl-calc-compact__left">
            <h2 className="sc-cashone-pl-calc-compact__text-content sc-only-mobile">
              I want to borrow
            </h2>
            <div className="sc-cashone-pl-calc-compact__top">
              <div className="sc-heading-gradient">
                <div className="sc-heading-gradient__icon">
                  <svg
                    width="64"
                    height="64"
                    viewBox="0 0 60 60"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <mask id="path-1-inside-1_4340_97599" fill="white">
                      <path d="M49.8883 32.809C51.0748 34.1747 50.6018 35.88 50.0385 36.5366L34.7234 48.8557C34.1667 49.419 33.5163 49.8638 32.8066 50.1666C32.0969 50.4695 31.3405 50.625 30.5773 50.625H12.5161C10.7813 50.625 9.375 49.1074 9.375 47.2354C9.375 45.3634 12.3519 40.027 14.0866 40.027L28.125 40.7812L45.4484 32.6545C47.2041 31.7377 48.7018 31.4433 49.8883 32.809Z"></path>
                      <path d="M9.375 39.6033C9.375 37.7313 10.7813 36.2138 12.5161 36.2138L27.4363 34.5245C29.171 34.5245 30.5773 36.0421 30.5773 37.9141C30.5773 39.7861 29.171 41.3037 27.4363 41.3037L12.5161 42.9929C10.7813 42.9929 9.375 41.4754 9.375 39.6033Z"></path>
                      <path d="M9.375 39.6033H14.0866V47.2354H9.375V39.6033Z"></path>
                    </mask>
                    <path
                      d="M49.8883 32.809C51.0748 34.1747 50.6018 35.88 50.0385 36.5366L34.7234 48.8557C34.1667 49.419 33.5163 49.8638 32.8066 50.1666C32.0969 50.4695 31.3405 50.625 30.5773 50.625H12.5161C10.7813 50.625 9.375 49.1074 9.375 47.2354C9.375 45.3634 12.3519 40.027 14.0866 40.027L28.125 40.7812L45.4484 32.6545C47.2041 31.7377 48.7018 31.4433 49.8883 32.809Z"
                      fill="#0F7AED"
                    ></path>
                    <path
                      d="M9.375 39.6033C9.375 37.7313 10.7813 36.2138 12.5161 36.2138L27.4363 34.5245C29.171 34.5245 30.5773 36.0421 30.5773 37.9141C30.5773 39.7861 29.171 41.3037 27.4363 41.3037L12.5161 42.9929C10.7813 42.9929 9.375 41.4754 9.375 39.6033Z"
                      fill="#0F7AED"
                    ></path>
                    <path d="M9.375 39.6033H14.0866V47.2354H9.375V39.6033Z" fill="#0F7AED"></path>
                    <path
                      d="M50.0385 36.5366L51.5427 38.4066L51.8599 38.0994L50.0385 36.5366ZM14.0866 40.027L14.2154 37.6305L14.0866 37.627V40.027ZM28.125 40.7812L27.9962 43.1778L29.1443 42.954L28.125 40.7812ZM45.4484 32.6545L46.4677 34.8273L46.5594 34.7819L45.4484 32.6545ZM32.8066 50.1666L33.7486 52.374L32.8066 50.1666ZM34.7234 48.8557L33.2192 46.9857L33.1127 47.0713L33.0166 47.1685L34.7234 48.8557ZM12.5161 36.2138V38.6138L12.7861 38.5985L12.5161 36.2138ZM27.4363 34.5245V32.1245L27.1663 32.1397L27.4363 34.5245ZM27.4363 41.3037V38.9037L27.1663 38.9189L27.4363 41.3037ZM12.5161 42.9929V45.3929L12.7861 45.3777L12.5161 42.9929ZM14.0866 39.6033H16.4866V37.2033H14.0866V39.6033ZM14.0866 47.2354V49.6354H16.4866V47.2354H14.0866ZM51.8599 38.0994C52.5209 37.3291 52.9475 36.2226 53.0153 35.0811C53.0879 33.8599 52.7572 32.4518 51.7001 31.235L48.0765 34.383C48.1537 34.4718 48.1855 34.5424 48.2017 34.5941C48.2196 34.6512 48.2284 34.7185 48.2238 34.7964C48.219 34.8777 48.2003 34.9535 48.179 35.009C48.1534 35.0757 48.1474 35.0549 48.2171 34.9737L51.8599 38.0994ZM36.2277 50.7258L51.5427 38.4066L48.5342 34.6665L33.2192 46.9857L36.2277 50.7258ZM12.5161 53.025H30.5773V48.225H12.5161V53.025ZM6.975 47.2354C6.975 50.2576 9.28704 53.025 12.5161 53.025V48.225C12.2756 48.225 11.775 47.9573 11.775 47.2354H6.975ZM14.0866 37.627C13.2707 37.627 12.5989 37.9314 12.1445 38.2061C11.6724 38.4915 11.2585 38.8518 10.9111 39.2036C10.2155 39.9078 9.5717 40.7978 9.03401 41.6751C8.4894 42.5637 8.0004 43.5265 7.63967 44.4261C7.31075 45.2463 6.975 46.2865 6.975 47.2354H11.775C11.775 47.2483 11.8114 46.9195 12.0948 46.2126C12.3465 45.5851 12.7101 44.8628 13.1265 44.1833C13.5499 43.4926 13.9756 42.9315 14.3261 42.5766C14.5017 42.3988 14.605 42.3276 14.6277 42.3139C14.6682 42.2894 14.4689 42.427 14.0866 42.427V37.627ZM28.2538 38.3847L14.2154 37.6305L13.9579 42.4236L27.9962 43.1778L28.2538 38.3847ZM44.4291 30.4817L27.1057 38.6085L29.1443 42.954L46.4677 34.8273L44.4291 30.4817ZM51.7001 31.235C50.6513 30.0278 49.3021 29.4417 47.8253 29.4765C46.5222 29.5071 45.3103 30.0191 44.3375 30.5271L46.5594 34.7819C46.9274 34.5897 47.2281 34.4588 47.4744 34.3768C47.7212 34.2946 47.868 34.2768 47.9383 34.2751C47.9941 34.2738 47.9867 34.2822 47.9587 34.2696C47.9331 34.2581 47.976 34.2673 48.0765 34.383L51.7001 31.235ZM31.8646 47.9592C31.4493 48.1364 31.0131 48.225 30.5773 48.225V53.025C31.668 53.025 32.7445 52.8025 33.7486 52.374L31.8646 47.9592ZM33.0166 47.1685C32.6727 47.5164 32.2804 47.7818 31.8646 47.9592L33.7486 52.374C34.7522 51.9458 35.6606 51.3216 36.4303 50.5429L33.0166 47.1685ZM12.5161 33.8138C9.28704 33.8138 6.975 36.5812 6.975 39.6033H11.775C11.775 38.8815 12.2756 38.6138 12.5161 38.6138V33.8138ZM27.1663 32.1397L12.2461 33.829L12.7861 38.5985L27.7063 36.9093L27.1663 32.1397ZM32.9773 37.9141C32.9773 34.8919 30.6653 32.1245 27.4363 32.1245V36.9245C27.6768 36.9245 28.1773 37.1922 28.1773 37.9141H32.9773ZM27.4363 43.7037C30.6653 43.7037 32.9773 40.9362 32.9773 37.9141H28.1773C28.1773 38.6359 27.6768 38.9037 27.4363 38.9037V43.7037ZM12.7861 45.3777L27.7063 43.6884L27.1663 38.9189L12.2461 40.6082L12.7861 45.3777ZM6.975 39.6033C6.975 42.6255 9.28704 45.3929 12.5161 45.3929V40.5929C12.2756 40.5929 11.775 40.3252 11.775 39.6033H6.975ZM9.375 42.0033H14.0866V37.2033H9.375V42.0033ZM11.6866 39.6033V47.2354H16.4866V39.6033H11.6866ZM14.0866 44.8354H9.375V49.6354H14.0866V44.8354ZM11.775 47.2354V39.6033H6.975V47.2354H11.775Z"
                      fill="#2772C7"
                      mask="url(#path-1-inside-1_4340_97599)"
                    ></path>
                    <path
                      d="M44.0625 22.5C44.0625 26.5712 42.3325 30.2383 39.5675 32.8063L32.7026 36.0267C32.406 33.5267 30.4268 31.5945 28.0294 31.5945L20.1046 32.4917C17.5314 29.9432 15.9375 26.4077 15.9375 22.5C15.9375 14.7335 22.2335 8.4375 30 8.4375C37.7665 8.4375 44.0625 14.7335 44.0625 22.5ZM36.5625 22.5L30 15.9375L23.4375 22.5L30 29.0625L36.5625 22.5Z"
                      fill="#38D200"
                    ></path>
                  </svg>
                </div>
                <div className="sc-heading-gradient__wrapper">
                  <h2 className="sc-heading-gradient__title">CashOne Personal Loan Calculator</h2>
                  <p className="sc-heading-gradient__desc">
                    Fast-track your dreams with upsized cashback
                  </p>
                </div>
              </div>
              <a
                href="https://www.sc.com/sg/borrow/"
                className="sc-btn-link sc-btn-link--blue"
                title="More Loans"
              >
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
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M8.77344 4.75C8.77344 3.23122 10.0046 2 11.5234 2C13.0422 2 14.2734 3.23123 14.2734 4.75C14.2734 6.26877 13.0422 7.5 11.5234 7.5C10.0046 7.5 8.77344 6.26878 8.77344 4.75ZM11.5234 3C10.5569 3 9.77344 3.7835 9.77344 4.75C9.77344 5.7165 10.5569 6.5 11.5234 6.5C12.4899 6.5 13.2734 5.71651 13.2734 4.75C13.2734 3.78349 12.4899 3 11.5234 3Z"
                      fill="black"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M2.27344 11.25C2.27344 9.73126 3.50465 8.5 5.02344 8.5C6.54223 8.5 7.77344 9.73126 7.77344 11.25C7.77344 12.7687 6.54223 14 5.02344 14C3.50465 14 2.27344 12.7687 2.27344 11.25ZM5.02344 9.5C4.05695 9.5 3.27344 10.2835 3.27344 11.25C3.27344 12.2165 4.05695 13 5.02344 13C5.98993 13 6.77344 12.2165 6.77344 11.25C6.77344 10.2835 5.98993 9.5 5.02344 9.5Z"
                      fill="black"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M11.5234 9C11.7996 9 12.0234 9.22386 12.0234 9.5V13C12.0234 13.2761 11.7996 13.5 11.5234 13.5C11.2473 13.5 11.0234 13.2761 11.0234 13V9.5C11.0234 9.22386 11.2473 9 11.5234 9Z"
                      fill="black"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9.27344 11.25C9.27344 10.9739 9.4973 10.75 9.77344 10.75H13.2734C13.5495 10.75 13.7734 10.9739 13.7734 11.25C13.7734 11.5261 13.5495 11.75 13.2734 11.75H9.77344C9.4973 11.75 9.27344 11.5261 9.27344 11.25Z"
                      fill="black"
                    />
                  </svg>
                </div>
                More Loans
              </a>
            </div>
            <div className="sc-cashone-pl-calc-compact__slider sc-cashone-pl-calc-compact__slider-main">
              <div className="sc-cashone-pl-calc-compact__content">
                <h3 className="sc-cashone-pl-calc-compact__title">Loan Amount</h3>
                <div className="sc-cashone-pl-calc-compact__box">
                  <span className="sc-cashone-pl-calc-compact__currency">S$</span>
                  <input
                    type="text"
                    pattern="[0-9]+"
                    inputMode="numeric"
                    className="sc-cashone-pl-calc-compact__input sc-cashone-pl-calc-compact__input--amount-value"
                    value="20000"
                    aria-label="Loan Amount"
                  />
                </div>
              </div>
              <div
                className="sc-range-slider sc-cashone-pl-calc-compact__input--amount sc-range-slider--blue"
                data-max="250000"
                data-min="1000"
                data-default="20000"
                data-step="200"
              >
                <div className="sc-cashone-pl-calc-compact__prompt-msg hide">
                  Please enter amount between 1000 and 250000
                </div>
              </div>
            </div>
            <div className="sc-cashone-pl-calc-compact__slider sc-cashone-pl-calc-compact__slider-main">
              <div className="sc-cashone-pl-calc-compact__content">
                <h3 className="sc-cashone-pl-calc-compact__title">Loan Period</h3>
              </div>
              <div className="sc-cashone-pl-calc-compact__loan-period">
                <div className="sc-radio-box">
                  <input
                    type="radio"
                    className="sc-radio-box__input"
                    id="check-box-1"
                    tabIndex="-1"
                    name="checkbox-radio"
                    value="1"
                  />
                  <label className="sc-radio-box__input-label" htmlFor="check-box-1" tabIndex="0">
                    1 year(s)
                  </label>
                </div>
                <div className="sc-radio-box">
                  <input
                    type="radio"
                    className="sc-radio-box__input"
                    id="check-box-2"
                    tabIndex="-1"
                    name="checkbox-radio"
                    value="2"
                  />
                  <label className="sc-radio-box__input-label" htmlFor="check-box-2" tabIndex="0">
                    2 year(s)
                  </label>
                </div>
                <div className="sc-radio-box">
                  <input
                    type="radio"
                    className="sc-radio-box__input"
                    id="check-box-3"
                    tabIndex="-1"
                    name="checkbox-radio"
                    value="3"
                  />
                  <label className="sc-radio-box__input-label" htmlFor="check-box-3" tabIndex="0">
                    3 year(s)
                  </label>
                </div>
                <div className="sc-radio-box">
                  <input
                    type="radio"
                    className="sc-radio-box__input"
                    id="check-box-4"
                    tabIndex="-1"
                    name="checkbox-radio"
                    value="4"
                  />
                  <label className="sc-radio-box__input-label" htmlFor="check-box-4" tabIndex="0">
                    4 year(s)
                  </label>
                </div>
                <div className="sc-radio-box">
                  <input
                    type="radio"
                    className="sc-radio-box__input"
                    id="check-box-5"
                    tabIndex="-1"
                    name="checkbox-radio"
                    value="5"
                    defaultChecked
                  />
                  <label className="sc-radio-box__input-label" htmlFor="check-box-5" tabIndex="0">
                    5 year(s)
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="sc-cashone-pl-calc-compact__right sc-cashone-pl-calc-compact__right--blue">
            <p className="sc-cashone-pl-calc-compact__result-text sc-only-desktop">
              Calculate Monthly Repayment Loan Amount
            </p>
            <div className="sc-cashone-pl-calc-compact__content">
              <div className="sc-cashone-pl-calc-compact__content-wrapper">
                <div className="sc-cashone-pl-calc-compact__heading">
                  Illustrative Interest Rate
                </div>
                <div className="sc-cashone-pl-calc-compact__desc">
                  (EIR from &nbsp;<span className="eir-value">7.67</span>% p.a.)
                  <span className="sc-tooltip">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.125 1.25C18.131 1.25 23 6.118 23 12.125 23 18.131 18.131 23 12.125 23 6.118 23 1.25 18.131 1.25 12.125S6.118 1.25 12.125 1.25z"
                        stroke="#2772C7"
                        strokeWidth="1.35"
                        strokeMiterlimit="10"
                      ></path>
                      <path d="M11.5 10.292h1v7h-1v-7zm0-4h1v2h-1v-2z" fill="#2772C7"></path>
                    </svg>
                    <span className="sc-tooltip__text">
                      Interest rate in your application will be based on your credit profile as
                      determined by us
                    </span>
                  </span>
                </div>
              </div>
              <div className="sc-cashone-pl-calc-compact__box">
                <span className="sc-cashone-pl-calc-compact__amt apr-rate">3.48</span>
                <sup>%p.a.</sup>
              </div>
            </div>
            <div className="sc-cashone-pl-calc-compact__content">
              <div className="sc-cashone-pl-calc-compact__heading">
                Monthly Repayment
                <span className="sc-tooltip">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.125 1.25C18.131 1.25 23 6.118 23 12.125 23 18.131 18.131 23 12.125 23 6.118 23 1.25 18.131 1.25 12.125S6.118 1.25 12.125 1.25z"
                      stroke="#2772C7"
                      strokeWidth="1.35"
                      strokeMiterlimit="10"
                    ></path>
                    <path d="M11.5 10.292h1v7h-1v-7zm0-4h1v2h-1v-2z" fill="#2772C7"></path>
                  </svg>
                  <span className="sc-tooltip__text">
                    Monthly repayment is illustrative and includes the principal and interest
                    components of the loan
                  </span>
                </span>
              </div>
              <div className="sc-cashone-pl-calc-compact__box sc-cashone-pl-calc-compact__box--no-border">
                <span className="sc-cashone-pl-calc-compact__currency">S$</span>
                <span className="sc-cashone-pl-calc-compact__amt monthly-repayment">391.33</span>
              </div>
            </div>
            <div className="sc-cashone-pl-calc-compact__content">
              <div className="sc-cashone-pl-calc-compact__heading">
                Illustrative Value Of Rewards
                <span className="sc-tooltip">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.125 1.25C18.131 1.25 23 6.118 23 12.125 23 18.131 18.131 23 12.125 23 6.118 23 1.25 18.131 1.25 12.125S6.118 1.25 12.125 1.25z"
                      stroke="#2772C7"
                      strokeWidth="1.35"
                      strokeMiterlimit="10"
                    ></path>
                    <path d="M11.5 10.292h1v7h-1v-7zm0-4h1v2h-1v-2z" fill="#2772C7"></path>
                  </svg>
                  <span className="sc-tooltip__text">
                    Actual cashback amount will be based on the actual interest charged on the first
                    instalment amount. Illustrative Value of Rewards includes additional value of up
                    to S$300 worth of 360° Rewards Points for new clients. T&amp;Cs apply.
                  </span>
                </span>
              </div>
              <div className="sc-cashone-pl-calc-compact__box sc-cashone-pl-calc-compact__box--no-border">
                <span className="sc-cashone-pl-calc-compact__currency sc-cashone-pl-calc-compact__currency--green">
                  S$
                </span>
                <span className="sc-cashone-pl-calc-compact__amt sc-cashone-pl-calc-compact__amt--green cashback-amount">
                  391.33
                </span>
              </div>
            </div>
            <div className="sc-cashone-pl-calc-compact__border sc-only-mobile"></div>
            <div className="sc-cashone-pl-calc-compact__btn">
              <ul className="sc-bnr-buttons">
                <li className="sc-inline-buttons__item">
                  <a
                    href="https://www.sc.com/sg/borrow/loans/cashone/"
                    title="Find Out More"
                    data-context="Cashone Personal Loan - Find Out More"
                    className="sc-btn sc-btn--medium"
                  >
                    <span className="sc-only-desktop">Find Out More</span>
                    <span className="sc-only-mobile">Find Out More</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
