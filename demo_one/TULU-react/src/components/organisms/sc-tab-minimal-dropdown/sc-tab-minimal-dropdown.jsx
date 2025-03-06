import React, { useEffect } from 'react';
import { Privileges } from '../sc-privileges/sc-privileges.jsx';
import { RelatedLinks3column } from '../sc-related-links-3-column/sc-related-links-3-column.jsx';
import { Features } from '../sc-feature-box/sc-feature-box.jsx';
import ScTabMinimal from '../sc-tab-minimal/sc-tab-minimal.js';

// Module JS is using from nitro/src/components/organisms/sc-tab-minimal/sc-tab-minimal.js
export const TabMinimalsDropDown = props => {
  useEffect(() => {
    ScTabMinimal.init();
  }, []);

  return (
    <div className={`sc-tab-minimal ${props.class}`}>
      {props.bgImg && (
        <img
          className="sc-tab-minimal__image"
          src="https://av.sc.com/sg/content/images/sg-multi-cuurency-bonusaver.png"
          alt="image"
        />
      )}
      <div className="sc-tab-minimal__head-wrapper sc-content-wrapper">
        <div className="sc-heading-inner">
          <h2 className="sc-title sc-title--inner">Unlock featured products & services to the</h2>
        </div>
        <div className="sc-tab-minimal__head sc-content-wrapper">
          <button className="sc-tab-minimal__head-text">Profesional</button>
          <div
            className="splide"
            data-splide={`{
            "arrows":${props.arrows ? true : false},
            "trimSpace":"move",
            "pagination":false,
            "autoWidth":true,
            "destroy":true,
            "slideFocus":false,
            "perMove": "1"
          }`}
          >
            <div className="splide__track">
              <div className="splide__list">
                <div className="splide__slide">
                  <button
                    tabIndex={0}
                    className="sc-tab-minimal__head-button sc-tab-minimal__head-button--active"
                    data-tab-btn-id="1"
                  >
                    <span>Profesional</span>
                  </button>
                </div>
                <div className="splide__slide">
                  <button tabIndex={0} className="sc-tab-minimal__head-button" data-tab-btn-id="2">
                    <span>Capture Investement Opportunities</span>
                  </button>
                </div>
                <div className="splide__slide">
                  <button tabIndex={0} className="sc-tab-minimal__head-button" data-tab-btn-id="3">
                    Diversify expand my portfolio
                  </button>
                </div>
                <div className="splide__slide">
                  <button tabIndex={0} className="sc-tab-minimal__head-button" data-tab-btn-id="4">
                    Preserve my capital
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sc-tab-minimal__content sc-content-wrapper">
        <div
          className="sc-tab-minimal__content-item sc-tab-minimal__content-item--active"
          data-tab-content="1"
        >
          <RelatedLinks3column />
        </div>
        <div className="sc-tab-minimal__content-item" data-tab-content="2">
          <Privileges />
        </div>
        <div className="sc-tab-minimal__content-item" data-tab-content="3">
          <RelatedLinks3column />
        </div>
        <div className="sc-tab-minimal__content-item" data-tab-content="4">
          <Features title="I want to participate the markets with downside protection" />
        </div>
      </div>
    </div>
  );
};
