import React, { useEffect } from 'react';
import ImgOne from '../../../../static/images/sg-travel-easy-400px.jpg';
import Privilege from './sc-privileges';

export const Privileges = function(props) {
  useEffect(() => {
    Privilege.init();
  }, []);
  return (
    <>
      {props.default && (
        <div className={`sc-privileges ${props.class}`}>
          <div className="sc-content-wrapper">
            <div className="sc-privileges__left">
              <h2 className="sc-privileges__title">Lifestyle Privileges</h2>
              <p className="sc-privileges__sub-title">
                Rewarding you more with tailored privileges and benefits
              </p>
              <div className="sc-privileges__step-list">
                <label
                  className="sc-privileges__step-item sc-privileges__step-item--active"
                  tabIndex="0"
                  htmlFor="panel-1"
                >
                  1.88% p.a. HKD Preferential Savings Rate
                </label>
                <label className="sc-privileges__step-item" tabIndex="0" htmlFor="panel-2">
                  Win up to HKD10,000 Klook Reward
                </label>
                <label className="sc-privileges__step-item" tabIndex="0" htmlFor="panel-3">
                  EARN UP TO 2.4% P.A. INTEREST BOOSTER
                </label>
              </div>
            </div>
            <div className="sc-privileges__right">
              <div className="sc-privileges__content-wrapper sc-privileges__content-wrapper--scroll">
                <input
                  type="radio"
                  className="sc-privileges__right-input"
                  name="panels"
                  aria-label="panel 1"
                  id="panel-1"
                  checked
                />
                <label className="sc-privileges__step-item" tabIndex="0" htmlFor="panel-1">
                  1.88% p.a. HKD Preferential Savings Rate
                </label>
                <div className="sc-privileges__right-content">
                  <div className="sc-card-tile sc-card-tile--horizontal">
                    <div className="sc-card-tile__link">
                      <div className="sc-card-tile__tile-image" aria-hidden="true">
                        <img className="sc-card-tile__tile-img" src={ImgOne} title="image" />
                      </div>
                      <div className="sc-card-tile__content sc-rte">
                        <p className="sc-card-tile__title-top">Mobile Account</p>
                        <h3 className="sc-card-tile__title">Mobile Account Opening Offer</h3>

                        <div className="sc-card-tile__description">
                          <p>
                            Open an account via SC Mobile and sign up for Easy Banking now can enjoy
                            1.88%p.a. HKD Preferential Savings Rate! <sup>1</sup>
                          </p>
                          <p>
                            <a href="#">Learn More</a>
                          </p>

                          <ul className="sc-inline-buttons">
                            <li className="sc-inline-buttons__item">
                              <a
                                href="#null"
                                title="Open an account now"
                                className="sc-btn sc-btn--medium"
                              >
                                <span className="sc-only-desktop">Open an account now</span>
                                <span className="sc-only-mobile">Open an account now</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="sc-card-tile sc-card-tile--horizontal">
                    <div className="sc-card-tile__link">
                      <div className="sc-card-tile__tile-image" aria-hidden="true">
                        <img className="sc-card-tile__tile-img" src={ImgOne} title="image" />
                      </div>
                      <div className="sc-card-tile__content sc-rte">
                        <p className="sc-card-tile__title-top">Mobile Account</p>
                        <h3 className="sc-card-tile__title">Mobile Account Opening Offer</h3>

                        <div className="sc-card-tile__description">
                          <p>
                            Open an account via SC Mobile and sign up for Easy Banking now can enjoy
                            1.88%p.a. HKD Preferential Savings Rate! <sup>1</sup>
                          </p>
                          <p>
                            <a href="#">Learn More</a>
                          </p>
                        </div>

                        <ul className="sc-inline-buttons">
                          <li className="sc-inline-buttons__item">
                            <a
                              href="#null"
                              title="Open an account now"
                              className="sc-btn sc-btn--medium"
                            >
                              <span className="sc-only-desktop">Open an account now</span>
                              <span className="sc-only-mobile">Open an account now</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="sc-privileges__content-wrapper">
                <input
                  type="radio"
                  className="sc-privileges__right-input"
                  name="panels"
                  aria-label="panel 1"
                  id="panel-2"
                />
                <label className="sc-privileges__step-item" tabIndex="0" htmlFor="panel-2">
                  Win up to HKD10,000 Klook Reward
                </label>
                <div className="sc-privileges__right-content">
                  <div className="sc-card-tile sc-card-tile--horizontal">
                    <div className="sc-card-tile__link">
                      <div className="sc-card-tile__tile-image" aria-hidden="true">
                        <img className="sc-card-tile__tile-img" src={ImgOne} title="image" />
                      </div>
                      <div className="sc-card-tile__content sc-rte">
                        <p className="sc-card-tile__title-top">Mobile Account</p>
                        <h3 className="sc-card-tile__title">Unlimited Priority Pass™ access</h3>

                        <div className="sc-card-tile__description">
                          <p>
                            Escape to a quiet, connected space for work or leisure with
                            complimentary pre-flight bite and drinks. Take advantage of your
                            Priority PassTM which includes unlimited complimentary access to over
                            1,000 airport lounges in more than 130 countries with your Priority
                            Banking Visa Infinite Credit Card⁶
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="sc-privileges__content-wrapper">
                <input
                  type="radio"
                  className="sc-privileges__right-input"
                  name="panels"
                  aria-label="panel 1"
                  id="panel-3"
                />
                <label className="sc-privileges__step-item" tabIndex="0" htmlFor="panel-3">
                  EARN UP TO 2.4% P.A. INTEREST BOOSTER
                </label>
                <div className="sc-privileges__right-content">
                  <div className="sc-card-tile sc-card-tile--horizontal">
                    <div className="sc-card-tile__link">
                      <div className="sc-card-tile__tile-image" aria-hidden="true">
                        <img className="sc-card-tile__tile-img" src={ImgOne} title="image" />
                      </div>
                      <div className="sc-card-tile__content sc-rte">
                        <p className="sc-card-tile__title-top">Mobile Account</p>
                        <h3 className="sc-card-tile__title">APEC Card Application</h3>

                        <div className="sc-card-tile__description">
                          <p>
                            Faster air-travel is just one of the many benefits that we help our
                            valued Priority clients enjoy. Soon, you could be enjoying fast-track
                            access through designated APEC lanes and visa-free, pre-cleared entry to
                            19 economic regions. If your APEC Card application is approved by your
                            relevant immigration authority, we will be delighted to reimburse the
                            application fee*.
                          </p>
                          <p>
                            To find out more, please visit <a href="#">sc.com/sg/apec-card</a> in
                            case of any query, please speak to your Relationship Manager.
                          </p>
                          <p>
                            *For Singapore citizens, the APEC Business Travel Card Application Fee
                            must be charged to any Standard Chartered Credit or Debit Card
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
