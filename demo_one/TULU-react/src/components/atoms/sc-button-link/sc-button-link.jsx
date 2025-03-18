import React from 'react';

export const ButtonLink = props => {
  return (
    <a href={props.href} className={`sc-btn-link ${props.class} `} title={props.label}>
      {/* ICON */}
      {props.showIcon && (
        <div className="sc-btn-link__icon">
          {/* Icon should be change from CMS */}
          <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="11.25 11.83 37.5 37.52">
            <rect x="11.25" y="11.8472" width="16.875" height="16.875" rx="4" fill="#38D200"></rect>
            <rect
              x="31.875"
              y="11.8472"
              width="16.875"
              height="16.875"
              rx="4"
              fill="#0F7AED"
            ></rect>
            <rect x="11.25" y="32.4722" width="16.875" height="16.875" rx="4" fill="#38D200"></rect>
            <rect
              x="31.875"
              y="32.4722"
              width="16.875"
              height="16.875"
              rx="4"
              fill="#38D200"
            ></rect>
          </svg>
        </div>
      )}
      {props.label}
    </a>
  );
};
