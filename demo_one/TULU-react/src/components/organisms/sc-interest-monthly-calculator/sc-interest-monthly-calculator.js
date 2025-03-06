import {
  convertNumbers,
  calculateRanges,
  handleProductCalculatorSubmit,
  validateInputNoSlider
} from '../../../js/sc-common-methods';
class ScInterestMonthlyCalculator {
  init() {
    const that = this;
    const calculatorList = document.querySelectorAll('.sc-interest-monthly-calc');
    let total = calculatorList.length;
    if (!total) return;
    //The code is automatically duplicated once we add the calculator inside the splide or tnc slider and duplicated code added before the main calculator code. So if inside the slider, the same calculator code is there two times.
    that.calculator = calculatorList[total - 1];

    that.currency = that.calculator.getAttribute('data-currency');
    that.inputField = that.calculator.querySelector(
      '.sc-interest-monthly-calc__input--amount-value'
    );
    that.inputField.addEventListener('focus', event => {
      event.target.value = event.target.value.replace(/,/gi, '');
    });
    that.inputField.addEventListener('input', event => {
      validateInputNoSlider(
        event.target,
        event.target
          .closest('.sc-interest-monthly-calc__input-box')
          .querySelector('.sc-esaver__input-error'),
        true
      );

      that.calculateResult();
    });
    that.inputField.addEventListener('blur', event => {
      let value = event.target.value;
      let minValue = Number(that.inputField.getAttribute('data-min'));
      if (minValue > Number(value)) {
        value = minValue;
      }
      event.target.value = convertNumbers(that.calculator, value);
      event.target
        .closest('.sc-interest-monthly-calc__input-box')
        .querySelector('.sc-esaver__input-error')
        .classList.add('hide');

      that.calculateResult();
      that.handleCalculatorSubmitCall();
    });
    that.calculateResult();
  }

  calculateResult() {
    const that = this;
    let errorFound = false;
    const bottomElements = that.calculator.querySelectorAll('.sc-cvp__bottom');
    const errorFields = that.calculator.querySelectorAll('.sc-esaver__input-error');
    if (errorFields.length) {
      errorFields.forEach(el => {
        if (!el.classList.contains('hide')) {
          errorFound = true;
        }
      });
    }

    if (errorFound) {
      bottomElements.forEach(el => {
        el.innerHTML = `${that.currency}0`;
      });
      return;
    }

    const fundsAmount = Number(that.inputField.value.replace(/,/gi, ''));
    const balanceCapped = Number(that.calculator.getAttribute('data-eligible-balance-capped'));
    const calculatorObj = JSON.parse(that.calculator.getAttribute('data-calculator-obj'));
    const interestRate = calculatorObj.rates;
    const numberOfDays = calculatorObj.numberOfDays;
    const eligibleBalance = Math.min(fundsAmount, balanceCapped);
    const middleElements = that.calculator.querySelectorAll('.sc-cvp__middle strong');

    for (let i = 0; i < interestRate.length; i++) {
      const daysInMonth = Number(numberOfDays[i]);
      const rate = Number(interestRate[i]) / 100;
      const bottomAmount = (rate * (eligibleBalance / 365) * daysInMonth).toFixed(2);

      middleElements[i].innerHTML = `${interestRate[i]}%`;
      bottomElements[i].innerHTML =
        `${that.currency}` + convertNumbers(that.calculator, bottomAmount);
    }
  }

  handleCalculatorSubmitCall() {
    const that = this;
    const fundsAmount = Number(that.inputField.value.replace(/,/gi, ''));
    handleProductCalculatorSubmit('sc-interest-monthly-calculator', [
      {
        fieldName: 'fresh funds deposit amount',
        fieldValue: calculateRanges('loanAmount', fundsAmount)
      }
    ]);
  }
}

const instance = new ScInterestMonthlyCalculator();
instance.init();

export default instance;
