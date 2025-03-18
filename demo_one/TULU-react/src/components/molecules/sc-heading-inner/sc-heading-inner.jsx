import React from 'react';

export const HeadingInners = function(props) {
  return (
    <div className={`sc-heading-inner ${props.class}`}>
      {props.icon && (
        <div className="sc-heading-inner__icon">
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            width="64"
            height="64"
            viewBox="0 0 64 64"
          >
            <title>projection</title>
            <path
              fill="#38d200"
              d="M54 32c0-12.15-9.85-22-22-22s-22 9.85-22 22c0 12.15 9.85 22 22 22s22-9.85 22-22zM46 32c0 7.732-6.268 14-14 14-2.988 0-5.757-0.936-8.030-2.53l-3.97 0.53 0.53-3.97c-1.595-2.273-2.53-5.042-2.53-8.030 0-7.732 6.268-14 14-14 2.988 0 5.757 0.936 8.030 2.53l3.97-0.53-0.53 3.97c1.595 2.273 2.53 5.042 2.53 8.030z"
            ></path>
            <path
              fill="#0f7aed"
              d="M26.908 31.202c0.299-2.236 2.058-3.995 4.294-4.294l6.798-0.908-0.908 6.798c-0.299 2.236-2.058 3.995-4.294 4.294l-6.798 0.908 0.908-6.798z"
            ></path>
          </svg>
        </div>
      )}
      <h2 className={`sc-title sc-title--inner ${props.titleclass}`}>You Maybe Interested In</h2>
      <p className="sc-description">
        Viewing your transactions just got easier as it is now categorised into ‘Deposits’ and
        ‘Credit Cards’ for your easy viewing.
      </p>
    </div>
  );
};
