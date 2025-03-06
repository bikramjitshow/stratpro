import {
  convertNumbers,
  validateInputNoSlider,
  handleProductCalculatorSubmit,
  calculateRanges
} from '../../../js/sc-common-methods';
class ScFirstSaverCalculator {
  init() {
    const that = this;
    const calculatorList = document.querySelectorAll('.sc-firstsaver-calc');
    let total = calculatorList.length;
    if (!total) return;
    //The code is automatically duplicated once we add the calculator inside the splide or tnc slider and duplicated code added before the main calculator code. So if inside the slider, the same calculator code is there two times.
    that.calculator = calculatorList[total - 1];
    that.currency = that.calculator.getAttribute('data-currency');
    that.handleInput();
  }

  /**
   * Handles user input for a numeric input field in the calculator, applying validation
   * and formatting rules, and updating the calculator results accordingly.
   */
  handleInput() {
    const that = this;
    const inputFields = that.calculator.querySelectorAll('.sc-calculator-tile__amount-input');
    inputFields.forEach(el => {
      el.addEventListener('focus', event => {
        event.target.value = event.target.value.replace(/,/gi, '');
      });
      el.addEventListener('input', event => {
        validateInputNoSlider(
          event.target,
          event.target
            .closest('.sc-calculator-tile__top')
            .querySelector('.sc-firstsaver-calc__error-msg'),
          true
        );

        that.calculateResult();
      });
      el.addEventListener('blur', event => {
        let value = event.target.value;
        let minValue = Number(el.getAttribute('data-min'));
        if (minValue > Number(value)) {
          value = minValue;
        }
        event.target.value = convertNumbers(that.calculator, value);
        event.target
          .closest('.sc-calculator-tile__top')
          .querySelector('.sc-firstsaver-calc__error-msg')
          .classList.add('hide');
        that.calculateResult();
        that.handleCalculatorSubmitCall();
      });
    });

    that.calculateResult();
  }

  /**
   *  calculate bonusSaver calculator data
   */
  calculateResult() {
    const that = this;
    const resultTotalInterest = that.calculator.querySelector(
      '.sc-firstsaver-calc__total-interest'
    );
    const resultCashback = that.calculator.querySelector('.sc-firstsaver-calc__annual-cashback');
    const resultTotal = that.calculator.querySelector('.sc-firstsaver-calc__total');
    let errorFound = false;
    const errorMsgs = that.calculator.querySelectorAll(
      '.sc-calculator-tile__top .sc-firstsaver-calc__error-msg'
    );
    errorMsgs.forEach(el => {
      if (!el.classList.contains('hide')) {
        errorFound = true;
      }
    });
    if (errorFound) {
      resultTotalInterest.innerHTML = 0;
      resultCashback.innerHTML = 0;
      resultTotal.innerHTML = 0;
      return;
    }

    const dailyBalance = Number(
      that.calculator.querySelector('.sc-calculator-tile__daily-balance').value.replace(/,/gi, '')
    );
    const monthlySpend = Number(
      that.calculator.querySelector('.sc-calculator-tile__monthly-spend').value.replace(/,/gi, '')
    );
    const prevailingInterest =
      Number(that.calculator.getAttribute('data-prevailing-interest')) / 100;
    const signupBonus = Number(that.calculator.getAttribute('data-signup-bonus')) / 100;
    const cashback = Number(that.calculator.getAttribute('data-cashback')) / 100;

    const estimatedTotalInterest =
      dailyBalance * prevailingInterest + dailyBalance * (signupBonus / 365) * 182;
    const estimatedAnnualCashback = monthlySpend * cashback * 12;

    resultTotalInterest.innerHTML = convertNumbers(
      that.calculator,
      estimatedTotalInterest.toFixed(2)
    );
    resultCashback.innerHTML = convertNumbers(that.calculator, estimatedAnnualCashback.toFixed(2));
    resultTotal.innerHTML = convertNumbers(
      that.calculator,
      (estimatedTotalInterest + estimatedAnnualCashback).toFixed(2)
    );
  }

  /**
   * Gathers form input values from a calculator and submits the data for further processing.
   */
  handleCalculatorSubmitCall() {
    const that = this;
    const dailyBalance = Number(
      that.calculator.querySelector('.sc-calculator-tile__daily-balance').value.replace(/,/gi, '')
    );
    const monthlySpend = Number(
      that.calculator.querySelector('.sc-calculator-tile__monthly-spend').value.replace(/,/gi, '')
    );
    handleProductCalculatorSubmit('sc-firstsaver-calculator', [
      {
        fieldName: 'Average Daily Balance',
        fieldValue: calculateRanges('dailyBalance', dailyBalance)
      },
      {
        fieldName: 'Monthly Spend',
        fieldValue: calculateRanges('monthlyIncome', monthlySpend)
      }
    ]);
  }
}

const instance = new ScFirstSaverCalculator();
instance.init();

export default instance;
