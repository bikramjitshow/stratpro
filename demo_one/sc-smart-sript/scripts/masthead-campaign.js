/* global Utils */

class MastheadCampaign {
  init() {
    let jsonSelector = document.querySelector('#masthead-campaign-json');
    const width =
      window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if (jsonSelector) {
      let jsonData = JSON.parse(jsonSelector.innerHTML);
      let queryString = Utils.getPageContext().queryString;
      if (!queryString) return;
      let queryParam = jsonSelector.getAttribute('data-query-parameter');
      if (!queryParam) return;
      let queryStringList = queryString.split('&');

      // eslint-disable-next-line no-unused-vars
      for (let element in queryStringList) {
        let data = queryStringList[element].trim().split('=');
        if (data[0].toLowerCase() === queryParam.toLowerCase()) {
          //found campaign in the URL
          // eslint-disable-next-line no-unused-vars
          for (let json in jsonData) {
            if (
              jsonData[json].campaignCode &&
              jsonData[json].campaignCode.toLowerCase() === data[1].toLowerCase()
            ) {
              let banner = document.querySelector('.sc-bnr');
              if (!banner) break;

              //Picture
              let bannerPicture = banner.querySelector('.sc-bnr__bg-wrapper');
              if (bannerPicture) {
                bannerPicture
                  .querySelector('img')
                  .setAttribute(
                    'src',
                    width < 768 && jsonData[json].banner.mobileImage
                      ? jsonData[json].banner.mobileImage
                      : jsonData[json].banner.desktopImage
                  );

                //Change lazy load image source
                let allMedia = bannerPicture.querySelectorAll('source');
                if (allMedia.length) {
                  for (let i = 0; i < allMedia.length; i++) {
                    let media = allMedia[i].getAttribute('media');
                    if (media) {
                      allMedia[i].setAttribute(
                        'srcSet',
                        media.toLowerCase() === '(min-width: 768px)' &&
                          jsonData[json].banner.mobileImage
                          ? jsonData[json].banner.mobileImage
                          : jsonData[json].banner.desktopImage
                      );
                    }
                  }
                }
              }

              //title, description and other information
              let title = banner.querySelector('.sc-bnr-title');
              if (title) {
                title.innerHTML = jsonData[json].banner.title;
              }

              let summary = banner.querySelector('.sc-bnr-summary');
              if (summary) {
                summary.innerHTML = jsonData[json].banner.summary;
              }

              let description = banner.querySelector('.sc-bnr-desc');
              if (description) {
                description.innerHTML = jsonData[json].banner.description;
              }

              let button = banner.querySelector('.sc-bnr-buttons a');
              if (button) {
                if (width > 767) {
                  button.setAttribute('href', jsonData[json].banner.cta[0].ctaLink);
                  button.setAttribute('title', jsonData[json].banner.cta[0].ctaLabel);
                } else {
                  button.setAttribute('href', jsonData[json].banner.cta[0].ctaMobileLink);
                  button.setAttribute('title', jsonData[json].banner.cta[0].ctaMobileLabel);
                }

                button.setAttribute('target', jsonData[json].banner.cta[0].ctaTarget);
                let onlyDesktop = button.querySelector('.only-desktop');
                if (onlyDesktop) onlyDesktop.innerHTML = jsonData[json].banner.cta[0].ctaLabel;

                let onlyMobile = button.querySelector('.only-mobile');
                if (onlyMobile) onlyMobile.innerHTML = jsonData[json].banner.cta[0].ctaMobileLabel;
              }

              let modalText = banner.querySelector('.sc-products-list-expand__tile-title');
              if (modalText) {
                modalText.innerHTML = jsonData[json].banner.additionalInfoDetails;
              }

              //QR code
              let qrCode = banner.querySelector('.sc-bnr__qr-code-image');
              if (qrCode) {
                let qrImage = qrCode.querySelector('img');
                if (qrImage) {
                  qrImage.setAttribute('src', jsonData[json].banner.qrImage);
                  qrImage.setAttribute('srcset', jsonData[json].banner.qrImage);
                }
                let qrText = qrCode.querySelector('.sc-bnr__qr-code-text');
                if (qrText) {
                  qrText.innerHTML = jsonData[json].banner.qrText;
                }
              }
              break;
            }
          }
          break;
        }
      }
    } else {
      jsonSelector = document.querySelector('#masthead-campaign-modules-json');
      if (!jsonSelector) return;
      let jsonData = JSON.parse(jsonSelector.innerHTML);

      let queryString = Utils.getPageContext().queryString;
      if (!queryString) return;
      let queryParam = jsonSelector.getAttribute('data-query-parameter');
      if (!queryParam) return;
      let queryStringList = queryString.split('&');

      // eslint-disable-next-line no-unused-vars
      for (let element in queryStringList) {
        let data = queryStringList[element].trim().split('=');
        if (data[0].toLowerCase() === queryParam.toLowerCase()) {
          //found campaign in the URL
          // eslint-disable-next-line no-unused-vars
          for (let json in jsonData) {
            if (
              jsonData[json].campaignCode &&
              jsonData[json].campaignCode.toLowerCase() === data[1].toLowerCase()
            ) {
              //True if data-query-parameter value exist in the URL
              let moduleList = jsonData[json].modules[0];
              if (moduleList.length) {
                // eslint-disable-next-line no-unused-vars
                for (let module in moduleList) {
                  let moduleElement = document.querySelector(`#${moduleList[module].moduleId}`);
                  if (moduleElement) {
                    let targets = moduleList[module].targets;
                    // eslint-disable-next-line no-unused-vars
                    for (let target in targets) {
                      let targetClass = moduleElement.querySelector(targets[target].targetClass);
                      if (targetClass) {
                        //true if selector element is exist
                        if (targets[target].replacementText) {
                          targetClass.innerText = targets[target].replacementText;
                        } else if (targets[target].replacementLink) {
                          targetClass.setAttribute('href', targets[target].replacementLink);
                        } else if (
                          targets[target].replacementImage &&
                          targets[target].replacementMobileImage
                        ) {
                          let targetImage =
                            width <= 768 && targets[target].replacementMobileImage
                              ? targets[target].replacementMobileImage
                              : targets[target].replacementImage;

                          targetClass.setAttribute('src', targetImage);
                          //Change lazy load image source
                          let picture = targetClass.closest('picture');
                          if (picture) {
                            // checking picture tag is exist or not
                            let allMedia = picture.querySelectorAll('source');
                            if (allMedia.length) {
                              for (let i = 0; i < allMedia.length; i++) {
                                let media = allMedia[i].getAttribute('media');
                                if (media) {
                                  allMedia[i].setAttribute('srcSet', targetImage);
                                }
                              }
                            }
                          }
                        } else if (targets[target].replacementImage) {
                          //True if only one image exist
                          let targetImage = targets[target].replacementImage;
                          targetClass.setAttribute('srcset', '');
                          targetClass.setAttribute('src', targetImage);
                        } else if (targets[target].replacementContent) {
                          //HTML content added using script
                          targetClass.innerHTML = targets[target].replacementContent;
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}

const instance = new MastheadCampaign();
instance.init();

// export default instance;
