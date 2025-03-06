import React, { useEffect } from 'react';
import { ScDisclaimer } from '../sc-disclaimer/sc-disclaimer.jsx';
import { HeadingInners } from '../../molecules/sc-heading-inner/sc-heading-inner.jsx';
import { RelatedLinks3column } from '../sc-related-links-3-column/sc-related-links-3-column.jsx';
import ScTabMinimal from './sc-tab-minimal.js';

/*
sc-tab-minimal--left-align : To make tabs left align
sc-tab-minimal--rounded : To make tab button style rounded
sc-tab-minimal--dark : To make tab buttons in dark bg color
sc-tab-minimal--blue : To make tab buttons in blue bg color
sc-tab-minimal--dark-round : To make another tab button variation
sc-tab-minimal--underline : To make tab button style as underline
sc-tab-minimal--full-width : Make tab buttons in full width in container
sc-dark-bg : To make module background as dark color
sc-blue-bg : To make module background as blue color
sc-tab-minimal--inside-transparent : To make all inside modules backgound transparent
sc-tab-minimal--rounded-compact : Another tab design
sc-tab-minimal--sticky : To make tab as sticky while scrolling the page
sc-tab-minimal--inline : To make tab and text in same line
*/

export const TabMinimals = props => {
  useEffect(() => {
    ScTabMinimal.init();
  }, []);

  return (
    <div
      className={`sc-tab-minimal ${props.class}
    ${props.left ? 'sc-tab-minimal--left-align' : ''}
    ${props.bgBlue ? 'sc-blue-bg' : ''}
    ${props.bgDark ? 'sc-dark-bg' : ''}
    ${props.tabDark ? 'sc-tab-minimal--dark' : ''}
    ${props.tabBlue ? 'sc-tab-minimal--blue' : ''}
    ${props.tabSticky ? 'sc-tab-minimal--sticky' : ''}`}
      data-query-parameter-tab="queryname"
    >
      {props.bgImg && (
        <img
          className="sc-tab-minimal__image"
          src="https://av.sc.com/sg/content/images/SG_welcome-offer-bg.jpg"
          alt="image"
        />
      )}
      <div className="sc-tab-minimal__head sc-content-wrapper">
        <HeadingInners class="sc-title--center" default={true} icon={true} />
        <div
          className="splide"
          data-splide={`{
            "arrows":${props.arrows ? true : false},
            "trimSpace":"move",
            "pagination":false,
            "autoWidth":true,
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
                  {props.TabIcon && (
                    <img src="https://av.sc.com/sg/content/images/sg-porsche-small.png" />
                  )}
                  <span>For new clients</span>
                </button>
              </div>
              <div className="splide__slide">
                <button
                  data-query-parameter-value="existing-client"
                  tabIndex={0}
                  className="sc-tab-minimal__head-button"
                  data-tab-btn-id="2"
                >
                  {props.TabIcon && (
                    <img src="https://av.sc.com/sg/content/images/sg-token-small.png" />
                  )}
                  <span>For existing clients</span>
                </button>
              </div>
              <div className="splide__slide">
                <button
                  data-query-parameter-value="new-client"
                  tabIndex={0}
                  className="sc-tab-minimal__head-button"
                  data-tab-btn-id="3"
                >
                  For new clients
                </button>
              </div>
              <div className="splide__slide">
                <button
                  data-query-parameter-value="existing-clients"
                  tabIndex={0}
                  className="sc-tab-minimal__head-button"
                  data-tab-btn-id="4"
                >
                  For existing clients
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sc-tab-minimal__content">
        <div
          className="sc-tab-minimal__content-item sc-tab-minimal__content-item--active"
          data-tab-content="1"
        >
          <RelatedLinks3column />
        </div>
        <div className="sc-tab-minimal__content-item" data-tab-content="2">
          <ScDisclaimer />
        </div>
        <div className="sc-tab-minimal__content-item" data-tab-content="3">
          <RelatedLinks3column />
        </div>
        <div className="sc-tab-minimal__content-item" data-tab-content="4">
          <ScDisclaimer />
        </div>
      </div>
    </div>
  );
};
