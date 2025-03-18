import React, { useEffect } from 'react';
import { StepByStepModule } from '../sc-step-by-step/sc-step-by-step.jsx';
import { HeadingInners } from '../../molecules/sc-heading-inner/sc-heading-inner.jsx';
import StepByStep from '../sc-step-by-step/sc-step-by-step';
import ScRightTab from './sc-right-tab';

export const ScRightTabSlider = function(props) {
  useEffect(() => {
    StepByStep.init();
    ScRightTab.init();
  }, []);
  return (
    <div
      className={`sc-right-tab ${props.class}
    ${props.bgBlue ? 'sc-blue-bg' : ''}
    ${props.bgDark ? 'sc-dark-bg' : ''}`}
      data-query-parameter-right-tab="queryname"
    >
      {props.bgImg && (
        <picture>
          <source
            srcSet="https://av.sc.com/sg/content/images/SG_welcome-offer-bg.jpg"
            media="(min-width: 768px)"
          />
          <source
            srcSet="https://av.sc.com/sg/content/images/SG_welcome-offer-bg.jpg"
            media="(max-width: 767px)"
          />
          <img
            src="https://av.sc.com/sg/content/images/SG_welcome-offer-bg.jpg"
            className="sc-module-bg__img"
            loading="lazy"
            alt="Benefits slider bg desktop"
          />
        </picture>
      )}
      <div className="sc-content-wrapper">
        <HeadingInners class="sc-title--center" default={true} icon={true} />
        <div className="sc-right-tab__container">
          <div className="sc-right-tab__wrapper">
            <div
              className="splide sc-right-tab__contents-0"
              role="group"
              id="main-slider"
              data-splide='{"arrows":false,"trimSpace":"move","pagination":false,"breakpoints":{"1024":{"pagination":false}}}'
            >
              <div className="splide__track">
                <div className="splide__list">
                  <div className="splide__slide">
                    <StepByStepModule />
                  </div>
                  <div className="splide__slide">2nd Tab content</div>
                  <div className="splide__slide">3rd Tab content</div>
                </div>
              </div>
            </div>
          </div>
          <div className="sc-right-tab__tab">
            <div
              className="splide sc-right-tab__tabs-0"
              role="group"
              data-splide='{ "arrows":false, "pagination":false }'
            >
              <div className="splide__track">
                <div className="splide__list">
                  <a
                    href="#null"
                    className="splide__slide"
                    title="New to Priority Banking Promotion"
                    data-query-parameter-right-value="new-to-priority"
                  >
                    <span className="sc-right-tab__tab-text">
                      New to Priority Banking Promotion
                    </span>
                  </a>
                  <a
                    href="#null"
                    className="splide__slide"
                    title="Priority Banking Proposition"
                    data-query-parameter-right-value="priority-banking"
                  >
                    <span className="sc-right-tab__tab-text">Priority Banking Proposition</span>
                  </a>
                  <a
                    href="#null"
                    className="splide__slide"
                    title="International Banking"
                    data-query-parameter-right-value="international-banking"
                  >
                    <span className="sc-right-tab__tab-text">International Banking</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
