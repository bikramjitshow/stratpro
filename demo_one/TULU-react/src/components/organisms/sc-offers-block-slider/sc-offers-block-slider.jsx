import React, { useEffect } from 'react';
import { HeadingInners } from '../../molecules/sc-heading-inner/sc-heading-inner';

// CSS is using from nitro/src/components/organisms/sc-offers-block/sc-offers-block.scss
export const OfferBlocksSlider = props => {
  useEffect(() => {
    var elms = document.getElementsByClassName('splide');
    for (var i = 0; i < elms.length; i++) {
      // eslint-disable-next-line no-undef
      new Splide(elms[i]).mount();
    }
  }, []);
  return (
    <div className={`sc-offers-block ${props.class}`}>
      <div className="sc-content-wrapper">
        <HeadingInners />
        {props.Default && (
          <div className="sc-offers-block__container">
            <div
              className="sc-offers-block__right splide"
              data-splide='
            {
              "arrows": true,
              "trimSpace": "move",
              "pagination": false,
              "gap": "16px",
              "perMove": "1",
              "perPage": "5",
              "breakpoints": {
                  "1024": {
                      "perPage": "2",
                      "fixedWidth": "250px"
                  }
              }
          }
          '
            >
              <div className="splide__track">
                <div className="splide__list">
                  <div
                    title="Million Reasions to be Happier"
                    className="splide__slide sc-card-tile"
                  >
                    <div className="sc-card-tile__tile-image">
                      <img
                        className="sc-card-tile__tile-img"
                        src="https://av.sc.com/sg/content/images/sg-crafting-a-balanced-portfolio-pintile.jpg"
                        title="image"
                      />
                    </div>
                    <div className="sc-card-tile__content">
                      <div className="sc-card-tile__tags">
                        <span className="sc-tag sc-tag--grey-light">Current Accounts</span>
                      </div>
                      <h3 className="sc-card-tile__title">Million Reasions to be Happier</h3>
                      <p className="sc-card-tile__description">
                        7% off Economy and Business Class bookings
                      </p>
                    </div>
                    <div className="sc-card-tile__link">
                      <ul className="sc-inline-buttons">
                        <li className="sc-inline-buttons__item">
                          <a
                            title="Apply Now"
                            className="sc-btn sc-btn--medium sc-btn--secondary-blue"
                          >
                            <span className="sc-only-desktop">Find Out More</span>
                            <span className="sc-only-mobile">Find Out More</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    title="Million Reasions to be Happier"
                    className="splide__slide sc-card-tile"
                  >
                    <div className="sc-card-tile__tile-image">
                      <img
                        className="sc-card-tile__tile-img"
                        src="https://av.sc.com/sg/content/images/sg-crafting-a-balanced-portfolio-pintile.jpg"
                        title="image"
                      />
                    </div>
                    <div className="sc-card-tile__content">
                      <div className="sc-card-tile__tags">
                        <span className="sc-tag sc-tag--grey-light">Current Accounts</span>
                      </div>
                      <h3 className="sc-card-tile__title">Qatar Airways</h3>
                      <p className="sc-card-tile__description">
                        7% off Economy and Business Class bookings
                      </p>
                    </div>
                    <div className="sc-card-tile__link">
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
                  <div
                    href="#"
                    title="Million Reasions to be Happier"
                    className="splide__slide sc-card-tile"
                  >
                    <div className="sc-card-tile__tile-image">
                      <img
                        className="sc-card-tile__tile-img"
                        src="https://av.sc.com/sg/content/images/sg-crafting-a-balanced-portfolio-pintile.jpg"
                        title="image"
                      />
                    </div>
                    <div className="sc-card-tile__content">
                      <div className="sc-card-tile__tags">
                        <span className="sc-tag sc-tag--grey-light">Current Accounts</span>
                      </div>
                      <h3 className="sc-card-tile__title">Qatar Airways</h3>
                      <p className="sc-card-tile__description">
                        7% off Economy and Business Class bookings
                      </p>
                    </div>
                    <div className="sc-card-tile__link">
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
                  <div
                    title="Million Reasions to be Happier"
                    className="splide__slide sc-card-tile"
                  >
                    <div className="sc-card-tile__tile-image">
                      <img
                        className="sc-card-tile__tile-img"
                        src="https://av.sc.com/sg/content/images/sg-crafting-a-balanced-portfolio-pintile.jpg"
                        title="image"
                      />
                    </div>
                    <div className="sc-card-tile__content">
                      <div className="sc-card-tile__tags">
                        <span className="sc-tag sc-tag--grey-light">Current Accounts</span>
                      </div>
                      <h3 className="sc-card-tile__title">Qatar Airways</h3>
                      <p className="sc-card-tile__description">
                        7% off Economy and Business Class bookings
                      </p>
                    </div>
                    <div className="sc-card-tile__link">
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
                  <div
                    title="Million Reasions to be Happier"
                    className="splide__slide sc-card-tile"
                  >
                    <div className="sc-card-tile__tile-image">
                      <img
                        className="sc-card-tile__tile-img"
                        src="https://av.sc.com/sg/content/images/sg-crafting-a-balanced-portfolio-pintile.jpg"
                        title="image"
                      />
                    </div>
                    <div className="sc-card-tile__content">
                      <div className="sc-card-tile__tags">
                        <span className="sc-tag sc-tag--grey-light">Current Accounts</span>
                      </div>
                      <h3 className="sc-card-tile__title">Qatar Airways</h3>
                      <p className="sc-card-tile__description">
                        7% off Economy and Business Class bookings
                      </p>
                    </div>
                    <div className="sc-card-tile__link">
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
                  <div
                    title="Million Reasions to be Happier"
                    className="splide__slide sc-card-tile"
                  >
                    <div className="sc-card-tile__tile-image">
                      <img
                        className="sc-card-tile__tile-img"
                        src="https://av.sc.com/sg/content/images/sg-crafting-a-balanced-portfolio-pintile.jpg"
                        title="image"
                      />
                    </div>
                    <div className="sc-card-tile__content">
                      <div className="sc-card-tile__tags">
                        <span className="sc-tag sc-tag--grey-light">Current Accounts</span>
                      </div>
                      <h3 className="sc-card-tile__title">Qatar Airways</h3>
                      <p className="sc-card-tile__description">
                        7% off Economy and Business Class bookings
                      </p>
                    </div>
                    <div className="sc-card-tile__link">
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
          </div>
        )}
        {props.LongSlider && (
          <div className="sc-offers-block__container">
            <div
              className="sc-offers-block__right splide"
              data-splide='
            {
              "arrows": true,
              "trimSpace": "move",
              "pagination": false,
              "gap": "16px",
              "perMove": "1",
              "autoWidth": true
          }
          '
            >
              <div className="splide__track">
                <div className="splide__list">
                  <div
                    title="Million Reasions to be Happier"
                    className="splide__slide sc-card-tile"
                  >
                    <div className="sc-card-tile__tile-image">
                      <img
                        className="sc-card-tile__tile-img"
                        src="https://av.sc.com/sg/content/images/sg-crafting-a-balanced-portfolio-pintile.jpg"
                        title="image"
                      />
                    </div>
                    <div className="sc-card-tile__content">
                      <div className="sc-card-tile__tags">
                        <span className="sc-tag sc-tag--grey-light">Current Accounts</span>
                      </div>
                      <h3 className="sc-card-tile__title">Million Reasions to be Happier</h3>
                      <p className="sc-card-tile__description">
                        7% off Economy and Business Class bookings
                      </p>
                    </div>
                    <div className="sc-card-tile__link">
                      <ul className="sc-inline-buttons">
                        <li className="sc-inline-buttons__item">
                          <a
                            title="Apply Now"
                            className="sc-btn sc-btn--medium sc-btn--secondary-blue"
                          >
                            <span className="sc-only-desktop">Find Out More</span>
                            <span className="sc-only-mobile">Find Out More</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    title="Million Reasions to be Happier"
                    className="splide__slide sc-card-tile"
                  >
                    <div className="sc-card-tile__tile-image">
                      <img
                        className="sc-card-tile__tile-img"
                        src="https://av.sc.com/sg/content/images/sg-crafting-a-balanced-portfolio-pintile.jpg"
                        title="image"
                      />
                    </div>
                    <div className="sc-card-tile__content">
                      <div className="sc-card-tile__tags">
                        <span className="sc-tag sc-tag--grey-light">Current Accounts</span>
                      </div>
                      <h3 className="sc-card-tile__title">Qatar Airways</h3>
                      <p className="sc-card-tile__description">
                        7% off Economy and Business Class bookings
                      </p>
                    </div>
                    <div className="sc-card-tile__link">
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
                  <div
                    title="Million Reasions to be Happier"
                    className="splide__slide sc-card-tile"
                  >
                    <div className="sc-card-tile__tile-image">
                      <img
                        className="sc-card-tile__tile-img"
                        src="https://av.sc.com/sg/content/images/sg-crafting-a-balanced-portfolio-pintile.jpg"
                        title="image"
                      />
                    </div>
                    <div className="sc-card-tile__content">
                      <div className="sc-card-tile__tags">
                        <span className="sc-tag sc-tag--grey-light">Current Accounts</span>
                      </div>
                      <h3 className="sc-card-tile__title">Qatar Airways</h3>
                      <p className="sc-card-tile__description">
                        7% off Economy and Business Class bookings
                      </p>
                    </div>
                    <div className="sc-card-tile__link">
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
                  <div
                    title="Million Reasions to be Happier"
                    className="splide__slide sc-card-tile"
                  >
                    <div className="sc-card-tile__tile-image">
                      <img
                        className="sc-card-tile__tile-img"
                        src="https://av.sc.com/sg/content/images/sg-crafting-a-balanced-portfolio-pintile.jpg"
                        title="image"
                      />
                    </div>
                    <div className="sc-card-tile__content">
                      <div className="sc-card-tile__tags">
                        <span className="sc-tag sc-tag--grey-light">Current Accounts</span>
                      </div>
                      <h3 className="sc-card-tile__title">Qatar Airways</h3>
                      <p className="sc-card-tile__description">
                        7% off Economy and Business Class bookings
                      </p>
                    </div>
                    <div className="sc-card-tile__link">
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
                  <div
                    title="Million Reasions to be Happier"
                    className="splide__slide sc-card-tile"
                  >
                    <div className="sc-card-tile__tile-image">
                      <img
                        className="sc-card-tile__tile-img"
                        src="https://av.sc.com/sg/content/images/sg-crafting-a-balanced-portfolio-pintile.jpg"
                        title="image"
                      />
                    </div>
                    <div className="sc-card-tile__content">
                      <div className="sc-card-tile__tags">
                        <span className="sc-tag sc-tag--grey-light">Current Accounts</span>
                      </div>
                      <h3 className="sc-card-tile__title">Qatar Airways</h3>
                      <p className="sc-card-tile__description">
                        7% off Economy and Business Class bookings
                      </p>
                    </div>
                    <div className="sc-card-tile__link">
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
                  <div
                    title="Million Reasions to be Happier"
                    className="splide__slide sc-card-tile"
                  >
                    <div className="sc-card-tile__tile-image">
                      <img
                        className="sc-card-tile__tile-img"
                        src="https://av.sc.com/sg/content/images/sg-crafting-a-balanced-portfolio-pintile.jpg"
                        title="image"
                      />
                    </div>
                    <div className="sc-card-tile__content">
                      <div className="sc-card-tile__tags">
                        <span className="sc-tag sc-tag--grey-light">Current Accounts</span>
                      </div>
                      <h3 className="sc-card-tile__title">Qatar Airways</h3>
                      <p className="sc-card-tile__description">
                        7% off Economy and Business Class bookings
                      </p>
                    </div>
                    <div className="sc-card-tile__link">
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
                  <div
                    title="Million Reasions to be Happier"
                    className="splide__slide sc-card-tile"
                  >
                    <div className="sc-card-tile__tile-image">
                      <img
                        className="sc-card-tile__tile-img"
                        src="https://av.sc.com/sg/content/images/sg-crafting-a-balanced-portfolio-pintile.jpg"
                        title="image"
                      />
                    </div>
                    <div className="sc-card-tile__content">
                      <div className="sc-card-tile__tags">
                        <span className="sc-tag sc-tag--grey-light">Current Accounts</span>
                      </div>
                      <h3 className="sc-card-tile__title">Qatar Airways</h3>
                      <p className="sc-card-tile__description">
                        7% off Economy and Business Class bookings
                      </p>
                    </div>
                    <div className="sc-card-tile__link">
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
          </div>
        )}
        {props.tileSlider && (
          <div className="sc-offers-block__container">
            <div
              className="sc-offers-block__right splide"
              data-splide='{"arrows":false,"trimSpace":"move","pagination":true,"perPage":"4","perMove":"1","gap":"16px","breakpoints":{"1024":{"fixedWidth":"320px","perPage":"2"},"680":{"fixedWidth":"250px","perPage":"1"}}}'
            >
              <div className="splide__track">
                <div className="splide__list">
                  <div
                    title="Million Reasions to be Happier"
                    className="splide__slide sc-card-tile"
                  >
                    <div className="sc-card-tile__tile-image">
                      <img
                        className="sc-card-tile__tile-img"
                        src="https://av.sc.com/sg/content/images/sg-crafting-a-balanced-portfolio-pintile.jpg"
                        title="image"
                      />
                    </div>
                    <div className="sc-card-tile__content">
                      <div className="sc-card-tile__tags">
                        <span className="sc-tag sc-tag--grey-light">Current Accounts</span>
                      </div>
                      <h3 className="sc-card-tile__title">Million Reasions to be Happier</h3>
                      <p className="sc-card-tile__description">
                        7% off Economy and Business Class bookings
                      </p>
                    </div>
                    <div className="sc-card-tile__link">
                      <ul className="sc-inline-buttons">
                        <li className="sc-inline-buttons__item">
                          <a
                            title="Apply Now"
                            className="sc-btn sc-btn--medium sc-btn--secondary-blue"
                          >
                            <span className="sc-only-desktop">Find Out More</span>
                            <span className="sc-only-mobile">Find Out More</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    title="Million Reasions to be Happier"
                    className="splide__slide sc-card-tile"
                  >
                    <div className="sc-card-tile__tile-image">
                      <img
                        className="sc-card-tile__tile-img"
                        src="https://av.sc.com/sg/content/images/sg-crafting-a-balanced-portfolio-pintile.jpg"
                        title="image"
                      />
                    </div>
                    <div className="sc-card-tile__content">
                      <div className="sc-card-tile__tags">
                        <span className="sc-tag sc-tag--grey-light">Current Accounts</span>
                      </div>
                      <h3 className="sc-card-tile__title">Qatar Airways</h3>
                      <p className="sc-card-tile__description">
                        7% off Economy and Business Class bookings
                      </p>
                    </div>
                    <div className="sc-card-tile__link">
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
                  <div
                    title="Million Reasions to be Happier"
                    className="splide__slide sc-card-tile"
                  >
                    <div className="sc-card-tile__tile-image">
                      <img
                        className="sc-card-tile__tile-img"
                        src="https://av.sc.com/sg/content/images/sg-crafting-a-balanced-portfolio-pintile.jpg"
                        title="image"
                      />
                    </div>
                    <div className="sc-card-tile__content">
                      <div className="sc-card-tile__tags">
                        <span className="sc-tag sc-tag--grey-light">Current Accounts</span>
                      </div>
                      <h3 className="sc-card-tile__title">Qatar Airways</h3>
                      <p className="sc-card-tile__description">
                        7% off Economy and Business Class bookings
                      </p>
                    </div>
                    <div className="sc-card-tile__link">
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
                  <div
                    title="Million Reasions to be Happier"
                    className="splide__slide sc-card-tile"
                  >
                    <div className="sc-card-tile__tile-image">
                      <img
                        className="sc-card-tile__tile-img"
                        src="https://av.sc.com/sg/content/images/sg-crafting-a-balanced-portfolio-pintile.jpg"
                        title="image"
                      />
                    </div>
                    <div className="sc-card-tile__content">
                      <div className="sc-card-tile__tags">
                        <span className="sc-tag sc-tag--grey-light">Current Accounts</span>
                      </div>
                      <h3 className="sc-card-tile__title">Qatar Airways</h3>
                      <p className="sc-card-tile__description">
                        7% off Economy and Business Class bookings
                      </p>
                    </div>
                    <div className="sc-card-tile__link">
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
                  <div
                    title="Million Reasions to be Happier"
                    className="splide__slide sc-card-tile"
                  >
                    <div className="sc-card-tile__tile-image">
                      <img
                        className="sc-card-tile__tile-img"
                        src="https://av.sc.com/sg/content/images/sg-crafting-a-balanced-portfolio-pintile.jpg"
                        title="image"
                      />
                    </div>
                    <div className="sc-card-tile__content">
                      <div className="sc-card-tile__tags">
                        <span className="sc-tag sc-tag--grey-light">Current Accounts</span>
                      </div>
                      <h3 className="sc-card-tile__title">Qatar Airways</h3>
                      <p className="sc-card-tile__description">
                        7% off Economy and Business Class bookings
                      </p>
                    </div>
                    <div className="sc-card-tile__link">
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
                  <div
                    title="Million Reasions to be Happier"
                    className="splide__slide sc-card-tile"
                  >
                    <div className="sc-card-tile__tile-image">
                      <img
                        className="sc-card-tile__tile-img"
                        src="https://av.sc.com/sg/content/images/sg-crafting-a-balanced-portfolio-pintile.jpg"
                        title="image"
                      />
                    </div>
                    <div className="sc-card-tile__content">
                      <div className="sc-card-tile__tags">
                        <span className="sc-tag sc-tag--grey-light">Current Accounts</span>
                      </div>
                      <h3 className="sc-card-tile__title">Qatar Airways</h3>
                      <p className="sc-card-tile__description">
                        7% off Economy and Business Class bookings
                      </p>
                    </div>
                    <div className="sc-card-tile__link">
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
          </div>
        )}
      </div>
    </div>
  );
};
