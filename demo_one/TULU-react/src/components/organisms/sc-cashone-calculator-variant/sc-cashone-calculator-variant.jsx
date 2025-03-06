import React, { useEffect } from 'react';

import ScCashOneCalculatorVariant from './sc-cashone-calculator-variant.js';

export const CashoneCalculatorsVariant = props => {
  useEffect(() => {
    ScCashOneCalculatorVariant.init();
  }, []);
  return (
    <div
      className={`sc-cashone-pl-calc-variant sc-cashone-pl-calc-variant--is-border background-variant ${props.class}`}
      data-cashback-multiplier="3"
      data-apr="2.88"
      data-loan-period="yearly"
      data-eir-fee=""
      data-splide-id="#splide01"
      data-cashback='{
        "restricted": {
          "minAmount": "15000",
          "minTenure": "3",
          "maxAmount": "250000"
        },
        "unrestricted": {
          "maxCashback": "4000",
          "additionalAmount": "100"
        },
        "cny": [
          {
            "minAmount": "0",
            "maxAmount": "14999",
            "minTenure": "3",
            "maxTenure": "-1",
            "splideIndex":"-1",
            "cashbackRate": "0",
            "infoBottom": "<a class=\"nextlevelAmount\" href=\"#\">Click here to enjoy 1% cashback, by increasing the loan amount to S$15,000 &raquo;</a>",
            "infoBelowAmountTenure": "<a class=\"defaultValues\" href=\"#\">Click here to enjoy 1% cashback, by increasing the loan amount to S$15,000 with 3 years tenure or more &raquo;</a>",
            "infoBelowTenure": "<a class=\"defaultValues\" href=\"#\">Click here to enjoy 1%. cashback, by increasing the loan tenure to 3 years or more &raquo;</a>",
            "rightBlockColour": "right--grey",
            "bottomBlockColour": "--blue",
            "bottomBlockImage": "https://av.sc.com/sg/content/images/cashone-calculator-gift-empty.png"
          },
          {
            "minAmount": "15000",
            "maxAmount": "39999",
            "minTenure": "3",
            "maxTenure": "-1",
            "splideIndex":"0",
            "cashbackRate": "1",
            "infoBottom": "<a class=\"nextlevelAmount\">Click here to enjoy 2% cashback by increasing loan amount to S$40,000 with 3 years tenure or more &raquo;</a>",
            "infoBelowAmountTenure": "<a class=\"defaultValues\" href=\"#\">Click to meet the minimum S$15,000 loan amount and tenure of 3 years to enjoy 1% cashback Click now &raquo;</a>",
            "infoBelowTenure": "<a class=\"defaultValues\" href=\"#\">Click here to enjoy 1% cashback, by increasing the loan tenure to 3 years or more &raquo;</a>",
            "rightBlockColour": "default",
            "bottomBlockColour": "--blue",
            "bottomBlockImage": "https://av.sc.com/sg/content/images/cashone-calculator-gift-empty.png"
          },
          {
            "minAmount": "40000",
            "maxAmount": "49999",
            "minTenure": "3",
            "maxTenure": "-1",
            "splideIndex":"1",
            "cashbackRate": "2",
            "infoBottom": "<a class=\"nextlevelAmount\">Click here to enjoy 2.5% cashback by increasing loan amount to S$50,000 with 3 years tenure or more &raquo;</a>",
            "infoBelowAmountTenure": "<a class=\"defaultValues\" href=\"#\">Click to meet the minimum S$15,000 loan amount and tenure of 3 years to enjoy 1% cashback Click now &raquo;</a>",
            "infoBelowTenure": "<a class=\"defaultValues\" href=\"#\">Click here to enjoy 2% cashback, by increasing the loan tenure to 3 years or more &raquo;</a>",
            "rightBlockColour": "right--green-gradiant",
            "bottomBlockColour": "--blue",
            "bottomBlockImage": "https://av.sc.com/sg/content/images/cashone-calculator-gift-empty.png"
          },
          {
            "minAmount": "50000",
            "maxAmount": "250000",
            "minTenure": "3",
            "maxTenure": "-1",
            "splideIndex":"2",
            "cashbackRate": "2.5",
            "infoBottom": "<a class=\"nextlevelAmount\">Congratulations! You will receive 2.5% cashback - our highest possible reward!</a>",
            "infoBelowAmountTenure": "<a class=\"defaultValues\" href=\"#\">Click to meet the minimum S$15,000 loan amount and tenure of 3 years to enjoy 1% cashback Click now &raquo;</a>",
            "infoBelowTenure": "<a class=\"defaultValues\" href=\"#\">Click here to enjoy 2.5% cashback, by increasing the loan tenure to 3 years or more &raquo;</a>",
            "rightBlockColour": "right--blue",
            "bottomBlockColour": "",
            "bottomBlockImage": "https://av.sc.com/sg/content/images/cashone-calculator-gift.png"
          }
        ]
      }'
    >
      <div className="sc-content-wrapper">
        <div className="sc-cashone-pl-calc-variant__container">
          <div className="sc-badge sc-badge--blue">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="14"
              viewBox="0 0 10 14"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10 0V14H0L10 0Z"
                fill="#046162"
              ></path>
            </svg>
            <span className="sc-badge__text">Limited Time Offer</span>
          </div>
          <div className="sc-cashone-pl-calc-variant__left">
            <div className="sc-cashone-pl-calc-variant__slider sc-cashone-pl-calc-variant__slider-main">
              <div className="sc-cashone-pl-calc-variant__content">
                <div className="sc-cashone-pl-calc-variant__box-left">
                  <h3 className="sc-cashone-pl-calc-variant__title">Get loan amount of</h3>
                </div>
                <div className="sc-cashone-pl-calc-variant__box-right">
                  S$
                  <input
                    type="text"
                    pattern="[0-9]+"
                    inputMode="numeric"
                    className="sc-cashone-pl-calc-variant__input sc-cashone-pl-calc-variant__input--amount-value"
                    value="50,000"
                    aria-label="Get loan amount of S$"
                    data-max="250000"
                    data-min="1000"
                    data-default="50,000"
                  />
                </div>
              </div>
              <div className="sc-cashone-pl-calc-variant__prompt-msg hide">
                Please enter amount between 1000 and 250000
              </div>
              <div className="sc-cashone-pl-calc-variant__prompt-amountmsg defaultValues hide">
                Increase to S$15,000 to enjoy Cashback
              </div>
            </div>
            <div className="sc-cashone-pl-calc-variant__slider sc-cashone-pl-calc-variant__slider-main">
              <div className="sc-cashone-pl-calc-variant__loan-amount">
                <div className="sc-amount-box">
                  <input
                    type="radio"
                    className="sc-amount-box__input"
                    id="loan-amount-box-2"
                    tabIndex="-1"
                    name="loan-amount-radio"
                    value="15,000"
                  />
                  <label
                    className="sc-amount-box__input-label"
                    htmlFor="loan-amount-box-2"
                    tabIndex="0"
                  >
                    15,000
                  </label>
                  <span className="sc-tooltip__cashback">1% cashback</span>
                </div>
                <div className="sc-amount-box">
                  <input
                    type="radio"
                    className="sc-amount-box__input"
                    id="loan-amount-box-3"
                    tabIndex="-1"
                    name="loan-amount-radio"
                    value="40,000"
                  />
                  <label
                    className="sc-amount-box__input-label"
                    htmlFor="loan-amount-box-3"
                    tabIndex="0"
                  >
                    40,000
                  </label>
                  <span className="sc-tooltip__cashback">2% cashback</span>
                </div>
                <div className="sc-amount-box">
                  <input
                    type="radio"
                    className="sc-amount-box__input"
                    id="loan-amount-box-4"
                    tabIndex="-1"
                    name="loan-amount-radio"
                    value="50,000"
                  />
                  <label
                    className="sc-amount-box__input-label"
                    htmlFor="loan-amount-box-4"
                    tabIndex="0"
                  >
                    50,000
                  </label>
                  <span className="sc-tooltip__cashback">2.5% cashback</span>
                </div>
              </div>
            </div>
            <div className="sc-cashone-pl-calc-variant__slider sc-cashone-pl-calc-variant__slider-tenor">
              <div className="sc-cashone-pl-calc-variant__content sc-cashone-pl-calc-variant__content-variant">
                <h3 className="sc-cashone-pl-calc-variant__title">Loan period</h3>
              </div>
              <div className="sc-cashone-pl-calc-variant__loan-period">
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
                    1
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
                    2
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
                    3
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
                    4
                  </label>
                </div>
                <div className="sc-radio-box">
                  <input
                    type="radio"
                    className="sc-radio-box__input"
                    id="check-box-5"
                    tabIndex="-1"
                    name="checkbox-radio"
                    checked="checked"
                    value="5"
                  />
                  <label className="sc-radio-box__input-label" htmlFor="check-box-5" tabIndex="0">
                    5
                  </label>
                </div>
              </div>
              <div className="sc-cashone-pl-calc-variant__prompt-tenor defaultValues hide">
                <div className="sc-cashone-pl-calc-variant__prompt-tenormsg">
                  Increase tenure to enjoy cashback
                </div>
              </div>
            </div>
            <div className="sc-cashone-pl-calc-variant__slider sc-cashone-pl-calc-variant__slider-monthlypayment">
              <div className="sc-cashone-pl-calc-variant__content sc-cashone-pl-calc-variant__content-variant">
                <div className="sc-cashone-pl-calc-variant__box">
                  <h3 className="sc-cashone-pl-calc-variant__title">with monthly repayment of</h3>
                </div>
              </div>
            </div>

            <div className="sc-cashone-pl-calc-variant__slider sc-cashone-pl-calc-variant__slider-main">
              <div className="sc-cashone-pl-calc-variant__content">
                <div className="sc-cashone-pl-calc-variant__box sc-cashone-pl-calc-variant__box--variant">
                  <p className="sc-cashone-pl-calc-variant__title sc-cashone-pl-calc-variant__title--variant">
                    <span className="sc-cashone-pl-calc-variant__currency">
                      S$
                      <span className="sc-cashone-pl-calc-variant__amt monthly-repayment">362</span>
                      @
                    </span>
                    <span className="sc-cashone-pl-calc-variant__amt"> </span>
                    <span className="sc-cashone-pl-calc-variant__currency">2.88%p.a.</span>
                  </p>

                  <span className="sc-cashone-pl-calc-variant__eir">
                    (EIR <span className="eir-value">5.68</span>% p.a.)
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
                        EIR is calculated including the first-year annual fee of S$199. Interest
                        rate in your application will be based on your credit profile as determined
                        by us.
                      </span>
                    </span>
                  </span>
                  <p></p>
                </div>
              </div>
            </div>
          </div>
          <div className="sc-cashone-pl-calc-variant__right">
            <div className="sc-cashone-pl-calc-variant__content">
              <div className="sc-cashone-pl-calc-variant__box sc-cashone-pl-calc-variant__box-result">
                <div className="sc-cashone-pl-calc-variant__result-top">
                  <div className="sc-cashone-pl-calc-variant__result-cvp">
                    <div className="sc-cashone-pl-calc-variant__result-cvp-top">
                      <span className="sc-cashone-pl-calc-variant__cashbackrate-block">
                        <span className="sc-cashone-pl-calc-variant__will only-desktop">
                          You ll get&nbsp;
                        </span>
                        <span className="sc-cashone-pl-calc-variant__cashbackrate">1</span>% =
                      </span>
                      <span className="sc-cashone-pl-calc-variant__currency">
                        <sup> S$</sup>
                        <span className="sc-cashone-pl-calc-variant__cashback cashback-amount">
                          400
                        </span>
                      </span>
                    </div>
                    <div className="sc-cashone-pl-calc-variant__result-cvp-btm">cashback</div>
                  </div>
                </div>
                <div className="sc-cashone-pl-calc-variant__result-btns">
                  <ul className="sc-inline-buttons">
                    <li className="sc-inline-buttons__item">
                      <a
                        target="_blank"
                        href="https://ob.sc.com/sg/apply?aggregator_type=pb-pl-cashone&product=280&campaign=9999"
                        title="Apply Now"
                        className="sc-btn sc-btn--medium sc-btn--secondary"
                        rel="noreferrer"
                      >
                        Apply Now
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="sc-cashone-pl-calc-variant__promo-box sc-cashone-pl-calc-variant__promo-box--blue">
              <div className="sc-cashone-pl-calc-variant__promo-icon">
                <img
                  className="sc-cashone-pl-calc-variant__promo-icon-img"
                  src="https://av.sc.com/sg/content/images/cashone-calculator-gift.png"
                  alt=""
                />
              </div>
              <div className="sc-cashone-pl-calc-variant__promo-text">
                Congratulations! You are eligible to get
                <a href="#" title="cashback">
                  cashback
                </a>{' '}
                reward
                <strong>and a chance to win 1 million points.</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
