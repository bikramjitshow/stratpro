import React from 'react';
import { HeadingInners } from '../../molecules/sc-heading-inner/sc-heading-inner';

export const Accordianfaqs = props => {
  return (
    <>
      {props.default && (
        <div className={`sc-faq ${props.class}`}>
          <div className="sc-content-wrapper">
            <HeadingInners class="" icon={false} />
            <div className="sc-faq__accordion">
              <input
                className="sc-faq__accordion-input"
                type="checkbox"
                tabIndex={-1}
                id="accordion"
              />
              <label tabIndex={0} className="sc-faq__accordion-label" htmlFor="accordion">
                FAQs
              </label>
              <div className="sc-faq__accordion-content">
                <div className="sc-faq__accordion">
                  <input
                    className="sc-faq__accordion-input"
                    type="checkbox"
                    tabIndex={-1}
                    id="one"
                  />
                  <label
                    tabIndex={0}
                    className="sc-faq__accordion-label sc-faq__accordion-label--plus"
                    htmlFor="one"
                  >
                    How does the SC Referral Club work?
                  </label>
                  <div className="sc-faq__accordion-content sc-rte">
                    The SC Referral Club is open to all existing primary account holder of deposit
                    accounts and principal cardholders of credit cards to invite their friends to
                    Standard Chartered and earn CashBack/cash rebates or Asia Miles on successful
                    referrals.
                  </div>
                </div>

                <div className="sc-faq__accordion">
                  <input
                    className="sc-faq__accordion-input"
                    type="checkbox"
                    tabIndex={-1}
                    id="two"
                  />
                  <label
                    tabIndex={0}
                    className="sc-faq__accordion-label sc-faq__accordion-label--plus"
                    htmlFor="two"
                  >
                    What will I receive when I refer a friend?
                  </label>
                  <div className="sc-faq__accordion-content sc-rte">
                    For details on Referrer offers, please refer to the Additional Terms and
                    Conditions of the respective SC Referral Club Programs/Products.
                  </div>
                </div>

                <div className="sc-faq__accordion">
                  <input
                    className="sc-faq__accordion-input"
                    type="checkbox"
                    tabIndex={-1}
                    id="three"
                  />
                  <label
                    tabIndex={0}
                    className="sc-faq__accordion-label sc-faq__accordion-label--plus"
                    htmlFor="three"
                  >
                    What will my friend or family receive?
                  </label>
                  <div className="sc-faq__accordion-content sc-rte">
                    Your friend and family will receive a sign-up reward if he/she has successfully
                    signed up for an eligible product and fulfil the sign-up eligibility criteria.
                    for details, please refer to each of the Terms and Conditions of these products
                    that he/she is applying for.
                  </div>
                </div>

                <div className="sc-faq__accordion">
                  <input
                    className="sc-faq__accordion-input"
                    type="checkbox"
                    tabIndex={-1}
                    id="four"
                  />
                  <label
                    tabIndex={0}
                    className="sc-faq__accordion-label sc-faq__accordion-label--plus"
                    htmlFor="four"
                  >
                    Are there any restrictions and/or eligibility criteria for referrals?
                  </label>
                  <div className="sc-faq__accordion-content sc-rte">
                    For details on Referee eligibility for each Products/Programs on New Services(s)
                    , please refer to the Additional Terms and Conditions of the respective SC
                    Referral Club Programs/products
                  </div>
                </div>

                <div className="sc-faq__accordion">
                  <input
                    className="sc-faq__accordion-input"
                    type="checkbox"
                    tabIndex={-1}
                    id="five"
                  />
                  <label
                    tabIndex={0}
                    className="sc-faq__accordion-label sc-faq__accordion-label--plus"
                    htmlFor="five"
                  >
                    When will I receive my reward?
                  </label>
                  <div className="sc-faq__accordion-content sc-rte">
                    Your referral cashback will be credited to your account. For detail timing for
                    each product/program, please refer to each of the Terms and Conditions of these
                    products.
                  </div>
                </div>
              </div>
            </div>

            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://av.sc.com/hk/content/docs/hk-online-mgm-referrer-tnc.pdf"
              title="Terms & Conditions of SC Referral Club"
              className="sc-faq__terms-link"
            >
              Terms & Conditions of SC Referral Club
            </a>
          </div>
        </div>
      )}
      {props.single && (
        <div className={`sc-faq ${props.class}`}>
          <div className="sc-content-wrapper">
            <HeadingInners class="" icon={true} />
            <div className="sc-faq__accordion">
              <input className="sc-faq__accordion-input" type="checkbox" tabIndex={-1} id="one" />
              <label
                tabIndex={0}
                className="sc-faq__accordion-label sc-faq__accordion-label--plus"
                htmlFor="one"
              >
                How does the SC Referral Club work?
              </label>
              <div className="sc-faq__accordion-content sc-rte">
                The SC Referral Club is open to all existing primary account holder of deposit
                accounts and principal cardholders of credit cards to invite their friends to
                Standard Chartered and earn CashBack/cash rebates or Asia Miles on successful
                referrals.
              </div>
            </div>

            <div className="sc-faq__accordion">
              <input className="sc-faq__accordion-input" type="checkbox" tabIndex={-1} id="two" />
              <label
                tabIndex={0}
                className="sc-faq__accordion-label sc-faq__accordion-label--plus"
                htmlFor="two"
              >
                What will I receive when I refer a friend?
              </label>
              <div className="sc-faq__accordion-content sc-rte">
                For details on Referrer offers, please refer to the Additional Terms and Conditions
                of the respective SC Referral Club Programs/Products.
              </div>
            </div>

            <div className="sc-faq__accordion">
              <input className="sc-faq__accordion-input" type="checkbox" tabIndex={-1} id="three" />
              <label
                tabIndex={0}
                className="sc-faq__accordion-label sc-faq__accordion-label--plus"
                htmlFor="three"
              >
                What will my friend or family receive?
              </label>
              <div className="sc-faq__accordion-content sc-rte">
                Your friend and family will receive a sign-up reward if he/she has successfully
                signed up for an eligible product and fulfil the sign-up eligibility criteria. for
                details, please refer to each of the Terms and Conditions of these products that
                he/she is applying for.
              </div>
            </div>

            <div className="sc-faq__accordion">
              <input className="sc-faq__accordion-input" type="checkbox" tabIndex={-1} id="four" />
              <label
                tabIndex={0}
                className="sc-faq__accordion-label sc-faq__accordion-label--plus"
                htmlFor="four"
              >
                Are there any restrictions and/or eligibility criteria for referrals?
              </label>
              <div className="sc-faq__accordion-content sc-rte">
                For details on Referee eligibility for each Products/Programs on New Services(s) ,
                please refer to the Additional Terms and Conditions of the respective SC Referral
                Club Programs/products
              </div>
            </div>

            <div className="sc-faq__accordion">
              <input className="sc-faq__accordion-input" type="checkbox" tabIndex={-1} id="five" />
              <label
                tabIndex={0}
                className="sc-faq__accordion-label sc-faq__accordion-label--plus"
                htmlFor="five"
              >
                When will I receive my reward?
              </label>
              <div className="sc-faq__accordion-content sc-rte">
                Your referral cashback will be credited to your account. For detail timing for each
                product/program, please refer to each of the Terms and Conditions of these products.
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
