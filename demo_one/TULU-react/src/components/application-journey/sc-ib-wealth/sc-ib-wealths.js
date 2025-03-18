class ScIbWealth {
  init() {
    // Function to get query parameters
    function getQueryParam(param) {
      const urlParams = new URLSearchParams(window.location.search);
      return urlParams.get(param);
    }

    // Function to parse JSON data from the script tag
    function getOrderMappings() {
      const orderMappingsScript = document.getElementById('order-mappings');
      return JSON.parse(orderMappingsScript.textContent);
    }

    // Get the data-query-name from the order-wrapper element
    const orderWrapper = document.querySelector('.sc-ib-mortgages-content__wrapper');
    const queryName = orderWrapper.getAttribute('data-query-name'); // 'order' in this case

    // Fetch the value of the query parameter (dynamically from data-query-name)
    const codeParam = getQueryParam(queryName);

    // Get the order mappings from the embedded JSON
    const orderMappings = getOrderMappings();

    // Check if the codeParam (now koppu1 or koppu2) exists in the mappings and reorder elements
    if (codeParam && orderMappings[codeParam]) {
      const order = orderMappings[codeParam];

      // Get all banners inside the order-wrapper
      const banners = orderWrapper.querySelectorAll('.sc-ib-mortgages-content');

      // Convert NodeList to an array for easier manipulation
      const bannersArray = Array.from(banners);

      // Sort banners based on the dynamic order
      const sortedBanners = order
        .map(orderName =>
          bannersArray.find(banner => banner.getAttribute('data-order-name') === orderName)
        )
        .filter(Boolean); // Filter out any undefined values if a banner doesn't exist

      // Get the remaining banners that were not part of the dynamic order
      const remainingBanners = bannersArray.filter(
        banner => !order.includes(banner.getAttribute('data-order-name'))
      );

      // Combine sorted and remaining banners
      const finalBanners = sortedBanners.concat(remainingBanners);

      // Clear the existing content of the order-wrapper
      orderWrapper.innerHTML = '';

      // Append the banners back in the new order
      finalBanners.forEach(banner => {
        orderWrapper.appendChild(banner); // Append in the new order
      });
    }
  }
}

const instance = new ScIbWealth();
window.addEventListener('load', () => instance.init());

export default instance;
