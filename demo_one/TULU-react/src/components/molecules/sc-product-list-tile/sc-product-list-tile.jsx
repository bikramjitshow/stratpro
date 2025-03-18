import React from 'react';

export const ProdutListTiles = props => {
  return (
    <>
      {/* Tile One */}
      <div className={`sc-product-list-tile ${props.class}`}>
        <div className="sc-product-list-tile__link">
          <div className="sc-product-list-tile__details">
            <h3 className="sc-product-list-tile__prod-title">Bonus$aver Account</h3>
            <p className="sc-product-list-tile__prod-desc">
              1 account, 5 ways to grow your savings
            </p>
          </div>
          <div className="sc-product-list-tile__offer">
            <div className="sc-product-list-tile__offer-label">
              Interest p.a. up to
              <br />
              <strong>
                7.68 <sub>%</sub>
              </strong>
            </div>
          </div>
          <div className="sc-product-list-tile__btn">
            <ul className="sc-inline-buttons">
              <li className="sc-inline-buttons__item">
                <a href="#" title="Apply Now" className="sc-btn sc-btn--small">
                  Apply Now
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Tile Two */}
      <div className={`sc-product-list-tile sc-product-list-tile--variant ${props.variantclass}`}>
        <div className="sc-product-list-tile__link">
          <div className="sc-product-list-tile__details">
            <h3 className="sc-product-list-tile__prod-title">Bonus$aver Account</h3>
            <p className="sc-product-list-tile__prod-desc">
              1 account, 5 ways to grow your savings
            </p>
          </div>
          <div className="sc-product-list-tile__offer">
            <div className="sc-product-list-tile__offer-label">
              Interest p.a. up to
              <br /> HKD
              <strong>1800</strong>
            </div>

            <ul className="sc-inline-buttons">
              <li className="sc-inline-buttons__item">
                <a href="#" title="Go" className="sc-btn sc-btn--small">
                  Go
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
