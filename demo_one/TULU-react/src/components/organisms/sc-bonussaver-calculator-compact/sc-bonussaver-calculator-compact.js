import {
  convertNumbers,
  calculateRanges,
  handleProductCalculatorSubmit,
  getPosition,
  debounceEvents
} from '../../../js/sc-common-methods';

class ScBonusSaverCalculator {
  init() {
    let that = this;
    that.errorStatus = false;
    const calculatorList = document.querySelectorAll('.sc-bonussaver-calculator-compact');
    let total = calculatorList.length;
    if (!total) return;
    //The code is automatically duplicated once we add the calculator inside the splide or tnc slider and duplicated code added before the main calculator code. So if inside the slider, the same calculator code is there two times.
    that.calculator = calculatorList[total - 1];
    that.currencySymbol = that.calculator.getAttribute('data-currency-code');
    that.prevInterest = Number(that.calculator.getAttribute('data-prev-interest'));
    that.errorSelector = that.calculator.querySelector(
      '.sc-bonussaver-calculator-compact__prompt-msg'
    );
    that.errorSelector.innerHTML = that.calculator.getAttribute('data-error-msg');
    that.inputField = that.calculator.querySelector('.sc-bonussaver-calculator-compact__input');
    that.inputField.setAttribute(
      'value',
      convertNumbers(that.calculator, that.calculator.getAttribute('data-default-amount'))
    );
    that.inputField.setAttribute(
      'data-default-amount',
      that.calculator.getAttribute('data-default-amount')
    );

    //Analytics code start
    that.fieldsArray = [];
    that.fieldObjectString = {};
    that.prevValue = that.inputField.value.toString();
    //Analytics code end

    that.inputAnimation();
    that.handleInput();
    that.handleRadioButton();
    that.handleCheckBox();
    that.calculateResult();
    that.updateBasedOnSelector();
    that.applyMaxHeights();

    //Fixed prevailing interest rate on page load
    const interestRate =
      Number(that.calculator.querySelector('.sc-calculator-tile__selector').value) +
      that.prevInterest;

    const optionSelector = that.calculator.querySelector('.rate-spend-category-options-2');
    if (optionSelector) {
      optionSelector.innerHTML = interestRate.toFixed(2) + `%`;
    }
    // Add event listeners to trigger the functions when the selector value or checkbox state changes
    document
      .querySelector('.sc-calculator-tile__selector')
      .addEventListener('change', that.updateBasedOnSelector.bind(that));
    document.querySelectorAll('.sc-checkbox__input.sc-calculator-tile__input').forEach(ele => {
      ele.addEventListener('change', that.updateBasedOnCheckbox.bind(that));
    });

    // Optional: Add an event listener to handle window resize
    window.addEventListener('resize', () => {
      that.applyMaxHeights();
    });

    that.calculatorLoaded = false;
  }

  /**
   *  calculate bonusSaver calculator data
   *
   */
  calculateResult() {
    let that = this;
    const amountList = document.querySelectorAll('.deposit_profit');
    const rateList = document.querySelectorAll('.deposit_rate');
    const resultList = that.calculator.querySelectorAll(
      '.sc-bonussaver-calculator-compact__estimate-result'
    );
    const titleList = that.calculator.querySelectorAll(
      '.sc-bonussaver-calculator-compact__estimate-title'
    );
    const capLimit = Number(that.calculator.getAttribute('data-cap-limit'));

    if (that.errorStatus) {
      //display error message if input error found
      for (let i = 1; i < titleList.length; i++) {
        titleList[i].classList.add('hide');
      }
      for (let i = 0; i < amountList.length; i++) {
        amountList[i].innerHTML = 0;
      }
      for (let i = 0; i < rateList.length; i++) {
        rateList[i].innerHTML = 0;
      }
      return;
    } else {
      for (let i = 1; i < titleList.length; i++) {
        titleList[i].classList.remove('hide');
      }
      for (let i = 0; i < resultList.length; i++) {
        resultList[i].classList.remove('hide');
      }
    }

    const amount = that.inputField.value.replace(/[^0-9.]/gi, '');
    let rate = that.prevInterest,
      profit = 0;
    rate += Number(that.calculator.querySelector('.sc-calculator-tile__selector').value);
    let checkBoxList = that.calculator.querySelectorAll('.sc-calculator-tile__input');
    if (checkBoxList.length) {
      for (let i = 0; i < checkBoxList.length; i++) {
        if (checkBoxList[i].checked) {
          rate += Number(checkBoxList[i].value);
        }
      }
    }

    //Calculate value of Average Daily Balance based on Spends, Salary Credit, Invest or Insure, Bill Payment
    if (amount > capLimit) {
      profit = (capLimit * rate) / 100 + ((amount - capLimit) * that.prevInterest) / 100; //ADB above $100,000 will be only entitled with an interest rate of 0.5% per annum
    } else {
      profit = (amount * rate) / 100;
    }
    profit = profit.toFixed(2);

    for (let i = 0; i < amountList.length; i++) {
      amountList[i].innerHTML = convertNumbers(
        that.calculator,
        Number.isInteger(Number(profit)) ? parseInt(profit) : profit
      );
    }
    for (let i = 0; i < rateList.length; i++) {
      rateList[i].innerHTML = rate.toFixed(2);
    }
  }

  /**
   *  update selector
   */
  updateBasedOnSelector() {
    const that = this;
    const selector = this.calculator.querySelector('.sc-calculator-tile__selector');
    const checkBoxes = this.calculator.querySelectorAll(
      '.sc-checkbox__input.sc-calculator-tile__input'
    );

    selector.addEventListener('change', event => {
      checkBoxes.forEach(checkbox => {
        const options = checkbox
          .closest('.sc-calculator-tile')
          .querySelector('.sc-calculator-tile__selector');
        if (options) {
          if (selector.value == 0) {
            checkbox.checked = false;
            this.calculateResult();
          } else {
            const allContent = checkbox
              .closest('.sc-calculator-tile')
              .querySelectorAll('.sc-calculator-tile__content-interest');
            allContent.forEach(content => {
              content.innerHTML = (Number(event.target.value) + that.prevInterest).toFixed(2) + '%';
            });
            checkbox.checked = true;
            this.calculateResult();
          }
        }
      });
      that.handleCalculatorSubmitCall();
    });
  }

  /**
   *  update chekbox based on selector
   */
  updateBasedOnCheckbox() {
    const that = this;
    const selector = this.calculator.querySelector('.sc-calculator-tile__selector');
    const checkBoxes = this.calculator.querySelectorAll(
      '.sc-checkbox__input.sc-calculator-tile__input'
    );

    checkBoxes.forEach(checkbox => {
      checkbox.addEventListener('change', event => {
        const options = event.target
          .closest('.sc-calculator-tile')
          .querySelector('.sc-calculator-tile__selector');
        if (options) {
          if (!checkbox.checked) {
            selector.value = 0;
            this.calculateResult();
          } else {
            const allContent = event.target
              .closest('.sc-calculator-tile')
              .querySelectorAll('.sc-calculator-tile__content-interest');
            allContent.forEach(content => {
              content.innerHTML =
                (Number(selector.options[2].value) + that.prevInterest).toFixed(2) + '%';
            });
            selector.value = selector.options[2].value;
            this.calculateResult();
          }
        }
      });
    });
  }

  /**
   * Handles the behavior of a select element (dropdown) in the calculator, updating
   * related fields based on the selected option and triggering recalculation.
   */
  handleRadioButton() {
    let that = this;
    const selectElement = that.calculator.querySelector('.sc-calculator-tile__selector');

    // Add change event listener to the select element
    selectElement.addEventListener('change', function(event) {
      const selectedOption = event.target.selectedOptions[0],
        value = Number(selectedOption.value),
        className = selectedOption.getAttribute('data-class'),
        closest = event.target.closest('.sc-calculator-tile');

      if (value) {
        closest.classList.remove('sc-calculator-tile--opacity');
        that.calculator.querySelector(`.rate-${className}`).innerHTML =
          (value + that.prevInterest).toFixed(2) + '%';
      } else {
        closest.classList.add('sc-calculator-tile--opacity');
        const lastOption = selectElement.options[selectElement.options.length - 1];
        that.calculator.querySelector(`.rate-${className}`).innerHTML =
          (Number(lastOption.value) + that.prevInterest).toFixed(2) + '%';
      }
      that.calculateResult();
    });

    // Handling key events for the select box if necessary
    selectElement.addEventListener('keydown', function(event) {
      if (event.keyCode == 32) {
        event.preventDefault();
      }
    });
    selectElement.addEventListener('keyup', function(event) {
      if (event.keyCode == 13 || event.keyCode == 32) {
        // Trigger when press enter or space
        that.calculateResult();
      }
    });
  }

  /**
   *  handle checkbox and add opacity if unchecked the checkbox
   */
  handleCheckBox() {
    let that = this;
    const checkBoxList = that.calculator.querySelectorAll('.sc-calculator-tile__input');
    checkBoxList.forEach(function(el) {
      el.addEventListener('change', function(event) {
        const closest = event.target.closest('.sc-calculator-tile');
        event.target.checked
          ? closest.classList.remove('sc-calculator-tile--opacity')
          : closest.classList.add('sc-calculator-tile--opacity');
        that.calculateResult();
        setTimeout(function() {
          that.handleCalculatorSubmitCall();
        }, 500);
      });
    });

    //Activate/deactivate options like salary range
    let checkboxBtnList = that.calculator.querySelectorAll('.sc-checkbox__checkmark');
    if (checkboxBtnList.length) {
      checkboxBtnList.forEach(function(evt) {
        evt.addEventListener('keydown', function(event) {
          if (event.keyCode == 32) {
            event.preventDefault();
          }
        });
        evt.addEventListener('keyup', function(event) {
          if (event.keyCode == 13 || event.keyCode == 32) {
            //trigger when press enter or space
            const closest = event.target.closest('.sc-calculator-tile');
            const checkbox = closest.querySelector('.sc-calculator-tile__input');
            const status = checkbox.checked;

            status ? (checkbox.checked = false) : (checkbox.checked = true);
            checkbox.dispatchEvent(new Event('change'));

            status
              ? closest.classList.add('sc-calculator-tile--opacity')
              : closest.classList.remove('sc-calculator-tile--opacity');
            that.calculateResult(); //Calculate savings
          }
        });
      });
    }
    that.updateBasedOnCheckbox();
  }

  /**
   * Handles user input for a numeric input field in the calculator, applying validation
   * and formatting rules, and updating the calculator results accordingly.
   */
  handleInput() {
    let that = this;
    that.inputField.addEventListener('focus', function(event) {
      event.target.value = event.target.value.replace(/[^0-9.]/gi, '');
    });
    that.inputField.addEventListener('input', function(event) {
      const initValue = event.target.value,
        minAmount = Number(that.calculator.getAttribute('data-min-amount')),
        maxAmount = Number(that.calculator.getAttribute('data-max-amount'));
      let value = initValue.replace(/[^0-9.]/gi, '');
      that.errorSelector.classList.add('hide');
      that.errorStatus = false;

      if (!value) {
        value = '';
      } else {
        //check fraction number
        const raVal = value.split('.');
        if (raVal.length > 2) {
          //more than two floating point
          value = raVal[0] + '.' + raVal[1];
        } else if (raVal[1] && raVal[1].length > 2) {
          //true if more than two digit after . point
          value = value.slice(0, -1);
          event.target.value = value;
        } else if (value.slice(-1) === '.') {
          event.target.value = value;
          value = value.slice(0, -1);
          if (value < minAmount) {
            that.errorStatus = true;
            that.errorSelector.classList.remove('hide');
          }
          return;
        } else if (value > maxAmount) {
          value = value.slice(0, -1);
        }
      }
      value = Number(value);

      if (value < minAmount) {
        that.errorStatus = true;
        that.errorSelector.classList.remove('hide');
      }
      if (initValue != value) {
        event.target.value = value;
      }
      that.calculateResult();
      that.prevValue = event.target.value;
    });
    that.inputField.addEventListener('blur', function(event) {
      const value = Number(event.target.value.replace(/[^0-9.]/gi, '')),
        minAmount = that.calculator.getAttribute('data-min-amount');
      that.errorStatus = false;

      if (value < Number(minAmount)) {
        that.errorStatus = true;
      } else {
        event.target.value = convertNumbers(
          that.calculator,
          event.target.value.replace(/[^0-9.]/gi, '')
        );
      }

      that.calculateResult();
      that.prevValue = event.target.value;
      setTimeout(function() {
        that.handleCalculatorSubmitCall();
      }, 500);
    });
  }

  /**
   *  once the input field is visible, display an animation inside input field
   */
  inputAnimation() {
    let that = this;
    let inputPosition = getPosition(that.inputField);
    const height =
      window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    if (height >= inputPosition) {
      //Setup initial animation
      const defaultAmount = Number(that.inputField.getAttribute('data-default-amount'));
      that.inputField.classList.add('sc-animation-complete');
      that.countUpFun(defaultAmount * 0.1, 2, that.inputField);
    }

    window.addEventListener(
      'scroll',
      debounceEvents(function() {
        if (that.inputField.className.indexOf('sc-animation-complete') === -1) {
          //Animation Code condition
          inputPosition = getPosition(that.inputField).y;
          if (window.pageYOffset - 50 >= inputPosition - height) {
            //Setup initial animation
            const defaultAmount = Number(that.inputField.getAttribute('data-default-amount'));
            that.inputField.classList.add('sc-animation-complete');
            that.countUpFun(defaultAmount * 0.1, 2, that.inputField);
          }
        }
      }, 50)
    );
  }

  /**
   * scroll target position with animation
   * @param {String} target scroll class
   * @param {Number} duration scroll time in ms
   * @param {Number} margin negative value form top
   * @example
   * scroll('body', 500, 90)
   */
  smoothScroll(target, duration, width = 0) {
    if (!target) return;
    let that = this;
    let targetPosition = target.getBoundingClientRect().top - width;
    let startPosition = window.pageYOffset;
    let startTime = null;

    const animation = currentTime => {
      if (startTime === null) startTime = currentTime;
      let timeElapsed = currentTime - startTime;
      let run = that.ease(timeElapsed, startPosition, targetPosition, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    };
    requestAnimationFrame(animation);
  }
  ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  }

  /**
   *  Average Daily Balance animation on page loading and works as recursive function
   *
   * @param {object} that
   * @param {number} value
   * @param {number} interval
   *
   * @example
   *
   *   countUpFun(that, BonusSaver Balance, 300 millisecond)
   */
  countUpFun(value, interval, selector) {
    setTimeout(() => {
      let defaultAmount = Number(selector.getAttribute('data-default-amount'));
      let temp = value.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,'); //Placed , after three digits
      selector.value = temp;

      //Increment of animation value
      if (value < defaultAmount - defaultAmount * 0.3) {
        value +=
          Math.floor(Math.random() * Math.ceil(defaultAmount * 0.0005)) +
          Math.ceil(defaultAmount * 0.0095); //Increment value 950-1000 on each step
        interval = 5; //delay time 5 milliseconds
      } else if (value < defaultAmount - defaultAmount * 0.2) {
        value +=
          Math.floor(Math.random() * Math.ceil(defaultAmount * 0.0005)) +
          Math.ceil(defaultAmount * 0.0095); //Increment value 950-1000 on each step
        interval = 8; //delay time 8 milliseconds
      } else if (value < defaultAmount - defaultAmount * 0.1) {
        value +=
          Math.floor(Math.random() * Math.ceil(defaultAmount * 0.0005)) +
          Math.ceil(defaultAmount * 0.0095); //Increment value 950-1000 on each step
        interval = 10; //delay time 10 milliseconds
      } else if (value < defaultAmount - defaultAmount * 0.01) {
        value +=
          Math.floor(Math.random() * Math.ceil(defaultAmount * 0.0005)) +
          Math.ceil(defaultAmount * 0.0095); //Increment value 950-1000 on each step
        interval = 13; //delay time 13 milliseconds
      } else if (value < defaultAmount - Math.ceil(defaultAmount * 0.001)) {
        value +=
          Math.floor(Math.random() * Math.ceil(defaultAmount * 0.0001)) +
          Math.ceil(defaultAmount * 0.0009); //Increment value 90-100 on each step
        interval = 15; //delay time 20 milliseconds
      } else if (value < defaultAmount - 10) {
        let amntLg = Math.floor(Math.random() * Math.ceil(defaultAmount * 0.0001));
        let amntMd = Math.floor(Math.random() * Math.ceil(defaultAmount * 0.00005));
        let amntSm = Math.floor(Math.random() * Math.ceil(defaultAmount * 0.00001));

        if (value + amntLg + 1 < defaultAmount - 10) {
          value += amntLg + 1;
        } else if (value + amntMd + 1 < defaultAmount - 10) {
          value += amntMd + 1;
        } else if (value + amntSm + 1 < defaultAmount - 10) {
          value += amntSm + 1;
        } else {
          value += 1;
        }
        interval = 20; //delay time 30 milliseconds
      } else {
        value += 1;
        interval = 30;
      }
      if (value <= defaultAmount) {
        //true if Average Daily Balance value is lessthan 100K
        this.countUpFun(value, interval, selector); //Call recursive function
      }
    }, interval);
  }

  // Function to apply max heights
  applyMaxHeights() {
    const that = this;
    const cardBoxes = that.calculator.querySelectorAll('.sc-calculator-tile');
    const windowWidth =
      window.innerWidth ?? document.documentElement.clientWidth ?? document.body.clientWidth;
    let maxFirstSectionHeight = 0;
    let maxSecondSectionHeight = 0;
    console.log('windowWidth: ', windowWidth);

    // Iterate over each card to find the maximum heights
    cardBoxes.forEach(function(cardBox) {
      const firstSections = cardBox.querySelectorAll('.sc-calculator-tile__top');
      const secondSections = cardBox.querySelectorAll('.sc-calculator-tile__bottom');

      firstSections.forEach(function(firstSection) {
        maxFirstSectionHeight = Math.max(maxFirstSectionHeight, firstSection.clientHeight);
      });
      secondSections.forEach(function(secondSection) {
        maxSecondSectionHeight = Math.max(maxSecondSectionHeight, secondSection.clientHeight);
      });
    });

    // Apply the maximum heights to all elements in all cards only if on desktop
    if (windowWidth >= 1024) {
      // Assuming 1024px is the breakpoint for desktop
      cardBoxes.forEach(function(cardBox) {
        const firstSections = cardBox.querySelectorAll('.sc-calculator-tile__top');
        const secondSections = cardBox.querySelectorAll('.sc-calculator-tile__bottom');

        firstSections.forEach(function(firstSection) {
          firstSection.style.height = maxFirstSectionHeight + 'px';
        });
        secondSections.forEach(function(secondSection) {
          secondSection.style.height = maxSecondSectionHeight + 'px';
        });
      });
    }
  }

  /**
   * Gathers form input values from a calculator and submits the data for further processing.
   */
  handleCalculatorSubmitCall() {
    const that = this;
    let fieldsArray = [];
    fieldsArray.push({
      fieldName: 'Average Daily Balance',
      fieldValue: calculateRanges(
        'loanAmount',
        that.calculator.querySelector('.sc-bonussaver-calculator-compact__input').value
      )
    });

    const checkboxList = that.calculator.querySelectorAll('.sc-checkbox__checkmark');
    checkboxList.forEach(checkbox => {
      const closest = checkbox.closest('.sc-calculator-tile');
      let spendValue = 'yes';
      const dropdown = closest.querySelector('.sc-calculator-tile__selector');
      if (dropdown) {
        spendValue = dropdown.options[dropdown.selectedIndex].text.trim();
      }

      const options = checkbox
        .closest('.sc-calculator-tile')
        .querySelector('.sc-calculator-tile__selector');
      const fieldText = closest.querySelector('.sc-checkbox').innerText.replace(/\s\s+/g, ' ');
      fieldsArray.push({
        fieldName: fieldText,
        fieldValue:
          closest.className.indexOf('sc-calculator-tile--opacity') === -1
            ? spendValue
            : options
            ? spendValue
            : 'no'
      });
    });

    handleProductCalculatorSubmit('Bonussaver Calculator', fieldsArray);
  }
}

const instance = new ScBonusSaverCalculator();
instance.init();

export default instance;
