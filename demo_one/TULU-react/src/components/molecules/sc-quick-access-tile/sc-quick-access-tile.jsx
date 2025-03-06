import React from 'react';

export const QuickAccessTiles = props => {
  return (
    <div className={`sc-quick-access-tile ${props.class}`}>
      <div className="sc-quick-access-tile__item sc-rte">
        <div className="sc-quick-access-tile__title">Signature CIO Funds</div>
        <div className="sc-quick-access-tile__desc">Multi-asset fund of funds & ETFs portfolio</div>
      </div>
    </div>
  );
};
