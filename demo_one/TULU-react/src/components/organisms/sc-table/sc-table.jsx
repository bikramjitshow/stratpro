import React from 'react';
import ImgOne from '../../../../static/images/sg-travel-easy-400px.jpg';
export const Tables = props => {
  return (
    <div
      className={`sc-table ${props.class}
    ${props.BgBlue ? 'sc-blue-bg' : ''}
    ${props.BgDark ? 'sc-dark-bg' : ''}`}
    >
      {props.WithBg && (
        <picture>
          <source
            srcSet="https://av.sc.com/sg/content/images/bcc-column-comparison-bg-desktop.jpg"
            media="(min-width: 768px)"
          />
          <source
            srcSet="https://av.sc.com/sg/content/images/bcc-column-comparison-bg-mobile.jpg"
            media="(max-width: 767px)"
          />
          <img
            src="https://av.sc.com/sg/content/images/bcc-column-comparison-bg-desktop.jpg"
            className="sc-table__bg"
            width="1600"
            height="490"
            alt="Adult, Female, Person"
          />
        </picture>
      )}
      <div className="sc-content-wrapper">
        <div className="sc-heading-inner">
          <h2 className="sc-title sc-title--inner">You Maybe Interested In</h2>
          <p className="sc-description">
            Viewing your transactions just got easier as it is now categorised into ‘Deposits’ and
            ‘Credit Cards’ for your easy viewing.
          </p>
        </div>
        <div className="sc-table__content">
          <div className="sc-table__sub-content">
            <h3 className="sc-table__sub-title">Sub title</h3>
            <div className="sc-table__description sc-rte">
              <p>
                With SC Mobile you can open an account and start transacting on the go. Our digital
                banking services are tailored to meet your busy lifestyle so you can enjoy the
                important things in life without visiting a branch.
              </p>
              <ul>
                <li>
                  Requests for early full settlement quotes will be processed during our operating
                  hours (Mon-Fri 9am-5pm, and closed on public holidays), and quotations will be
                  mailed to you within 2 business days. <a href="">Read more</a>
                </li>
                <li>If you have any questions, please call our hotline at 1800 747 7000.</li>
              </ul>
            </div>
          </div>
          <div className="sc-table__table-wrapper sc-rte">
            <table>
              <thead>
                <tr>
                  <th>Currency</th>
                  <th>Amount Band</th>
                  <th>Interest Rate</th>
                  <th>Amount Band</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>NGN</td>
                  <td>1 – 9,999,999</td>
                  <td>3.75%</td>
                  <td>4.00%</td>
                </tr>
                <tr>
                  <td>NGN</td>
                  <td>10,000,000 – 19,999,999 </td>
                  <td>3.85%</td>
                  <td>4.00%</td>
                </tr>
                <tr>
                  <td>NGN</td>
                  <td>20,000,000 and Above</td>
                  <td>4.00%</td>
                  <td>4.00%</td>
                </tr>
                <tr>
                  <td>NGN</td>
                  <td>20,000,000 and Above</td>
                  <td>4.00%</td>
                  <td>4.00%</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="sc-table__footer">
            <span className="sc-table__icon">
              <svg width="24.25" height="24.25" viewBox="0 0 24.25 24.25">
                <path
                  fill="none"
                  stroke="#919191"
                  strokeWidth="1.35"
                  strokeMiterlimit="10"
                  d="M12.125 1.25C18.131 1.25 23 6.118 23 12.125 23 18.131 18.131 23 12.125 23 6.118 23 1.25 18.131 1.25 12.125S6.118 1.25 12.125 1.25z"
                ></path>
                <path fill="#919191" d="M11.5 10.292h1v7h-1v-7zM11.5 6.292h1v2h-1v-2z"></path>
              </svg>
            </span>
            <span className="sc-table__info">last table&#39;s Additional info</span>
          </div>
          <div className="sc-table__image">
            <img className="sc-table__img" src={ImgOne} alt="About Us"></img>
          </div>
          <div className="sc-table__btn">
            <ul className="sc-inline-buttons">
              <li className="sc-inline-buttons__item">
                <a href="#" title="Create An Account" className="sc-btn">
                  Create An Account
                </a>
              </li>
            </ul>
          </div>
          <div className="sc-table__image sc-table__image--center">
            <img className="sc-table__img" src={ImgOne} alt="About Us"></img>
          </div>
          <div className="sc-table__btn sc-table__btn--center">
            <ul className="sc-inline-buttons">
              <li className="sc-inline-buttons__item">
                <a href="#" title="Create An Account" className="sc-btn">
                  Create An Account
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="sc-table__footer">
          <span className="sc-table__icon icon-info">
            <svg width="24.25" height="24.25" viewBox="0 0 24.25 24.25">
              <path
                fill="none"
                stroke="#919191"
                strokeWidth="1.35"
                strokeMiterlimit="10"
                d="M12.125 1.25C18.131 1.25 23 6.118 23 12.125 23 18.131 18.131 23 12.125 23 6.118 23 1.25 18.131 1.25 12.125S6.118 1.25 12.125 1.25z"
              ></path>
              <path fill="#919191" d="M11.5 10.292h1v7h-1v-7zM11.5 6.292h1v2h-1v-2z"></path>
            </svg>
          </span>
          <span className="sc-table__info">last table&#39;s Additional info</span>
        </div>
      </div>
    </div>
  );
};
