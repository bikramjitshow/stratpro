import React, { useState, useEffect } from 'react';
import ScFirstSaverCalculator from './sc-firstsaver-calculator.js';

export const FirstsaverCalculators = () => {
  const [inputValueOne, setInputValueOne] = useState('1000');
  const [inputValueTwo, setInputValueTwo] = useState('500');

  const handleChangeOne = event => {
    setInputValueOne(event.target.value);
  };
  const handleChangeTwo = event => {
    setInputValueTwo(event.target.value);
  };
  useEffect(() => {
    ScFirstSaverCalculator.init();
  }, []);
  return (
    <div
      className="sc-firstsaver-calc"
      data-currency="S$"
      data-prevailing-interest="2"
      data-signup-bonus="1"
      data-cashback="1"
    >
      <div className="sc-content-wrapper">
        <div className="sc-firstsaver-calc__container">
          <div className="sc-heading-inner">
            <h2 className="sc-title sc-title--inner undefined">
              Calculate your interest and cashback
            </h2>
          </div>
          <div className="sc-firstsaver-calc__inner">
            <div className="sc-firstsaver-calc__left">
              <div className="sc-firstsaver-calc__tiles">
                <div className="sc-calculator-tile">
                  <div className="sc-calculator-tile__top">
                    <div className="sc-calculator-tile__label">
                      <div className="sc-calculator-tile__label-icon">
                        <svg
                          width="64"
                          height="64"
                          viewBox="0 0 64 64"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M28.5405 4.16049C23.3554 4.8287 18.4535 6.90886 14.37 10.1739C8.69492 14.7293 4.88656 21.7281 4.11451 29.018C3.96183 30.9974 3.96183 32.9857 4.11451 34.9651C4.70942 40.3265 6.81657 45.4081 10.19 49.6168C14.8779 55.3781 21.6428 59.0645 29.0244 59.8802C29.6409 59.9436 30.9776 59.9983 31.9974 59.9983C35.0073 60.032 38.0013 59.5566 40.8528 58.5922C44.9817 57.2111 48.7334 54.8894 51.8119 51.8102C54.8904 48.731 57.2117 44.9786 58.5925 40.8488C59.5567 37.9967 60.032 35.0021 59.9983 31.9915C59.9983 30.9715 59.9436 29.6346 59.8802 29.018C59.2853 23.6566 57.1782 18.575 53.8047 14.3663C49.1169 8.60499 42.352 4.91861 34.9703 4.10287C33.4694 3.94439 30.0356 3.97321 28.5405 4.16049ZM35.3851 8.43643C37.2373 8.70507 39.0513 9.19155 40.7894 9.88575C45.4664 11.7445 49.433 15.0397 52.1182 19.2969C54.8034 23.5542 56.0687 28.5539 55.7319 33.5763C54.9801 44.779 46.5769 53.861 35.3938 55.5639C33.6884 55.8232 30.3064 55.8232 28.601 55.5639C16.2137 53.6795 7.43027 42.7966 8.26569 30.3664C8.49092 27.1008 9.38701 23.9166 10.898 21.0129C12.409 18.1092 14.5024 15.5484 17.0474 13.4903C19.5925 11.4323 22.5345 9.92129 25.6896 9.05172C28.8448 8.18215 32.1454 7.97269 35.3851 8.43643ZM31.9945 23.382L31.9916 32.0492L24.0033 35.2705L16.012 38.489L16.2944 39.1287C17.6742 42.252 20.3966 45.2141 23.5279 47.0063C27.3939 49.2221 32.2998 49.8041 36.7074 48.5737C44.5661 46.3839 49.8725 38.7051 49.158 30.5624C48.934 27.8289 48.0596 25.1886 46.6078 22.8619C45.1561 20.5352 43.169 18.5895 40.8125 17.1871C38.3754 15.7349 35.9671 15.0117 32.7752 14.7697L31.9974 14.712L31.9945 23.382Z"
                            fill="#2772C7"
                          ></path>
                        </svg>
                      </div>
                      <p>First$aver interest</p>
                      <span className="sc-tooltip" tabIndex={0}>
                        <svg
                          width="64"
                          height="64"
                          viewBox="0 0 64 64"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M32.3335 60.6666C48.3495 60.6666 61.3335 47.6853 61.3335 31.6666C61.3335 15.6506 48.3495 2.66662 32.3335 2.66662C16.3148 2.66662 3.3335 15.6506 3.3335 31.6666C3.3335 47.6826 16.3148 60.6666 32.3335 60.6666Z"
                            stroke="#919191"
                            strokeWidth="2"
                            strokeMiterlimit="10"
                          ></path>
                          <path
                            d="M30.6665 36.5546H33.3332V17.888H30.6665V36.5546ZM30.6665 47.2213H33.3332V41.888H30.6665V47.2213Z"
                            fill="#919191"
                          ></path>
                        </svg>
                        <span className="sc-tooltip__text">
                          Experience the new standard of digital banking with SC Mobile
                        </span>
                      </span>
                    </div>
                    <div className="sc-calculator-tile__text-container">
                      <div className="sc-calculator-tile__text">
                        My estimated monthly card spending will be
                      </div>
                    </div>
                    <div className="sc-calculator-tile__input-box">
                      <span className="sc-calculator-tile__currency">S$</span>
                      <input
                        type="text"
                        pattern="[0-9]+"
                        className="sc-calculator-tile__amount-input sc-calculator-tile__daily-balance"
                        aria-label="Loan Amount"
                        // below code added for fixing the value clearing issue in storybook
                        value={inputValueOne}
                        onChange={handleChangeOne}
                        data-min="1"
                        data-max="100000000"
                      />
                      <span className="sc-calculator-tile__edit-input">
                        <svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M10.297 1.734c-.289.06-.186-.038-4.198 3.97-2.298 2.294-3.876 3.89-3.938 3.982-.159.237-.165.305-.156 2.021l.008 1.506.065.16c.088.219.33.461.549.549l.16.065 1.506.008c1.716.009 1.784.003 2.021-.156.092-.062 1.684-1.637 3.981-3.938 2.969-2.974 3.841-3.862 3.888-3.959a1.02 1.02 0 0 0 .086-.595c-.066-.355-.053-.34-1.53-1.822A83.646 83.646 0 0 0 11.196 2c-.265-.23-.597-.329-.899-.266m1.61 2.373 1.386 1.386-.646.647-.647.647-1.393-1.394L9.214 4l.639-.64c.352-.352.646-.64.654-.64.007 0 .637.624 1.4 1.387m-2 2 1.386 1.386-2.646 2.647L6 12.787l-1.393-1.394L3.213 10l2.64-2.64a350.87 350.87 0 0 1 2.654-2.64c.007 0 .637.624 1.4 1.387m-5.98 6.9c-.48.004-.888.001-.907-.006-.026-.01-.033-.214-.033-.913v-.901l.906.906L4.8 13l-.873.007"
                            fillRule="evenodd"
                            fill="#525355"
                          ></path>
                        </svg>
                      </span>
                    </div>
                    <p className="sc-firstsaver-calc__error-msg hide">
                      Please enter a valid amount
                    </p>
                  </div>
                  <div className="sc-calculator-tile__bottom">
                    <div className="sc-calculator-tile__content">
                      <p className="sc-calculator-tile__content-desc">Prevailing Interest (p.a.)</p>
                      <p className="sc-calculator-tile__content-interest">2.00%</p>
                    </div>
                    <div className="sc-calculator-tile__content">
                      <p className="sc-calculator-tile__content-desc">
                        Sign-up Bonus Interest (p.a.)
                      </p>
                      <p className="sc-calculator-tile__content-interest">1.00%</p>
                    </div>
                  </div>
                </div>
                <div className="sc-calculator-tile">
                  <div className="sc-calculator-tile__top">
                    <div className="sc-calculator-tile__label">
                      <div className="sc-calculator-tile__label-icon">
                        <svg
                          width="64"
                          height="64"
                          viewBox="0 0 64 64"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M43.0945 4.14553C40.6889 4.43693 38.767 4.88338 35.7225 5.85648C31.574 7.18514 29.0507 7.58614 26.057 7.39099C24.4612 7.2894 23.1675 7.0889 18.8881 6.28154C17.1827 5.95807 15.5442 5.69608 15.2475 5.69608C14.9114 5.69941 14.5821 5.79107 14.2927 5.96187C14.0032 6.13267 13.7637 6.37659 13.5983 6.66918L13.3711 7.07018L13.3737 20.9342C13.3737 36.3515 13.3203 35.2313 14.0901 35.8195C14.4697 36.1082 15.6591 36.4397 17.4928 36.7658C22.8895 37.7309 27.6822 37.2684 35.8829 34.9907C38.505 34.2609 39.5876 34.0337 42.1376 33.6674C45.5296 33.1809 49.1996 32.9857 51.493 33.1702C53.9602 33.3707 55.2646 33.6514 56.8203 34.317C57.2827 34.5149 57.836 34.6753 58.0525 34.6726C58.8116 34.6673 59.6296 34.1272 59.8808 33.4589C59.9637 33.245 59.9984 29.4756 59.9958 20.9208C59.9958 6.74136 60.1428 8.31329 58.7047 7.16108C56.7294 5.58112 53.4523 4.45564 49.7903 4.10008C48.2427 3.9477 44.5059 3.97444 43.0945 4.14553ZM50.1271 8.1021C51.469 8.29191 52.4099 8.5031 53.5245 8.86668C54.4574 9.16877 56.0291 9.9387 56.1012 10.1232C56.1253 10.1873 56.1333 12.334 56.1173 14.8924L56.0905 19.5441L51.9688 13.8766C50.5617 11.9469 49.1602 10.0131 47.7642 8.07537C47.6546 7.8909 48.7212 7.9016 50.1271 8.1021ZM48.2721 15.5073C51.191 19.5227 53.5753 22.843 53.5726 22.8858C53.5726 22.9312 51.7229 24.3989 49.4669 26.1473L45.3666 29.3286L43.859 29.489C40.5632 29.8365 37.9357 30.323 35.1879 31.0956C33.2126 31.6517 30.9833 32.2158 30.7695 32.2158C30.6866 32.2158 30.5556 32.0607 30.4781 31.8682C30.3284 31.4886 19.8263 20.8701 19.1099 20.3728C18.8405 20.197 18.5373 20.0796 18.2198 20.0279L17.7414 19.9718L23.9159 15.641C27.3133 13.259 30.1921 11.278 30.3151 11.2353C30.438 11.1952 31.2212 11.0374 32.0578 10.8877C33.5814 10.6124 35.0409 10.2194 38.0212 9.28372C39.6678 8.76777 42.3327 8.14755 42.739 8.18765C42.9101 8.20369 44.3401 10.0964 48.2721 15.5073ZM20.0588 10.5028C21.2938 10.7327 22.5581 10.9546 22.8655 10.9973C23.1755 11.0374 23.4241 11.0989 23.4241 11.1364C23.4188 11.2112 17.3966 15.4271 17.2923 15.4271C17.2041 15.4271 17.2068 10.1365 17.295 10.0456C17.3324 10.0082 17.4661 10.0002 17.589 10.0296C17.712 10.059 18.8239 10.2729 20.0588 10.5028ZM34.7843 12.2217C33.5173 12.5532 32.5817 13.1093 31.55 14.1412C30.0611 15.6303 29.4143 17.1862 29.4143 19.2767C29.4143 21.3673 30.0611 22.9232 31.55 24.4123C33.0388 25.9013 34.5945 26.5483 36.6848 26.5483C38.775 26.5483 40.3307 25.9013 41.8195 24.4123C43.3084 22.9232 43.9552 21.3673 43.9552 19.2767C43.9552 17.1862 43.3084 15.6303 41.8195 14.1412C40.7744 13.0933 39.8442 12.5479 38.5451 12.2164C37.3067 11.9387 36.0219 11.9406 34.7843 12.2217ZM38.0881 16.2505C39.7426 16.975 40.4857 18.9666 39.7319 20.6455C38.5532 23.2761 34.8163 23.2761 33.6376 20.6455C33.2863 19.8699 33.2449 18.9894 33.5217 18.1842C33.7985 17.3791 34.3726 16.7102 35.1264 16.3147C36.0994 15.8174 37.0563 15.7987 38.0881 16.2505ZM26.0623 33.09C25.8004 33.237 22.943 33.3546 21.545 33.2771C20.139 33.1996 17.9151 32.9055 17.4661 32.7371L17.2255 32.6489V24.0353L21.7134 28.5239C24.7713 31.5795 26.1586 33.0365 26.0623 33.09ZM56.144 27.9518V29.89L55.7965 29.8178C54.7701 29.6066 52.9712 29.3286 52.6317 29.3259C52.4562 29.3325 52.2811 29.3053 52.1158 29.2457C52.0356 29.1949 52.7253 28.588 53.9869 27.5989C55.0855 26.7354 56.0184 26.027 56.0638 26.0216C56.1093 26.0163 56.144 26.8851 56.144 27.9518ZM40.336 37.1428C39.5662 37.2417 38.5665 37.6775 37.8609 38.2201C37.5962 38.4233 36.0272 39.6557 34.3753 40.9603L31.3735 43.3263L30.7935 42.7916C30.1217 42.171 29.3015 41.7337 28.4119 41.5217C28.0163 41.4389 25.1856 41.4121 19.1393 41.4335L10.4361 41.4656L9.51396 41.7944C7.33281 42.5777 5.50984 44.4116 4.79883 46.545C4.59569 47.1599 4.56361 47.5314 4.52619 49.7289L4.4861 52.2178L4.75072 52.6696C4.91858 52.9613 5.16229 53.2021 5.45596 53.3663C5.74964 53.5306 6.08231 53.6123 6.41866 53.6026C7.07354 53.6026 7.4531 53.4262 7.90216 52.9156C8.31112 52.4504 8.33518 52.298 8.38062 49.9669C8.41537 48.2158 8.43408 48.0554 8.69603 47.486C9.0355 46.7482 9.72245 46.037 10.4388 45.6842L10.9707 45.4222L19.257 45.3928C25.354 45.3714 27.6207 45.3981 27.8426 45.489C28.4654 45.7456 28.6685 46.815 28.1927 47.3283C28.0533 47.4796 27.8789 47.5943 27.6848 47.6624C27.5485 47.6945 25.4636 47.7319 23.0526 47.748C18.0461 47.7774 18.1022 47.7694 17.5329 48.6703C16.8834 49.6915 17.287 51.0656 18.3722 51.5308C18.9041 51.758 27.7276 51.7447 28.6097 51.5147C29.4614 51.2808 30.2403 50.8358 30.8743 50.2208C31.5084 49.6059 31.977 48.8409 32.2369 47.9966C32.3519 47.601 32.6913 47.3069 36.3961 44.3876C38.9835 42.3478 40.5766 41.1635 40.8359 41.0833C41.8997 40.7652 42.87 42.043 42.2846 43.0001C42.1911 43.1552 40.312 44.8955 38.1148 46.8658C32.4882 51.9077 31.7103 52.5814 30.8042 53.223C29.206 54.3081 27.4342 55.1118 25.5652 55.5996C23.6834 56.0407 23.2531 56.0595 14.3387 56.0621C8.96065 56.0621 5.58736 56.1022 5.34947 56.1691C4.83626 56.3107 4.20811 56.9577 4.06377 57.4897C3.997 57.7852 3.98253 58.0901 4.021 58.3906C4.11188 59.0135 4.77478 59.754 5.38154 59.9171C5.67557 59.9973 8.61584 60.0187 14.8572 59.9839C22.387 59.9465 24.0603 59.9091 24.8167 59.7728C28.5723 59.0937 31.6034 57.7223 34.3512 55.4633C35.9042 54.1828 44.8747 46.0932 45.281 45.604C46.9463 43.5936 46.7351 40.3775 44.8186 38.6051C43.5035 37.3861 42.0708 36.9182 40.336 37.1428Z"
                            fill="#2772C7"
                          ></path>
                        </svg>
                      </div>
                      <p>Debit Card cashback</p>
                      <span className="sc-tooltip" tabIndex={0}>
                        <svg
                          width="64"
                          height="64"
                          viewBox="0 0 64 64"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M32.3335 60.6666C48.3495 60.6666 61.3335 47.6853 61.3335 31.6666C61.3335 15.6506 48.3495 2.66662 32.3335 2.66662C16.3148 2.66662 3.3335 15.6506 3.3335 31.6666C3.3335 47.6826 16.3148 60.6666 32.3335 60.6666Z"
                            stroke="#919191"
                            strokeWidth="2"
                            strokeMiterlimit="10"
                          ></path>
                          <path
                            d="M30.6665 36.5546H33.3332V17.888H30.6665V36.5546ZM30.6665 47.2213H33.3332V41.888H30.6665V47.2213Z"
                            fill="#919191"
                          ></path>
                        </svg>
                        <span className="sc-tooltip__text">
                          Experience the new standard of digital banking with SC Mobile
                        </span>
                      </span>
                    </div>
                    <div className="sc-calculator-tile__text-container">
                      <div className="sc-calculator-tile__text">
                        My estimated monthly card spending will be
                      </div>
                    </div>
                    <div className="sc-calculator-tile__input-box">
                      <span className="sc-calculator-tile__currency">S$</span>
                      <input
                        type="number"
                        pattern="[0-9]+"
                        inputMode="numeric"
                        className="sc-calculator-tile__amount-input sc-calculator-tile__monthly-spend"
                        aria-label="Loan Amount"
                        // below code added for fixing the value clearing issue in storybook
                        value={inputValueTwo}
                        onChange={handleChangeTwo}
                        data-min="1"
                        data-max="100000000"
                      />
                      <span className="sc-calculator-tile__edit-input">
                        <svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M10.297 1.734c-.289.06-.186-.038-4.198 3.97-2.298 2.294-3.876 3.89-3.938 3.982-.159.237-.165.305-.156 2.021l.008 1.506.065.16c.088.219.33.461.549.549l.16.065 1.506.008c1.716.009 1.784.003 2.021-.156.092-.062 1.684-1.637 3.981-3.938 2.969-2.974 3.841-3.862 3.888-3.959a1.02 1.02 0 0 0 .086-.595c-.066-.355-.053-.34-1.53-1.822A83.646 83.646 0 0 0 11.196 2c-.265-.23-.597-.329-.899-.266m1.61 2.373 1.386 1.386-.646.647-.647.647-1.393-1.394L9.214 4l.639-.64c.352-.352.646-.64.654-.64.007 0 .637.624 1.4 1.387m-2 2 1.386 1.386-2.646 2.647L6 12.787l-1.393-1.394L3.213 10l2.64-2.64a350.87 350.87 0 0 1 2.654-2.64c.007 0 .637.624 1.4 1.387m-5.98 6.9c-.48.004-.888.001-.907-.006-.026-.01-.033-.214-.033-.913v-.901l.906.906L4.8 13l-.873.007"
                            fillRule="evenodd"
                            fill="#525355"
                          ></path>
                        </svg>
                      </span>
                    </div>
                    <p className="sc-firstsaver-calc__error-msg hide">
                      Please enter a valid amount
                    </p>
                  </div>
                  <div className="sc-calculator-tile__bottom">
                    <div className="sc-calculator-tile__content">
                      <p className="sc-calculator-tile__content-desc">Cashback</p>
                      <p className="sc-calculator-tile__content-interest">1.00%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="sc-firstsaver-calc__right">
              <div className="sc-firstsaver-calc__content">
                <div className="sc-firstsaver-calc__content-heading">Estimated total interest</div>
                <div className="sc-firstsaver-calc__content-box">
                  <span className="sc-firstsaver-calc__currency">S$</span>
                  <span className="sc-firstsaver-calc__amt sc-firstsaver-calc__total-interest">
                    12.49
                  </span>
                </div>
              </div>
              <div className="sc-firstsaver-calc__content">
                <div className="sc-firstsaver-calc__content-heading">
                  Estimated annual cashback:
                </div>
                <div className="sc-firstsaver-calc__content-box">
                  <span className="sc-firstsaver-calc__currency">S$</span>
                  <span className="sc-firstsaver-calc__amt sc-firstsaver-calc__annual-cashback">
                    4
                  </span>
                </div>
              </div>
              <div className="sc-firstsaver-calc__content">
                <div className="sc-firstsaver-calc__content-heading">Total</div>
                <div className="sc-firstsaver-calc__content-box sc-firstsaver-calc__content-box--large-font">
                  <span className="sc-firstsaver-calc__currency">S$</span>
                  <span className="sc-firstsaver-calc__amt sc-firstsaver-calc__total">1,100</span>
                </div>
              </div>
              <div className="sc-firstsaver-calc__btn">
                <ul className="sc-bnr-buttons">
                  <li className="sc-inline-buttons__item">
                    <a href="#" title="Apply Now" className="sc-btn sc-btn--medium">
                      <span className="sc-only-desktop">Apply Now</span>
                      <span className="sc-only-mobile">Apply Now</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
