import React, { useEffect } from 'react';
import { Banners } from '../sc-masthead-banner/sc-masthead-banner';
import { ProductInfos } from '../sc-product-info/sc-product-info';
import ScBanner from './sc-masthead-banner-slider.js';

export const BannersSlider = props => {
  useEffect(() => {
    ScBanner.init();
  }, []);

  return (
    <div className={`sc-banner-slider ${props.class}`}>
      <div className="sc-banner-slider__wrapper">
        <div
          className="splide sc-banner-slider__container"
          data-splide={JSON.stringify({
            arrows: props.arrows ? true : false,
            pagination: props.arrows || props.normal ? true : false,
            breakpoints: {
              '1024': {
                pagination: true,
                arrows: props.arrows ? true : false
              },
              '680': {
                arrows: false
              }
            }
          })}
        >
          <div className="splide__track">
            <div className="splide__list">
              <div className="splide__slide">
                <Banners BannerOne={true} />
              </div>
              <div className="splide__slide">
                <Banners BannerOne={true} />
              </div>
            </div>
          </div>
        </div>
        {props.thumbnail && (
          <div
            className="splide sc-banner-slider__thumbnail"
            data-splide='{
                    "arrows":false,
                    "pagination":false,
                    "fixedWidth": "165px"
                    }'
          >
            <div className="splide__track">
              <ul className="splide__list">
                <li className="splide__slide">
                  <div className="sc-banner-slider-thumb" data-banner-thumb="1">
                    <p className="sc-banner-slider-thumb__desc">Simply Cash Credit Card</p>
                    <span className="sc-banner-slider-thumb__text">
                      1.5% cashback on all spends
                    </span>
                  </div>
                </li>
                <li className="splide__slide">
                  <div className="sc-banner-slider-thumb" data-banner-thumb="2">
                    <p className="sc-banner-slider-thumb__desc">Simply Cash Credit Card</p>
                    <span className="sc-banner-slider-thumb__text">
                      1.5% cashback on all spends
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>

      {/*  */}
      {props.block && (
        <div className="sc-banner-przn-block">
          <div
            className="sc-banner-przn-block__col sc-banner-przn-block__col--show"
            data-banner-change-content="1"
          >
            <div className="sc-banner-przn-block__col-wrapper">
              <ProductInfos CvpCol={true} class="" />
            </div>
          </div>
          <div className="sc-banner-przn-block__col" data-banner-change-content="2">
            <div className="sc-banner-przn-block__col-wrapper">
              <ProductInfos FourCol={true} class="" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
