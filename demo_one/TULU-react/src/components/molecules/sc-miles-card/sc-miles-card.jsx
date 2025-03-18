import React from 'react';
import { ButtonLink } from '../../atoms/sc-button-link/sc-button-link';

export const MilesCards = props => {
  return (
    <div className={`sc-miles-journey ${props.class}`}>
      {props.badge && (
        <div className="sc-badge sc-badge--green">
          <span className="sc-badge__text">Recommended for you</span>
        </div>
      )}
      {props.image && (
        <div className="sc-miles-journey__img-wrapper">
          <img
            className="sc-miles-journey__image"
            src="https://av.sc.com/market-outlook/content/images/Article-4-master-banner_De-Dollarisation_400x400_v1.jpg"
            alt="Discover more Destinations"
            loading="lazy"
          />
        </div>
      )}
      <div className="sc-miles-journey__content-wrapper">
        <p className="sc-miles-journey__desc">Spend $S 1,250</p>
        <p className="sc-miles-journey__text-miles">Return 5,4000 miles</p>
        <div className="sc-miles-journey__btn-link">
          <ButtonLink
            href="#"
            class="sc-btn-link--blue sc-btn-link--arrow"
            label="Discover more Destinations"
            showIcon={false}
          />
        </div>
      </div>
    </div>
  );
};
