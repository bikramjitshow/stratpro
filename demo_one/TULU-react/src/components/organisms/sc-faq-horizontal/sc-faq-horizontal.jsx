import React, { useEffect } from 'react';
import FAQTwoColumn from './sc-faq-horizontal';
import { HeadingInners } from '../../molecules/sc-heading-inner/sc-heading-inner';
export const FAQHorizontally = function(props) {
  useEffect(() => {
    FAQTwoColumn.init();
  }, []);
  return (
    <div className={`sc-faq-horizontal ${props.class}`}>
      <div className="sc-content-wrapper">
        <HeadingInners icon={true} class="sc-title--center" />
        <div className="sc-faq-horizontal__wrapper">
          <h2 className="sc-faq-horizontal__title">Getting Started</h2>
          <div className="sc-faq-horizontal__left">
            <div className="sc-faq-horizontal__step-list">
              <label
                className="sc-faq-horizontal__step-item sc-faq-horizontal__step-item--active"
                tabIndex="0"
                htmlFor="panel-11"
              >
                How do I invest in an SC Invest portfolio?
              </label>
              <label className="sc-faq-horizontal__step-item" tabIndex="0" htmlFor="panel-12">
                What account do I need to invest in SC Invest?
              </label>
              <label className="sc-faq-horizontal__step-item" tabIndex="0" htmlFor="panel-13">
                Will my investment in SC Invest be counted towards bonus interest for my Bonus$aver
                Account?
              </label>
            </div>
          </div>
          <div className="sc-faq-horizontal__right">
            <div className="sc-faq-horizontal__content-wrapper">
              <input
                type="radio"
                className="sc-faq-horizontal__right-input"
                name="panels-1"
                aria-label="panel-var-1"
                id="panel-11"
                checked
              />
              <label className="sc-faq-horizontal__step-item" tabIndex="0" htmlFor="panel-11">
                How do I invest in an SC Invest portfolio?
              </label>
              <div className="sc-faq-horizontal__right-content">
                <div className="sc-faq-horizontal__right-tile sc-rte">
                  <p>
                    You can invest easily though the SC Mobile app. Simply follow these steps to get
                    started:
                  </p>
                  <ul className="sc-card-tile__list">
                    <li>
                      Log in to the SC Mobile app and access ‘SC Invest’ via the ‘Invest’ menu / tab
                    </li>
                    <li>
                      Choose from 4 portfolios available and select the one you wish to invest in.
                    </li>
                    <li>
                      Select ‘Invest’ and input your subscription details, such as your investment
                      amount and debiting account.
                    </li>
                    <li>Review and confirm your decision.</li>
                  </ul>
                  <div className="sc-card-tile__disclaimer">
                    Note: You need a valid deposits account with sufficient S$ to complete your
                    transaction.
                  </div>
                </div>
              </div>
            </div>
            <div className="sc-faq-horizontal__content-wrapper">
              <input
                type="radio"
                className="sc-faq-horizontal__right-input"
                name="panels-1"
                aria-label="panel-var-2"
                id="panel-12"
              />
              <label className="sc-faq-horizontal__step-item" tabIndex="0" htmlFor="panel-12">
                What account do I need to invest in SC Invest?
              </label>
              <div className="sc-faq-horizontal__right-content">
                <div className="sc-faq-horizontal__right-tile sc-rte">
                  <p>
                    You can invest easily though the SC Mobile app. Simply follow these steps to get
                    started:
                  </p>
                  <ul className="sc-card-tile__list">
                    <li>
                      Log in to the SC Mobile app and access ‘SC Invest’ via the ‘Invest’ menu / tab
                    </li>
                    <li>
                      Choose from 4 portfolios available and select the one you wish to invest in.
                    </li>
                  </ul>
                  <div className="sc-card-tile__disclaimer">
                    Note: You need a valid deposits account with sufficient S$ to complete your
                    transaction.
                  </div>
                </div>
              </div>
            </div>
            <div className="sc-faq-horizontal__content-wrapper">
              <input
                type="radio"
                className="sc-faq-horizontal__right-input"
                name="panels-1"
                aria-label="panel-var-3"
                id="panel-13"
              />
              <label className="sc-faq-horizontal__step-item" tabIndex="0" htmlFor="panel-13">
                Will my investment in SC Invest be counted towards bonus interest for my Bonus$aver
                Account?
              </label>
              <div className="sc-faq-horizontal__right-content">
                <div className="sc-faq-horizontal__right-tile sc-rte">
                  <p>
                    You can invest easily though the SC Mobile app. Simply follow these steps to get
                    started:
                  </p>
                  <ul className="sc-card-tile__list">
                    <li>
                      Log in to the SC Mobile app and access ‘SC Invest’ via the ‘Invest’ menu / tab
                    </li>
                    <li>
                      Choose from 4 portfolios available and select the one you wish to invest in.
                    </li>
                    <li>Review and confirm your decision.</li>
                  </ul>
                  <div className="sc-card-tile__disclaimer">
                    Note: You need a valid deposits account with sufficient S$ to complete your
                    transaction.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sc-faq-horizontal__wrapper">
          <h2 className="sc-faq-horizontal__title">Getting Started</h2>
          <div className="sc-faq-horizontal__left">
            <div className="sc-faq-horizontal__step-list">
              <label
                className="sc-faq-horizontal__step-item sc-faq-horizontal__step-item--active"
                tabIndex="0"
                htmlFor="panel-20"
              >
                How do I invest in an SC Invest portfolio?
              </label>
              <label className="sc-faq-horizontal__step-item" tabIndex="0" htmlFor="panel-21">
                What account do I need to invest in SC Invest?
              </label>
              <label className="sc-faq-horizontal__step-item" tabIndex="0" htmlFor="panel-22">
                Will my investment in SC Invest be counted towards bonus interest for my Bonus$aver
                Account?
              </label>
            </div>
          </div>
          <div className="sc-faq-horizontal__right">
            <div className="sc-faq-horizontal__content-wrapper">
              <input
                type="radio"
                className="sc-faq-horizontal__right-input"
                name="panels-2"
                aria-label="panel-var-1"
                id="panel-20"
                checked
              />
              <label className="sc-faq-horizontal__step-item" tabIndex="0" htmlFor="panel-20">
                How do I invest in an SC Invest portfolio?
              </label>
              <div className="sc-faq-horizontal__right-content">
                <div className="sc-faq-horizontal__right-tile sc-rte">
                  <p>
                    You can invest easily though the SC Mobile app. Simply follow these steps to get
                    started:
                  </p>
                  <ul className="sc-card-tile__list">
                    <li>
                      Log in to the SC Mobile app and access ‘SC Invest’ via the ‘Invest’ menu / tab
                    </li>
                    <li>
                      Choose from 4 portfolios available and select the one you wish to invest in.
                    </li>
                    <li>
                      Select ‘Invest’ and input your subscription details, such as your investment
                      amount and debiting account.
                    </li>
                    <li>Review and confirm your decision.</li>
                  </ul>
                  <div className="sc-card-tile__disclaimer">
                    Note: You need a valid deposits account with sufficient S$ to complete your
                    transaction.
                  </div>
                </div>
              </div>
            </div>
            <div className="sc-faq-horizontal__content-wrapper">
              <input
                type="radio"
                className="sc-faq-horizontal__right-input"
                name="panels-2"
                aria-label="panel-var-2"
                id="panel-21"
              />
              <label className="sc-faq-horizontal__step-item" tabIndex="0" htmlFor="panel-21">
                What account do I need to invest in SC Invest?
              </label>
              <div className="sc-faq-horizontal__right-content">
                <div className="sc-faq-horizontal__right-tile sc-rte">
                  <p>
                    You can invest easily though the SC Mobile app. Simply follow these steps to get
                    started:
                  </p>
                  <ul className="sc-card-tile__list">
                    <li>
                      Log in to the SC Mobile app and access ‘SC Invest’ via the ‘Invest’ menu / tab
                    </li>
                    <li>
                      Choose from 4 portfolios available and select the one you wish to invest in.
                    </li>
                  </ul>
                  <div className="sc-card-tile__disclaimer">
                    Note: You need a valid deposits account with sufficient S$ to complete your
                    transaction.
                  </div>
                </div>
              </div>
            </div>
            <div className="sc-faq-horizontal__content-wrapper">
              <input
                type="radio"
                className="sc-faq-horizontal__right-input"
                name="panels-2"
                aria-label="panel-var-3"
                id="panel-22"
              />
              <label className="sc-faq-horizontal__step-item" tabIndex="0" htmlFor="panel-22">
                Will my investment in SC Invest be counted towards bonus interest for my Bonus$aver
                Account?
              </label>
              <div className="sc-faq-horizontal__right-content">
                <div className="sc-faq-horizontal__right-tile sc-rte">
                  <p>
                    You can invest easily though the SC Mobile app. Simply follow these steps to get
                    started:
                  </p>
                  <ul className="sc-card-tile__list">
                    <li>
                      Log in to the SC Mobile app and access ‘SC Invest’ via the ‘Invest’ menu / tab
                    </li>
                    <li>
                      Choose from 4 portfolios available and select the one you wish to invest in.
                    </li>
                    <li>Review and confirm your decision.</li>
                  </ul>
                  <div className="sc-card-tile__disclaimer">
                    Note: You need a valid deposits account with sufficient S$ to complete your
                    transaction.
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
