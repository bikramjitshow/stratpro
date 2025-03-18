import React, { useEffect } from 'react';
import ProductBoxImgOne from '../../../../static/images/intrest-rate.png';
import ProductBoxImgTwo from '../../../../static/images/debit-card.png';
import ProductBoxImgThree from '../../../../static/images/mobile-access.png';
import ProductBoxImgFour from '../../../../static/images/zero-free.png';

export const ProductBoxTile = props => {
  {
    /*Default  display the module with bg grey and box in white bg
    Add class name: `sc-product-boxes-tile--with-box-blue` to display the module with bg white and box in blue bg
    Add class name: `sc-product-boxes-tile--with-box-grey` to display the module with bg white and box in grey bg
    Add class name: `sc-product-boxes-tile--column`to display the text as column view for boxes
    Add class name: `sc-product-boxes-tile--with-gradient-box` to add gradient border and color to the view
    Add class name: `sc-product-boxes-tile--with-slider` to display the box tiles as with slider
    Add class name: `sc-product-boxes-tile--one-big-col` when one sc-product-boxes-tile__box--big is added
    Add class name: `sc-product-boxes-tile--two-big-col` when one sc-product-boxes-tile__box--big is added
    Add class name: `sc-product-boxes-tile--with-dark-blue-box` to display the module with bg white and box in dark blue bg*/
  }
  useEffect(() => {
    var elms = document.getElementsByClassName('splide');
    for (var i = 0; i < elms.length; i++) {
      // eslint-disable-next-line no-undef
      new Splide(elms[i]).mount();
    }
  }, []);
  return (
    <div
      className={`sc-product-boxes-tile ${props.class}
      ${props.tileItem === 5 ? 'sc-product-boxes-tile--five-column' : ''}
      ${props.tileItem === 4 ? 'sc-product-boxes-tile--four-column' : ''}
      ${props.columnView ? 'sc-product-boxes-tile--column' : ''}
      ${props.withSlide ? 'sc-product-boxes-tile--with-slider' : ''}
      ${props.withBigBox ? 'sc-product-boxes-tile--one-big-col' : ''}
      ${props.withCurvyBoxBg ? 'sc-product-boxes-tile--curve-bg' : ''}
      ${props.withDescBox ? 'sc-product-boxes-tile--desc-box' : ''}
      ${props.DarkBlueBox ? 'sc-product-boxes-tile--with-dark-blue-box' : ''}
      ${props.rightImage ? 'sc-product-boxes-tile--right-image' : ''}
      ${props.BlueGradBox ? 'sc-product-boxes-tile--blue-gradient-border ' : ''}`}
    >
      <div className="sc-content-wrapper">
        <div className={`sc-heading-inner ${props.centerHeading ? 'sc-title--center' : ''}`}>
          <h2 className="sc-title sc-title--inner">You Maybe Interested In</h2>
          <p className="sc-description">
            Viewing your transactions just got easier as it is now categorised into ‘Deposits’ and
            ‘Credit Cards’ for your easy viewing.
          </p>
        </div>
        {/* Without slider */}
        {props.withOutSlide && (
          <div className="sc-product-boxes-tile__wrapper">
            <div
              className={`sc-product-boxes-tile__box
              ${props.withBigBox ? 'sc-product-boxes-tile__box--big' : ''}`}
            >
              <div className="sc-product-boxes-tile__inner">
                {props.withIcon && (
                  <div className="sc-product-boxes-tile__icon">
                    <svg
                      width="56"
                      height="56"
                      viewBox="0 0 56 56"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="28" cy="17.5" r="7" fill="#38D200" />
                      <path
                        d="M28.1126 35C23.308 35 19.1428 37.7656 17.1341 41.8076C16.2739 43.5386 14.1732 44.2445 12.4422 43.3843C10.7112 42.5241 10.0052 40.4234 10.8655 38.6924C14.0112 32.3624 20.5493 28 28.1126 28C35.676 28 42.2141 32.3624 45.3598 38.6924C46.22 40.4234 45.5141 42.5241 43.7831 43.3843C42.0521 44.2445 39.9514 43.5386 39.0912 41.8076C37.0825 37.7656 32.9173 35 28.1126 35Z"
                        fill="#0F7AED"
                      />
                    </svg>
                  </div>
                )}

                <div className="sc-product-boxes-tile__content">
                  {!props.topText && (
                    <p className="sc-product-boxes-tile__box-top">
                      CashOne
                      {props.withToolTip && (
                        <span className="sc-tooltip" tabIndex="0">
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
                            />
                            <path
                              fill="#919191"
                              d="M30.351 27.162h2.639v18.474h-2.639V27.162zm0-10.556h2.639v5.278h-2.639v-5.278z"
                            />
                          </svg>
                          <span className="sc-tooltip__text">
                            Experience the new standard of digital banking with SC Mobile
                          </span>
                        </span>
                      )}
                    </p>
                  )}
                  <h3 className="sc-product-boxes-tile__box-title">
                    CashOne Personal Loan
                    {props.withToolTip && (
                      <span className="sc-tooltip" tabIndex="0">
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
                          />
                          <path
                            fill="#919191"
                            d="M30.351 27.162h2.639v18.474h-2.639V27.162zm0-10.556h2.639v5.278h-2.639v-5.278z"
                          />
                        </svg>
                        <span className="sc-tooltip__text">
                          Experience the new standard of digital banking with SC Mobile
                        </span>
                      </span>
                    )}
                  </h3>
                  <div className="sc-product-boxes-tile__box-desc">
                    <p>If you are looking for</p>
                    {!props.Lists && (
                      <ul>
                        <li>Flexible tenure of 3, 6, 9, or 12 months</li>
                        <li>Smaller loan amount</li>
                      </ul>
                    )}
                  </div>
                  {props.withButton && (
                    <ul className="sc-inline-buttons">
                      <li className="sc-inline-buttons__item">
                        <a href="#" className="sc-btn sc-btn--medium sc-btn--secondary-blue">
                          Find Out More
                        </a>
                      </li>
                      <li className="sc-inline-buttons__item">
                        <a href="#" className="sc-btn sc-btn--medium">
                          Find Out More
                        </a>
                      </li>
                    </ul>
                  )}
                </div>
                {props.withImage && (
                  <div className="sc-product-boxes-tile__img">
                    <img src={ProductBoxImgOne} alt="image" />
                  </div>
                )}
              </div>
            </div>
            <div className="sc-product-boxes-tile__box">
              <div className="sc-product-boxes-tile__inner">
                {props.withIcon && (
                  <div className="sc-product-boxes-tile__icon">
                    <svg
                      width="56"
                      height="56"
                      viewBox="0 0 56 56"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="28" cy="17.5" r="7" fill="#38D200" />
                      <path
                        d="M28.1126 35C23.308 35 19.1428 37.7656 17.1341 41.8076C16.2739 43.5386 14.1732 44.2445 12.4422 43.3843C10.7112 42.5241 10.0052 40.4234 10.8655 38.6924C14.0112 32.3624 20.5493 28 28.1126 28C35.676 28 42.2141 32.3624 45.3598 38.6924C46.22 40.4234 45.5141 42.5241 43.7831 43.3843C42.0521 44.2445 39.9514 43.5386 39.0912 41.8076C37.0825 37.7656 32.9173 35 28.1126 35Z"
                        fill="#0F7AED"
                      />
                    </svg>
                  </div>
                )}
                <div className="sc-product-boxes-tile__content">
                  {!props.topText && (
                    <p className="sc-product-boxes-tile__box-top">
                      CashOne{' '}
                      {props.withToolTip && (
                        <span className="sc-tooltip" tabIndex="0">
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
                            />
                            <path
                              fill="#919191"
                              d="M30.351 27.162h2.639v18.474h-2.639V27.162zm0-10.556h2.639v5.278h-2.639v-5.278z"
                            />
                          </svg>
                          <span className="sc-tooltip__text">
                            Experience the new standard of digital banking with SC Mobile
                          </span>
                        </span>
                      )}
                    </p>
                  )}
                  <h3 className="sc-product-boxes-tile__box-title">
                    CashOne Personal Loan{' '}
                    {props.withToolTip && (
                      <span className="sc-tooltip" tabIndex="0">
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
                          />
                          <path
                            fill="#919191"
                            d="M30.351 27.162h2.639v18.474h-2.639V27.162zm0-10.556h2.639v5.278h-2.639v-5.278z"
                          />
                        </svg>
                        <span className="sc-tooltip__text">
                          Experience the new standard of digital banking with SC Mobile
                        </span>
                      </span>
                    )}
                  </h3>
                  <div className="sc-product-boxes-tile__box-desc">
                    <p>If you are looking for</p>
                    {!props.Lists && (
                      <ul>
                        <li>Flexible tenure of 3, 6, 9, or 12 months</li>
                        <li>Smaller loan amount</li>
                      </ul>
                    )}
                  </div>
                  {!props.Buttons && (
                    <div className="sc-product-boxes-tile__box-link">
                      <a
                        className="sc-btn-link--arrow"
                        href="https://www.sc.com/sg/save/mca/"
                        title="Find Out More"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Find Out More
                      </a>
                    </div>
                  )}
                </div>
                {props.withImage && (
                  <div className="sc-product-boxes-tile__img">
                    <img src={ProductBoxImgTwo} alt="image" />
                  </div>
                )}
              </div>
            </div>
            <div className="sc-product-boxes-tile__box">
              <div className="sc-product-boxes-tile__inner">
                {props.withIcon && (
                  <div className="sc-product-boxes-tile__icon">
                    <svg
                      width="56"
                      height="56"
                      viewBox="0 0 56 56"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="28" cy="17.5" r="7" fill="#38D200" />
                      <path
                        d="M28.1126 35C23.308 35 19.1428 37.7656 17.1341 41.8076C16.2739 43.5386 14.1732 44.2445 12.4422 43.3843C10.7112 42.5241 10.0052 40.4234 10.8655 38.6924C14.0112 32.3624 20.5493 28 28.1126 28C35.676 28 42.2141 32.3624 45.3598 38.6924C46.22 40.4234 45.5141 42.5241 43.7831 43.3843C42.0521 44.2445 39.9514 43.5386 39.0912 41.8076C37.0825 37.7656 32.9173 35 28.1126 35Z"
                        fill="#0F7AED"
                      />
                    </svg>
                  </div>
                )}
                <div className="sc-product-boxes-tile__content">
                  {!props.topText && <p className="sc-product-boxes-tile__box-top">CashOne</p>}
                  <h3 className="sc-product-boxes-tile__box-title">CashOne Personal Loan</h3>
                  <div className="sc-product-boxes-tile__box-desc">
                    <p>If you are looking for</p>
                    {!props.Lists && (
                      <ul>
                        <li>Flexible tenure of 3, 6, 9, or 12 months</li>
                        <li>Smaller loan amount</li>
                      </ul>
                    )}
                  </div>
                  {!props.Buttons && (
                    <div className="sc-product-boxes-tile__box-link">
                      <a
                        className="sc-btn-link--arrow"
                        href="https://www.sc.com/sg/save/mca/"
                        title="Find Out More"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Find Out More
                      </a>
                    </div>
                  )}
                </div>
                {props.withImage && (
                  <div className="sc-product-boxes-tile__img">
                    <img src={ProductBoxImgThree} alt="image" />
                  </div>
                )}
              </div>
            </div>
            <div className="sc-product-boxes-tile__box">
              <div className="sc-product-boxes-tile__inner">
                {props.withIcon && (
                  <div className="sc-product-boxes-tile__icon">
                    <svg
                      width="56"
                      height="56"
                      viewBox="0 0 56 56"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="28" cy="17.5" r="7" fill="#38D200" />
                      <path
                        d="M28.1126 35C23.308 35 19.1428 37.7656 17.1341 41.8076C16.2739 43.5386 14.1732 44.2445 12.4422 43.3843C10.7112 42.5241 10.0052 40.4234 10.8655 38.6924C14.0112 32.3624 20.5493 28 28.1126 28C35.676 28 42.2141 32.3624 45.3598 38.6924C46.22 40.4234 45.5141 42.5241 43.7831 43.3843C42.0521 44.2445 39.9514 43.5386 39.0912 41.8076C37.0825 37.7656 32.9173 35 28.1126 35Z"
                        fill="#0F7AED"
                      />
                    </svg>
                  </div>
                )}
                <div className="sc-product-boxes-tile__content">
                  {!props.topText && <p className="sc-product-boxes-tile__box-top">CashOne</p>}
                  <h3 className="sc-product-boxes-tile__box-title">CashOne Personal Loan</h3>
                  <div className="sc-product-boxes-tile__box-desc">
                    <p>If you are looking for</p>
                    {!props.Lists && (
                      <ul>
                        <li>Flexible tenure of 3, 6, 9, or 12 months</li>
                        <li>Smaller loan amount</li>
                      </ul>
                    )}
                  </div>
                </div>
                {props.withImage && (
                  <div className="sc-product-boxes-tile__img">
                    <img src={ProductBoxImgFour} alt="image" />
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {props.inlineView && (
          <div className="sc-product-boxes-tile__wrapper">
            <div
              className={`sc-product-boxes-tile__box
              ${props.withBigBox ? 'sc-product-boxes-tile__box--big' : ''}`}
            >
              <div className="sc-product-boxes-tile__inner">
                <div className="sc-product-boxes-tile__inline-box">
                  {props.withIcon && (
                    <div className="sc-product-boxes-tile__icon">
                      <svg
                        width="56"
                        height="56"
                        viewBox="0 0 56 56"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="28" cy="17.5" r="7" fill="#38D200" />
                        <path
                          d="M28.1126 35C23.308 35 19.1428 37.7656 17.1341 41.8076C16.2739 43.5386 14.1732 44.2445 12.4422 43.3843C10.7112 42.5241 10.0052 40.4234 10.8655 38.6924C14.0112 32.3624 20.5493 28 28.1126 28C35.676 28 42.2141 32.3624 45.3598 38.6924C46.22 40.4234 45.5141 42.5241 43.7831 43.3843C42.0521 44.2445 39.9514 43.5386 39.0912 41.8076C37.0825 37.7656 32.9173 35 28.1126 35Z"
                          fill="#0F7AED"
                        />
                      </svg>
                    </div>
                  )}

                  <div className="sc-product-boxes-tile__content">
                    {!props.topText && <p className="sc-product-boxes-tile__box-top">CashOne</p>}
                    <h3 className="sc-product-boxes-tile__box-title">CashOne Personal Loan</h3>
                    <div className="sc-product-boxes-tile__box-desc">
                      <p>
                        Want more rewards? Enjoy FX membership referral rewards by sharing unique
                        promo code with your family and friends.{' '}
                      </p>
                      {!props.Lists && (
                        <ul>
                          <li>Flexible tenure of 3, 6, 9, or 12 months</li>
                          <li>Smaller loan amount</li>
                        </ul>
                      )}
                    </div>
                  </div>
                </div>
                {props.withButton && (
                  <ul className="sc-inline-buttons">
                    <li className="sc-inline-buttons__item">
                      <a href="#" className="sc-btn sc-btn--medium">
                        Find Out More
                      </a>
                    </li>
                  </ul>
                )}
              </div>
            </div>

            <div className="sc-product-boxes-tile__box">
              <div className="sc-product-boxes-tile__inner">
                <div className="sc-product-boxes-tile__inline-box">
                  {props.withIcon && (
                    <div className="sc-product-boxes-tile__icon">
                      <svg
                        width="56"
                        height="56"
                        viewBox="0 0 56 56"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="28" cy="17.5" r="7" fill="#38D200" />
                        <path
                          d="M28.1126 35C23.308 35 19.1428 37.7656 17.1341 41.8076C16.2739 43.5386 14.1732 44.2445 12.4422 43.3843C10.7112 42.5241 10.0052 40.4234 10.8655 38.6924C14.0112 32.3624 20.5493 28 28.1126 28C35.676 28 42.2141 32.3624 45.3598 38.6924C46.22 40.4234 45.5141 42.5241 43.7831 43.3843C42.0521 44.2445 39.9514 43.5386 39.0912 41.8076C37.0825 37.7656 32.9173 35 28.1126 35Z"
                          fill="#0F7AED"
                        />
                      </svg>
                    </div>
                  )}

                  <div className="sc-product-boxes-tile__content">
                    {!props.topText && <p className="sc-product-boxes-tile__box-top">CashOne</p>}
                    <h3 className="sc-product-boxes-tile__box-title">CashOne Personal Loan</h3>
                    <div className="sc-product-boxes-tile__box-desc">
                      <p>Grasp the latest FX movements on-the-go</p>
                      {!props.Lists && (
                        <ul>
                          <li>Flexible tenure of 3, 6, 9, or 12 months</li>
                          <li>Smaller loan amount</li>
                        </ul>
                      )}
                    </div>
                  </div>
                </div>
                {!props.Buttons && (
                  <ul className="sc-inline-buttons">
                    <li className="sc-inline-buttons__item">
                      <a href="#" className="sc-btn sc-btn--medium sc-btn--secondary-blue">
                        Find Out More
                      </a>
                    </li>
                  </ul>
                )}
              </div>
            </div>
            <div className="sc-product-boxes-tile__box">
              <div className="sc-product-boxes-tile__inner">
                <div className="sc-product-boxes-tile__inline-box">
                  {props.withIcon && (
                    <div className="sc-product-boxes-tile__icon">
                      <svg
                        width="56"
                        height="56"
                        viewBox="0 0 56 56"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="28" cy="17.5" r="7" fill="#38D200" />
                        <path
                          d="M28.1126 35C23.308 35 19.1428 37.7656 17.1341 41.8076C16.2739 43.5386 14.1732 44.2445 12.4422 43.3843C10.7112 42.5241 10.0052 40.4234 10.8655 38.6924C14.0112 32.3624 20.5493 28 28.1126 28C35.676 28 42.2141 32.3624 45.3598 38.6924C46.22 40.4234 45.5141 42.5241 43.7831 43.3843C42.0521 44.2445 39.9514 43.5386 39.0912 41.8076C37.0825 37.7656 32.9173 35 28.1126 35Z"
                          fill="#0F7AED"
                        />
                      </svg>
                    </div>
                  )}

                  <div className="sc-product-boxes-tile__content">
                    {!props.topText && <p className="sc-product-boxes-tile__box-top">CashOne</p>}
                    <h3 className="sc-product-boxes-tile__box-title">CashOne Personal Loan</h3>
                    <div className="sc-product-boxes-tile__box-desc">
                      <p>If you are looking for</p>
                      {!props.Lists && (
                        <ul>
                          <li>Flexible tenure of 3, 6, 9, or 12 months</li>
                          <li>Smaller loan amount</li>
                        </ul>
                      )}
                    </div>
                  </div>
                </div>
                {!props.Buttons && (
                  <div className="sc-product-boxes-tile__box-link">
                    <a
                      className="sc-btn-link--arrow"
                      href="https://www.sc.com/sg/save/mca/"
                      title="Find Out More"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Find Out More
                    </a>
                  </div>
                )}
              </div>
            </div>
            <div className="sc-product-boxes-tile__box">
              <div className="sc-product-boxes-tile__inner">
                <div className="sc-product-boxes-tile__inline-box">
                  {props.withIcon && (
                    <div className="sc-product-boxes-tile__icon">
                      <svg
                        width="56"
                        height="56"
                        viewBox="0 0 56 56"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="28" cy="17.5" r="7" fill="#38D200" />
                        <path
                          d="M28.1126 35C23.308 35 19.1428 37.7656 17.1341 41.8076C16.2739 43.5386 14.1732 44.2445 12.4422 43.3843C10.7112 42.5241 10.0052 40.4234 10.8655 38.6924C14.0112 32.3624 20.5493 28 28.1126 28C35.676 28 42.2141 32.3624 45.3598 38.6924C46.22 40.4234 45.5141 42.5241 43.7831 43.3843C42.0521 44.2445 39.9514 43.5386 39.0912 41.8076C37.0825 37.7656 32.9173 35 28.1126 35Z"
                          fill="#0F7AED"
                        />
                      </svg>
                    </div>
                  )}

                  <div className="sc-product-boxes-tile__content">
                    {!props.topText && <p className="sc-product-boxes-tile__box-top">CashOne</p>}
                    <h3 className="sc-product-boxes-tile__box-title">CashOne Personal Loan</h3>
                    <div className="sc-product-boxes-tile__box-desc">
                      <p>If you are looking for</p>
                      {!props.Lists && (
                        <ul>
                          <li>Flexible tenure of 3, 6, 9, or 12 months</li>
                          <li>Smaller loan amount</li>
                        </ul>
                      )}
                    </div>
                  </div>
                </div>
                {!props.Buttons && (
                  <div className="sc-product-boxes-tile__box-link">
                    <a
                      className="sc-btn-link--arrow"
                      href="https://www.sc.com/sg/save/mca/"
                      title="Find Out More"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Find Out More
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* With slider */}
        {props.withSlide && (
          <div
            className="splide"
            data-splide={JSON.stringify({
              trimSpace: 'move',
              pagination: false,
              gap: '16px',
              perPage: props.perPage,
              perMove: '1',
              breakpoints: {
                '1024': {
                  perPage: '3'
                },
                '680': {
                  perPage: '1',
                  fixedWidth: '240px'
                }
              }
            })}
          >
            <div className="splide__track">
              <div className="splide__list sc-product-boxes-tile__wrapper" role="list">
                <div className="sc-product-boxes-tile__box splide__slide">
                  <div className="sc-product-boxes-tile__inner">
                    <div className="sc-product-boxes-tile__icon">
                      <svg
                        width="120"
                        height="120"
                        viewBox="0 0 120 120"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M47.6421 95.0001C46.5925 95.0015 45.5589 94.7432 44.6334 94.2483C43.7079 93.7534 42.9192 93.0372 42.3375 92.1636L23 63.157H79.4777C81.1667 63.157 82.7865 63.828 83.9808 65.0223C85.1751 66.2165 85.846 67.8363 85.846 69.5253C85.846 71.2143 85.1751 72.8342 83.9808 74.0285C82.7865 75.2228 81.1667 75.8937 79.4777 75.8937H46.7984L52.935 85.0965C53.574 86.0553 53.941 87.1695 53.9968 88.3203C54.0526 89.4712 53.7953 90.6156 53.2521 91.6317C52.709 92.6479 51.9004 93.4977 50.9125 94.0906C49.9245 94.6836 48.7943 94.9974 47.6421 94.9987"
                          fill="#38D200"
                        ></path>
                        <path
                          d="M97.7456 56.7883H41.2673C39.5783 56.7883 37.9585 56.1174 36.7642 54.9231C35.5699 53.7288 34.8989 52.1089 34.8989 50.42C34.8989 48.731 35.5699 47.1112 36.7642 45.9169C37.9585 44.7226 39.5783 44.0516 41.2673 44.0516H73.9465L67.8106 34.8474C66.894 33.4421 66.569 31.7317 66.9063 30.0881C67.2437 28.4445 68.216 27.0004 69.612 26.0697C71.008 25.1389 72.715 24.7967 74.3619 25.1174C76.0088 25.4381 77.4627 26.3958 78.4074 27.7824L97.7456 56.7883Z"
                          fill="#0473EA"
                        ></path>
                      </svg>
                    </div>
                    <div className="sc-product-boxes-tile__content">
                      <h3 className="sc-product-boxes-tile__box-title">
                        Home Improvement/ Renovation
                      </h3>
                      <div className="sc-product-boxes-tile__box-desc">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                          tempor incididunt ut labore et dolore magna aliqua. Amet massa vitae
                          tortor condimentum lacinia quis vel eros donec.
                          <a href="#null" title="Read more">
                            Read more
                          </a>
                        </p>
                      </div>
                    </div>
                    {props.withButton && (
                      <ul className="sc-inline-buttons">
                        <li className="sc-inline-buttons__item">
                          <a href="#" className="sc-btn sc-btn--medium sc-btn--secondary-blue">
                            Find Out More
                          </a>
                        </li>
                      </ul>
                    )}
                  </div>
                </div>
                <div className="sc-product-boxes-tile__box splide__slide">
                  <div className="sc-product-boxes-tile__inner">
                    <div className="sc-product-boxes-tile__icon">
                      <svg
                        width="56"
                        height="56"
                        viewBox="0 0 56 56"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="28" cy="17.5" r="7" fill="#38D200" />
                        <path
                          d="M28.1126 35C23.308 35 19.1428 37.7656 17.1341 41.8076C16.2739 43.5386 14.1732 44.2445 12.4422 43.3843C10.7112 42.5241 10.0052 40.4234 10.8655 38.6924C14.0112 32.3624 20.5493 28 28.1126 28C35.676 28 42.2141 32.3624 45.3598 38.6924C46.22 40.4234 45.5141 42.5241 43.7831 43.3843C42.0521 44.2445 39.9514 43.5386 39.0912 41.8076C37.0825 37.7656 32.9173 35 28.1126 35Z"
                          fill="#0F7AED"
                        />
                      </svg>
                    </div>
                    <div className="sc-product-boxes-tile__content">
                      <h3 className="sc-product-boxes-tile__box-title">Buying a car</h3>
                      <div className="sc-product-boxes-tile__box-desc">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                          tempor incididunt ut labore et dolore magna aliqua. Amet massa vitae
                          tortor condimentum lacinia quis vel eros donec.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="sc-product-boxes-tile__box splide__slide">
                  <div className="sc-product-boxes-tile__inner">
                    <div className="sc-product-boxes-tile__icon">
                      <svg
                        width="120"
                        height="120"
                        viewBox="0 0 120 120"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M43.6149 39.0802V42.3585C43.6149 45.1771 43.6407 47.9975 43.6149 50.8162C43.5846 53.9206 44.4623 56.9662 46.14 59.5784C46.2083 59.6873 46.2729 59.7962 46.4243 60.0436C45.6859 60.0436 45.0473 60.0104 44.4215 60.0436C43.9864 60.0567 43.5724 60.2339 43.2625 60.5397C42.9526 60.8454 42.7699 61.2571 42.751 61.6919C42.7363 61.9081 42.7648 62.1249 42.8349 62.3299C42.9051 62.5348 43.0154 62.7237 43.1595 62.8854C43.3035 63.0472 43.4784 63.1786 43.6739 63.2719C43.8693 63.3652 44.0815 63.4186 44.2978 63.4289C47.3481 63.7007 50.4216 63.5273 53.4219 62.9139C56.7748 62.0218 59.7176 60.0008 61.7541 57.1917C63.0739 55.3976 64.2921 53.5314 65.6174 51.7409C66.1277 51.0556 66.8151 50.5224 67.6058 50.1987C68.3965 49.875 69.2605 49.7731 70.1049 49.9039C70.9492 50.0347 71.7418 50.3933 72.3975 50.9411C73.0532 51.4889 73.5471 52.2051 73.826 53.0127C74.0171 53.5602 74.0936 54.141 74.0507 54.7193C74.0079 55.2975 73.8465 55.8608 73.5768 56.374C70.2229 63.0911 66.9114 69.8303 63.4726 76.5049C61.3114 80.6832 57.6201 83.8653 53.169 85.3872C44.7494 88.4981 36.3256 91.5966 27.8974 94.6829C27.4388 94.8952 26.9388 95.0034 26.4334 94.9998C25.928 94.9961 25.4296 94.8807 24.9741 94.6617C24.5186 94.4428 24.1171 94.1258 23.7985 93.7334C23.4799 93.341 23.2521 92.883 23.1314 92.3922C23.0535 92.0253 23.02 91.6504 23.0317 91.2755C23.0188 83.5967 23.0317 75.9179 23.0004 68.2392C22.9818 65.6508 23.6664 63.1059 24.981 60.8761C27.6722 56.2368 30.3536 51.5908 33.0252 46.938C35.1104 43.1847 38.5942 40.4075 42.7178 39.2113C42.9024 39.1559 43.087 39.1079 43.2623 39.0673C43.3852 39.0576 43.5086 39.0576 43.6315 39.0673"
                          fill="#0473EA"
                        ></path>
                        <path
                          d="M75.0035 61.0368C75.4853 60.0622 75.9375 59.1595 76.3768 58.2514C76.9573 57.1476 77.2688 55.9223 77.2859 54.6754C77.3029 53.4284 77.0251 52.1951 76.4751 51.0758C75.925 49.9566 75.1183 48.9832 74.1206 48.235C73.1229 47.4867 71.9625 46.9848 70.7341 46.7702C69.2266 46.4301 67.6521 46.5471 66.2114 47.106C64.7707 47.6649 63.5293 48.6404 62.6455 49.9081C61.3534 51.5897 60.2053 53.3728 58.9796 55.1005C57.4134 57.3782 55.0859 59.0223 52.4158 59.7373C52.0176 59.837 51.5964 59.7829 51.2363 59.5859C49.9308 58.8182 48.845 57.7274 48.0833 56.4184C47.3216 55.1094 46.9098 53.6264 46.8875 52.1121C46.773 46.0761 46.7823 40.0346 46.8764 33.9968C46.9611 31.6779 47.9102 29.4746 49.5371 27.82C51.164 26.1655 53.3511 25.1793 55.6682 25.0555C57.0341 24.9835 58.4037 25.0131 59.7715 25.0112C68.7879 25.0112 77.8037 25.0112 86.8188 25.0112C88.8739 24.9102 90.9044 25.4933 92.5928 26.6693C94.2811 27.8453 95.532 29.5478 96.1496 31.5105C96.4711 32.5886 96.6322 33.708 96.6277 34.833C96.6739 40.3078 96.6609 45.7826 96.6462 51.2611C96.7093 52.5405 96.509 53.8192 96.0576 55.018C95.6062 56.2167 94.9135 57.31 94.0222 58.23C93.1309 59.15 92.0601 59.8771 90.8763 60.3663C89.6924 60.8554 88.4208 61.0962 87.14 61.0737C83.2527 61.1807 79.3597 61.0958 75.4687 61.0958C75.3131 61.0839 75.1585 61.063 75.0054 61.0331"
                          fill="#38D200"
                        ></path>
                        <path
                          d="M89.1506 41.5757H87.2992C85.085 41.5757 83.29 43.3707 83.29 45.5849C83.29 47.7991 85.085 49.5941 87.2992 49.5941H89.1506C91.3648 49.5941 93.1598 47.7991 93.1598 45.5849C93.1598 43.3707 91.3648 41.5757 89.1506 41.5757Z"
                          fill="#D7F6CC"
                        ></path>
                        <path
                          d="M78.7142 33.5908H52.1892C51.338 33.5908 50.6479 34.2809 50.6479 35.1321V35.134C50.6479 35.9852 51.338 36.6752 52.1892 36.6752H78.7142C79.5654 36.6752 80.2555 35.9852 80.2555 35.134V35.1321C80.2555 34.2809 79.5654 33.5908 78.7142 33.5908Z"
                          fill="#D7F6CC"
                        ></path>
                        <path
                          d="M59.0018 38.4988H52.2146C51.3634 38.4988 50.6733 39.1888 50.6733 40.0401V40.0419C50.6733 40.8931 51.3634 41.5832 52.2146 41.5832H59.0018C59.8531 41.5832 60.5431 40.8931 60.5431 40.0419V40.0401C60.5431 39.1888 59.8531 38.4988 59.0018 38.4988Z"
                          fill="#D7F6CC"
                        ></path>
                        <path
                          d="M70.0827 38.4988H62.679C61.8278 38.4988 61.1377 39.1888 61.1377 40.0401V40.0419C61.1377 40.8931 61.8278 41.5832 62.679 41.5832H70.0827C70.9339 41.5832 71.624 40.8931 71.624 40.0419V40.0401C71.624 39.1888 70.9339 38.4988 70.0827 38.4988Z"
                          fill="#D7F6CC"
                        ></path>
                      </svg>
                    </div>
                    <div className="sc-product-boxes-tile__content">
                      <h3 className="sc-product-boxes-tile__box-title">Covering an emergency</h3>
                      <div className="sc-product-boxes-tile__box-desc">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                          tempor incididunt ut labore et dolore magna aliqua. Amet massa vitae
                          tortor condimentum lacinia quis vel eros donec.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="sc-product-boxes-tile__box splide__slide">
                  <div className="sc-product-boxes-tile__inner">
                    <div className="sc-product-boxes-tile__icon">
                      <svg
                        width="120"
                        height="120"
                        viewBox="0 0 120 120"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M43.6149 39.0802V42.3585C43.6149 45.1771 43.6407 47.9975 43.6149 50.8162C43.5846 53.9206 44.4623 56.9662 46.14 59.5784C46.2083 59.6873 46.2729 59.7962 46.4243 60.0436C45.6859 60.0436 45.0473 60.0104 44.4215 60.0436C43.9864 60.0567 43.5724 60.2339 43.2625 60.5397C42.9526 60.8454 42.7699 61.2571 42.751 61.6919C42.7363 61.9081 42.7648 62.1249 42.8349 62.3299C42.9051 62.5348 43.0154 62.7237 43.1595 62.8854C43.3035 63.0472 43.4784 63.1786 43.6739 63.2719C43.8693 63.3652 44.0815 63.4186 44.2978 63.4289C47.3481 63.7007 50.4216 63.5273 53.4219 62.9139C56.7748 62.0218 59.7176 60.0008 61.7541 57.1917C63.0739 55.3976 64.2921 53.5314 65.6174 51.7409C66.1277 51.0556 66.8151 50.5224 67.6058 50.1987C68.3965 49.875 69.2605 49.7731 70.1049 49.9039C70.9492 50.0347 71.7418 50.3933 72.3975 50.9411C73.0532 51.4889 73.5471 52.2051 73.826 53.0127C74.0171 53.5602 74.0936 54.141 74.0507 54.7193C74.0079 55.2975 73.8465 55.8608 73.5768 56.374C70.2229 63.0911 66.9114 69.8303 63.4726 76.5049C61.3114 80.6832 57.6201 83.8653 53.169 85.3872C44.7494 88.4981 36.3256 91.5966 27.8974 94.6829C27.4388 94.8952 26.9388 95.0034 26.4334 94.9998C25.928 94.9961 25.4296 94.8807 24.9741 94.6617C24.5186 94.4428 24.1171 94.1258 23.7985 93.7334C23.4799 93.341 23.2521 92.883 23.1314 92.3922C23.0535 92.0253 23.02 91.6504 23.0317 91.2755C23.0188 83.5967 23.0317 75.9179 23.0004 68.2392C22.9818 65.6508 23.6664 63.1059 24.981 60.8761C27.6722 56.2368 30.3536 51.5908 33.0252 46.938C35.1104 43.1847 38.5942 40.4075 42.7178 39.2113C42.9024 39.1559 43.087 39.1079 43.2623 39.0673C43.3852 39.0576 43.5086 39.0576 43.6315 39.0673"
                          fill="#0473EA"
                        ></path>
                        <path
                          d="M75.0035 61.0368C75.4853 60.0622 75.9375 59.1595 76.3768 58.2514C76.9573 57.1476 77.2688 55.9223 77.2859 54.6754C77.3029 53.4284 77.0251 52.1951 76.4751 51.0758C75.925 49.9566 75.1183 48.9832 74.1206 48.235C73.1229 47.4867 71.9625 46.9848 70.7341 46.7702C69.2266 46.4301 67.6521 46.5471 66.2114 47.106C64.7707 47.6649 63.5293 48.6404 62.6455 49.9081C61.3534 51.5897 60.2053 53.3728 58.9796 55.1005C57.4134 57.3782 55.0859 59.0223 52.4158 59.7373C52.0176 59.837 51.5964 59.7829 51.2363 59.5859C49.9308 58.8182 48.845 57.7274 48.0833 56.4184C47.3216 55.1094 46.9098 53.6264 46.8875 52.1121C46.773 46.0761 46.7823 40.0346 46.8764 33.9968C46.9611 31.6779 47.9102 29.4746 49.5371 27.82C51.164 26.1655 53.3511 25.1793 55.6682 25.0555C57.0341 24.9835 58.4037 25.0131 59.7715 25.0112C68.7879 25.0112 77.8037 25.0112 86.8188 25.0112C88.8739 24.9102 90.9044 25.4933 92.5928 26.6693C94.2811 27.8453 95.532 29.5478 96.1496 31.5105C96.4711 32.5886 96.6322 33.708 96.6277 34.833C96.6739 40.3078 96.6609 45.7826 96.6462 51.2611C96.7093 52.5405 96.509 53.8192 96.0576 55.018C95.6062 56.2167 94.9135 57.31 94.0222 58.23C93.1309 59.15 92.0601 59.8771 90.8763 60.3663C89.6924 60.8554 88.4208 61.0962 87.14 61.0737C83.2527 61.1807 79.3597 61.0958 75.4687 61.0958C75.3131 61.0839 75.1585 61.063 75.0054 61.0331"
                          fill="#38D200"
                        ></path>
                        <path
                          d="M89.1506 41.5757H87.2992C85.085 41.5757 83.29 43.3707 83.29 45.5849C83.29 47.7991 85.085 49.5941 87.2992 49.5941H89.1506C91.3648 49.5941 93.1598 47.7991 93.1598 45.5849C93.1598 43.3707 91.3648 41.5757 89.1506 41.5757Z"
                          fill="#D7F6CC"
                        ></path>
                        <path
                          d="M78.7142 33.5908H52.1892C51.338 33.5908 50.6479 34.2809 50.6479 35.1321V35.134C50.6479 35.9852 51.338 36.6752 52.1892 36.6752H78.7142C79.5654 36.6752 80.2555 35.9852 80.2555 35.134V35.1321C80.2555 34.2809 79.5654 33.5908 78.7142 33.5908Z"
                          fill="#D7F6CC"
                        ></path>
                        <path
                          d="M59.0018 38.4988H52.2146C51.3634 38.4988 50.6733 39.1888 50.6733 40.0401V40.0419C50.6733 40.8931 51.3634 41.5832 52.2146 41.5832H59.0018C59.8531 41.5832 60.5431 40.8931 60.5431 40.0419V40.0401C60.5431 39.1888 59.8531 38.4988 59.0018 38.4988Z"
                          fill="#D7F6CC"
                        ></path>
                        <path
                          d="M70.0827 38.4988H62.679C61.8278 38.4988 61.1377 39.1888 61.1377 40.0401V40.0419C61.1377 40.8931 61.8278 41.5832 62.679 41.5832H70.0827C70.9339 41.5832 71.624 40.8931 71.624 40.0419V40.0401C71.624 39.1888 70.9339 38.4988 70.0827 38.4988Z"
                          fill="#D7F6CC"
                        ></path>
                      </svg>
                    </div>
                    <div className="sc-product-boxes-tile__content">
                      <h3 className="sc-product-boxes-tile__box-title">Debt Consolidation</h3>
                      <div className="sc-product-boxes-tile__box-desc">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                          tempor incididunt ut labore et dolore magna aliqua. Amet massa vitae
                          tortor condimentum lacinia quis vel eros donec.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="sc-product-boxes-tile__box splide__slide">
                  <div className="sc-product-boxes-tile__inner">
                    <div className="sc-product-boxes-tile__icon">
                      <svg
                        width="120"
                        height="120"
                        viewBox="0 0 120 120"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M43.6149 39.0802V42.3585C43.6149 45.1771 43.6407 47.9975 43.6149 50.8162C43.5846 53.9206 44.4623 56.9662 46.14 59.5784C46.2083 59.6873 46.2729 59.7962 46.4243 60.0436C45.6859 60.0436 45.0473 60.0104 44.4215 60.0436C43.9864 60.0567 43.5724 60.2339 43.2625 60.5397C42.9526 60.8454 42.7699 61.2571 42.751 61.6919C42.7363 61.9081 42.7648 62.1249 42.8349 62.3299C42.9051 62.5348 43.0154 62.7237 43.1595 62.8854C43.3035 63.0472 43.4784 63.1786 43.6739 63.2719C43.8693 63.3652 44.0815 63.4186 44.2978 63.4289C47.3481 63.7007 50.4216 63.5273 53.4219 62.9139C56.7748 62.0218 59.7176 60.0008 61.7541 57.1917C63.0739 55.3976 64.2921 53.5314 65.6174 51.7409C66.1277 51.0556 66.8151 50.5224 67.6058 50.1987C68.3965 49.875 69.2605 49.7731 70.1049 49.9039C70.9492 50.0347 71.7418 50.3933 72.3975 50.9411C73.0532 51.4889 73.5471 52.2051 73.826 53.0127C74.0171 53.5602 74.0936 54.141 74.0507 54.7193C74.0079 55.2975 73.8465 55.8608 73.5768 56.374C70.2229 63.0911 66.9114 69.8303 63.4726 76.5049C61.3114 80.6832 57.6201 83.8653 53.169 85.3872C44.7494 88.4981 36.3256 91.5966 27.8974 94.6829C27.4388 94.8952 26.9388 95.0034 26.4334 94.9998C25.928 94.9961 25.4296 94.8807 24.9741 94.6617C24.5186 94.4428 24.1171 94.1258 23.7985 93.7334C23.4799 93.341 23.2521 92.883 23.1314 92.3922C23.0535 92.0253 23.02 91.6504 23.0317 91.2755C23.0188 83.5967 23.0317 75.9179 23.0004 68.2392C22.9818 65.6508 23.6664 63.1059 24.981 60.8761C27.6722 56.2368 30.3536 51.5908 33.0252 46.938C35.1104 43.1847 38.5942 40.4075 42.7178 39.2113C42.9024 39.1559 43.087 39.1079 43.2623 39.0673C43.3852 39.0576 43.5086 39.0576 43.6315 39.0673"
                          fill="#0473EA"
                        ></path>
                        <path
                          d="M75.0035 61.0368C75.4853 60.0622 75.9375 59.1595 76.3768 58.2514C76.9573 57.1476 77.2688 55.9223 77.2859 54.6754C77.3029 53.4284 77.0251 52.1951 76.4751 51.0758C75.925 49.9566 75.1183 48.9832 74.1206 48.235C73.1229 47.4867 71.9625 46.9848 70.7341 46.7702C69.2266 46.4301 67.6521 46.5471 66.2114 47.106C64.7707 47.6649 63.5293 48.6404 62.6455 49.9081C61.3534 51.5897 60.2053 53.3728 58.9796 55.1005C57.4134 57.3782 55.0859 59.0223 52.4158 59.7373C52.0176 59.837 51.5964 59.7829 51.2363 59.5859C49.9308 58.8182 48.845 57.7274 48.0833 56.4184C47.3216 55.1094 46.9098 53.6264 46.8875 52.1121C46.773 46.0761 46.7823 40.0346 46.8764 33.9968C46.9611 31.6779 47.9102 29.4746 49.5371 27.82C51.164 26.1655 53.3511 25.1793 55.6682 25.0555C57.0341 24.9835 58.4037 25.0131 59.7715 25.0112C68.7879 25.0112 77.8037 25.0112 86.8188 25.0112C88.8739 24.9102 90.9044 25.4933 92.5928 26.6693C94.2811 27.8453 95.532 29.5478 96.1496 31.5105C96.4711 32.5886 96.6322 33.708 96.6277 34.833C96.6739 40.3078 96.6609 45.7826 96.6462 51.2611C96.7093 52.5405 96.509 53.8192 96.0576 55.018C95.6062 56.2167 94.9135 57.31 94.0222 58.23C93.1309 59.15 92.0601 59.8771 90.8763 60.3663C89.6924 60.8554 88.4208 61.0962 87.14 61.0737C83.2527 61.1807 79.3597 61.0958 75.4687 61.0958C75.3131 61.0839 75.1585 61.063 75.0054 61.0331"
                          fill="#38D200"
                        ></path>
                        <path
                          d="M89.1506 41.5757H87.2992C85.085 41.5757 83.29 43.3707 83.29 45.5849C83.29 47.7991 85.085 49.5941 87.2992 49.5941H89.1506C91.3648 49.5941 93.1598 47.7991 93.1598 45.5849C93.1598 43.3707 91.3648 41.5757 89.1506 41.5757Z"
                          fill="#D7F6CC"
                        ></path>
                        <path
                          d="M78.7142 33.5908H52.1892C51.338 33.5908 50.6479 34.2809 50.6479 35.1321V35.134C50.6479 35.9852 51.338 36.6752 52.1892 36.6752H78.7142C79.5654 36.6752 80.2555 35.9852 80.2555 35.134V35.1321C80.2555 34.2809 79.5654 33.5908 78.7142 33.5908Z"
                          fill="#D7F6CC"
                        ></path>
                        <path
                          d="M59.0018 38.4988H52.2146C51.3634 38.4988 50.6733 39.1888 50.6733 40.0401V40.0419C50.6733 40.8931 51.3634 41.5832 52.2146 41.5832H59.0018C59.8531 41.5832 60.5431 40.8931 60.5431 40.0419V40.0401C60.5431 39.1888 59.8531 38.4988 59.0018 38.4988Z"
                          fill="#D7F6CC"
                        ></path>
                        <path
                          d="M70.0827 38.4988H62.679C61.8278 38.4988 61.1377 39.1888 61.1377 40.0401V40.0419C61.1377 40.8931 61.8278 41.5832 62.679 41.5832H70.0827C70.9339 41.5832 71.624 40.8931 71.624 40.0419V40.0401C71.624 39.1888 70.9339 38.4988 70.0827 38.4988Z"
                          fill="#D7F6CC"
                        ></path>
                      </svg>
                    </div>
                    <div className="sc-product-boxes-tile__content">
                      <h3 className="sc-product-boxes-tile__box-title">Wedding Expenses</h3>
                      <div className="sc-product-boxes-tile__box-desc">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                          tempor incididunt ut labore et dolore magna aliqua. Amet massa vitae
                          tortor condimentum lacinia quis vel eros donec.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="sc-product-boxes-tile__box splide__slide">
                  <div className="sc-product-boxes-tile__inner">
                    <div className="sc-product-boxes-tile__icon">
                      <svg
                        width="120"
                        height="120"
                        viewBox="0 0 120 120"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M47.6421 95.0001C46.5925 95.0015 45.5589 94.7432 44.6334 94.2483C43.7079 93.7534 42.9192 93.0372 42.3375 92.1636L23 63.157H79.4777C81.1667 63.157 82.7865 63.828 83.9808 65.0223C85.1751 66.2165 85.846 67.8363 85.846 69.5253C85.846 71.2143 85.1751 72.8342 83.9808 74.0285C82.7865 75.2228 81.1667 75.8937 79.4777 75.8937H46.7984L52.935 85.0965C53.574 86.0553 53.941 87.1695 53.9968 88.3203C54.0526 89.4712 53.7953 90.6156 53.2521 91.6317C52.709 92.6479 51.9004 93.4977 50.9125 94.0906C49.9245 94.6836 48.7943 94.9974 47.6421 94.9987"
                          fill="#38D200"
                        ></path>
                        <path
                          d="M97.7456 56.7883H41.2673C39.5783 56.7883 37.9585 56.1174 36.7642 54.9231C35.5699 53.7288 34.8989 52.1089 34.8989 50.42C34.8989 48.731 35.5699 47.1112 36.7642 45.9169C37.9585 44.7226 39.5783 44.0516 41.2673 44.0516H73.9465L67.8106 34.8474C66.894 33.4421 66.569 31.7317 66.9063 30.0881C67.2437 28.4445 68.216 27.0004 69.612 26.0697C71.008 25.1389 72.715 24.7967 74.3619 25.1174C76.0088 25.4381 77.4627 26.3958 78.4074 27.7824L97.7456 56.7883Z"
                          fill="#0473EA"
                        ></path>
                      </svg>
                    </div>
                    <div className="sc-product-boxes-tile__content">
                      <h3 className="sc-product-boxes-tile__box-title">
                        Home Improvement/ Renovation
                      </h3>
                      <div className="sc-product-boxes-tile__box-desc">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                          tempor incididunt ut labore et dolore magna aliqua. Amet massa vitae
                          tortor condimentum lacinia quis vel eros donec.
                          <a href="#null" title="Read more">
                            Read more
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="sc-product-boxes-tile__box splide__slide">
                  <div className="sc-product-boxes-tile__inner">
                    <div className="sc-product-boxes-tile__icon">
                      <svg
                        width="56"
                        height="56"
                        viewBox="0 0 56 56"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="28" cy="17.5" r="7" fill="#38D200" />
                        <path
                          d="M28.1126 35C23.308 35 19.1428 37.7656 17.1341 41.8076C16.2739 43.5386 14.1732 44.2445 12.4422 43.3843C10.7112 42.5241 10.0052 40.4234 10.8655 38.6924C14.0112 32.3624 20.5493 28 28.1126 28C35.676 28 42.2141 32.3624 45.3598 38.6924C46.22 40.4234 45.5141 42.5241 43.7831 43.3843C42.0521 44.2445 39.9514 43.5386 39.0912 41.8076C37.0825 37.7656 32.9173 35 28.1126 35Z"
                          fill="#0F7AED"
                        />
                      </svg>
                    </div>
                    <div className="sc-product-boxes-tile__content">
                      <h3 className="sc-product-boxes-tile__box-title">Buying a car</h3>
                      <div className="sc-product-boxes-tile__box-desc">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                          tempor incididunt ut labore et dolore magna aliqua. Amet massa vitae
                          tortor condimentum lacinia quis vel eros donec.
                        </p>
                      </div>
                    </div>
                    {props.withButton && (
                      <ul className="sc-inline-buttons">
                        <li className="sc-inline-buttons__item">
                          <a href="#" className="sc-btn sc-btn--medium sc-btn--secondary-blue">
                            Find Out More
                          </a>
                        </li>
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {props.Disclaimer && (
          <>
            {props.DisclaimerCheckbox && (
              <>
                <input
                  type="checkbox"
                  id="disclaimer-checkbox"
                  className="sc-product-boxes-tile__disclaimer-input"
                  tabIndex="-1"
                />
                <label
                  className="sc-product-boxes-tile__disclaimer-label"
                  htmlFor="disclaimer-checkbox"
                  tabIndex="0"
                >
                  Click Here to expand text
                </label>
              </>
            )}
            <div className="sc-product-boxes-tile__disclaimer-text">
              <span className="sc-product-boxes-tile__disclaimer-main">
                Wish to speak to us for more information? SMS LOAN CASHINFO NAME to 77222 for us to
                call you.
              </span>
              <ul>
                <li>
                  <sup>1</sup>EIR is calculated taking into consideration the first-year annual fee
                  of S$199 and is based on an average loan amount of S$20,000 for 5 years tenure.
                  Maximum EIR may be up to 16.06% p.a. based on your personal credit profile.
                </li>
                <li>
                  <sup>2</sup>The transfer of funds is subject to approval of the application which
                  must satisfy the Bank’s eligibility criteria.
                </li>
                <li>
                  <sup>3</sup>No late penalties are applicable exclusively for clients who pay their
                  full monthly instalment amount consecutively for 6 months. The minimum payment
                  includes the greater of either S$50 or 1% of the approved monthly principal
                  instalment amount and more. More details in the FAQ and Terms and Conditions
                  below.
                </li>
              </ul>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
