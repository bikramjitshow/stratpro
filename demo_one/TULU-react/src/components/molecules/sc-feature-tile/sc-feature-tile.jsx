import React from 'react';

export const FeatureTiles = props => {
  return (
    <div className={`sc-feature-tile ${props.class}`}>
      <div className="sc-feature-tile__content ">
        {props.showTitle && <div className="sc-feature-tile__title">{props.title}</div>}
        {props.showDesc && <div className="sc-feature-tile__description">{props.desc}</div>}
        <div className="sc-feature-tile__row-icon">
          {props.showMore && (
            <div className="sc-feature-tile__btn-wrapper">
              <ul className="sc-inline-buttons">
                <li className="sc-inline-buttons__item">
                  <a title="Learn More" className={`sc-btn sc-btn--small ${props.button}`}>
                    Learn More
                  </a>
                </li>
              </ul>
            </div>
          )}
          {props.showIcon && (
            <div className="sc-feature-tile__tile-icon">
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                viewBox="0 0 50 50"
              >
                <path
                  fill="#0f7aed"
                  d="M46 21a4 4 0 014 4v17a8 8 0 01-8 8H18a4 4 0 01-4-4V21h32zm-4 17a3 3 0 100-6 3 3 0 000 6zM19.12 14A5.12 5.12 0 0014 19.12V21h7.5a1.5 1.5 0 010-3h22.879a7 7 0 00-6.326-4H19.12z"
                ></path>
              </svg>
            </div>
          )}
        </div>
      </div>
      {props.showImage && (
        <div className="sc-feature-tile__container-img" aria-hidden="true">
          <picture>
            <source srcSet={props.image} width="200" media="(min-width: 768px)" />
            <source srcSet={props.image} width="150" media="(max-width: 767px)" />
            <img src={props.image} className="sc-feature-tile__tile-img" alt="Default Image" />
          </picture>
        </div>
      )}
    </div>
  );
};
