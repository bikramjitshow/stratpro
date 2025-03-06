import React, { useEffect } from 'react';
import ScInfoBar from './sc-info-bar.js';

export const InfoBar = function(props) {
  useEffect(() => {
    ScInfoBar.init();
  }, []);
  return (
    <div
      className={`sc-info-bar ${props.class}
     ${props.bgBlue ? 'sc-blue-bg' : ''}
     ${props.bgDark ? 'sc-dark-bg' : ''}`}
    >
      <div className="sc-content-wrapper">
        <div className="sc-info-bar__content">
          <div className="sc-info-bar__title">
            <span className="sc-info-bar__icon">
              <svg
                width="{25}"
                height="{26}"
                viewBox="0 0 25 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.2758 22.0819C17.2892 22.0819 21.3534 18.0178 21.3534 13.0043C21.3534 7.99093 17.2892 3.92676 12.2758 3.92676C7.26242 3.92676 3.19824 7.99093 3.19824 13.0043C3.19824 18.0178 7.26242 22.0819 12.2758 22.0819Z"
                  stroke="white"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M11.5193 12.248H12.2758V17.5433H13.0322"
                  stroke="white"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12.2758 9.97838C12.9025 9.97838 13.4105 9.47036 13.4105 8.84368C13.4105 8.21701 12.9025 7.70898 12.2758 7.70898C11.6491 7.70898 11.1411 8.21701 11.1411 8.84368C11.1411 9.47036 11.6491 9.97838 12.2758 9.97838Z"
                  fill="white"
                />
              </svg>
            </span>
            <div className="sc-info-bar__text">
              To serve you better, we will be carrying out a system enhancement from 1:00AM to
              2:00PM on 8 December 2024.
            </div>
          </div>
          <div className="sc-info-bar__button">
            <ul className="sc-inline-buttons">
              <li className="sc-inline-buttons__item">
                <a href="#" title="Learn More" className="sc-btn sc-btn--secondary sc-btn--small">
                  Learn More
                </a>
              </li>
            </ul>
          </div>
          <div className="sc-info-bar__dismiss">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="{18}" width="{18}">
              <g>
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};
