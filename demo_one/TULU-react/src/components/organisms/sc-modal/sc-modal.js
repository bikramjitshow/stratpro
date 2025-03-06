import {
  urlBreakdown,
  isInternalDomain,
  triggerPopupViewedTagging
} from '../../../js/sc-common-methods';

/* scLiteModalOpen */
let scLiteModalElements = {};
global.scLiteModalOpen = false;
let disclaimerScLiteModalOpen = false;
global.modalTabIndex = -1;

//initialize modal class
let classNames = {
  open: 'sc-modal--show',
  close: 'is-close',
  visible: 'is-visible',
  openVisible: 'sc-modal--show is-visible',
  modal: 'sc-modal',
  scroll: 'sc-modal__scroll sc-rte',
  wrapper: 'sc-modal__wrapper',
  content: 'sc-modal__content-scroll',
  closeButtonWrapper: 'sc-modal__close',
  closeButton: 'sc-modal__close-button',
  bodyModalOpen: 'sc-modal__no-scroll',
  modalId: 'sc-modal-lightbox'
};

class ScModal {
  init() {
    let that = this;
    that.accessibility();
    //Press escape key
    document.body.addEventListener('keydown', function(evt) {
      if (evt.keyCode === 27) {
        //Menu modal not open and common modal is open
        if (!document.querySelector('.sc-hdr .sc-modal--show') && global.scLiteModalOpen) {
          evt.preventDefault();
          that.hideModal(classNames.modalId);
        }
      }
    });
    document.addEventListener('click', function(event) {
      let closeModal =
        typeof event.target.getAttribute('data-send') === 'undefined' ||
        event.target.getAttribute('data-send') === null
          ? ''
          : event.target.getAttribute('data-send').toLowerCase();

      if (
        global.scLiteModalOpen &&
        event.target.id &&
        (event.target.id == 'sc-modal-lightbox' || event.target.id == 'sc-modal-lightbox-scroll')
      ) {
        //Modal is already open and clicked outside of the modal content
        that.hideModal(classNames.modalId);
        return;
      } else if (
        global.scLiteModalOpen &&
        event.target.className &&
        (event.target.className.indexOf('sc-modal__close-button') !== -1 ||
          event.target.className.indexOf('sc-external-link-button') !== -1 ||
          event.target.className.indexOf(classNames.closeButtonWrapper) !== -1)
      ) {
        //Modal is already open and clicked close button
        that.hideModal(classNames.modalId);
        return;
      } else if (event.target.closest('a') && event.target.closest('a[data-modal-source]')) {
        event.preventDefault();
        that.modalWindow(
          event.target.closest('[data-modal-source]').getAttribute('data-modal-source')
        );
        global.scLiteModalOpen = true;
        if (event.target.closest('[data-tab-number]')) {
          global.modalTabIndex = event.target
            .closest('[data-tab-number]')
            .getAttribute('data-tab-number');
        }
      } else if (event.target.closest('a')) {
        // eslint-disable-next-line no-undef
        const href = event.target.closest('a').href;
        const urlBreak = urlBreakdown(href);
        if (!document.getElementById('adobelaunchscript') && closeModal) {
          that.hideModal(classNames.modalId);
        } else if (
          !isInternalDomain(urlBreak.domain, href) &&
          urlBreak.domain !== '' &&
          urlBreak.domain !== document.location.hostname
        ) {
          /**
           * 1. urlBreak don't contain internal domains
           * 2. urlBreak is not empty
           * 3. urlBreak is not equal to the web host
           * 4. modal is not open yet
           */
          event.preventDefault();
          if (event.target.closest('[data-tab-number]')) {
            global.modalTabIndex = event.target
              .closest('[data-tab-number]')
              .getAttribute('data-tab-number');
          }
          that.settingGlobalVar(disclaimerScLiteModalOpen, event.target.closest('a').href);
        }
      }
    });
  }

  accessibility() {
    let anchorList = document.querySelectorAll('a');
    if (anchorList.length) {
      let counter = 1;
      anchorList.forEach(anchor => {
        const urlBreak = urlBreakdown(anchor.getAttribute('href'));
        if (
          !isInternalDomain(urlBreak.domain) &&
          urlBreak.domain !== '' &&
          urlBreak.domain !== document.location.hostname
        ) {
          //True if it's an external domain
          anchor.setAttribute('data-tab-number', counter++);
          anchor.setAttribute('aria-haspopup', true);
        } else if (anchor.getAttribute('href') == '#null') {
          anchor.setAttribute('data-tab-number', counter++);
          anchor.setAttribute('aria-haspopup', true);
        }
      });
    }

    let labelList = document.querySelectorAll(`label[for]`);
    if (labelList.length) {
      for (let i = 0; i < labelList.length; i++) {
        let id = labelList[i].getAttribute('for');
        if (
          document.getElementById(id) &&
          typeof labelList[i].className === 'string' &&
          typeof labelList[i].className.includes !== 'undefined' &&
          labelList[i].className.indexOf('sc-btn-toggle__switch') == -1
        ) {
          if (document.getElementById(id).checked) {
            labelList[i].setAttribute('aria-expanded', true);
          } else {
            labelList[i].setAttribute('aria-expanded', false);
          }
          labelList[i].setAttribute('role', 'button');
        }
      }
      labelList.forEach(function(evt) {
        evt.addEventListener('click', function(event) {
          if (
            typeof event.target.className === 'string' &&
            typeof event.target.className.includes !== 'undefined' &&
            event.target.className.indexOf('sc-btn-toggle__switch') == -1
          ) {
            if (
              event.target.hasAttribute('aria-expanded') &&
              event.target.getAttribute('aria-expanded') == 'true'
            ) {
              event.target.setAttribute('aria-expanded', false);
            } else {
              event.target.setAttribute('aria-expanded', true);
            }
          }
        });
      });

      labelList.forEach(function(evt) {
        evt.addEventListener('keyup', function(event) {
          if (event.keyCode == 13 || event.keyCode == 32) {
            let attr = event.target.getAttribute('for');
            const checkbox = document.getElementById(`${attr}`);

            if (
              checkbox &&
              typeof event.target.className === 'string' &&
              typeof event.target.className.includes !== 'undefined' &&
              event.target.className.indexOf('sc-btn-toggle__switch') == -1
            ) {
              if (
                typeof event.target.className === 'string' &&
                typeof event.target.className.includes !== 'undefined' &&
                event.target.className.indexOf('sc-accordion-terms__header') !== -1 &&
                event.target.querySelector('a')
              ) {
                event.target.querySelector('a').click();
                event.target.querySelector('a').setAttribute('tabindex', -1);
              } else if (checkbox.checked) {
                event.target.closest('label').setAttribute('aria-expanded', false);
                checkbox.checked = false;
                const changeEvent = new Event('change');
                checkbox.dispatchEvent(changeEvent);
              } else {
                event.target.closest('label').setAttribute('aria-expanded', true);
                checkbox.checked = true;
                const changeEvent = new Event('change');
                checkbox.dispatchEvent(changeEvent);
              }
            }
          }
        });
      });
    }

    //Checkbox attribute
    let checkboxLabelList = document.querySelectorAll(`label[class='sc-btn-toggle__switch']`);
    if (checkboxLabelList.length) {
      for (let i = 0; i < checkboxLabelList.length; i++) {
        let id = checkboxLabelList[i].getAttribute('for');
        if (
          document.getElementById(id) &&
          typeof checkboxLabelList[i].className === 'string' &&
          typeof checkboxLabelList[i].className.includes !== 'undefined' &&
          checkboxLabelList[i].className.indexOf('sc-btn-toggle__switch') !== -1
        ) {
          if (document.getElementById(id).checked) {
            checkboxLabelList[i].setAttribute('aria-pressed', true);
          } else {
            checkboxLabelList[i].setAttribute('aria-pressed', false);
          }
          checkboxLabelList[i].setAttribute('role', 'button');
        }
      }
      checkboxLabelList.forEach(function(evt) {
        evt.addEventListener('click', function(event) {
          if (
            typeof event.target.className === 'string' &&
            typeof event.target.className.includes !== 'undefined' &&
            event.target.className.indexOf('sc-btn-toggle__switch') !== -1
          ) {
            if (
              event.target.hasAttribute('aria-pressed') &&
              event.target.getAttribute('aria-pressed') == 'true'
            ) {
              event.target.setAttribute('aria-pressed', false);
            } else {
              event.target.setAttribute('aria-pressed', true);
            }
          }
        });
      });

      checkboxLabelList.forEach(function(evt) {
        evt.addEventListener('keyup', function(event) {
          if (event.keyCode == 13 || event.keyCode == 32) {
            let attr = event.target.getAttribute('for');

            if (
              document.getElementById(`${attr}`) &&
              typeof event.target.className === 'string' &&
              typeof event.target.className.includes !== 'undefined' &&
              event.target.className.indexOf('sc-btn-toggle__switch') !== -1
            ) {
              if (
                typeof event.target.className === 'string' &&
                typeof event.target.className.includes !== 'undefined' &&
                event.target.className.indexOf('sc-accordion-terms__header') !== -1 &&
                event.target.querySelector('a')
              ) {
                event.target.querySelector('a').click();
                event.target.querySelector('a').setAttribute('tabindex', -1);
              } else if (document.getElementById(`${attr}`).checked) {
                document.getElementById(`${attr}`).checked = false;
                event.target.setAttribute('aria-pressed', false);
              } else {
                document.getElementById(`${attr}`).checked = true;
                event.target.setAttribute('aria-pressed', true);
              }
            }
          }
        });
      });
    }
  }

  /**
   * used for remove modal content from body
   *
   * @param {Boolean} disclaimerScLiteModalOpen
   * @param {String} url URL of the anchor tag
   * @example
   * settingGlobalVar(true, 'sc.com')
   */

  settingGlobalVar(disclaimerScLiteModalOpen, url) {
    let that = this;
    if (disclaimerScLiteModalOpen) {
      that.hideModal(classNames.modalId);
      return;
    }
    if (url) {
      that.modalWindow('external-links-disclaimer', url);
      global.scLiteModalOpen = true;
      disclaimerScLiteModalOpen = true;
    }
  }

  /**
   * used for remove modal content from body
   *
   * @example
   * hideModal('sc-modal')
   */
  hideModal(clsName) {
    if (clsName && document.querySelector(`#${clsName}`)) {
      global.scLiteModalOpen = false;
      disclaimerScLiteModalOpen = false;
      document.querySelector(`#${clsName}`).remove();
      document.querySelector('html').classList.remove(classNames.bodyModalOpen);
      if (document.querySelector(`[data-tab-number="${global.modalTabIndex}"]`)) {
        document
          .querySelector(`[data-tab-number="${global.modalTabIndex}"]`)
          .setAttribute('tabindex', '0');
        document.querySelector(`[data-tab-number="${global.modalTabIndex}"]`).focus();
        document.querySelector(`[data-tab-number="${global.modalTabIndex}"]`).blur();
        global.modalTabIndex = -1;
      }
    }
  }

  /**
   * create div element for modal and push it inside body
   *
   * @example
   * setupElements()
   */
  setupElements() {
    let that = this;
    that.hideModal(classNames.modalId);
    scLiteModalElements.modal = that.createDiv(classNames.modal, 'id=sc-modal-lightbox');
    scLiteModalElements.scroll = that.createDiv(classNames.scroll, 'id=sc-modal-lightbox-scroll');
    scLiteModalElements.wrapper = that.createDiv(classNames.wrapper);
    scLiteModalElements.content = that.createDiv(classNames.content, 'data-send=key-pressed');
    scLiteModalElements.closeButtonWrapper = that.createDiv(classNames.closeButtonWrapper);
    scLiteModalElements.closeButton = that.createDiv(
      classNames.closeButton,
      'data-send=close-modal;aria-label=Modal Close;title=Modal Close',
      'button'
    );

    scLiteModalElements.modal.appendChild(scLiteModalElements.scroll);
    scLiteModalElements.scroll.appendChild(scLiteModalElements.wrapper);
    scLiteModalElements.wrapper.appendChild(scLiteModalElements.content);
    scLiteModalElements.wrapper.appendChild(scLiteModalElements.closeButtonWrapper);
    scLiteModalElements.closeButtonWrapper.appendChild(scLiteModalElements.closeButton);
    document.querySelector('body').appendChild(scLiteModalElements.modal);
    document.querySelector(`#${classNames.modalId}`).classList.add(`${classNames.open}`);
    document.querySelector('html').classList.add(classNames.bodyModalOpen);
  }

  /**
   * create div element for modal
   *
   * @param {String} className html elements class name
   * @param {String} data html elements attributes
   * @example
   * createDiv('sc-modal', 'id=id=sc-modal-lightbox')
   */
  createDiv(className, data, type = 'div') {
    let dataAttribute = data || '';
    let element = document.createElement(type);
    element.setAttribute('class', className);
    if (dataAttribute) {
      //true if attributes exists
      dataAttribute = dataAttribute.split(';');
      for (let i = 0; i < dataAttribute.length; i++) {
        let attrList = dataAttribute[i].split('=');
        element.setAttribute(attrList[0], attrList[1]);
      }
    }
    return element;
  }

  /**
   * Open the modal window
   *
   * @param {String} modalSource Data modal id
   * @param {String} externalURL external link URL
   * @example
   * modalWindow('external-links-disclaimer', 'https://www.facebook.com/StandardChartered')
   */
  modalWindow(modalSource, externalURL = null) {
    let that = this;
    that.setupElements();

    const modalElement = document.querySelector(`[data-modal-id="${modalSource}"]`);

    if (modalElement === null || typeof modalElement === 'undefined') {
      //if data-modal-id attribute not exist then it will return
      return;
    }
    //select modal content and push it inside sc-modal__content class
    let modalContent = modalElement.cloneNode(true);

    //Small class added if data-size='small' exist inside the modal content
    const dataSize = modalElement.getAttribute('data-size');
    const wrapperSelector = document.querySelector('.sc-modal .sc-modal__wrapper');
    if (dataSize && dataSize === 'small') {
      wrapperSelector?.classList.add('sc-modal__wrapper--small');
    } else if (dataSize && dataSize === 'medium') {
      wrapperSelector?.classList.add('sc-modal__wrapper--medium');
    }

    //Analytics code here for popup view
    setTimeout(() => {
      let modalAnalytics = document.querySelector('.sc-modal .sc-modal__content[data-popup-name]');
      if (modalAnalytics) {
        const popupName = modalAnalytics.getAttribute('data-popup-name');
        triggerPopupViewedTagging(popupName);
      }
    }, 500);

    let innerModal = modalContent.querySelectorAll('[data-modal-id]'); //list of inner modal
    for (let i = 0; i < innerModal.length; i++) {
      if (modalContent.querySelectorAll('[data-modal-id]').length) {
        //checking inner modal exist or not and remove it
        modalContent.querySelector('[data-modal-id]').remove();
      }
    }
    document
      .querySelector(`#${classNames.modalId} .${classNames.wrapper} .${classNames.content}`)
      .appendChild(modalContent);

    let externalLinkBtn = document.querySelector(`#${classNames.modalId} .sc-external-link-button`);
    if (externalURL && externalLinkBtn) {
      //append external link inside href attributes
      externalLinkBtn.setAttribute('href', externalURL);
    }

    const modalTitle = document.querySelector('.sc-modal .sc-modal__wrapper .sc-title');
    if (modalTitle) {
      modalTitle.setAttribute('tabindex', '0');
      modalTitle.focus();
      modalTitle.blur();
    }
    const content = document.querySelector('.sc-modal .sc-modal__content');
    if (content) {
      content.setAttribute('tabindex', '0');
      content.focus();
      content.blur();
      content.removeAttribute('tabindex');
    }

    setTimeout(function() {
      let wistiaId = document.querySelector('.sc-modal .wistia_embed .w-big-play-button');
      if (wistiaId) {
        wistiaId.click();
      }
    }, 500);

    that.removeLinkTag();
  }

  /**
   * remove link tag from modal window
   *
   * @example
   * removeLinkTag()
   */
  removeLinkTag() {
    let linkList = document.querySelectorAll('.sc-modal link');
    if (linkList.length) {
      for (let i = 0; i < linkList.length; i++) {
        linkList[i].remove();
      }
    }
  }
}

const instance = new ScModal();
instance.init();

export default instance;
