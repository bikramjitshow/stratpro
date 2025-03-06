import React, { useEffect } from 'react';
import { Badges } from '../../atoms/sc-badge/sc-badge';
import { Button } from '../../atoms/sc-button/sc-button';
import { HeadingInners } from '../../molecules/sc-heading-inner/sc-heading-inner';
export const OfferBlocks = props => {
  useEffect(() => {
    var elms = document.getElementsByClassName('splide');
    for (var i = 0; i < elms.length; i++) {
      // eslint-disable-next-line no-undef
      new Splide(elms[i]).mount();
    }
  }, []);
  return (
    <div
      className={`sc-offers-block ${props.class} ${
        props.reverseOrder ? 'sc-offers-block--reverse' : ''
      } ${props.grayBg ? 'sc-offers-block--gray-bg' : ''}
      ${props.BgImage ? 'sc-module-bg' : ''}`}
    >
      <div className="sc-content-wrapper">
        {props.BgImage && (
          <div className="sc-module-bg__img-wrapper">
            <img
              src="https://preview.standardchartered.com/sg/content/images/FirstSaver_BTL_Banner-one_1600x490-1.jpg"
              className="sc-module-bg__img"
              loading="lazy"
              alt="Firstsaver btl banner one x "
            />
          </div>
        )}
        <HeadingInners class="sc-title--center" titleclass="sc-title--bold" />
        <div className="sc-offers-block__container">
          <HeadingInners class="only-mobile" titleclass="sc-title--with-drop sc-title--bold" />
          {props.HideLeft && (
            <div className="sc-offers-block__left">
              {props.showBadge && <Badges className="" />}
              <div className="sc-offers-block__bg-wrapper">
                <img
                  width="580"
                  height="280"
                  className="sc-offers-block__image"
                  src="https://av.sc.com/my/content/images/my-prb-diningprivileges-p1.jpg"
                  alt="image"
                  loading="lazy"
                />
              </div>
              <div className="sc-offers-block__link">
                <div className="sc-offers-block__content-box">
                  <p className="sc-offers-block__cvp-top">Get</p>
                  <p className="sc-offers-block__cvp-middle">
                    <strong>S$500 </strong>cashback
                  </p>
                  <p className="sc-offers-block__cvp-bottom">
                    when you apply and spend <strong>S$800</strong> on your Card
                  </p>
                  <p className="sc-offers-block__valid">Valid from 13 to 23 May</p>
                </div>
                {props.button && (
                  <div className="sc-offers-block__button">
                    <Button
                      class="sc-btn-link sc-btn-link--white"
                      tag="a"
                      href="#"
                      label="View All Offers"
                    />
                  </div>
                )}
              </div>
            </div>
          )}
          {props.Default && (
            <div className="sc-offers-block__right">
              <div className="sc-card-tile">
                <div className="sc-card-tile__tile-image">
                  {props.Heading && <h2 className="sc-card-tile__heading">WhyQ Singapore</h2>}
                  <img
                    className="sc-card-tile__tile-img"
                    src="https://av.sc.com/sg/content/images/sg-crafting-a-balanced-portfolio-pintile.jpg"
                    title="image"
                  />
                </div>
                <div className="sc-card-tile__content">
                  <h3 className="sc-card-tile__title">Qatar Airways</h3>
                  <p className="sc-card-tile__description">
                    7% off Economy and Business Class bookings
                  </p>
                  <div className="sc-card-tile__link sc-only-mobile">
                    <a
                      className="sc-btn-link--arrow"
                      href="#"
                      target="_blank"
                      title="Find Out More"
                    >
                      Find Out More
                    </a>
                  </div>
                </div>
                <div className="sc-card-tile__link sc-only-desktop">
                  <a className="sc-btn-link--arrow" href="#" target="_blank" title="Find Out More">
                    Find Out More
                  </a>
                </div>
              </div>
              <div className="sc-card-tile">
                <div className="sc-card-tile__tile-image">
                  {props.Heading && <h2 className="sc-card-tile__heading">WhyQ Singapore</h2>}
                  <img
                    className="sc-card-tile__tile-img"
                    src="https://av.sc.com/sg/content/images/sg-crafting-a-balanced-portfolio-pintile.jpg"
                    title="image"
                  />
                </div>
                <div className="sc-card-tile__content">
                  <h3 className="sc-card-tile__title">Qatar Airways</h3>
                  <p className="sc-card-tile__description">
                    7% off Economy and Business Class bookings
                  </p>
                  <div className="sc-card-tile__link sc-only-mobile">
                    <a
                      className="sc-btn-link--arrow"
                      href="#"
                      target="_blank"
                      title="Find Out More"
                    >
                      Find Out More
                    </a>
                  </div>
                </div>
                <div className="sc-card-tile__link sc-only-desktop">
                  <a className="sc-btn-link--arrow" href="#" target="_blank" title="Find Out More">
                    Find Out More
                  </a>
                </div>
              </div>
              <div className="sc-card-tile">
                <div className="sc-card-tile__tile-image">
                  {props.Heading && <h2 className="sc-card-tile__heading">WhyQ Singapore</h2>}
                  <img
                    className="sc-card-tile__tile-img"
                    src="https://av.sc.com/sg/content/images/sg-crafting-a-balanced-portfolio-pintile.jpg"
                    title="image"
                  />
                </div>
                <div className="sc-card-tile__content">
                  <h3 className="sc-card-tile__title">Qatar Airways</h3>
                  <p className="sc-card-tile__description">
                    7% off Economy and Business Class bookings
                  </p>
                  <div className="sc-card-tile__link sc-only-mobile">
                    <a
                      className="sc-btn-link--arrow"
                      href="#"
                      target="_blank"
                      title="Find Out More"
                    >
                      Find Out More
                    </a>
                  </div>
                </div>
                <div className="sc-card-tile__link sc-only-desktop">
                  <a className="sc-btn-link--arrow" href="#" target="_blank" title="Find Out More">
                    Find Out More
                  </a>
                </div>
              </div>
            </div>
          )}
          {/* Offer Tile Wide */}
          {props.PromoTileWide && (
            <div className="sc-offers-block__right sc-offers-block__right--column">
              <div className="sc-offers-block-offer-wide">
                <div className="sc-badge sc-badge--green-gradiant">
                  <span className="sc-badge__text">Travel</span>
                </div>
                <div className="sc-offers-block-offer-wide__container">
                  <div className="sc-offers-block-offer-wide__name">
                    <h2 className="sc-heading-gradient__title">Bonus$aver Account</h2>
                    <img
                      className="sc-offers-block-offer-wide__card-img"
                      src="https://av.sc.com/sg/content/images/sg-simply-cash-cards-webpage-360-X-360-AT.png"
                      alt="image"
                    />
                  </div>
                  <div className="sc-offers-block-offer-wide__cvp-box">
                    <div className="sc-cvp">
                      <div className="sc-cvp__col">
                        <p className="sc-cvp__top">Up to</p>
                        <p className="sc-cvp__middle">
                          <strong>7.88%</strong>
                          p.a
                        </p>
                        <p className="sc-cvp__bottom">Interest on your first S$100,000</p>
                      </div>
                      <div className="sc-cvp__col">
                        <p className="sc-cvp__top">Up to</p>
                        <p className="sc-cvp__middle">
                          <strong>S$7,880</strong>
                        </p>
                        <p className="sc-cvp__bottom">Bonus Interest per year</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="sc-promo-box">
                  <div className="sc-promo-box__icon">
                    <img
                      className="sc-promo-box__icon-img"
                      src="https://av.sc.com/sg/content/images/cashone-calculator-gift.png"
                      alt="image"
                    />
                  </div>
                  <div className="sc-promo-box__text sc-rte">
                    <strong>Congratulations! </strong>
                    <p> You will receive 2.5% cashback - our highest possible reward!</p>
                  </div>
                  <div className="sc-promo-box__btn" aria-label="Click here to show more"></div>
                </div>
              </div>
              <div className="sc-offers-block-offer-wide">
                <div className="sc-badge sc-badge--green-gradiant">
                  <span className="sc-badge__text">Travel</span>
                </div>
                <div className="sc-offers-block-offer-wide__container">
                  <div className="sc-offers-block-offer-wide__name">
                    <h2 className="sc-heading-gradient__title">Bonus$aver Account</h2>
                    <img
                      className="sc-offers-block-offer-wide__card-img"
                      src="https://av.sc.com/sg/content/images/sg-simply-cash-cards-webpage-360-X-360-AT.png"
                      alt="image"
                    />
                  </div>
                  <div className="sc-offers-block-offer-wide__cvp-box">
                    <div className="sc-cvp">
                      <div className="sc-cvp__col">
                        <p className="sc-cvp__top">Up to</p>
                        <p className="sc-cvp__middle">
                          <strong>7.88%</strong>
                          p.a
                        </p>
                        <p className="sc-cvp__bottom">Interest on your first S$100,000</p>
                      </div>
                      <div className="sc-cvp__col">
                        <p className="sc-cvp__top">Up to</p>
                        <p className="sc-cvp__middle">
                          <strong>S$7,880</strong>
                        </p>
                        <p className="sc-cvp__bottom">Bonus Interest per year</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="sc-promo-box">
                  <div className="sc-promo-box__icon">
                    <img
                      className="sc-promo-box__icon-img"
                      src="https://av.sc.com/sg/content/images/cashone-calculator-gift.png"
                      alt="image"
                    />
                  </div>
                  <div className="sc-promo-box__text sc-rte">
                    <strong>Congratulations! </strong>
                    <p> You will receive 2.5% cashback - our highest possible reward!</p>
                  </div>
                  <div className="sc-promo-box__btn" aria-label="Click here to show more"></div>
                </div>
              </div>
            </div>
          )}
          {/* Offer Grid Tile Wide */}
          {props.PromoGridTile && (
            <div
              className="sc-offers-block__right splide"
              data-splide='{
            "destroy": true,
            "arrows": false,
            "trimSpace": "move",
            "pagination": false,
            "gap": "16px",
            "perMove": "1",
            "breakpoints": {
            "1024": {
            "perPage": "2",
            "fixedWidth": "250px",
            "destroy": true
            },
            "991": {
            "perPage": "1",
            "fixedWidth": "290px",
            "destroy": false
            }
            }
            }
            '
            >
              <HeadingInners class="only-desktop" titleclass="sc-title--with-drop sc-title--bold" />
              <div className="splide__track">
                <div className="splide__list">
                  <div className="splide__slide sc-card-tile">
                    <div className="sc-card-tile__content">
                      <h3 className="sc-card-tile__title">Qatar Airways</h3>
                      <p className="sc-card-tile__description">
                        7% off Economy and Business Class bookings
                      </p>
                      <div className="sc-card-tile__link sc-only-mobile">
                        <a
                          className="sc-btn-link--arrow"
                          href="#"
                          target="_blank"
                          title="Find Out More"
                        >
                          Find Out More
                        </a>
                      </div>
                    </div>
                    <div className="sc-card-tile__link sc-only-desktop">
                      <a
                        className="sc-btn-link--arrow"
                        href="#"
                        target="_blank"
                        title="Find Out More"
                      >
                        Find Out More
                      </a>
                    </div>
                  </div>
                  <div className="splide__slide sc-card-tile">
                    <div className="sc-card-tile__content">
                      <h3 className="sc-card-tile__title">Qatar Airways</h3>
                      <p className="sc-card-tile__description">
                        7% off Economy and Business Class bookings
                      </p>
                      <div className="sc-card-tile__link sc-only-mobile">
                        <a
                          className="sc-btn-link--arrow"
                          href="#"
                          target="_blank"
                          title="Find Out More"
                        >
                          Find Out More
                        </a>
                      </div>
                    </div>
                    <div className="sc-card-tile__link sc-only-desktop">
                      <a
                        className="sc-btn-link--arrow"
                        href="#"
                        target="_blank"
                        title="Find Out More"
                      >
                        Find Out More
                      </a>
                    </div>
                  </div>
                  <div className="splide__slide sc-card-tile">
                    <div className="sc-card-tile__content">
                      <h3 className="sc-card-tile__title">Qatar Airways</h3>
                      <p className="sc-card-tile__description">
                        7% off Economy and Business Class bookings
                      </p>
                      <div className="sc-card-tile__link sc-only-mobile">
                        <a
                          className="sc-btn-link--arrow"
                          href="#"
                          target="_blank"
                          title="Find Out More"
                        >
                          Find Out More
                        </a>
                      </div>
                    </div>
                    <div className="sc-card-tile__link sc-only-desktop">
                      <a
                        className="sc-btn-link--arrow"
                        href="#"
                        target="_blank"
                        title="Find Out More"
                      >
                        Find Out More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
