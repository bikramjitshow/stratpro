import {
  convertNumbers,
  calculateRanges,
  handleProductCalculatorSubmit,
  initializeSlider,
  debounceEvents,
  validateInput
} from '../../../js/sc-common-methods';

class ScPersonalInstalmentLoanCalculator {
  init() {
    let that = this;
    let calculatorList = document.querySelectorAll('.sc-interest-pl-calculator');
    let total = calculatorList.length;
    if (!total) return;
    //The code is automatically duplicated once we add the calculator inside the splide or tnc slider and duplicated code added before the main calculator code. So if inside the slider, the same calculator code is there two times.

    that.calculator = calculatorList[total - 1];
    that.currency = that.calculator.getAttribute('data-currency');
    that.sliderLoad = false;

    that.handleSlider();
    that.handleSliderInput();
    that.handleSliderDropdown();
    that.calculateResult();
    window.addEventListener('load', () => {
      that.sliderLoad = 1;
    });
  }

  /**
   *  calculate Personal Installment Loan Calculator data
   *
   */
  calculateResult() {
    var that = this;
    let inputAmount = that.calculator.querySelector(
      '.sc-interest-pl-calculator__input--amount-value'
    );
    let inputTenor = that.calculator.querySelector(
      '.sc-interest-pl-calculator__slider-tenor-value'
    );

    if (inputAmount && !inputTenor) {
      return;
    }

    let amount = Number(inputAmount.value.replace(/[^0-9]+/g, ''));
    let tenor = Number(inputTenor.value.replace(/[^0-9]+/g, ''));

    let data = JSON.parse(that.calculator.getAttribute('data-rate-details'));
    if (data) {
      let payment = that.calculator.querySelector('.sc-interest-pl-calculator__payment');
      let aprRate = that.calculator.querySelector('.sc-interest-pl-calculator__apr');
      let interest, apr;
      let calculatorJson = data[0].aprRate;
      for (var index in calculatorJson) {
        if (
          amount >= Number(calculatorJson[index]['loanAmountMin']) &&
          (amount < Number(calculatorJson[index]['loanAmountMax']) ||
            Number(calculatorJson[index]['loanAmountMax']) === -1)
        ) {
          interest = Number(calculatorJson[index]['rate'][tenor]);
          apr = calculatorJson[index]['apr'][tenor].toFixed(2);
        }
      }
      let repayment = (amount * tenor * interest) / 100;
      let result = (amount + repayment) / tenor;
      result = parseFloat(result).toFixed(2);
      payment.textContent =
        `${that.currency} ` + (isNaN(result) ? 0 : new Intl.NumberFormat('en-MY').format(result));
      aprRate.textContent = (apr ? apr : 0) + '%';
    }
  }

  /**
   * focus, blur and input event for the slider input
   */
  handleSliderInput() {
    let that = this;
    const allInput = that.calculator.querySelectorAll('input.sc-interest-pl-calculator__input');
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
        });

        el.addEventListener('input', function(event) {
          let className = event.target.className.split(' ');
          className = className[className.length - 1];
          validateInput(
            that.calculator,
            className.slice(0, -6),
            event.target
              .closest('.sc-interest-pl-calculator__slider-main')
              .querySelector('.sc-interest-pl-calculator__error')
          );
        });

        //Blur Event
        el.addEventListener('blur', function(event) {
          let className = event.target.className;
          className = className.split(' ');
          className = className[className.length - 1].slice(0, -6);
          let value = event.target.value.replace(/,/gi, '');
          event.target.value = convertNumbers(that.calculator, value);
          let sliderSelector = that.calculator.querySelector(`.${className}`);
          let minValue = Number(sliderSelector.getAttribute('data-min'));
          if (minValue > Number(value)) {
            that.calculator
              .querySelector(`.${className}`)
              .noUiSlider.set(Number(sliderSelector.getAttribute('data-min')));
            event.target.value = convertNumbers(that.calculator, minValue);
          }

          const allError = that.calculator.querySelectorAll('.sc-interest-pl-calculator__error');
          for (let i = 0; i < allError.length; i++) {
            allError[i].classList.add('hide');
          }
          that.calculateResult();
          that.handleCalculatorSubmitCall();
        });

        el.addEventListener('keyup', function(event) {
          if (event.key === 'Enter') {
            event.target.blur();
          }
        });
      });
    }
  }

  handleSliderDropdown() {
    let that = this;
    const dropdownList = that.calculator.querySelectorAll(
      'select.sc-interest-pl-calculator__input'
    );
    dropdownList.forEach(el => {
      el.addEventListener('change', event => {
        const value = event.target.value;
        let className = event.target.className;
        className = className.split(' ');
        className = className[className.length - 1].slice(0, -6);
        that.calculator.querySelector(`.${className}`).noUiSlider.set(Number(value));
        that.calculateResult();
        that.handleCalculatorSubmitCall();
      });
    });
  }

  /**
   * initialize slider, update slider and based on the slider value, update correspondent input field
   */
  handleSlider() {
    let that = this;
    //Slider section
    const allSlider = that.calculator.querySelectorAll('.sc-range-slider');
    const totalSlider = allSlider.length;
    if (totalSlider) {
      initializeSlider(that.calculator, '.sc-interest-pl-calculator__slider-main');

      //Update Slider
      for (let i = 0; i < totalSlider; i++) {
        allSlider[i].noUiSlider.on('slide', function(value) {
          if (!allSlider[i].getAttribute('data-decimal')) {
            value = parseInt(value);
          }
          const className = allSlider[i].className.split(' ')[1] + '-value';
          that.calculator.querySelector(`.${className}`).value = convertNumbers(
            that.calculator,
            value
          );
          that.calculateResult();
        });
        allSlider[i].noUiSlider.on(
          'slide',
          debounceEvents(function() {
            if (that.sliderLoad) {
              that.handleCalculatorSubmitCall();
            }
          })
        );
      }
    }
  }

  //Analytics code
  handleCalculatorSubmitCall() {
    const that = this;
    let fieldsArray = [];
    fieldsArray.push({
      fieldName: 'Loan Amount',
      fieldValue: calculateRanges(
        'loanAmount',
        that.calculator.querySelector('.sc-interest-pl-calculator__input--amount-value').value
      )
    });
    fieldsArray.push({
      fieldName: 'Tenor',
      fieldValue:
        that.calculator.querySelector('.sc-interest-pl-calculator__slider-tenor-value').value +
        ' Months'
    });
    handleProductCalculatorSubmit('Personal Installment Loan Calculator', fieldsArray);
  }
}

const instance = new ScPersonalInstalmentLoanCalculator();
document.addEventListener('DOMContentLoaded', () => {
  instance.init();
});

export default instance;
