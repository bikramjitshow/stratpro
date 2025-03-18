import React from 'react';

export const ScAccordianDeposit = props => {
  return (
    <div className="sc-accordion">
      <input className="sc-accordion__input" tabIndex="-1" type="checkbox" id={props.id} />
      <h2 className="sc-heading">
        <label
          className="sc-accordion__label sc-accordion__label--plus"
          tabIndex="0"
          htmlFor={props.id}
        >
          Deposit Insurance Scheme
        </label>
      </h2>
      <div className="sc-accordion__content sc-rte">
        <p className="sc-accordion__text">
          Singapore dollar deposits of non-bank depositors are insured by the Singapore Deposit
          Insurance Corporation, for up to S$100,000 in aggregate per depositor per Scheme member by
          law. Foreign currency deposits, dual currency investments, structured deposits and other
          investment products are not insured.
        </p>
      </div>
    </div>
  );
};
