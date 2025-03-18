import React from 'react';

export const AccordianKeyCharges = props => {
  return (
    <div className="sc-accordion">
      <input className="sc-accordion__input" tabIndex="-1" type="checkbox" id={props.id} />
      <h2 className="sc-heading">
        <label
          className="sc-accordion__label sc-accordion__label--plus"
          tabIndex="0"
          htmlFor={props.id}
        >
          Key Charges
        </label>
      </h2>
      <div className="sc-accordion__content sc-rte">
        <div className="sc-fees-and-charges">
          <div className="sc-fees-and-charges__column">
            <h3 className="sc-heading">Services &amp; Charges</h3>
            <div className="sc-fees-and-charges__card">
              <div className="sc-fees-and-charges__title">Fall-below fee (per month) </div>
              <div className="sc-fees-and-charges__fee">S$5 </div>
              <div className="sc-fees-and-charges__desc">
                <p>
                  Note: Chargeable if the minimum average daily balance falls below S$3,000 in any
                  particular month.
                </p>
              </div>
            </div>
            <div className="sc-fees-and-charges__card">
              <div className="sc-fees-and-charges__title">Monthly service charge </div>
              <div className="sc-fees-and-charges__fee">Nil </div>
              <div className="sc-fees-and-charges__desc">
                <p>Note: Chargeable if the minimum average daily balance falls below S$3,000</p>
              </div>
            </div>
            <div className="sc-fees-and-charges__card">
              <div className="sc-fees-and-charges__title">
                Credit card annual fee (Including GST){' '}
              </div>
              <div className="sc-fees-and-charges__fee">$214 (Free for first 2 years) </div>
              <div className="sc-fees-and-charges__desc">
                <p>
                  Note: Chargeable if the minimum average daily balance falls below S$3,000 in any
                  particular month.
                </p>
              </div>
            </div>
            <div className="sc-fees-and-charges__card">
              <div className="sc-fees-and-charges__title">
                Debit card annual fee (Including GST){' '}
              </div>
              <div className="sc-fees-and-charges__fee">$20 </div>
            </div>
            <div className="sc-fees-and-charges__card">
              <div className="sc-fees-and-charges__title">Cheque book charges </div>
              <div className="sc-fees-and-charges__fee">
                1st cheque book: Free. Subsequent cheque book(s): $15 each
              </div>
            </div>
            <div className="sc-fees-and-charges__card">
              <div className="sc-fees-and-charges__title">
                Early Account Closure (within 6 months){' '}
              </div>
              <div className="sc-fees-and-charges__fee">S$30 </div>
            </div>
            <div className="sc-fees-and-charges__card">
              <div className="sc-fees-and-charges__title">
                Refer <a href="#">here</a> for all the relevant fees and charges
              </div>
              <div className="sc-fees-and-charges__fee">S$30</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
