import React from 'react';
import TileImg from '../../../../static/images/LIverpool.jpg';

export const ColTiles = props => {
  return (
    <div className={`sc-col-tile ${props.class}`}>
      <input id="checkbox-1" className="sc-col-tile__input" type="checkbox" tabIndex={-1} />
      <div className="sc-col-tile__container">
        <div className="sc-col-tile__image">
          <img src={TileImg} alt="image" />
        </div>
        <div className="sc-col-tile__title">The combined expertise of SC and Amundi</div>
      </div>
      <div className="sc-col-tile__desc">
        We partner with Amundi, a global top 10 asset management firm with over US$ 2 trillion in
        assets under management, to independently screen portfolio optimizations for compliance with
        regulatory requirements, investment objectives & strategy when rebalancing every month.
      </div>
      <label tabIndex={0} className="sc-col-tile__label" htmlFor="checkbox-1">
        <span className="sc-col-tile__label-more">View More</span>
        <span className="sc-col-tile__label-less">View Less</span>
      </label>
    </div>
  );
};
