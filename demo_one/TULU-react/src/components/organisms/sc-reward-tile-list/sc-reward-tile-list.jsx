import React, { useEffect } from 'react';

export const RewardTileLists = () => {
  useEffect(() => {
    var elms = document.getElementsByClassName('splide');
    for (var i = 0; i < elms.length; i++) {
      // eslint-disable-next-line no-undef
      new Splide(elms[i]).mount();
    }
  }, []);

  return (
    <div className="sc-reward-tile-list sc-reward-tile-list--right-arrow">
      <div className="sc-content-wrapper">
        <div className="sc-heading-inner sc-title--center">
          <h2 className="sc-title sc-title--inner">Cashback based on loan amount</h2>
          <p className="sc-description">
            based on
            <strong>2.88% p.a.</strong>
            and 3+ years’ tenure
          </p>
        </div>
        <div className="sc-reward-tile-list__content">
          <div
            className="splide"
            data-splide='{
           "arrows":false,
           "trimSpace":"move",
           "pagination":false,
           "autoWidth":false,
           "slideFocus":false,
           "perPage": "3",
           "perMove": "1",
           "gap": "70px",
           "breakpoints":{
               "1024":{
               "autoWidth":false,
               "arrows":false,
               "perPage": "3"
               },
               "992":{
               "perPage": "2",
               "arrows":true
               },
               "680":{
               "perPage": "1",
               "arrows":true,
               "gap": "16px",
               "pagination":true,
               "fixedWidth": "290px",
               "focus": "center"
               }
           }
           }'
          >
            <div className="splide__track">
              <div className="splide__list">
                <div className="splide__slide">
                  <div className="sc-reward-tile">
                    <div className="sc-reward-tile__item">
                      <div className="sc-reward-tile__half-circle sc-reward-tile__half-circle--green">
                        <div className="sc-reward-tile__half-circle-content">
                          <div className="sc-cvp">
                            <div className="sc-cvp__col">
                              <p className="sc-cvp__top">cashback</p>
                              <p className="sc-cvp__middle">
                                <strong>
                                  {' '}
                                  1<sub>%</sub>{' '}
                                </strong>
                              </p>
                              <p className="sc-cvp__bottom">cashback</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="sc-reward-tile__item-bottom">
                      <div className="sc-reward-tile__bottom-content">
                        <p>
                          S$ <strong>15,000</strong> to S$ <strong>39,999</strong>
                        </p>
                        <p>approved loan can get you</p>
                      </div>
                      <div className="sc-reward-tile__bottom-content sc-reward-tile__bottom-content--larg-txt sc-reward-tile__bottom-content--green">
                        <p>
                          S$ <strong>15,000</strong> to S$ <strong>39,999</strong>
                        </p>
                        <p>approved loan can get you</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="splide__slide">
                  <div className="sc-reward-tile">
                    <div className="sc-reward-tile__item">
                      <div className="sc-reward-tile__half-circle sc-reward-tile__half-circle--green-gradient">
                        <div className="sc-reward-tile__half-circle-content">
                          <div className="sc-cvp">
                            <div className="sc-cvp__col">
                              <p className="sc-cvp__top">cashback</p>
                              <p className="sc-cvp__middle">
                                <strong>
                                  {' '}
                                  1<sub>%</sub>{' '}
                                </strong>
                              </p>
                              <p className="sc-cvp__bottom">cashback</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="sc-reward-tile__item-bottom">
                      <div className="sc-reward-tile__bottom-content">
                        <p>
                          S$ <strong>15,000</strong> to S$ <strong>39,999</strong>
                        </p>
                        <p>approved loan can get you</p>
                      </div>
                      <div className="sc-reward-tile__bottom-content sc-reward-tile__bottom-content--larg-txt sc-reward-tile__bottom-content--green">
                        <p>
                          S$ <strong>15,000</strong> to S$ <strong>39,999</strong>
                        </p>
                        <p>approved loan can get you</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="splide__slide">
                  <div className="sc-reward-tile">
                    <div className="sc-reward-tile__item">
                      <div className="sc-reward-tile__half-circle sc-reward-tile__half-circle--blue">
                        <div className="sc-reward-tile__half-circle-content">
                          <div className="sc-cvp">
                            <div className="sc-cvp__col">
                              <p className="sc-cvp__top">cashback</p>
                              <p className="sc-cvp__middle">
                                <strong>
                                  {' '}
                                  1<sub>%</sub>{' '}
                                </strong>
                              </p>
                              <p className="sc-cvp__bottom">cashback</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="sc-reward-tile__item-bottom">
                      <div className="sc-reward-tile__bottom-content">
                        <p>
                          S$ <strong>15,000</strong> to S$ <strong>39,999</strong>
                        </p>
                        <p>approved loan can get you</p>
                      </div>
                      <div className="sc-reward-tile__bottom-content sc-reward-tile__bottom-content--larg-txt sc-reward-tile__bottom-content--green">
                        <p>
                          S$ <strong>15,000</strong> to S$ <strong>39,999</strong>
                        </p>
                        <p>approved loan can get you</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sc-reward-tile-list__footer">
          <div className="sc-reward-tile-list__note sc-rte">
            <p style={{ fontSize: '20px' }}>
              <strong>Wish to speak to us for more information?</strong>
            </p>
            <p style={{ fontSize: '20px' }}>
              <strong>SMS LOAN CASHINFO NAME to 77222 for us to call you.</strong>
            </p>
            <br />
            <p>
              <sup>1</sup> EIR is calculated taking into consideration the first-year annual fee of
              S$199 and is based on an average loan amount of S$20,000 for 5 years tenure.
            </p>
            <p>
              <sup>2</sup> The transfer of funds is subject to approval of the application which
              must satisfy the Bank’s eligibility criteria.
            </p>
            <p>
              <sup>3</sup> No late penalties are applicable exclusively for clients who pay their
              full monthly instalment amount consecutively for 6 months. The minimum payment
              includes the greater of either S$50 or 1% of the approved monthly principal instalment
              amount and more. Terms and Conditions apply. Refer to FAQ for more details.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
