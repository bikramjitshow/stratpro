import React from 'react';
import { HeadingInners } from '../../molecules/sc-heading-inner/sc-heading-inner';

export const OfferDropdown = props => {
  return (
    <div className={`sc-offer-dropdown ${props.class}`}>
      <div className="sc-content-wrapper">
        <HeadingInners className="sc-title--center" />
        <div className="sc-offer-dropdown__container">
          <div className={`sc-col-tile  ${props.darkBg && 'sc-col-tile--bg-dark'}`}>
            <input id="checkbox-0" className="sc-col-tile__input" type="checkbox" tabIndex="-1" />
            <div className="sc-col-tile__container">
              <div className="sc-col-tile__image">
                <img src="static/media/static/images/LIverpool.jpg" alt="image" />
              </div>

              <div className="sc-col-tile__title">
                <span className="sc-tag sc-tag--gray">Grey Light</span>
                <p>The combined expertise of SC and Amundi</p>
              </div>
            </div>
            <div className="sc-col-tile__desc">
              We partner with Amundi, a global top 10 asset management firm with over US$ 2 trillion
              in assets under management, to independently screen portfolio optimizations for
              compliance with regulatory requirements, investment objectives &amp; strategy when
              rebalancing every month.
            </div>
            <label tabIndex="0" className="sc-col-tile__label" htmlFor="checkbox-0">
              <span className="sc-col-tile__label-more">View More</span>
              <span className="sc-col-tile__label-less">View Less</span>
            </label>
          </div>

          <div className={`sc-col-tile  ${props.darkBg && 'sc-col-tile--bg-dark'}`}>
            <input id="checkbox-1" className="sc-col-tile__input" type="checkbox" tabIndex="-1" />
            <div className="sc-col-tile__container">
              <div className="sc-col-tile__image">
                <img src="static/media/static/images/LIverpool.jpg" alt="image" />
              </div>
              <div className="sc-col-tile__title">
                <span className="sc-tag sc-tag--gray">Grey Light</span>
                <p>The combined expertise of SC and Amundi</p>
              </div>
            </div>
            <div className="sc-col-tile__desc">
              We partner with Amundi, a global top 10 asset management firm with over US$ 2 trillion
              in assets under management, to independently screen portfolio optimizations for
              compliance with regulatory requirements, investment objectives &amp; strategy when
              rebalancing every month.
            </div>
            <label tabIndex="0" className="sc-col-tile__label" htmlFor="checkbox-1">
              <span className="sc-col-tile__label-more">View More</span>
              <span className="sc-col-tile__label-less">View Less</span>
            </label>
          </div>

          <div className={`sc-col-tile  ${props.darkBg && 'sc-col-tile--bg-dark'}`}>
            <input id="checkbox-2" className="sc-col-tile__input" type="checkbox" tabIndex="-1" />
            <div className="sc-col-tile__container">
              <div className="sc-col-tile__image">
                <img src="static/media/static/images/LIverpool.jpg" alt="image" />
              </div>
              <div className="sc-col-tile__title">
                <span className="sc-tag sc-tag--gray">Grey Light</span>
                <p>The combined expertise of SC and Amundi</p>
              </div>
            </div>
            <div className="sc-col-tile__desc">
              We partner with Amundi, a global top 10 asset management firm with over US$ 2 trillion
              in assets under management, to independently screen portfolio optimizations for
              compliance with regulatory requirements, investment objectives &amp; strategy when
              rebalancing every month.
            </div>
            <label tabIndex="0" className="sc-col-tile__label" htmlFor="checkbox-2">
              <span className="sc-col-tile__label-more">View More</span>
              <span className="sc-col-tile__label-less">View Less</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};
