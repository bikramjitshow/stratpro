import React from 'react';
import StepImage from '../../../../static/images/step-QR-code.png';

export const StartAccountSteps = props => {
  return (
    <div className={`sc-start-account-step ${props.class}`}>
      <div className="sc-start-account-step__image">
        <img src={StepImage} alt="image" />
      </div>
      <div className="sc-start-account-step__content">
        {props.text && (
          <p className="sc-start-account-step__text">
            <strong>{props.text}</strong>
          </p>
        )}
        {props.desc && (
          <div className="sc-start-account-step__text">
            <strong>{props.desc}</strong>
            {props.subdesc}
            {props.tooltip && (
              <span className="sc-tooltip sc-tooltip--blue">
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill="none"
                    stroke="#2772c7"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeMiterlimit="4"
                    strokeWidth="1"
                    d="M8 14c3.314 0 6-2.686 6-6s-2.686-6-6-6c-3.314 0-6 2.686-6 6s2.686 6 6 6z"
                  ></path>
                  <path
                    fill="none"
                    stroke="#2772c7"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeMiterlimit="4"
                    strokeWidth="1"
                    d="M7.5 7.5h0.5v3.5h0.5"
                  ></path>
                  <path
                    fill="#2772c7"
                    d="M8 6c0.414 0 0.75-0.336 0.75-0.75s-0.336-0.75-0.75-0.75c-0.414 0-0.75 0.336-0.75 0.75s0.336 0.75 0.75 0.75z"
                  ></path>
                </svg>
                <span className="sc-tooltip__text">Upload document</span>
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
