import React from 'react';

export const ScDisclaimer = function(props) {
  return (
    <>
      {props.default && (
        <div className="sc-disclaimer">
          <div className="sc-content-wrapper">
            <h2 className="sc-title sc-title--underline">Disclaimer</h2>
            <div className="sc-disclaimer__content">
              <div className="sc-disclaimer__content-mask sc-rte">
                <p>
                  This is to inform that by clicking on the hyperlink, you will be leaving
                  <a href="https://www.sc.com/sg/" rel="noopener">
                    www.sc.com/sg
                  </a>
                  and entering a website operated by other parties:
                </p>
                <p>
                  Such links are only provided on our website for the convenience of the Client and
                  Standard Chartered Bank does not control or endorse such websites, and is not
                  responsible for their contents.
                </p>
                <p>
                  The use of such website is also subject to the terms of use and other terms and
                  guidelines, if any, contained within each such website. In the event that any of
                  the terms contained herein conflict with the terms of use or other terms and
                  guidelines contained within any such website, then the terms of use and other
                  terms and guidelines for such website shall prevail.
                </p>
                <p>
                  Thank you for visiting
                  <a href="https://www.sc.com/sg/">www.sc.com/sg</a>
                </p>
                <a
                  className="sc-btn sc-external-link-button"
                  target="_blank"
                  rel="noopener"
                  data-send="close-modal"
                  title="Proceed"
                  data-context="Modal Disclaimer External Links Proceed Button"
                  href="#"
                >
                  Proceed
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
      {props.toggle && (
        <div className="sc-disclaimer sc-disclaimer--toggle">
          <div className="sc-content-wrapper">
            <h2 className="sc-title sc-title--underline">Disclaimer</h2>
            <div className="sc-disclaimer__content">
              <input
                className="sc-disclaimer__toggle"
                type="checkbox"
                name="disclaimer-toggle"
                id="disclaimer-toggle"
                tabIndex="-1"
              />
              {/* remove `sc-disclaimer__content-toggle` class if read more toggle feature is disabled  */}
              <div className="sc-disclaimer__content-mask sc-rte">
                <p>
                  This is to inform that by clicking on the hyperlink, you will be leaving
                  <a href="https://www.sc.com/sg/" rel="noopener">
                    www.sc.com/sg
                  </a>
                  and entering a website operated by other parties:
                </p>
                <p>
                  Such links are only provided on our website for the convenience of the Client and
                  Standard Chartered Bank does not control or endorse such websites, and is not
                  responsible for their contents.
                </p>
                <p>
                  The use of such website is also subject to the terms of use and other terms and
                  guidelines, if any, contained within each such website. In the event that any of
                  the terms contained herein conflict with the terms of use or other terms and
                  guidelines contained within any such website, then the terms of use and other
                  terms and guidelines for such website shall prevail.
                </p>
                <p>
                  Thank you for visiting
                  <a href="https://www.sc.com/sg/">www.sc.com/sg</a>
                </p>
                <a
                  className="sc-btn sc-external-link-button"
                  target="_blank"
                  rel="noopener"
                  data-send="close-modal"
                  title="Proceed"
                  data-context="Modal Disclaimer External Links Proceed Button"
                  href="#"
                >
                  Proceed
                </a>
              </div>
              {/* add `sc-hide` class if readmore toggle feature is disabled */}
              <label
                className="sc-disclaimer__toggle-trigger"
                tabIndex="0"
                htmlFor="disclaimer-toggle"
              >
                <span className="sc-disclaimer__read sc-disclaimer__read-more">Read More</span>
                <span className="sc-disclaimer__read sc-disclaimer__read-less">Read Less</span>
              </label>{' '}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
