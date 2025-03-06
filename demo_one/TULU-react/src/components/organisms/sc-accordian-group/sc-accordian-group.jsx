import React from 'react';
import { ScAccordianDeposit } from '../../molecules/sc-accordian-deposit-insurance-scheme/sc-accordian-deposit-insurance-scheme';
import { ScAccordianFAQs } from '../../../../src/components/molecules/sc-accordian-FAQ/sc-accordian-FAQ';
import { AccordianKeyCharges } from '../../../../src/components/molecules/sc-accordian-key-charges/sc-accordian-key-charges';
import { AccordionEligibilityAndDocs } from '../../../../src/components/molecules/sc-accordion-eligibility-and-documents/sc-accordion-eligibility-and-documents';
import { AccordionTermsAndCondition } from '../../../../src/components/molecules/sc-accordion-terms-and-conditions/sc-accordion-terms-and-conditions';

export const AccordianGroups = function(props) {
  return (
    <div className={`sc-accordion-group ${props.class}`}>
      <div className="sc-heading-inner sc-title--center">
        <h2 className="sc-title sc-title--inner">Before You Apply</h2>
      </div>
      <div className="sc-content-wrapper">
        <AccordionEligibilityAndDocs id="one" />
        <AccordianKeyCharges id="two" />
        <ScAccordianFAQs id="three" />
        <AccordionTermsAndCondition id="four" />
        <ScAccordianDeposit id="five" />
      </div>
    </div>
  );
};
