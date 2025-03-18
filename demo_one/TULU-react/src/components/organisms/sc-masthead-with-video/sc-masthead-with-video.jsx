import React, { useEffect } from 'react';
import WistiaConfig from '../../../js/wistia-config';
import IconAppStore from '../../../../static/icons/icon-sc-nw-app-store.js';
import IconGooglePlay from '../../../../static/icons/icon-sc-nw-google-play.js';
import BannerImg from '../../../../static/images/background-banner.png';
import MobileImg from '../../../../static/images/mobile-bg-banner.png';
import Image1 from '../../../../static/images/video-banner.png';
import Image2 from '../../../../static/images/qr-code.png';

export const MastheadWithVideo = () => {
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
    <>
      <div className="sc-masthead-with-video">
        <picture>
          <source srcSet={BannerImg} media="(min-width: 768px)" />
          <source srcSet={MobileImg} media="(max-width: 767px)" />
          <img
            src={BannerImg}
            className="sc-masthead-with-video__bg"
            width="1600"
            height="490"
            alt="Speeding up your wealth accumulation"
          />
        </picture>
        <div className="sc-masthead-with-video__content">
          <div className="sc-masthead-with-video__img-container">
            <a href="#" data-modal-source="video-modal">
              <picture>
                <source srcSet={Image1} width="250" media="(max-width: 767px)" />
                <img src={Image1} alt="Video Image" width="300" />
              </picture>
            </a>
          </div>
          <div className="sc-masthead-with-video__item-container">
            <div className="sc-masthead-with-video__item">
              <div className="sc-masthead-with-video__row">
                <div className="sc-masthead-with-video__inner-desc sc-rte">
                  <p>International Finance Awards</p>
                  <p>International Finance Awards 2022</p>
                  <p>Best Neo Bank - Hong Kong 2022</p>
                </div>
              </div>
              <div className="sc-masthead-with-video__row">
                <div className="sc-masthead-with-video__inner-desc sc-rte">
                  <p>International Finance Awards</p>
                  <p>International Finance Awards 2022</p>
                  <p>Best Neo Bank - Hong Kong 2022</p>
                </div>
              </div>
            </div>
            <div className="sc-masthead-with-video__item">
              <div className="sc-masthead-with-video__row">
                <div className="sc-masthead-with-video__inner-title">
                  Experience the new standard of digital banking with SC Mobile App Now available on
                </div>
              </div>

              <ul className="sc-inline-buttons">
                <li className="sc-inline-buttons__item">
                  <a
                    className="sc-masthead-with-video__app-btn icon-app-store"
                    target="_blank"
                    href=""
                  >
                    <IconAppStore />
                  </a>
                </li>
                <li className="sc-inline-buttons__item">
                  <a
                    className="sc-masthead-with-video__app-btn icon-google-play"
                    target="_blank"
                    href=""
                  >
                    <IconGooglePlay />
                  </a>
                </li>
              </ul>
            </div>
            <div className="sc-masthead-with-video__item">
              <div className="sc-masthead-with-video__row">
                <div className="sc-masthead-with-video__qr-image">
                  <img
                    className="sc-masthead-with-video__qr-img"
                    src={Image2}
                    alt="QR Code"
                    width="100"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sc-modal__content sc-rte sc-video-full" data-modal-id="video-modal">
        <div className="wistia_responsive_padding">
          <div className="wistia_responsive_wrapper">
            <div className="wistia_embed wistia_async_g0hb7x9jzi" data-wistia-id="g0hb7x9jzi"></div>
          </div>
        </div>
      </div>
    </>
  );
};
