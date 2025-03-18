import React from 'react';

export const CVPs = props => {
  return (
    // sc-cvp--white :  Class for make text in white color
    <div className={`sc-cvp ${props.class}`}>
      <div className="sc-cvp__col">
        {props.showIcon && (
          <div className="sc-cvp__icon">
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              width="64"
              height="64"
              viewBox="0 0 64 64"
            >
              <path
                fill="#0f7aed"
                d="M46 21a4 4 0 014 4v17a8 8 0 01-8 8H18a4 4 0 01-4-4V21h32zm-4 17a3 3 0 100-6 3 3 0 000 6zM19.12 14A5.12 5.12 0 0014 19.12V21h7.5a1.5 1.5 0 010-3h22.879a7 7 0 00-6.326-4H19.12z"
              ></path>
            </svg>
          </div>
        )}
        <p className="sc-cvp__top">Up to</p>
        <p className="sc-cvp__middle">
          <strong>7.88%</strong> p.a
        </p>
        <p className="sc-cvp__bottom">Interest on your first S$100,000</p>
      </div>
      <div className="sc-cvp__col">
        {props.showIcon && (
          <div className="sc-cvp__icon">
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              width="64"
              height="64"
              viewBox="0 0 64 64"
            >
              <path
                fill="#0f7aed"
                d="M46 21a4 4 0 014 4v17a8 8 0 01-8 8H18a4 4 0 01-4-4V21h32zm-4 17a3 3 0 100-6 3 3 0 000 6zM19.12 14A5.12 5.12 0 0014 19.12V21h7.5a1.5 1.5 0 010-3h22.879a7 7 0 00-6.326-4H19.12z"
              ></path>
            </svg>
          </div>
        )}
        <p className="sc-cvp__top">Up to</p>
        <p className="sc-cvp__middle">
          <strong>S$7,880</strong>
        </p>
        <p className="sc-cvp__bottom">Bonus Interest per year</p>
      </div>
      <div className="sc-cvp__col">
        {props.showIcon && (
          <div className="sc-cvp__icon">
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              width="64"
              height="64"
              viewBox="0 0 64 64"
            >
              <path
                fill="#0f7aed"
                d="M46 21a4 4 0 014 4v17a8 8 0 01-8 8H18a4 4 0 01-4-4V21h32zm-4 17a3 3 0 100-6 3 3 0 000 6zM19.12 14A5.12 5.12 0 0014 19.12V21h7.5a1.5 1.5 0 010-3h22.879a7 7 0 00-6.326-4H19.12z"
              ></path>
            </svg>
          </div>
        )}
        <p className="sc-cvp__top">Apply Now</p>
        <p className="sc-cvp__middle">
          <strong>Instant</strong>
        </p>
        <p className="sc-cvp__bottom">Account Opening with MyInfo</p>
      </div>
    </div>
  );
};
