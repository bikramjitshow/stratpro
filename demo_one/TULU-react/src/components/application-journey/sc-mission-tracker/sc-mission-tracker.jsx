import React from 'react';

export const MissionTrackers = () => {
  return (
    <div className="sc-mission-tracker">
      <div className="sc-mission-tracker__view">
        <div className="sc-mission-tracker__img">
          <img
            src="https://av.sc.com/sg/content/images/sg-mission-tracker_banner.png"
            alt="banner"
          />
        </div>
        <h2 className="sc-mission-tracker__title">Complete all tasks to unlock your rewards!</h2>
        <p className="sc-mission-tracker__sub-title">
          Complete All tasks to unlock rewards on or before 1 Dec 2024
        </p>
      </div>
      <div className="sc-mission-tracker__wrapper">
        <div className="sc-mission-tracker__box">
          <h3 className="sc-mission-tracker__sub-head">Recommended Tasks</h3>
          <div className="sc-product-list-tile sc-product-list-tile--variant">
            <div className="sc-product-list-tile__link">
              <div className="sc-product-list-tile__details">
                <h3 className="sc-product-list-tile__prod-title">Fund Account</h3>
                <p className="sc-product-list-tile__prod-desc">
                  Add money and enjoy one month new fund rate
                </p>
              </div>
              <div className="sc-product-list-tile__offer">
                <div className="sc-product-list-tile__offer-label">
                  <span style={{ fontSize: '14px' }}>Add money to your account</span>
                </div>

                <ul className="sc-inline-buttons">
                  <li className="sc-inline-buttons__item">
                    <a
                      href="https://retail.sc.com/scmobile/hk/?ngroute=pay-and-transfer"
                      title="Go"
                      className="sc-btn sc-btn--small"
                    >
                      Go
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="sc-product-list-tile sc-product-list-tile--variant">
            <div className="sc-product-list-tile__link">
              <div className="sc-product-list-tile__details">
                <h3 className="sc-product-list-tile__prod-title">Register FPS</h3>
                <p className="sc-product-list-tile__prod-desc">
                  Facilitate fund-ins from other banks
                </p>
              </div>
              <div className="sc-product-list-tile__offer">
                <div className="sc-product-list-tile__offer-label">
                  <span style={{ fontSize: '14px' }}>Set SC as your default FPS account</span>
                </div>

                <ul className="sc-inline-buttons">
                  <li className="sc-inline-buttons__item">
                    <a
                      href="https://retail.sc.com/scmobile/hk/?ngroute=pay-and-transfer"
                      title="Go"
                      className="sc-btn sc-btn--small"
                    >
                      Go
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="sc-mission-tracker__box">
          <h3 className="sc-mission-tracker__sub-head">My Tasks</h3>
          <div className="sc-product-list-tile sc-product-list-tile--variant sc-product-list-tile--variant-blue">
            <div className="sc-product-list-tile__link">
              <div className="sc-product-list-tile__details">
                <h3 className="sc-product-list-tile__prod-title">Open Payroll Account</h3>
                <p className="sc-product-list-tile__prod-desc">Earn miles every month</p>
              </div>
              <div className="sc-product-list-tile__offer">
                <div className="sc-product-list-tile__offer-label">
                  Get up to
                  <br /> HKD
                  <strong>1,800</strong> <br />
                  Total rebate
                </div>

                <ul className="sc-inline-buttons">
                  <li className="sc-inline-buttons__item">
                    <a
                      href="https://retail.sc.com/scmobile/hk/?ngroute=pay-and-transfer"
                      title="Go"
                      className="sc-btn sc-btn--small"
                    >
                      Go
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="sc-product-list-tile sc-product-list-tile--variant sc-product-list-tile--variant-blue">
            <div className="sc-product-list-tile__link">
              <div className="sc-product-list-tile__details">
                <h3 className="sc-product-list-tile__prod-title">Apply for a SC Credit Card</h3>
                <p className="sc-product-list-tile__prod-desc">Earn miles every month</p>
              </div>
              <div className="sc-product-list-tile__offer">
                <div className="sc-product-list-tile__offer-label">
                  Earn up to
                  <br />
                  <strong>40,000</strong> <br />
                  Total miles
                </div>

                <ul className="sc-inline-buttons">
                  <li className="sc-inline-buttons__item">
                    <a
                      href="https://retail.sc.com/scmobile/hk/?ngroute=pay-and-transfer"
                      title="Go"
                      className="sc-btn sc-btn--small"
                    >
                      Go
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="sc-product-list-tile sc-product-list-tile--variant sc-product-list-tile--variant-blue">
            <div className="sc-product-list-tile__link">
              <div className="sc-product-list-tile__details">
                <h3 className="sc-product-list-tile__prod-title">Upgrade to Priority Banking</h3>
                <p className="sc-product-list-tile__prod-desc">Endless delight with priority</p>
              </div>
              <div className="sc-product-list-tile__offer">
                <div className="sc-product-list-tile__offer-label">
                  Get up to
                  <br /> HKD
                  <strong>1,800</strong> <br />
                  Total rebate
                </div>

                <ul className="sc-inline-buttons">
                  <li className="sc-inline-buttons__item">
                    <a
                      href="https://retail.sc.com/scmobile/hk/?ngroute=pay-and-transfer"
                      title="Go"
                      className="sc-btn sc-btn--small"
                    >
                      Go
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="sc-mission-tracker__disclaimer sc-rte">
          <p>
            <strong>Please note that the task completion may not be immediately reflected</strong>.
            Rest assured, we’re working on updating the tracker as quickly as possible. If you’ve
            completed a task and it’s not showing, no further action is required on your part at
            this time.
          </p>
        </div>
      </div>
    </div>
  );
};
