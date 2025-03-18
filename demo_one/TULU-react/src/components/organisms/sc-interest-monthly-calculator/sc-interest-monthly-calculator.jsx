import React from 'react';

export const InterestMonthlyCalculators = props => {
  return (
    <div
      className={`sc-interest-monthly-calc ${props.className}`}
      data-currency="S$"
      data-calculator-obj='{"rates":["3.35","3.40","3.50"],"numberOfDays":[31,30,31]}'
    >
      <div className="sc-content-wrapper">
        <h2 className="sc-title sc-title--center">See how much interest you can earn</h2>
        <div className="sc-interest-monthly-calc__wrapper">
          <div className="sc-interest-monthly-calc__content">
            <div className="sc-heading-inner">
              <div className="sc-heading-inner__icon">
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="64"
                  height="64"
                  viewBox="0 0 64 64"
                >
                  <title>projection</title>
                  <path
                    fill="#38d200"
                    d="M54 32c0-12.15-9.85-22-22-22s-22 9.85-22 22c0 12.15 9.85 22 22 22s22-9.85 22-22zM46 32c0 7.732-6.268 14-14 14-2.988 0-5.757-0.936-8.030-2.53l-3.97 0.53 0.53-3.97c-1.595-2.273-2.53-5.042-2.53-8.030 0-7.732 6.268-14 14-14 2.988 0 5.757 0.936 8.030 2.53l3.97-0.53-0.53 3.97c1.595 2.273 2.53 5.042 2.53 8.030z"
                  ></path>
                  <path
                    fill="#0f7aed"
                    d="M26.908 31.202c0.299-2.236 2.058-3.995 4.294-4.294l6.798-0.908-0.908 6.798c-0.299 2.236-2.058 3.995-4.294 4.294l-6.798 0.908 0.908-6.798z"
                  ></path>
                </svg>
              </div>
              <h2 className="sc-title sc-title--inner">
                My average daily balance in fresh funds would be
              </h2>
            </div>
            <div className="sc-interest-monthly-calc__input-box">
              <span className="sc-interest-monthly-calc__currency">S$</span>
              <input
                type="text"
                className="sc-interest-monthly-calc__input sc-interest-monthly-calc__input--amount-value"
                value="2000000"
                data-min="1000"
                data-max="5000000"
              />
              <div className="sc-esaver__input-error hide">Invalid Input</div>
            </div>
          </div>
          <p className="sc-description">
            The interest calculation is solely for illustration only and the estimated total monthly
            interest shown should not be taken as the actual interest payable due to possible
            variance from rounding in computation. Rates quoted are subject to change without prior
            notice.
          </p>
          <div className="sc-cvp sc-cvp--center">
            <div className="sc-cvp__col">
              <div className="sc-cvp__bg sc-cvp__bg--first"></div>
              <div className="sc-cvp__icon">
                <svg
                  width="54"
                  height="47"
                  viewBox="0 0 54 47"
                  fill="none"
                  xmlns="
                  http://www.w3.org/2000/svg"
                >
                  <path
                    d="M24.4019 1.5C25.5566 -0.500004 28.4434 -0.5 29.5981 1.5L52.9808 42C54.1355 44 52.6921 46.5 50.3827 46.5H3.6173C1.30789 46.5 -0.135477 44 1.01922 42L24.4019 1.5Z"
                    fill="#0F7AED"
                  />
                </svg>
              </div>
              <p className="sc-cvp__top">October 2024</p>
              <p className="sc-cvp__middle">
                <strong>3.35%</strong>
                p.a
              </p>
              <p className="sc-cvp__bottom">S$1422.60</p>
            </div>
            <div className="sc-cvp__col">
              <div className="sc-cvp__bg sc-cvp__bg--second"></div>
              <div className="sc-cvp__icon">
                <svg
                  width="54"
                  height="47"
                  viewBox="0 0 54 47"
                  fill="none"
                  xmlns="
                http://www.w3.org/2000/svg"
                >
                  <path
                    d="M24.4019 1.5C25.5566 -0.500004 28.4434 -0.5 29.5981 1.5L52.9808 42C54.1355 44 52.6921 46.5 50.3827 46.5H3.6173C1.30789 46.5 -0.135477 44 1.01922 42L24.4019 1.5Z"
                    fill="#0F7AED"
                  />
                </svg>
              </div>
              <p className="sc-cvp__top">November 2024</p>
              <p className="sc-cvp__middle">
                <strong>3.40%</strong>
                p.a
              </p>
              <p className="sc-cvp__bottom">S$1,397.60</p>
            </div>
            <div className="sc-cvp__col">
              <div className="sc-cvp__bg sc-cvp__bg--third"></div>
              <div className="sc-cvp__icon">
                <svg
                  width="54"
                  height="47"
                  viewBox="0 0 54 47"
                  fill="none"
                  xmlns="
                http://www.w3.org/2000/svg"
                >
                  <path
                    d="M24.4019 1.5C25.5566 -0.500004 28.4434 -0.5 29.5981 1.5L52.9808 42C54.1355 44 52.6921 46.5 50.3827 46.5H3.6173C1.30789 46.5 -0.135477 44 1.01922 42L24.4019 1.5Z"
                    fill="#0F7AED"
                  />
                </svg>
              </div>
              <p className="sc-cvp__top">December 2024</p>
              <p className="sc-cvp__middle">
                <strong>3.45%</strong>
                p.a
              </p>
              <p className="sc-cvp__bottom">S$1,465.60</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
