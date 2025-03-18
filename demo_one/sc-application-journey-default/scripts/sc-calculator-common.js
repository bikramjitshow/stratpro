/* global noUiSlider */
class ScCalculatorCommon {
  /**
   * initialized or update slider based on the that.sliderInit value
   */
  initializeSlider(mainSelector, parentSelector) {
    let that = this;
    const docElement = document.documentElement;
    const direction = docElement.getAttribute("dir")
      ? docElement.getAttribute("dir")
      : null;
    const allSlider = mainSelector.querySelectorAll(".sc-range-slider");
    if (allSlider.length) {
      //Initialize slider
      allSlider.forEach(function (slider) {
        noUiSlider.create(slider, {
          start: Number(slider.getAttribute("data-default")),
          step: Number(slider.getAttribute("data-step")),
          behaviour: "snap",
          connect: "lower",
          range: {
            min: Number(slider.getAttribute("data-min")),
            max:
              Number(slider.getAttribute("data-max")) > 0
                ? Number(slider.getAttribute("data-max"))
                : 10000000,
          },
          direction: direction,
        });

        const inputField = slider
          .closest(parentSelector)
          .querySelector('input[class$="-value"]');
        if (inputField) {
          //Slider related with text field
          inputField.value = that.convertNumbers(
            mainSelector,
            slider.getAttribute("data-default")
          );
        } else {
          const dropdownField = slider
            .closest(parentSelector)
            .querySelector('select[class$="-value"]');
          if (dropdownField) {
            //Slider related with dropdown field
            dropdownField.value = slider.getAttribute("data-default");
          }
        }
      });

      allSlider.forEach(function (el) {
        el.setAttribute("aria-label", "Drage here to move slider");
      });
    }
  }

  /**
   * this method will be call when any key pressed in estimate daily field, pass value to calculateInterest method and return start status
   *
   * @param {Number} start get estimate daily balance number of click      *
   * @example
   * activeInputVal(1, 1200)
   */
  validateInput(selector, sliderClass, errorSelector, hideClass = "") {
    let selectedClass = selector.querySelector(`.${sliderClass}`),
      inputField = selector.querySelector(`.${sliderClass}-value`),
      sliderExist = true,
      minValue,
      maxValue;

    if (inputField) {
      //slider input fields
      minValue = Number(selectedClass.getAttribute("data-min"));
      maxValue = Number(selectedClass.getAttribute("data-max"));
    } else {
      //non slider input fields
      minValue = Number(selectedClass.getAttribute("data-min"));
      maxValue = Number(selectedClass.getAttribute("data-max"));
      inputField = selectedClass;
      sliderExist = false;
    }

    let initValue = inputField.value,
      value = 0;

    hideClass
      ? errorSelector.classList.add("hide")
      : (errorSelector.style.display = "none");
    if (!selectedClass.getAttribute("data-decimal")) {
      value = initValue.replace(/[^0-9]+/gi, "").replace(/^0/, ""); //remove all string except 0-9
      if (value != initValue) {
        inputField.value = value;
      }
      if (value) {
        value = parseInt(value, 10);
      }
    } else {
      //if text field supports fraction value
      value = initValue.replace(/[^0-9.]/gi, "").replace(/^0/, "");
      if (value != initValue) {
        inputField.value = value;
      }
      if (!value) {
        value = "";
      } else {
        let raVal = value.split(".");
        if (value === ".") {
          hideClass
            ? errorSelector.classList.remove("hide")
            : (errorSelector.style.display = "block");
          return;
        } else if (raVal.length > 2) {
          //more than two floating point
          value = `${raVal[0]}.${raVal[1]}`;
          inputField.value = value;
          return;
        } else if (raVal[1] && raVal[1].length > 2) {
          value = `${raVal[0]}.` + raVal[1].substr(0, 2);
          inputField.value = value;
          return;
        }
        if (value.slice(-1) === ".") {
          return;
        } else if (raVal[1] && raVal[1].length === 1) {
          value = parseFloat(value).toFixed(1);
        } else {
          value = Number(value);
        }
      }
    }

    if (value > maxValue) {
      //checking text field maximum value
      value = maxValue;
      if (sliderExist) selectedClass.noUiSlider.set([value]); //Push value in NoUiSlider
    } else if (value === "" && minValue > 0) {
      //leave text field as blank and fill it with 0
      value = "";
      hideClass
        ? errorSelector.classList.remove("hide")
        : (errorSelector.style.display = "block");
    } else if (value < minValue) {
      hideClass
        ? errorSelector.classList.remove("hide")
        : (errorSelector.style.display = "block");
    }

    if (sliderExist) {
      if (value !== "" && value >= minValue) {
        selectedClass.noUiSlider.set([value]); //Push value in NoUiSlider
      } else {
        selectedClass.noUiSlider.set([0]);
      }
    }
    inputField.value = value;
  }

  /**
   * added comma after each three digits like 1,000,000
   * @example
   * @param {numbers} 10000
   *convertNumbers(10000)
   */
  convertNumbers(selector, numbers) {
    if (numbers === "" || !numbers) return 0;
    let returnVal = numbers.toString();
    let tmp = [];
    let fraction = 0;
    if (Number(selector.getAttribute("data-comma-format")) === 2) {
      if (returnVal.indexOf(".") !== -1) {
        let splitValue = returnVal.split(".");
        tmp = splitValue[0].split("").reverse(); //4321
        fraction = parseInt(splitValue[1], 10);
      } else {
        tmp = returnVal.split("").reverse(); //4321
      }

      let strNew = "";
      if (tmp.length > 3) {
        //true
        let lastThree = tmp.splice(0, 3);
        for (let i = 0; i < tmp.length; i++) {
          if (i > 0 && i % 2 == 0) {
            strNew += ",";
          }
          strNew += tmp[i].toString();
        }
        strNew = lastThree.join("") + "," + strNew;
        strNew = strNew.split("").reverse().join("");
      }
      if (strNew) {
        if (fraction) {
          strNew = "" + strNew + `.${fraction}`;
        }
        if (strNew.slice(0, 2) == "-,") {
          strNew = strNew.replace(/-,/gi, "-");
        }
        return strNew;
      } else {
        return returnVal;
      }
    } else {
      if (returnVal.indexOf(".") !== -1) {
        let splitValue = returnVal.split(".");
        tmp = splitValue[0].split("").reverse(); //4321
        fraction = splitValue[1];
      } else {
        tmp = returnVal.split("").reverse(); //4321
      }

      let strNew = "";
      if (tmp.length > 3) {
        //true if it's more than or equal thousands
        for (let i = 0; i < tmp.length; i++) {
          if (i > 0 && i % 3 == 0) {
            strNew += ",";
          }
          strNew += tmp[i].toString();
        }
        strNew = strNew.split("").reverse().join("");
      }
      if (strNew) {
        if (fraction) {
          strNew = "" + strNew + `.${fraction}`;
        }
        return strNew;
      } else {
        return returnVal;
      }
    }
  }

  /**
   * calculate monthly repayment amount
   * @param {Number} interestRate - interest rate in Int
   * @param {Number} tenor - tenor in number months Int
   * @param {Number} loanAmount - loan amount in Int
   * @param {Number} advancedPayments - advanced payment amount in Int
   * @return {Number} return calculated PMT value
   * Example:
   * calculatePMT(16, 12, 1500000, 0)
   **/
  calculatePMT(interestRate, tenor, loanAmount, advancedPayments = 0) {
    let monthlyRate = interestRate / 1200;
    let t1 = 1 + monthlyRate;
    let t3 = Math.pow(t1, tenor - advancedPayments);
    return (loanAmount * monthlyRate) / (1 - 1 / t3);
  }

  /**
   * check error status of the slider input fields
   */
  sliderErrorStatus(selector, fieldName) {
    let errorStatus = false;
    const allFields = selector.querySelectorAll(fieldName);
    if (allFields.length) {
      for (let i = 0; i < allFields.length; i++) {
        const value = Number(allFields[i].value.replace(/[^0-9.]/gi, ""));
        let className = allFields[i].className.split(" ");
        className = className[className.length - 1].slice(0, -6);
        const slider = selector.querySelector(`.${className}`),
          minValue = Number(slider.getAttribute("data-min"));
        if (isNaN(value) || value < minValue) {
          errorStatus = errorStatus || true;
        }
      }
    }
    return errorStatus;
  }

  /**
   * add to digit after floating point
   */
  formatNumbersWithTwoDecimalPlaces(inputString) {
    // Use a regular expression to find numbers (both integer and decimal)
    const regex = /(\d+(\.\d*)?)/g;

    // Replace each matched number with the number formatted to two decimal places
    let filteredResult = inputString.replace(regex, (match) => {
      const number = parseFloat(match);
      if (!isNaN(number)) {
        return number.toFixed(2);
      }
      return match; // If not a valid number, return the original match
    });
    const parts = filteredResult.split(".");
    const result = parseFloat(parts[0] + "." + parts.slice(1).join("")).toFixed(
      2
    );
    return isNaN(result) ? "0.00" : result;
  }

  /**
   * VLOOKUP is a function in Microsoft Excel (and similar spreadsheet software) that stands for "Vertical Lookup." It is commonly used to search for a value in the first column of a table and return a value in the same row from another column.
   * @param {Number} lookupValue - Replace M14 with the actual value you want to look up
   * @param {Object} tableArray - Add more rows as needed
   * @param {Number} colIndex - Assuming you want to retrieve the value from the second column
   * Example:
   * vLookup(16, [[0, 100], [50, 85], [75, 75]], 2)
   **/
  vLookup(lookupValue, tableArray, colIndex) {
    for (var i = 0; i < tableArray.length; i++) {
      var row = tableArray[i];
      var compareValue = row[0]; // Assuming the lookup column is the first column in the tableArray

      if (
        compareValue <= lookupValue &&
        (i === tableArray.length - 1 || tableArray[i + 1][0] > lookupValue)
      ) {
        return row[colIndex - 1]; // Adjusting for 1-based indexing in Excel
      }
    }

    return undefined; // Return undefined if no match is found
  }

  /**
   * validate all slider field input
   */
  sliderFieldErrorStatus(selector, parentClass, errorClass) {
    const closest = selector.closest(parentClass),
      minValue = Number(
        closest.querySelector(".sc-range-slider").getAttribute("data-min")
      ),
      errorSelector = closest.querySelector(errorClass),
      value = Number(selector.value.replace(/[^0-9]+/gi, ""));

    if (value >= minValue) {
      errorSelector.classList.add("hide");
      return true;
    }
    errorSelector.classList.remove("hide");
    return false;
  }

  /**
   * check step field error status
   */
  stepFieldErrorStatus(selector, parentClass, errorClass) {
    const minValue = Number(selector.getAttribute("data-min")),
      errorSelector = selector.closest(parentClass).querySelector(errorClass),
      value = Number(selector.value.replace(/[^0-9]+/gi, ""));

    if (value >= minValue) {
      errorSelector.classList.add("hide");
      return true;
    }
    errorSelector.classList.remove("hide");
    return false;
  }

  /**
   * The FV function is a financial function that returns the future value of an investment
   * @param {*} rate step up rate
   * @param {*} nper time period
   * @param {*} pmt Since Excel formula has an empty field, we assume it's 0
   * @param {*} pv initial investment amount
   * @param {*} type The Excel formula specifies type as 0
   * @returns
   */
  calculateFutureValue(rate, nper, pmt, pv, type) {
    // Calculate the future value
    const roundedNper = Math.round(nper);
    const factor = Math.pow(1 + rate, roundedNper);
    const futureValue = pv * factor + (pmt * (1 - factor)) / rate;

    if (type === 0) {
      return futureValue;
    } else {
      // If type is not 0, adjust the result
      return futureValue * (1 + rate);
    }
  }

  /**
   * based on the input month, it's calculate number of year and month
   */
  convertMonthsToYearsAndMonths(months) {
    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;
    return { years, months: remainingMonths };
  }

  /**
   * calculate monthly repayment amount and it's for =PMT(D4/12,D6,0,-D3,0) formula
   * @param {Number} rate: interest rate for each period
   * @param {Number} nper: number of periods
   * @param {Number} pv: present value or principal amount
   * @param {Number} fv: future value or a cash balance after the last payment
   * @return {Number} type: 0 for payments at the end of the period, 1 for payments at the beginning
   * Example:
   * calculatePMT(10/12/100, 10, 0, -1200000, 0)
   **/
  extendedPMT(rate, nper, pv, fv, type) {
    if (rate === 0) {
      return -(pv + fv) / nper;
    }

    var pvif = Math.pow(1 + rate, nper);
    var pmt = (rate * (fv + pvif * pv)) / (pvif - 1);

    if (type === 1) {
      pmt /= 1 + rate;
    }

    return -pmt;
  }

  /**
   * The calculateNPER function is a financial function that returns the number of periods for loan or investment
   * rate - The interest rate per period.
   * payment - The payment made each period.
   * present - The present value, or total value of all payments now.
   * future - [optional] The future value, or a cash balance you want after the last payment is made. Defaults to 0.
   * type - [optional] When payments are due. 0 = end of period. 1 = beginning of period. Default is 0.
   */
  calculateNPER(rate, payment, present, future, type) {
    // Initialize type
    type = typeof type === "undefined" ? 0 : type;

    // Initialize future value
    future = typeof future === "undefined" ? 0 : future;

    // Return number of periods
    const num = payment * (1 + rate * type) - future * rate;
    const den = present * rate + payment * (1 + rate * type);
    return Math.log(num / den) / Math.log(1 + rate);
  }

  /**
   * Calculates the number of years and months from a given number of months.
   *
   * @param {number} numberOfMonths - The total number of months.
   * @returns {String} String with the calculated number of years and months.
   */
  calculateYearMonth(numberOfMonths) {
    let months = numberOfMonths % 12;
    let years = Math.floor(numberOfMonths / 12);
    if (years > 1) {
      years = `${years} Year(s)`;
    } else if (years === 1) {
      years = `${years} Year`;
    } else {
      years = "";
    }

    if (months > 1) {
      months = ` ${months} Month(s)`;
    } else if (months === 1) {
      months = ` ${months} Month`;
    } else {
      months = "";
    }

    return `${years}${months}`;
  }

  /**
   * Calculates the Effective Interest Rate (EIR) or Internal Rate of Return (IRR)
   * using Newton's method.
   *
   * @param {number} periods - Number of compounding periods.
   * @param {number} payment - Periodic payment.
   * @param {number} present - Present value or initial investment.
   * @param {number} future - Future value or final investment.
   * @param {number} type - 0 for ordinary annuity, 1 for annuity due.
   * @param {number} [guess=0.01] - Initial guess for the interest rate. Defaults to 0.01.
   * @returns {number} - Calculated Effective Interest Rate.
   */
  calculateEIR(periods, payment, present, future, type, guess) {
    guess = guess === undefined ? 0.01 : guess;
    future = future === undefined ? 0 : future;
    type = type === undefined ? 0 : type;

    // Set maximum epsilon for end of iteration
    var epsMax = 1e-10;

    // Set maximum number of iterations
    var iterMax = 10;

    // Implement Newton's method
    var y,
      y0,
      y1,
      x0,
      x1 = 0,
      f = 0,
      i = 0;
    var rate = guess;
    if (Math.abs(rate) < epsMax) {
      y =
        present * (1 + periods * rate) +
        payment * (1 + rate * type) * periods +
        future;
    } else {
      f = Math.exp(periods * Math.log(1 + rate));
      y = present * f + payment * (1 / rate + type) * (f - 1) + future;
    }
    y0 = present + payment * periods + future;
    y1 = present * f + payment * (1 / rate + type) * (f - 1) + future;
    i = x0 = 0;
    x1 = rate;
    while (Math.abs(y0 - y1) > epsMax && i < iterMax) {
      rate = (y1 * x0 - y0 * x1) / (y1 - y0);
      x0 = x1;
      x1 = rate;
      if (Math.abs(rate) < epsMax) {
        y =
          present * (1 + periods * rate) +
          payment * (1 + rate * type) * periods +
          future;
      } else {
        f = Math.exp(periods * Math.log(1 + rate));
        y = present * f + payment * (1 / rate + type) * (f - 1) + future;
      }
      y0 = y1;
      y1 = y;
      ++i;
    }
    return rate;
  }

  /**
   * Calculating the Internal Rate of Return (IRR)
   * * @param {*} cashFlows is an array like [-200000.00, 0, 4666.67, 4666.67, 4666.67, 4666.67, 4666.67, 4666.67, 4666.67, 4666.67, 4666.67, 4666.67, 4666.67, 4666.67] where -200000.00 is the input load amount and 4666.67 is the Monthly Repayment Amount
   */
  calculateIRR(cashFlows, iterations = 100, tolerance = 0.00001) {
    let that = this;
    let irr = 0.1; // Initial guess for IRR
    let cashflowValue = 0;

    for (let i = 0; i < iterations; i++) {
      cashflowValue = 0;

      for (let j = 0; j < cashFlows.length; j++) {
        cashflowValue += cashFlows[j] / Math.pow(1 + irr, j);
      }

      const derivative = that.calculateDerivative(cashFlows, irr);
      irr = irr - cashflowValue / derivative;

      if (Math.abs(cashflowValue) < tolerance) {
        return irr;
      }
    }

    // If the iteration does not converge, return null or handle accordingly
    return null;
  }

  /**
   * Calculates the derivative of the NPV with respect to the IRR. The iteration continues until the NPV is close enough to zero or the maximum number of iterations is reached.
   */
  calculateDerivative(cashFlows, irr) {
    let derivative = 0;

    for (let i = 0; i < cashFlows.length; i++) {
      derivative -= (i * cashFlows[i]) / Math.pow(1 + irr, i + 1);
    }
    return derivative;
  }
}

const instancessss = new ScCalculatorCommon();
// export default instance;
