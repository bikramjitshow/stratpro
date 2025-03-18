/* eslint-disable no-unused-vars */
import {
  calculateRanges,
  convertNumbers,
  handleCalculatorAnalytics
} from '../../../js/sc-common-methods';
class ScSmartCalculator {
  init() {
    const calculatorList = document.querySelector('.sc-smart-card-calculator');
    const numbers_field = calculatorList.querySelectorAll('.sc-smart-card-calculator__input');
    numbers_field.forEach(element => {
      element.addEventListener('change', function() {
        display();
      });

      element.addEventListener('input', function() {
        // Remove any non-numeric characters
        this.value = this.value.replace(/[^0-9]/g, '');

        // Remove leading zeros unless the input is "0"
        this.value = this.value.replace(/^0+(?!$)/, '');

        correctValues();
      });
    });

    function getBonusAndOther(inputAmount) {
      const dataCashback = calculatorList.getAttribute('data-cashback');
      const data = JSON.parse(dataCashback);
      for (let i = 0; i < data.length; i++) {
        const range = data[i];
        const min = parseFloat(range.minAmount);
        const max = parseFloat(range.maxAmount);
        const amount = parseFloat(inputAmount);
        // Check if the amount is within the range
        if (amount >= min && (max === -1 || amount <= max)) {
          return {
            bonus: range.bonus,
            other: range.other
          };
        }
      }

      // If no range matches, return null or a default value
      return { bonus: '0', other: '0' };
    }
    function correctValues() {
      const bonusMerchantInput = calculatorList.querySelector(
        '.sc-smart-card-calculator__input-card-spend'
      );
      const otherSpendInput = calculatorList.querySelector(
        '.sc-smart-card-calculator__input-other-spend'
      );
      if (
        Number(bonusMerchantInput.value.replace(/[^0-9.]/gi, '')) >
          Number(bonusMerchantInput.getAttribute('data-min')) ||
        Number(bonusMerchantInput.value.replace(/[^0-9.]/gi, '')) <
          Number(bonusMerchantInput.getAttribute('data-min'))
      ) {
        bonusMerchantInput.value = convertNumbers(
          bonusMerchantInput,
          bonusMerchantInput.value.replace(/[^0-9.]/gi, '')
        );
      }
      if (
        Number(otherSpendInput.value.replace(/[^0-9.]/gi, '')) >
          Number(otherSpendInput.getAttribute('data-min')) ||
        Number(otherSpendInput.value.replace(/[^0-9.]/gi, '')) <
          Number(otherSpendInput.getAttribute('data-min'))
      ) {
        otherSpendInput.value = convertNumbers(
          otherSpendInput,
          otherSpendInput.value.replace(/[^0-9.]/gi, '')
        );
      }
      var bonusMerchantValue = bonusMerchantInput.value.replace(/[^0-9.]/gi, '');
      var otherSpendValue = otherSpendInput.value.replace(/[^0-9.]/gi, '');

      if (Number(bonusMerchantValue) > Number(bonusMerchantInput.getAttribute('data-max'))) {
        bonusMerchantInput.value = convertNumbers(
          bonusMerchantInput,
          bonusMerchantInput.getAttribute('data-max')
        );
      }
      if (Number(otherSpendValue) > Number(otherSpendInput.getAttribute('data-max'))) {
        otherSpendInput.value = convertNumbers(
          otherSpendInput,
          otherSpendInput.getAttribute('data-max')
        );
      }
    }

    function display() {
      const bonusMerchantInput = calculatorList.querySelector(
        '.sc-smart-card-calculator__input-card-spend'
      );
      const otherSpendInput = calculatorList.querySelector(
        '.sc-smart-card-calculator__input-other-spend'
      );
      var bonusMerchantValue = bonusMerchantInput.value.replace(/[^0-9.]/gi, '');
      var otherSpendValue = otherSpendInput.value.replace(/[^0-9.]/gi, '');
      let totalSpendValue = 0;
      let totalCashback = 0;

      const bonusInterestDiv = calculatorList.querySelector('.sc-smart-bonus-cashback-interest');
      const otherInterestDiv = calculatorList.querySelector('.sc-smart-other-cashback-interest');
      const totalcashbackDiv = calculatorList.querySelector('.sc-smart-total-cashback');

      if (bonusMerchantValue !== 0 || otherSpendValue !== 0) {
        totalSpendValue = parseFloat(bonusMerchantValue) + parseFloat(otherSpendValue);
        var result = getBonusAndOther(totalSpendValue);
        var resultBonus = parseFloat(result.bonus);
        var resultOther = parseFloat(result.other);
        var resultBonusCashback = (bonusMerchantValue * resultBonus) / 100;
        var resultOtherCashback = (otherSpendValue * resultOther) / 100;
        totalCashback = resultBonusCashback + resultOtherCashback;
        bonusInterestDiv.innerHTML = `<strong>${resultBonus}%</strong>`;
        otherInterestDiv.innerHTML = `<strong>${resultOther}%</strong>`;
        totalcashbackDiv.innerHTML = `<strong>S$${convertNumbers(
          totalcashbackDiv,
          totalCashback.toFixed(0)
        )}</strong>`;
      }
    }

    display();

    window.adobeDataLayer = window.adobeDataLayer || [];
    window.digitalData = window.digitalData || {};

    function handleCalculatorSubmitCall() {
      const labelName = ['card spend', 'other spend'],
        fieldsName = [
          '.sc-smart-card-calculator__input.sc-smart-card-calculator__input-card-spend',
          '.sc-smart-card-calculator__input.sc-smart-card-calculator__input-other-spend'
        ];
      let fieldNameString = [];
      let fieldValueString = [];

      Array.from(labelName).forEach((element, index) => {
        fieldNameString.push(labelName[index]);
        const inputField = calculatorList.querySelector(fieldsName[index]); // Fetch the input field
        const inputValue = inputField ? inputField.value || 0 : 0; // Get value or default to 0
        fieldValueString.push(calculateRanges('totalSpend', inputValue));
      });

      const fieldObjectString = {
        formFieldName: fieldNameString.join(':'),
        formFieldValue: fieldValueString.join(':')
      };
      handleCalculatorAnalytics('smartcard calculator', fieldObjectString);
    }

    // Select the input elements
    let firstInputValue = calculatorList.querySelector(
      '.sc-smart-card-calculator__input.sc-smart-card-calculator__input-card-spend'
    );
    let secondInputValue = calculatorList.querySelector(
      '.sc-smart-card-calculator__input.sc-smart-card-calculator__input-other-spend'
    );

    // Debounce function to delay execution

    function debounce(func, delay) {
      let timeout;
      return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), delay);
      };
    }

    // Function to handle keyup event
    function handleKeyUp() {
      handleCalculatorSubmitCall();
    }

    // Attach debounced keyup event listeners to both inputs
    firstInputValue.addEventListener('keyup', debounce(handleKeyUp, 300));
    secondInputValue.addEventListener('keyup', debounce(handleKeyUp, 300));
  }
}

const instance = new ScSmartCalculator();
document.addEventListener('DOMContentLoaded', () => {
  instance.init();
});
export default instance;
