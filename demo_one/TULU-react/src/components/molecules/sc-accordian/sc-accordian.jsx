import React from 'react';

export const ScAccordian = props => {
  return (
    <div className={`sc-accordion ${props.class}`}>
      <input
        className="sc-accordion__input"
        defaultChecked={props.check}
        type="checkbox"
        tabIndex="-1"
        id={props.id}
      />
      <label
        tabIndex="0"
        className="sc-accordion__label sc-accordion__label--arrow"
        htmlFor={props.id}
      >
        {props.withIcon && (
          <span className="sc-accordion__label-icon">
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              width="64"
              height="64"
              viewBox="0 0 64 64"
            >
              <title>gift</title>
              <path
                fill="#0f7aed"
                d="M17.818 31.273h8.26v22.53h-8.26a2.182 2.182 0 01-2.182-2.182V33.455c0-1.205.977-2.182 2.182-2.182zM45.715 31.273h-8.26v22.53h8.26a2.182 2.182 0 002.182-2.182V33.455a2.182 2.182 0 00-2.182-2.182z"
              ></path>
              <path
                fill="#38d200"
                d="M35.296 31.368v22.364h-7.115V31.368h7.115zM30.921 21.652c1.529-2.298-6.454-13.717-8.642-11.324s-5.116 7.469-3.939 9.461c1.178 1.992 11.052 4.162 12.58 1.863z"
              ></path>
              <path
                fill="#38d200"
                d="M31.506 21.652c-1.529-2.298 6.454-13.717 8.642-11.324s5.116 7.469 3.939 9.461c-1.178 1.992-11.052 4.162-12.581 1.863z"
              ></path>
              <path
                fill="#0f7aed"
                d="M16.182 22.545h9.34v6.437h-9.34A2.182 2.182 0 0114 26.8v-2.073c0-1.205.977-2.182 2.182-2.182zM47.303 22.545h-9.34v6.437h9.34a2.182 2.182 0 002.182-2.182v-2.073a2.182 2.182 0 00-2.182-2.182z"
              ></path>
              <path fill="#38d200" d="M35.638 18.599v10.364h-7.851V18.599h7.851z"></path>
            </svg>
          </span>
        )}
        <span className="sc-accordion__label-title">{props.heading}</span>
        {props.withDescription && (
          <span className="sc-accordion__label-desc">
            Want more rewards? Enjoy FX membership referral rewards by sharing a unique promo code
            with your family and friends
          </span>
        )}
      </label>
      <div className="sc-accordion__content sc-rte">
        <p>
          The Bank controls and maintains this Web Site from Singapore. The materials and
          information contained in this section of this Web Site, relating to Singapore, is directed
          at and restricted to individuals resident in or entities having a place of business in
          Singapore ONLY. The Bank makes no representation that the materials and information
          contained herein is appropriate or available for use in other locations / jurisdictions.
          These Terms and Conditions are governed by and construed in accordance with the laws of
          Singapore and any dispute relating thereto shall be subject to the non-exclusive
          jurisdiction of the courts of Singapore.
        </p>
      </div>
    </div>
  );
};
