import React from 'react';

export const InvestCards = props => {
  return (
    <div className={`sc-invest-card ${props.class}`}>
      {props.head && (
        <div className="sc-invest-card__head">
          <h2 className="sc-invest-card__head-title">{props.title}</h2>
          <div className="sc-invest-card__head-image">
            <img src={`${props.HeadImg}`} alt="image" />
          </div>
        </div>
      )}
      <div className="sc-invest-card__wrapper">
        <div className="sc-invest-card__col">
          <p className="sc-invest-card__col-head">Projected</p>
          <p className="sc-invest-card__col-main">
            <strong>{props.percent}%</strong>&nbsp; p.a.
          </p>
          <p className="sc-invest-card__col-desc">{props.desc}</p>
        </div>
        <ul className="sc-invest-card__list">
          <li className="sc-invest-card__item">Lower risk and stable</li>
          <li className="sc-invest-card__item">
            For clients seeking income over the mid to long term
          </li>
          <li className="sc-invest-card__item">
            Invests in bonds and money market instruments, no equities
          </li>
          <hr />
        </ul>
        <div className="sc-invest-card__allocation">
          <p className="sc-invest-card__allocation-title">Asset allocation</p>
          <div className="sc-invest-card__allocation-image">
            <img src={`${props.AssetImg}`} alt="image" />
          </div>
        </div>
        <div className="sc-invest-card__payout">
          <div className="sc-invest-card__payout-text">
            See how your annual payouts might grow with a starting investment of of $10,000
          </div>
          <div className="sc-invest-card__payout-image">
            <img src={`${props.PayoutImg}`} alt="image" />
          </div>
        </div>
      </div>
    </div>
  );
};
