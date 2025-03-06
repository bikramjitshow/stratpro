import React, { useState, useEffect } from 'react';
import ScSmartCalculator from './sc-smartcard-calculator.js';

export const SmartCardCalculators = () => {
  const [inputValueOne, setInputValueOne] = useState('800');
  const [inputValueTwo, setInputValueTwo] = useState('500');

  const handleChangeOne = event => {
    setInputValueOne(event.target.value);
  };
  const handleChangeTwo = event => {
    setInputValueTwo(event.target.value);
  };
  useEffect(() => {
    ScSmartCalculator.init();
  }, []);

  return (
    <div
      className="sc-smart-card-calculator sc-dark-bg"
      data-cashback='[
    {
        "minAmount": "0",
        "maxAmount": "799.99",
        "bonus": "4",
        "other": "0.5"
    },
    {
        "minAmount": "800",
        "maxAmount": "1499.99",
        "bonus": "8",
        "other": "0.5"
    },
    {
        "minAmount": "1500",
        "maxAmount": "-1",
        "bonus": "10",
        "other": "1"
    }
]'
    >
      <div className="sc-content-wrapper">
        <div className="sc-heading-inner sc-title--center">
          <h2 className="sc-title sc-title--inner">
            Discover the cashback you can earn with your monthly spend:
          </h2>
          <p className="sc-description">
            Viewing your transactions just got easier as it is now categorise
          </p>
        </div>
        <div className="sc-smart-card-calculator__wrapper">
          <div className="sc-smart-card-calculator__inner-wrapper">
            <div className="sc-smart-card-calculator__content">
              <div className="sc-smart-card-calculator__content-wrapper">
                <div className="sc-smart-card-calculator__content-text">
                  <h3 className="sc-smart-card-calculator__content-text-head">
                    SMART Dining, Transport, Streaming:
                  </h3>
                  <span className="sc-smart-card-calculator__error-msg sc-smart-card-calculator__error-msg-card">
                    Error
                  </span>
                </div>
                <div className="sc-smart-card-calculator__content-input">
                  S$
                  <input
                    type="text"
                    className="sc-smart-card-calculator__input sc-smart-card-calculator__input-card-spend"
                    pattern="[0-9]+"
                    data-max="10000"
                    data-default="800"
                    // below code added for fixing the value clearing issue in storybook
                    value={inputValueOne}
                    onChange={handleChangeOne}
                  />
                </div>
              </div>
            </div>
            <div className="sc-smart-card-calculator__content">
              <div className="sc-smart-card-calculator__content-wrapper">
                <div className="sc-smart-card-calculator__content-text">
                  <h3 className="sc-smart-card-calculator__content-text-head">
                    All other eligible spends:
                  </h3>
                  <span className="sc-smart-card-calculator__error-msg sc-smart-card-calculator__error-msg-card">
                    Error
                  </span>
                </div>
                <div className="sc-smart-card-calculator__content-input">
                  S$
                  <input
                    type="text"
                    className="sc-smart-card-calculator__input sc-smart-card-calculator__input-card-spend sc-smart-card-calculator__input-other-spend"
                    pattern="[0-9]+"
                    data-max="10000"
                    data-default="500"
                    // below code added for fixing the value clearing issue in storybook
                    value={inputValueTwo}
                    onChange={handleChangeTwo}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="sc-smart-card-calculator__inner-bottom">
            <p className="sc-smart-card-calculator__inner-bottom-top">
              You will unlock <span className="sc-smart-bonus-cashback-interest"></span> cashback at
              bonus merchants and <span className="sc-smart-other-cashback-interest"></span>{' '}
              cashback for all other eligible spend.
            </p>
            <p className="sc-smart-card-calculator__inner-bottom-bottom">
              Total cashback earned for your monthly spending:
              <span className="sc-smart-total-cashback"></span>
            </p>
          </div>
        </div>
        <div className="sc-smart-card-calculator__bottom sc-rte">
          <p>
            Cashback will be credited in the form of 360° rewards points, which can be redeemed in
            blocks of 3,200 points for $10 cashback
          </p>
        </div>
      </div>
    </div>
  );
};
