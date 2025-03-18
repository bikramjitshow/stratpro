import React, { useEffect } from 'react';

export const QuickTools = props => {
  useEffect(() => {
    var elms = document.getElementsByClassName('splide');
    for (var i = 0; i < elms.length; i++) {
      // eslint-disable-next-line no-undef
      new Splide(elms[i]).mount();
    }
  }, []);

  return (
    <div className={`sc-quick-tools ${props.class}`}>
      <div className="sc-content-wrapper">
        {props.title && <h2 className="sc-title sc-title--underline">{props.title}</h2>}
        <div
          className="sc-quick-tools__container splide"
          data-splide={JSON.stringify({
            trimSpace: 'move',
            pagination: false,
            autoWidth: true,
            slideFocus: false,
            destroy: props.splide ? false : true,
            arrows: props.splide ? false : true,
            breakPoints: {
              '1024': {
                autoWidth: false,
                fixedWidth: '150px',
                arrows: true
              }
            }
          })}
        >
          <div className="splide__track">
            <div className="splide__list">
              <div className="splide__slide">
                <a href="#" className="sc-quick-tools__links" title="Open Account">
                  <div className="sc-quick-tools__icon">
                    <svg
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="11.1 15.57 48.15 39.42"
                    >
                      <path
                        d="M14.3828 51.6709C14.3828 49.8587 15.8519 48.3896 17.6641 48.3896H28.0547C29.8669 48.3896 31.3359 49.8587 31.3359 51.6709C31.3359 53.4831 29.8669 54.9521 28.0547 54.9521H17.6641C15.8519 54.9521 14.3828 53.4831 14.3828 51.6709Z"
                        fill="#0F7AED"
                      />
                      <path
                        d="M38.4453 51.6709C38.4453 49.8587 39.9144 48.3896 41.7266 48.3896H52.1172C53.9294 48.3896 55.3984 49.8587 55.3984 51.6709C55.3984 53.4831 53.9294 54.9521 52.1172 54.9521H41.7266C39.9144 54.9521 38.4453 53.4831 38.4453 51.6709Z"
                        fill="#0F7AED"
                      />
                      <path
                        d="M15.1016 15.5771C12.8924 15.5771 11.1016 17.368 11.1016 19.5771V41.1084C11.1016 43.3175 12.8924 45.1084 15.1016 45.1084H55.2266C57.4357 45.1084 59.2266 43.3175 59.2266 41.1084V19.5771C59.2266 17.368 57.4357 15.5771 55.2266 15.5771H15.1016ZM48.2891 34.1709C50.7053 34.1709 52.6641 32.2121 52.6641 29.7959C52.6641 27.3797 50.7053 25.4209 48.2891 25.4209C45.8728 25.4209 43.9141 27.3797 43.9141 29.7959C43.9141 32.2121 45.8728 34.1709 48.2891 34.1709Z"
                        fill="#38D200"
                      />
                    </svg>
                  </div>
                  <span className="sc-quick-tools__title">Open Account</span>
                </a>
              </div>

              <div className="splide__slide">
                <a href="#" className="sc-quick-tools__links" title="Saving Promotions">
                  <div className="sc-quick-tools__icon">
                    <svg
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="11.87 13.37 48.17 39.03"
                    >
                      <ellipse cx="35.9414" cy="21.6871" rx="24.0625" ry="8.29741" fill="#38D200" />
                      <path
                        d="M58.2549 31.6436C54.6854 34.0762 46.0399 35.7923 35.9414 35.7923C25.843 35.7923 17.1974 34.0762 13.6279 31.6436C12.5 32.4122 11.8789 33.2525 11.8789 34.1327C11.8789 37.7987 22.6521 40.7706 35.9414 40.7706C49.2308 40.7706 60.0039 37.7987 60.0039 34.1327C60.0039 33.2525 59.3828 32.4122 58.2549 31.6436Z"
                        fill="#38D200"
                      />
                      <path
                        d="M58.255 43.2607C54.6855 45.6935 46.0399 47.4096 35.9414 47.4096C25.8429 47.4096 17.1973 45.6935 13.6278 43.2607C12.5 44.0294 11.8789 44.8696 11.8789 45.7499C11.8789 49.4159 22.6521 52.3878 35.9414 52.3878C49.2308 52.3878 60.0039 49.4159 60.0039 45.7499C60.0039 44.8696 59.3828 44.0294 58.255 43.2607Z"
                        fill="#0F7AED"
                      />
                    </svg>
                  </div>
                  <span className="sc-quick-tools__title">Saving Promotions</span>
                </a>
              </div>

              <div className="splide__slide">
                <a href="#" className="sc-quick-tools__links" title="Multi-currency Card">
                  <div className="sc-quick-tools__icon">
                    <svg
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="8.75 9 52.53 52.53"
                    >
                      <path
                        d="M35.0234 57.5273C47.3188 57.5273 57.2861 47.56 57.2861 35.2647C57.2861 22.9693 47.3188 13.002 35.0234 13.002C22.7281 13.002 12.7608 22.9693 12.7608 35.2647C12.7608 47.56 22.7281 57.5273 35.0234 57.5273ZM35.0234 61.5147C49.5209 61.5147 61.2734 49.7621 61.2734 35.2647C61.2734 20.7672 49.5209 9.01465 35.0234 9.01465C20.526 9.01465 8.77344 20.7672 8.77344 35.2647C8.77344 49.7621 20.526 61.5147 35.0234 61.5147Z"
                        fill="#0F7AED"
                      />
                      <path
                        d="M35.0234 53.8584C45.2925 53.8584 53.6172 45.5337 53.6172 35.2646C53.6172 24.9956 45.2925 16.6709 35.0234 16.6709C24.7544 16.6709 16.4297 24.9956 16.4297 35.2646C16.4297 45.5337 24.7544 53.8584 35.0234 53.8584ZM37.8671 27.0832C39.8321 27.412 41.5722 25.274 42.5409 22.7394C40.3832 21.4951 37.8797 20.7831 35.2099 20.7831C27.0936 20.7831 20.5141 27.3627 20.5141 35.479C20.5141 36.7008 20.6632 37.8878 20.9442 39.0228C23.6218 39.9552 27.457 39.8122 31.5671 38.6332C35.154 37.6043 36.3266 35.9343 35.3018 32.3332C34.2769 28.7321 34.7925 26.5688 37.8671 27.0832ZM42.7819 46.7711C42.8649 47.261 42.9332 47.6644 43.0591 47.9053C40.7883 49.3427 38.0963 50.1748 35.2099 50.1748C33.7648 50.1748 32.3684 49.9662 31.0491 49.5775C30.7595 49.109 30.4116 48.5883 29.9921 47.9987C27.43 44.3976 29.9921 39.7675 34.6039 42.3398C37.1472 43.7583 38.0221 43.1205 38.7251 42.608C39.2968 42.1912 39.7547 41.8574 40.9039 42.7804C42.2954 43.898 42.5814 45.587 42.7819 46.7711Z"
                        fill="#38D200"
                      />
                    </svg>
                  </div>
                  <span className="sc-quick-tools__title">Multi-currency Card</span>
                </a>
              </div>

              <div className="splide__slide">
                <a href="#" className="sc-quick-tools__links" title="Resume Application">
                  <div className="sc-quick-tools__icon">
                    <svg
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="11.87 11.2 48.17 48.15"
                    >
                      <path
                        d="M54.0137 11.2021H38.1387V21.2274C44.3462 22.2688 49.0762 27.6675 49.0762 34.1709C49.0762 40.6743 44.3462 46.073 38.1387 47.1144V59.3271H54.0137C57.3274 59.3271 60.0137 56.6409 60.0137 53.3271V17.2021C60.0137 13.8884 57.3274 11.2021 54.0137 11.2021Z"
                        fill="#0F7AED"
                      />
                      <path
                        d="M18.4512 11.2021C14.8268 11.2021 11.8887 14.1403 11.8887 17.7646V52.7646C11.8887 56.389 14.8268 59.3271 18.4512 59.3271H33.7637V42.6452C34.4628 42.8252 35.1958 42.9209 35.9512 42.9209C40.7837 42.9209 44.7012 39.0034 44.7012 34.1709C44.7012 29.3384 40.7837 25.4209 35.9512 25.4209C35.1958 25.4209 34.4628 25.5166 33.7637 25.6966V11.2021H18.4512Z"
                        fill="#38D200"
                      />
                    </svg>
                  </div>
                  <span className="sc-quick-tools__title">Resume Application</span>
                </a>
              </div>

              <div className="splide__slide">
                <a href="#" className="sc-quick-tools__links" title="Referral sign-up">
                  <div className="sc-quick-tools__icon">
                    <svg
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="13.75 13.37 44.07 41.62"
                    >
                      <circle cx="35.645" cy="22.1396" r="8.75" fill="#38D200" />
                      <path
                        d="M35.7861 44.0146C29.7802 44.0146 24.5738 47.4716 22.0629 52.5242C20.9876 54.688 18.3618 55.5703 16.198 54.495C14.0342 53.4197 13.1518 50.7939 14.2271 48.6301C18.1593 40.7177 26.3319 35.2646 35.7861 35.2646C45.2403 35.2646 53.4128 40.7177 57.345 48.6301C58.4203 50.7939 57.5379 53.4197 55.3741 54.495C53.2103 55.5703 50.5845 54.688 49.5092 52.5242C46.9983 47.4716 41.7919 44.0146 35.7861 44.0146Z"
                        fill="#0F7AED"
                      />
                    </svg>
                  </div>
                  <span className="sc-quick-tools__title">Referral sign-up</span>
                </a>
              </div>

              <div className="splide__slide">
                <a href="#" className="sc-quick-tools__links" title="Insurance">
                  <div className="sc-quick-tools__icon">
                    <svg
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="11.5 11.2 48.15 48.13"
                    >
                      <path
                        d="M59.6353 35.2646C59.6353 28.8829 57.1001 22.7625 52.5875 18.2499C48.0749 13.7373 41.9545 11.2021 35.5728 11.2021C29.191 11.2021 23.0706 13.7373 18.558 18.2499C14.0454 22.7625 11.5103 28.8829 11.5103 35.2646C11.5103 35.2646 20.8071 32.5303 35.5728 32.5303C50.3384 32.5303 59.6353 35.2646 59.6353 35.2646Z"
                        fill="#38D200"
                      />
                      <path
                        d="M31.1978 59.3271C32.3468 59.3271 33.4846 59.1008 34.5462 58.6611C35.6078 58.2214 36.5724 57.5768 37.3849 56.7643C38.1975 55.9518 38.842 54.9872 39.2817 53.9256C39.7214 52.864 39.9478 51.7262 39.9478 50.5771H31.1978L31.1978 59.3271Z"
                        fill="#0F7AED"
                      />
                      <path
                        d="M39.9478 40.7334C39.9478 43.1496 37.989 45.1084 35.5728 45.1084C33.1565 45.1084 31.1978 43.1496 31.1978 40.7334C31.1978 38.3172 33.1565 36.3584 35.5728 36.3584C37.989 36.3584 39.9478 38.3172 39.9478 40.7334Z"
                        fill="#0F7AED"
                      />
                      <path
                        d="M31.1978 40.7334H39.9478V50.5771H31.1978L31.1978 40.7334Z"
                        fill="#0F7AED"
                      />
                    </svg>
                  </div>
                  <span className="sc-quick-tools__title">Insurance</span>
                </a>
              </div>

              <div className="splide__slide">
                <a href="#" className="sc-quick-tools__links" title="Grow Your Wealth">
                  <div className="sc-quick-tools__icon">
                    <svg
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      width="64"
                      height="64"
                      viewBox="0 0 64 64"
                    >
                      <title>tree</title>
                      <path fill="#0f7aed" d="M32 57.5a4 4 0 01-4-4V44h8v9.5a4 4 0 01-4 4z"></path>
                      <path fill="#38d200" d="M32 6l18.186 19.5H13.813L31.999 6z"></path>
                      <path fill="#38d200" d="M32 16l21.651 24H10.35l21.651-24z"></path>
                    </svg>
                  </div>
                  <span className="sc-quick-tools__title">Grow Your Wealth</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- SVG Hover Gradient --> */}
      <svg
        style={{ width: 0, height: 0, position: 'absolute' }}
        aria-hidden="true"
        focusable="false"
      >
        <linearGradient id="quicktool-hover" x2="1" y2="1">
          <stop offset="0%" stopColor="#2db944" />
          <stop offset="100%" stopColor="#4478ff" />
        </linearGradient>
      </svg>
    </div>
  );
};
