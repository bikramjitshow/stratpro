import React, { useEffect } from 'react';
import { HeadingInners } from '../../molecules/sc-heading-inner/sc-heading-inner';
import ImgOne from '../../../../static/images/sg-travel-easy-400px.jpg';
import WistiaConfig from '../../../js/wistia-config';

export const VideoColumns = props => {
  useEffect(() => {
    WistiaConfig.init();
    const script = document.createElement('script');
    script.src = 'https://fast.wistia.com/assets/external/E-v1.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    /*
    sc-video-column--two:  To make two column layout
    sc-video-column--full: To make full width tile (single video tile)
    */
    <div
      className={`sc-video-column ${props.class}
      ${props.BgBlue ? 'sc-blue-bg' : ''}
      ${props.BgDark ? 'sc-dark-bg' : ''}`}
    >
      {props.bgImg && (
        <div className="sc-module-bg__img-wrapper">
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
              className="sc-module-bg__img"
              width="1600"
              height="490"
              alt="Adult, Female, Person"
            />
          </picture>
        </div>
      )}
      <div className="sc-content-wrapper">
        <HeadingInners class="sc-title--center" />
        {props.videoColumn && (
          <div className="sc-video-column__row">
            <div className="sc-video-column__col sc-video-column__col--is-video">
              <div className="sc-video-column__box-wrapper">
                <a href="#" className="sc-video-column__img" data-modal-source="video-modal">
                  <img className="sc-video-column__thumbnail" src={ImgOne} title="image" />
                  <span className="sc-tag sc-tag--green">Research</span>
                  <p className="sc-video-column__img-text">Daily Navigator</p>
                </a>
                <div className="sc-video-column__desc">
                  <h3 className="sc-video-column__title">
                    <span className="sc-video-column__heading">Part 1:</span>
                    Getting Started
                  </h3>
                  <div className="sc-video-column__description sc-rte">
                    How to access the platform and place trade?
                  </div>
                  <div className="sc-video-column__btn-wrapper">
                    <a href="#" className="sc-video-column__btn">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="sc-video-column__col">
              <div className="sc-video-column__box-wrapper">
                <a href="#" className="sc-video-column__img">
                  <img className="sc-video-column__thumbnail" src={ImgOne} title="image" />
                </a>
                <div className="sc-video-column__desc">
                  <div className="sc-video-column__desc-head">
                    <h3 className="sc-video-column__title">
                      <span className="sc-video-column__heading">Part 2:</span>Guide on Market Tools
                    </h3>
                  </div>

                  <div className="sc-video-column__description sc-rte">
                    How to navigate the market tools and information?
                  </div>
                  <div className="sc-video-column__btn-wrapper">
                    <a href="#" className="sc-video-column__btn">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="sc-video-column__col sc-video-column__col--is-video">
              <div className="sc-video-column__box-wrapper">
                <div className="sc-video-column__img">
                  <img className="sc-video-column__thumbnail" src={ImgOne} title="image" />
                </div>
                <div className="sc-video-column__desc">
                  <div className="sc-video-column__desc-head">
                    <h3 className="sc-video-column__title">
                      <span className="sc-video-column__heading">Part 3:</span>Creating Watchlists
                      and Price Alerts
                    </h3>
                  </div>
                  <div className="sc-video-column__description sc-rte">
                    How to add counters to watchlists and set up price alerts?
                  </div>
                  <div className="sc-video-column__btn-wrapper">
                    <a href="#" className="sc-video-column__btn">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {props.videoFull && (
          <div className="sc-video-column__row">
            <div className="sc-video-column__col">
              {/* video */}
              <div className="wistia_responsive_padding">
                <div className="wistia_responsive_wrapper">
                  <div
                    className="wistia_embed wistia_async_g0hb7x9jzi"
                    data-wistia-id="g0hb7x9jzi"
                  ></div>
                </div>
              </div>

              <div className="sc-video-column__desc">
                <h3 className="sc-video-column__title">
                  <span className="sc-video-column__heading">Part 1:</span>
                  Getting Started
                </h3>
                <div className="sc-video-column__description sc-rte">
                  How to access the platform and place trade?
                </div>
                <div className="sc-video-column__btn-wrapper">
                  <a href="#" className="sc-video-column__btn">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="sc-modal__content sc-rte" data-modal-id="video-modal">
        <div className="sc-video-column__content">
          <div className="wistia_responsive_padding">
            <div className="wistia_responsive_wrapper">
              <div
                className="wistia_embed wistia_async_g0hb7x9jzi"
                data-wistia-id="g0hb7x9jzi"
              ></div>
            </div>
          </div>
          <HeadingInners class="sc-title--bold" />
        </div>
      </div>
    </div>
  );
};
