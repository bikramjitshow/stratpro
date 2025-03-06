import React from 'react';

export const PromoBoxs = () => {
  return (
    <>
      <br />
      <br />
      {/* HTML Code from here */}
      <div className="sc-promo-box">
        <div className="sc-promo-box__icon">
          <img
            className="sc-promo-box__icon-img"
            src="https://av.sc.com/sg/content/images/cashone-calculator-gift.png"
            alt="image"
          />
        </div>
        <div className="sc-promo-box__text sc-rte">
          <strong>Congratulations! </strong>
          <p> You will receive 2.5% cashback - our highest possible reward!</p>
        </div>
        <div className="sc-promo-box__btn" aria-label="Click here to show more"></div>
      </div>
    </>
  );
};
