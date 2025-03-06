import React, { useEffect } from 'react';
import ScSmartScript from './sc-pdt-apply-with-smart-script.js';

export const SmartScripts = function(props) {
  useEffect(() => {
    // Create a script element
    const script = document.createElement('script');
    script.src = 'https://av.sc.com/assets/global/js/vendor/onelink-smart-script-latest.js';
    script.type = 'text/javascript';
    script.async = true;
    script.onload = () => {
      ScSmartScript.init();
    };
    // Append the script to the document head
    document.head.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <>
      {props.default && (
        <div
          className={`sc-pdt-apply-with-smart-script ${props.class}`}
          data-deep-link="scmobile://web/rtob-webview-oauth?product=1258&campaign=HKPIL23PLSTP10&premium=1258&cardType=3268&affiliation=2132&category=PL"
          data-one-link="https://scb-hk.onelink.me/MatI"
        >
          <div className="sc-content-wrapper">
            <div className="sc-pdt-apply-with-smart-script__item">
              <div className="sc-pdt-apply-with-smart-script__head">
                <a
                  href="#null"
                  title="Back"
                  className="sc-pdt-apply-with-smart-script__back"
                  aria-label="Back"
                />
                <h2 className="sc-pdt-apply-with-smart-script__main-tile">
                  Apply with your choice
                </h2>
              </div>
              <div className="sc-pdt-apply-with-smart-script__bg">
                <picture>
                  <source
                    srcSet="https://preview.standardchartered.com/hk/content/images/SC_New_Client_desktop.png"
                    media="(min-width: 768px)"
                  />
                  <source
                    srcSet="https://preview.standardchartered.com/hk/content/images/SC_New_Client_mobile.png"
                    media="(max-width: 767px)"
                  />
                  <img
                    decoding="async"
                    src="https://preview.standardchartered.com/hk/content/images/SC_New_Client_desktop.png"
                    className="sc-pdt-apply-with-smart-script__bg-img"
                    loading="lazy"
                    alt="Sc new client desktop"
                  />
                </picture>
              </div>
              <div className="sc-pdt-apply-with-smart-script__right">
                <div className="sc-pdt-apply-with-smart-script__right-content">
                  <div className="sc-pdt-apply-with-smart-script__bottom-right">
                    <h2 className="sc-pdt-apply-with-smart-script__tile">New customers</h2>
                    <div className="sc-pdt-apply-with-smart-script__desc sc-rte">
                      <p>Apply through our online forms to get started</p>
                    </div>
                    <ul className="sc-inline-buttons">
                      <li>
                        <a
                          href="#"
                          title="Apply Online"
                          data-context="QR CTA"
                          className="c-button sc-btn sc-btn--small sc-btn--blue"
                        >
                          <span className="only-desktop">Apply Online</span>
                          <span className="only-mobile">Apply Online</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="sc-pdt-apply-with-smart-script__item">
              <div className="sc-pdt-apply-with-smart-script__left">
                <div className="sc-pdt-apply-with-smart-script__left-content">
                  <div className="sc-pdt-apply-with-smart-script__bottom-left">
                    <h2 className="sc-pdt-apply-with-smart-script__tile">Existing customers</h2>
                    <div className="sc-pdt-apply-with-smart-script__desc sc-rte">
                      <p>Login and apply through our SC Mobile app</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="sc-pdt-apply-with-smart-script__right">
                <div className="sc-pdt-apply-with-smart-script__right-content">
                  <div className="sc-pdt-apply-with-smart-script__bottom-right"></div>
                  <div className="sc-pdt-apply-with-smart-script__qr-btn">
                    <div className="sc-pdt-apply-with-smart-script__onelink-qr sc-only-desktop">
                      {/* QR code generate here */}
                      <div
                        id="onelink-qr-1"
                        className="sc-pdt-apply-with-smart-script__onelink-qr-container"
                      ></div>
                    </div>
                    <ul className="buttons">
                      <li className="sc-only-mobile">
                        <a
                          href="#"
                          title="Open SC Mobile"
                          data-context="QR CTA"
                          className="c-button sc-btn sc-btn--small sc-btn--secondary sc-btn--secondary-blue sc-pdt-apply-with-smart-script__onelink-btn"
                        >
                          <span className="only-desktop">Open SC Mobile</span>
                          <span className="only-mobile">Open SC Mobile</span>
                        </a>
                      </li>
                    </ul>
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
