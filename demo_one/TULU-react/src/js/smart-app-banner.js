/*global digitalData */
import SmartBanner from './../../node_modules/smart-app-banner/dist/smart-app-banner';
class SmartAppBanner {
  init() {
    let title = 'SC Mobile ';
    let country = '';
    if (typeof digitalData !== 'undefined') {
      country = digitalData.page.attributes.country;
    }
    if (country) {
      title = title + country.toUpperCase();
    }
    // eslint-disable-next-line no-undef
    new SmartBanner({
      daysHidden: 15, // days to hide banner after close button is clicked (defaults to 15)
      daysReminder: 90, // days to hide banner after "VIEW" button is clicked (defaults to 90)
      appStoreLanguage: 'us', // language code for the App Store (defaults to user's browser language)
      title: title,
      author: 'Standard Chartered Bank',
      button: 'GET',
      store: {
        ios: 'On the App Store',
        android: 'In Google Play'
      },
      price: {
        ios: 'FREE',
        android: 'FREE'
      }
      // , theme: '' // put platform type ('ios', 'android', etc.) here to force single theme on all device
      // , icon: '' // full path to icon image if not using website icon image
      //force: 'ios' // Uncomment for platform emulation
    });
  }
}

const instance = new SmartAppBanner();
instance.init();
export default instance;
