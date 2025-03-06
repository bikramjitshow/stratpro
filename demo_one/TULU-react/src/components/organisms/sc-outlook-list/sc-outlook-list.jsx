import React from 'react';
import { HeadingInner } from '../../../../stories/components/molecules/sc-heading-inner/sc-heading-inner.stories.js';

export const OutlookLists = props => {
  return (
    <div className={`sc-outlook-list ${props.class}`}>
      <div className="sc-content-wrapper">
        <HeadingInner class="sc-title--left" default={true} icon={false} />
        <div className="sc-outlook-list__container">
          <div className="sc-outlook-list__content-wrapper">
            <div className="sc-outlook-list__col">
              <div className="sc-cvp">
                <div className="sc-cvp__icon">
                  <svg
                    width="64"
                    height="64"
                    viewBox="0 0 64 64"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M11 22C11 19.7909 12.7909 18 15 18H32C34.2091 18 36 19.7909 36 22C36 24.2091 34.2091 26 32 26H19V37H32C34.2091 37 36 38.7909 36 41C36 43.2091 34.2091 45 32 45H15C12.7909 45 11 43.2091 11 41V22Z"
                      fill="#0F7AED"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M52.8995 41.8283C51.3374 43.3904 48.8047 43.3904 47.2426 41.8283L37.3431 31.9288L47.2426 22.0293C48.8047 20.4672 51.3374 20.4672 52.8995 22.0293C54.4616 23.5914 54.4616 26.1241 52.8995 27.6862L48.6568 31.9288L52.8995 36.1715C54.4616 37.7336 54.4616 40.2662 52.8995 41.8283Z"
                      fill="#38D200"
                    />
                  </svg>
                </div>
                <div className="sc-cvp__col">
                  <div className="sc-cvp__middle">
                    <strong>The bullish case:</strong>
                  </div>
                  <div className="sc-cvp__bottom">
                    <ul>
                      <li>Fed hawkish tilt, safe-haven demand</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="sc-outlook-list__col">
              <div className="sc-cvp">
                <div className="sc-cvp__icon">
                  <svg
                    width="64"
                    height="64"
                    viewBox="0 0 64 64"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M11 22C11 19.7909 12.7909 18 15 18H32C34.2091 18 36 19.7909 36 22C36 24.2091 34.2091 26 32 26H19V37H32C34.2091 37 36 38.7909 36 41C36 43.2091 34.2091 45 32 45H15C12.7909 45 11 43.2091 11 41V22Z"
                      fill="#0F7AED"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M52.8995 41.8283C51.3374 43.3904 48.8047 43.3904 47.2426 41.8283L37.3431 31.9288L47.2426 22.0293C48.8047 20.4672 51.3374 20.4672 52.8995 22.0293C54.4616 23.5914 54.4616 26.1241 52.8995 27.6862L48.6568 31.9288L52.8995 36.1715C54.4616 37.7336 54.4616 40.2662 52.8995 41.8283Z"
                      fill="#38D200"
                    />
                  </svg>
                </div>
                <div className="sc-cvp__col">
                  <div className="sc-cvp__middle">
                    <strong>The bearish case:</strong>
                  </div>
                  <div className="sc-cvp__bottom">
                    <ul>
                      <li>US fundamental downside surprises</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
