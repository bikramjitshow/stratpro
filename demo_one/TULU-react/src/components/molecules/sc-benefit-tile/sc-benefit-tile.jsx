import React from 'react';

export const BenefitTiles = props => {
  return (
    <div className={`sc-benefit-tile ${props.class}`}>
      {props.icon && (
        <div className="sc-benefit-tile__icon" data-grunticon-embed>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.375 20.249H4.46875C4.27813 20.249 4.09531 20.1733 3.96052 20.0385C3.82573 19.9037 3.75 19.7209 3.75 19.5303V11.624C3.75 10.4914 3.97309 9.3698 4.40654 8.32337C4.83998 7.27694 5.4753 6.32613 6.2762 5.52522C7.0771 4.72432 8.02791 4.08901 9.07435 3.65556C10.1208 3.22211 11.2423 2.99902 12.375 2.99902C13.5077 2.99902 14.6292 3.22212 15.6756 3.65556C16.7221 4.08901 17.6729 4.72432 18.4738 5.52523C19.2747 6.32613 19.91 7.27695 20.3435 8.32338C20.7769 9.36981 21 10.4914 21 11.624C21 13.9115 20.0913 16.1053 18.4738 17.7228C16.8563 19.3403 14.6625 20.249 12.375 20.249Z"
              stroke="black"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9.375 10.499H15"
              stroke="black"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9.375 13.499H15"
              stroke="black"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      )}
      <div className="sc-benefit-tile__right">
        <h3 className="sc-benefit-tile__title">Relationship Team Support</h3>
        <div className="sc-benefit-tile__desc sc-rte">
          Bring you wealth solutions which meet your identified objectives.
        </div>
      </div>
    </div>
  );
};
