import React from 'react';
import myInfo from '../../../../static/images/my-info-logo-104x39.png';

export const AccordionEligibilityAndDocs = props => {
  return (
    <div className="sc-accordion">
      <input className="sc-accordion__input" tabIndex="-1" type="checkbox" id={props.id} />
      <h2 className="sc-heading">
        <label
          className="sc-accordion__label sc-accordion__label--plus"
          tabIndex="0"
          htmlFor={props.id}
        >
          Eligibility And Documents
        </label>
      </h2>
      <div className="sc-accordion__content sc-rte">
        <div className="sc-eligibility-doc">
          <input
            className="sc-eligibility-doc__input"
            type="radio"
            tabIndex="-1"
            name="tabset"
            id="eligibility-1"
            defaultChecked
          />
          <label className="sc-eligibility-doc__label" tabIndex="0" htmlFor="eligibility-1">
            Singaporean Citizens &amp; PR
          </label>
          <input
            className="sc-eligibility-doc__input"
            type="radio"
            name="tabset"
            tabIndex="-1"
            id="eligibility-2"
          />
          <label className="sc-eligibility-doc__label" tabIndex="0" htmlFor="eligibility-2">
            Foreigners
          </label>

          <div className="sc-eligibility-doc__panels">
            <section className="sc-eligibility-doc__panel">
              <div className="sc-two-column">
                <div className="sc-two-column__column">
                  <h3 className="sc-h3">Application Eligibility</h3>
                  <h4 className="sc-h4">Age requirement:</h4>
                  <ul>
                    <li>
                      For clients applying for Bonus$aver account and Bonus$aver Debit Card: Minimum
                      18 years old
                    </li>
                    <li>
                      For clients applying for Bonus$aver account and Bonus$aver Credit Card: 21 to
                      65 years old
                    </li>
                  </ul>
                  <h3 className="sc-h3">For Existing Standard Chartered Credit Cardholders</h3>

                  <p>No documents are required.</p>
                  <p>
                    However, if there has been a recent change to your income, please submit your
                    updated documents for review during the application process.
                  </p>
                </div>

                <div className="sc-two-column__column">
                  <h3 className="sc-h3">
                    For New Customers or Existing Customers with Change(s) in Income/Employment
                  </h3>

                  <h3>For SingPass holders applying with MyInfo</h3>

                  <img
                    width="104"
                    height="39"
                    className="sc-eligibility-doc__img-sm"
                    src={myInfo}
                  />
                  <p>No documents are required.</p>
                  <h5 className="sc-h4">For Salaried Employees/Partial Commission-based Earners</h5>
                  <ul>
                    <li>Copy of NRIC (front and back)</li>
                    <li>
                      <div className="inline-block">
                        <div>
                          (i) Latest computerised payslip <strong>OR</strong>
                        </div>
                        <div>(ii) Latest 6 months’ CPF Contribution History Statement</div>
                        <p>
                          To be considered for a higher loan amount, please submit your latest
                          Income Tax Notice of Assessment (NOA) in addition to the above.
                        </p>
                      </div>
                    </li>
                  </ul>
                  <h5 className="sc-h4">For 100% Commission-based Earners</h5>
                  <ul>
                    <li>Copy of NRIC (front and back)</li>
                    <li>
                      <div className="inline-block">
                        <div>
                          (i) Latest Income Tax Notice of Assessment (NOA) <strong>OR</strong>
                        </div>
                        <div>(ii) Latest 3 months of Commission Statement from same employer</div>
                      </div>
                    </li>
                  </ul>
                  <h5 className="sc-h4">For Self-employed</h5>
                  <ul>
                    <li>Copy of NRIC (front and back)</li>
                    <li>
                      <div className="inline-block">
                        <div>(i) Copy of NRIC (front and back)</div>
                        <div>(ii) Latest Income Tax Notice of Assessment (NOA)</div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
            <section className="sc-eligibility-doc__panel">
              <div className="sc-two-column">
                <div className="sc-two-column__column">
                  <h3 className="sc-h3">Application Eligibility</h3>
                  <h4 className="sc-h4">Age requirement:</h4>
                  <ul>
                    <li>
                      For clients applying for Bonus$aver account and Bonus$aver Debit Card: Minimum
                      18 years old
                    </li>
                    <li>
                      For clients applying for Bonus$aver account and Bonus$aver Credit Card: 21 to
                      65 years old
                    </li>
                  </ul>
                  <h3 className="sc-h3">or Existing Standard Chartered Credit Cardholders</h3>

                  <p>No documents are required.</p>
                  <p>
                    However, if there has been a recent change to your income, please submit your
                    updated documents for review during the application process.
                  </p>
                </div>

                <div className="sc-two-column__column">
                  <h3 className="sc-h3">
                    For New Customers or Existing Customers with Change(s) in Income/Employment
                  </h3>
                  <h5 className="sc-h4">Please prepare the following:</h5>

                  <ul>
                    <li>Copy of Passport (with at least 6 months’ validity)</li>
                    <li>Copy of your Employment Pass</li>
                    <li>
                      <div className="inline-block sub-list">
                        <div>
                          Any <strong>ONE</strong> of the following documents:
                        </div>
                        <div>(i) Latest utility bill, rates or tax bill</div>
                        <div>
                          (ii) Latest bank / credit card statement (e-Statements are accepted)
                        </div>
                        <div>(iii) Rental agreement showing your address</div>
                        <div>(iv) Latest mobile phone statement or pay-TV statement</div>
                        <div>(v) Letter from employer stating current address</div>
                        <div>
                          (vi) Government-issued document stating current address (e.g. IRAS, CPF,
                          ICA)
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};
