import React from 'react';

export const ArticleDetails = props => {
  return (
    <div className={`sc-article-details ${props.class}`}>
      <div className="sc-content-wrapper">
        <h2 className="sc-article-details__title">
          Where to invest your time – career or investing
        </h2>
        <div className="sc-article-details__container">
          <p className="sc-article-details__text">From the CIO Office</p>
          <span className="sc-article-details__line">|</span>
          <button className="sc-article-details__button">
            <div className="sc-article-details__icon">
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.167 5.086 C 15.866 5.235,15.711 5.578,15.778 5.947 C 15.802 6.082,16.003 6.298,17.483 7.781 C 18.405 8.705,19.160 9.474,19.160 9.491 C 19.160 9.507,18.237 9.520,17.108 9.520 C 15.481 9.520,14.958 9.533,14.581 9.582 C 13.342 9.745,12.433 10.022,11.351 10.567 C 8.948 11.780,7.164 13.914,6.405 16.485 C 6.261 16.975,6.254 17.080,6.355 17.302 C 6.586 17.809,7.293 17.900,7.617 17.464 C 7.667 17.396,7.793 17.079,7.895 16.760 C 8.185 15.853,8.602 15.044,9.167 14.292 C 10.568 12.424,12.707 11.245,15.060 11.042 C 15.324 11.019,16.359 11.001,17.359 11.000 L 19.179 11.000 17.531 12.650 C 16.411 13.771,15.864 14.348,15.822 14.449 C 15.565 15.067,16.125 15.656,16.768 15.444 C 16.864 15.412,17.584 14.716,19.308 12.990 C 21.705 10.589,21.714 10.579,21.742 10.386 C 21.802 9.972,21.894 10.081,19.327 7.509 C 17.768 5.947,16.925 5.132,16.817 5.079 C 16.606 4.977,16.383 4.979,16.167 5.086 M2.700 8.076 C 2.506 8.165,2.384 8.292,2.302 8.489 C 2.247 8.621,2.240 9.285,2.240 14.357 C 2.240 18.439,2.253 20.137,2.285 20.288 C 2.349 20.588,2.486 20.840,2.708 21.062 C 2.941 21.295,3.233 21.435,3.591 21.484 C 3.751 21.506,6.763 21.517,11.020 21.511 L 18.180 21.500 18.367 21.390 C 18.904 21.074,18.868 20.332,18.302 20.075 C 18.147 20.005,17.839 20.002,10.950 20.001 L 3.760 20.000 3.759 14.310 C 3.758 8.864,3.755 8.613,3.684 8.460 C 3.503 8.068,3.077 7.902,2.700 8.076 "
                  stroke="none"
                  fillRule="evenodd"
                  fill="black"
                ></path>
              </svg>
            </div>
          </button>
        </div>
        <div className="sc-article-details__image">
          <img
            src="https://av.sc.com/sg/content/images/sg-crafting-a-balanced-portfolio-pintile.jpg"
            alt="image"
          />
        </div>
        <div className="sc-article-details__content sc-rte">
          <p>
            From a very young age, we are taught that if you want to get better at something, then
            you need to expend time and effort to learn the necessary skills. We are also taught
            that you should focus on areas that you are going to make the biggest impact.
          </p>
          <br />
          <p>
            When it comes to maximising your financial position in life, the best way is to focus on
            your career and adopt a simple approach to investing i.e. regularly invest into a
            diversified portfolio regardless of what videos you see on TikTok or articles you read
            online. This is especially true at the beginning of your career and investment journey:
            adopting this approach will make you stand head-and-shoulders above the majority of
            investors.
          </p>
          <br />
          <p>
            To illustrate this, let’s take a simple example. Let’s assume 1) a diversified portfolio
            can generate a return of 6% a year for the next 10 years; 2) you have managed to scrape
            together 10,000 dollars to start investing; and 3) based on your current salary of 5000
            dollars a month, you are able to invest 1000 dollars every month. Assuming you
            programmatically invest every month and returns are linear, the value of your portfolio
            after 10 years will be over 180,000 dollars (based on a total investment of 130,000
            dollars – 10,000 to start with and then 1000 per month for 120 months). Not bad!
          </p>
        </div>
      </div>
    </div>
  );
};
