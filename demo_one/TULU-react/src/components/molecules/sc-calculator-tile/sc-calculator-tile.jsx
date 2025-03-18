import React from 'react';
export const CalculatorTiles = props => {
  return (
    <div className={`sc-calculator-tile  ${props.class}`}>
      <div className="sc-calculator-tile__top">
        <div className="sc-calculator-tile__label">
          <div className="sc-calculator-tile__label-icon">
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
                d="M28.5405 4.16049C23.3554 4.8287 18.4535 6.90886 14.37 10.1739C8.69492 14.7293 4.88656 21.7281 4.11451 29.018C3.96183 30.9974 3.96183 32.9857 4.11451 34.9651C4.70942 40.3265 6.81657 45.4081 10.19 49.6168C14.8779 55.3781 21.6428 59.0645 29.0244 59.8802C29.6409 59.9436 30.9776 59.9983 31.9974 59.9983C35.0073 60.032 38.0013 59.5566 40.8528 58.5922C44.9817 57.2111 48.7334 54.8894 51.8119 51.8102C54.8904 48.731 57.2117 44.9786 58.5925 40.8488C59.5567 37.9967 60.032 35.0021 59.9983 31.9915C59.9983 30.9715 59.9436 29.6346 59.8802 29.018C59.2853 23.6566 57.1782 18.575 53.8047 14.3663C49.1169 8.60499 42.352 4.91861 34.9703 4.10287C33.4694 3.94439 30.0356 3.97321 28.5405 4.16049ZM35.3851 8.43643C37.2373 8.70507 39.0513 9.19155 40.7894 9.88575C45.4664 11.7445 49.433 15.0397 52.1182 19.2969C54.8034 23.5542 56.0687 28.5539 55.7319 33.5763C54.9801 44.779 46.5769 53.861 35.3938 55.5639C33.6884 55.8232 30.3064 55.8232 28.601 55.5639C16.2137 53.6795 7.43027 42.7966 8.26569 30.3664C8.49092 27.1008 9.38701 23.9166 10.898 21.0129C12.409 18.1092 14.5024 15.5484 17.0474 13.4903C19.5925 11.4323 22.5345 9.92129 25.6896 9.05172C28.8448 8.18215 32.1454 7.97269 35.3851 8.43643ZM31.9945 23.382L31.9916 32.0492L24.0033 35.2705L16.012 38.489L16.2944 39.1287C17.6742 42.252 20.3966 45.2141 23.5279 47.0063C27.3939 49.2221 32.2998 49.8041 36.7074 48.5737C44.5661 46.3839 49.8725 38.7051 49.158 30.5624C48.934 27.8289 48.0596 25.1886 46.6078 22.8619C45.1561 20.5352 43.169 18.5895 40.8125 17.1871C38.3754 15.7349 35.9671 15.0117 32.7752 14.7697L31.9974 14.712L31.9945 23.382Z"
                fill="#2772C7"
              />
            </svg>
          </div>
          <p>First$aver Interest-based Savings</p>
          <span className="sc-tooltip">
            <svg
              width="64"
              height="64"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M32.3335 60.6666C48.3495 60.6666 61.3335 47.6853 61.3335 31.6666C61.3335 15.6506 48.3495 2.66662 32.3335 2.66662C16.3148 2.66662 3.3335 15.6506 3.3335 31.6666C3.3335 47.6826 16.3148 60.6666 32.3335 60.6666Z"
                stroke="#919191"
                strokeWidth="2"
                strokeMiterlimit="10"
              />
              <path
                d="M30.6665 36.5546H33.3332V17.888H30.6665V36.5546ZM30.6665 47.2213H33.3332V41.888H30.6665V47.2213Z"
                fill="#919191"
              />
            </svg>

            <span className="sc-tooltip__text">
              Experience the new standard of digital banking with SC Mobile
            </span>
          </span>
        </div>
        <div className="sc-calculator-tile__checkbox">
          <div className="sc-checkbox">
            Spend
            <input
              className="sc-checkbox__input sc-calculator-tile__input"
              type="checkbox"
              id="check-one"
              name="radio-option"
              tabIndex="-1"
              // checked="checked"
              defaultChecked
              data-className="spend-category-checkbox-1"
            />
            <label className="sc-checkbox__checkmark" htmlFor="check-one" tabIndex="0"></label>
          </div>
          <a
            href="#null"
            className="sc-calculator-tile__information"
            aria-label="More information"
            data-send="show-overlay"
            data-modal-source="spendpop1"
          >
            <span className="hide">More information</span>
          </a>
        </div>
        <div className="sc-calculator-tile__text-container">
          <div className="sc-calculator-tile__text">
            My estimated monthly card spending will be
            {/* dropdown */}
            <div className="sc-calculator-tile__selector-box">
              <select name="spend" className="sc-calculator-tile__selector">
                <option data-class="spend-category-options-2" value="0">
                  Less than S$500
                </option>
                <option data-class="spend-category-options-2" value="0.60">
                  S$500 to S$1,999
                </option>
                <option data-class="spend-category-options-2" value="1.40" selected>
                  S$2,000 or greater
                </option>
              </select>
            </div>
            {/*  End dropdown */}
          </div>
          <p className="sc-calculator-tile__content-interest sc-only-mobile">1.45%</p>
        </div>
        <div className="sc-calculator-tile__input-box">
          <span className="sc-calculator-tile__currency">S$</span>
          <input
            type="text"
            pattern="[0-9]+"
            inputMode="numeric"
            className="sc-calculator-tile__amount-input"
            aria-label="Loan Amount"
            value="20000"
          />
          <span className="sc-calculator-tile__edit-input">
            <svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M10.297 1.734c-.289.06-.186-.038-4.198 3.97-2.298 2.294-3.876 3.89-3.938 3.982-.159.237-.165.305-.156 2.021l.008 1.506.065.16c.088.219.33.461.549.549l.16.065 1.506.008c1.716.009 1.784.003 2.021-.156.092-.062 1.684-1.637 3.981-3.938 2.969-2.974 3.841-3.862 3.888-3.959a1.02 1.02 0 0 0 .086-.595c-.066-.355-.053-.34-1.53-1.822A83.646 83.646 0 0 0 11.196 2c-.265-.23-.597-.329-.899-.266m1.61 2.373 1.386 1.386-.646.647-.647.647-1.393-1.394L9.214 4l.639-.64c.352-.352.646-.64.654-.64.007 0 .637.624 1.4 1.387m-2 2 1.386 1.386-2.646 2.647L6 12.787l-1.393-1.394L3.213 10l2.64-2.64a350.87 350.87 0 0 1 2.654-2.64c.007 0 .637.624 1.4 1.387m-5.98 6.9c-.48.004-.888.001-.907-.006-.026-.01-.033-.214-.033-.913v-.901l.906.906L4.8 13l-.873.007"
                fillRule="evenodd"
                fill="#525355"
              />
            </svg>
          </span>
        </div>
      </div>
      <div className="sc-calculator-tile__bottom sc-only-desktop">
        <div className="sc-calculator-tile__content">
          <p className="sc-calculator-tile__content-desc">Interest (p.a) earned</p>
          <p className="sc-calculator-tile__content-interest rate-spend-category-options-2 sc-only-dekstop">
            1.45%
          </p>
        </div>
        <p className="sc-calculator-tile__note">(Inclusive of prevailing interest rate)</p>
      </div>
    </div>
  );
};
