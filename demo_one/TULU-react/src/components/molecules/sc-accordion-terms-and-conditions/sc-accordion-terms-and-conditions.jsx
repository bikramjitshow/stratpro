import React from 'react';

export const AccordionTermsAndCondition = props => {
  return (
    <div className="sc-accordion">
      <input className="sc-accordion__input" tabIndex="-1" type="checkbox" id={props.id} />
      <h2 className="sc-heading">
        <label
          className="sc-accordion__label sc-accordion__label--plus"
          tabIndex="0"
          htmlFor={props.id}
        >
          Terms And Conditions
        </label>
      </h2>
      <div className="sc-accordion__content sc-rte">
        {/* accordion Content */}
        <div className="sc-accordion-terms">
          <div className="sc-accordion-terms__panel">
            <input
              type="radio"
              name="accordion"
              id="term-and-condition-variant-tc-0"
              tabIndex="-1"
              className="sc-accordion-terms__input"
            />
            <label
              className="sc-accordion-terms__header"
              htmlFor="term-and-condition-variant-tc-0"
              tabIndex="0"
            >
              *Overseas transaction fees here refer to fees charged by Standard Chartered Bank
              (Singapore) Limited only. Please note that other banks’ fees may still apply.
            </label>
          </div>
          <div className="sc-accordion-terms__panel">
            <input
              type="radio"
              name="accordion"
              id="term-and-condition-variant-tc-1"
              tabIndex="-1"
              className="sc-accordion-terms__input"
            />
            <label
              className="sc-accordion-terms__header"
              htmlFor="term-and-condition-variant-tc-1"
              tabIndex="0"
            >
              <sup>1</sup>
              Bonus$aver Product Term
            </label>
            <div className="sc-accordion-terms__text">
              Your account must be in good standing. Bonus interest is in addition to prevailing
              interest, and the total interest you can receive is a maximum of 3.88% p.a.&nbsp;
              <a href="#" target="_blank" rel="noopener noreferrer">
                Read more
              </a>
            </div>
          </div>
          <div className="sc-accordion-terms__panel">
            <input
              type="radio"
              name="accordion"
              id="term-and-condition-variant-tc-2"
              tabIndex="-1"
              className="sc-accordion-terms__input"
            />
            <label
              className="sc-accordion-terms__header"
              tabIndex="0"
              htmlFor="term-and-condition-variant-tc-2"
            >
              <sup>2</sup>
              Bonus$aver Calculator
            </label>
            <div className="sc-accordion-terms__text">
              The calculated interest is an estimate based on the assumption that your balance stays
              the same throughout the year and on the assumption that you satisfy the Bonus$aver
              Product Terms. Prevailing interest of 0.1% has been included in the calculation.
            </div>
          </div>
          <div className="sc-accordion-terms__panel">
            <input
              type="radio"
              name="accordion"
              id="term-and-condition-variant-tc-3"
              tabIndex="-1"
              className="sc-accordion-terms__input"
            />
            <label
              className="sc-accordion-terms__header"
              tabIndex="0"
              htmlFor="term-and-condition-variant-tc-3"
            >
              <sup>3</sup>
              Bonus$aver Sign-Up Promotion Terms and Conditions
            </label>
            <div className="sc-accordion-terms__text">
              To qualify for the Sign-up Cashback, (a) you must be new to Bonus$aver and apply for a
              Bonus$aver current/cheque account (“Bonus$aver Account”) as a main account holder and
              a Bonus$aver World Mastercard credit card as a principal card holder between 3 June
              2024 – 31 August 2024 and your applications must be approved, and (b) you must deposit
              minimum fresh funds of S$50,000 in your Bonus$aver Account at the time of account
              opening and maintain the sum until the end of the calendar month immediately after the
              calendar month in which your Bonus$aver Account is opened. If you satisfy the
              qualifying criteria, you will be eligible to receive the Sign-Up Cashback (worth
              S$68). “Fresh funds” means funds not originating from any existing account with the
              Bank and funds that are not withdrawn and re-deposited with the Bank within the last
              30 days of opening of your Bonus$aver Account. To qualify for the additional S$100
              Salary Crediting Cashback , you must credit a minimum of S$3,000 monthly salary into
              your Bonus$aver account within the first two months of opening your Bonus$aver Account
              through GIRO with Purpose Code “SALA” by your employer. For the avoidance of doubt,
              such GIRO arrangements for salary crediting must be made in respect of your Singapore
              Dollar denominated balances in your Bonus$aver account. Visit&nbsp;
              <a
                href="https://av.sc.com/sg/content/docs/bonusaver-signup-promotion-apple.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                here
              </a>{' '}
              for the full Bonus$aver Sign-up Promotion Terms and Conditions that apply.{' '}
            </div>
          </div>
          <div className="sc-accordion-terms__panel">
            <input
              type="radio"
              name="accordion"
              id="term-and-condition-variant-tc-4"
              tabIndex="-1"
              className="sc-accordion-terms__input"
            />
            <label
              className="sc-accordion-terms__header"
              tabIndex="0"
              htmlFor="term-and-condition-variant-tc-4"
            >
              <a
                href="https://av.sc.com/sg/content/docs/sg-deposits-year-end-promo.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <sup>4</sup>Standard Chartered Save Up Level Up Promotion Terms and Conditions
              </a>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};
