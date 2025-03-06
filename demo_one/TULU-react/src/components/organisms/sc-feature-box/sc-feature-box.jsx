import React from 'react';

export const Features = props => {
  return (
    <div className={`sc-feature-box ${props.class}`} id={props.id}>
      <div className="sc-content-wrapper">
        <div className="sc-heading-inner sc-title--center">
          <h2 className="sc-title sc-title--inner">{props.title}</h2>
          <p className="sc-description">
            Viewing your transactions just got easier as it is now categorised into ‘Deposits’ and
            ‘Credit Cards’ for your easy viewing.
          </p>
        </div>
        <div className="sc-feature-box__wrapper">
          <div className="sc-feature-box__title">
            You may consider tailor made ELI with the following features
          </div>
          <div className="sc-feature-box__container">
            <div className="sc-feature-box__content">
              <div className="sc-feature-box__image">
                <img
                  src="https://av.sc.com/hk/content/images/hk-en-osp-minredemp-768x350_chart-e1729318361136.jpg"
                  alt="min-redemption"
                />
              </div>
              <div className="sc-feature-box__cards">
                <div className="sc-feature-card">
                  <div className="sc-feature-card__heading">
                    <h2 className="sc-feature-card__title">Min Redemption</h2>
                  </div>
                  <p className="sc-feature-card__desc">feature introduction</p>
                  <ul>
                    <li>Min Redemption selected</li>
                    <li>Principle is potected</li>
                  </ul>
                </div>
                <div className="sc-feature-card">
                  <div className="sc-feature-card__heading">
                    <div className="sc-feature-card__icon">
                      <svg
                        width="13"
                        height="14"
                        viewBox="0 0 13 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <mask id="path-1-inside-1_16708_22125" fill="white">
                          <path d="M0 3.5C0 1.84315 1.34315 0.5 3 0.5H10C11.6569 0.5 13 1.84315 13 3.5V13.5H0V3.5Z" />
                        </mask>
                        <path
                          d="M0 3.5C0 1.84315 1.34315 0.5 3 0.5H10C11.6569 0.5 13 1.84315 13 3.5V13.5H0V3.5Z"
                          fill="#00A9F3"
                        />
                        <path
                          d="M0 0.5H13H0ZM13 14.5H0V12.5H13V14.5ZM0 13.5V0.5V13.5ZM13 0.5V13.5V0.5Z"
                          fill="black"
                          mask="url(#path-1-inside-1_16708_22125)"
                        />
                      </svg>
                    </div>
                    <h2 className="sc-feature-card__title">Scenario A Closed at: 60</h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="sc-feature-box__table sc-rte">
              <table>
                <thead>
                  <tr>
                    <th>Scenario A</th>
                    <th>Closing stock price</th>
                    <th>Principle (%)</th>
                    <th>Coupon</th>
                    <th>Title</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Actual Stock Investment</td>
                    <td>100</td>
                    <td>60</td>
                    <td>-40%</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>Equity Linked Investment (ELI)</td>
                    <td>100</td>
                    <td>90</td>
                    <td>-10%</td>
                    <td>yes</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="sc-feature-box__disclaimer sc-rte">
              <p>
                <strong>Elaboration:</strong>
              </p>
              <p>
                * Cashback amount will be based on the actual interest charged in your statement for
                the first instalment amount. Current example is based on 3.48% p.a. and 3 years
                tenure. The interest payable on your first instalment amount will be pro-rated on a
                365 days basis or 366 days basis in a leap year.
              </p>
              <ul>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
