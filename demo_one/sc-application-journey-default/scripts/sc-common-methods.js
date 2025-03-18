class ScCommonMethods {
  /**
   * getQueryParam method is created because "new URLSearchParams()"" not support in IOS
   * search specific param from the queryString, if found it return value, else return empty
   * @example
   * getQueryParam('subChanCode=2023&referId=xyz&pid=123', 'referId')
   */
  getQueryParam(queryString, paramName) {
    // Split the query string into an array of key-value pairs
    const queryParamsList = queryString.split("&");
    let paramValue = "";

    // eslint-disable-next-line no-unused-vars
    for (const param of queryParamsList) {
      const [key, value] = param.split("=");
      if (key === paramName) {
        //it's case sensitive
        paramValue = value;
        break; // No need to continue once 'referId' is found
      }
    }
    return paramValue;
  }

  /**
   * change browser URL based on query string
   */
  changeURL(queryParams = "") {
    //Change Query String
    const newUrl =
      window.location.protocol +
      "//" +
      window.location.host +
      window.location.pathname +
      (queryParams ? `?${queryParams}` : ""); //Set queryString in URL

    //Change URL based on clicked tab
    window.history.pushState(
      {
        path: newUrl,
      },
      "",
      newUrl
    );
  }

  /**
   * scroll target position with animation
   * @param {selector} target scroll to the target class
   * @param {Number} duration scroll time in ms
   * @param {Number} margin negative value form top
   * @param {selector} scrollStart parent class name which is responsible for scroll
   * @example
   * scroll(document.querySelector(`.sc-offers-nearby-stores__title`), 500, 90, document.querySelector(".sc-offers-details"))
   */
  smoothScroll(target, duration, width = 0, scrollStart = window) {
    if (!target) return;
    let that = this;
    let targetPosition = target.getBoundingClientRect().top - width;
    let startPosition = scrollStart === window ? window.pageYOffset : 0;
    let startTime = null;
    const animation = (currentTime) => {
      if (startTime === null) startTime = currentTime;
      let timeElapsed = currentTime - startTime;
      let run = that.ease(timeElapsed, startPosition, targetPosition, duration);
      scrollStart.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    };
    requestAnimationFrame(animation);
  }
  ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  }
}

const instance3 = new ScCommonMethods();

// export default instance;
