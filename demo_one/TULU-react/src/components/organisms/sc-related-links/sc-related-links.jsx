import React, { useEffect } from 'react';
import ImgOne from '../../../../static/images/sg-travel-easy-400px.jpg';

export const RelatedLinks = function() {
  useEffect(() => {
    var elms = document.getElementsByClassName('splide');
    for (var i = 0; i < elms.length; i++) {
      // eslint-disable-next-line no-undef
      new Splide(elms[i]).mount();
    }
  }, []);

  return (
    <div className="sc-related-links">
      <div className="sc-related-links__wrapper">
        <div className="sc-heading-inner sc-title--center">
          <h2 className="sc-title sc-title--inner">Related Links</h2>
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
          "fixedWidth": "250px",
          "perPage": "4",
          "gap": "16px",
          "perMove": "1",
          "breakpoints": {
          "1024": {
          "perPage": "2"
          },
          "680": {
          "perPage": "1"
          }
         }
         }'
        >
          <div className="splide__track">
            <div className="splide__list sc-related-links__list">
              <div className="splide__slide">
                <a href="#null" title="Related Links">
                  <div className="sc-card-tile ">
                    <div className="sc-card-tile__link">
                      <div
                        className="sc-card-tile__icon icon-link"
                        data-grunticon-embed=""
                        aria-hidden="true"
                      ></div>

                      <div className="sc-card-tile__tile-image" aria-hidden="true">
                        <img className="sc-card-tile__tile-img" src={ImgOne} title="image" />
                      </div>

                      <div className="sc-card-tile__content">
                        <h3 className="sc-card-tile__title`">
                          Supplementary Card Application Form
                        </h3>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="splide__slide">
                <a href="#null" title="Related Links">
                  <div className="sc-card-tile ">
                    <div className="sc-card-tile__link">
                      <div
                        className="sc-card-tile__icon icon-link"
                        data-grunticon-embed=""
                        aria-hidden="true"
                      ></div>

                      <div className="sc-card-tile__tile-image" aria-hidden="true">
                        <img className="sc-card-tile__tile-img" src={ImgOne} title="image" />
                      </div>

                      <div className="sc-card-tile__content">
                        <h3 className="sc-card-tile__title`">
                          Supplementary Card Application Form
                        </h3>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="splide__slide">
                <a href="#null" title="Related Links">
                  <div className="sc-card-tile">
                    <div className="sc-card-tile__link">
                      <div
                        className="sc-card-tile__icon icon-link"
                        data-grunticon-embed=""
                        aria-hidden="true"
                      ></div>

                      <div className="sc-card-tile__tile-image" aria-hidden="true">
                        <img className="sc-card-tile__tile-img" src={ImgOne} title="image" />
                      </div>

                      <div className="sc-card-tile__content">
                        <h3 className="sc-card-tile__title`">
                          Supplementary Card Application Form
                        </h3>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="splide__slide">
                <a href="#null" title="Related Links">
                  <div className="sc-card-tile ">
                    <div className="sc-card-tile__link">
                      <div
                        className="sc-card-tile__icon icon-link"
                        data-grunticon-embed=""
                        aria-hidden="true"
                      ></div>

                      <div className="sc-card-tile__tile-image" aria-hidden="true">
                        <img className="sc-card-tile__tile-img" src={ImgOne} title="image" />
                      </div>

                      <div className="sc-card-tile__content">
                        <h3 className="sc-card-tile__title`">
                          Supplementary Card Application Form
                        </h3>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="splide__slide">
                <a href="#null" title="Related Links">
                  <div className="sc-card-tile ">
                    <div className="sc-card-tile__link">
                      <div
                        className="sc-card-tile__icon icon-link"
                        data-grunticon-embed=""
                        aria-hidden="true"
                      ></div>

                      <div className="sc-card-tile__tile-image" aria-hidden="true">
                        <img className="sc-card-tile__tile-img" src={ImgOne} title="image" />
                      </div>

                      <div className="sc-card-tile__content">
                        <h3 className="sc-card-tile__title`">
                          Supplementary Card Application Form
                        </h3>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="splide__slide">
                <a href="#null" title="Related Links">
                  <div className="sc-card-tile">
                    <div className="sc-card-tile__link">
                      <div
                        className="sc-card-tile__icon icon-link"
                        data-grunticon-embed=""
                        aria-hidden="true"
                      ></div>

                      <div className="sc-card-tile__tile-image" aria-hidden="true">
                        <img className="sc-card-tile__tile-img" src={ImgOne} title="image" />
                      </div>

                      <div className="sc-card-tile__content">
                        <h3 className="sc-card-tile__title`">
                          Supplementary Card Application Form
                        </h3>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
