import React, { useEffect } from 'react';
import ImgOne from '../../../../static/images/sg-personal-loan-400x400.jpg';
import ImgTwo from '../../../../static/images/referral-club.jpg';

export const RelatedLinks3column = function() {
  useEffect(() => {
    var elms = document.getElementsByClassName('splide');
    for (var i = 0; i < elms.length; i++) {
      // eslint-disable-next-line no-undef
      new Splide(elms[i]).mount();
    }
  }, []);
  return (
    <div className="sc-related-links sc-related-links-three-col">
      <div className="sc-related-links__wrapper">
        <div className="sc-heading-inner sc-title--center">
          <h2 className="sc-title sc-title--inner">You Maybe Interested In</h2>
          <p className="sc-description">
            Viewing your transactions just got easier as it is now categorised into ‘Deposits’ and
            ‘Credit Cards’ for your easy viewing.
          </p>
        </div>
        <div
          className="splide"
          data-splide='{
          "trimSpace": "move",
          "pagination": false,
          "slideFocus": false,
          "autoWidth": true,
          "perPage": "3",
          "gap": "16px",
          "perMove": "3",
          "breakpoints": {
          "680": {
            "perPage": "1",
            "perMove": "1",
            "fixedWidth": "290px"
          }
          }
          }'
        >
          <div className="splide__track">
            <div className="splide__list sc-related-links__list">
              <div className="splide__slide">
                <div className="sc-card-tile">
                  <div className="sc-card-tile__link">
                    <div className="sc-card-tile__tile-image" aria-hidden="true">
                      <img className="sc-card-tile__tile-img" src={ImgOne} />
                    </div>

                    <div className="sc-card-tile__content sc-card-tile__content--bg">
                      <div className="sc-card-tile__outer">
                        <h3 className="sc-card-tile__title">Personal Loan</h3>
                        <p className="sc-card-tile__desc">
                          Things to Consider when Getting a Personal Loan in Singapore
                        </p>
                      </div>
                      <ul className="sc-inline-buttons">
                        <li className="sc-inline-buttons__item">
                          <a
                            href="#"
                            className="sc-btn sc-btn--black sc-btn--small"
                            title="Learn More"
                          >
                            <span>Learn More</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="splide__slide">
                <div className="sc-card-tile sc-card-tile--bg-img">
                  <div className="sc-card-tile__link">
                    <div
                      className="sc-card-tile__tile-image sc-card-tile__tile-image--bg"
                      aria-hidden="true"
                    >
                      <img className="sc-card-tile__tile-img" src={ImgTwo} />
                    </div>

                    <div className="sc-card-tile__content">
                      <div className="sc-card-tile__outer">
                        <h3 className="sc-card-tile__title">SC Referral Club</h3>
                        <p className="sc-card-tile__desc">
                          Refer now <br />
                          and earn up to <strong> S$200 Cashback</strong>
                        </p>
                      </div>
                      <ul className="sc-inline-buttons">
                        <li className="sc-inline-buttons__item">
                          <a
                            href="#"
                            className="sc-btn sc-btn--black sc-btn--small"
                            title="Learn More"
                          >
                            <span>Refer Now</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="splide__slide">
                <div className="sc-card-tile sc-card-tile--no-img">
                  <div className="sc-card-tile__link">
                    <div className="sc-card-tile__content">
                      <div className="sc-card-tile__outer">
                        <p className="sc-card-tile__title">
                          Find a Better Rate? We will <strong>Match</strong> it.
                        </p>
                      </div>
                      <ul className="sc-inline-buttons">
                        <li className="sc-inline-buttons__item">
                          <a
                            href="#"
                            className="sc-btn sc-btn--black sc-btn--small"
                            title="Learn More"
                          >
                            <span>Learn More</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
