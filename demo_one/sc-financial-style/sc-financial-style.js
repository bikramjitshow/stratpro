/* global Utils,digitalData,_satellite */
class FinancialStyle {
  init() {
    const self = this;
    let questionCounter = 1;
    let financialStyleElement = document.querySelector(".sc-financial-style");
    let dataObject = JSON.parse(
      financialStyleElement.getAttribute("data-req-json")
    );
    let selectedAnswers = { q1: "", q2: "", q3: "" },
      selectedAnswersAA = { q1: "", q2: "", q3: "" };

    document.addEventListener("click", function (event) {
      let _dataObject$result,
        _dataObject$result$se,
        _dataObject$result$se2,
        _dataObject$result$se3,
        _dataObject$result3,
        _dataObject$result3$s,
        _dataObject$result3$s2,
        _dataObject$result3$s3;
      let clickedElement = event.target;
      let segmentOneSection = document.querySelector(
        ".sc-financial-style__segment-one"
      );
      let segmenttwoSection = document.querySelector(
        ".sc-financial-style__segment-two"
      );
      let segmentThreeSection = document.querySelector(
        ".sc-financial-style__segment-three"
      );
      let segmentFourSection = document.querySelector(
        ".sc-financial-style__segment-four"
      );
      let questionOne = document.querySelector(
        ".sc-financial-style__question-one"
      );
      let questionTwo = document.querySelector(
        ".sc-financial-style__question-two"
      );
      let questionThree = document.querySelector(
        ".sc-financial-style__question-three"
      );
      let singleSelectedAnswer,
        singleSelectedText = "";
      let key = "scFSMosuleSelectedAnswers";

      if (
        event.target.closest(".closebutton") &&
        event.target.closest(".c-modal").querySelector(".sc-financial-style")
      ) {
        setTimeout(() => {
          self.handleSubmittedField();
        }, 500);
      }
      if (
        clickedElement.classList.contains(
          "sc-financial-style__segment-one-button"
        )
      ) {
        // When user click on button on first segment i.e. intro content
        // Set the answer of 3 question
        // set the question counter 1 so that it will start from first question
        questionCounter = 1;
        // show hide segments
        segmentOneSection.style.display = "none";
        segmenttwoSection.style.display = "block";
        segmentThreeSection.style.display = "none";
      } else if (
        clickedElement.classList.contains(
          "sc-financial-style__segment-two-button"
        )
      ) {
        // When user click on button on second segment i.e. questions or quiz content
        switch (questionCounter) {
          case 2:
            // For the second case or second question i.e. questionCounter is 2
            if (
              document.querySelector('input[name="radio-box-q2"]:checked') ===
              null
            ) {
              document
                .querySelector(".sc-financial-style__error-container")
                .classList.remove("hide");
            } else {
              document
                .querySelector(".sc-financial-style__error-container")
                .classList.add("hide");
              singleSelectedAnswer = document.querySelector(
                'input[name="radio-box-q2"]:checked'
              ).value;
              singleSelectedText = document
                .querySelector('input[name="radio-box-q2"]:checked')
                .closest("div")
                .querySelector("div")
                ? document
                    .querySelector('input[name="radio-box-q2"]:checked')
                    .closest("div")
                    .querySelector("div").innerHTML
                : document
                    .querySelector('input[name="radio-box-q2"]:checked')
                    .closest("div")
                    .querySelector("label").innerHTML;
              selectedAnswers = self._objectSpread(
                self._objectSpread({}, selectedAnswers),
                {},
                {
                  q2: singleSelectedAnswer,
                  q3: "",
                }
              );
              selectedAnswersAA = self._objectSpread(
                self._objectSpread({}, selectedAnswersAA),
                {},
                {
                  q2: singleSelectedText,
                  q3: "",
                }
              );
              Utils.setLocalStorageWithExpiry(key, selectedAnswers, 172800000);
              // update the button in footer section of popup
              document.querySelector(
                ".sc-financial-style__segment-two .sc-financial-style__segment-two-button"
              ).innerHTML = dataObject["q2ResultText"];
              document
                .querySelector(
                  ".sc-financial-style__segment-two .sc-financial-style__segment-two-button"
                )
                .setAttribute("title", dataObject["q2ResultText"]);
              // update question counter and show hide questions
              questionCounter = 3;
              questionOne.style.display = "none";
              questionTwo.style.display = "none";
              questionThree.style.display = "block";
            }
            break;
          case 3:
            // For the third case or third question i.e. questionCounter is 3
            if (
              document.querySelector('input[name="radio-box-q3"]:checked') ===
              null
            ) {
              document
                .querySelector(".sc-financial-style__error-container")
                .classList.remove("hide");
            } else {
              document
                .querySelector(".sc-financial-style__error-container")
                .classList.add("hide");
              singleSelectedAnswer = document.querySelector(
                'input[name="radio-box-q3"]:checked'
              ).value;
              singleSelectedText = document
                .querySelector('input[name="radio-box-q3"]:checked')
                .closest("div")
                .querySelector("div").innerHTML;
              selectedAnswers = self._objectSpread(
                self._objectSpread({}, selectedAnswers),
                {},
                {
                  q3: singleSelectedAnswer,
                }
              );
              selectedAnswersAA = self._objectSpread(
                self._objectSpread({}, selectedAnswersAA),
                {},
                {
                  q3: singleSelectedText,
                }
              );
              Utils.setLocalStorageWithExpiry(key, selectedAnswers, 172800000);
              // show adjectives and description according to selection of 3 questions
              if (
                (_dataObject$result = dataObject["result"]) !== null &&
                _dataObject$result !== void 0 &&
                (_dataObject$result$se =
                  _dataObject$result[selectedAnswers["q1"]]) !== null &&
                _dataObject$result$se !== void 0 &&
                (_dataObject$result$se2 =
                  _dataObject$result$se[selectedAnswers["q2"]]) !== null &&
                _dataObject$result$se2 !== void 0 &&
                (_dataObject$result$se3 =
                  _dataObject$result$se2[selectedAnswers["q3"]]) !== null &&
                _dataObject$result$se3 !== void 0 &&
                _dataObject$result$se3["adjectives"]
              ) {
                var _dataObject$result2,
                  _dataObject$result2$s,
                  _dataObject$result2$s2,
                  _dataObject$result2$s3;
                document.querySelector(
                  ".sc-financial-style__segment-three-prod-name"
                ).innerHTML =
                  (_dataObject$result2 = dataObject["result"]) === null ||
                  _dataObject$result2 === void 0
                    ? void 0
                    : (_dataObject$result2$s =
                        _dataObject$result2[selectedAnswers["q1"]]) === null ||
                      _dataObject$result2$s === void 0
                    ? void 0
                    : (_dataObject$result2$s2 =
                        _dataObject$result2$s[selectedAnswers["q2"]]) ===
                        null || _dataObject$result2$s2 === void 0
                    ? void 0
                    : (_dataObject$result2$s3 =
                        _dataObject$result2$s2[selectedAnswers["q3"]]) ===
                        null || _dataObject$result2$s3 === void 0
                    ? void 0
                    : _dataObject$result2$s3["adjectives"];
              }
              if (
                (_dataObject$result3 = dataObject["result"]) !== null &&
                _dataObject$result3 !== void 0 &&
                (_dataObject$result3$s =
                  _dataObject$result3[selectedAnswers["q1"]]) !== null &&
                _dataObject$result3$s !== void 0 &&
                (_dataObject$result3$s2 =
                  _dataObject$result3$s[selectedAnswers["q2"]]) !== null &&
                _dataObject$result3$s2 !== void 0 &&
                (_dataObject$result3$s3 =
                  _dataObject$result3$s2[selectedAnswers["q3"]]) !== null &&
                _dataObject$result3$s3 !== void 0 &&
                _dataObject$result3$s3["description"]
              ) {
                var _dataObject$result4,
                  _dataObject$result4$s,
                  _dataObject$result4$s2,
                  _dataObject$result4$s3;
                document.querySelector(
                  ".sc-financial-style__segment-three-prod-desc"
                ).innerHTML =
                  (_dataObject$result4 = dataObject["result"]) === null ||
                  _dataObject$result4 === void 0
                    ? void 0
                    : (_dataObject$result4$s =
                        _dataObject$result4[selectedAnswers["q1"]]) === null ||
                      _dataObject$result4$s === void 0
                    ? void 0
                    : (_dataObject$result4$s2 =
                        _dataObject$result4$s[selectedAnswers["q2"]]) ===
                        null || _dataObject$result4$s2 === void 0
                    ? void 0
                    : (_dataObject$result4$s3 =
                        _dataObject$result4$s2[selectedAnswers["q3"]]) ===
                        null || _dataObject$result4$s3 === void 0
                    ? void 0
                    : _dataObject$result4$s3["description"];
              }
              self.commonAdobeScript();
              window.digitalData.form = {
                ...selectedAnswersAA,
              };
              window.digitalData.ctaName = clickedElement.innerHTML;
              let quizAA = {
                ...digitalData,
                event: "formEnd",
              };
              window.adobeDataLayer.push(quizAA);
              segmenttwoSection.style.display = "none";
              segmentThreeSection.style.display = "block";
            }
            break;
          default:
            // For the first case or first question i.e. questionCounter is 1
            // singleSelectedAnswer = document.querySelector('input[name="radio-box-q1"]:checked')
            if (
              document.querySelector('input[name="radio-box-q1"]:checked') ===
              null
            ) {
              document
                .querySelector(".sc-financial-style__error-container")
                .classList.remove("hide");
            } else {
              document
                .querySelector(".sc-financial-style__error-container")
                .classList.add("hide");
              singleSelectedAnswer = document.querySelector(
                'input[name="radio-box-q1"]:checked'
              ).value;
              singleSelectedText = document
                .querySelector('input[name="radio-box-q1"]:checked')
                .closest("div")
                .querySelector("label").innerHTML;
              selectedAnswers = { q1: singleSelectedAnswer, q2: "", q3: "" };
              selectedAnswersAA = { q1: singleSelectedText, q2: "", q3: "" };
              Utils.setLocalStorageWithExpiry(key, selectedAnswers, 172800000);
              // Create second question based on selected option of question 1
              // There are 2 type of questions, one is image and second is text
              if (dataObject["q2"][singleSelectedAnswer]) {
                let question2 = dataObject["q2"][singleSelectedAnswer];
                if (question2["type"] === "image") {
                  // question
                  document.querySelector(
                    ".sc-financial-style__question-two .sc-financial-style__question-text"
                  ).innerHTML = question2["questionText"];
                  // Answer
                  if (question2["options"]) {
                    let answerHtml = "";
                    question2["options"].forEach((currentElement, index) => {
                      answerHtml +=
                        '<div class="sc-financial-style__answer-box">\n                    <div class="sc-financial-style__q2-answers">\n <div class="sc-financial-style__q2-input-label">'
                          .concat(
                            currentElement["optDesc"],
                            '</div>   \n 					  <input\n                        type="radio"\n                        class="sc-financial-style__q2-input"\n                        id="radio-box-q2-'
                          )
                          .concat(
                            index + 1,
                            '"\n                        tabindex="-1"\n                        name="radio-box-q2"\n                        value="'
                          )
                          .concat(
                            currentElement["optValue"],
                            '"\n                        '
                          ) +
                        (index === 0 ? "" : "") +
                        '\n                      />\n                      <label class="sc-financial-style__q2-label sc-financial-style__img-label" for="radio-box-q2-'
                          .concat(
                            index + 1,
                            '" tabindex="0">\n                        <img src="'
                          )
                          .concat(
                            currentElement["optText"],
                            '" class="sc-financial-style__answer-img" alt="" loading="lazy">\n                      </label>\n                    </div>\n                  </div>'
                          );
                    });
                    document.querySelector(
                      ".sc-financial-style__question-two .sc-financial-style__answer-container"
                    ).innerHTML = answerHtml;
                  }
                } else {
                  // type is text
                  // question
                  document.querySelector(
                    ".sc-financial-style__question-two .sc-financial-style__question-text"
                  ).innerHTML = question2["questionText"];
                  // Answer
                  if (question2["options"]) {
                    let answerHtml = "";
                    question2["options"].forEach((currentElement, index) => {
                      // eslint-disable-next-line no-undef
                      answerHtml += `<div class="sc-financial-style__answer-box">
                    <div class="sc-radio-box sc-financial-style__full-width">
                      <input
                        type="radio"
                        class="sc-radio-box__input"
                        id="radio-box-q2-${index + 1}"
                        tabindex="-1"
                        name="radio-box-q2"
                        value="${currentElement["optValue"]}" />
                      <label class="sc-radio-box__input-label" for="radio-box-q2-${
                        index + 1
                      }" tabindex="0">${currentElement["optLabel"]}. ${
                        currentElement["optText"]
                      }</label>
                    </div>
                  </div>`;
                    });
                    document.querySelector(
                      ".sc-financial-style__question-two .sc-financial-style__answer-container"
                    ).innerHTML = answerHtml;
                  }
                }
              }
              // update the button in footer section of popup
              document.querySelector(
                ".sc-financial-style__segment-two .sc-financial-style__back-btn"
              ).style.display = "flex";
              // eslint-disable-next-line no-case-declarations
              let questionTwoNextButton = document.querySelector(
                ".sc-financial-style__segment-two .sc-financial-style__segment-two-button"
              );
              if (questionTwoNextButton) {
                questionTwoNextButton.classList.remove(
                  "sc-financial-style__full-width"
                );
                questionTwoNextButton.classList.add(
                  "sc-financial-style__segment-next-btn"
                );
              }
              // update question counter and show hide questions
              questionCounter = 2;
              questionOne.style.display = "none";
              questionTwo.style.display = "block";
              questionThree.style.display = "none";
            }
        }
      } else if (
        clickedElement.classList.contains("sc-financial-style__back-btn")
      ) {
        // If user click on back then adjust question counter variable
        questionCounter = questionCounter - 1;
        switch (questionCounter) {
          case 2:
            // update the button in footer section of popup
            document.querySelector(
              ".sc-financial-style__segment-two .sc-financial-style__segment-two-button"
            ).innerHTML = dataObject["q2NextBtnText"];
            document.querySelector(
              ".sc-financial-style__segment-two .sc-financial-style__segment-two-button"
            ).title = dataObject["q2NextBtnText"];
            // show hide questions
            questionOne.style.display = "none";
            questionTwo.style.display = "block";
            questionThree.style.display = "none";
            break;
          default:
            // update the button in footer section of popup
            document.querySelector(
              ".sc-financial-style__segment-two .sc-financial-style__back-btn"
            ).style.display = "none";
            // eslint-disable-next-line no-case-declarations
            let questionTwoNextButton = document.querySelector(
              ".sc-financial-style__segment-two .sc-financial-style__segment-two-button"
            );
            if (questionTwoNextButton) {
              questionTwoNextButton.classList.remove(
                "sc-financial-style__segment-next-btn"
              );
              questionTwoNextButton.classList.add(
                "sc-financial-style__full-width"
              );
            }
            // show hide questions
            questionOne.style.display = "block";
            questionTwo.style.display = "none";
            questionThree.style.display = "none";
        }
      } else if (
        clickedElement.classList.contains(
          "sc-financial-style__segment-three-button"
        )
      ) {
        // If user click on appointment button
        document.querySelector(".sc-financial-style__questions").value =
          Utils.getLocalStorageWithExpiry(key);
        segmentThreeSection.style.display = "none";
        segmentFourSection.style.display = "block";
      } else if (
        clickedElement.classList.contains(
          "sc-financial-style__segment-four-button"
        )
      ) {
        // If user click on submit button
        const validation = self.financialFormValid();
        if (!validation) return false;
        self.sendFormData();
        clickedElement.style.display = "none";
      } else if (
        clickedElement.classList.contains("icon-modal-close") ||
        clickedElement.classList.contains("icon-modal-close-mobile")
      ) {
        self.commonAdobeScript();
        window.digitalData.ctaName = "close";
        window.digitalData.context = "close";
        window.digitalData.ctaPosition = "lightbox";
        window.digitalData.ctaType = "link";
        window.digitalData.customLinkClick = {
          customLinkText: "close",
          customLinkRegion: "right lightbox",
          customLinkType: "close",
        };
        let dataAA = {
          ...digitalData,
          event: "ctaClick",
        };
        window.adobeDataLayer.push(dataAA);
      }
    });
  }

  // financialFormValid() {
  //   let formStatus = true;

  //   // Helper function to validate fields based on data-mandatory
  //   const validateField = (
  //     selector,
  //     errorSelector,
  //     validationFn = (val) => val.trim() !== ""
  //   ) => {
  //     const field = document.querySelector(selector);
  //     if (!field) return true; // Skip if field doesn't exist

  //     const isMandatory =
  //       field.closest(".sc-form__col.modular-form-container")?.dataset
  //         .mandatory === "1";
  //     const value = field.value.trim();

  //     console.log(
  //       `Validating ${selector}: "${value}", Mandatory: ${isMandatory}`
  //     );

  //     if (
  //       (isMandatory && !validationFn(value)) ||
  //       (!isMandatory && value !== "" && !validationFn(value))
  //     ) {
  //       console.log(`❌ Validation failed for ${selector}`);
  //       document.querySelector(errorSelector).classList.remove("hide");
  //       return false;
  //     } else {
  //       document.querySelector(errorSelector).classList.add("hide");
  //       console.log(`✅ ${selector} is valid`);
  //     }
  //     return true;
  //   };

  //   // Name field validation (if mandatory)
  //   formStatus =
  //     validateField(".sc-input__name", ".sc-form__error-name") && formStatus;

  //   // Email validation (if mandatory, must not be empty and follow email format)
  //   formStatus =
  //     validateField(
  //       ".sc-input__input-email",
  //       ".sc-form__error-email",
  //       (val) => {
  //         const emailField = document.querySelector(".sc-input__input-email");
  //         const isMandatory =
  //           emailField.closest(".sc-form__col.modular-form-container")?.dataset
  //             .mandatory === "1";

  //         if (isMandatory && val === "") return false; // If mandatory, email cannot be empty
  //         if (val !== "") {
  //           return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val); // Validate email format if filled
  //         }
  //         return true; // If optional and empty, it's valid
  //       }
  //     ) && formStatus;

  //   // Family Name & Given Name validation
  //   formStatus =
  //     validateField(
  //       ".sc-input__input-membership-family-name",
  //       ".sc-form__error-membership-family-name"
  //     ) && formStatus;
  //   formStatus =
  //     validateField(
  //       ".sc-input__input-membership-given-name",
  //       ".sc-form__error-membership-given-name"
  //     ) && formStatus;

  //   // Phone validation
  //   formStatus =
  //     validateField(
  //       ".sc-input__input--phonenumber",
  //       ".sc-form__error-contact",
  //       (val) => {
  //         const countryCode = document
  //           .querySelector(".sc-input__country")
  //           ?.value.trim();
  //         return val.length >= 8 && countryCode !== "";
  //       }
  //     ) && formStatus;

  //   // Membership validation (if mandatory)
  //   formStatus =
  //     validateField(
  //       ".sc-input__input-membership",
  //       ".sc-form__error-membership",
  //       (val) => {
  //         if (val.length !== 10 || isNaN(val)) return false;

  //         let totNumber = 0;
  //         for (let i = 0; i < 9; i++) {
  //           totNumber += parseInt(val[i]) * (i + 1);
  //         }
  //         let checkDigit = totNumber % 10;
  //         return checkDigit === parseInt(val[9]);
  //       }
  //     ) && formStatus;

  //   // Branch selection validation (ONLY IF MANDATORY)
  //   const branchField = document.querySelector(".sc-select__branch");
  //   if (branchField) {
  //     const isBranchMandatory =
  //       branchField.closest(".sc-form__col.modular-form-container")?.dataset
  //         .mandatory === "1";
  //     const branchValue = branchField.value.trim();

  //     console.log(
  //       `Validating Branch Selection: "${branchValue}", Mandatory: ${isBranchMandatory}`
  //     );

  //     if (isBranchMandatory && branchValue === "0") {
  //       console.log("❌ Branch selection is required");
  //       document
  //         .querySelector(".sc-form__error-branch")
  //         .classList.remove("hide");
  //       formStatus = false;
  //     } else {
  //       console.log("✅ Branch selection is valid");
  //       document.querySelector(".sc-form__error-branch").classList.add("hide");
  //     }
  //   }

  //   console.log(
  //     `Final form validation status: ${formStatus ? "✅ Valid" : "❌ Invalid"}`
  //   );
  //   return formStatus;
  // }

  financialFormValid() {
    let formStatus = true;

    // Helper function to validate fields based on data-mandatory
    const validateField = (
      selector,
      errorSelector,
      validationFn = (val) => val.trim() !== ""
    ) => {
      const field = document.querySelector(selector);
      if (!field) return true; // Skip if field doesn't exist

      const isMandatory =
        field.closest(".sc-form__col.modular-form-container")?.dataset
          .mandatory === "1";
      const value = field.value.trim();

      if (
        (isMandatory && !validationFn(value)) ||
        (!isMandatory && value !== "" && !validationFn(value))
      ) {
        document.querySelector(errorSelector).classList.remove("hide");
        return false;
      } else {
        document.querySelector(errorSelector).classList.add("hide");
      }
      return true;
    };

    // Name field validation (if mandatory)
    formStatus =
      validateField(".sc-input__name", ".sc-form__error-name") && formStatus;

    // Email validation (if mandatory, must not be empty and follow email format)
    formStatus =
      validateField(
        ".sc-input__input-email",
        ".sc-form__error-email",
        (val) => {
          const emailField = document.querySelector(".sc-input__input-email");
          const isMandatory =
            emailField.closest(".sc-form__col.modular-form-container")?.dataset
              .mandatory === "1";

          if (isMandatory && val === "") return false; // If mandatory, email cannot be empty
          if (val !== "") {
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val); // Validate email format if filled
          }
          return true; // If optional and empty, it's valid
        }
      ) && formStatus;

    // Family Name & Given Name validation
    formStatus =
      validateField(
        ".sc-input__input-membership-family-name",
        ".sc-form__error-membership-family-name"
      ) && formStatus;
    formStatus =
      validateField(
        ".sc-input__input-membership-given-name",
        ".sc-form__error-membership-given-name"
      ) && formStatus;

    // Phone validation
    formStatus =
      validateField(
        ".sc-input__input--phonenumber",
        ".sc-form__error-contact",
        (val) => {
          const countryCode = document
            .querySelector(".sc-input__country")
            ?.value.trim();
          return val.length >= 8 && countryCode !== "";
        }
      ) && formStatus;

    // Membership validation (if mandatory)
    formStatus =
      validateField(
        ".sc-input__input-membership",
        ".sc-form__error-membership",
        (val) => {
          if (val.length !== 10 || isNaN(val)) return false;

          let totNumber = 0;
          for (let i = 0; i < 9; i++) {
            totNumber += parseInt(val[i]) * (i + 1);
          }
          let checkDigit = totNumber % 10;
          return checkDigit === parseInt(val[9]);
        }
      ) && formStatus;

    // Branch selection validation (ONLY IF MANDATORY)
    const branchField = document.querySelector(".sc-select__branch");
    if (branchField) {
      const isBranchMandatory =
        branchField.closest(".sc-form__col.modular-form-container")?.dataset
          .mandatory === "1";
      const branchValue = branchField.value.trim();

      if (isBranchMandatory && branchValue === "0") {
        document
          .querySelector(".sc-form__error-branch")
          .classList.remove("hide");
        formStatus = false;
      } else {
        document.querySelector(".sc-form__error-branch").classList.add("hide");
      }
    }
    return formStatus;
  }

  /**
   * Reset all fields if we reopen the form modal
   */
  handleSubmittedField() {
    const containers = document.querySelectorAll(".modular-form-container");
    if (containers.length) {
      containers.forEach((container) => {
        container.classList.remove("hide");
      });
    }
  }

  /**
   * checks validation and makes a XHR call for submitting the form data
   *
   * sendFormData()
   */
  sendFormData() {
    let that = this;

    //Need to pass the XML data
    const xml = that.prepareXMLData();
    console.log(xml);

    let form = document.querySelector(
      ".sc-financial-style__segment-four .sc-form.modular-form"
    );
    let form_id = form.getAttribute("data-form-id");
    let ofp_endpoint = form.getAttribute("data-url");
    let xhr = new XMLHttpRequest();
    xhr.open("POST", ofp_endpoint, true);
    xhr.setRequestHeader(
      "Content-Type",
      "application/x-www-form-urlencoded; charset=UTF8"
    );
    xhr.onload = function (res) {
      if (xhr.status === 200) {
        let htmlObject = res.target.responseText;
        let failedIndex = htmlObject.indexOf("Failed");
        if (failedIndex >= 0) {
          let failureHtml =
            '<div class="failureNote">' +
            form.getAttribute("data-failure-message") +
            "</div>";
          document.querySelector(".sc-financial-style__message").innerHTML =
            failureHtml;
          document.querySelector(".sc-financial-style__message").style.display =
            "block";
          return false;
        }

        let newFid = form_id.toUpperCase();
        let startPoint = htmlObject.indexOf(newFid);
        let endPoint = htmlObject.indexOf("<", startPoint);

        let sgrID = htmlObject.substring(startPoint, endPoint);
        let successHtml =
          '<div class="sc-financial-style__successMsg">' +
          form.getAttribute("data-success-message") +
          ' <span class="sgrID">' +
          sgrID +
          "</span></div>";
        document.querySelector(".sc-financial-style__message").innerHTML =
          successHtml;
        document.querySelector(".sc-financial-style__message").style.display =
          "block";
        let allFormBlock = document.querySelectorAll(".sc-form__col");
        if (allFormBlock.length) {
          for (let i = 0; i < allFormBlock.length; i++) {
            allFormBlock[i].classList.add("hide");
          }
        }
        document
          .querySelector(".sc-financial-style__button-container")
          .classList.add("hide");
        let disclaimerNote = document.querySelector(
          ".sc-financial-style__segment-four-notes"
        );
        if (disclaimerNote) {
          disclaimerNote.classList.add("hide");
        }
      } else {
        let failureHtml =
          '<div class="failureNote">' +
          form.getAttribute("data-failure-message") +
          "</div>";
        document.querySelector(".sc-financial-style__message").innerHTML =
          failureHtml;
        document.querySelector(".sc-financial-style__message").style.display =
          "block";
      }
    };
    this.adobeFormSuccess("submit");
    xhr.send("formXML=" + xml.trim());
  }
  adobeFormSuccess(customLinkText) {
    if (typeof window.adobeDataLayer == "undefined") return;
    let that = this;
    const validInputAttrs = [
      "alphabetic-text",
      "alphanumeric-text",
      "number",
      "phone",
      "email",
      "text",
    ];
    if (typeof window.digitalData == "object") {
      that.commonAdobeScript();
      let labelText = "",
        labelValue = "";
      let formSelect = document.querySelector(
        ".sc-financial-style__segment-four-wrapper"
      );
      let allFields = formSelect.querySelectorAll(
        ".modular-form .modular-form-container"
      );
      if (allFields.length) {
        // eslint-disable-next-line no-unused-vars
        for (let i = 0; i < allFields.length; i++) {
          let attr = allFields[i].getAttribute("data-field-type");
          let fieldName = allFields[i].getAttribute("data-xml-key");
          if (!attr || !fieldName) continue;
          labelText += labelText ? ":" + fieldName : fieldName;
          if (validInputAttrs.includes(attr)) {
            let value = allFields[i].querySelector("input").value;
            labelValue += labelValue ? ":" + value : value;
          } else if (attr == "phone-code") {
            let value =
              allFields[i].querySelector(".code").value +
              allFields[i].querySelector(".phone-field").value;
            labelValue += labelValue ? ":" + value : value;
          } else if (attr == "email") {
            let value = allFields[i].querySelector("email").value;
            labelValue += labelValue ? ":" + value : value;
          } else if (attr == "text") {
            let value = allFields[i].querySelector("text").value;
            labelValue += labelValue ? ":" + value : value;
          } else if (attr == "dropdown") {
            let value = allFields[i].querySelector("select").value;
            labelValue += labelValue ? ":" + value : value;
          } else if (attr == "checkbox" || attr == "toggle") {
            let value = allFields[i].querySelector("input:checked");
            value = value || value == "0" ? "yes" : "no";
            labelValue += labelValue ? ":" + value : value;
          } else if (attr == "radio") {
            let value = allFields[i].querySelector("input:checked").value;
            labelValue += labelValue ? ":" + value : value;
          } else if (attr == "checkbox-view-list") {
            let value = allFields[i].querySelector("input:checked");
            value = value || value == "0" ? "yes" : "no";
            labelValue += labelValue ? ":" + value : value;
          }
        }
      }

      labelText = labelText.toLowerCase();
      labelValue = labelValue.toLowerCase();

      window.digitalData.customLinkClick = {
        customLinkText: customLinkText,
        customLinkRegion: "left bottom",
        customLinkType: "button",
      };

      window.digitalData.form.formFields = [];
      window.digitalData.form.formFields.push({
        formFieldName: labelText,
        formFieldValue: labelValue,
      });

      let dataObject = {
        ...digitalData,
        event: "ctaClick",
      };
      window.adobeDataLayer.push(dataObject);
      return {
        labelText: labelText,
        labelValue: labelValue,
      };
    }
  }

  commonAdobeScript() {
    let that = this;
    if (typeof window.digitalData == "object") {
      let modularForm = document.querySelector(".modular-form");
      window.digitalData.page.pageInfo.buildDetails = "web3.0";
      window.digitalData.page.pageInfo.libDetails =
        _satellite.environment.stage;

      that.getIntExtCampaignInfo();
      let pageName = window.digitalData.page.pageInfo.pageName.split(":");
      window.digitalData.product = [];
      window.digitalData.product.push({
        productInfo: {
          productID: this.productId,
          productName: this.productName,
          productCategory: pageName[4],
          productSubcategory: pageName[5],
        },
      });

      window.digitalData.customLinkClick = {
        customLinkText: "na",
        customLinkRegion: "na",
        customLinkType: "na",
      };

      window.digitalData.user = window.digitalData.user || {};
      window.digitalData.user.userInfo = {
        userStatus: "guest",
        userType: "NTB",
        segment: pageName[2],
        loginType: "na",
        userID: "na",
      };

      window.digitalData.form = {
        formName: this.productName == "na" ? pageName[6] : this.productName,
        formStepName: "na",
        formType: pageName[3],
        formPlatform: "udp-form",
        formID:
          modularForm && modularForm.getAttribute("data-form-id")
            ? modularForm.getAttribute("data-form-id")
            : "na",
      };
      pageName[7] = this.productName == "na" ? pageName[6] : this.productName;
      window.digitalData.page.pageInfo.pageName = pageName.join(":");
    }
  }

  getIntExtCampaignInfo() {
    let allowableQueryString = [
      "intcid",
      "subChanCode",
      "referId",
      "instance",
      "camp_id",
      "pid",
      "promoCode",
      "promo",
      "state",
    ];

    let intCampaignName = "";
    let intCampaignValue = "";
    let queryStringList = [];
    let queryString = window.location.search;
    let extCampaignName = "";
    let extCampaignValue = "";

    if (queryString) {
      queryString = queryString.substring(1);
      if (queryString) {
        queryStringList = queryString.split("&");
      }
    }
    //Take it from local storage
    // eslint-disable-next-line no-unused-vars
    for (let i in allowableQueryString) {
      let cookieValue = Utils.getCookie(allowableQueryString[i]);
      let localStorageValue = Utils.getLocalStorageWithExpiry(
        allowableQueryString[i]
      );
      if (intCampaignName) {
        intCampaignName += ":";
        intCampaignValue += ":";
      }
      intCampaignName += allowableQueryString[i];
      if (cookieValue) {
        intCampaignValue += cookieValue;
      } else if (localStorageValue) {
        intCampaignValue += localStorageValue;
      } else {
        intCampaignValue += "na";
      }
    }

    //take it from query string
    allowableQueryString = [
      "aggregator_code",
      "aggregator_type",
      "aggregator_instance",
    ]; //missing parameter added
    // eslint-disable-next-line no-unused-vars
    for (let i in allowableQueryString) {
      if (intCampaignName) {
        intCampaignName += ":";
        intCampaignValue += ":";
      }
      intCampaignName += allowableQueryString[i];
      if (queryStringList.length) {
        let found = false;
        let result;
        // eslint-disable-next-line no-unused-vars
        for (let j in queryStringList) {
          result = queryStringList[j].split("=");
          if (result[0].toLowerCase() == allowableQueryString[i]) {
            found = true;
            break;
          }
        }
        intCampaignValue += found ? result[1] : "na";
      } else {
        intCampaignValue += "na";
      }
    }

    //External campaign
    if (queryStringList.length) {
      // eslint-disable-next-line no-unused-vars
      for (let i in queryStringList) {
        let result = queryStringList[i].split("=");
        if (allowableQueryString.indexOf(result[0].toLowerCase()) === -1) {
          if (extCampaignValue != "") {
            extCampaignName += ":";
            extCampaignValue += ":";
          }
          extCampaignName += result[0];
          extCampaignValue += result[1];
          if (result[0].toLowerCase() == "productid") {
            this.productId = result[1].toLowerCase();
          } else if (result[0].toLowerCase() == "productname") {
            this.productName = result[1].toLowerCase();
          }
        }
      }
    }
    if (extCampaignName == "") {
      extCampaignName = "na";
      extCampaignValue = "na";
    }
    return {
      intName: intCampaignName.toLowerCase(),
      intVal: intCampaignValue.toLowerCase(),
      extName: extCampaignName.toLowerCase(),
      extVal: extCampaignValue.toLowerCase(),
    };
  }
  /**
   * create xml data with values
   *
   * prepareXMLData()
   */
  prepareXMLData() {
    let form = document.querySelector(".modular-form");
    let form_id = form.getAttribute("data-form-id");
    let fieldValue = {};
    fieldValue["product"] = form.getAttribute("data-product-name");

    let formStatus = form_id == "AER796" || form_id == "AER462" ? true : false;
    let allFields = document.querySelectorAll(
      ".c-modal.is-open .modular-form-container"
    );
    if (allFields.length) {
      for (let i = 0; i < allFields.length; i++) {
        let attr = allFields[i].getAttribute("data-field-type");
        let name = allFields[i].getAttribute("data-xml-key");
        if (!attr || !name) continue;

        if (attr == "alphabetic-text") {
          fieldValue[name] = allFields[i].querySelector("input").value;
        } else if (attr == "phone-code") {
          fieldValue[name] = (
            allFields[i].querySelector(".code").value +
            allFields[i].querySelector(".phone-field").value
          ).trim();
        } else if (attr == "phone") {
          fieldValue[name] = allFields[i].querySelector("input").value;
        } else if (attr == "email") {
          fieldValue[name] = allFields[i].querySelector("input").value;
        } else if (attr == "text") {
          fieldValue[name] = allFields[i].querySelector("input").value;
        } else if (attr == "textarea") {
          fieldValue[name] = allFields[i].querySelector("textarea").value;
        } else if (attr == "dropdown") {
          fieldValue[name] = allFields[i].querySelector("select").value;
        } else if (attr == "toggle") {
          fieldValue[name] = allFields[i].querySelector("input:checked")
            ? "yes"
            : "no";
        } else if (attr === "radio" || attr === "checkbox") {
          const checkedInput = allFields[i].querySelector("input:checked");
          fieldValue[name] = checkedInput ? checkedInput.value : "";
        }
      }
    }

    let codeSelector = document.querySelector(".code");
    let minLength = 0;
    if (codeSelector) {
      codeSelector.getAttribute("minlength");
    }
    if (!minLength) {
      minLength = 8;
    }

    if (formStatus) {
      fieldValue["contact"] =
        fieldValue["contact"].length >= minLength
          ? fieldValue["contact"]
          : fieldValue["email"];
    }

    const browserName =
      Utils.browserDetect.searchString(Utils.browserDetect.dataBrowser) ||
      "Other";
    /* eslint-disable compat/compat */
    const browserVersion =
      Utils.browserDetect.searchVersion(navigator.userAgent) ||
      Utils.browserDetect.searchVersion(navigator.appVersion) ||
      "Unknown";
    /* eslint-enable compat/compat */
    fieldValue["browser-info"] = browserName + " " + browserVersion;
    fieldValue["os-info"] = Utils.getDeviceDetails().os;
    fieldValue["country"] = Utils.getCurrentCountry();
    fieldValue["device-info"] =
      Utils.getDeviceDetails().deviceInfo === "m" ? "mobile" : "desktop";
    fieldValue["fullurl"] = encodeURIComponent(window.location.href);

    const urlParams = Utils.convertQueryStringToJsonObject(
      Utils.getPageUrl().queryString
    );
    fieldValue["product-name"] = urlParams["productName"]
      ? urlParams["productName"]
      : "";
    fieldValue["campaign-id"] = urlParams["campaign_id"]
      ? urlParams["campaign_id"]
      : "";
    fieldValue["session-id"] = this.sessionId();

    let allowableQueryString = Utils.constants.ALLOWABLE_QUERYSTRING.scb;
    // eslint-disable-next-line no-unused-vars
    for (let index in allowableQueryString) {
      let cookieValue = Utils.getCookie(allowableQueryString[index]);
      if (cookieValue) {
        fieldValue[`${allowableQueryString[index]}`] = cookieValue;
      } else {
        let localStorageValue = Utils.getLocalStorageWithExpiry(
          allowableQueryString[index]
        );
        fieldValue[`${allowableQueryString[index]}`] = localStorageValue
          ? localStorageValue
          : "";
      }
    }

    let xmlStr = window.modularXML;
    xmlStr = xmlStr.replace(new RegExp(`data-form-id`, "gi"), form_id);
    if (Object.keys(fieldValue).length) {
      // eslint-disable-next-line no-unused-vars
      for (let index in fieldValue) {
        let replace = `data-${index}`;
        xmlStr = xmlStr.split(replace).join(fieldValue[index]);
      }
    }
    return xmlStr.trim();
  }

  sessionId(length = 120) {
    return [...Array(length)]
      .map(() => Math.random().toString(36).substr(2, 1))
      .join("");
  }
  /**
   * spread the targeted object
   *
   * _objectSpread()
   */
  _objectSpread(target) {
    let self = this;
    for (var i = 1; i < arguments.length; i++) {
      var source = null != arguments[i] ? arguments[i] : {};
      i % 2
        ? self._ownKeys(Object(source), !0).forEach(function (key) {
            self._defineProperty(target, key, source[key]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(
            target,
            Object.getOwnPropertyDescriptors(source)
          )
        : self._ownKeys(Object(source)).forEach(function (key) {
            Object.defineProperty(
              target,
              key,
              Object.getOwnPropertyDescriptor(source, key)
            );
          });
    }
    return target;
  }
  /**
   * owning the object key
   *
   * _ownKeys()
   */
  _ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      enumerableOnly &&
        (symbols = symbols.filter(function (sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })),
        keys.push.apply(keys, symbols);
    }
    return keys;
  }
  /**
   * defining the property of obj
   *
   * _defineProperty()
   */
  _defineProperty(obj, key, value) {
    let self = this;
    key = self._toPropertyKey(key);
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true,
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  /**
   * for getting the property key
   *
   * _toPropertyKey()
   */
  _toPropertyKey(arg) {
    let self = this;
    var key = self._toPrimitive(arg, "string");
    return self._typeof(key) === "symbol" ? key : String(key);
  }
  /**
   * for getting the primitive value
   *
   * _toPropertyKey()
   */
  _toPrimitive(input, hint) {
    let self = this;
    if (self._typeof(input) !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
      var res = prim.call(input, hint || "default");
      if (self._typeof(res) !== "object") return res;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
  }
  /**
   * for getting the type of the obj
   *
   * _toPropertyKey()
   */
  _typeof(obj) {
    "@babel/helpers - typeof";
    let self = this;
    return (
      (self._typeof =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (obj) {
              return typeof obj;
            }
          : function (obj) {
              return obj &&
                "function" == typeof Symbol &&
                obj.constructor === Symbol &&
                obj !== Symbol.prototype
                ? "symbol"
                : typeof obj;
            }),
      self._typeof(obj)
    );
  }
}

const scInstance = new FinancialStyle();
document.onreadystatechange = function () {
  if (document.readyState === "complete") {
    scInstance.init();
  }
};

// export default scInstance;
