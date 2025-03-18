import React, { useState, useEffect } from 'react';

import ScPersonalInstalmentLoanCalculator from './sc-interest-pl-calc.js';

export const PersonalLoanCalculators = props => {
  const [key] = useState(0);
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://av.sc.com/assets/global/js/vendor/nouislider.min.js';
    script.async = true;
    script.onload = () => {
      ScPersonalInstalmentLoanCalculator.init();
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [key]);

  return (
    <>
      {props.default && (
        <div
          className={`sc-interest-pl-calculator ${props.class}`}
          data-currency="HKD"
          data-rate-details='[{"aprRate":[{"loanAmountMin":5000,"loanAmountMax":200000,"rate":{"12":0.31,"24":0.31,"36":0.31,"48":0.312,"60":0.315},"apr":{"12":7.01,"24":7.22,"36":7.23,"48":7.25,"60":7.26}},{"loanAmountMin":200000,"loanAmountMax":500000,"rate":{"12":0.27,"24":0.27,"36":0.27,"48":0.271,"60":0.273},"apr":{"12":6.09,"24":6.28,"36":6.3,"48":6.3,"60":6.31}},{"loanAmountMin":500000,"loanAmountMax":700000,"rate":{"12":0.23,"24":0.23,"36":0.231,"48":0.232,"60":0.233},"apr":{"12":5.18,"24":5.34,"36":5.39,"48":5.4,"60":5.4}},{"loanAmountMin":700000,"loanAmountMax":1500000,"rate":{"12":0.23,"24":0.23,"36":0.23,"48":0.231,"60":0.232},"apr":{"12":5.18,"24":5.34,"36":5.37,"48":5.38,"60":5.38}},{"loanAmountMin":1500000,"loanAmountMax":-1,"rate":{"12":0.083,"24":0.22,"36":0.22,"48":0.22,"60":0.221},"apr":{"12":1.85,"24":5.11,"36":5.13,"48":5.13,"60":5.13}}],"tenorValues":[12,24,36,48,60]}]'
        >
          <div className="sc-content-wrapper">
            <div className="sc-interest-pl-calculator__box">
              <div className="sc-interest-pl-calculator__box-top">
                <div className="sc-heading-gradient">
                  <div className="sc-heading-gradient__icon">
                    <svg
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      width="64"
                      height="64"
                      viewBox="0 0 64 64"
                    >
                      <title>fx</title>
                      <path
                        fill="#0f7aed"
                        d="M12.079 11.264a4 4 0 015.657 0l20.735 20.735-20.735 20.735a4 4 0 01-5.657-5.657l15.079-15.079-15.079-15.079a4 4 0 010-5.657z"
                      ></path>
                      <path
                        fill="#38d200"
                        d="M35.101 40.55l12.185 12.185a4 4 0 005.657-5.657L40.758 34.893l-5.657 5.657zM40.758 29.107l12.185-12.185a4 4 0 00-5.657-5.657L35.101 23.45l5.657 5.657z"
                      ></path>
                    </svg>
                  </div>
                  <div className="sc-heading-gradient__wrapper">
                    <h2 className="sc-heading-gradient__title">Personal Instalment Loan</h2>
                  </div>
                </div>

                <div className="sc-only-desktop">
                  <a
                    href="https://sc.com/sg/save/"
                    className="sc-btn-link sc-btn-link--blue"
                    title="View More Loans"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="sc-btn-link__icon">
                      <svg
                        width="15"
                        height="11"
                        viewBox="0 0 15 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M1.71622 0.453991C1.32022 0.529991 0.89522 0.863991 0.69722 1.25699C0.52722 1.59299 0.53722 1.30799 0.53722 5.49999C0.53722 9.03999 0.54022 9.29799 0.58222 9.44699C0.71222 9.92099 1.08922 10.329 1.55722 10.504L1.71322 10.562L4.20022 10.57C5.56822 10.574 6.72522 10.571 6.77022 10.562C6.87122 10.544 7.04522 10.392 7.09122 10.282C7.11401 10.2136 7.1255 10.142 7.12522 10.07C7.12572 9.98915 7.10571 9.9095 7.06706 9.8385C7.02841 9.7675 6.97238 9.70745 6.90422 9.66399L6.79622 9.58799L4.34222 9.57499C2.12022 9.56399 1.88022 9.55899 1.81322 9.52099C1.71401 9.46372 1.63425 9.37804 1.58422 9.27499C1.54022 9.19199 1.53822 9.08999 1.53822 7.08799V4.98799L3.91322 4.97499C6.09422 4.96399 6.29422 4.95899 6.36622 4.91999C6.45355 4.87139 6.52431 4.79774 6.56938 4.70854C6.61444 4.61933 6.63174 4.51867 6.61904 4.41954C6.60634 4.32041 6.56422 4.22736 6.49813 4.1524C6.43203 4.07744 6.34498 4.024 6.24822 3.99899C6.19522 3.98399 5.27122 3.97499 3.84222 3.97499H1.52222L1.53022 2.89399C1.53722 1.83399 1.53922 1.80999 1.59322 1.70899C1.65566 1.58611 1.76426 1.49298 1.89522 1.44999C1.96022 1.43099 3.55122 1.42499 7.20022 1.42999L12.4132 1.43799L12.5142 1.50699C12.5702 1.54499 12.6442 1.62299 12.6772 1.68199C12.7322 1.77899 12.7392 1.82199 12.7512 2.19999C12.7632 2.58499 12.7682 2.61899 12.8252 2.70499C12.8653 2.76876 12.9193 2.82267 12.9831 2.86271C13.0469 2.90274 13.1189 2.92788 13.1938 2.93624C13.2686 2.9446 13.3444 2.93597 13.4155 2.911C13.4865 2.88602 13.551 2.84534 13.6042 2.79199C13.7332 2.66299 13.7502 2.59099 13.7502 2.16799C13.7502 1.69399 13.7242 1.54499 13.5952 1.27499C13.4662 1.00399 13.1772 0.704991 12.9242 0.581991C12.5822 0.414991 12.9822 0.424991 7.13822 0.427991C3.98222 0.429991 1.78822 0.439991 1.71622 0.453991ZM12.3032 3.51399C11.9836 3.57476 11.6832 3.71124 11.4272 3.91199C11.3502 3.97199 11.0442 4.26599 10.7472 4.56599C10.2462 5.07199 10.2042 5.12099 10.1812 5.22999C10.0942 5.64599 10.4802 5.97399 10.8672 5.81199C10.9232 5.78899 11.1732 5.56199 11.5232 5.21499C11.8802 4.86199 12.1292 4.63499 12.2002 4.59899C12.4472 4.47499 12.7012 4.44499 12.9582 4.51199C13.1474 4.55405 13.3189 4.6536 13.4492 4.79699C13.7792 5.13099 13.8542 5.58499 13.6512 6.01899C13.5852 6.15799 13.4962 6.26099 13.0162 6.74699C12.7082 7.05799 12.4422 7.34099 12.4242 7.37499C12.4012 7.44082 12.3904 7.51028 12.3922 7.57999C12.3926 7.66188 12.4131 7.74242 12.452 7.81453C12.4908 7.88663 12.5467 7.9481 12.6149 7.99353C12.683 8.03895 12.7613 8.06695 12.8427 8.07505C12.9242 8.08315 13.0065 8.07111 13.0822 8.03999C13.1262 8.02099 13.4342 7.73199 13.7652 7.39699C14.4272 6.72799 14.5422 6.57399 14.6632 6.19299C14.7756 5.85025 14.7966 5.4841 14.724 5.13078C14.6514 4.77745 14.4878 4.44921 14.2494 4.17855C14.011 3.90789 13.706 3.7042 13.3646 3.58764C13.0233 3.47108 12.6574 3.44569 12.3032 3.51399ZM12.1122 5.46399C12.0702 5.48399 11.5002 6.03799 10.8452 6.69399C9.60922 7.93299 9.60022 7.94299 9.60022 8.13799C9.60022 8.31199 9.73922 8.52699 9.89322 8.59099C10.0278 8.63465 10.1728 8.6343 10.3072 8.58999C10.3532 8.56999 10.9022 8.03799 11.5902 7.34599C12.8572 6.07299 12.8262 6.10999 12.8242 5.89099C12.8154 5.79752 12.7824 5.70794 12.7286 5.631C12.6748 5.55406 12.602 5.49238 12.5172 5.45199C12.3842 5.41423 12.2428 5.41842 12.1122 5.46399ZM9.33822 6.02299C9.22422 6.07599 8.15422 7.14299 8.03222 7.32499C7.86998 7.56732 7.75684 7.83912 7.69922 8.12499C7.66122 8.32399 7.66622 8.73699 7.71022 8.94699C7.85822 9.65399 8.39822 10.247 9.10822 10.479C9.34922 10.558 9.38222 10.562 9.72522 10.562C10.0272 10.562 10.1202 10.553 10.2822 10.506C10.7422 10.373 10.9372 10.231 11.6542 9.50799C12.2712 8.88599 12.2992 8.84599 12.2632 8.60999C12.2202 8.31799 11.8672 8.11899 11.5842 8.22599C11.5462 8.24099 11.2622 8.50299 10.9512 8.80899C10.6412 9.11499 10.3372 9.39399 10.2752 9.42999C9.55922 9.84299 8.67022 9.33499 8.67322 8.51399C8.67422 8.29799 8.71622 8.12399 8.80422 7.97899C8.83422 7.92799 9.10822 7.63399 9.41322 7.32499C9.86022 6.87099 9.97622 6.73999 10.0122 6.64399C10.046 6.5519 10.0518 6.45186 10.0287 6.35651C10.0056 6.26116 9.95482 6.1748 9.88268 6.10833C9.81054 6.04186 9.7203 5.99827 9.62339 5.98308C9.52648 5.96789 9.42724 5.98178 9.33822 6.02299Z"
                          fill="black"
                        ></path>
                      </svg>
                    </div>
                    View More Loans
                  </a>
                </div>
              </div>
              <div className="sc-interest-pl-calculator__slider-main">
                <div className="sc-interest-pl-calculator__row">
                  <div className="sc-interest-pl-calculator__error hide">
                    Pleas enter minimum amount HKD5000
                  </div>
                  <div className="sc-interest-pl-calculator__desc">Loan Amount</div>
                  <div className="sc-interest-pl-calculator__input-box">
                    <div className="sc-interest-pl-calculator__input-text">HKD</div>
                    <input
                      type="text"
                      aria-label="Loan Amount"
                      className="sc-interest-pl-calculator__input sc-interest-pl-calculator__input--amount-value"
                      data-slider-src="sc-interest-pl-calculator__slider-amount"
                      data-number-src="sc-interest-pl-calculator__input--number"
                      value="20000"
                    />
                    <input
                      type="hidden"
                      aria-label="Loan Amount"
                      className="sc-interest-pl-calculator__input sc-interest-pl-calculator__input--number"
                      data-slider-src="sc-interest-pl-calculator__slider-amount"
                      tabIndex="-1"
                      value="20000"
                    />
                  </div>
                </div>
                <div
                  className="sc-range-slider sc-interest-pl-calculator__input--amount sc-range-slider--blue"
                  data-input-src="sc-interest-pl-calculator__input--amount"
                  data-max="1000000"
                  data-min="20000"
                  data-default="20000"
                  data-step="100"
                  id="sc-interest-pl-calculator__slider-amount"
                ></div>
              </div>
              <div className="sc-interest-pl-calculator__slider-main">
                <div className="sc-interest-pl-calculator__row">
                  <div className="sc-interest-pl-calculator__desc">Loan Period</div>
                  <div className="sc-interest-pl-calculator__input-box sc-interest-pl-calculator__input-box--mod">
                    <select
                      className="sc-interest-pl-calculator__input sc-interest-pl-calculator__slider-tenor-value"
                      aria-label="Loan Period"
                      data-slider-src="sc-interest-pl-calculator__slider-tenor"
                    >
                      <option value disabled>
                        Select Months
                      </option>
                      <option value="12">12 month(s)</option>
                      <option value="24">24 month(s)</option>
                      <option value="36">36 month(s)</option>
                      <option value="48">48 month(s)</option>
                      <option value="60">60 month(s)</option>
                    </select>
                  </div>
                </div>
                <div
                  className="sc-range-slider sc-interest-pl-calculator__slider-tenor sc-range-slider--blue"
                  data-input-src="sc-interest-pl-calculator__input--tenor"
                  data-max="60"
                  data-min="12"
                  data-default="12"
                  data-step="12"
                  data-tenor-type="month"
                  id="slider-tenor"
                ></div>
              </div>
            </div>
            <div className="sc-interest-pl-calculator__result">
              <h2 className="sc-interest-pl-calculator__title">Calculate Your Monthly Repayment</h2>
              <div className="sc-interest-pl-calculator__row">
                <div className="sc-interest-pl-calculator__desc">
                  Annualised Percentage Rate as low as
                </div>
                <div className="sc-interest-pl-calculator__result-value sc-interest-pl-calculator__apr">
                  3.48
                  <span>% p.a.</span>
                </div>
              </div>

              <div className="sc-interest-pl-calculator__row">
                <div className="sc-interest-pl-calculator__result-text">
                  Monthly Repayment as low as
                </div>
                <div className="sc-interest-pl-calculator__result-value sc-interest-pl-calculator__payment">
                  <span>HKD</span> 391.33
                </div>
              </div>
              <div className="sc-interest-pl-calculator__disclaimer">
                <p>
                  Note: Monthly Repayment and Annualised Percentage Rate displayed here are for
                  reference only and are subject to credit approval
                </p>
              </div>
              <ul className="sc-inline-buttons">
                <li className="sc-inline-buttons__item">
                  <a
                    href="https://www.sc.com/sg/borrow/loans/cashone/?intcid=web_listing-sc_com_widget-homepg1-staticmedia_others-sng-homepage_new-cashone-acquisition-sc_com_organic-sg-en"
                    title="AXS Location  &#8211; Orchard MRT"
                    data-context="Calculator CTA"
                    className="sc-btn sc-btn--medium"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="sc-only-desktop">AXS Location &#8211; Orchard MRT</span>
                    <span className="sc-only-mobile">AXS Location</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
      {props.withcvp && (
        <div className="sc-product-info sc-product-info--reverse sc-product-info--calculator">
          <div className="sc-content-wrapper">
            <div className="sc-product-info__container">
              <h2 className="sc-product-info__text-content sc-only-mobile">
                Personal Instalment Loan
              </h2>
              <div className="sc-product-info__left sc-pil-calculator-hk">
                <div
                  className="sc-interest-pl-calculator"
                  data-currency="HKD"
                  data-rate-details='[{"aprRate":[{"loanAmountMin":5000,"loanAmountMax":200000,"rate":{"12":0.31,"24":0.31,"36":0.31,"48":0.312,"60":0.315},"apr":{"12":7.01,"24":7.22,"36":7.23,"48":7.25,"60":7.26}},{"loanAmountMin":200000,"loanAmountMax":500000,"rate":{"12":0.27,"24":0.27,"36":0.27,"48":0.271,"60":0.273},"apr":{"12":6.09,"24":6.28,"36":6.3,"48":6.3,"60":6.31}},{"loanAmountMin":500000,"loanAmountMax":700000,"rate":{"12":0.23,"24":0.23,"36":0.231,"48":0.232,"60":0.233},"apr":{"12":5.18,"24":5.34,"36":5.39,"48":5.4,"60":5.4}},{"loanAmountMin":700000,"loanAmountMax":1500000,"rate":{"12":0.23,"24":0.23,"36":0.23,"48":0.231,"60":0.232},"apr":{"12":5.18,"24":5.34,"36":5.37,"48":5.38,"60":5.38}},{"loanAmountMin":1500000,"loanAmountMax":-1,"rate":{"12":0.083,"24":0.22,"36":0.22,"48":0.22,"60":0.221},"apr":{"12":1.85,"24":5.11,"36":5.13,"48":5.13,"60":5.13}}],"tenorValues":[12,24,36,48,60]}]'
                >
                  <div className="sc-interest-pl-calculator__box">
                    <h2 className="sc-interest-pl-calculator__title">
                      Calculate Your Monthly Repayment
                    </h2>
                    <div className="sc-interest-pl-calculator__slider-main">
                      <div className="sc-interest-pl-calculator__row">
                        <div className="sc-interest-pl-calculator__desc">Loan Amount</div>
                        <div className="sc-interest-pl-calculator__input-box">
                          <div className="sc-interest-pl-calculator__input-text">HKD</div>
                          <input
                            type="text"
                            aria-label="Loan Amount"
                            className="sc-interest-pl-calculator__input sc-interest-pl-calculator__input--amount-value"
                            data-slider-src="sc-interest-pl-calculator__slider-amount"
                            data-number-src="sc-interest-pl-calculator__input--number"
                            tabIndex="-1"
                            value="20000"
                          />
                          <input
                            type="hidden"
                            aria-label="Loan Amount"
                            className="sc-interest-pl-calculator__input sc-interest-pl-calculator__input--number"
                            data-slider-src="sc-interest-pl-calculator__slider-amount"
                            tabIndex="-1"
                            value="20000"
                          />
                          <div className="sc-interest-pl-calculator__error hide">
                            Pleas enter minimum amount HKD5000
                          </div>
                        </div>
                      </div>
                      <div
                        className="sc-range-slider sc-interest-pl-calculator__input--amount sc-range-slider--blue"
                        data-input-src="sc-interest-pl-calculator__input--amount"
                        data-max="1000000"
                        data-min="20000"
                        data-default="20000"
                        data-step="100"
                        id="sc-interest-pl-calculator__slider-amount"
                      ></div>
                    </div>
                    <div className="sc-interest-pl-calculator__slider-main">
                      <div className="sc-interest-pl-calculator__row">
                        <div className="sc-interest-pl-calculator__desc">Loan Period</div>
                        <div className="sc-interest-pl-calculator__input-box sc-interest-pl-calculator__input-box--mod">
                          <select
                            className="sc-interest-pl-calculator__input sc-interest-pl-calculator__slider-tenor-value"
                            aria-label="Loan Period"
                            data-slider-src="sc-interest-pl-calculator__slider-tenor"
                          >
                            <option value disabled>
                              Select Months
                            </option>
                            <option value="12">12 month(s)</option>
                            <option value="24">24 month(s)</option>
                            <option value="36">36 month(s)</option>
                            <option value="48">48 month(s)</option>
                            <option value="60">60 month(s)</option>
                          </select>
                        </div>
                      </div>
                      <div
                        className="sc-range-slider sc-interest-pl-calculator__slider-tenor sc-range-slider--blue"
                        data-input-src="sc-interest-pl-calculator__input--tenor"
                        data-max="60"
                        data-min="12"
                        data-default="12"
                        data-step="12"
                        data-tenor-type="month"
                        id="slider-tenor"
                      ></div>
                    </div>
                    <div className="sc-interest-pl-calculator__illustrate">
                      <div className="sc-interest-pl-calculator__row">
                        <div className="sc-interest-pl-calculator__desc">
                          Annualised Percentage Rate as low as
                        </div>
                        <div className="sc-interest-pl-calculator__result-value sc-interest-pl-calculator__apr">
                          3.48
                          <span>% p.a.</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="sc-interest-pl-calculator__result">
                    <div className="sc-interest-pl-calculator__row">
                      <div className="sc-interest-pl-calculator__result-text">
                        Monthly Repayment as low as
                      </div>
                      <div className="sc-interest-pl-calculator__result-value sc-interest-pl-calculator__payment">
                        <span>HKD</span> 391.33
                      </div>
                    </div>
                    <div className="sc-interest-pl-calculator__disclaimer">
                      <p>
                        Note: Monthly Repayment and Annualised Percentage Rate displayed here are
                        for reference only and are subject to credit approval
                      </p>
                    </div>
                    <ul className="sc-inline-buttons">
                      <li className="sc-inline-buttons__item">
                        <a
                          href="https://www.sc.com/sg/borrow/loans/cashone/?intcid=web_listing-sc_com_widget-homepg1-staticmedia_others-sng-homepage_new-cashone-acquisition-sc_com_organic-sg-en"
                          title="AXS Location  &#8211; Orchard MRT"
                          data-context="Calculator CTA"
                          className="sc-btn sc-btn--medium"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <span className="sc-only-desktop">AXS Location &#8211; Orchard MRT</span>
                          <span className="sc-only-mobile">AXS Location</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="sc-product-info__right">
                <div className="sc-tile-info">
                  <div className="sc-tile-info__top">
                    <div className="sc-heading-gradient">
                      <div className="sc-heading-gradient__icon">
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          width="64"
                          height="64"
                          viewBox="0 0 64 64"
                        >
                          <title>fx</title>
                          <path
                            fill="#0f7aed"
                            d="M12.079 11.264a4 4 0 015.657 0l20.735 20.735-20.735 20.735a4 4 0 01-5.657-5.657l15.079-15.079-15.079-15.079a4 4 0 010-5.657z"
                          ></path>
                          <path
                            fill="#38d200"
                            d="M35.101 40.55l12.185 12.185a4 4 0 005.657-5.657L40.758 34.893l-5.657 5.657zM40.758 29.107l12.185-12.185a4 4 0 00-5.657-5.657L35.101 23.45l5.657 5.657z"
                          ></path>
                        </svg>
                      </div>
                      <div className="sc-heading-gradient__wrapper">
                        <h2 className="sc-heading-gradient__title">Personal Instalment Loan</h2>
                      </div>
                    </div>
                    <div className="sc-only-desktop">
                      <a
                        href="https://sc.com/sg/save/"
                        className="sc-btn-link sc-btn-link--blue"
                        title="View All accounts"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <div className="sc-btn-link__icon">
                          <svg
                            width="15"
                            height="11"
                            viewBox="0 0 15 11"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M1.71622 0.453991C1.32022 0.529991 0.89522 0.863991 0.69722 1.25699C0.52722 1.59299 0.53722 1.30799 0.53722 5.49999C0.53722 9.03999 0.54022 9.29799 0.58222 9.44699C0.71222 9.92099 1.08922 10.329 1.55722 10.504L1.71322 10.562L4.20022 10.57C5.56822 10.574 6.72522 10.571 6.77022 10.562C6.87122 10.544 7.04522 10.392 7.09122 10.282C7.11401 10.2136 7.1255 10.142 7.12522 10.07C7.12572 9.98915 7.10571 9.9095 7.06706 9.8385C7.02841 9.7675 6.97238 9.70745 6.90422 9.66399L6.79622 9.58799L4.34222 9.57499C2.12022 9.56399 1.88022 9.55899 1.81322 9.52099C1.71401 9.46372 1.63425 9.37804 1.58422 9.27499C1.54022 9.19199 1.53822 9.08999 1.53822 7.08799V4.98799L3.91322 4.97499C6.09422 4.96399 6.29422 4.95899 6.36622 4.91999C6.45355 4.87139 6.52431 4.79774 6.56938 4.70854C6.61444 4.61933 6.63174 4.51867 6.61904 4.41954C6.60634 4.32041 6.56422 4.22736 6.49813 4.1524C6.43203 4.07744 6.34498 4.024 6.24822 3.99899C6.19522 3.98399 5.27122 3.97499 3.84222 3.97499H1.52222L1.53022 2.89399C1.53722 1.83399 1.53922 1.80999 1.59322 1.70899C1.65566 1.58611 1.76426 1.49298 1.89522 1.44999C1.96022 1.43099 3.55122 1.42499 7.20022 1.42999L12.4132 1.43799L12.5142 1.50699C12.5702 1.54499 12.6442 1.62299 12.6772 1.68199C12.7322 1.77899 12.7392 1.82199 12.7512 2.19999C12.7632 2.58499 12.7682 2.61899 12.8252 2.70499C12.8653 2.76876 12.9193 2.82267 12.9831 2.86271C13.0469 2.90274 13.1189 2.92788 13.1938 2.93624C13.2686 2.9446 13.3444 2.93597 13.4155 2.911C13.4865 2.88602 13.551 2.84534 13.6042 2.79199C13.7332 2.66299 13.7502 2.59099 13.7502 2.16799C13.7502 1.69399 13.7242 1.54499 13.5952 1.27499C13.4662 1.00399 13.1772 0.704991 12.9242 0.581991C12.5822 0.414991 12.9822 0.424991 7.13822 0.427991C3.98222 0.429991 1.78822 0.439991 1.71622 0.453991ZM12.3032 3.51399C11.9836 3.57476 11.6832 3.71124 11.4272 3.91199C11.3502 3.97199 11.0442 4.26599 10.7472 4.56599C10.2462 5.07199 10.2042 5.12099 10.1812 5.22999C10.0942 5.64599 10.4802 5.97399 10.8672 5.81199C10.9232 5.78899 11.1732 5.56199 11.5232 5.21499C11.8802 4.86199 12.1292 4.63499 12.2002 4.59899C12.4472 4.47499 12.7012 4.44499 12.9582 4.51199C13.1474 4.55405 13.3189 4.6536 13.4492 4.79699C13.7792 5.13099 13.8542 5.58499 13.6512 6.01899C13.5852 6.15799 13.4962 6.26099 13.0162 6.74699C12.7082 7.05799 12.4422 7.34099 12.4242 7.37499C12.4012 7.44082 12.3904 7.51028 12.3922 7.57999C12.3926 7.66188 12.4131 7.74242 12.452 7.81453C12.4908 7.88663 12.5467 7.9481 12.6149 7.99353C12.683 8.03895 12.7613 8.06695 12.8427 8.07505C12.9242 8.08315 13.0065 8.07111 13.0822 8.03999C13.1262 8.02099 13.4342 7.73199 13.7652 7.39699C14.4272 6.72799 14.5422 6.57399 14.6632 6.19299C14.7756 5.85025 14.7966 5.4841 14.724 5.13078C14.6514 4.77745 14.4878 4.44921 14.2494 4.17855C14.011 3.90789 13.706 3.7042 13.3646 3.58764C13.0233 3.47108 12.6574 3.44569 12.3032 3.51399ZM12.1122 5.46399C12.0702 5.48399 11.5002 6.03799 10.8452 6.69399C9.60922 7.93299 9.60022 7.94299 9.60022 8.13799C9.60022 8.31199 9.73922 8.52699 9.89322 8.59099C10.0278 8.63465 10.1728 8.6343 10.3072 8.58999C10.3532 8.56999 10.9022 8.03799 11.5902 7.34599C12.8572 6.07299 12.8262 6.10999 12.8242 5.89099C12.8154 5.79752 12.7824 5.70794 12.7286 5.631C12.6748 5.55406 12.602 5.49238 12.5172 5.45199C12.3842 5.41423 12.2428 5.41842 12.1122 5.46399ZM9.33822 6.02299C9.22422 6.07599 8.15422 7.14299 8.03222 7.32499C7.86998 7.56732 7.75684 7.83912 7.69922 8.12499C7.66122 8.32399 7.66622 8.73699 7.71022 8.94699C7.85822 9.65399 8.39822 10.247 9.10822 10.479C9.34922 10.558 9.38222 10.562 9.72522 10.562C10.0272 10.562 10.1202 10.553 10.2822 10.506C10.7422 10.373 10.9372 10.231 11.6542 9.50799C12.2712 8.88599 12.2992 8.84599 12.2632 8.60999C12.2202 8.31799 11.8672 8.11899 11.5842 8.22599C11.5462 8.24099 11.2622 8.50299 10.9512 8.80899C10.6412 9.11499 10.3372 9.39399 10.2752 9.42999C9.55922 9.84299 8.67022 9.33499 8.67322 8.51399C8.67422 8.29799 8.71622 8.12399 8.80422 7.97899C8.83422 7.92799 9.10822 7.63399 9.41322 7.32499C9.86022 6.87099 9.97622 6.73999 10.0122 6.64399C10.046 6.5519 10.0518 6.45186 10.0287 6.35651C10.0056 6.26116 9.95482 6.1748 9.88268 6.10833C9.81054 6.04186 9.7203 5.99827 9.62339 5.98308C9.52648 5.96789 9.42724 5.98178 9.33822 6.02299Z"
                              fill="black"
                            ></path>
                          </svg>
                        </div>
                        View All accounts
                      </a>
                    </div>
                  </div>
                  <div className="sc-tile-info__heading">Personal Instalment Loan</div>
                  <div className="sc-tile-info__content-wrapper sc-tile-info__content-wrapper--greybg">
                    <div className="sc-cvp">
                      <div className="sc-cvp__col">
                        <p className="sc-cvp__top">Up to</p>
                        <p className="sc-cvp__middle">
                          <strong>7.68%</strong> pa
                        </p>
                        <p className="sc-cvp__bottom">bonus interest on your first S$100,000</p>
                      </div>
                    </div>
                    <div className="sc-cvp">
                      <div className="sc-cvp__col">
                        <p className="sc-cvp__top">Up to</p>
                        <p className="sc-cvp__middle">
                          <strong>S$668</strong>
                        </p>
                        <p className="sc-cvp__bottom">worth of cashback when you sign up</p>
                      </div>
                    </div>
                    <div className="sc-cvp">
                      <div className="sc-cvp__col">
                        <p className="sc-cvp__top">Apply Now</p>
                        <p className="sc-cvp__middle">
                          <strong>Instant</strong>
                        </p>
                        <p className="sc-cvp__bottom">Account Opening with MyInfo</p>
                      </div>
                    </div>
                    <div className="sc-cvp">
                      <div className="sc-cvp__col">
                        <p className="sc-cvp__top">Apply Now</p>
                        <p className="sc-cvp__middle">
                          <strong>Instant</strong>
                        </p>
                        <p className="sc-cvp__bottom">Account Opening with MyInfo</p>
                      </div>
                    </div>
                  </div>
                  <ul className="sc-inline-buttons">
                    <li className="sc-inline-buttons__item">
                      <a
                        href="#"
                        title="Trade now"
                        data-context="Banner CTA"
                        className="sc-btn sc-btn--medium"
                      >
                        <span className="sc-only-desktop">Trade now</span>
                        <span className="sc-only-mobile">Trade now</span>
                      </a>
                    </li>
                  </ul>
                  <div className="sc-only-mobile">
                    <a
                      href="https://sc.com/sg/save/"
                      className="sc-btn-link sc-btn-link--blue"
                      title="View All accounts"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="sc-btn-link__icon">
                        <svg
                          width="15"
                          height="11"
                          viewBox="0 0 15 11"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M1.71622 0.453991C1.32022 0.529991 0.89522 0.863991 0.69722 1.25699C0.52722 1.59299 0.53722 1.30799 0.53722 5.49999C0.53722 9.03999 0.54022 9.29799 0.58222 9.44699C0.71222 9.92099 1.08922 10.329 1.55722 10.504L1.71322 10.562L4.20022 10.57C5.56822 10.574 6.72522 10.571 6.77022 10.562C6.87122 10.544 7.04522 10.392 7.09122 10.282C7.11401 10.2136 7.1255 10.142 7.12522 10.07C7.12572 9.98915 7.10571 9.9095 7.06706 9.8385C7.02841 9.7675 6.97238 9.70745 6.90422 9.66399L6.79622 9.58799L4.34222 9.57499C2.12022 9.56399 1.88022 9.55899 1.81322 9.52099C1.71401 9.46372 1.63425 9.37804 1.58422 9.27499C1.54022 9.19199 1.53822 9.08999 1.53822 7.08799V4.98799L3.91322 4.97499C6.09422 4.96399 6.29422 4.95899 6.36622 4.91999C6.45355 4.87139 6.52431 4.79774 6.56938 4.70854C6.61444 4.61933 6.63174 4.51867 6.61904 4.41954C6.60634 4.32041 6.56422 4.22736 6.49813 4.1524C6.43203 4.07744 6.34498 4.024 6.24822 3.99899C6.19522 3.98399 5.27122 3.97499 3.84222 3.97499H1.52222L1.53022 2.89399C1.53722 1.83399 1.53922 1.80999 1.59322 1.70899C1.65566 1.58611 1.76426 1.49298 1.89522 1.44999C1.96022 1.43099 3.55122 1.42499 7.20022 1.42999L12.4132 1.43799L12.5142 1.50699C12.5702 1.54499 12.6442 1.62299 12.6772 1.68199C12.7322 1.77899 12.7392 1.82199 12.7512 2.19999C12.7632 2.58499 12.7682 2.61899 12.8252 2.70499C12.8653 2.76876 12.9193 2.82267 12.9831 2.86271C13.0469 2.90274 13.1189 2.92788 13.1938 2.93624C13.2686 2.9446 13.3444 2.93597 13.4155 2.911C13.4865 2.88602 13.551 2.84534 13.6042 2.79199C13.7332 2.66299 13.7502 2.59099 13.7502 2.16799C13.7502 1.69399 13.7242 1.54499 13.5952 1.27499C13.4662 1.00399 13.1772 0.704991 12.9242 0.581991C12.5822 0.414991 12.9822 0.424991 7.13822 0.427991C3.98222 0.429991 1.78822 0.439991 1.71622 0.453991ZM12.3032 3.51399C11.9836 3.57476 11.6832 3.71124 11.4272 3.91199C11.3502 3.97199 11.0442 4.26599 10.7472 4.56599C10.2462 5.07199 10.2042 5.12099 10.1812 5.22999C10.0942 5.64599 10.4802 5.97399 10.8672 5.81199C10.9232 5.78899 11.1732 5.56199 11.5232 5.21499C11.8802 4.86199 12.1292 4.63499 12.2002 4.59899C12.4472 4.47499 12.7012 4.44499 12.9582 4.51199C13.1474 4.55405 13.3189 4.6536 13.4492 4.79699C13.7792 5.13099 13.8542 5.58499 13.6512 6.01899C13.5852 6.15799 13.4962 6.26099 13.0162 6.74699C12.7082 7.05799 12.4422 7.34099 12.4242 7.37499C12.4012 7.44082 12.3904 7.51028 12.3922 7.57999C12.3926 7.66188 12.4131 7.74242 12.452 7.81453C12.4908 7.88663 12.5467 7.9481 12.6149 7.99353C12.683 8.03895 12.7613 8.06695 12.8427 8.07505C12.9242 8.08315 13.0065 8.07111 13.0822 8.03999C13.1262 8.02099 13.4342 7.73199 13.7652 7.39699C14.4272 6.72799 14.5422 6.57399 14.6632 6.19299C14.7756 5.85025 14.7966 5.4841 14.724 5.13078C14.6514 4.77745 14.4878 4.44921 14.2494 4.17855C14.011 3.90789 13.706 3.7042 13.3646 3.58764C13.0233 3.47108 12.6574 3.44569 12.3032 3.51399ZM12.1122 5.46399C12.0702 5.48399 11.5002 6.03799 10.8452 6.69399C9.60922 7.93299 9.60022 7.94299 9.60022 8.13799C9.60022 8.31199 9.73922 8.52699 9.89322 8.59099C10.0278 8.63465 10.1728 8.6343 10.3072 8.58999C10.3532 8.56999 10.9022 8.03799 11.5902 7.34599C12.8572 6.07299 12.8262 6.10999 12.8242 5.89099C12.8154 5.79752 12.7824 5.70794 12.7286 5.631C12.6748 5.55406 12.602 5.49238 12.5172 5.45199C12.3842 5.41423 12.2428 5.41842 12.1122 5.46399ZM9.33822 6.02299C9.22422 6.07599 8.15422 7.14299 8.03222 7.32499C7.86998 7.56732 7.75684 7.83912 7.69922 8.12499C7.66122 8.32399 7.66622 8.73699 7.71022 8.94699C7.85822 9.65399 8.39822 10.247 9.10822 10.479C9.34922 10.558 9.38222 10.562 9.72522 10.562C10.0272 10.562 10.1202 10.553 10.2822 10.506C10.7422 10.373 10.9372 10.231 11.6542 9.50799C12.2712 8.88599 12.2992 8.84599 12.2632 8.60999C12.2202 8.31799 11.8672 8.11899 11.5842 8.22599C11.5462 8.24099 11.2622 8.50299 10.9512 8.80899C10.6412 9.11499 10.3372 9.39399 10.2752 9.42999C9.55922 9.84299 8.67022 9.33499 8.67322 8.51399C8.67422 8.29799 8.71622 8.12399 8.80422 7.97899C8.83422 7.92799 9.10822 7.63399 9.41322 7.32499C9.86022 6.87099 9.97622 6.73999 10.0122 6.64399C10.046 6.5519 10.0518 6.45186 10.0287 6.35651C10.0056 6.26116 9.95482 6.1748 9.88268 6.10833C9.81054 6.04186 9.7203 5.99827 9.62339 5.98308C9.52648 5.96789 9.42724 5.98178 9.33822 6.02299Z"
                            fill="black"
                          ></path>
                        </svg>
                      </div>
                      View All accounts
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
