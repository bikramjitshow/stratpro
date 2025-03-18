import React, { useEffect } from 'react';
import ScColumnWithTabs from './sc-column-with-tabs.js';
import IconDoor from '../../../../static/icons/icon-sc-nw-door';

export const ColumnWithTabs = function(props) {
  useEffect(() => {
    ScColumnWithTabs.init();
  }, []);
  return (
    <div
      className={`sc-column-with-tabs sc-column-with-tabs--plus ${props.class}
      ${props.BgBlue ? 'sc-blue-bg' : ''}
      ${props.BgDark ? 'sc-dark-bg' : ''}`}
    >
      {props.WithBg && (
        <picture>
          <source
            srcSet="https://av.sc.com/sg/content/images/bcc-column-comparison-bg-desktop.jpg"
            media="(min-width: 768px)"
          />
          <source
            srcSet="https://av.sc.com/sg/content/images/bcc-column-comparison-bg-mobile.jpg"
            media="(max-width: 767px)"
          />
          <img
            src="https://av.sc.com/sg/content/images/bcc-column-comparison-bg-desktop.jpg"
            className="sc-column-comparison__bg"
            width="1600"
            height="490"
            alt="Adult, Female, Person"
          />
        </picture>
      )}

      <div className="sc-content-wrapper">
        <div className="sc-heading-inner sc-title--center">
          <h2 className="sc-title sc-title--bold sc-title--inner">
            Unlock the path to
            <span style={{ color: 'rgb(56, 210, 0)' }}>a million</span>
            miles and more with your Beyond Credit Card
          </h2>
          <p className="sc-description">
            Viewing your transactions just got easier as it is now categorised into ‘Deposits’ and
            ‘Credit Cards’ for your easy viewing.
          </p>
        </div>
        <div className="sc-column-with-tabs__tiles">
          <div tabIndex="0" role="button" className="sc-column-with-tabs__tile">
            <img
              className="sc-column-with-tabs__tile-big-img"
              src="https://av.sc.com/hk/content/images/hk-cc-cx-expedia-1600-490.jpg"
              alt="Image"
            />
            <div className="sc-column-with-tabs__tile-content">
              <div className="sc-column-with-tabs__head">
                <div className="sc-column-with-tabs__head-left">Spend with us</div>
                <div className="sc-column-with-tabs__head-right">
                  <p>Earn up to</p>
                  <p>
                    <strong>100,000</strong>
                    miles
                  </p>
                </div>
              </div>
              <div className="sc-column-with-tabs__collapsed">
                <div className="sc-column-tile">
                  <div className="sc-column-tile__left">
                    <div className="sc-column-tile__icon">
                      <IconDoor />
                    </div>
                  </div>
                  <div className="sc-column-tile__right">
                    <div className="sc-column-tile__right-content sc-rte">
                      <p>Earn</p>
                      <p>
                        <strong>60,000</strong>
                      </p>
                      <p>miles</p>
                    </div>
                  </div>
                </div>
                <div className="sc-column-tile">
                  <div className="sc-column-tile__left">
                    <div className="sc-column-tile__icon">
                      <IconDoor />
                    </div>
                  </div>
                  <div className="sc-column-tile__right">
                    <div className="sc-column-tile__right-content sc-rte">
                      <p>Earn</p>
                      <p>
                        <strong>40,000</strong>
                      </p>
                      <p>miles</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="sc-column-with-tabs__content-wrapper">
                <div className="sc-column-tile">
                  <div className="sc-column-tile__left">
                    <div className="sc-column-tile__icon">
                      <IconDoor />
                    </div>
                    <div className="sc-column-tile__left-content">Pay your card annual fee</div>
                  </div>
                  <div className="sc-column-tile__right">
                    <div className="sc-column-tile__icon">
                      <IconDoor />
                    </div>
                    <div className="sc-column-tile__right-content sc-rte">
                      <p>Earn</p>
                      <p>
                        <strong>60,000</strong>
                      </p>
                      <p>miles</p>
                    </div>
                  </div>
                </div>
                <div className="sc-column-tile">
                  <div className="sc-column-tile__left">
                    <div className="sc-column-tile__icon">
                      <IconDoor />
                    </div>
                    <div className="sc-column-tile__left-content">
                      Meet minimum spend of S$20,000 within 3 months
                    </div>
                  </div>
                  <div className="sc-column-tile__right">
                    <div className="sc-column-tile__icon">
                      <IconDoor />
                    </div>
                    <div className="sc-column-tile__right-content sc-rte">
                      <p>Earn</p>
                      <p>
                        <strong>40,000</strong>
                      </p>
                      <p>miles</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            tabIndex="0"
            role="button"
            className="sc-column-with-tabs__tile sc-column-with-tabs__tile--active"
          >
            {/* <img
              className="sc-column-with-tabs__tile-big-img"
              src="https://av.sc.com/hk/content/images/hk-cc-cx-expedia-1600-490.jpg"
              alt="Image"
            /> */}
            <div className="sc-column-with-tabs__tile-content">
              <div className="sc-column-with-tabs__head">
                <div className="sc-column-with-tabs__head-left">Grow your wealth</div>
                <div className="sc-column-with-tabs__head-right">
                  <p>Earn up to</p>
                  <p>
                    <strong>1,050,000</strong>
                    miles
                  </p>
                </div>
              </div>
              <div className="sc-column-with-tabs__collapsed">
                <div className="sc-column-tile">
                  <div className="sc-column-tile__left">
                    <div className="sc-column-tile__icon">
                      <IconDoor />
                    </div>
                  </div>
                  <div className="sc-column-tile__right">
                    <div className="sc-column-tile__right-content sc-rte">
                      <p>Earn</p>
                      <p>
                        <strong>200,000</strong>
                      </p>
                      <p>miles</p>
                    </div>
                  </div>
                </div>
                <div className="sc-column-tile">
                  <div className="sc-column-tile__left">
                    <div className="sc-column-tile__icon">
                      <IconDoor />
                    </div>
                  </div>
                  <div className="sc-column-tile__right">
                    <div className="sc-column-tile__right-content sc-rte">
                      <p>Earn</p>
                      <p>
                        <strong>350,000</strong>
                      </p>
                      <p>miles</p>
                    </div>
                  </div>
                </div>
                <div className="sc-column-tile">
                  <div className="sc-column-tile__left">
                    <div className="sc-column-tile__icon">
                      <IconDoor />
                    </div>
                  </div>
                  <div className="sc-column-tile__right">
                    <div className="sc-column-tile__right-content sc-rte">
                      <p>Earn</p>
                      <p>
                        <strong>200,000</strong>
                      </p>
                      <p>miles</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="sc-column-with-tabs__content-wrapper">
                <div className="sc-column-with-tabs__tab-list">
                  <div className="sc-column-with-tabs__tab-list-box">
                    <div
                      className="sc-column-with-tabs__tab sc-column-with-tabs__tab--active"
                      data-column-tab-id="one"
                    >
                      <span className="sc-only-desktop">I’m a Priority Private client</span>
                      <span className="sc-only-mobile">Priority Private</span>
                    </div>
                    <div className="sc-column-with-tabs__tab" data-column-tab-id="two">
                      <span className="sc-only-desktop">I’m a Priority Banking customer</span>
                      <span className="sc-only-mobile">Priority Banking</span>
                    </div>
                  </div>
                  <div
                    className="sc-column-with-tabs__tab-content sc-column-with-tabs__tab-content--show"
                    data-column-tab-content="one"
                  >
                    <div className="sc-column-with-tabs__tab-inner-list">
                      <div className="sc-column-with-tabs__tab-inner-list-box">
                        <div
                          className="sc-column-with-tabs__tab-inner sc-column-with-tabs__tab-inner--active"
                          data-column-tab-id-inner="11"
                        >
                          New to SC client
                        </div>
                        <div
                          className="sc-column-with-tabs__tab-inner"
                          data-column-tab-id-inner="12"
                        >
                          Existing to SC client
                        </div>
                      </div>
                      <div
                        className="sc-column-with-tabs__tab-inner-content sc-column-with-tabs__tab-content--inner-show"
                        data-column-tab-content-inner="11"
                      >
                        <div className="sc-column-tile">
                          <div className="sc-column-tile__left">
                            <div className="sc-column-tile__icon">
                              <IconDoor />
                            </div>
                            <div className="sc-column-tile__left-content">
                              Sign up for Priority Banking with minimum S$1.5 million in fresh funds
                              and complete an Accredited Investor declaration
                            </div>
                          </div>
                          <div className="sc-column-tile__right">
                            <div className="sc-column-tile__icon">
                              <IconDoor />
                            </div>
                            <div className="sc-column-tile__right-content sc-rte">
                              <p>Earn</p>
                              <p>
                                <strong>200,000</strong>
                              </p>
                              <p>miles</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="sc-column-with-tabs__tab-inner-content"
                        data-column-tab-content-inner="12"
                      >
                        <div className="sc-column-tile">
                          <div className="sc-column-tile__left">
                            <div className="sc-column-tile__icon">
                              <IconDoor />
                            </div>
                            <div className="sc-column-tile__left-content">
                              Earn 10,000 miles for every S$100,000 in fresh funds deposited to your
                              Wealth$aver account, up to S$2 million.
                            </div>
                          </div>
                          <div className="sc-column-tile__right">
                            <div className="sc-column-tile__icon">
                              <IconDoor />
                            </div>
                            <div className="sc-column-tile__right-content sc-rte">
                              <p>Earn</p>
                              <p>
                                <strong>200,000</strong>
                              </p>
                              <p>miles</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="sc-column-tile">
                      <div className="sc-column-tile__badge">Unit Trust</div>
                      <div className="sc-column-tile__left">
                        <div className="sc-column-tile__icon">
                          <IconDoor />
                        </div>
                        <div className="sc-column-tile__left-content">
                          Earn 12,500 miles for every S$100,000 invested in Unit Trusts, up to S$2
                          million.
                        </div>
                      </div>
                      <div className="sc-column-tile__right">
                        <div className="sc-column-tile__icon">
                          <IconDoor />
                        </div>
                        <div className="sc-column-tile__right-content sc-rte">
                          <p>Earn</p>
                          <p>
                            <strong>250,000</strong>
                          </p>
                          <p>miles</p>
                        </div>
                      </div>
                    </div>
                    <div className="sc-column-with-tabs__tab-inner-list">
                      <div className="sc-column-with-tabs__tab-inner-list-box">
                        <div
                          className="sc-column-with-tabs__tab-inner sc-column-with-tabs__tab-inner--active"
                          data-column-tab-id-inner="55"
                        >
                          Single Premium
                        </div>
                        <div
                          className="sc-column-with-tabs__tab-inner"
                          data-column-tab-id-inner="66"
                        >
                          Regular Premium
                        </div>
                      </div>
                      <div
                        className="sc-column-with-tabs__tab-inner-content sc-column-with-tabs__tab-content--inner-show"
                        data-column-tab-content-inner="55"
                      >
                        <div className="sc-column-tile">
                          <div className="sc-column-tile__left">
                            <div className="sc-column-tile__icon">
                              <IconDoor />
                            </div>
                            <div className="sc-column-tile__left-content">
                              Earn 30,000 miles for every S$100,000 in Single Premium insurance
                              placed with us, up to S$1 million.
                            </div>
                          </div>
                          <div className="sc-column-tile__right">
                            <div className="sc-column-tile__icon">
                              <IconDoor />
                            </div>
                            <div className="sc-column-tile__right-content sc-rte">
                              <p>Earn</p>
                              <p>
                                <strong>300,000</strong>
                              </p>
                              <p>miles</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="sc-column-with-tabs__tab-inner-content"
                        data-column-tab-content-inner="66"
                      >
                        <div className="sc-column-tile">
                          <div className="sc-column-tile__left">
                            <div className="sc-column-tile__icon">
                              <IconDoor />
                            </div>
                            <div className="sc-column-tile__left-content">
                              Earn 30,000 miles for every S$30,000 Annual Premium Equivalent Regular
                              Premium insurance placed with us, up to S$300,000
                            </div>
                          </div>
                          <div className="sc-column-tile__right">
                            <div className="sc-column-tile__icon">
                              <IconDoor />
                            </div>
                            <div className="sc-column-tile__right-content sc-rte">
                              <p>Earn</p>
                              <p>
                                <strong>300,000</strong>
                              </p>
                              <p>miles</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="sc-column-with-tabs__tab-content" data-column-tab-content="two">
                    <div className="sc-column-with-tabs__tab-inner-list">
                      <div className="sc-column-with-tabs__tab-inner-list-box">
                        <div
                          className="sc-column-with-tabs__tab-inner sc-column-with-tabs__tab-inner--active"
                          data-column-tab-id-inner="111"
                        >
                          New to SC client 2
                        </div>
                        <div
                          className="sc-column-with-tabs__tab-inner"
                          data-column-tab-id-inner="122"
                        >
                          Existing to SC client 2
                        </div>
                      </div>
                      <div
                        className="sc-column-with-tabs__tab-inner-content sc-column-with-tabs__tab-content--inner-show"
                        data-column-tab-content-inner="111"
                      >
                        <div className="sc-column-tile">
                          <div className="sc-column-tile__left">
                            <div className="sc-column-tile__icon">
                              <IconDoor />
                            </div>
                            <div className="sc-column-tile__left-content">
                              Sign up for Priority Banking with minimum S$1.5 million in fresh funds
                              and complete an Accredited Investor declaration
                            </div>
                          </div>
                          <div className="sc-column-tile__right">
                            <div className="sc-column-tile__icon">
                              <IconDoor />
                            </div>
                            <div className="sc-column-tile__right-content sc-rte">
                              <p>Earn</p>
                              <p>
                                <strong>200,000</strong>
                              </p>
                              <p>miles</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="sc-column-with-tabs__tab-inner-content"
                        data-column-tab-content-inner="122"
                      >
                        <div className="sc-column-tile">
                          <div className="sc-column-tile__left">
                            <div className="sc-column-tile__icon">
                              <IconDoor />
                            </div>
                            <div className="sc-column-tile__left-content">
                              Earn 10,000 miles for every S$100,000 in fresh funds deposited to your
                              Wealth$aver account, up to S$2 million.
                            </div>
                          </div>
                          <div className="sc-column-tile__right">
                            <div className="sc-column-tile__icon">
                              <IconDoor />
                            </div>
                            <div className="sc-column-tile__right-content sc-rte">
                              <p>Earn</p>
                              <p>
                                <strong>200,000</strong>
                              </p>
                              <p>miles</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="sc-column-tile">
                      <div className="sc-column-tile__badge">Unit Trust</div>
                      <div className="sc-column-tile__left">
                        <div className="sc-column-tile__icon">
                          <IconDoor />
                        </div>
                        <div className="sc-column-tile__left-content">
                          Earn 12,500 miles for every S$100,000 invested in Unit Trusts, up to S$2
                          million.
                        </div>
                      </div>
                      <div className="sc-column-tile__right">
                        <div className="sc-column-tile__icon">
                          <IconDoor />
                        </div>
                        <div className="sc-column-tile__right-content sc-rte">
                          <p>Earn</p>
                          <p>
                            <strong>250,000</strong>
                          </p>
                          <p>miles</p>
                        </div>
                      </div>
                    </div>
                    <div className="sc-column-with-tabs__tab-inner-list">
                      <div className="sc-column-with-tabs__tab-inner-list-box">
                        <div
                          className="sc-column-with-tabs__tab-inner sc-column-with-tabs__tab-inner--active"
                          data-column-tab-id-inner="555"
                        >
                          Single Premium
                        </div>
                        <div
                          className="sc-column-with-tabs__tab-inner"
                          data-column-tab-id-inner="666"
                        >
                          Regular Premium
                        </div>
                      </div>
                      <div
                        className="sc-column-with-tabs__tab-inner-content sc-column-with-tabs__tab-content--inner-show"
                        data-column-tab-content-inner="555"
                      >
                        <div className="sc-column-tile">
                          <div className="sc-column-tile__left">
                            <div className="sc-column-tile__icon">
                              <IconDoor />
                            </div>
                            <div className="sc-column-tile__left-content">
                              Earn 30,000 miles for every S$100,000 in Single Premium insurance
                              placed with us, up to S$1 million.
                            </div>
                          </div>
                          <div className="sc-column-tile__right">
                            <div className="sc-column-tile__icon">
                              <IconDoor />
                            </div>
                            <div className="sc-column-tile__right-content sc-rte">
                              <p>Earn</p>
                              <p>
                                <strong>300,000</strong>
                              </p>
                              <p>miles</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="sc-column-with-tabs__tab-inner-content"
                        data-column-tab-content-inner="666"
                      >
                        <div className="sc-column-tile">
                          <div className="sc-column-tile__left">
                            <div className="sc-column-tile__icon">
                              <IconDoor />
                            </div>
                            <div className="sc-column-tile__left-content">
                              Earn 30,000 miles for every S$30,000 Annual Premium Equivalent Regular
                              Premium insurance placed with us, up to S$300,000
                            </div>
                          </div>
                          <div className="sc-column-tile__right">
                            <div className="sc-column-tile__icon">
                              <IconDoor />
                            </div>
                            <div className="sc-column-tile__right-content sc-rte">
                              <p>Earn</p>
                              <p>
                                <strong>300,000</strong>
                              </p>
                              <p>miles</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div tabIndex="0" role="button" className="sc-column-with-tabs__tile">
            {/* <img
              className="sc-column-with-tabs__tile-big-img"
              src="https://av.sc.com/hk/content/images/hk-cc-cx-expedia-1600-490.jpg"
              alt="Image"
            /> */}
            <div className="sc-column-with-tabs__tile-content">
              <div className="sc-column-with-tabs__head">
                <div className="sc-column-with-tabs__head-left">Refer your loved ones</div>
                <div className="sc-column-with-tabs__head-right">
                  <p>Earn up to</p>
                  <p>
                    <strong>150,000</strong> miles
                  </p>
                </div>
              </div>
              <div className="sc-column-with-tabs__collapsed">
                <div className="sc-column-tile">
                  <div className="sc-column-tile__left">
                    <div className="sc-column-tile__icon">
                      <IconDoor />
                    </div>
                  </div>
                  <div className="sc-column-tile__right">
                    <div className="sc-column-tile__right-content sc-rte">
                      <p>Earn</p>
                      <p>
                        <strong>150,000</strong>
                      </p>
                      <p>miles</p>
                    </div>
                  </div>
                </div>
                <div className="sc-column-tile">
                  <div className="sc-column-tile__left">
                    <div className="sc-column-tile__icon">
                      <IconDoor />
                    </div>
                  </div>
                  <div className="sc-column-tile__right">
                    <div className="sc-column-tile__right-content sc-rte">
                      <p>Earn</p>
                      <p>
                        <strong>50,000</strong>
                      </p>
                      <p>miles</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="sc-column-with-tabs__content-wrapper">
                <div className="sc-column-tile">
                  <div className="sc-column-tile__badge">Priority Private Referral</div>
                  <div className="sc-column-tile__left">
                    <div className="sc-column-tile__icon">
                      <IconDoor />
                    </div>
                    <div className="sc-column-tile__left-content">
                      Refer a new Beyond Credit Card
                      <sup>2</sup>
                      and Priority Private client
                    </div>
                  </div>
                  <div className="sc-column-tile__right">
                    <div className="sc-column-tile__icon">
                      <IconDoor />
                    </div>
                    <div className="sc-column-tile__right-content sc-rte">
                      <p>Earn</p>
                      <p>
                        <strong>150,000</strong>
                      </p>
                      <p>miles</p>
                    </div>
                  </div>
                </div>
                <div className="sc-column-tile">
                  <div className="sc-column-tile__badge">Priority Banking Referral</div>
                  <div className="sc-column-tile__left">
                    <div className="sc-column-tile__icon">
                      <IconDoor />
                    </div>
                    <div className="sc-column-tile__left-content">
                      Refer a new Beyond Credit Card
                      <sup>2</sup>
                      and Priority Banking client
                    </div>
                  </div>
                  <div className="sc-column-tile__right">
                    <div className="sc-column-tile__icon">
                      <IconDoor />
                    </div>
                    <div className="sc-column-tile__right-content sc-rte">
                      <p>Earn</p>
                      <p>
                        <strong>50,000</strong>
                      </p>
                      <p>miles</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
