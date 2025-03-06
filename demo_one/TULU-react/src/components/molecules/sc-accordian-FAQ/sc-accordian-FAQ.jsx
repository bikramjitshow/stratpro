import React from 'react';

export const ScAccordianFAQs = props => {
  return (
    <div className="sc-accordion">
      <input className="sc-accordion__input" type="checkbox" tabIndex="-1" id={props.id} />
      <h2 className="sc-heading">
        <label
          className="sc-accordion__label sc-accordion__label--plus"
          tabIndex="0"
          htmlFor={props.id}
        >
          FAQ
        </label>
      </h2>
      <div className="sc-accordion__content sc-rte">
        <div className="sc-faq-two-column">
          <h2 className="sc-heading">FAQ for Account Information</h2>
          <div className="sc-faq-two-column__row">
            <div className="sc-faq-two-column__wrapper">
              <input
                className="sc-faq-two-column__input"
                type="radio"
                id="accordion-faq-0"
                tabIndex="-1"
                name="accordion"
              />
              <label className="sc-faq-two-column__label" tabIndex="0" htmlFor="accordion-faq-0">
                What is the Bonus$aver Account?
              </label>
              <div className="sc-faq-two-column__content sc-rte">
                <p>
                  Bonus$aver comprises of a Bonus$aver account (which is an innovative Current
                  Account that gives you one of the highest interest rate in town), and Bonus$aver
                  World MasterCard credit and/or debit card(s) which may be linked to the Bonus$aver
                  account.
                </p>
                <ul>
                  <li>Credit your salary through GIRO</li>
                  <li>Pay bills online/through GIRO</li>
                  <li>Spend on your Bonus$aver Credit or Debit Card</li>
                  <li>
                    Invest with a Unit Trust or insure with a regular premium insurance policy
                  </li>
                </ul>
              </div>
            </div>
            <div className="sc-faq-two-column__wrapper">
              <input
                className="sc-faq-two-column__input"
                type="radio"
                id="accordion-faq-1"
                tabIndex="-1"
                name="accordion"
              />
              <label className="sc-faq-two-column__label" tabIndex="0" htmlFor="accordion-faq-1">
                What are the benefits of Bonus$aver?
              </label>
              <div className="sc-faq-two-column__content sc-rte">
                <p>
                  Unlike other current and savings accounts, Bonus$aver is a unique account offering
                  interest rates that are higher than any time deposit. You can earn up to 3.88%
                  p.a. interest for up to S$100,000 deposit as you consolidate your spends, salary
                  credit, bill payments and wealth needs with just a single account.
                </p>
              </div>
            </div>
            <div className="sc-faq-two-column__wrapper">
              <input
                className="sc-faq-two-column__input"
                type="radio"
                id="accordion-faq-2"
                tabIndex="-1"
                name="accordion"
              />
              <label className="sc-faq-two-column__label" tabIndex="0" htmlFor="accordion-faq-2">
                How is the interest calculated?
              </label>
              <div className="sc-faq-two-column__content sc-rte">
                <p>
                  You can earn up to 3.88% p.a. interest on the first $100,000 Average Daily Balance
                  in your Bonus$aver account.
                </p>

                <p>
                  You earn bonus interest on the first S$100,000 of your account average daily
                  balance when you do any or all of these:
                </p>
              </div>
            </div>
            <div className="sc-faq-two-column__wrapper">
              <input
                className="sc-faq-two-column__input"
                type="radio"
                id="accordion-faq-3"
                tabIndex="-1"
                name="accordion"
              />
              <label className="sc-faq-two-column__label" tabIndex="0" htmlFor="accordion-faq-3">
                Am I eligible for Bonus$aver?
              </label>
              <div className="sc-faq-two-column__content sc-rte">
                <p>
                  You must be 21 years old and above to be eligible. For joint account applicants,
                  both parties must be 21 years old and above.
                </p>
              </div>
            </div>
          </div>

          <input
            className="sc-faq-two-column__input"
            type="checkbox"
            id="toggleHiddenFaq-1"
            tabIndex="-1"
            name="accordion"
          />
          <label
            tabIndex="0"
            htmlFor="toggleHiddenFaq-1"
            className="sc-faq-two-column__toggle sc-faq-two-column--show"
          >
            <span className="sc-faq-two-column__show">Show More</span>
          </label>
          <div className="sc-faq-two-column__hidden">
            <div className="sc-faq-two-column__row">
              <div className="sc-faq-two-column__wrapper">
                <input
                  className="sc-faq-two-column__input"
                  type="radio"
                  id="accordion-faq-more-0"
                  tabIndex="-1"
                  name="accordion"
                />
                <label
                  className="sc-faq-two-column__label"
                  tabIndex="0"
                  htmlFor="accordion-faq-more-0"
                >
                  Is there a maximum amount of bonus interest that I can receive?
                </label>
                <div className="sc-faq-two-column__content">
                  <p>
                    Yes. The average daily balance eligible for bonus interest is subject to a cap
                    of S$100,000 per Bonus$aver account. Any average daily balance amount in excess
                    of the cap is not eligible for bonus interest (but the prevailing interest rates
                    will apply).
                  </p>
                </div>
              </div>
            </div>
            <label htmlFor="toggleHiddenFaq-1" tabIndex="0" className="sc-faq-two-column__toggle">
              <span className="sc-faq-two-column__show">Show Less</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};
