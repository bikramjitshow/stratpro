import React, { useEffect } from 'react';
import { Titles } from '../../atoms/sc-heading/sc-heading.jsx';
import ScRecommended from './sc-recommended';

export const Recommends = function() {
  useEffect(() => {
    ScRecommended.init();
  }, []);
  useEffect(() => {
    var elms = document.getElementsByClassName('splide');
    for (var i = 0; i < elms.length; i++) {
      // eslint-disable-next-line no-undef
      new Splide(elms[i]).mount();
    }
  }, []);
  return (
    <div className="sc-recommend" data-display-card="4">
      <div className="sc-content-wrapper">
        <Titles tag="h2" class="sc-title--underline" label="Recommended for you" />
        <div className="sc-recommend__container">
          <div className="sc-filter sc-filter--border">
            <div
              className="splide"
              data-splide='{"arrows":false,"trimSpace":"move","pagination":false,"autoWidth":true,"gap":"8px"}'
            >
              <div className="splide__track">
                <div className="splide__list">
                  <div className="splide__slide">
                    <a
                      href="#null"
                      className="sc-filter__btn sc-filter__btn--active"
                      data-tab-name="all"
                      tabIndex="0"
                      title="All"
                    >
                      All
                    </a>
                  </div>
                  <div className="splide__slide">
                    <a
                      href="#null"
                      className="sc-filter__btn"
                      data-tab-name="stocks-trading"
                      tabIndex="0"
                      title="Stocks &amp; Trading"
                    >
                      Stocks &amp; Trading
                    </a>
                  </div>
                  <div className="splide__slide">
                    <a
                      href="#null"
                      className="sc-filter__btn"
                      data-tab-name="beginner-101-guide"
                      tabIndex="0"
                      title="Beginner 101 Guide"
                    >
                      Beginner 101 Guide
                    </a>
                  </div>
                  <div className="splide__slide">
                    <a
                      href="#null"
                      className="sc-filter__btn"
                      data-tab-name="invest"
                      tabIndex="0"
                      title="Invest"
                    >
                      Invest
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="sc-recommend__tile-wrapper">
            <a
              className="sc-card-tile sc-card-tile--active"
              target="_blank"
              rel="noreferrer"
              title="Crafting a balanced portfolio for financial longevity"
              href="https://www.sc.com/sg/wealth/insights/crafting-a-balanced-portfolio-for-financial-longevity/"
              data-item-name="all,invest"
            >
              <div className="sc-card-tile__link">
                <div className="sc-card-tile__tile-image">
                  <img
                    width="400"
                    height="200"
                    src="https://av.sc.com/sg/content/images/sg-crafting-a-balanced-portfolio-pintile.jpg"
                    className="sc-card-tile__tile-img"
                    alt="Article Image"
                    loading="lazy"
                  />
                </div>
                <div className="sc-card-tile__content sc-card-tile__content--padding">
                  <div className="sc-card-tile__tags">
                    <span className="sc-tag sc-tag--line-blue">Invest</span>
                  </div>
                  <h3 className="sc-card-tile__title">
                    Crafting a balanced portfolio for financial longevity
                  </h3>
                  <div className="sc-card-tile__description">
                    <p>From the CIO Office</p>
                  </div>
                  <div title="More" className="sc-card-tile__read-more">
                    05 Jul 2024
                  </div>
                </div>
              </div>
            </a>
            <a
              className="sc-card-tile sc-card-tile--active"
              target="_blank"
              rel="noreferrer"
              title="Japan – land of the rising stock market?"
              href="https://www.sc.com/sg/wealth/insights/japan-land-of-the-rising-stock-market/"
              data-item-name="all,stocks-trading,invest"
            >
              <div className="sc-card-tile__link">
                <div className="sc-card-tile__tile-image">
                  <img
                    width="400"
                    height="200"
                    src="https://av.sc.com/sg/content/images/sg-japan-rising-stock-insights.jpg"
                    className="sc-card-tile__tile-img"
                    alt="Article Image"
                    loading="lazy"
                  />
                </div>
                <div className="sc-card-tile__content sc-card-tile__content--padding">
                  <div className="sc-card-tile__tags">
                    <span className="sc-tag sc-tag--line-blue">Invest</span>
                    <span className="sc-tag sc-tag--line-blue">Stocks &amp; Trading</span>
                  </div>
                  <h3 className="sc-card-tile__title">Japan – land of the rising stock market?</h3>
                  <div className="sc-card-tile__description">
                    <p>Warren Buffett sure thinks so</p>
                  </div>
                  <div title="More" className="sc-card-tile__read-more">
                    12 Jun 2024
                  </div>
                </div>
              </div>
            </a>
            <a
              className="sc-card-tile sc-card-tile--active"
              target="_blank"
              rel="noreferrer"
              title="Where to invest your time – career or investing"
              href="https://www.sc.com/sg/wealth/insights/where-to-invest-your-time-career-or-investing/"
              data-item-name="beginner-101-guide,invest,all"
            >
              <div className="sc-card-tile__link">
                <div className="sc-card-tile__tile-image">
                  <img
                    width="400"
                    height="200"
                    src="https://av.sc.com/sg/content/images/sg-wheretoinvest-banner-400x200px.jpg"
                    className="sc-card-tile__tile-img"
                    alt="Article Image"
                    loading="lazy"
                  />
                </div>
                <div className="sc-card-tile__content sc-card-tile__content--padding">
                  <div className="sc-card-tile__tags">
                    <span className="sc-tag sc-tag--line-blue">Beginner 101 Guide</span>
                    <span className="sc-tag sc-tag--line-blue">Invest</span>
                  </div>
                  <h3 className="sc-card-tile__title">
                    Where to invest your time – career or investing
                  </h3>
                  <div className="sc-card-tile__description">
                    <p>From the CIO Office</p>
                  </div>
                  <div title="More" className="sc-card-tile__read-more">
                    06 May 2024
                  </div>
                </div>
              </div>
            </a>
            <a
              className="sc-card-tile sc-card-tile--active"
              target="_blank"
              rel="noreferrer"
              title="Blinded by Meme Stocks?"
              href="https://www.sc.com/sg/wealth/insights/blinded-by-meme-stocks/"
              data-item-name="stocks-trading"
            >
              <div className="sc-card-tile__link">
                <div className="sc-card-tile__tile-image">
                  <img
                    width="400"
                    height="200"
                    src="https://av.sc.com/sg/content/images/sg-meme-pintile-400x200px.jpg"
                    className="sc-card-tile__tile-img"
                    alt="Article Image"
                    loading="lazy"
                  />
                </div>
                <div className="sc-card-tile__content sc-card-tile__content--padding">
                  <div className="sc-card-tile__tags">
                    <span className="sc-tag sc-tag--line-blue">Invest</span>
                    <span className="sc-tag sc-tag--line-blue">Market-Blog</span>
                    <span className="sc-tag sc-tag--line-blue">Stocks &amp; Trading</span>
                  </div>
                  <h3 className="sc-card-tile__title">Blinded by Meme Stocks?</h3>
                  <div className="sc-card-tile__description">
                    <p>An educational piece about meme stocks.</p>
                  </div>
                  <div title="More" className="sc-card-tile__read-more">
                    20 Jul 2022 | 5 min read
                  </div>
                </div>
              </div>
            </a>
            <a
              className="sc-card-tile sc-card-tile--active"
              target="_blank"
              rel="noreferrer"
              title="ETFs 101"
              href="https://www.sc.com/sg/wealth/insights/etf-investing-and-what-you-need-to-know/"
              data-item-name="beginner-101-guide"
            >
              <div className="sc-card-tile__link">
                <div className="sc-card-tile__tile-image">
                  <img
                    width="400"
                    height="200"
                    src="https://av.sc.com/sg/content/images/pintile_etfss-400x200y.jpg"
                    className="sc-card-tile__tile-img"
                    alt="Article Image"
                    loading="lazy"
                  />
                </div>
                <div className="sc-card-tile__content sc-card-tile__content--padding">
                  <div className="sc-card-tile__tags">
                    <span className="sc-tag sc-tag--line-blue">Beginner 101</span>
                    <span className="sc-tag sc-tag--line-blue">Guide ETFs &amp; REITs</span>
                    <span className="sc-tag sc-tag--line-blue">Invest</span>
                  </div>
                  <h3 className="sc-card-tile__title">ETFs 101</h3>
                  <div className="sc-card-tile__description">
                    <p>
                      How to invest in ETFs, and what are the advantages, disadvantages, and risks
                      to consider?
                    </p>
                  </div>
                  <div title="More" className="sc-card-tile__read-more">
                    11 Dec 2019 | 4 min read
                  </div>
                </div>
              </div>
            </a>
            <a
              className="sc-card-tile sc-card-tile--active"
              target="_blank"
              rel="noreferrer"
              title="Manage your investments during changing economic conditions"
              href="https://www.sc.com/sg/wealth/insights/manage-your-investments/"
              data-item-name="beginner-101-guide"
            >
              <div className="sc-card-tile__link">
                <div className="sc-card-tile__tile-image">
                  <img
                    width="400"
                    height="200"
                    src="https://av.sc.com/sg/content/images/pintilee-macroeconiimic-400x200y.jpg"
                    className="sc-card-tile__tile-img"
                    alt="Article Image"
                    loading="lazy"
                  />
                </div>
                <div className="sc-card-tile__content sc-card-tile__content--padding">
                  <div className="sc-card-tile__tags">
                    <span className="sc-tag sc-tag--line-blue">Beginner 101 Guide</span>
                  </div>
                  <h3 className="sc-card-tile__title">
                    Manage your investments during changing economic conditions
                  </h3>
                  <div className="sc-card-tile__description">
                    <p>
                      Investment performances and economic conditions – their correlations and the
                      reasons behind them
                    </p>
                  </div>
                  <div title="More" className="sc-card-tile__read-more">
                    11 Dec 2019 | 3 min read
                  </div>
                </div>
              </div>
            </a>
            <a
              className="sc-card-tile sc-card-tile--active"
              target="_blank"
              rel="noreferrer"
              title="VIX: What you should know about the volatility index"
              href="https://www.sc.com/sg/wealth/insights/volatility-index-vix/"
              data-item-name="stocks-trading"
            >
              <div className="sc-card-tile__link">
                <div className="sc-card-tile__tile-image">
                  <img
                    width="400"
                    height="200"
                    src="https://av.sc.com/sg/content/images/sg-vix-golfer-blur-400x200y.jpg"
                    className="sc-card-tile__tile-img"
                    alt="Article Image"
                    loading="lazy"
                  />
                </div>
                <div className="sc-card-tile__content sc-card-tile__content--padding">
                  <div className="sc-card-tile__tags">
                    <span className="sc-tag sc-tag--line-blue">Invest</span>
                    <span className="sc-tag sc-tag--line-blue">Stocks &amp; Trading</span>
                  </div>
                  <h3 className="sc-card-tile__title">
                    VIX: What you should know about the volatility index
                  </h3>
                  <div className="sc-card-tile__description">
                    <p>
                      Learn what the VIX, often called the market’s ‘fear gauge’, means for
                      investors.
                    </p>
                  </div>
                  <div title="More" className="sc-card-tile__read-more">
                    03 Apr 2020 | 2 min read
                  </div>
                </div>
              </div>
            </a>
          </div>
          <a
            href="https://www.sc.com/sg/wealth/insights/"
            target="_blank"
            rel="noreferrer"
            title="View All Articles"
            className="sc-recommend__btn"
          >
            View All Articles
          </a>
        </div>
      </div>
    </div>
  );
};
