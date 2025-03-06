import React from 'react';
import IconIDCard from '../../../../static/icons/icon-sc-nw-id-card.js';
import IconTimeDeposit from '../../../../static/icons/icon-sc-nw-time-deposit.js';
import IconInfo from '../../../../static/icons/icon-sc-nw-info.js';
import IconBulb from '../../../../static/icons/icon-sc-nw-bulb.js';

export const ProductDetailsJourney = () => {
  return (
    <div className="sc-pdt-details-mbl">
      <div className="sc-pdt-details-mbl__wrapper">
        <div className="sc-pdt-details-mbl__bnr">
          <img
            src="https://av.sc.com/hk/content/images/hk-cxam-miles-renewal-inline-banner3-400-400.jpg"
            alt="time-deposit"
          />
          <p className="sc-pdt-details-mbl__bnr-text">Time Deposit</p>
        </div>
        <div className="sc-pdt-details-mbl__header sc-rte">
          <p>
            <strong>SGD Time Deposit (Fixed Deposit)</strong>
          </p>
        </div>
        <div className="sc-pdt-details-mbl__content">
          <div className="sc-pdt-details-mbl__desc sc-rte">
            <p>
              <strong>It will only take a few minutes</strong>
            </p>
          </div>
          <div className="sc-pdt-details-mbl__box">
            <div className="sc-pdt-details-mbl__box-icon">
              <IconIDCard />
            </div>
            <div className="sc-pdt-details-mbl__box-text">Your personal and employment details</div>
          </div>
          <div className="sc-pdt-details-mbl__box">
            <div className="sc-pdt-details-mbl__box-icon">
              <IconTimeDeposit />
            </div>
            <div className="sc-pdt-details-mbl__box-text">Your Time Deposit details</div>
          </div>
          <div className="sc-pdt-details-mbl__info">
            <div className="sc-pdt-details-mbl__info-icon">
              <IconInfo />
            </div>
            <div className="sc-pdt-details-mbl__info-text sc-rte">
              An account will be created for your funding and maturity of your Time Deposit.
            </div>
          </div>
        </div>
      </div>
      <div className="sc-pdt-details-mbl__step">
        <div className="sc-pdt-details-mbl__step-wrapper sc-rte">
          <p>
            <strong>You will be logging in to Singpass to verify your identity in the next </strong>
          </p>
          <p>
            By proceeding, you allow the bank to retrieve your personal data from Myinfo and use
            your information for following up.
          </p>
        </div>
        <div className="sc-pdt-details-mbl__step-icon">
          <IconBulb />
        </div>
      </div>
      <div className="sc-pdt-details-mbl__persistance">
        <ul className="sc-inline-buttons">
          <li className="sc-inline-buttons__item">
            <a className="sc-btn sc-btn--medium" href="#" title="Get Started">
              Get Started
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
