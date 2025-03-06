import React, { useEffect } from 'react';
import SCCountrySelector from './sc-country-selector.js';

export const CountrySelectors = () => {
  useEffect(() => {
    SCCountrySelector.init();
  }, []);
  return (
    <div className="sc-country-selector">
      <button className=" sc-flag sc-flag--ke">
        <span className="sc-country-selector__name">PKR</span>
        <span className="sc-country-selector__arrow" />
      </button>
      <ul className="sc-country-selector__dropdown hide">
        <li className="sc-country-selector__dropdown-list">
          <button role="listitem" className="sc-flag sc-flag--in">
            <span className="sc-country-selector__name">IN</span>
          </button>
        </li>
        <li className="sc-country-selector__dropdown-list">
          <button role="listitem" className="sc-flag sc-flag--my">
            <span className="sc-country-selector__name">MY</span>
          </button>
        </li>
        <li className="sc-country-selector__dropdown-list">
          <button role="listitem" className="sc-flag sc-flag--vn">
            <span className="sc-country-selector__name">VN</span>
          </button>
        </li>
      </ul>
    </div>
  );
};
