class Offers {
  init() {
    this.loadArticleDataApi();
    this.getStartedModal();
    this.loadCommonDataApi();
  }

  async loadArticleDataApi() {
    const that = this;
    try {
      // Now fetch the article data
      let jsonData;
      // jsonData = await this.getDataFromJsBridge(that.textObj.articlePlacementId);
      jsonData = await this.fetchApiData(
        "http://localhost/jQuery-migration/tulu/json/updated/levelup.json"
      );
      if (
        !jsonData ||
        (typeof jsonData === "object" && Object.keys(jsonData).length === 0)
      ) {
        return; // Exit the function if no data is found
      }

      that.articlePlacementData = jsonData?.data?.offers || [];

      console.log("that.articlePlacementData", that.articlePlacementData);

      that.generateLevelUp();
      that.levelUpEarningHistory();

      // Do something with the fetched data, if needed
    } catch (error) {
      console.error("Error fetching consolidate data:", error);
    }
  }

  async getStartedModal() {
    const that = this;
    try {
      let jsonData;
      // jsonData = await this.getDataFromJsBridge(
      //   that.textObj.registrationPlacementId
      // );
      jsonData = await this.fetchApiData(
        "http://localhost/jQuery-migration/tulu/json/updated/rewards_registration.json"
      );
      if (
        !jsonData ||
        (typeof jsonData === "object" && Object.keys(jsonData).length === 0)
      ) {
        return; // Exit the function if no data is found
      }
      that.regPlacementData = jsonData?.data?.offers?.offers?.[0]?.fields || [];

      const registrationFlag = that.getObjectValue(
        that.regPlacementData,
        "RegistrationFlag"
      );

      if (registrationFlag === "Y") {
        that.ScTuluCamp.querySelector(".sc-get-started-yes").classList.add(
          "visible"
        );
      } else {
        that.ScTuluCamp.querySelector(".sc-get-started-no").classList.add(
          "visible"
        );
      }
      document.querySelector("html").classList.add("sc-modal__no-scroll");
    } catch (error) {
      console.error("Error fetching consolidate data:", error);
    }

    const buttons = that.ScTuluCamp.querySelectorAll(
      ".sc-get-started .sc-tulu-camp-modal__footer .sc-btn--medium"
    );
    if (buttons.length) {
      buttons.forEach((button) => {
        button.addEventListener("click", (event) => {
          if (
            !event.target
              .closest("button")
              .classList.contains("sc-tulu-camp-modal__footer-btn--disabled")
          ) {
            event.target.closest(".sc-get-started").classList.remove("visible");
            document
              .querySelector("html")
              .classList.remove("sc-modal__no-scroll");

            handleAnalyticsCTA(event, event.target.closest("button"), {
              ctaType: "button",
              ctaPosition: "bottom",
              xLinkRegion: "middle",
            });

            that.handleRegistrationImpression("Clicked");
          }
        });
      });
    }

    const checkboxes = that.ScTuluCamp.querySelectorAll(
      ".sc-get-started input[type='checkbox']"
    );
    if (checkboxes.length) {
      checkboxes.forEach((checkbox) => {
        checkbox.addEventListener("change", (event) => {
          const button = event.target
            .closest(".sc-get-started")
            .querySelector(".sc-tulu-camp-modal__footer .sc-btn--medium");
          if (event.target.checked) {
            button.classList.remove("sc-tulu-camp-modal__footer-btn--disabled");
          } else {
            button.classList.add("sc-tulu-camp-modal__footer-btn--disabled");
          }
        });
      });
    }
  }

  async loadCommonDataApi() {
    const that = this;
    try {
      let jsonData;
      // data = await this.getDataFromJsBridge(that.textObj.commonPlacementId);
      jsonData = await this.fetchApiData(
        "http://localhost/jQuery-migration/tulu/json/updated/tradeup.json"
      );
      if (
        !jsonData ||
        (typeof jsonData === "object" && Object.keys(jsonData).length === 0)
      ) {
        return; // Exit the function if no data is found
      }
      console.log("Common Data: ", jsonData);

      that.commonPlacementData =
        jsonData?.data?.offers?.offers?.[0]?.fields || [];

      const diversify = Number(
        that.getObjectValue(jsonData.fields, "ConsolidatedDiversify")
      );
      const tradeUp = Number(
        that.getObjectValue(jsonData.fields, "ConsolidatedTradeup")
      );
      const levelUp = Number(
        that.getObjectValue(jsonData.fields, "ConsolidatedLevelup")
      );

      that.ScTuluCamp.querySelector(
        ".sc-tulu-camp-product-card-diversify .sc-tulu-camp-product-card__progress-value"
      ).innerHTML = convertNumbers(that.ScTuluCamp, diversify);
      that.ScTuluCamp.querySelector(
        ".sc-tulu-camp-tab__content-item-diversify .sc-tulu-camp-product-card__progress-value"
      ).innerHTML = convertNumbers(that.ScTuluCamp, diversify);
      that.ScTuluCamp.querySelector(
        ".sc-tulu-camp-product-card-trade-up .sc-tulu-camp-product-card__progress-value"
      ).innerHTML = convertNumbers(that.ScTuluCamp, tradeUp);
      that.ScTuluCamp.querySelector(
        ".sc-tulu-camp-tab__content-item-trade-up .sc-tulu-camp-product-card__progress-value"
      ).innerHTML = convertNumbers(that.ScTuluCamp, tradeUp);
      that.ScTuluCamp.querySelector(
        ".sc-tulu-camp-product-card-level-up .sc-tulu-camp-product-card__progress-value"
      ).innerHTML = convertNumbers(that.ScTuluCamp, levelUp);
      that.ScTuluCamp.querySelector(
        ".sc-tulu-camp-tab__content-item-level-up .sc-tulu-camp-product-card__progress-value"
      ).innerHTML = convertNumbers(that.ScTuluCamp, levelUp);

      //Update section miles
      const mileList = that.ScTuluCamp.querySelectorAll(
        ".sc-tulu-camp-product-card__progress-total strong"
      );
      mileList.forEach((mile) => {
        mile.innerText = convertNumbers(
          that.ScTuluCamp,
          trim(mile.innerText).replace(/[^0-9.]/g, "")
        );
      });

      const valueFound = that.generateDiversify();
      that.diversifyNextTask();
      that.generateTradeUp();

      const numberList = that.ScTuluCamp.querySelectorAll(
        ".sc-tulu-camp-product-card__progress-total-main strong"
      );
      let totalMilesAccumulated = 0;
      numberList.forEach((el) => {
        if (
          (valueFound && el.closest(".sc-tulu-camp-product-card-diversify")) ||
          !el.closest(".sc-tulu-camp-product-card-diversify")
        ) {
          totalMilesAccumulated += Number(
            trim(el.innerText).replace(/[^0-9.]/g, "")
          );
        }
      });

      const totalAccumulated = that.ScTuluCamp?.querySelector(
        ".sc-tulu-camp-milescard__desc strong"
      );
      if (totalAccumulated) {
        totalAccumulated.innerText = convertNumbers(
          that.ScTuluCamp,
          totalMilesAccumulated
        );
      }

      // Update total miles display
      const milesSelector = that.ScTuluCamp?.querySelector(
        ".sc-cvp__middle strong"
      );
      if (milesSelector) {
        milesSelector.innerText = convertNumbers(
          that.ScTuluCamp,
          (valueFound ? diversify : 0) + tradeUp + levelUp
        );
      }

      that.diversifyEarningHistory();
      that.tradeUpEarningHistory();
    } catch (error) {
      console.error("Error fetching consolidate data:", error);
    }
  }

  getDataFromJsBridge(placeholderName) {
    // eslint-disable-next-line no-undef
    return new Promise((resolve, reject) => {
      if (!window.cordova || !window.cordova.exec) {
        alert("Cordova is not available.");
        return reject(new Error("Cordova is not available."));
      }

      const icmId = sessionStorage.getItem("icmpid");
      if (!icmId) {
        console.warn("ICM ID is missing from sessionStorage.");
      }

      const requestBody = JSON.stringify({
        operationName: "getCustomerOffers",
        variables: {
          placeholder: placeholderName,
          icmId: icmId || "", // Ensuring no `null` or `undefined`
          templateMerge: false,
        },
        query: `
                query getCustomerOffers($placeholder: String!, $icmId: String, $templateMerge: Boolean) { 
                    offers(placeholder: $placeholder, icmId: $icmId, templateMerge: $templateMerge) { 
                        __typename 
                        placeholder 
                        offers { 
                            __typename 
                            id 
                            title 
                            message 
                            images { __typename ...imageSet } 
                            primarycta { __typename ...ctaLink } 
                            secondarycta { __typename ...ctaLink } 
                            feedback { __typename name group interactionId issue rank placement } 
                            index 
                            fields { __typename name value } 
                        } 
                    } 
                } 
                fragment imageSet on ImageSet { 
                    __typename small medium large 
                } 
                fragment ctaLink on CtaLink { 
                    __typename label link deeplink 
                }
            `,
      });

      const requestHeaders = JSON.stringify({
        "X-APOLLO-OPERATION-NAME": "getCustomerOffers",
      });

      window.cordova.exec(
        (successData) => {
          alert(
            `Cordova execution success for ${placeholderName}:`,
            JSON.stringify(successData)
          );
          resolve(successData);
        },
        (errorData) => {
          console.error("Cordova execution failed:", errorData);
          reject(new Error(`Cordova error: ${JSON.stringify(errorData)}`));
        },
        "gqlplugin", // Plugin name
        "request", // Function name
        [requestBody, requestHeaders, "POST"] // Parameters
      );
    });
  }
}
