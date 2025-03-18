import React from 'react';
import ImgOne from '../../../../static/images/sg-travel-easy-400px.jpg';

export const CardTiles = props => {
  return (
    //  sc-card-tile--horizontal : Add this class to sc-card-tile for horizondal view
    <div className={`sc-card-tile ${props.class}`}>
      {props.showBadges && (
        <div className="sc-card-tile__badges">
          <div className="sc-badge">
            <svg
              width="7"
              height="10"
              viewBox="0 0 7 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M7 0V10H0L7 0Z" fill="#EC9BA5" />
            </svg>
            <span className="sc-badge__text">Recommended for you</span>
          </div>
          <div className="sc-badge sc-badge--green">
            <svg
              width="7"
              height="10"
              viewBox="0 0 7 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M7 0V10H0L7 0Z" fill="#EC9BA5" />
            </svg>
            <span className="sc-badge__text">New</span>
          </div>
        </div>
      )}
      <div className="sc-card-tile__link">
        {props.showIcon && <div className="sc-card-tile__icon" aria-hidden="true"></div>}
        {props.showImage && (
          <div className="sc-card-tile__tile-image" aria-hidden="true">
            <img className="sc-card-tile__tile-img" src={ImgOne} title="image" />
          </div>
        )}
        <div className="sc-card-tile__content">
          {props.showTitle && <h3 className="sc-card-tile__title">{props.title}</h3>}

          {props.showDesc && <p className="sc-card-tile__description">{props.desc}</p>}

          {props.showTags && (
            <div className="sc-card-tile__tags">
              <span className="sc-tag sc-tag--line-green">Chinese</span>
              <span className="sc-tag sc-tag--line-blue">15% off total food bill</span>
            </div>
          )}
          {props.showLocation && (
            <div className="sc-card-tile__location">
              <span className="sc-card-tile__location-text">Kandooma Fushi, 08310, Maldives</span>
            </div>
          )}
        </div>
      </div>
      {props.showMore && (
        <a href="#" title="More" className="sc-card-tile__read-more">
          {props.more}
        </a>
      )}
    </div>
  );
};
