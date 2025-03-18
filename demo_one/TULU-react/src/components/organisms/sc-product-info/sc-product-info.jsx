import React from 'react';
import { GuideCard } from '../../molecules/sc-guide-card/sc-guide-card';
import { TileInfos } from '../../molecules/sc-tile-info/sc-tile-info';
import { Button } from '../../atoms/sc-button/sc-button';
import { StartAccountSteps } from '../../molecules/sc-start-account-step/sc-start-account-step';
import { HeadingGradients } from '../../molecules/sc-heading-gradient/sc-heading-gradient';
import { MilesCards } from '../../molecules/sc-miles-card/sc-miles-card';
import { CardCVPs } from '../../molecules/sc-card-cvp/sc-card-cvp';
/* 
sc-product-info--reverse        : Add this class for make content in reverse mode
sc-product-info--cvp-mbl-column : Add this class for make CVP as column view in mobile viewport
sc-product-info__left--two-col  : If we add two tile in left column then Add this class with sc-product-info__left
sc-product-info__left--three-col  : If we add three tile in left column then Add this class with sc-product-info__left
*/

export const ProductInfos = props => {
  return (
    <>
      {props.CvpCol && (
        <div className={`sc-product-info ${props.class}`}>
          <div className="sc-content-wrapper">
            <div className="sc-product-info__container">
              <div className="sc-product-info__left">
                <img
                  className="sc-product-info__image"
                  src="https://av.sc.com/sg/content/images/plant-window-frame-2.jpg"
                  loading="lazy"
                  alt="image"
                />
              </div>
              <div className="sc-product-info__right">
                <TileInfos class="" />
              </div>
            </div>
          </div>
        </div>
      )}
      {props.Reverse && (
        <div className={`sc-product-info ${props.class}`}>
          <div className="sc-content-wrapper">
            <div className="sc-product-info__container">
              <div className="sc-product-info__left">
                <div className="sc-product-info__content-box">
                  <p className="sc-product-info__title">
                    Earn up to S$188 cashback for your FX conversions
                  </p>
                  <ul className="sc-inline-buttons">
                    <li className="sc-inline-buttons__item">
                      <Button tag="a" href="#" label="Starts Now" class="sc-btn--medium" />
                    </li>
                  </ul>
                </div>

                <img
                  className="sc-product-info__image"
                  src="https://av.sc.com/sg/content/images/plant-window-frame-2.jpg"
                  loading="lazy"
                  alt="image"
                />
              </div>
              <div className="sc-product-info__right">
                <TileInfos class="" />
              </div>
            </div>
          </div>
        </div>
      )}
      {props.FourCol && (
        <div className="sc-product-info">
          <div className="sc-content-wrapper">
            <div className={`sc-product-info__container ${props.class}`}>
              <GuideCard
                class="sc-guide-card--gradient"
                title="Wealth Solutions"
                main="Maximise the potential of your wealth"
                desc="with our solutions and insights"
                button={true}
              />
              <GuideCard
                class="sc-guide-card--gradient"
                title="Wealth Solutions"
                main="Maximise the potential of your wealth"
                desc="with our solutions and insights"
                button={true}
              />
              <GuideCard
                class="sc-guide-card--gradient"
                title="Wealth Solutions"
                main="Maximise the potential of your wealth"
                desc="with our solutions and insights"
                button={true}
              />
              <GuideCard
                class="sc-guide-card--gradient"
                title="Wealth Solutions"
                main="Maximise the potential of your wealth"
                desc="with our solutions and insights"
                button={true}
              />
            </div>
          </div>
        </div>
      )}
      {props.TwoCol && (
        <div className="sc-product-info">
          <div className="sc-content-wrapper">
            <div className="sc-product-info__container">
              <div className={`sc-product-info__left ${props.class}`}>
                <GuideCard
                  class="sc-guide-card--gradient"
                  title="Wealth Solutions"
                  main="Maximise the potential of your wealth"
                  desc="with our solutions and insights"
                  button={true}
                />
                <GuideCard
                  class="sc-guide-card--gradient"
                  title="Wealth Solutions"
                  main="Maximise the potential of your wealth"
                  desc="with our solutions and insights"
                  button={true}
                />
              </div>
              <div className="sc-product-info__right">
                <TileInfos class="" />
              </div>
            </div>
          </div>
        </div>
      )}
      {props.ThreeCol && (
        <div className="sc-product-info">
          <div className="sc-content-wrapper">
            <div className="sc-product-info__container">
              <div className={`sc-product-info__left ${props.class}`}>
                <StartAccountSteps class="" text="Step 1" desc="Click or Scan QR code" />
                <StartAccountSteps
                  class=""
                  text="Step 2"
                  desc="Verify through MyInfo"
                  subdesc=" (~2min)"
                />
                <StartAccountSteps
                  class=""
                  text="Step 3"
                  desc="Upload document required and submit"
                  subdesc=" (~4min) "
                  tooltip={true}
                />
              </div>
              <div className="sc-product-info__right">
                <HeadingGradients
                  class=""
                  icon={false}
                  title="Easily Fund and Start your Account"
                />
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
                    <p className="sc-cvp__top">Resume your Application now and get</p>
                    <p className="sc-cvp__middle">
                      <strong>S$ 200</strong>
                    </p>
                    <p className="sc-cvp__bottom">cashback within 24 hours</p>
                  </div>
                </div>
                <div className="sc-start-account__button">
                  <Button tag="a" href="#" label="Resume Application" class="sc-btn--medium" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {props.JourneyCard && (
        <div className="sc-product-info">
          <div className="sc-content-wrapper">
            <div className="sc-product-info__container">
              <div className={`sc-product-info__left ${props.class}`}>
                <MilesCards class="" image={true} badge={true} />
                <MilesCards class="" image={true} badge={true} />
              </div>
              <div className="sc-product-info__right">
                <div className="sc-tile-info">
                  <div className="sc-tile-info__top">
                    <HeadingGradients
                      class=""
                      icon={true}
                      title="SC Journey Credit Card"
                      desc="Earn Anything But Average Miles with the new"
                    />
                    <div className="sc-only-desktop">
                      <a href="#" className="sc-btn-link sc-btn-link--blue" title="Show More Loans">
                        <div className="sc-btn-link__icon">
                          <svg
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            width="64"
                            height="64"
                            viewBox="0 0 64 64"
                          >
                            <path
                              d="M10.667 10.143 C 9.967 10.277,8.550 11.019,8.029 11.522 C 7.314 12.214,6.854 12.822,6.559 13.465 C 5.960 14.774,5.977 14.291,5.977 30.027 C 5.977 45.981,5.950 45.298,6.633 46.697 C 7.109 47.671,8.329 48.891,9.303 49.367 C 10.664 50.031,10.515 50.023,20.911 50.025 L 30.355 50.027 30.825 49.787 C 31.083 49.655,31.441 49.362,31.620 49.137 C 31.912 48.770,31.947 48.650,31.947 48.000 C 31.947 47.346,31.913 47.232,31.615 46.863 C 31.433 46.638,31.121 46.357,30.922 46.240 C 30.569 46.032,30.318 46.025,20.960 45.973 C 10.589 45.916,11.048 45.942,10.546 45.371 C 10.008 44.758,10.027 45.093,10.027 36.272 L 10.027 28.053 18.928 28.053 C 25.037 28.053,28.002 28.016,28.381 27.935 C 29.042 27.793,29.689 27.258,29.873 26.701 C 30.184 25.759,29.734 24.640,28.880 24.226 C 28.415 24.001,28.370 24.000,19.220 24.000 L 10.027 24.000 10.027 19.783 C 10.027 16.483,10.058 15.492,10.171 15.222 C 10.344 14.807,10.985 14.221,11.389 14.108 C 11.769 14.002,52.231 14.002,52.611 14.108 C 52.942 14.201,53.598 14.743,53.789 15.081 C 53.864 15.214,53.939 15.984,53.972 16.960 C 54.023 18.450,54.053 18.653,54.277 19.014 C 55.053 20.267,56.945 20.267,57.724 19.014 C 57.946 18.657,57.977 18.459,58.011 17.198 C 58.081 14.502,57.645 13.219,56.142 11.705 C 55.433 10.991,54.163 10.303,53.239 10.133 C 52.518 10.000,11.358 10.009,10.667 10.143 M43.413 22.070 C 42.675 22.226,42.055 22.652,41.509 23.377 C 41.436 23.475,40.832 24.977,40.168 26.715 C 39.504 28.453,38.931 29.904,38.896 29.940 C 38.861 29.975,37.546 30.091,35.976 30.198 C 32.212 30.453,32.137 30.463,31.487 30.835 C 30.611 31.335,29.973 32.433,29.973 33.440 C 29.973 33.997,30.272 34.825,30.640 35.285 C 30.831 35.524,32.075 36.657,33.405 37.802 L 35.823 39.886 35.677 40.503 C 35.596 40.842,35.259 42.224,34.928 43.573 C 34.409 45.684,34.332 46.131,34.372 46.773 C 34.449 47.997,35.025 48.862,36.123 49.403 C 36.971 49.820,37.859 49.863,38.621 49.523 C 38.881 49.407,40.170 48.601,41.485 47.731 C 42.801 46.862,43.933 46.151,44.001 46.151 C 44.069 46.151,45.266 46.905,46.661 47.826 C 49.897 49.963,49.894 49.962,50.827 49.956 C 51.715 49.950,52.206 49.758,52.848 49.166 C 53.432 48.628,53.782 47.836,53.784 47.047 C 53.785 46.578,52.598 41.340,52.206 40.088 C 52.165 39.956,52.796 39.352,54.582 37.811 C 57.261 35.500,57.424 35.338,57.709 34.720 C 58.365 33.297,57.840 31.593,56.513 30.835 C 55.863 30.463,55.788 30.453,52.024 30.198 C 50.454 30.091,49.139 29.975,49.104 29.940 C 49.069 29.904,48.496 28.453,47.832 26.715 C 47.168 24.977,46.564 23.475,46.491 23.377 C 45.701 22.327,44.538 21.833,43.413 22.070 M44.852 30.136 C 45.718 32.412,45.972 32.892,46.536 33.323 C 47.150 33.791,47.691 33.906,50.106 34.081 C 51.377 34.173,52.433 34.264,52.453 34.284 C 52.472 34.303,51.652 35.045,50.630 35.932 C 48.691 37.616,48.513 37.810,48.253 38.541 C 47.994 39.267,48.062 39.938,48.632 42.283 C 48.930 43.506,49.173 44.547,49.173 44.596 C 49.173 44.645,48.329 44.131,47.298 43.453 C 46.266 42.776,45.260 42.154,45.061 42.071 C 44.863 41.988,44.385 41.920,44.000 41.920 C 43.615 41.920,43.137 41.988,42.939 42.071 C 42.740 42.154,41.734 42.776,40.702 43.453 C 39.671 44.131,38.827 44.645,38.827 44.595 C 38.827 44.546,39.070 43.504,39.367 42.280 C 39.937 39.928,40.005 39.264,39.747 38.541 C 39.487 37.810,39.309 37.616,37.370 35.932 C 36.348 35.045,35.530 34.301,35.551 34.280 C 35.573 34.258,36.627 34.167,37.894 34.078 C 41.680 33.812,41.780 33.737,43.146 30.140 C 43.604 28.932,43.993 27.957,44.010 27.974 C 44.027 27.992,44.406 28.964,44.852 30.136 "
                              fill="black"
                              stroke="none"
                              fillRule="evenodd"
                            ></path>
                          </svg>
                        </div>
                        Compare Credit Cards
                      </a>
                    </div>
                  </div>
                  <div className="sc-tile-info__content-wrapper">
                    <CardCVPs className="" image={true} />
                  </div>
                  <ul className="sc-inline-buttons">
                    <li className="sc-inline-buttons__item">
                      <Button tag="a" href="#" label="Apply Now" class="sc-btn--medium" />
                    </li>
                  </ul>
                  <div className="sc-only-mobile">
                    <a href="#" className="sc-btn-link sc-btn-link--blue" title="View all Accounts">
                      <div className="sc-btn-link__icon">
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          width="64"
                          height="64"
                          viewBox="0 0 64 64"
                        >
                          <path
                            d="M10.667 10.143 C 9.967 10.277,8.550 11.019,8.029 11.522 C 7.314 12.214,6.854 12.822,6.559 13.465 C 5.960 14.774,5.977 14.291,5.977 30.027 C 5.977 45.981,5.950 45.298,6.633 46.697 C 7.109 47.671,8.329 48.891,9.303 49.367 C 10.664 50.031,10.515 50.023,20.911 50.025 L 30.355 50.027 30.825 49.787 C 31.083 49.655,31.441 49.362,31.620 49.137 C 31.912 48.770,31.947 48.650,31.947 48.000 C 31.947 47.346,31.913 47.232,31.615 46.863 C 31.433 46.638,31.121 46.357,30.922 46.240 C 30.569 46.032,30.318 46.025,20.960 45.973 C 10.589 45.916,11.048 45.942,10.546 45.371 C 10.008 44.758,10.027 45.093,10.027 36.272 L 10.027 28.053 18.928 28.053 C 25.037 28.053,28.002 28.016,28.381 27.935 C 29.042 27.793,29.689 27.258,29.873 26.701 C 30.184 25.759,29.734 24.640,28.880 24.226 C 28.415 24.001,28.370 24.000,19.220 24.000 L 10.027 24.000 10.027 19.783 C 10.027 16.483,10.058 15.492,10.171 15.222 C 10.344 14.807,10.985 14.221,11.389 14.108 C 11.769 14.002,52.231 14.002,52.611 14.108 C 52.942 14.201,53.598 14.743,53.789 15.081 C 53.864 15.214,53.939 15.984,53.972 16.960 C 54.023 18.450,54.053 18.653,54.277 19.014 C 55.053 20.267,56.945 20.267,57.724 19.014 C 57.946 18.657,57.977 18.459,58.011 17.198 C 58.081 14.502,57.645 13.219,56.142 11.705 C 55.433 10.991,54.163 10.303,53.239 10.133 C 52.518 10.000,11.358 10.009,10.667 10.143 M43.413 22.070 C 42.675 22.226,42.055 22.652,41.509 23.377 C 41.436 23.475,40.832 24.977,40.168 26.715 C 39.504 28.453,38.931 29.904,38.896 29.940 C 38.861 29.975,37.546 30.091,35.976 30.198 C 32.212 30.453,32.137 30.463,31.487 30.835 C 30.611 31.335,29.973 32.433,29.973 33.440 C 29.973 33.997,30.272 34.825,30.640 35.285 C 30.831 35.524,32.075 36.657,33.405 37.802 L 35.823 39.886 35.677 40.503 C 35.596 40.842,35.259 42.224,34.928 43.573 C 34.409 45.684,34.332 46.131,34.372 46.773 C 34.449 47.997,35.025 48.862,36.123 49.403 C 36.971 49.820,37.859 49.863,38.621 49.523 C 38.881 49.407,40.170 48.601,41.485 47.731 C 42.801 46.862,43.933 46.151,44.001 46.151 C 44.069 46.151,45.266 46.905,46.661 47.826 C 49.897 49.963,49.894 49.962,50.827 49.956 C 51.715 49.950,52.206 49.758,52.848 49.166 C 53.432 48.628,53.782 47.836,53.784 47.047 C 53.785 46.578,52.598 41.340,52.206 40.088 C 52.165 39.956,52.796 39.352,54.582 37.811 C 57.261 35.500,57.424 35.338,57.709 34.720 C 58.365 33.297,57.840 31.593,56.513 30.835 C 55.863 30.463,55.788 30.453,52.024 30.198 C 50.454 30.091,49.139 29.975,49.104 29.940 C 49.069 29.904,48.496 28.453,47.832 26.715 C 47.168 24.977,46.564 23.475,46.491 23.377 C 45.701 22.327,44.538 21.833,43.413 22.070 M44.852 30.136 C 45.718 32.412,45.972 32.892,46.536 33.323 C 47.150 33.791,47.691 33.906,50.106 34.081 C 51.377 34.173,52.433 34.264,52.453 34.284 C 52.472 34.303,51.652 35.045,50.630 35.932 C 48.691 37.616,48.513 37.810,48.253 38.541 C 47.994 39.267,48.062 39.938,48.632 42.283 C 48.930 43.506,49.173 44.547,49.173 44.596 C 49.173 44.645,48.329 44.131,47.298 43.453 C 46.266 42.776,45.260 42.154,45.061 42.071 C 44.863 41.988,44.385 41.920,44.000 41.920 C 43.615 41.920,43.137 41.988,42.939 42.071 C 42.740 42.154,41.734 42.776,40.702 43.453 C 39.671 44.131,38.827 44.645,38.827 44.595 C 38.827 44.546,39.070 43.504,39.367 42.280 C 39.937 39.928,40.005 39.264,39.747 38.541 C 39.487 37.810,39.309 37.616,37.370 35.932 C 36.348 35.045,35.530 34.301,35.551 34.280 C 35.573 34.258,36.627 34.167,37.894 34.078 C 41.680 33.812,41.780 33.737,43.146 30.140 C 43.604 28.932,43.993 27.957,44.010 27.974 C 44.027 27.992,44.406 28.964,44.852 30.136 "
                            fill="black"
                            stroke="none"
                            fillRule="evenodd"
                          ></path>
                        </svg>
                      </div>
                      Compare Credit Cards
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {props.FourColVariation && (
        <div className="sc-product-info">
          <div className="sc-content-wrapper">
            <div className={`sc-product-info__container ${props.class}`}>
              <GuideCard
                class="sc-guide-card--invest"
                title="Wealth Solutions"
                main="6.20% p.a"
                desc="with our solutions and insights"
                tag="true"
                summary="true"
              />
              <GuideCard
                class="sc-guide-card--invest sc-guide-card--invest-blue"
                title="Wealth Solutions"
                main="6.20% p.a"
                desc="with our solutions and insights"
                tag="true"
                summary="true"
              />
              <GuideCard
                class="sc-guide-card--invest  sc-guide-card--invest-orange"
                title="Wealth Solutions"
                main="6.20% p.a"
                desc="with our solutions and insights"
                tag="true"
                summary="true"
              />
              <GuideCard
                class="sc-guide-card--invest"
                title="Wealth Solutions"
                main="6.20% p.a"
                desc="with our solutions and insights"
                tag="true"
                summary="true"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
