import {
  getPageUrl,
  getCurrentCountry,
  convertQueryStringToJsonObject,
  shouldCarryTrackingParams,
  applyCookieParams,
  getPageContext,
  isEmpty,
  setLocalStorageWithExpiry
} from './sc-common-methods';
class FormURL {
  init() {
    let that = this;
    const pageUrl = getPageUrl();
    const country = getCurrentCountry();
    const paramsApiUrl =
      document.body.dataset.allowedParams ||
      `https://av.sc.com/${country}/data/whitelist-parameter/allowable/all.json`;

    window.getAllowedParams = fetch(paramsApiUrl)
      .then(response => response.json())
      .then(data => {
        if (typeof data === 'object' && data !== null && data.scb) {
          if (!window.scCommonConstants) {
            window.scCommonConstants = {};
          }
          window.scCommonConstants.ALLOWABLE_QUERYSTRING = data;
        }
      });

    if (pageUrl.queryString) {
      const queryStringJson = convertQueryStringToJsonObject(pageUrl.queryString.toLowerCase());
      window.getAllowedParams.finally(() => {
        this.handleQueryString(queryStringJson);
      });
    }

    let urlModified = false;
    document.addEventListener('mousedown', function(event) {
      const element = event.target.closest('a');
      if (!element) return;

      if (urlModified && element.closest('.m-disclaimer')) {
        return;
      }

      const linkSwitching = element.getAttribute('data-cta-link-switching');
      if (linkSwitching) {
        // Skip all other rules if data-cta-link-switching attribute exists
        that.handleLinkSwitching(element);
      } else {
        let href = element.getAttribute('href');
        let swap =
          element.getAttribute('swap-attrs') || element.getAttribute('data-swap-attrs') || '';
        let ctaParamsTakePrecedence = element.dataset.ctaUrlParamsPrecedence;

        // Apply parameters to form URLs.
        // If the CTA has pass-params data attribute, then pass the params.
        // To do: remove the shouldCarryTrackingParams.
        if (href && shouldCarryTrackingParams(href)) {
          window.getAllowedParams.finally(() => {
            href = applyCookieParams(href, swap, ctaParamsTakePrecedence);
            element.setAttribute('href', href);
            urlModified = true;
          });
        }
      }
    });
  }

  /**
   * if data-cta-link-switching attribute exists inside CTA, then generate dynamic URL
   */
  handleLinkSwitching(el) {
    const url = el.getAttribute('href');
    if (!window.employeeProductURL || url.includes(`?${window.employeeProductURL.queryParameter}=`))
      return; // True if URL was already updated

    const urlQueryParams = new URLSearchParams(getPageContext().queryString);
    const urlObj = new URL(url);
    const ctaQueryParams = new URLSearchParams(urlObj.search);
    const urlWithoutQueryString = `${urlObj.protocol}//${urlObj.hostname}${urlObj.pathname}`;
    let newQueryString = '';

    window.employeeProductURL.components.forEach(component => {
      const origin = component.origin;
      if (origin === 'static') {
        newQueryString += `${component.value}/`;
      } else if (origin === 'pageUrl') {
        const values = urlQueryParams.get(component.key);
        newQueryString += (values ? values : window.employeeProductURL.defaultValue) + '/';
      } else if (origin === 'ctaURL') {
        const values = ctaQueryParams.get(component.key);
        newQueryString += (values ? values : window.employeeProductURL.defaultValue) + '/';
      }
    });

    const newUrl = `${urlWithoutQueryString}?${window.employeeProductURL.queryParameter}=${newQueryString}`;
    el.setAttribute('href', newUrl);
  }

  /**
   * Save parameters in the query string to Cookie.
   *
   * @param object queries The object contains query string parameter values.
   */
  handleQueryString(queries) {
    let paramObj = {};
    const allowableQueryString = window.scCommonConstants.ALLOWABLE_QUERYSTRING.scb;
    allowableQueryString.forEach(param => {
      if (queries[param.toLowerCase()]) {
        paramObj[param] = queries[param.toLowerCase()];
      }
    });

    if (!isEmpty(paramObj)) {
      Object.keys(paramObj).forEach(key => {
        setLocalStorageWithExpiry(key, paramObj[key], 172800000); // Expiry for 2 days.
      });
    }
  }
}

const instance = new FormURL();
instance.init();
export default instance;
