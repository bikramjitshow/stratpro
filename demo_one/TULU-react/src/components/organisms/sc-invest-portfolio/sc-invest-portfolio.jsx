import React, { useEffect } from 'react';
import { HeadingInner } from '../../../../stories/components/molecules/sc-heading-inner/sc-heading-inner.stories';
import { InvestCards } from '../../molecules/sc-invest-card/sc-invest-card';
import ImgPerson from '../../../../static/images/adoteyeanum.png';
import ScTabMinimal from '../sc-tab-minimal/sc-tab-minimal';

export const InvestPortfolios = props => {
  useEffect(() => {
    ScTabMinimal.init();
  }, []);
  useEffect(() => {
    var elms = document.getElementsByClassName('splide');
    for (var i = 0; i < elms.length; i++) {
      // eslint-disable-next-line no-undef
      new Splide(elms[i]).mount();
    }
  }, []);
  return (
    <>
      {props.default && (
        <div className={`sc-invest-portfolio ${props.class}`}>
          <div className="sc-content-wrapper">
            <div className="sc-invest-portfolio__container">
              <HeadingInner class="sc-title--center" titleclass="sc-title--bold" icon={true} />
              <div
                className="splide sc-invest-portfolio__card-wrapper"
                data-splide='{
                "trimSpace": "move",
                "pagination": false,
                "arrows" : false,
                "gap":"16px",
                "perPage": "4",
                "slideFocus": false,
                "breakpoints": {
                "1024": {
                    "perPage": "2",
                    "pagination": true
                  },
                "680": {
                  "perPage": "1"
                  }
                }
              }'
              >
                <div className="splide__track">
                  <div className="splide__list">
                    <div className="sc-portfolio-card splide__slide">
                      <span className="sc-tag sc-tag--bg-gradient">
                        <strong>Where</strong>&nbsp;to invest
                      </span>
                      <h2 className="sc-portfolio-card__title">
                        “ Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        sed do eiusmod tempor incididunt.”
                      </h2>
                      <div className="sc-portfolio-card__container">
                        <div className="sc-portfolio-card__image">
                          <img src={ImgPerson} alt="image-person" />
                        </div>
                        <div className="sc-portfolio-card__content">
                          <strong>Daniel Furer</strong>
                          <br />
                          Global Head of Portfolio Management & Asset
                        </div>
                      </div>
                    </div>
                    <div className="sc-portfolio-card splide__slide">
                      <span className="sc-tag sc-tag--bg-gradient">
                        <strong>Where</strong>&nbsp;to invest
                      </span>
                      <h2 className="sc-portfolio-card__title">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur,
                        perferendis consequatur! Ducimus corrupti in vero qui voluptatem. Maxime
                        maiores odio eveniet eaque accusantium, odit neque enim quis dignissimos,
                        quaerat impedit.
                      </h2>
                      <div className="sc-portfolio-card__container">
                        <div className="sc-portfolio-card__image">
                          <img src={ImgPerson} alt="image-person" />
                        </div>
                        <div className="sc-portfolio-card__content">
                          <strong>Daniel Furer</strong>
                          <br />
                          Global Head of Portfolio Management & Asset
                        </div>
                      </div>
                    </div>
                    <div className="sc-portfolio-card splide__slide">
                      <span className="sc-tag sc-tag--bg-gradient">
                        <strong>Where</strong>&nbsp;to invest
                      </span>
                      <h2 className="sc-portfolio-card__title">
                        “ Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        sed do eiusmod tempor incididunt.”
                      </h2>
                      <div className="sc-portfolio-card__container">
                        <div className="sc-portfolio-card__image">
                          <img src={ImgPerson} alt="image-person" />
                        </div>
                        <div className="sc-portfolio-card__content">
                          <strong>Daniel Furer</strong>
                          <br />
                          Global Head of Portfolio Management & Asset
                        </div>
                      </div>
                    </div>
                    <div className="sc-portfolio-card splide__slide">
                      <span className="sc-tag sc-tag--bg-gradient">
                        <strong>How</strong>&nbsp;to invest
                      </span>
                      <h2 className="sc-portfolio-card__title">
                        “ Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        sed do eiusmod tempor incididunt.”
                      </h2>
                      <div className="sc-portfolio-card__container">
                        <div className="sc-portfolio-card__image">
                          <img src={ImgPerson} alt="image-person" />
                        </div>
                        <div className="sc-portfolio-card__content">
                          <strong>Daniel Furer</strong>
                          <br />
                          Global Head of Portfolio Management & Asset
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {props.cardView && (
        <div className={`sc-invest-portfolio ${props.class}`}>
          <div className="sc-content-wrapper">
            <div className="sc-invest-portfolio__container">
              <HeadingInner class="sc-title--center" titleclass="sc-title--bold" icon={true} />
              <div className="sc-tab-minimal sc-tab-minimal--curve">
                <div className="sc-tab-minimal__head">
                  <div
                    className="splide"
                    data-splide='{
                      "arrows":false,
                      "trimSpace":"move",
                      "pagination":false,
                      "autoWidth":true,
                      "slideFocus":false,
                      "breakpoints":{
                        "680":{
                          "arrows":false
                        }
                      }
                    }'
                  >
                    <div className="splide__track">
                      <div className="splide__list">
                        <div className="splide__slide">
                          <button
                            tabIndex={0}
                            className="sc-tab-minimal__head-button sc-tab-minimal__head-button--active"
                            data-tab-btn-id="1"
                          >
                            Cash+
                          </button>
                        </div>
                        <div className="splide__slide">
                          <button
                            tabIndex={0}
                            className="sc-tab-minimal__head-button"
                            data-tab-btn-id="2"
                          >
                            Income
                          </button>
                        </div>
                        <div className="splide__slide">
                          <button
                            tabIndex={0}
                            className="sc-tab-minimal__head-button"
                            data-tab-btn-id="3"
                          >
                            Balanced
                          </button>
                        </div>
                        <div className="splide__slide">
                          <button
                            tabIndex={0}
                            className="sc-tab-minimal__head-button"
                            data-tab-btn-id="4"
                          >
                            Growth
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="splide sc-tab-minimal__content"
                  data-splide='{
                  "trimSpace": "move",
                  "pagination": true,
                  "arrows" : false,
                  "gap":"16px",
                  "perPage": "4",
                  "slideFocus": false,
                  "mediaQuery": "max",
                  "breakpoints": {
                  "1200": {
                      "perPage": "2",
                      "pagination": true
                    },
                  "681": {
                    "destroy": true
                    }
                  }
                  }'
                >
                  <div className="splide__track">
                    <div className="splide__list">
                      <div
                        className="splide__slide sc-tab-minimal__content-item sc-tab-minimal__content-item--active"
                        data-tab-content="1"
                      >
                        <InvestCards
                          class="sc-invest-card--green"
                          head={true}
                          title="Cash+"
                          percent="5.25"
                          HeadImg="https://av.sc.com/sg/content/images/sc-invest-nitro-cash.png"
                          AssetImg="https://av.sc.com/sg/content/images/sc-invest-nitro-user-asset-allocation.png"
                          PayoutImg="https://av.sc.com/sg/content/images/sc-invest-nitro-user-bar-chart.png"
                          desc="Cash Payouts Monthly*"
                        />
                      </div>
                      <div
                        className="splide__slide sc-tab-minimal__content-item"
                        data-tab-content="2"
                      >
                        <InvestCards
                          class="sc-invest-card--blue"
                          head={true}
                          title="Income"
                          percent="6.25"
                          HeadImg="https://av.sc.com/sg/content/images/sc-invest-nitro-income.png"
                          AssetImg="https://av.sc.com/sg/content/images/sc-invest-nitro-user-asset-allocation.png"
                          PayoutImg="https://av.sc.com/sg/content/images/sc-invest-nitro-user-bar-chart.png"
                          desc="Cash Payouts Monthly*"
                        />
                      </div>
                      <div
                        className="splide__slide sc-tab-minimal__content-item"
                        data-tab-content="3"
                      >
                        <InvestCards
                          class="sc-invest-card--orange"
                          head={true}
                          title="Balanced"
                          percent="8.02"
                          HeadImg="https://av.sc.com/sg/content/images/sc-invest-nitro-balanced.png"
                          AssetImg="https://av.sc.com/sg/content/images/sc-invest-nitro-user-asset-allocation.png"
                          PayoutImg="https://av.sc.com/sg/content/images/sc-invest-nitro-user-bar-chart.png"
                          desc="1-Year Return**"
                        />
                      </div>
                      <div
                        className="splide__slide sc-tab-minimal__content-item"
                        data-tab-content="4"
                      >
                        <InvestCards
                          class="sc-invest-card--orange"
                          head={true}
                          title="Growth"
                          percent="9.92"
                          HeadImg="https://av.sc.com/sg/content/images/sc-invest-nitro-growth.png"
                          AssetImg="https://av.sc.com/sg/content/images/sc-invest-nitro-user-asset-allocation.png"
                          PayoutImg="https://av.sc.com/sg/content/images/sc-invest-nitro-user-bar-chart.png"
                          desc="1-Year Return**"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
