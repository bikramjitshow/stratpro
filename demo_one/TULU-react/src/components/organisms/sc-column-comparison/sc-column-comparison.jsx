import React, { useEffect } from 'react';

export const ColumnComparison = props => {
  useEffect(() => {
    var elms = document.getElementsByClassName('splide');
    for (var i = 0; i < elms.length; i++) {
      // eslint-disable-next-line no-undef
      new Splide(elms[i]).mount();
    }
  }, []);
  return (
    <div
      className={`sc-column-comparison ${props.class}
    ${props.BgBlue ? 'sc-blue-bg' : ''}
    ${props.BgDark ? 'sc-dark-bg' : ''}`}
    >
      {props.WithBg && (
        <picture>
          <source
            srcSet="https://av.sc.com/sg/content/images/bcc-column-comparison-bg-desktop.jpg"
            media="(min-width: 768px)"
          />
          <source
            srcSet="https://av.sc.com/sg/content/images/bcc-column-comparison-bg-mobile.jpg"
            media="(max-width: 767px)"
          />
          <img
            src="https://av.sc.com/sg/content/images/bcc-column-comparison-bg-desktop.jpg"
            className="sc-column-comparison__bg"
            width="1600"
            height="490"
            alt="Adult, Female, Person"
          />
        </picture>
      )}

      <div className="sc-content-wrapper">
        <div className="sc-heading-inner sc-title--center">
          <h2 className="sc-title sc-title--bold sc-title--inner">
            Miles Ahead - Accelerate your <span style={{ color: '#38d200' }}>rewards</span> as you
            grow with us.
          </h2>
        </div>
        <div
          className="splide"
          data-splide='
            {
              "arrows": false,
              "trimSpace": "move",
              "pagination": true,
              "gap": "16px",
              "perMove": "1",
              "autoWidth": true,
              "gap":"16px"
          }'
        >
          <div className="splide__track">
            <div className="splide__list">
              <div className="splide__slide">
                <div className="sc-column-comparison__col sc-only-desktop">
                  <div className="sc-column-comparison__col-item sc-column-comparison__col-item-head">
                    <div className="sc-badge sc-badge--quote">
                      <span className="sc-badge__text">
                        Accelerate your rewards as you grow your Banking relationship with us.
                      </span>
                    </div>
                  </div>
                  <div className="sc-column-comparison__col-item">
                    <div className="sc-column-comparison__cvp sc-rte">
                      <p>Miles per S$1 of</p>
                      <p>
                        <strong style={{ color: '#0473EA' }}>Local</strong>
                        spend
                      </p>
                    </div>
                  </div>
                  <div className="sc-column-comparison__col-item">
                    <div className="sc-column-comparison__cvp sc-rte">
                      <p>Miles per S$1 of</p>
                      <p>
                        <strong style={{ color: '#38D200' }}>Overseas</strong>
                        spend
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="splide__slide">
                <div className="sc-column-comparison__col">
                  <div className="sc-column-comparison__col-item sc-column-comparison__col-item-head">
                    <div className="sc-cvp sc-cvp--center">
                      <div className="sc-cvp__col">
                        <div className="sc-cvp__icon">
                          <svg
                            width="50"
                            height="50"
                            viewBox="0 0 50 50"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M16.4062 22.6563C16.4062 20.9304 17.8054 19.5312 19.5312 19.5312H42.1875C43.9134 19.5312 45.3125 20.9304 45.3125 22.6562V35.9375C45.3125 37.6634 43.9134 39.0625 42.1875 39.0625H19.5312C17.8054 39.0625 16.4062 37.6634 16.4062 35.9375V22.6563Z"
                              fill="#38D200"
                            />
                            <path
                              d="M6.57558 15.5374C4.97565 16.1336 4.15044 17.9036 4.72233 19.5124L9.26068 32.2793C9.84309 33.9176 11.6501 34.7645 13.2806 34.1667V21.0945C13.2806 18.5057 15.3792 16.407 17.9681 16.407H33.815L31.4184 9.66513C30.8341 8.02147 29.0173 7.17441 27.3826 7.78356L6.57558 15.5374Z"
                              fill="#0F7AED"
                            />
                          </svg>
                        </div>
                        <p className="sc-cvp__middle">
                          <strong>Beyond Credit</strong>
                        </p>
                        <p className="sc-cvp__bottom">Cardholder</p>
                      </div>
                    </div>
                  </div>
                  <div className="sc-column-comparison__col-item">
                    <div className="sc-column-comparison__value sc-column-comparison__value--center">
                      <strong>1.5</strong>
                    </div>
                    <div className="sc-column-comparison__cvp sc-rte sc-only-mobile">
                      <p>Miles per S$1 of</p>
                      <p>
                        <strong style={{ color: '#0473EA' }}>Local</strong>
                        spend
                      </p>
                    </div>
                  </div>
                  <div className="sc-column-comparison__col-item">
                    <div className="sc-column-comparison__value sc-column-comparison__value--center">
                      <strong>3</strong>
                    </div>
                    <div className="sc-column-comparison__cvp sc-rte sc-only-mobile">
                      <p>Miles per S$1 of</p>
                      <p>
                        <strong style={{ color: '#38D200' }}>Overseas</strong>
                        spend
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="splide__slide">
                <div className="sc-column-comparison__col">
                  <div className="sc-column-comparison__col-item sc-column-comparison__col-item-head">
                    <div className="sc-cvp sc-cvp--center">
                      <div className="sc-cvp__col">
                        <div className="sc-cvp__icon">
                          <svg
                            width="50"
                            height="50"
                            viewBox="0 0 50 50"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M15.625 27.3438V35.9375C15.625 37.6634 17.0241 39.0625 18.75 39.0625H39.0625C40.7884 39.0625 42.1875 37.6634 42.1875 35.9375V15.625C42.1875 13.8991 40.7884 12.5 39.0625 12.5H27.3438V27.3438H15.625Z"
                              fill="#38D200"
                            />
                            <path
                              d="M7.8125 14.0625C7.8125 10.6107 10.6107 7.8125 14.0625 7.8125H24.2187V24.2187H7.8125V14.0625Z"
                              fill="#0F7AED"
                            />
                          </svg>
                        </div>
                        <p className="sc-cvp__middle">
                          <strong>Priority Banking</strong>
                        </p>
                        <p className="sc-cvp__bottom">Beyond Credit Cardholder</p>
                      </div>
                    </div>
                  </div>
                  <div className="sc-column-comparison__col-item">
                    <div className="sc-column-comparison__value sc-column-comparison__value--center">
                      <strong>2</strong>
                    </div>
                    <div className="sc-column-comparison__cvp sc-rte sc-only-mobile">
                      <p>Miles per S$1 of</p>
                      <p>
                        <strong style={{ color: '#0473EA' }}>Local</strong>
                        spend
                      </p>
                    </div>
                  </div>
                  <div className="sc-column-comparison__col-item">
                    <div className="sc-column-comparison__value sc-column-comparison__value--center">
                      <strong>3.5</strong>
                    </div>
                    <div className="sc-column-comparison__cvp sc-rte sc-only-mobile">
                      <p>Miles per S$1 of</p>
                      <p>
                        <strong style={{ color: '#38D200' }}>Overseas</strong>
                        spend
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="splide__slide">
                <div className="sc-column-comparison__col">
                  <div className="sc-column-comparison__col-item sc-column-comparison__col-item-head">
                    <div className="sc-cvp sc-cvp--center">
                      <div className="sc-cvp__col">
                        <div className="sc-cvp__icon">
                          <svg
                            width="50"
                            height="50"
                            viewBox="0 0 50 50"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M16.4389 13.1459C16.8416 11.8334 18.0536 10.9375 19.4265 10.9375H28.2298C29.6026 10.9375 30.8147 11.8334 31.2173 13.1459L34.375 23.4375H13.2812L16.4389 13.1459Z"
                              fill="#38D200"
                            />
                            <path
                              d="M9.40766 28.7709C9.81034 27.4584 11.0224 26.5625 12.3952 26.5625H21.1985C22.5714 26.5625 23.7834 27.4584 24.1861 28.7709L27.3437 39.0625H10.4776C8.37612 39.0625 6.87364 37.0299 7.49005 35.0209L9.40766 28.7709Z"
                              fill="#0F7AED"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M30.0733 39.0609H39.842C41.9445 39.0609 43.4472 37.0264 42.8288 35.0169L40.8726 28.6591C40.4691 27.3479 39.2577 26.4531 37.8858 26.4531H26.7861C26.8172 26.529 26.8456 26.6065 26.8709 26.6855L30.1555 36.9226C30.3934 37.6641 30.3406 38.4118 30.0733 39.0609Z"
                              fill="#0F7AED"
                            />
                          </svg>
                        </div>
                        <p className="sc-cvp__middle">
                          <strong>Priority Private</strong>
                        </p>
                        <p className="sc-cvp__bottom">Beyond Credit Cardholder</p>
                      </div>
                    </div>
                  </div>
                  <div className="sc-column-comparison__col-item">
                    <div className="sc-column-comparison__value sc-column-comparison__value--center">
                      <strong>2.5</strong>
                    </div>
                    <div className="sc-column-comparison__cvp sc-rte sc-only-mobile">
                      <p>Miles per S$1 of</p>
                      <p>
                        <strong style={{ color: '#0473EA' }}>Local</strong>
                        spend
                      </p>
                    </div>
                  </div>
                  <div className="sc-column-comparison__col-item">
                    <div className="sc-column-comparison__value sc-column-comparison__value--center">
                      <strong>8</strong>
                      on dining
                    </div>
                    <div className="sc-column-comparison__value sc-column-comparison__value--center">
                      <strong>4</strong>
                      on dining
                    </div>
                    <div className="sc-column-comparison__cvp sc-rte sc-only-mobile">
                      <p>Miles per S$1 of</p>
                      <p>
                        <strong style={{ color: '#38D200' }}>Overseas</strong>
                        spend
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sc-column-comparison__link">
          <a
            className="sc-btn-link--arrow"
            href="#"
            target="_blank"
            title="Find Out More"
            rel="noopener noreferrer"
          >
            See more on Rewards
          </a>
        </div>
      </div>
    </div>
  );
};
