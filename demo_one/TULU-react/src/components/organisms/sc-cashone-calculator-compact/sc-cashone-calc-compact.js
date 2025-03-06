import {
  calculateRanges,
  handleCalculatorAnalytics,
  debounceEvents,
  initializeSlider,
  validateInput,
  convertNumbers,
  calculateEIR
} from '../../../js/sc-common-methods';
class ScCashOnePlCalculator {
  init() {
    let that = this;
    let calculatorList = document.querySelectorAll('.sc-cashone-pl-calc-compact');
    let total = calculatorList.length;
    if (!total) return;
    that.calculator = calculatorList[total - 1];
    that.loanPeriodInputs = that.calculator.querySelectorAll('.sc-radio-box__input');
    that.loanPeriod = that.calculator.getAttribute('data-loan-period');
    that.interestRate = Number(that.calculator.getAttribute('data-apr'));
    that.eirFee = Number(that.calculator.getAttribute('data-eir-fee'));
    that.cashBackObj = JSON.parse(that.calculator.getAttribute('data-cashback'));

    initializeSlider(that.calculator, '.sc-cashone-pl-calc-compact__slider-main');
    that.handleSlider();
    that.handleTextBox();
    that.handleRadioButtons();
    that.calculateResult();
  }

  /**
   * handle selected option value with
   */
  handleRadioButtons() {
    let that = this;
    if (that.loanPeriodInputs.length) {
      that.loanPeriodInputs.forEach(function(input) {
        input.addEventListener('change', function() {
          that.calculateResult();
          that.handleCalculatorSubmitCall();
        });
      });
    }
  }

  /**
   * handle text box value with input, focus and blur event
   */
  handleTextBox() {
    let that = this;
    const allInput = that.calculator.querySelectorAll('input.sc-cashone-pl-calc-compact__input');
    if (allInput.length) {
      allInput.forEach(function(el) {
        let initValue = 0;
        el.addEventListener('focus', function(event) {
          let value = event.target.value.replace(/,/gi, '');
          event.target.value = value;
          initValue = value;
          if (!Number(initValue)) {
            event.target.value = '';
          }
          that.sliderLoad = false;
        });

        el.addEventListener('input', function(event) {
          let className = event.target.className.split(' ');
          let sliderClass = className[className.length - 1].slice(0, -6);

          validateInput(
            that.calculator,
            that.calculator.querySelector(`.${sliderClass}`)
              ? sliderClass
              : className[className.length - 1],
            event.target
              .closest('.sc-cashone-pl-calc-compact__slider-main')
              .querySelector('.sc-cashone-pl-calc-compact__prompt-msg'),
            'hide'
          );
          that.calculateResult();
        });

        //Blur Event
        el.addEventListener('blur', function(event) {
          let className = event.target.className;
          className = className.split(' ');
          className = className[className.length - 1];

          const errorSelector = event.target
            .closest('.sc-cashone-pl-calc-compact__slider-main')
            .querySelector('.sc-cashone-pl-calc-compact__prompt-msg');
          if (errorSelector) {
            errorSelector.classList.add('hide');
          }

          const value = Number(event.target.value.replace(/[^0-9]+/gi, ''));
          let sliderClass = className.slice(0, -6);
          let sliderSelector = that.calculator.querySelector(`.${sliderClass}`),
            minValue;
          if (sliderSelector) {
            //Slider exist
            minValue = Number(sliderSelector.getAttribute('data-min').replace(/[^0-9]+/gi, ''));
          } else {
            minValue = Number(event.target.getAttribute('data-min').replace(/[^0-9]+/gi, ''));
          }
          if (value < minValue) {
            event.target.value = convertNumbers(that.calculator, minValue);
          } else {
            event.target.value = convertNumbers(that.calculator, value);
          }
          that.calculateResult();
        });

        el.addEventListener('keyup', function(event) {
          if (event.key === 'Enter') {
            event.target.blur();
          }
        });
      });
    }
  }

  /**
   * calculate the result based on user input and excel logic sheet
   */
  calculateResult() {
    let that = this;
    const resultAprRate = that.calculator.querySelector('.apr-rate'),
      resultMonthlyRepayment = that.calculator.querySelector('.monthly-repayment'),
      resultTotalCashback = that.calculator.querySelector('.cashback-amount'),
      resultEirValue = that.calculator.querySelector('.eir-value');

    let errorFound = false;
    const errorList = that.calculator.querySelectorAll('.sc-cashone-pl-calc-compact__prompt-msg');
    for (let i = 0; i < errorList.length; i++) {
      if (!errorList[i].className.includes('hide')) {
        errorFound = true;
        break;
      }
    }
    if (errorFound) {
      //if error found, reset all of the result section
      if (resultAprRate) resultAprRate.innerHTML = 0;
      if (resultMonthlyRepayment) resultMonthlyRepayment.innerHTML = 0;
      if (resultTotalCashback) resultTotalCashback.innerHTML = 0;
      if (resultEirValue) resultEirValue.innerHTML = 0;
      return;
    }

    const amount = parseInt(
      that.calculator
        .querySelector('.sc-cashone-pl-calc-compact__input--amount-value')
        .value.replace(/,/g, '')
    );
    let tenor = parseInt(that.calculator.querySelector('.sc-radio-box__input:checked').value);
    if (that.loanPeriod === 'yearly') {
      tenor *= 12;
    }

    const monthlyInstalment = (tenor * amount * (that.interestRate / 100 / 12) + amount) / tenor;
    const systemEir = calculateEIR(tenor, -monthlyInstalment, amount) * 12 * 100;
    const eir = (calculateEIR(tenor, -monthlyInstalment, amount - that.eirFee) * 12 * 100).toFixed(
      2
    );

    let restrictedCashBack = 0,
      CNYAdditionalCashback = 0;

    //Calculate restricted cash back
    if (that.loanPeriod === 'yearly') {
      tenor /= 12;
    }
    if (
      amount >= Number(that.cashBackObj.restricted['min-amount']) &&
      tenor >= Number(that.cashBackObj.restricted['min-tenure'])
    ) {
      restrictedCashBack = (Math.trunc(((amount * systemEir) / 100 / 12) * 100) / 100) * 3;

      restrictedCashBack =
        Math.min(Number(that.cashBackObj.unrestricted['max-cashback']), restrictedCashBack) +
        Number(that.cashBackObj.unrestricted['additional-amount']);
    }

    //Calculate unrestricted cash back
    const cnyObj = that.cashBackObj.cny;
    // eslint-disable-next-line no-unused-vars
    for (let index in cnyObj) {
      if (
        amount >= Number(cnyObj[index]['min-amount']) &&
        (Number(cnyObj[index]['max-amount']) === -1 ||
          amount <= Number(cnyObj[index]['max-amount'])) &&
        tenor >= Number(cnyObj[index]['min-tenure']) &&
        (Number(cnyObj[index]['max-tenure']) === -1 || tenor <= Number(cnyObj[index]['max-tenure']))
      ) {
        CNYAdditionalCashback = Number(cnyObj[index]['cashback']);
      }
    }

    //Display the result
    if (resultEirValue) resultEirValue.innerHTML = eir;
    if (resultAprRate) resultAprRate.innerHTML = that.interestRate;
    if (resultMonthlyRepayment)
      resultMonthlyRepayment.innerHTML = convertNumbers(
        that.calculator,
        monthlyInstalment.toFixed(2)
      );
    if (resultTotalCashback)
      resultTotalCashback.innerHTML = convertNumbers(
        that.calculator,
        (restrictedCashBack + CNYAdditionalCashback).toFixed(2)
      );
  }

  /**
   * handle slider slide and update the related text field value
   */
  handleSlider() {
    let that = this;
    let sliderLoaded = false;
    const allSlider = that.calculator.querySelectorAll('.sc-range-slider'),
      totalSlider = allSlider.length;
    for (let i = 0; i < totalSlider; i++) {
      //Update Slider
      allSlider[i].noUiSlider.on('slide', function(value) {
        if (!allSlider[i].getAttribute('data-decimal')) {
          value = parseInt(value, 10);
        }
        const className = '.' + allSlider[i].className.split(' ')[1] + '-value';
        const inputField = that.calculator.querySelector(`input${className}`);
        if (inputField) {
          inputField.value = convertNumbers(that.calculator, value);
        } else {
          const dropdownField = that.calculator.querySelector(`select${className}`);
          if (dropdownField) {
            //Slider related with dropdown field
            dropdownField.value = value;
          }
        }

        const errorSelector = allSlider[i]
          .closest('.sc-cashone-pl-calc-compact__slider-main')
          .querySelector('.sc-cashone-pl-calc-compact__prompt-msg');
        if (errorSelector) errorSelector.classList.add('hide');

        that.calculateResult();
      });

      allSlider[i].noUiSlider.on(
        'slide',
        debounceEvents(function() {
          if (sliderLoaded) {
            //Wait for the slider initialization
            that.handleCalculatorSubmitCall();
          }
        })
      );
    }

    setTimeout(function() {
      sliderLoaded = true;
    }, 1000);
  }

  /**
   * collect the field label name and value, pass it to the calculator adobe analytics
   */
  handleCalculatorSubmitCall() {
    let that = this;
    const labelName = ['loan amount', 'period'],
      fieldsName = ['.sc-cashone-pl-calc-compact__input--amount-value', '.sc-radio-box__input'];
    let fieldNameString = [];
    let fieldValueString = [];

    Array.from(labelName).forEach((element, index) => {
      fieldNameString.push(labelName[index]);
      if (labelName[index] === 'loan amount') {
        fieldValueString.push(
          calculateRanges('loanAmount', that.calculator.querySelector(fieldsName[index]).value)
        );
      } else if (labelName[index] === 'period') {
        const years = Number(that.calculator.querySelector(`${fieldsName[index]}:checked`).value);
        fieldValueString.push(years + (years > 1 ? ' years' : ' year'));
      }
    });

    const fieldObjectString = {
      formFieldName: fieldNameString.join(':'),
      formFieldValue: fieldValueString.join(':')
    };
    handleCalculatorAnalytics('cashone calculator', fieldObjectString);
  }
}

const instance = new ScCashOnePlCalculator();
document.addEventListener('DOMContentLoaded', () => {
  instance.init();
});

export default instance;
