import React from 'react';
export const InvestFees = props => {
  return (
    <div className={`sc-invest-fees ${props.class}`}>
      <div className="sc-content-wrapper">
        <div className="sc-invest-fees__content">
          <div className="sc-heading-inner sc-title--center">
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
            <h2 className="sc-title sc-title--inner sc-title--bold">No Additional Fees</h2>
            <p className="sc-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            </p>
          </div>
          <div className="sc-cvp sc-cvp--fees-top">
            <div className="sc-cvp__col">
              <div className="sc-cvp__middle">
                <p>
                  <strong>0</strong>
                  <sup>%</sup>
                </p>
              </div>
              <div className="sc-cvp__bottom">
                <p>Sales charge*</p>
              </div>
            </div>
            <div className="sc-cvp__col">
              <div className="sc-cvp__middle">
                <p>
                  <strong>0</strong>
                  <sup>%</sup>
                </p>
              </div>
              <div className="sc-cvp__bottom">
                <p>Platform fees</p>
              </div>
            </div>
            <div className="sc-cvp__col">
              <p className="sc-cvp__top">Up to</p>
              <p className="sc-cvp__middle">
                <strong>0.95</strong>
                <sup>%</sup>
                <sub>per year</sub>
              </p>
              <p className="sc-cvp__bottom">All-in management fee</p>
            </div>
          </div>
          <div className="sc-invest-fees__box">
            <div className="sc-invest-fees__box-col sc-invest-fees__box-col-left">
              <div className="sc-invest-fees__box-head">
                <strong>0.75%</strong> per year
              </div>
              <div className="sc-cvp">
                <div className="sc-cvp__col">
                  <div className="sc-cvp__top">
                    <span className="sc-invest-fees__line sc-invest-fees__line--green"></span>
                  </div>
                  <div className="sc-cvp__bottom">
                    <p>
                      Cash+ <br />
                      Portfolio
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="sc-invest-fees__box-col sc-invest-fees__box-col-right">
              <div className="sc-invest-fees__box-head">
                <strong>0.95%</strong> per year
              </div>
              <div className="sc-cvp">
                <div className="sc-cvp__col">
                  <div className="sc-cvp__top">
                    <span className="sc-invest-fees__line sc-invest-fees__line--blue"></span>
                  </div>
                  <div className="sc-cvp__bottom">
                    <p>
                      Income <br />
                      Portfolio
                    </p>
                  </div>
                </div>
                <div className="sc-cvp__col">
                  <div className="sc-cvp__top">
                    <span className="sc-invest-fees__line sc-invest-fees__line--yellow"></span>
                  </div>
                  <div className="sc-cvp__bottom">
                    <p>
                      Balanced <br />
                      Portfolio
                    </p>
                  </div>
                </div>
                <div className="sc-cvp__col">
                  <div className="sc-cvp__top">
                    <span className="sc-invest-fees__line sc-invest-fees__line--yellow"></span>
                  </div>
                  <div className="sc-cvp__bottom">
                    <p>
                      Growth <br />
                      Portfolio
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="sc-invest-fees__linkbox">
            <a className="sc-btn-link sc-btn-link--blue sc-btn-link--arrow" href="#">
              See more details on charges
            </a>
          </div>
          <picture>
            <source
              srcSet="https://av.sc.com/sg/content/images/sc-invest-divider-desktop.png"
              media="(min-width: 768px)"
            />
            <source
              srcSet="https://av.sc.com/sg/content/images/sc-invest-divider-desktop.png"
              media="(max-width: 767px)"
            />
            <img
              src="https://av.sc.com/sg/content/images/sc-invest-divider-desktop.png"
              className="sc-invest-fees__img"
              width="1600"
              height="490"
              alt="Adult, Female, Person"
            />
          </picture>
        </div>
      </div>
    </div>
  );
};
