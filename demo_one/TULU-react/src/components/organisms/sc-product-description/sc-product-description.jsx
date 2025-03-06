/* eslint-disable react/no-unescaped-entities */
import React from 'react';

export const ScProductDescriptions = function() {
  return (
    <div className="sc-product-description">
      <div className="sc-content-wrapper">
        <div className="sc-heading-inner sc-title--center">
          <h2 className="sc-title sc-title--inner">
            Enjoy up to 3.50% p.a. interest when you participate in the Marathon $aver Promotion
          </h2>
          <div className="sc-description">
            <p>
              For new and existing clients, qualify for step-up bonus interest on your e$aver
              account in just 2 steps. Bonus interest is awarded on your eligible incremental fresh
              funds of up to S$5,000,000 (compared to September 2024 average daily balance) from
              October 2024 to December 2024
            </p>
          </div>
        </div>
        <div className="sc-product-description__graph">
          <img src="https://av.sc.com/sg/content/images/sc-esaver-graph.jpg" alt="Graph_image" />
        </div>
        <div className="sc-product-description__text">
          * "Fresh funds" refer to funds that do not originate from any existing account with the
          Bank or funds that are not withdrawn and re-deposited within 30 days of the Promotion
          Period.
        </div>
        <div className="sc-product-description__buttons">
          <ul className="sc-inline-buttons">
            <li className="sc-inline-buttons__item">
              <a title="Apply Now" className="sc-btn undefined">
                Apply Now
              </a>
            </li>
            <li className="sc-inline-buttons__item">
              <a title="Learn More" className="sc-btn sc-btn--secondary-black">
                Learn More
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
