import React, { useEffect } from 'react';
import StepByStep from './sc-step-by-step.js';
import { QrBoxs } from '../../molecules/sc-qr-box/sc-qr-box.jsx';
export const StepByStepModule = props => {
  useEffect(() => {
    StepByStep.init();
  }, []);
  return (
    <div className={`sc-step-by-step ${props.class}`} id="sc-lb-module-steps">
      <div className="sc-content-wrapper">
        <div className="sc-heading-inner sc-title--center">
          <h2 className="sc-title sc-title--inner undefined">You Maybe Interested In</h2>
          <p className="sc-description">
            Viewing your transactions just got easier as it is now categorised into ‘Deposits’ and
            ‘Credit Cards’ for your easy viewing.
          </p>
        </div>
      </div>

      <div className="sc-content-wrapper">
        <div className="sc-step-by-step__left">
          <div className="splide sc-step-by-step__slider  sc-step-by-step__slider-0">
            <div className="splide__track">
              <ul className="splide__list">
                <li className="splide__slide">
                  {props.mobileBigImg && (
                    <img
                      src="https://av.sc.com/sg/content/images/sg-ability-to-adapt-2560x1707px.png"
                      className="sc-step-by-step__slider-img"
                      alt="Electronics, Mobile Phone, Phone"
                    />
                  )}
                  {props.mobileImg && (
                    <img
                      width="515"
                      height="1024"
                      src="https://av.sc.com/sg/content/images/sc-invest-nitro-step-1.png"
                      className="sc-step-by-step__slider-img"
                      alt="Electronics, Mobile Phone, Phone"
                    />
                  )}
                </li>
                <li className="splide__slide">
                  {props.mobileBigImg && (
                    <img
                      src="https://av.sc.com/sg/content/images/B419E-000656-00_SC-Beyond-Credit-Card-Launch_Beach_d4-Fn-RGB-scaled.jpg"
                      className="sc-step-by-step__slider-img"
                      alt="Electronics, Mobile Phone, Phone"
                    />
                  )}
                  {props.mobileImg && (
                    <img
                      width="515"
                      height="1024"
                      src="https://av.sc.com/hk/content/images/hk-osp-step-by-step_step1_1016px_2048px.png"
                      className="sc-step-by-step__slider-img"
                      alt="Electronics, Mobile Phone, Phone"
                    />
                  )}
                </li>
                <li className="splide__slide">
                  {props.mobileBigImg && (
                    <img
                      src="https://av.sc.com/sg/content/images/sg-ability-to-adapt-2560x1707px.png"
                      className="sc-step-by-step__slider-img"
                      alt="Electronics, Mobile Phone, Phone"
                    />
                  )}
                  {props.mobileImg && (
                    <img
                      width="515"
                      height="1024"
                      src="https://av.sc.com/sg/content/images/sc-invest-nitro-step-3.png"
                      className="sc-step-by-step__slider-img"
                      alt="Electronics, Mobile Phone, Phone"
                    />
                  )}
                </li>
                <li className="splide__slide">
                  {props.mobileBigImg && (
                    <img
                      src="https://av.sc.com/sg/content/images/B419E-000656-00_SC-Beyond-Credit-Card-Launch_Beach_d4-Fn-RGB-scaled.jpg"
                      className="sc-step-by-step__slider-img"
                      alt="Electronics, Mobile Phone, Phone"
                    />
                  )}
                  {props.mobileImg && (
                    <img
                      width="515"
                      height="1024"
                      src="https://av.sc.com/sg/content/images/sc-invest-nitro-step-4.png"
                      className="sc-step-by-step__slider-img"
                      alt="Electronics, Mobile Phone, Phone"
                    />
                  )}
                </li>
              </ul>
            </div>
          </div>
          {props.ScInlineButtons && (
            <ul className="sc-inline-buttons sc-only-mobile">
              <li className="sc-inline-buttons__item ">
                <a
                  href="#"
                  title="Find Out More"
                  data-context="Add context"
                  className="sc-btn"
                  target="_blank"
                >
                  <span className="sc-only-desktop">Find Out More</span>
                  <span className="sc-only-mobile">Find Out More</span>
                </a>
              </li>
              <li className="sc-inline-buttons__item ">
                <a
                  href="#"
                  title="Find Out More"
                  data-context="Add context"
                  className="sc-btn sc-btn--secondary-white"
                  target="_blank"
                >
                  <span className="sc-only-desktop">Find Out More</span>
                  <span className="sc-only-mobile">Find Out More</span>
                </a>
              </li>
            </ul>
          )}
        </div>
        <div className="sc-step-by-step__right">
          <div className="sc-step-by-step__head">
            <h2 className="sc-step-by-step__title">Make a Remittance Now</h2>
            {props.HeadDescription && (
              <p className="sc-step-by-step__desc">
                Make a Remittance Now Make a Remittance Now Make a Remittance Now
              </p>
            )}
          </div>
          <div className="splide sc-step-by-step__slider-content  sc-step-by-step__slider-content-0">
            <div className="splide__track">
              <div className="splide__list">
                <div className="splide__slide">
                  <p className="sc-step-by-step__step-num">Step 1</p>
                  <div className="sc-step-by-step__desc">
                    <p>
                      <strong>Apply for a Bonus$aver account</strong>
                    </p>
                    <p>
                      Log in to SC Mobile App &gt; Discover Tab &gt; Refer a friend & Be rewarded
                    </p>
                  </div>
                </div>
                <div className="splide__slide">
                  <p className="sc-step-by-step__step-num">Step 2</p>
                  <div className="sc-step-by-step__desc">
                    <p>
                      <strong>Apply for a Bonus$aver account</strong>
                    </p>
                    <p>Click &quot;Refer now&quot; and select the product you want to refer</p>
                  </div>
                </div>
                <div className="splide__slide">
                  <p className="sc-step-by-step__step-num">Step 3</p>
                  <div className="sc-step-by-step__desc">
                    <p>
                      <strong>Apply for a Bonus$aver</strong>
                    </p>
                    <p>
                      Select a messaging app to share your referral link with your friends and
                      family
                    </p>
                  </div>
                </div>
                <div className="splide__slide">
                  <p className="sc-step-by-step__step-num">Step 4</p>
                  <div className="sc-step-by-step__desc">
                    <p>
                      <strong>Apply for a Bonus$aver account</strong>
                    </p>
                    <p>
                      Send your referral link to your friends and family and you will be rewarded
                      when their applications are approved
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {props.ScInlineButtons && !props.QRCode && (
              <ul className="sc-inline-buttons sc-only-desktop">
                <li className="sc-inline-buttons__item ">
                  <a
                    href="#"
                    title="Find Out More"
                    data-context="Add context"
                    className="sc-btn"
                    target="_blank"
                  >
                    <span className="sc-only-desktop">Find Out More</span>
                    <span className="sc-only-mobile">Find Out More</span>
                  </a>
                </li>
                <li className="sc-inline-buttons__item ">
                  <a
                    href="#"
                    title="Find Out More"
                    data-context="Add context"
                    className="sc-btn sc-btn--secondary-white"
                    target="_blank"
                  >
                    <span className="sc-only-desktop">Find Out More</span>
                    <span className="sc-only-mobile">Find Out More</span>
                  </a>
                </li>
              </ul>
            )}
            {props.QRCode && <QrBoxs class="sc-only-desktop" />}
          </div>
        </div>
      </div>
    </div>
  );
};
