import React from 'react';

export const SummaryLists = props => {
  return (
    <div
      className={`sc-summary-list ${props.class}
    ${props.sideBar ? 'sc-summary-list--sidebar' : 'sc-summary-list--header'}`}
    >
      <div className="sc-content-wrapper">
        {props.bg && (
          <div className="sc-summary-list__bg">
            <img
              src="https://av.sc.com/sg/content/images/sg-first-saver-summary-bg.png"
              alt="image"
            />
          </div>
        )}
        <div className="sc-summary-list__container">
          <div className="sc-heading-inner">
            <h2 className="sc-title sc-title--inner">Summary of Access</h2>
            <p className="sc-description">Select a common holiday spend:</p>
          </div>
          <div className="sc-summary-list__wrapper">
            <div className="sc-summary-list__box">
              <div className="sc-summary-list__row ">
                <div className="sc-summary-list__row-item"></div>
                <div className="sc-summary-list__row-item">Parents</div>
                <div className="sc-summary-list__row-item">Kids(&lt;13)</div>
                <div className="sc-summary-list__row-item">Kids(13+)</div>
              </div>
              <div className="sc-summary-list__row">
                <div className="sc-summary-list__row-item">
                  SC mobile - update POS and ATM withdrawal limit
                </div>
                <div className="sc-summary-list__row-item">
                  SC mobile - update POS and ATM withdrawal limit
                </div>
                <div className="sc-summary-list__row-item">
                  SC mobile - update POS and ATM withdrawal limit
                </div>
                <div className=" sc-summary-list__row-item">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
                      stroke="#2BFDDF"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16.125 9.75L10.625 15L7.875 12.375"
                      stroke="#2BFDDF"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <div className="sc-summary-list__row">
                <div className="sc-summary-list__row-item">
                  SC Mobile - view balance and transaction history
                </div>
                <div className="sc-summary-list__row-item">
                  SC Mobile - view balance and transaction history
                </div>
                <div className="sc-summary-list__row-item">
                  SC Mobile - view balance and transaction history
                </div>
                <div className="sc-summary-list__row-item">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
                      stroke="#2BFDDF"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16.125 9.75L10.625 15L7.875 12.375"
                      stroke="#2BFDDF"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <div className="sc-summary-list__row">
                <div className="sc-summary-list__row-item">Engagement Activities/ Gamification</div>
                <div className="sc-summary-list__row-item">Engagement Activities/ Gamification</div>
                <div className="sc-summary-list__row-item">Engagement Activities/ Gamification</div>
                <div className="sc-summary-list__row-item">Engagement Activities/ Gamification</div>
              </div>
              <div className="sc-summary-list__row">
                <div className="sc-summary-list__row-item">Debit Card Issuance</div>
                <div className="sc-summary-list__row-item">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
                      stroke="#2BFDDF"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16.125 9.75L10.625 15L7.875 12.375"
                      stroke="#2BFDDF"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="sc-summary-list__row-item">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
                      stroke="#EC9BA5"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9.53033 8.45893C9.23744 8.16603 8.76256 8.16603 8.46967 8.45893C8.17678 8.75182 8.17678 9.22669 8.46967 9.51959L10.9447 11.9946L8.46967 14.4697C8.17678 14.7626 8.17678 15.2374 8.46967 15.5303C8.76256 15.8232 9.23744 15.8232 9.53033 15.5303L12.0054 13.0553L14.4801 15.53C14.773 15.8229 15.2478 15.8229 15.5407 15.53C15.8336 15.2371 15.8336 14.7622 15.5407 14.4693L13.066 11.9946L15.5407 9.51992C15.8336 9.22703 15.8336 8.75216 15.5407 8.45926C15.2478 8.16637 14.773 8.16637 14.4801 8.45926L12.0054 10.934L9.53033 8.45893Z"
                      fill="#EC9BA5"
                    />
                  </svg>
                </div>
                <div className="sc-summary-list__row-item">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
                      stroke="#2BFDDF"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16.125 9.75L10.625 15L7.875 12.375"
                      stroke="#2BFDDF"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <div className="sc-summary-list__row">
                <div className="sc-summary-list__row-item">Online Banking</div>
                <div className="sc-summary-list__row-item">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
                      stroke="#2BFDDF"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16.125 9.75L10.625 15L7.875 12.375"
                      stroke="#2BFDDF"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="sc-summary-list__row-item">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
                      stroke="#EC9BA5"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9.53033 8.45893C9.23744 8.16603 8.76256 8.16603 8.46967 8.45893C8.17678 8.75182 8.17678 9.22669 8.46967 9.51959L10.9447 11.9946L8.46967 14.4697C8.17678 14.7626 8.17678 15.2374 8.46967 15.5303C8.76256 15.8232 9.23744 15.8232 9.53033 15.5303L12.0054 13.0553L14.4801 15.53C14.773 15.8229 15.2478 15.8229 15.5407 15.53C15.8336 15.2371 15.8336 14.7622 15.5407 14.4693L13.066 11.9946L15.5407 9.51992C15.8336 9.22703 15.8336 8.75216 15.5407 8.45926C15.2478 8.16637 14.773 8.16637 14.4801 8.45926L12.0054 10.934L9.53033 8.45893Z"
                      fill="#EC9BA5"
                    />
                  </svg>
                </div>
                <div className="sc-summary-list__row-item">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
                      stroke="#2BFDDF"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16.125 9.75L10.625 15L7.875 12.375"
                      stroke="#2BFDDF"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="sc-summary-list__disclaimer sc-rte">
            <p>
              List above is the popular# HK stocks and US stocks linked to Equity-Linked Investment
              offered by SCBHK in the specified offer period^.
            </p>
            <p>^Last update and quotation date: 02/10/2024.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
