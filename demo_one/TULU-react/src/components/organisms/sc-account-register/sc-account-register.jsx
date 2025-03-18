import React, { useEffect } from 'react';
import ScAccountRegister from './sc-account-register';

export const AccountRegisters = props => {
  useEffect(() => {
    ScAccountRegister.init();

    window.modularXML =
      "<?xml version='1.0' encoding='UTF-8'?><eform FID='data-form-id'><model><instance id='savemodel'><sigfields><sigchar><sigchar1>data-account-number</sigchar1><sigchar2>NA</sigchar2></sigchar><signum/><sigdate/></sigfields></instance><instance id='outputmodel'><accountNo>data-account-number</accountNo><amount>NA</amount><month>data-month-year</month></instance></model></eform>";
  }, []);
  return (
    <div
      className={`sc-account-register ${props.class}`}
      data-url="https://www.sc.com/nfs-ofp/ofpservice.htm"
      data-form-id="SGR1160"
      data-success-message="Thank you for registering for the e$aver Marathon $aver Promotion. Your registration details have been submitted. Your reference number is: "
      data-failure-message="Something went wrong, please try later."
    >
      <div
        className="sc-account-register__wrapper"
        id="sc-account-register"
        data-eligible-balance-capped="5000000"
        data-interest-rate='{"rates":["3.35","3.40","3.50"]}'
        data-currency="S$"
      >
        <div className="sc-content-wrapper">
          <div className="sc-heading-inner sc-title--center">
            <h2 className="sc-title sc-title--bold">
              Register for the Marathon $aver Promotion by 31 October 2024
            </h2>
          </div>
          <p className="sc-account-register__description sc-description">
            Don&apos;t have an esaver account?{' '}
            <a href="#" className="sc-btn-link sc-btn-link--white">
              Apply here
            </a>
          </p>

          <div className="sc-account-register__form">
            <p className="sc-account-register__sub-title"> Enter your 10-digit Account Number:</p>
            <div className="sc-account-register__input-wrapper">
              <input
                type="text"
                className="sc-account-register__input-box sc-account-register__input--account-no"
                placeholder="xxxxx-xxxxx"
                maxLength="10"
              />
              <p className="sc-account-register__status--error hide">Enter valid account number</p>
            </div>
          </div>
          <div className="sc-account-register__status hide"></div>

          <div className="sc-account-register__btn">
            <a
              href="javascript:void(0)"
              title="Register Now"
              className="sc-btn sc-account-register__btn-link"
            >
              Register Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
