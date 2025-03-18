import React, { useEffect, useState } from 'react';
import ScBonusSaverCalculator from './sc-bonussaver-calculator-compact';

export const BonussaverCalculators = () => {
  const [inputValue, setInputValue] = useState('100000');
  const handleChange = event => {
    setInputValue(event.target.value);
  };
  useEffect(() => {
    ScBonusSaverCalculator.init();
  }, []);
  return (
    <div
      className="sc-bonussaver-calculator-compact"
      data-prev-interest="0.05"
      data-currency-code="S$"
      data-waiver-multiplier="x"
      data-cap-limit="100000"
      data-min-amount="2000"
      data-max-amount="10000000"
      data-default-amount="100000"
      data-error-msg="Please enter a minimum amount of S$2,000"
    >
      <div className="sc-content-wrapper">
        <div
          className="sc-bonussaver-calculator-compact__container"
          data-persistent-bar-target="sc-bonussaver-calculator-compact__left"
        >
          <div className="sc-bonussaver-calculator-compact__left">
            <div className="sc-heading-inner">
              <h2 className="sc-title sc-title--inner">e$aver Savings Account</h2>
              <div className="sc-description">
                <p>e$aver Savings Account</p>
              </div>
            </div>

            <div className="sc-bonussaver-calculator-compact__box-container">
              <p className="sc-bonussaver-calculator-compact__desc">
                Enter your estimated Average Daily Balance
                <span className="sc-tooltip">
                  <svg
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="64"
                    height="64"
                    viewBox="0 0 64 64"
                    role="img"
                    aria-label="icon-info"
                  >
                    <path
                      fill="none"
                      stroke="#919191"
                      strokeLinejoin="miter"
                      strokeLinecap="butt"
                      strokeMiterlimit="10"
                      strokeWidth="3.563"
                      d="M32 3.299c15.851 0 28.701 12.848 28.701 28.701 0 15.851-12.85 28.701-28.701 28.701-15.854 0-28.701-12.85-28.701-28.701S16.147 3.299 32 3.299z"
                    ></path>
                    <path
                      fill="#919191"
                      d="M30.351 27.162h2.639v18.474h-2.639V27.162zm0-10.556h2.639v5.278h-2.639v-5.278z"
                    ></path>
                  </svg>
                  <span className="sc-tooltip__text">
                    Average daily balance or ADB means the sum of end-of-day balances in an account
                    for each day in that month divided by the number of days in that month.
                  </span>
                </span>
              </p>
              <div className="sc-bonussaver-calculator-compact__box">
                <div className="sc-bonussaver-calculator-compact__box-input">
                  <span className="sc-bonussaver-calculator-compact__currency">S$</span>
                  <input
                    type="text"
                    pattern="[0-9]+"
                    inputMode="numeric"
                    className="sc-bonussaver-calculator-compact__input"
                    // below code added for fixing the value clearing issue in storybook
                    value={inputValue}
                    onChange={handleChange}
                  />
                </div>
                <div className="sc-bonussaver-calculator-compact__prompt-msg hide"></div>
              </div>
            </div>
            <div className="sc-bonussaver-calculator-compact__tiles-wrapper">
              {/* Calculator Tiles */}
              <div className="sc-calculator-tile">
                <div className="sc-calculator-tile__top">
                  <div className="sc-calculator-tile__checkbox">
                    <div className="sc-checkbox">
                      Salary Credit
                      <input
                        className="sc-checkbox__input sc-calculator-tile__input"
                        type="checkbox"
                        id="check-two"
                        name="radio-option"
                        tabIndex="-1"
                        value="2.00"
                        data-class="spend-category-checkbox-2"
                        defaultChecked
                      />
                      <label
                        className="sc-checkbox__checkmark"
                        htmlFor="check-two"
                        tabIndex="0"
                      ></label>
                    </div>
                    <a
                      href="#null"
                      className="sc-calculator-tile__information"
                      aria-label="More information"
                      data-send="show-overlay"
                      data-modal-source="spendpop1"
                    >
                      <span className="visuallyhidden">More information</span>
                    </a>
                    {/*  Modal */}
                    <div className="sc-modal__content sc-rte" data-modal-id="spendpop1">
                      <div className="sc-bonussaver-calc-modal sc-rte">
                        <h3 className="sc-bonussaver-calc-modal__title">Salary Credit</h3>
                        <div className="sc-bonussaver-calc-modal__content">
                          <p>
                            Credit a minimum of S$3,000 monthly salary into your Bonus$aver Account
                            and earn additional 2.00% p.a. bonus interest on the deposit balance in
                            your Bonus$aver Account:
                          </p>
                        </div>

                        <div className="sc-bonussaver-calc-modal__t-responsive">
                          <div className="sc-bonussaver-calc-modal__t-row sc-bonussaver-calc-modal__t-row--head">
                            <div className="sc-bonussaver-calc-modal__t-title">Criteria</div>
                            <div className="sc-bonussaver-calc-modal__t-description">
                              Regular inward credit of your monthly salary of no less than S$3,000
                              nett into your Bonus$aver Account by your employer through GIRO with
                              Purpose Code “SALA”
                            </div>
                          </div>
                          <div className="sc-bonussaver-calc-modal__t-column-row">
                            <div className="sc-bonussaver-calc-modal__t-row">
                              {/* row */}
                              <div className="sc-bonussaver-calc-modal__t-title">
                                Minimum Ticket Size
                              </div>
                              <div className="sc-bonussaver-calc-modal__t-value">S$3,000</div>

                              {/* row */}
                              <div className="sc-bonussaver-calc-modal__t-title">
                                Bonus Interest Rate on the first S$100,000
                              </div>
                              <div className="sc-bonussaver-calc-modal__t-value">2.00% p.a</div>
                            </div>
                          </div>
                          <div className="sc-bonussaver-calc-modal__t-row">
                            {/* row */}
                            <div className="sc-bonussaver-calc-modal__t-title">
                              Bonus Interest Crediting Month
                            </div>
                            <div className="sc-bonussaver-calc-modal__t-description">
                              One month after salary is credited
                            </div>
                            {/* row */}
                            <div className="sc-bonussaver-calc-modal__t-title">
                              Bonus Interest Payment period
                            </div>
                            <div className="sc-bonussaver-calc-modal__t-description">
                              Payable monthly upon fulfillment of criteria and minimum ticket size
                            </div>
                          </div>
                        </div>

                        <div className="sc-bonussaver-calc-modal__content">
                          <a
                            href="https://www.sc.com/sg/terms-and-conditions/bonusaver-product-terms/"
                            target="_blank"
                            rel="noreferrer"
                          >
                            Please refer to Bonus$aver Product Terms for the full T&Cs that apply.
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="sc-calculator-tile__text-container">
                    <p className="sc-calculator-tile__text">Credit salary of at least S$3,000.</p>
                    <p className="sc-calculator-tile__content-interest sc-only-mobile">2.00%</p>
                  </div>
                </div>
                <div className="sc-calculator-tile__bottom sc-only-desktop">
                  <div className="sc-calculator-tile__content">
                    <p className="sc-calculator-tile__content-desc">Interest (p.a.) earned</p>
                    <p className="sc-calculator-tile__content-interest">2.00%</p>
                  </div>
                </div>
              </div>

              <div className="sc-calculator-tile">
                <div className="sc-calculator-tile__top">
                  <div className="sc-calculator-tile__checkbox">
                    <div className="sc-checkbox">
                      Card Spend
                      <input
                        className="sc-checkbox__input sc-calculator-tile__input"
                        type="checkbox"
                        id="check-one"
                        name="radio-option"
                        tabIndex="-1"
                        defaultChecked
                        data-class="spend-category-checkbox-1"
                        value="0"
                      />
                      <label
                        className="sc-checkbox__checkmark"
                        htmlFor="check-one"
                        tabIndex="0"
                      ></label>
                    </div>
                    <a
                      href="#null"
                      className="sc-calculator-tile__information"
                      aria-label="More information"
                      data-send="show-overlay"
                      data-modal-source="spendpop2"
                    >
                      <span className="visuallyhidden">More information</span>
                    </a>
                    {/* Modal */}
                    <div className="sc-modal__content sc-rte" data-modal-id="spendpop2">
                      <div className="sc-bonussaver-calc-modal sc-rte">
                        <h3 className="sc-bonussaver-calc-modal__title">
                          Your monthly Bonus$aver card spending
                        </h3>
                        <div className="sc-bonussaver-calc-modal__content">
                          <p>
                            You will earn a prevailing interest rate of 0.05% p.a. on your entire
                            deposit balance. In addition, you will earn bonus interest on the first
                            S$100,000 of your deposit balance if you meet the minimum card spend as
                            follows:
                          </p>
                        </div>

                        <div className="sc-bonussaver-calc-modal__t-responsive">
                          <div className="sc-bonussaver-calc-modal__t-row sc-bonussaver-calc-modal__t-row--head">
                            <div className="sc-bonussaver-calc-modal__t-title">Criteria</div>
                            <div className="sc-bonussaver-calc-modal__t-description">
                              Charge the Minimum Card Spend on eligible transactions to your
                              Bonus$aver Cards
                            </div>
                          </div>
                          <div className="sc-bonussaver-calc-modal__t-column-row">
                            <div className="sc-bonussaver-calc-modal__t-row">
                              {/* row */}
                              <div className="sc-bonussaver-calc-modal__t-title">
                                Minimum Card Spend
                              </div>
                              <div className="sc-bonussaver-calc-modal__t-value">S$500</div>
                              <div className="sc-bonussaver-calc-modal__t-description">
                                or equivalent in foreign currency of eligible Card Spend per
                                calendar month based on transaction posting date
                              </div>
                              {/* row */}
                              <div className="sc-bonussaver-calc-modal__t-title">
                                Bonus Interest Rate on the first S$100,000
                              </div>
                              <div className="sc-bonussaver-calc-modal__t-value">0.6% p.a.</div>

                              {/* row */}
                              <div className="sc-bonussaver-calc-modal__t-title">
                                Total Interest Earned for Spend
                              </div>
                              <div className="sc-bonussaver-calc-modal__t-description">
                                (*inclusive of prevailing interest rate)
                              </div>
                              <div className="sc-bonussaver-calc-modal__t-value">0.65% p.a.</div>
                            </div>
                            <div className="sc-bonussaver-calc-modal__t-row sc-bonussaver-calc-modal__t-row--grey">
                              {/* row */}
                              <div className="sc-bonussaver-calc-modal__t-title">
                                Minimum Card Spend
                              </div>
                              <div className="sc-bonussaver-calc-modal__t-value">S$2,000</div>
                              <div className="sc-bonussaver-calc-modal__t-description">
                                or equivalent in foreign currency of eligible Card Spend per
                                calendar month based on transaction posting date
                              </div>
                              {/* row */}
                              <div className="sc-bonussaver-calc-modal__t-title">
                                Bonus Interest Rate on the first S$100,000
                              </div>
                              <div className="sc-bonussaver-calc-modal__t-value">1.40% p.a.</div>

                              {/* row */}
                              <div className="sc-bonussaver-calc-modal__t-title">
                                Total Interest Earned for Spend
                              </div>
                              <div className="sc-bonussaver-calc-modal__t-description">
                                (*inclusive of prevailing interest rate)
                              </div>
                              <div className="sc-bonussaver-calc-modal__t-value">1.45% p.a.</div>
                            </div>
                          </div>
                          <div className="sc-bonussaver-calc-modal__t-row">
                            {/* row */}
                            <div className="sc-bonussaver-calc-modal__t-title">
                              Bonus Interest Crediting Month
                            </div>
                            <div className="sc-bonussaver-calc-modal__t-description">
                              One month after card spend transaction month e.g. for card spending in
                              January, bonus interest will be paid in February based on January’s
                              Average Daily Balance
                            </div>
                            {/* row */}
                            <div className="sc-bonussaver-calc-modal__t-title">
                              Bonus Interest Payment period
                            </div>
                            <div className="sc-bonussaver-calc-modal__t-description">
                              Payable monthly upon fulfillment of criteria and Minimum Card Spend
                            </div>
                          </div>
                        </div>

                        <div className="sc-bonussaver-calc-modal__content">
                          Certain transactions on your Bonus$aver Cards will not be regarded as
                          eligible transactions. Please refer to
                          <a
                            href="https://www.sc.com/sg/terms-and-conditions/bonusaver-product-terms/"
                            target="_blank"
                            rel="noreferrer"
                          >
                            Bonus$aver Product Terms
                          </a>
                          for full T&Cs and list of exclusions
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="sc-calculator-tile__text-container">
                    <div className="sc-calculator-tile__text">
                      Card spends of
                      {/* dropdown */}
                      <div className="sc-calculator-tile__selector-box">
                        <select name="spend" className="sc-calculator-tile__selector">
                          <option data-class="spend-category-options-2" value="0">
                            less than S$500
                          </option>
                          <option data-class="spend-category-options-2" value="0.60">
                            S$500 to S$1,999
                          </option>
                          <option data-class="spend-category-options-2" value="1.40" selected>
                            S$2,000 or more
                          </option>
                        </select>
                      </div>
                      {/* End dropdown */}
                    </div>

                    <p className="sc-calculator-tile__content-interest sc-only-mobile">1.40%</p>
                  </div>
                </div>
                <div className="sc-calculator-tile__bottom sc-only-desktop">
                  <div className="sc-calculator-tile__content">
                    <p className="sc-calculator-tile__content-desc">Interest (p.a.) earned</p>
                    <p className="sc-calculator-tile__content-interest rate-spend-category-options-2 sc-only-dekstop">
                      1.40%
                    </p>
                  </div>
                  <p className="sc-bonussaver-calculator-compact__notes">
                    (Inclusive of prevailing interest rate)
                  </p>
                </div>
              </div>

              <div className="sc-calculator-tile">
                <div className="sc-calculator-tile__top">
                  <div className="sc-calculator-tile__checkbox">
                    <div className="sc-checkbox">
                      Bill Payment
                      <input
                        className="sc-checkbox__input sc-calculator-tile__input"
                        type="checkbox"
                        id="check-three"
                        name="radio-option"
                        tabIndex="-1"
                        value="0.23"
                        data-class="spend-category-checkbox-3"
                        defaultChecked
                      />
                      <label
                        className="sc-checkbox__checkmark"
                        htmlFor="check-three"
                        tabIndex="0"
                      ></label>
                    </div>
                    <a
                      href="#null"
                      className="sc-calculator-tile__information"
                      aria-label="More information"
                      data-send="show-overlay"
                      data-modal-source="spendpop3"
                    >
                      <span className="visuallyhidden">More information</span>
                    </a>
                    {/* Modal */}
                    <div className="sc-modal__content sc-rte" data-modal-id="spendpop3">
                      <div className="sc-bonussaver-calc-modal sc-rte">
                        <h3 className="sc-bonussaver-calc-modal__title">Bill Payment</h3>
                        <div className="sc-bonussaver-calc-modal__content">
                          <p>
                            Make 3 eligible bill payments of at least S$50 each (in a calendar
                            month) from your Bonus$aver Account via GIRO or our Online Banking
                            platform and earn additional 0.23% p.a. bonus interest on the deposit
                            balance in your Bonus$aver Account:
                          </p>
                        </div>

                        <div className="sc-bonussaver-calc-modal__t-responsive">
                          <div className="sc-bonussaver-calc-modal__t-row sc-bonussaver-calc-modal__t-row--head">
                            <div className="sc-bonussaver-calc-modal__t-title">Criteria</div>
                            <div className="sc-bonussaver-calc-modal__t-description">
                              Minimum 3 eligible bill payments (in a calendar month) from your
                              Bonus$aver Account via GIRO or our Online Banking platform
                            </div>
                          </div>
                          <div className="sc-bonussaver-calc-modal__t-column-row">
                            <div className="sc-bonussaver-calc-modal__t-row">
                              {/* row */}
                              <div className="sc-bonussaver-calc-modal__t-title">
                                Minimum Ticket Size
                              </div>
                              <div className="sc-bonussaver-calc-modal__t-value">S$50</div>
                              <div className="sc-bonussaver-calc-modal__t-description">
                                per eligible bill payment
                              </div>
                              {/* row */}
                              <div className="sc-bonussaver-calc-modal__t-title">
                                Bonus Interest Rate on the First S$100,000
                              </div>
                              <div className="sc-bonussaver-calc-modal__t-value">0.23% p.a.</div>
                            </div>
                          </div>
                          <div className="sc-bonussaver-calc-modal__t-row">
                            {/* row */}
                            <div className="sc-bonussaver-calc-modal__t-title">
                              Bonus Interest Crediting Month
                            </div>
                            <div className="sc-bonussaver-calc-modal__t-description">
                              One month after eligible bill payment month
                            </div>
                            {/* row */}
                            <div className="sc-bonussaver-calc-modal__t-title">
                              Bonus Interest Payment period
                            </div>
                            <div className="sc-bonussaver-calc-modal__t-description">
                              Payable monthly upon fulfillment of criteria and minimum ticket size
                            </div>
                          </div>
                        </div>

                        <div className="sc-bonussaver-calc-modal__content">
                          <a
                            href="https://www.sc.com/sg/terms-and-conditions/bonusaver-product-terms/"
                            target="_blank"
                            rel="noreferrer"
                          >
                            Please refer to Bonus$aver Product Terms for the full T&Cs that apply.
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="sc-calculator-tile__text-container">
                    <p className="sc-calculator-tile__text">
                      3 bill payments of at least S$50 each via GIRO or online banking.
                    </p>
                    <p className="sc-calculator-tile__content-interest sc-only-mobile">0.23%</p>
                  </div>
                </div>
                <div className="sc-calculator-tile__bottom sc-only-desktop">
                  <div className="sc-calculator-tile__content">
                    <p className="sc-calculator-tile__content-desc">Interest (p.a.) earned</p>
                    <p className="sc-calculator-tile__content-interest">0.23%</p>
                  </div>
                </div>
              </div>

              <div className="sc-calculator-tile">
                <div className="sc-calculator-tile__top">
                  <div className="sc-calculator-tile__checkbox">
                    <div className="sc-checkbox">
                      Insure
                      <input
                        className="sc-checkbox__input sc-calculator-tile__input"
                        type="checkbox"
                        id="check-five"
                        name="radio-option"
                        tabIndex="-1"
                        value="2.00"
                        data-class="spend-category-checkbox-5"
                        defaultChecked
                      />
                      <label
                        className="sc-checkbox__checkmark"
                        htmlFor="check-five"
                        tabIndex="0"
                      ></label>
                    </div>
                    <a
                      href="#null"
                      className="sc-calculator-tile__information"
                      aria-label="More information"
                      data-send="show-overlay"
                      data-modal-source="spendpop5"
                    >
                      <span className="visuallyhidden">More information</span>
                    </a>
                    {/*  Modal */}
                    <div className="sc-modal__content sc-rte" data-modal-id="spendpop5">
                      <div className="sc-bonussaver-calc-modal sc-rte">
                        <h3 className="sc-bonussaver-calc-modal__title">Insure</h3>
                        <div className="sc-bonussaver-calc-modal__content">
                          <p>
                            Purchase an Eligible Insurance Policy with a minimal annual premium of
                            S$12,000 to earn additional 2.00% p.a. bonus interest on the deposit
                            balance in your Bonus$aver Account:
                          </p>
                        </div>

                        <div className="sc-bonussaver-calc-modal__t-responsive">
                          <div className="sc-bonussaver-calc-modal__t-row sc-bonussaver-calc-modal__t-row--head">
                            <div className="sc-bonussaver-calc-modal__t-title">Criteria</div>
                            <div className="sc-bonussaver-calc-modal__t-description">
                              Purchase an Eligible Insurance Policy (defined below)
                            </div>
                          </div>
                          <div className="sc-bonussaver-calc-modal__t-column-row">
                            <div className="sc-bonussaver-calc-modal__t-row">
                              {/* row */}
                              <div className="sc-bonussaver-calc-modal__t-title">
                                Minimum Premium
                              </div>
                              <div className="sc-bonussaver-calc-modal__t-value">S$12,000</div>
                              <div className="sc-bonussaver-calc-modal__t-description">
                                S$12,000 annual premium for an Eligible Insurance Policy
                              </div>
                              {/* row */}
                              <div className="sc-bonussaver-calc-modal__t-title">
                                Bonus Interest Rate on the first S$100,000
                              </div>
                              <div className="sc-bonussaver-calc-modal__t-value">2.00% p.a</div>
                            </div>
                          </div>
                          <div className="sc-bonussaver-calc-modal__t-row">
                            {/* row */}
                            <div className="sc-bonussaver-calc-modal__t-title">
                              Bonus Interest Crediting Month
                            </div>
                            <div className="sc-bonussaver-calc-modal__t-description">
                              For purchase of Eligible Insurance Policy: One month after purchase of
                              policy
                            </div>
                            {/* row */}
                            <div className="sc-bonussaver-calc-modal__t-title">
                              Bonus Interest Payment period
                            </div>
                            <div className="sc-bonussaver-calc-modal__t-description">
                              Bonus Interest will be paid for a consecutive period of 12 months.
                            </div>
                          </div>
                        </div>

                        <div className="sc-bonussaver-calc-modal__content sc-rte">
                          <p>
                            Eligible Insurance Policy means a regular premium life insurance policy
                            underwritten by Prudential Assurance Company Singapore (Pte) Ltd and
                            distributed by the Bank and which:
                          </p>
                          <ul>
                            <li>names the Eligible Customer as the policy owner;</li>
                            <li>has a minimum annual premium of S$12,000;</li>
                          </ul>

                          <h3 className="sc-bonussaver-calc-modal__title">Disclaimer:</h3>
                          <p>
                            This document is being distributed for general information only and it
                            does not constitute an offer, recommendation or solicitation of an offer
                            to enter into a transaction or adopt any hedging, trading or investment
                            strategy, nor does it constitute any prediction of likely future
                            movements in rates or prices or any representation that any such future
                            movements will not exceed those shown in any illustration.
                          </p>
                          <p>
                            It has not been prepared for any particular person or class of persons
                            and it has been prepared without regards to the specific investment
                            objectives, financial situation or particular needs of any person. You
                            should seek advice from a financial adviser on the suitability of the
                            product for you, taking into account these factors before making a
                            commitment to purchase the product. In the event that you choose not to
                            seek advice from a licensed or an exempt financial adviser, you should
                            carefully consider whether this product is suitable for you.
                          </p>
                          <p>
                            You are fully responsible for your investment decision, including
                            whether the product or service described here is suitable for you. The
                            products / services involved are not principal-protected and you may
                            lose all or part of your original investment amount. SCB will not accept
                            any responsibility or liability of any kind, with respect to the
                            accuracy or completeness of the information in this document. This
                            document is for general evaluation only and has not been prepared to be
                            suitable for any particular person or class of persons.
                          </p>
                          <p>
                            SCB makes no representation or warranty of any kind, express, implied or
                            statutory regarding this document or any information contained or
                            referred to on the document. This document is distributed on the express
                            understanding that, whilst the information in it is believed to be
                            reliable, it has not been independently verified by us.
                          </p>
                          <p>
                            Insurance: Buying an insurance policy is a long-term commitment. An
                            early termination of the policy usually involves high cost and the
                            surrender value payable may be less than the total premiums paid. The
                            contents of this document do not constitute a contract of insurance and
                            reference should be made to the respective policies for the exact terms
                            and conditions applicable to the insurance policy. All insurance
                            products described in this document are products of and underwritten by
                            [Insurer] (Insurer) and not Standard Chartered Bank (Singapore) Limited
                            (SCBSL). SCBSL shall not be liable in any manner whatsoever regarding
                            your application or the contract of insurance.
                          </p>
                          <p>
                            Unit Trusts: You should read the relevant prospectus before deciding
                            whether to invest in a unit trust. Investments in unit trusts are not
                            obligations of, deposits in, or guaranteed by, Standard Chartered Bank
                            (Singapore) Limited or its affiliates. An investment in unit trusts is
                            subject to investment risks, including the possible loss of the
                            principal amount invested. The value of and the income from the unit
                            trusts may fall as well as rise.
                          </p>
                          <p>
                            For clarity, the above are not deposits and do not qualify insured
                            deposits under the Singapore Deposit Insurance and Policy Owners
                            Protection Schemes Act 2011.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="sc-calculator-tile__text-container">
                    <p className="sc-calculator-tile__text">
                      Purchase an eligible Insurance Policy with minimum annual premium of S$12,000.
                    </p>
                    <p className="sc-calculator-tile__content-interest sc-only-mobile">2.00%</p>
                  </div>
                </div>
                <div className="sc-calculator-tile__bottom sc-only-desktop">
                  <div className="sc-calculator-tile__content">
                    <p className="sc-calculator-tile__content-desc">Interest (p.a.) earned</p>
                    <p className="sc-calculator-tile__content-interest">2.00%</p>
                  </div>
                </div>
              </div>

              <div className="sc-calculator-tile">
                <div className="sc-calculator-tile__top">
                  <div className="sc-calculator-tile__checkbox">
                    <div className="sc-checkbox">
                      Invest
                      <input
                        className="sc-checkbox__input sc-calculator-tile__input"
                        type="checkbox"
                        id="check-four"
                        name="radio-option"
                        tabIndex="-1"
                        value="2.00"
                        data-class="spend-category-checkbox-4"
                        defaultChecked
                      />
                      <label
                        className="sc-checkbox__checkmark"
                        htmlFor="check-four"
                        tabIndex="0"
                      ></label>
                    </div>
                    <a
                      href="#null"
                      className="sc-calculator-tile__information"
                      aria-label="More information"
                      data-send="show-overlay"
                      data-modal-source="spendpop4"
                    >
                      <span className="visuallyhidden">More information</span>
                    </a>
                    {/*  Modal  */}
                    <div className="sc-modal__content sc-rte" data-modal-id="spendpop4">
                      <div className="sc-bonussaver-calc-modal sc-rte">
                        <h3 className="sc-bonussaver-calc-modal__title">Invest</h3>
                        <div className="sc-bonussaver-calc-modal__content">
                          <p>
                            Invest through us in an Eligible Unit Trust with a minimum subscription
                            sum of S$30,000, to earn additional 2.00% p.a. bonus interest on the
                            deposit balance in your Bonus$aver Account:
                          </p>
                        </div>

                        <div className="sc-bonussaver-calc-modal__t-responsive">
                          <div className="sc-bonussaver-calc-modal__t-row sc-bonussaver-calc-modal__t-row--head">
                            <div className="sc-bonussaver-calc-modal__t-title">Criteria</div>
                            <div className="sc-bonussaver-calc-modal__t-description">
                              Purchase an Eligible Unit Trust (defined below)
                            </div>
                          </div>
                          <div className="sc-bonussaver-calc-modal__t-column-row">
                            <div className="sc-bonussaver-calc-modal__t-row">
                              {/* row */}
                              <div className="sc-bonussaver-calc-modal__t-title">
                                Minimum Ticket Size
                              </div>
                              <div className="sc-bonussaver-calc-modal__t-value">S$30,000</div>
                              <div className="sc-bonussaver-calc-modal__t-description">
                                S$30,000 minimum subscription sum for an Eligible Unit Trust
                              </div>
                              {/* row */}
                              <div className="sc-bonussaver-calc-modal__t-title">
                                Bonus Interest Rate on the first S$100,000
                              </div>
                              <div className="sc-bonussaver-calc-modal__t-value">2.00% p.a</div>
                            </div>
                          </div>
                          <div className="sc-bonussaver-calc-modal__t-row">
                            {/* row */}
                            <div className="sc-bonussaver-calc-modal__t-title">
                              Bonus Interest Crediting Month
                            </div>
                            <div className="sc-bonussaver-calc-modal__t-description">
                              For investment in Eligible Unit Trust: One month after investment
                              settlement month
                            </div>
                            {/* row */}
                            <div className="sc-bonussaver-calc-modal__t-title">
                              Bonus Interest Payment period
                            </div>
                            <div className="sc-bonussaver-calc-modal__t-description">
                              Bonus Interest will be paid for a consecutive period of 12 months.
                            </div>
                          </div>
                        </div>

                        <div className="sc-bonussaver-calc-modal__content sc-rte">
                          <p>
                            Eligible Unit Trust means a Unit Trust made available through the Bank
                            and which comprises (i) a minimum investment sum of S$30,000 (or its
                            equivalent in another currency) in a single subscription, but does not
                            include:
                          </p>
                          <ul>
                            <li>exchange traded funds;</li>
                            <li>investments via regular savings plans; and</li>
                            <li>switching transactions.</li>
                          </ul>

                          <h3 className="sc-bonussaver-calc-modal__title">Disclaimer:</h3>
                          <p>
                            This document is being distributed for general information only and it
                            does not constitute an offer, recommendation or solicitation of an offer
                            to enter into a transaction or adopt any hedging, trading or investment
                            strategy, nor does it constitute any prediction of likely future
                            movements in rates or prices or any representation that any such future
                            movements will not exceed those shown in any illustration.
                          </p>
                          <p>
                            It has not been prepared for any particular person or class of persons
                            and it has been prepared without regards to the specific investment
                            objectives, financial situation or particular needs of any person. You
                            should seek advice from a financial adviser on the suitability of the
                            product for you, taking into account these factors before making a
                            commitment to purchase the product. In the event that you choose not to
                            seek advice from a licensed or an exempt financial adviser, you should
                            carefully consider whether this product is suitable for you.
                          </p>
                          <p>
                            You are fully responsible for your investment decision, including
                            whether the product or service described here is suitable for you. The
                            products / services involved are not principal-protected and you may
                            lose all or part of your original investment amount. SCB will not accept
                            any responsibility or liability of any kind, with respect to the
                            accuracy or completeness of the information in this document. This
                            document is for general evaluation only and has not been prepared to be
                            suitable for any particular person or class of persons.
                          </p>
                          <p>
                            SCB makes no representation or warranty of any kind, express, implied or
                            statutory regarding this document or any information contained or
                            referred to on the document. This document is distributed on the express
                            understanding that, whilst the information in it is believed to be
                            reliable, it has not been independently verified by us.
                          </p>
                          <p>
                            Insurance: Buying an insurance policy is a long-term commitment. An
                            early termination of the policy usually involves high cost and the
                            surrender value payable may be less than the total premiums paid. The
                            contents of this document do not constitute a contract of insurance and
                            reference should be made to the respective policies for the exact terms
                            and conditions applicable to the insurance policy. All insurance
                            products described in this document are products of and underwritten by
                            [Insurer] (Insurer) and not Standard Chartered Bank (Singapore) Limited
                            (SCBSL). SCBSL shall not be liable in any manner whatsoever regarding
                            your application or the contract of insurance.
                          </p>
                          <p>
                            Unit Trusts: You should read the relevant prospectus before deciding
                            whether to invest in a unit trust. Investments in unit trusts are not
                            obligations of, deposits in, or guaranteed by, Standard Chartered Bank
                            (Singapore) Limited or its affiliates. An investment in unit trusts is
                            subject to investment risks, including the possible loss of the
                            principal amount invested. The value of and the income from the unit
                            trusts may fall as well as rise.
                          </p>
                          <p>
                            For clarity, the above are not deposits and do not qualify insured
                            deposits under the Singapore Deposit Insurance and Policy Owners
                            Protection Schemes Act 2011.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="sc-calculator-tile__text-container">
                    <p className="sc-calculator-tile__text">
                      Invest in an eligible Unit Trust of at least S$30,000.
                    </p>
                    <p className="sc-calculator-tile__content-interest sc-only-mobile">2.00%</p>
                  </div>
                </div>
                <div className="sc-calculator-tile__bottom sc-only-desktop">
                  <div className="sc-calculator-tile__content">
                    <p className="sc-calculator-tile__content-desc">Interest (p.a.) earned</p>
                    <p className="sc-calculator-tile__content-interest">2.00%</p>
                  </div>
                </div>
              </div>
            </div>
            <p className="sc-bonussaver-calculator-compact__prev-notes">
              Note: You will earn a prevailing interest rate of 0.05% p.a. on your entire deposit
              balance.
            </p>
          </div>
          <div className="sc-bonussaver-calculator-compact__right">
            <div className="sc-bonussaver-calculator-compact__earn-box">
              <p className="sc-bonussaver-calculator-compact__earn-desc sc-bonussaver-calculator-compact__estimate-title">
                Estimated annual interest<sup>2</sup> of
              </p>
              <p className="sc-bonussaver-calculator-compact__earn-interest">
                S$
                <span className="sc-bonussaver-calculator-compact__amount sc-bonussaver-calculator-compact__estimate-result deposit_profit">
                  7,680
                </span>
                &nbsp;@&nbsp;
                <span className="sc-bonussaver-calculator-compact__amount sc-bonussaver-calculator-compact__estimate-result deposit_rate">
                  7.68
                </span>
                <span style={{ fontSize: '18px' }}> % p.a.</span>
              </p>
            </div>
            <ul className="sc-inline-buttons">
              <li className="sc-inline-buttons__item">
                <a
                  href="#null"
                  title="Apply Now"
                  className="sc-btn sc-btn--medium"
                  data-send="show-overlay"
                  data-modal-source="modal-cta-httpscmssccomsglightbox-contentlight-box-4-2-2-2"
                >
                  <span className="sc-only-desktop">Apply Now</span>
                  <span className="sc-only-mobile">Apply Now</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
