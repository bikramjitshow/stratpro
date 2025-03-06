import React from 'react';
import ImgOne from '../../../../static/images/sg-travel-easy-400px.jpg';

export const ScQuickAccess = props => {
  return (
    <div className={`sc-quick-access ${props.class}`}>
      <div className="sc-content-wrapper">
        <div className="sc-heading-inner sc-title--center">
          <h2 className="sc-title sc-title--inner">Membership Rewards</h2>
          <div className="sc-description">
            I want to participate the markets with downside protection
          </div>
        </div>
        <div className="sc-quick-access__wrapper">
          <div className="sc-quick-access__col-left">
            <a href="#" title="Signature CIO Funds" className="sc-quick-access-tile">
              <div className="sc-quick-access-tile__item sc-rte">
                <div className="sc-quick-access-tile__title">Signature CIO Funds</div>
                <div className="sc-quick-access-tile__desc">
                  Multi-asset fund of funds & ETFs portfolio
                </div>
              </div>
            </a>
            <a href="#" title="Signature CIO Funds" className="sc-quick-access-tile">
              <div className="sc-quick-access-tile__item sc-rte">
                <div className="sc-quick-access-tile__title">Signature CIO Funds</div>
                <div className="sc-quick-access-tile__desc">
                  Multi-asset fund of funds & ETFs portfolio
                </div>
              </div>
            </a>
            <a href="#" title="Signature CIO Funds" className="sc-quick-access-tile">
              <div className="sc-quick-access-tile__item sc-rte">
                <div className="sc-quick-access-tile__title">Signature CIO Funds</div>
                <div className="sc-quick-access-tile__desc">
                  Multi-asset fund of funds & ETFs portfolio
                </div>
              </div>
            </a>
            <a href="#" title="Signature CIO Funds" className="sc-quick-access-tile">
              <div className="sc-quick-access-tile__item sc-rte">
                <div className="sc-quick-access-tile__title">Signature CIO Funds</div>
                <div className="sc-quick-access-tile__desc">
                  Multi-asset fund of funds & ETFs portfolio
                </div>
              </div>
            </a>
            <a href="#" title="Signature CIO Funds" className="sc-quick-access-tile">
              <div className="sc-quick-access-tile__item sc-rte">
                <div className="sc-quick-access-tile__title">Signature CIO Funds</div>
                <div className="sc-quick-access-tile__desc">
                  Multi-asset fund of funds & ETFs portfolio
                </div>
              </div>
            </a>
            <a href="#" title="Signature CIO Funds" className="sc-quick-access-tile">
              <div className="sc-quick-access-tile__item sc-rte">
                <div className="sc-quick-access-tile__title">Signature CIO Funds</div>
                <div className="sc-quick-access-tile__desc">
                  Multi-asset fund of funds & ETFs portfolio
                </div>
              </div>
            </a>
            <a href="#" title="Signature CIO Funds" className="sc-quick-access-tile">
              <div className="sc-quick-access-tile__item sc-rte">
                <div className="sc-quick-access-tile__title">Signature CIO Funds</div>
                <div className="sc-quick-access-tile__desc">
                  Multi-asset fund of funds & ETFs portfolio
                </div>
              </div>
            </a>
          </div>

          <div className="sc-quick-access__col-right">
            <div className="sc-card-tile">
              <div className="sc-card-tile__link">
                <div className="sc-card-tile__tile-image" aria-hidden="true">
                  <img className="sc-card-tile__tile-img" src={ImgOne} title="image" />
                </div>
                <div className="sc-card-tile__content sc-rte">
                  <h3 className="sc-card-tile__title">Fund Explorer</h3>

                  <div className="sc-card-tile__description">
                    <p>
                      Browse Funds and their performance by asset class, category, currency, risk
                      rating and more
                    </p>
                  </div>
                  <a className="sc-btn sc-btn--small" href="#" target="_blank" title="Explore now">
                    Explore now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
