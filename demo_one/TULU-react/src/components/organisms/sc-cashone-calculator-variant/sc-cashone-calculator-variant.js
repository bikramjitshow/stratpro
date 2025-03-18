import {
  calculateRanges,
  handleCalculatorAnalytics,
  validateInput,
  convertNumbers,
  calculateEIR
} from '../../../js/sc-common-methods';
class ScCashOneCalculatorVariant {
  init() {
    const that = this;
    const calculatorList = document.querySelectorAll('.sc-cashone-pl-calc-variant');
    const total = calculatorList.length;
    if (!total) return;
    that.calculator = calculatorList[total - 1];
    that.loanPeriodInputs = that.calculator.querySelectorAll('.sc-radio-box__input');
    that.loanPeriod = that.calculator.getAttribute('data-loan-period');
    that.interestRate = Number(that.calculator.getAttribute('data-apr'));
    that.eirFee = Number(that.calculator.getAttribute('data-eir-fee'));
    that.cashBackObj = JSON.parse(that.calculator.getAttribute('data-cashback'));
    that.loanAmountInputs = document.querySelectorAll('.sc-amount-box__input');
    that.interestRateInput = document.querySelectorAll('.sc-select__select');
    that.cashback_multiplier = Number(that.calculator.getAttribute('data-cashback-multiplier'));

    that.handleTextBox();
    that.handleRadioButtons();
    that.handleLoanAmountButtons();
    that.handleInterestRate();
    that.setPromptMsgDefault();
    that.setNextLevelAmount();
    that.loanAmountLabel();
    that.loanPeriodLabel();
    that.calculateResult();
  }

  /**
   * handle loan amount label accessability
   */
  loanAmountLabel() {
    const that = this;
    const labelList = that.calculator.querySelectorAll('.sc-amount-box__input-label');
    labelList.forEach(label => {
      label.addEventListener('keyup', event => {
        // Check for Enter (13) or Space (32) key press
        if (event.keyCode === 13 || event.keyCode === 32) {
          const radioInput = event.target
            .closest('.sc-amount-box')
            .querySelector('.sc-amount-box__input');
          if (radioInput) {
            radioInput.checked = true;
            radioInput.dispatchEvent(new Event('change'));
          }
        }
      });
    });
  }

  /**
   * handle tenor label accessability
   */
  loanPeriodLabel() {
    const that = this;
    const labelList = that.calculator.querySelectorAll('.sc-radio-box');
    labelList.forEach(label => {
      label.addEventListener('keyup', event => {
        // Check for Enter (13) or Space (32) key press
        if (event.keyCode === 13 || event.keyCode === 32) {
          const radioInput = event.target
            .closest('.sc-radio-box')
            .querySelector('.sc-radio-box__input');
          if (radioInput) {
            radioInput.checked = true;
            radioInput.dispatchEvent(new Event('change'));
          }
        }
      });
    });
  }

  /**
   * handle selected option value for loan tenor
   */
  handleRadioButtons() {
    this.loanPeriodInputs.forEach(input => {
      input.addEventListener('change', () => {
        this.calculateResult();
        this.handleCalculatorSubmitCall();
      });
    });
  }

  /**
   * To Set Default Loan Amount
   */
  setdefaultLoanAmount() {
    this.defaultLoanAmount = this.calculator.querySelectorAll(
      '.sc-cashone-pl-calc-variant__promo-text .defaultValues'
    );
    this.defaultLoanAmount.forEach(input => {
      input.addEventListener('mousedown', () => {
        this.calculator.querySelector('.sc-cashone-pl-calc-variant__input--amount-value');
        this.cashBackObj.restricted['minAmount'];
        this.calculateResult();
        this.handleCalculatorSubmitCall();
      });
    });
  }

  /**
   * To Set Default Loan Amount
   */
  setdefaultLoanTenor() {
    this.defaultLoanAmount = this.calculator.querySelectorAll(
      '.sc-cashone-pl-calc-variant__promo-text .defaultValues'
    );
    this.defaultLoanAmount.forEach(input => {
      input.addEventListener('mousedown', () => {
        let mintenure = this.cashBackObj.restricted['minTenure'];
        document.getElementById('check-box-' + mintenure).checked = true;
        this.calculateResult();
        this.handleCalculatorSubmitCall();
      });
    });
  }
  /**
   * To Set Default Loan Amount while clicking on prompt message
   */
  setPromptMsgDefault() {
    let defaultamount = this.calculator.querySelector(
      '.sc-cashone-pl-calc-variant__prompt-amountmsg.defaultValues'
    );
    defaultamount.addEventListener('click', () => {
      this.calculator.querySelector(
        '.sc-cashone-pl-calc-variant__input--amount-value'
      ).value = this.cashBackObj.restricted['minAmount'];
      this.calculateResult();
      this.handleCalculatorSubmitCall();
    });

    let defaulttenor = this.calculator.querySelector(
      '.sc-cashone-pl-calc-variant__prompt-tenor.defaultValues'
    );
    defaulttenor.addEventListener('click', () => {
      let mintenure = this.cashBackObj.restricted['minTenure'];
      document.getElementById('check-box-' + mintenure).checked = true;
      this.calculateResult();
      this.handleCalculatorSubmitCall();
    });
  }

  /**
   * To Set Default Loan Amount and Tenor
   */
  setdefaultLoanAmountTenor() {
    this.defaultLoanAmount = this.calculator.querySelectorAll(
      '.sc-cashone-pl-calc-variant__promo-text .defaultValues'
    );
    this.defaultLoanAmount.forEach(input => {
      input.addEventListener('mousedown', () => {
        this.calculator.querySelector('.sc-cashone-pl-calc-variant__input--amount-value');
        this.cashBackObj.restricted['minAmount'];
        let mintenure = this.cashBackObj.restricted['minTenure'];
        document.getElementById('check-box-' + mintenure).checked = true;
        this.calculateResult();
        this.handleCalculatorSubmitCall();
      });
    });
  }

  /**
   * To Set Next step amount
   */
  setNextLevelAmount() {
    this.nextLevelAmount = this.calculator.querySelectorAll(
      '.sc-cashone-pl-calc-variant__promo-text .nextlevelAmount'
    );
    let nextlevelAmountValue = '';
    this.nextLevelAmount.forEach(input => {
      input.addEventListener('mousedown', () => {
        let currentAmount = this.calculator.querySelector(
          '.sc-cashone-pl-calc-variant__input--amount-value'
        ).value;
        currentAmount = Number(currentAmount.replace(/[^0-9]+/gi, ''));
        const cnyObj = this.cashBackObj.cny;
        // eslint-disable-next-line no-unused-vars
        for (let index in cnyObj) {
          if (
            currentAmount >= Number(cnyObj[index]['minAmount']) &&
            currentAmount <= Number(cnyObj[index]['maxAmount'])
          ) {
            nextlevelAmountValue = Number(cnyObj[index]['maxAmount']) + 1;
          }
        }
        if (nextlevelAmountValue < this.cashBackObj.restricted['maxAmount']) {
          this.calculator.querySelector(
            '.sc-cashone-pl-calc-variant__input--amount-value'
          ).value = nextlevelAmountValue;
          let mintenure = this.cashBackObj.restricted['minTenure'];
          document.getElementById('check-box-' + mintenure).checked = true;
          this.calculateResult();
          this.handleCalculatorSubmitCall();
        }
      });
    });
  }

  /**
   * handle selected option value for loan amount buttons
   */
  handleLoanAmountButtons() {
    this.loanAmountInputs.forEach(input => {
      input.addEventListener('change', () => {
        let loanAmountValue = document.querySelector('.sc-amount-box__input:checked').value;
        document.querySelector(
          '.sc-cashone-pl-calc-variant__input--amount-value'
        ).value = loanAmountValue;
        document
          .querySelector('.sc-cashone-pl-calc-variant__loan-amount')
          .classList.remove('loan-amount-active');
        this.calculateResult();
      });
    });
  }

  /**
   * handle InterestRate on change
   */
  handleInterestRate() {
    this.interestRateInput.forEach(input => {
      input.addEventListener('change', () => {
        let InterestRateValue = document.querySelector('.sc-select__select').value;
        this.interestRate = InterestRateValue;
        this.calculateResult();
      });
    });
  }

  /**
   * handle text box value with input, focus and blur event
   */
  handleTextBox() {
    const that = this;
    const allInput = that.calculator.querySelectorAll('input.sc-cashone-pl-calc-variant__input');
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
          document
            .querySelector('.sc-cashone-pl-calc-variant__loan-amount')
            .classList.add('loan-amount-active');
        });

        el.addEventListener('input', function(event) {
          let className = event.target.className.split(' ');
          let sliderClass = className[className.length - 1];

          validateInput(
            that.calculator,
            that.calculator.querySelector(`.${sliderClass}`)
              ? sliderClass
              : className[className.length - 1],
            event.target
              .closest('.sc-cashone-pl-calc-variant__slider-main')
              .querySelector('.sc-cashone-pl-calc-variant__prompt-msg'),
            'hide'
          );
          if (el.value == '') {
            document
              .querySelector('.sc-cashone-pl-calc-variant__loan-amount')
              .classList.add('loan-amount-active');
            document.querySelector('.sc-cashone-pl-calc-variant__right').className =
              'sc-cashone-pl-calc-variant__right sc-cashone-pl-calc-variant__right--grey';
            document.querySelector('.cashback-amount').innerHTML = '0.00';
          } else {
            document
              .querySelector('.sc-cashone-pl-calc-variant__loan-amount')
              .classList.remove('loan-amount-active');
          }
          that.calculateResult();
        });

        //Blur Event
        el.addEventListener('blur', function(event) {
          let className = event.target.className;
          className = className.split(' ');
          className = className[className.length - 1];

          const errorSelector = event.target
            .closest('.sc-cashone-pl-calc-variant__slider-main')
            .querySelector('.sc-cashone-pl-calc-variant__prompt-msg');
          if (errorSelector) {
            errorSelector.classList.add('hide');
          }

          const value = Number(event.target.value.replace(/[^0-9]+/gi, ''));
          let sliderClass = className;
          let sliderSelector = that.calculator.querySelector(`.${sliderClass}`),
            minValue;

          event.target.value = convertNumbers(that.calculator, value);
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

  /**
   * calculate the result based on user input and excel logic sheet
   */
  calculateResult() {
    const resultMonthlyRepayment = this.calculator.querySelector('.monthly-repayment'),
      resultTotalCashback = this.calculator.querySelector('.cashback-amount'),
      resultEirValue = this.calculator.querySelector('.eir-value');

    let errorFound = false;
    const errorList = this.calculator.querySelectorAll('.sc-cashone-pl-calc-variant__prompt-msg');
    for (let i = 0; i < errorList.length; i++) {
      if (!errorList[i].className.includes('hide')) {
        errorFound = true;
        break;
      }
    }
    if (errorFound) {
      //if error found, reset all of the result section
      if (resultMonthlyRepayment) resultMonthlyRepayment.innerHTML = 0;
      if (resultTotalCashback) resultTotalCashback.innerHTML = 0;
      if (resultEirValue) resultEirValue.innerHTML = 0;
      return;
    }

    const amount = parseInt(
      this.calculator
        .querySelector('.sc-cashone-pl-calc-variant__input--amount-value')
        .value.replace(/,/g, '')
    );
    let tenor = parseInt(this.calculator.querySelector('.sc-radio-box__input:checked').value);
    if (this.loanPeriod === 'yearly') {
      tenor *= 12;
    }
    const monthlyInstalment = (tenor * amount * (this.interestRate / 100 / 12) + amount) / tenor;
    const systemEir = calculateEIR(tenor, -monthlyInstalment, amount) * 12 * 100;
    const eir = (calculateEIR(tenor, -monthlyInstalment, amount - this.eirFee) * 12 * 100).toFixed(
      2
    );

    //Calculate restricted cash back
    if (this.loanPeriod === 'yearly') {
      tenor /= 12;
    }
    //Display the result
    if (resultEirValue) resultEirValue.innerHTML = eir;
    //if (resultAprRate) resultAprRate.innerHTML = that.interestRate;
    if (resultMonthlyRepayment)
      resultMonthlyRepayment.innerHTML = convertNumbers(
        this.calculator,
        monthlyInstalment.toFixed(2)
      );
    if (resultTotalCashback)
      var InterestRatevalue =
        (Math.trunc(((amount * systemEir) / 100 / 12) * 100) / 100) * this.cashback_multiplier;

    InterestRatevalue = Math.min(
      Number(this.cashBackObj.unrestricted['maxCashback']),
      InterestRatevalue
    );

    let restrictedMinAmount = Number(this.cashBackObj.restricted['minAmount']);
    let restrictedMintenor = Number(this.cashBackObj.restricted['minTenure']);

    if (tenor < restrictedMintenor || amount < restrictedMinAmount) {
      resultTotalCashback.innerHTML = 0;
    } else {
      InterestRatevalue = Math.trunc(InterestRatevalue);
      resultTotalCashback.innerHTML = convertNumbers(
        this.calculator,
        InterestRatevalue.toFixed(2).replace('.00', '')
      );
    }
    this.changeBackground(amount, tenor);
  }
  changeBackground(amount, tenor) {
    const cnyObj = this.cashBackObj.cny;
    // eslint-disable-next-line no-unused-vars
    for (let index in cnyObj) {
      if (
        (amount >= Number(cnyObj[index]['minAmount']) &&
          amount <= Number(cnyObj[index]['maxAmount'])) ||
        (tenor >= Number(cnyObj[index]['minTenure']) && tenor <= Number(cnyObj[index]['maxTenure']))
      ) {
        if (
          amount >= Number(cnyObj[index]['minAmount']) &&
          (Number(cnyObj[index]['maxAmount']) === -1 ||
            amount <= Number(cnyObj[index]['maxAmount'])) &&
          tenor >= Number(cnyObj[index]['minTenure']) &&
          (Number(cnyObj[index]['maxTenure']) === -1 || tenor <= Number(cnyObj[index]['maxTenure']))
        ) {
          document
            .querySelector('.sc-cashone-pl-calc-variant__right')
            .classList.remove('sc-cashone-pl-calc-variant__right--blue');
          document
            .querySelector('.sc-cashone-pl-calc-variant__right')
            .classList.remove('sc-cashone-pl-calc-variant__right--dark-blue');
          document
            .querySelector('.sc-cashone-pl-calc-variant__right')
            .classList.remove('sc-cashone-pl-calc-variant__right--grey');
          document
            .querySelector('.sc-cashone-pl-calc-variant__right')
            .classList.remove('sc-cashone-pl-calc-variant__right--green-gradiant');
          document
            .querySelector('.sc-cashone-pl-calc-variant__promo-box')
            .classList.remove('sc-cashone-pl-calc-variant__promo-box--blue');
          let blockcolorname = 'sc-cashone-pl-calc-variant__' + cnyObj[index]['rightBlockColour'];
          document
            .querySelector('.sc-cashone-pl-calc-variant__right')
            .classList.add(blockcolorname);
          let bottomblockcolorname =
            'sc-cashone-pl-calc-variant__promo-box' + cnyObj[index]['bottomBlockColour'];
          document
            .querySelector('.sc-cashone-pl-calc-variant__promo-box')
            .classList.add(bottomblockcolorname);
          document
            .querySelector('.sc-cashone-pl-calc-variant__promo-icon-img')
            .setAttribute('src', cnyObj[index]['bottomBlockImage']);
          document.querySelector('.sc-cashone-pl-calc-variant__promo-text').innerHTML =
            cnyObj[index]['infoBottom'];
          this.setNextLevelAmount();
          let list = document.querySelectorAll(
            '.sc-modal__content .sc-reward-tile__circle.sc-reward-tile__circle--bord-green'
          );
          for (let i = 0; i < list.length; ++i) {
            //list[i].classList.add(cnyObj[index]['popupblockcolor']);
            list[i].className =
              'sc-reward-tile__circle sc-reward-tile__circle--bord-green sc-reward-tile__circle--outline ' +
              cnyObj[index]['popupblockcolor'];
          }
          this.setdefaultLoanAmount();
          let splideId = this.calculator.getAttribute('data-splide-id');
          let splidIndex = Number(cnyObj[index]['splideIndex']);
          if (document.querySelector(splideId)) {
            // eslint-disable-next-line no-undef
            let splide = new Splide(splideId).mount();
            splide.go(splidIndex);
            splide.refresh();
          }
          document.querySelector('.sc-cashone-pl-calc-variant__cashbackrate').innerHTML =
            cnyObj[index]['cashbackRate'];
          document.querySelector('.cashback-amount').innerHTML = convertNumbers(
            this.calculator,
            ((amount / 100) * cnyObj[index]['cashbackRate']).toFixed(2)
          ).replace('.00', '');
          document
            .querySelector('.sc-cashone-pl-calc-variant__cashbackrate-block')
            .classList.remove('sc-cashone-pl-calc-variant__cashbackrate-block-hide');
          document.querySelector('.sc-cashone-pl-calc-variant__prompt-tenor').classList.add('hide');
          document
            .querySelector('.sc-cashone-pl-calc-variant__prompt-amountmsg')
            .classList.add('hide');
        }
        if (tenor < Number(cnyObj[index]['minTenure'])) {
          document
            .querySelector('.sc-cashone-pl-calc-variant__promo-box')
            .classList.add('sc-cashone-pl-calc-variant__promo-box--blue');
          document.querySelector('.sc-cashone-pl-calc-variant__promo-text').innerHTML =
            cnyObj[index]['infoBelowTenure'];
          this.setdefaultLoanTenor();
          document.querySelector('.sc-cashone-pl-calc-variant__right').className =
            'sc-cashone-pl-calc-variant__right sc-cashone-pl-calc-variant__right--grey';
          document
            .querySelector('.sc-cashone-pl-calc-variant__promo-icon-img')
            .setAttribute('src', cnyObj[index]['bottomBlockImage']);
          document
            .querySelector('.sc-cashone-pl-calc-variant__cashbackrate-block')
            .classList.add('sc-cashone-pl-calc-variant__cashbackrate-block-hide');
          document
            .querySelector('.sc-cashone-pl-calc-variant__prompt-tenor')
            .classList.remove('hide');
        }
        if (amount < this.cashBackObj.restricted['minAmount']) {
          document
            .querySelector('.sc-cashone-pl-calc-variant__promo-icon-img')
            .setAttribute('src', cnyObj[index]['bottomBlockImage']);
          document
            .querySelector('.sc-cashone-pl-calc-variant__cashbackrate-block')
            .classList.add('sc-cashone-pl-calc-variant__cashbackrate-block-hide');
          document
            .querySelector('.sc-cashone-pl-calc-variant__prompt-amountmsg')
            .classList.remove('hide');
        }
        if (
          amount < this.cashBackObj.restricted['minAmount'] &&
          tenor < this.cashBackObj.restricted['minTenure']
        ) {
          document
            .querySelector('.sc-cashone-pl-calc-variant__promo-icon-img')
            .setAttribute('src', cnyObj[index]['bottomBlockImage']);
          document.querySelector('.sc-cashone-pl-calc-variant__promo-text').innerHTML =
            cnyObj[index]['infoBelowAmountTenure'];
          this.setdefaultLoanAmountTenor();
          document
            .querySelector('.sc-cashone-pl-calc-variant__cashbackrate-block')
            .classList.add('sc-cashone-pl-calc-variant__cashbackrate-block-hide');
        }
        if (amount < this.cashBackObj.restricted['minAmount']) {
          document
            .querySelector('.sc-cashone-pl-calc-variant__prompt-amountmsg')
            .classList.remove('hide');
        }
      }
      if (amount >= this.cashBackObj.restricted['minAmount']) {
        document
          .querySelector('.sc-cashone-pl-calc-variant__prompt-amountmsg')
          .classList.add('hide');
      }
    }
  }

  /**
   * collect the field label name and value, pass it to the calculator adobe analytics
   */
  handleCalculatorSubmitCall() {
    const labelName = ['loan amount', 'period'],
      fieldsName = ['.sc-cashone-pl-calc-variant__input--amount-value', '.sc-radio-box__input'];
    let fieldNameString = [];
    let fieldValueString = [];

    Array.from(labelName).forEach((element, index) => {
      fieldNameString.push(labelName[index]);
      if (labelName[index] === 'loan amount') {
        fieldValueString.push(
          calculateRanges('loanAmount', this.calculator.querySelector(fieldsName[index]).value)
        );
      } else if (labelName[index] === 'period') {
        const years = Number(this.calculator.querySelector(`${fieldsName[index]}:checked`).value);
        fieldValueString.push(years + (years > 1 ? ' years' : ' year'));
      } else if (labelName[index] === 'interest rate') {
        fieldValueString.push(
          calculateRanges('apr', this.calculator.querySelector(fieldsName[index]).value)
        );
      }
    });

    const fieldObjectString = {
      formFieldName: fieldNameString.join(':'),
      formFieldValue: fieldValueString.join(':')
    };
    handleCalculatorAnalytics('cashone calculator', fieldObjectString);
  }
}

const instance = new ScCashOneCalculatorVariant();
document.addEventListener('DOMContentLoaded', () => {
  instance.init();
});
export default instance;
