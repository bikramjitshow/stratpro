import React, { useEffect } from 'react';
import ScProductChoose from './sc-product-choose.js';

export const ScProductChooses = function(props) {
  useEffect(() => {
    ScProductChoose.init();
  }, []);
  return (
    <>
      {props.default && (
        <div className={`sc-product-choose ${props.class}`}>
          <div className="sc-content-wrapper">
            <h2 className="sc-product-choose__title">Select welcome offer</h2>
            <div className="sc-product-choose__pdt-wrapper">
              <div className="sc-product-choose__pdt-box">
                <div className="sc-radio-box">
                  <input
                    type="radio"
                    className="sc-radio-box__input"
                    id="check-box-1"
                    tabIndex={-1}
                    name="checkbox-radio"
                    checked={true}
                    data-popup-id="modal-cta-apply-product-1"
                  />
                  <label className="sc-radio-box__input-label" htmlFor="check-box-1" tabIndex={0}>
                    Two HKGPPF vouchers with Infinity Room Access
                  </label>
                </div>
                <div className="sc-product-choose__content-wrapper">
                  <div className="sc-product-choose__content">
                    <img
                      src="https://av.sc.com/hk/content/images/hk-ppf-logo-green-1024x343-en.png"
                      className="sc-product-choose__img"
                      alt=""
                    />
                    <div className="sc-product-choose__text sc-rte">
                      <p>Two HKGPPF vouchers with Infinity Room Access</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="sc-product-choose__pdt-box">
                <div className="sc-radio-box">
                  <input
                    type="radio"
                    className="sc-radio-box__input"
                    id="check-box-2"
                    tabIndex={-1}
                    name="checkbox-radio"
                    data-popup-id="modal-cta-apply-product-2"
                  />
                  <label className="sc-radio-box__input-label" htmlFor="check-box-2" tabIndex={0}>
                    HKD800 CashBack
                  </label>
                </div>
                <div className="sc-product-choose__content-wrapper">
                  <div className="sc-product-choose__content">
                    <img
                      src="https://av.sc.com/hk/content/images/hk-cc-wingon-pmpd2.jpg"
                      className="sc-product-choose__img"
                      alt=""
                    />
                    <div className="sc-product-choose__text sc-rte">
                      <p>HKD800 Cashback</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <ul className="sc-inline-buttons">
              <li className="sc-inline-buttons__item">
                <a href="#null" className="sc-btn sc-btn--small sc-btn--blue" title="Next">
                  Next
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};
