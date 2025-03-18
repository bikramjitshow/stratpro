import React from 'react';
import IconDoor from '../../../../static/icons/icon-sc-nw-door.js';

export const ColumnTiles = function(props) {
  return (
    <div className={`sc-column-tile ${props.class}`}>
      <div className="sc-column-tile__badge">Priority Banking Referral</div>
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
        <div className="sc-column-tile__right-content  sc-rte">
          <p>Earn</p>
          <p>
            <strong>40,000</strong>
          </p>
          <p>miles</p>
        </div>
      </div>
    </div>
  );
};
