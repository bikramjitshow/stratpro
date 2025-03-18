import React, { useEffect } from 'react';
import ScModal from './sc-modal.js';

export const ScModalModule = function(props) {
  useEffect(() => {
    ScModal.init();
  }, []);
  return (
    <>
      <a className="sc-btn sc-modal__open" data-modal-source={props.modalid}>
        Open Modal
      </a>

      {/* Modal main classes and close button are coming through JS */}
      {/* data-popup-name: this attribute is used define popupViewed event in adobe analytics */}
      <div
        className="sc-modal__content sc-rte"
        data-modal-id={props.modalid}
        data-size={props.size}
        data-popup-name="pop up name here"
      >
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
                  data-send="close-modal"
                  title="Proceed"
                  rel="noopener"
                  data-context="Modal Disclaimer External Links Proceed Button"
                  href="#"
                >
                  Proceed
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
