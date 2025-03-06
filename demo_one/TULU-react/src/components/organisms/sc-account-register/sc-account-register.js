class ScAccountRegister {
  init() {
    const that = this;
    that.accountRegister = document.querySelector('.sc-account-register');
    if (!that.accountRegister) return;

    that.accountNumber = that.accountRegister.querySelector(
      '.sc-account-register__input--account-no'
    );
    that.registerBtn = that.accountRegister.querySelector('.sc-account-register__btn-link');
    that.registerBtn.addEventListener('click', event => {
      event.preventDefault();
      event.stopPropagation();
      if (!that.eSaverFormValidation()) return;
      that.sendFormData();
    });

    that.accountNumber.addEventListener('input', () => {
      const value = that.accountNumber.value;
      const errorElement = that.accountRegister.querySelector(
        '.sc-account-register__status--error'
      );
      if (value.length === 10) {
        errorElement.classList.add('hide');
      }
    });
  }

  sendFormData() {
    const that = this;
    //Need to pass the XML data
    const xml = that.prepareXMLData();
    const form_id = that.accountRegister.getAttribute('data-form-id');
    const ofp_endpoint = that.accountRegister.getAttribute('data-url');
    const msg = that.accountRegister.querySelector('.sc-account-register__status');
    const xhr = new XMLHttpRequest();
    xhr.open('POST', ofp_endpoint, true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF8');
    xhr.onload = function(res) {
      if (xhr.status === 200) {
        const htmlObject = res.target.responseText;
        const failedIndex = htmlObject.indexOf('Failed');
        if (failedIndex >= 0) {
          const failureHtml =
            '<div class="sc-account-register__status--error">' +
            that.accountRegister.getAttribute('data-failure-message') +
            '</div>';
          msg.innerHTML = failureHtml;
          msg.classList.remove('hide');
          return false;
        }
        const newFid = form_id.toUpperCase();
        const startPoint = htmlObject.indexOf(newFid);
        const endPoint = htmlObject.indexOf('<', startPoint);
        const sgrID = htmlObject.substring(startPoint, endPoint);
        const successHtml =
          '<div class="sc-account-register__status--success">' +
          that.accountRegister.getAttribute('data-success-message') +
          ' <span class="sgrID">' +
          sgrID +
          '</span></div>';
        msg.innerHTML = successHtml;
        msg.classList.remove('hide');
        const allFormBlock = document.querySelectorAll('.sc-account-register__form');
        if (allFormBlock.length) {
          for (let i = 0; i < allFormBlock.length; i++) {
            allFormBlock[i].classList.add('hide');
          }
        }
        that.registerBtn.classList.add('hide');
      } else {
        const failureHtml =
          '<div class="sc-account-register__status--error">' +
          that.accountRegister.getAttribute('data-failure-message') +
          '</div>';
        msg.innerHTML = failureHtml;
        msg.classList.remove('hide');
      }
    };

    xhr.send('formXML=' + xml.trim());
  }

  prepareXMLData() {
    const that = this;
    const currentDate = new Date();
    const monthNames = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ];
    const monthName = monthNames[currentDate.getMonth()];
    const year = currentDate.getFullYear();

    const form_id = that.accountRegister.getAttribute('data-form-id');
    const value = that.accountNumber.value;
    let xmlStr = window.modularXML;
    xmlStr = xmlStr.replace(new RegExp(`data-form-id`, 'gi'), form_id);
    xmlStr = xmlStr.replace(new RegExp(`data-account-number`, 'gi'), value);
    xmlStr = xmlStr.replace(new RegExp(`data-month-year`, 'gi'), `${monthName} ${year}`);
    return xmlStr.trim();
  }

  /**
   * Validates the eSaver form by checking the account number input.
   * Displays an error message if the input is empty or has fewer than 10 characters.
   */
  eSaverFormValidation() {
    const that = this;
    const value = that.accountNumber.value;
    const errorElement = that.accountRegister.querySelector('.sc-account-register__status--error');

    if (value === '' || value.length < 10) {
      errorElement.classList.remove('hide');
      return false;
    }
    errorElement.classList.add('hide');
    return true;
  }
}

const instance = new ScAccountRegister();
instance.init();

export default instance;
