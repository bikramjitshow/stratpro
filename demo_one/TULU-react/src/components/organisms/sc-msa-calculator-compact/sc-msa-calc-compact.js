import {
  calculateRanges,
  handleProductCalculatorSubmit,
  debounceEvents
} from '../../../js/sc-common-methods';

class ScMsaCalculatorComp {
  init() {
    const self = this;

    //Analytics code start
    const inputObject = self.inputObject();
    self.prevLoanAmount = parseInt(inputObject.defaultAmount.toString().replace(/,/g, ''), 10);
    self.fieldNames = ['currency', 'deposit amount'];
    self.fieldsArray = [];
    self.initialFieldValues = [inputObject.currency.toLowerCase(), inputObject.defaultAmount];
    Array.from(self.initialFieldValues).forEach((element, index) => {
      self.fieldsArray.push({ fieldName: self.fieldNames[index], fieldValue: element });
      if (self.fieldNames[index] == 'deposit amount') {
        this.fieldsArray[index].fieldValue = calculateRanges('loanAmount', element);
      }
    });
    //Analytics code end
    self.calculate();
    self.slider();
    self.currencyChange();
    self.currencyInputChange();
  }

  handleCalculatorSubmitCall(fieldNameValue, currentValue) {
    let fieldIndex = this.fieldsArray.findIndex(obj => obj.fieldName == fieldNameValue);
    if (fieldNameValue == 'deposit amount') {
      this.prevLoanAmount = parseInt(currentValue.toString().replace(/,/g, ''), 10);
      this.fieldsArray[fieldIndex].fieldValue = calculateRanges('loanAmount', this.prevLoanAmount);
    } else {
      this.fieldsArray[fieldIndex].fieldValue = currentValue;
    }
    handleProductCalculatorSubmit('Marathon Savings Account Calculator', this.fieldsArray);
  }

  currencyInputChange() {
    const self = this;
    const inputField = document.querySelector('.sc-msa-calculator-compact__input');
    inputField.addEventListener('keypress', function(event) {
      self.validate(event);
    });
    inputField.addEventListener('blur', function(event) {
      self.amountInputAction(event);
    });
    inputField.addEventListener('keyup', function(event) {
      if (event.keyCode == 13) {
        self.amountInputAction(event);
      }
    });
  }

  amountInputAction(event) {
    const self = this;
    const inputObject = self.inputObject();
    const minValue = inputObject.minAmount;
    const maxValue = inputObject.maxAmount;
    let value = parseInt(event.target.value.replaceAll(',', ''));
    if (value < minValue || isNaN(value)) {
      value = parseInt(minValue);
    } else if (value > maxValue) {
      value = parseInt(maxValue);
    }
    event.target.value = value.toLocaleString();
    document
      .querySelector('.sc-range-slider')
      .noUiSlider.set(parseInt(event.target.value.replaceAll(',', '')));
    self.calculate(parseInt(event.target.value.replaceAll(',', '')));
    if (this.prevLoanAmount != parseInt(event.target.value.replace(/,/g, ''), 10)) {
      self.handleCalculatorSubmitCall('deposit amount', event.target.value);
    }
  }

  validate(evt) {
    let theEvent = evt || window.event;
    let key;
    // Handle paste
    if (theEvent.type === 'paste') {
      key = event.clipboardData.getData('text/plain');
    } else {
      // Handle key press
      key = theEvent.keyCode || theEvent.which;
      key = String.fromCharCode(key);
    }
    const regex = /[0-9]/;
    if (!regex.test(key)) {
      theEvent.returnValue = false;
      if (theEvent.preventDefault) theEvent.preventDefault();
    }
  }

  currencyChange() {
    const self = this;
    const currencyRadio = document.querySelectorAll('.sc-msa-calculator-compact__radio');
    for (let i = 0; i < currencyRadio.length; i++) {
      currencyRadio[i].addEventListener('change', function(event) {
        self.calculate();
        document.querySelector('.sc-range-slider').noUiSlider.destroy();
        self.slider();
        self.handleCalculatorSubmitCall('currency', event.currentTarget.value);
      });
    }
  }

  slider() {
    const self = this;

    const inputObject = self.inputObject();
    var format = {
      range: {
        min: parseFloat(inputObject.minAmount),
        max: parseFloat(inputObject.maxAmount)
      },
      behaviour: 'snap',
      connect: 'lower',
      format: {
        // 'to' the formatted value. Receives a number.
        to: function to(value) {
          var points = parseFloat(Math.round(value * 100) / 100).toFixed(0);
          points = new Intl.NumberFormat('en-MY').format(Math.round(points));
          return points;
        },
        // 'from' the formatted value.
        // Receives a string, should return a number.
        from: function from(value) {
          return Number(value.replace(',', ''));
        }
      }
    };

    format.step = parseFloat(inputObject.stepAmount);
    format.start = parseFloat(inputObject.defaultAmount);

    const element = document.querySelector('.sc-range-slider');
    // eslint-disable-next-line no-undef
    noUiSlider.create(element, format);
    document.querySelector('.sc-msa-calculator-compact__currency').innerText =
      inputObject.currencyCode.toUpperCase() + ' ';
    document.querySelector('.sc-msa-calculator-compact__input').value = parseFloat(
      inputObject.defaultAmount
    ).toLocaleString();
    let fieldIndex = this.fieldsArray.findIndex(obj => obj.fieldName == 'deposit amount');
    this.fieldsArray[fieldIndex].fieldValue = calculateRanges(
      'loanAmount',
      inputObject.defaultAmount
    );
    this.prevLoanAmount = parseInt(inputObject.defaultAmount.toString().replace(/,/g, ''), 10);

    element.noUiSlider.on('slide', function(values) {
      document.querySelector('.sc-msa-calculator-compact__currency').innerText =
        inputObject.currencyCode.toUpperCase() + ' ';
      document.querySelector('.sc-msa-calculator-compact__input').value = values[0];

      self.calculate(parseInt(values[0].replaceAll(',', '')));
    });
    element.noUiSlider.on(
      'slide',
      debounceEvents(function(values) {
        self.handleCalculatorSubmitCall('deposit amount', values.toString());
      })
    );
  }

  /**
   * Generates a Date object with the specified end date and time based on the input parameters. Also take care for iOS/safari browsers
   *
   * @param {object} nowDateTime - The current date and time (JavaScript Date object).
   * @param {string} type - The date type or format to be used.
   * @returns {Date|null} A Date object representing the generated end date and time,
   *                      or null if either `nowDateTime` or `type` is not provided.
   */
  generateEndDateWithTime(nowDateTime = {}, type = '') {
    if (!nowDateTime || !type) return null;

    // Parse the date string manually
    const dateString =
      type +
      ' ' +
      nowDateTime.getHours() +
      ':' +
      nowDateTime.getMinutes() +
      ':' +
      nowDateTime.getSeconds();
    const parts = dateString.split(/[- :]/);
    const year = parseInt(parts[0], 10);
    const month = parseInt(parts[1] - 1, 10); // Months are 0-indexed
    const day = parseInt(parts[2], 10);
    const hour = parseInt(parts[3], 10);
    const minute = parseInt(parts[4], 10);
    const second = parseInt(parts[5], 10);

    return new Date(year, month, day, hour, minute, second);
  }

  getSplitDates(inputObject) {
    const self = this;
    let ratesArr = inputObject.msaRate;
    let newDatesSplit = [];
    for (let i = 0; i < ratesArr.length; i++) {
      let daysToMinus = 0;
      if (i !== 0) {
        for (let j = 0; j < newDatesSplit.length; j++) {
          daysToMinus += newDatesSplit[j];
        }
      }
      let upDate;
      if (i + 1 == ratesArr.length) {
        upDate = inputObject.endDate;
      } else {
        upDate = ratesArr[i].endDate;
      }
      const nowDateTime = new Date();
      const endDateWithTime = self.generateEndDateWithTime(nowDateTime, upDate);

      let diffNum = self.datediff(nowDateTime, endDateWithTime) - daysToMinus;
      if (diffNum <= 0) diffNum = 0;
      newDatesSplit.push(diffNum);
    }
    for (let j = 0; j < newDatesSplit.length; j++) {
      if (j === 0 && newDatesSplit[j] !== 0) {
        newDatesSplit[j] += 1; // adding start  day to no.of days between start and end date
      } else if (newDatesSplit[j - 1] === 0 && newDatesSplit[j] !== 0) {
        newDatesSplit[j] += 1; // adding start  day to no.of days between start and end date
      }
    }
    const nowDateTime = new Date();
    const finalEndDate = new Date(
      inputObject.endDate +
        ' ' +
        nowDateTime.getHours() +
        ':' +
        nowDateTime.getMinutes() +
        ':' +
        nowDateTime.getSeconds()
    );
    if (nowDateTime.toLocaleString() === finalEndDate.toLocaleString()) {
      newDatesSplit[newDatesSplit.length - 1] = 1;
    }
    return newDatesSplit;
  }

  datediff(first, second) {
    return Math.round((second - first) / (1000 * 60 * 60 * 24)); // returns the number of days between first and second date
  }

  selectedCurrency() {
    let selectedCurrency;
    const eleRadio = document.getElementsByName('currency');

    for (let i = 0; i < eleRadio.length; i++) {
      if (eleRadio[i].checked) selectedCurrency = eleRadio[i].value;
    }
    if (selectedCurrency == undefined) selectedCurrency = 'hkd';
    return selectedCurrency;
  }

  inputObject(firstObject = false) {
    const self = this;
    const selectedCurrency = self.selectedCurrency();
    const parentElement = document.querySelector('.sc-msa-calculator-compact');
    const fullObject = JSON.parse(parentElement.getAttribute('data-currency-details'));
    let inputObject;
    if (!firstObject) {
      for (let i = 0; i < fullObject.length; i++) {
        if (fullObject[i].currency.toLowerCase() === selectedCurrency.toLowerCase()) {
          inputObject = fullObject[i];
        }
      }
    } else {
      inputObject = fullObject[0];
    }
    return inputObject;
  }

  dates(inputObject) {
    const dateFormat =
      new Date().getDate() +
      '/' +
      (new Date().getMonth() + 1) +
      '/' +
      new Date().getFullYear() +
      ' - ' +
      new Date(inputObject.endDate).getDate() +
      '/' +
      (new Date(inputObject.endDate).getMonth() + 1) +
      '/' +
      new Date(inputObject.endDate).getFullYear();

    return dateFormat;
  }

  calculate(initialAmount) {
    const self = this;
    const inputObject = self.inputObject();
    const firstObject = self.inputObject(true);
    if (initialAmount === undefined) initialAmount = inputObject.defaultAmount;
    let amount = initialAmount;
    const nowDateTime = new Date();
    const endDateWithTime = self.generateEndDateWithTime(nowDateTime, inputObject.endDate);
    const daysLeft = self.datediff(nowDateTime, endDateWithTime) + 1; // adding start day to difference date number.
    document.querySelector('.sc-msa-calculator-compact__days').innerText = daysLeft;
    document.querySelector('.sc-msa-calculator-compact__dates').innerText = self.dates(inputObject);
    const splitDays = self.getSplitDates(inputObject);
    let nthDay = 0;

    if (inputObject.currency.toLowerCase() === 'hkd') {
      for (let x = 0; x < splitDays.length; x++) {
        const days = splitDays[x];
        for (let y = 1; y <= days; y++) {
          const today = new Date();
          today.setDate(today.getDate() + nthDay);
          const isLeapYear = self.leapYear(today.getFullYear());
          let interestDays = parseInt(inputObject.daysOfInterest);
          if (isLeapYear && interestDays === 365) interestDays += 1;
          let eachDayInterest =
            parseInt((((amount / 100) * inputObject.msaRate[x].msaRate) / interestDays) * 1000000) /
            1000000;
          amount = parseFloat(amount) + parseFloat(eachDayInterest);
          nthDay += 1;
        }
      }
    } else {
      let sDate = new Date();
      let interest = 0;
      for (let x = 0; x < splitDays.length; x++) {
        const days = splitDays[x];
        for (let y = 1; y <= days; y++) {
          if (sDate.getDate() === 1) {
            amount = parseFloat(amount) + interest;
            interest = 0;
          }
          const today = new Date();
          today.setDate(today.getDate() + nthDay);
          const isLeapYear = self.leapYear(today.getFullYear());
          let interestDays = parseInt(inputObject.daysOfInterest);
          if (isLeapYear && interestDays === 365) interestDays += 1;
          let eachDayInterest =
            parseInt((((amount / 100) * inputObject.msaRate[x].msaRate) / interestDays) * 1000000) /
            1000000;
          interest += parseFloat(eachDayInterest);
          sDate.setDate(sDate.getDate() + 1);
        }
      }
      amount = parseFloat(amount) + interest;
    }
    document
      .querySelector('.sc-msa-calculator-compact__interest')
      .querySelector('.sc-msa-calculator-compact__interest-value').innerText =
      inputObject.currencyCode.toUpperCase() +
      ' ' +
      parseInt(amount - initialAmount).toLocaleString();
    const rebateEntitled = self.cashRebate(inputObject, parseInt(initialAmount));
    if (rebateEntitled == 0) {
      document
        .querySelector('.sc-msa-calculator-compact__output-amount')
        .classList.add('msa-calculator__no-rebate');
      document.querySelectorAll('.sc-msa-calculator-compact__disclaimer')[0].classList.add('hide');
      document
        .querySelectorAll('.sc-msa-calculator-compact__disclaimer')[1]
        .classList.remove('hide');
    } else {
      document
        .querySelector('.sc-msa-calculator-compact__output-amount')
        .classList.remove('msa-calculator__no-rebate');
      document
        .querySelectorAll('.sc-msa-calculator-compact__interest')[1]
        .querySelector('.sc-msa-calculator-compact__interest-value').innerText =
        firstObject.currencyCode.toUpperCase() +
        ' ' +
        parseFloat(self.cashRebate(inputObject, parseInt(initialAmount))).toLocaleString();
      document
        .querySelectorAll('.sc-msa-calculator-compact__disclaimer')[0]
        .classList.remove('hide');
      document.querySelectorAll('.sc-msa-calculator-compact__disclaimer')[1].classList.add('hide');
    }
  }

  leapYear(year) {
    return (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
  }

  cashRebate(inputObject, amount) {
    let cashRebate = 0;
    if (inputObject.cashRebate !== undefined) {
      for (let z = 0; z < inputObject.cashRebate.length; z++) {
        if (parseFloat(amount) >= inputObject.cashRebate[z].minAmount) {
          cashRebate = inputObject.cashRebate[z].rebateAmount;
        }
      }
    }
    return parseFloat(cashRebate).toFixed(0);
  }
}

const instance = new ScMsaCalculatorComp();
document.addEventListener('DOMContentLoaded', () => {
  instance.init();
});

export default instance;
