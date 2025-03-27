// import {
//   getQueryParam,
//   getPageContext,
//   convertNumbers,
//   handleAnalyticsCTA,
//   trim,
//   getCurrentCountry,
//   getFormattedNumber,
// } from "../../../js/sc-common-methods";

class ScTuluCampaign {
  init() {
    const that = this;
    that.parentModalId = "";
    that.ScTuluCamp = document.querySelector(".sc-tulu-camp");
    that.currentArticleId = "";
    that.earningHistory = that.ScTuluCamp.querySelector(
      ".sc-tulu-camp-tab__content-item--earning-history"
    );
    that.earningHistory.innerHTML = "";
    that.errorFound = false;
    that.desktopDevice = true;

    this.textObj = {
      queryParameterName: "tab",
      registrationPlacementId: "rewards_registration",
      commonPlacementId: "tradeup_page",
      articlePlacementId: "levelup_page",
      diversifyText:
        "You're all set. Check out the other missions to get rewarded.",
      tradeUpLabel: "Trade",
      mileText: "Miles",
      levelUp: {
        feedbackSuccess: "Feedback Success",
        feedbackError: "Feedback Error",
        feedbackFailedText: "Failed",
        feedbackFailedDesc: "Sorry! You failed the test.",
        feedbackSuccessDesc: "Congratulations! You passed the test.",
        articles: [
          {
            articleId: "wealth-needs-3",
            quizValue:
              "ca978112ca1bbdcafac231b39a23dc4da786eff8147c4e72b9807785afee48bb", //A
            title: "Tips to earn HKD50,000 passive income",
            description:
              "How can you achieve financial freedom and live the life you envision sooner?",
            articlePoints: 0,
            quizPoints: 50,
            popupTitle: "Tips to earn HKD50,000 passive income",
            popupDescription:
              "How can you achieve financial freedom and live the life you envision sooner?",
          },
          {
            articleId: "wealth-needs-5",
            quizValue:
              "3e23e8160039594a33894f6564e1b1348bbd7a0088d42c4acb73eeaed59c009d", //B
            title: "💰Cash is no longer king?",
            description: "It’s time to rethink cash as the Fed cuts rates",
            articlePoints: 0,
            quizPoints: 50,
            popupTitle: "💰Cash is no longer king?",
            popupDescription: "It’s time to rethink cash as the Fed cuts rates",
          },
          {
            articleId: "wealth-needs-2",
            quizValue:
              "ca978112ca1bbdcafac231b39a23dc4da786eff8147c4e72b9807785afee48bb", //A
            title:
              "⚡The silent cash thief: how inflation steals 30% of savings",
            description: `Be aware of "cash thief"`,
            articlePoints: 0,
            quizPoints: 50,
            popupTitle: "💰Cash is no longer king?",
            popupDescription: "It’s time to rethink cash as the Fed cuts rates",
          },
          {
            articleId: "wealth-needs-9",
            quizValue:
              "2e7d2c03a9507ae265ecf5b5356885a53393a2029d241394997265a1a25aefc6", //C
            title: "💡▶️2025 Global Market Outlook: Foundation Portfolio",
            description: "💡1-minute 2025 Investment Essentials",
            articlePoints: 0,
            quizPoints: 50,
            popupTitle: "💡▶️2025 Global Market Outlook: Foundation Portfolio",
            popupDescription: "💡1-minute 2025 Investment Essentials",
          },
          {
            articleId: "wealth-needs-33",
            quizValue:
              "3e23e8160039594a33894f6564e1b1348bbd7a0088d42c4acb73eeaed59c009d", //B
            title: "💡▶️2025 Global Market Outlook: Passive Income",
            description: "1-minute 2025 Income Strategies",
            articlePoints: 0,
            quizPoints: 50,
            popupTitle: "💡▶️2025 Global Market Outlook: Passive Income",
            popupDescription: "1-minute 2025 Income Strategies",
          },
          {
            articleId: "wealth-needs-36",
            quizValue:
              "18ac3e7343f016890c510e93f935261169d9e3f565436429830faf0934f4f8e4", //d
            title: "💡▶️2025 Global Market Outlook: Foreign Exchange",
            description: "1-minute 2025 FX Strategies",
            articlePoints: 0,
            quizPoints: 50,
            popupTitle: "💡▶️2025 Global Market Outlook: Foreign Exchange",
            popupDescription: "1-minute 2025 FX Strategies",
          },
          {
            articleId: "wealth-needs-51",
            quizValue:
              "18ac3e7343f016890c510e93f935261169d9e3f565436429830faf0934f4f8e4", //d
            title: "💱Unveiling the Mystique of Carry Trade",
            description:
              "Explore how investors earn interest spread by carry trade",
            articlePoints: 0,
            quizPoints: 50,
            popupTitle: "💱Unveiling the Mystique of Carry Trade",
            popupDescription:
              "Explore how investors earn interest spread by carry trade",
          },
          {
            articleId: "wealth-needs-39",
            quizValue:
              "ca978112ca1bbdcafac231b39a23dc4da786eff8147c4e72b9807785afee48bb", //A
            title: "💲Debunk safe haven currencies",
            description:
              "What drives the inflow into the safe haven currencies during market turbulence?",
            articlePoints: 0,
            quizPoints: 50,
            popupTitle: "💲Debunk safe haven currencies",
            popupDescription:
              "What drives the inflow into the safe haven currencies during market turbulence?",
          },
        ],
      },
      tradeUp: {
        progressNumber: [100, 200, 300],
        perRow: 6,
        maxCount: 18,
        fields: [
          {
            key: "RewardCountFX",
            text: "Online Equity",
            points: 1000,
            className: "sc-tulu-camp-progress__content-sxa",
          },
          {
            key: "RewardCountSXA",
            text: "FX",
            points: 1000,
            className: "sc-tulu-camp-progress__content-fx",
          },
          {
            key: "RewardCountUT",
            text: "Unit Trust",
            points: 1000,
            className: "sc-tulu-camp-progress__content-ut",
          },
        ],
      },
      diversify: {
        sxa: [
          {
            key: "OpenAccountSXA",
            text: "Open An Account",
            value: "1000",
            conditional: true,
            popupTitle: "You’ll be brought to [Stock Trading Platform]",
            popupDescription:
              "You’ll not be able to get straight back to the the Missions directly.",
            popupCta:
              "https://retail.sc.com/scmobile/hk?ngroute=web/oe-webview",
          },
          {
            key: "FirstTradeSXA",
            text: "Make your first trade",
            value: "1000",
            conditional: true,
            popupTitle: "You’ll be brought to [Stock Trading Platform]",
            popupDescription:
              "You’ll not be able to get straight back to the the Missions directly.",
            popupCta:
              "https://retail.sc.com/scmobile/hk?ngroute=web/oe-webview",
          },
          {
            key: "CompletionBonusSXA",
            text: "Completion Bonus",
            value: "2000",
            conditional: false,
            popupTitle: "You’ll be brought to [Stock Trading Platform]",
            popupDescription:
              "You’ll not be able to get straight back to the the Missions directly.",
            popupCta: "#",
          },
        ],
        fx: [
          {
            key: "FirstTradeFX",
            text: "Make your first trade",
            value: "1000",
            conditional: true,
            popupTitle: "You’ll be brought to [Foreign Exchange Platform]",
            popupDescription:
              "You’ll not be able to get straight back to the the Missions directly.",
            popupCta:
              "https://retail.sc.com/scmobile/hk?ngroute=web/livefx-webview",
          },
        ],
        ut: [
          {
            key: "OpenAccountUT",
            text: "Open An Account",
            value: "1000",
            conditional: true,
            popupTitle: "You’ll be brought to [Investment fund]",
            popupDescription:
              "You’ll not be able to get straight back to the the Missions directly.",
            popupCta:
              "https://retail.sc.com/scmobile/hk?ngroute=web/omf-webview",
          },
          {
            key: "FirstTradeUT",
            text: "Make your first trade",
            value: "1000",
            conditional: true,
            popupTitle: "You’ll be brought to [Investment fund]",
            popupDescription:
              "You’ll not be able to get straight back to the the Missions directly.",
            popupCta:
              "https://retail.sc.com/scmobile/hk?ngroute=web/omf-webview",
          },
          {
            key: "CompletionBonusUT",
            text: "Finish all actions to earn bonus miles",
            value: "2000",
            conditional: false,
            popupTitle: "You’ll be brought to [Investment fund]",
            popupDescription:
              "You’ll not be able to get straight back to the the Missions directly.",
            popupCta: "#",
          },
        ],
      },
      nextTask: {
        diversify: [
          {
            key: "FirstTradeFX",
            text: "FX first Trade",
          },
          {
            key: "OpenAccountSXA",
            text: "SXA Open Account",
          },
          { key: "FirstTradeSXA", text: "SXA First Trade" },
          { key: "OpenAccountUT", text: "UT Open Account" },
          { key: "FirstTradeUT", text: "UT first Tarde" },
        ],
        tradeUp: {
          labelText: "Complete your data-number trade",
        },
      },
    };

    that.handleTabsContent();
    that.getStartedModal();
    that.asiaMilesYesModal();
    that.handleModal();
    that.handleQuestionnaire();
    that.handleFaqAnalytics();
    that.handleTermsAnalytics();
  }

  /**
   * Generates and appends the earning history for completed articles.
   * Iterates through articles in `this.textObj.levelUp.articles`, checks if they are read or quizzes are completed,
   * then constructs and appends HTML to `that.earningHistory`.
   *
   * @returns {void}
   */
  levelUpEarningHistory() {
    const that = this;
    const data = that.articlePlacementData;
    let htmlCode = "";
    this.textObj.levelUp.articles.forEach((article) => {
      const articleObj = data.offers.find((offer) =>
        offer.fields.some(
          (field) =>
            field.name === "ArticleID" && field.value === article.articleId
        )
      );

      const articleRead = articleObj
        ? articleObj.fields.find((field) => field.name === "ArticleRead").value
        : null;
      const quizCompleted = articleObj
        ? articleObj.fields.find((field) => field.name === "QuizCompleted")
            .value
        : null;

      if (articleRead === "Y" || quizCompleted === "Y") {
        const total = article.articlePoints + article.quizPoints;
        htmlCode += `<div class="sc-tulu-camp-earnings__card sc-tulu-camp-earnings--purple">
          <div class="sc-tulu-camp-earnings__left">
            <div class="sc-tulu-camp-earnings__icon"></div>
            <div class="sc-tulu-camp-earnings__text">
              <div class="sc-tulu-camp-earnings__head">
                ${article.title}
              </div>
              <p class="sc-tulu-camp-earnings__sub-head">
              ${article.description}
              </p>
            </div>
          </div>
          <div class="sc-tulu-camp-earnings__right">
            <p>
              <strong>${convertNumbers(that.ScTuluCamp, total)}</strong>
              ${that.textObj.mileText}
            </p>
          </div>
        </div>`;
      }
    });
    that.earningHistory.innerHTML += htmlCode;
  }

  /**
   * Generates and appends the earning history for TradeUp activities.
   * Iterates through `this.textObj.tradeUp.fields`, retrieves corresponding values from `commonPlacementData.fields`,
   * and constructs HTML for display if a valid value exists.
   *
   * @returns {void}
   */
  tradeUpEarningHistory() {
    const that = this;
    const data = that.commonPlacementData.fields;
    let htmlCode = "";
    that.textObj.tradeUp.fields.forEach((item) => {
      const value = Number(that.getObjectValue(data, item.key));
      if (value) {
        htmlCode += `<div class="sc-tulu-camp-earnings__card sc-tulu-camp-earnings--green">
          <div class="sc-tulu-camp-earnings__left">
            <div class="sc-tulu-camp-earnings__icon"></div>
            <div class="sc-tulu-camp-earnings__text">
              <div class="sc-tulu-camp-earnings__head">
                ${that.textObj.tradeUpLabel} ${value} 
              </div>
              <p class="sc-tulu-camp-earnings__sub-head">
                ${item.text}
              </p>
            </div>
          </div>
          <div class="sc-tulu-camp-earnings__right">
            <p>
              <strong>${convertNumbers(that.ScTuluCamp, item.points)}</strong>
              ${that.textObj.mileText}
            </p>
          </div>
        </div>`;
      }
    });
    that.earningHistory.innerHTML += htmlCode;
  }

  /**
   * Generates and appends the earning history for Diversify activities.
   * Iterates through `this.textObj.diversify`, checks conditions for each item,
   * retrieves relevant values, and constructs HTML for display.
   *
   * @returns {void}
   */
  diversifyEarningHistory() {
    const that = this;
    const data = that.commonPlacementData.fields;
    let htmlCode = "";
    Object.entries(this.textObj.diversify).forEach(([category, items]) => {
      items.forEach((item) => {
        if (item.conditional) {
          const value = that.getObjectValue(data, item.key);
          if (value === "Y") {
            const keyName = `RewardCount${category.toUpperCase()}`;
            const subHeading =
              that.textObj.tradeUp.fields.find((item) => item.key === keyName)
                ?.text || null;

            htmlCode += `<div class="sc-tulu-camp-earnings__card sc-tulu-camp-earnings--blue">
            <div class="sc-tulu-camp-earnings__left">
              <div class="sc-tulu-camp-earnings__icon"></div>
              <div class="sc-tulu-camp-earnings__text">
                <div class="sc-tulu-camp-earnings__head">
                  ${item.text}
                </div>
                <p class="sc-tulu-camp-earnings__sub-head">${subHeading}</p>
              </div>
            </div>
            <div class="sc-tulu-camp-earnings__right">
              <p>
                <strong>${convertNumbers(that.ScTuluCamp, item.value)}</strong>
                ${that.textObj.mileText}
              </p>
            </div>
          </div>`;
          }
        }
      });
    });

    that.earningHistory.innerHTML += htmlCode;
  }

  /**
   * Fetches data from the given API URL and returns the parsed JSON response.
   * Handles errors gracefully by logging them and returning `null` if the request fails.
   *
   * @param {string} url - The API endpoint to fetch data from.
   * @returns {Promise<Object|null>} Resolves to the JSON response object or `null` if an error occurs.
   * @throws {Error} If the provided URL is invalid.
   */
  async fetchApiData(url) {
    const that = this;
    if (typeof url !== "string" || !url.trim()) {
      throw new Error("Invalid URL: A valid URL string is required.");
    }

    try {
      const response = await fetch(url, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(
          `HTTP Error ${response.status}: ${response.statusText}`
        );
      }
      const data = await response.json();
      return data;
    } catch (error) {
      that.errorFound = that.errorFound || true;
      console.error("Fetch API Error:", error.message);
      return null; // Optionally return null instead of throwing
    }
  }

  /**
   * Retrieves data from the Cordova JavaScript bridge using a GraphQL query.
   * Sends a request to fetch customer offers based on a given placeholder name.
   *
   * @param {string} placeholderName - The placeholder name for fetching customer offers.
   * @returns {Promise<Object>} Resolves with the response data from Cordova or rejects with an error.
   */
  getDataFromJsBridge(placeholderName) {
    const that = this;
    // eslint-disable-next-line no-undef
    return new Promise((resolve, reject) => {
      if (!window.cordova || !window.cordova.exec) {
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
          resolve(successData);
        },
        (errorData) => {
          that.errorFound = that.errorFound || true;
          console.error("Cordova execution failed:", errorData);
          reject(new Error(`Cordova error: ${errorData}`));
        },
        "gqlplugin", // Plugin name
        "request", // Function name
        [requestBody, requestHeaders, "POST"] // Parameters
      );
    });
  }

  /**
   * Asynchronously loads common data from an API and updates the UI accordingly.
   *
   * @async
   * @function loadCommonDataApi
   * @returns {Promise<void>} A promise that resolves when the data is loaded and UI is updated.
   * @throws {Error} Logs an error if the API request fails.
   */
  async loadCommonDataApi() {
    const that = this;
    try {
      let jsonData;
      if (that.desktopDevice) {
        jsonData = await this.fetchApiData(
          "http://127.0.0.1:5502/json/updated/tradeup.json"
        );
      } else {
        jsonData = await this.getDataFromJsBridge(
          that.textObj.commonPlacementId
        );
        jsonData = JSON.parse(jsonData);
      }
      that.commonPlacementData = jsonData?.data?.offers?.offers?.[0] || [];
      // document.write('===========Common=============');
      // document.write(JSON.stringify(jsonData));

      const diversify = Number(
        that.getObjectValue(
          that.commonPlacementData.fields,
          "consolidatedDiversify"
        )
      );
      const tradeUp = Number(
        that.getObjectValue(
          that.commonPlacementData.fields,
          "consolidatedTradeup"
        )
      );
      const levelUp = Number(
        that.getObjectValue(
          that.commonPlacementData.fields,
          "consolidatedLevelUp"
        )
      );

      const diversifyTotal = Number(
        trim(
          that.ScTuluCamp.querySelector(
            ".sc-tulu-camp-product-card-diversify .sc-tulu-camp-product-card__progress-total-main strong"
          ).innerText
        ).replace(/[^0-9.]/g, "")
      );
      const diversifyWidth = (diversify / diversifyTotal) * 100;
      that.ScTuluCamp.querySelector(
        ".sc-tulu-camp-product-card-diversify .sc-tulu-camp-product-card__progress-bar-inner"
      ).style.width = `${diversifyWidth}%`;
      that.ScTuluCamp.querySelector(
        ".sc-tulu-camp-tab__content-item-diversify .sc-tulu-camp-product-card__progress-bar-inner"
      ).style.width = `${diversifyWidth}%`;

      const tradeUpTotal = Number(
        trim(
          that.ScTuluCamp.querySelector(
            ".sc-tulu-camp-product-card-trade-up .sc-tulu-camp-product-card__progress-total-main strong"
          ).innerText
        ).replace(/[^0-9.]/g, "")
      );
      const tradeUpWidth = (tradeUp / tradeUpTotal) * 100;
      that.ScTuluCamp.querySelector(
        ".sc-tulu-camp-product-card-trade-up .sc-tulu-camp-product-card__progress-bar-inner"
      ).style.width = `${tradeUpWidth}%`;
      that.ScTuluCamp.querySelector(
        ".sc-tulu-camp-tab__content-item-trade-up .sc-tulu-camp-product-card__progress-bar-inner"
      ).style.width = `${tradeUpWidth}%`;

      const levelUpTotal = Number(
        trim(
          that.ScTuluCamp.querySelector(
            ".sc-tulu-camp-product-card-level-up .sc-tulu-camp-product-card__progress-total-main strong"
          ).innerText
        ).replace(/[^0-9.]/g, "")
      );
      const levelUpWidth = (levelUp / levelUpTotal) * 100;
      that.ScTuluCamp.querySelector(
        ".sc-tulu-camp-product-card-level-up .sc-tulu-camp-product-card__progress-bar-inner"
      ).style.width = `${levelUpWidth}%`;
      that.ScTuluCamp.querySelector(
        ".sc-tulu-camp-tab__content-item-level-up .sc-tulu-camp-product-card__progress-bar-inner"
      ).style.width = `${levelUpWidth}%`;

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
      that.errorFound = that.errorFound || true;
      console.error("Error fetching consolidate data:", error);
    }
  }

  /**
   * Updates the task description in the product card if a matching value is found.
   * Iterates through `diversify` tasks and updates the `.sc-tulu-camp-product-card__task-desc`
   * element with the corresponding text if the value associated with `item.key` is "N".
   */
  diversifyNextTask() {
    const that = this;
    // eslint-disable-next-line no-unused-vars
    for (const item of that.textObj.nextTask.diversify) {
      const value = that.getObjectValue(
        that.commonPlacementData.fields,
        item.key
      );
      if (value === "N") {
        const content = that.ScTuluCamp.querySelector(
          ".sc-tulu-camp-product-card-diversify .sc-tulu-camp-product-card__bottom .sc-tulu-camp-product-card__task-desc-content"
        );
        if (content) {
          content.innerText = item.text;

          // eslint-disable-next-line no-unused-vars
          Object.entries(this.textObj.diversify).forEach(
            ([category, items]) => {
              items.forEach((itm) => {
                if (itm.conditional) {
                  if (itm.key === item.key) {
                    that.ScTuluCamp.querySelector(
                      ".sc-tulu-camp-product-card-diversify .sc-tulu-camp-product-card__bottom .sc-tulu-camp-product-card__task-value span"
                    ).innerText = convertNumbers(that.ScTuluCamp, itm.value);
                  }
                }
              });
            }
          );
        }
        break;
      }
    }
  }

  /**
   * Generates the HTML structure for the "Diversify" section based on data conditions.
   *
   * @function generateDiversify
   */
  generateDiversify() {
    const that = this;
    const data = that.commonPlacementData.fields;
    const mainDiversify = that.ScTuluCamp.querySelector(
      ".sc-tulu-camp-product-card-diversify"
    );
    const contentDiversify = that.ScTuluCamp.querySelector(
      ".sc-tulu-camp-tab__content-item-diversify"
    );
    const campaignStartDate = that.formatDate(
      that.getObjectValue(data, "CampaignStartDate")
    );
    const campaignEndDate = that.formatDate(
      that.getObjectValue(data, "CampaignEndDate")
    );
    const dateStr = that.generateDateString(campaignStartDate, campaignEndDate);
    that.ScTuluCamp.querySelectorAll(".sc-cvp__bottom").forEach((el) => {
      el.innerText = dateStr;
    });
    that.ScTuluCamp.querySelectorAll(
      ".sc-tulu-camp-product-card__progress-desc"
    ).forEach((el) => {
      el.innerText = dateStr;
    });

    let valueFound = false;
    // eslint-disable-next-line no-unused-vars
    Object.entries(this.textObj.diversify).forEach(([category, items]) => {
      items.forEach((item) => {
        if (item.conditional) {
          const value = that.getObjectValue(data, item.key);
          if (value) {
            valueFound = true;
          }
        }
      });
    });

    if (valueFound) {
      contentDiversify
        .querySelector(".sc-tulu-camp-wrapper-full-all-set")
        .classList.add("hide");
      contentDiversify
        .querySelector(".sc-tulu-camp-wrapper-full__inner")
        .classList.remove("hide");
      contentDiversify
        .querySelector(".sc-tulu-camp-product-card")
        .classList.remove("hide");

      //At least one value present
      Object.entries(this.textObj.diversify).forEach(([category, items]) => {
        let htmlCode = "";
        const categoryWrapper = that.ScTuluCamp.querySelector(
          `.sc-tulu-camp-wrapper-full__column-${category} .sc-tulu-camp-timeline__wrapper`
        );
        if (categoryWrapper) {
          let status = [];
          let itemObj;
          items.forEach((item) => {
            if (item.conditional) {
              const classMap = {
                Y: "sc-tulu-camp-timeline__box--active",
                N: "sc-tulu-camp-timeline__box--progress",
              };
              const value = that.getObjectValue(data, item.key);
              let activeClass = "";
              if (classMap[value]) {
                activeClass = classMap[value];
              }
              status.push(value);

              if (value) {
                //Display only if value is Y or N
                htmlCode += generateHTML(item, activeClass, item.key);
              }
            } else {
              itemObj = item;
            }
          });

          const className = getClassName(status);
          if (className === "hide") {
            categoryWrapper
              .closest(".sc-tulu-camp-wrapper-full__column")
              .classList.add("hide");
          } else {
            if (itemObj) {
              htmlCode += generateHTML(itemObj, className, "");
            }
            categoryWrapper.innerHTML = htmlCode;
          }
        }
      });
    } else {
      mainDiversify
        .querySelector(".sc-tulu-camp-product-card__progress")
        .remove();
      mainDiversify.querySelector(
        ".sc-tulu-camp-product-card__desc"
      ).innerText = that.textObj.diversifyText;
      contentDiversify
        .querySelector(".sc-tulu-camp-wrapper-full-all-set")
        .classList.remove("hide");
      contentDiversify
        .querySelector(".sc-tulu-camp-wrapper-full__inner")
        .classList.add("hide");
    }

    function generateHTML(item, activeClass, modalKey) {
      let urlAttr = "";
      if (modalKey) {
        urlAttr =
          item.conditional &&
          activeClass === "sc-tulu-camp-timeline__box--progress"
            ? `data-link-url="${item.popupCta}"`
            : "";
        if (urlAttr) {
          urlAttr += ` data-modal-selector='${modalKey}'`;
        }
      }

      return `<div class="sc-tulu-camp-timeline__box ${activeClass}" ${urlAttr}>
                        <div class="sc-tulu-camp-timeline__box-wrapper">
                          <div class="sc-tulu-camp-timeline__box-title">
                            ${item.text}
                          </div>
                          <div class="sc-tulu-camp-timeline__box-right">
                            <div class="sc-tulu-camp-timeline__box-icon">
                              <svg width="13" height="12" viewBox="0 0 13 12" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                  d="M6.5 0L7.89583 4.60417L12.5 6L7.89583 7.39583L6.5 12L5.10417 7.39583L0.5 6L5.10417 4.60417L6.5 0Z"
                                  fill="#939393"></path>
                              </svg>
                            </div>
                            <p class="sc-tulu-camp-timeline__box-text">
                            ${convertNumbers(that.ScTuluCamp, item.value)}
                            </p>
                          </div>
                        </div>
                      </div>`;
    }

    function getClassName(status) {
      if (status.every((s) => s === "Y")) {
        return "sc-tulu-camp-timeline__box--active";
      }
      if (status.includes("Y") || status.includes("N")) {
        return "sc-tulu-camp-timeline__box--disable";
      }
      if (status.every((s) => s === "")) {
        return "hide";
      }
      return "";
    }

    return valueFound;
  }

  /**
   * Generates the HTML structure for the "Trade Up" section based on data conditions.
   *
   * @function generateTradeUp
   */
  generateTradeUp() {
    const that = this;
    const data = that.commonPlacementData.fields;
    let htmlCode = "";
    let rewardCount = 0;
    let currentRow = 0;
    const totalListGroup = that.ScTuluCamp.querySelectorAll(
      ".sc-tulu-camp-tab__content-item-trade-up ul.sc-tulu-camp-progress__inner"
    );

    that.textObj.tradeUp.fields.forEach((item) => {
      rewardCount += Number(that.getObjectValue(data, item.key));
    });

    if (rewardCount < 18) {
      that.ScTuluCamp.querySelector(
        ".sc-tulu-camp-product-card-trade-up .sc-tulu-camp-product-card__bottom .sc-tulu-camp-product-card__task-desc-content"
      ).innerText = that.textObj.nextTask.tradeUp.labelText
        .split("data-number")
        .join(getFormattedNumber(rewardCount + 1));
    } else {
      that.ScTuluCamp.querySelector(
        ".sc-tulu-camp-product-card-trade-up .sc-tulu-camp-product-card__bottom"
      ).classList.add("hide");
    }

    for (let i = 1; i <= that.textObj.tradeUp.maxCount; i++) {
      let activeClass = "";

      if (rewardCount) {
        if (i <= rewardCount) {
          activeClass = " sc-tulu-camp-progress__section--completed"; // completed section
        } else if (i === rewardCount + 1) {
          activeClass = " sc-tulu-camp-progress__section--in-progress"; // current section in progress
        }
      } else if (i === 1) {
        activeClass = " sc-tulu-camp-progress__section--in-progress";
      }

      const numberText =
        that.textObj.tradeUp.progressNumber[
          Math.floor((i - 1) / that.textObj.tradeUp.perRow)
        ]; //get 100, 200, 300

      if (activeClass === " sc-tulu-camp-progress__section--in-progress") {
        that.ScTuluCamp.querySelector(
          ".sc-tulu-camp-product-card-trade-up .sc-tulu-camp-product-card__bottom .sc-tulu-camp-product-card__task-value span"
        ).innerText = convertNumbers(that.ScTuluCamp, numberText);
      }

      const counter = i > rewardCount ? `<span>${i}</span>` : "";
      htmlCode += `<li class="sc-tulu-camp-progress__section${activeClass}">
                      <div class="sc-tulu-camp-progress__content">
                        <div class="sc-tulu-camp-progress__circle">
                          <svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.8334 2L7.72224 13.6667L2.16675 7.83333" stroke="#0C3A66" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path>
                          </svg>
                          ${counter}
                        </div>
                        <div class="sc-tulu-camp-progress__number">
                          <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.5 0.5L7.89583 5.10417L12.5 6.5L7.89583 7.89583L6.5 12.5L5.10417 7.89583L0.5 6.5L5.10417 5.10417L6.5 0.5Z" fill="#3BBD77"></path>
                          </svg>
                          <span>${convertNumbers(
                            that.ScTuluCamp,
                            numberText
                          )}</span>
                        </div>
                      </div>
                      <div class="sc-tulu-camp-progress__line"></div>
                    </li>`;
      if (i % that.textObj.tradeUp.perRow === 0) {
        totalListGroup[currentRow].innerHTML = htmlCode;
        htmlCode = "";
        currentRow++;
      }
    }

    //Display Last section
    const closest = that.ScTuluCamp.querySelector(
      ".sc-tulu-camp-tab__content-item-trade-up .sc-tulu-camp-timeline__box"
    );
    closest.classList.remove("sc-tulu-camp-timeline__box--active");
    closest.classList.remove("sc-tulu-camp-timeline__box--progress");
    closest.classList.remove("sc-tulu-camp-timeline__box--disable");

    let contentHTML = "";
    if (rewardCount === that.textObj.tradeUp.maxCount) {
      let allActive = true;
      let totalPoints = 0;
      that.textObj.tradeUp.fields.forEach((item) => {
        const value = Number(that.getObjectValue(data, item.key));
        if (value) {
          contentHTML += generateHTML(
            item,
            " sc-tulu-camp-progress__section--completed"
          );
          totalPoints += item.points;
        }
      });

      that.textObj.tradeUp.fields.forEach((item) => {
        const value = Number(that.getObjectValue(data, item.key));
        if (!value) {
          contentHTML += generateHTML(item);
          allActive = false;
        }
      });

      if (closest) {
        allActive
          ? closest.classList.add("sc-tulu-camp-timeline__box--active")
          : closest.classList.add("sc-tulu-camp-timeline__box--progress");
        closest.querySelector(
          ".sc-tulu-camp-timeline__box-text span"
        ).innerHTML = convertNumbers(that.ScTuluCamp, totalPoints);
      }
    } else {
      closest.classList.add("sc-tulu-camp-timeline__box--disable");
      that.textObj.tradeUp.fields.forEach((item) => {
        contentHTML += generateHTML(item);
      });
    }
    closest.querySelector("ul").innerHTML = contentHTML;

    function generateHTML(item, activeClass = "") {
      return `<li class="sc-tulu-camp-progress__section${activeClass}">
          <div class="sc-tulu-camp-progress__content ${item.className}">
            <div class="sc-tulu-camp-progress__circle"></div>
            <div class="sc-tulu-camp-progress__title">
              ${item.text}
            </div>
            <div class="sc-tulu-camp-progress__number">
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.5 0.5L7.89583 5.10417L12.5 6.5L7.89583 7.89583L6.5 12.5L5.10417 7.89583L0.5 6.5L5.10417 5.10417L6.5 0.5Z" fill="#3BBD77"></path>
              </svg>
              <span>${convertNumbers(that.ScTuluCamp, item.points)}</span>
            </div>
          </div>
        </li>`;
    }
  }

  /**
   * Generates the HTML structure for the "Level Up" section based on data conditions.
   *
   * @function generateLevelUp
   */
  generateLevelUp() {
    const that = this;
    const data = that.articlePlacementData;
    const articles = that.ScTuluCamp.querySelectorAll(
      ".sc-tulu-camp-tab__content-item-level-up [data-article-id]"
    );
    let articleImg = "";
    let articleModal = "";
    let articleId;

    articles.forEach((article) => {
      const id = article.getAttribute("data-article-id");
      const articleObj = data.offers.find((offer) =>
        offer.fields.some(
          (field) => field.name === "ArticleID" && field.value === id
        )
      );

      if (articleObj) {
        const classMap = {
          Y: "sc-tulu-camp-timeline__box--active",
          N: "sc-tulu-camp-timeline__box--progress",
        };

        const ArticleRead = that.getObjectValue(
          articleObj.fields,
          "ArticleRead"
        );
        const QuizCompleted = that.getObjectValue(
          articleObj.fields,
          "QuizCompleted"
        );
        const timeLineBoxes = article.querySelectorAll(
          ".sc-tulu-camp-timeline__box"
        );
        const articleClass = classMap[ArticleRead];
        if (articleClass) {
          timeLineBoxes[0].classList.add(articleClass);
        }

        const quizClassMap = {
          Y: "sc-tulu-camp-timeline__box--active",
          N: "sc-tulu-camp-timeline__box--disable",
        };
        const quizClass = quizClassMap[QuizCompleted];
        if (quizClass) {
          timeLineBoxes[1].classList.add(quizClass);
          if (QuizCompleted === "N") {
            timeLineBoxes[1].querySelector(
              ".sc-tulu-camp-timeline__box-text"
            ).innerText = that.textObj.levelUp.feedbackFailedText;
          }
          article
            .querySelector("[data-modal-selector]")
            .removeAttribute("data-modal-selector");
        } else {
          timeLineBoxes[1].classList.add(
            "sc-tulu-camp-timeline__box--progress"
          );
          if (!articleImg) {
            articleImg = article
              .querySelector(".sc-tulu-camp-timeline__cvp-image img")
              .getAttribute("src");

            articleModal = article
              .querySelector("[data-modal-selector]")
              .getAttribute("data-modal-selector");

            articleId = id;
          }
        }
      }
    });

    if (articleId && articleImg && articleModal) {
      const levelUpNextTask = that.ScTuluCamp.querySelector(
        ".sc-tulu-camp-product-card-level-up"
      );
      if (levelUpNextTask) {
        levelUpNextTask
          .querySelector(
            ".sc-tulu-camp-product-card__bottom .sc-tulu-camp-product-card__task-desc img"
          )
          .setAttribute("src", articleImg);

        const taskValue = levelUpNextTask.querySelector(
          ".sc-tulu-camp-product-card__task-value"
        );
        if (taskValue) {
          taskValue.setAttribute("data-modal-selector", articleModal);
          taskValue.setAttribute("data-article-id", articleId);
        }

        this.textObj.levelUp.articles.forEach((article) => {
          if (article.articleId === articleId) {
            levelUpNextTask.querySelector(
              ".sc-tulu-camp-product-card__bottom .sc-tulu-camp-product-card__task-desc-content"
            ).innerText = article.title;

            levelUpNextTask.querySelector(
              ".sc-tulu-camp-product-card__bottom .sc-tulu-camp-product-card__task-value span"
            ).innerText = convertNumbers(that.ScTuluCamp, article.quizPoints);
          }
        });
      }
    }
  }

  /**
   * Handles tab switching by updating active states for tabs and content sections.
   *
   * @function handleTabs
   * @param {string} targetId - The ID of the tab to activate.
   */
  handleTabs(targetId) {
    const that = this;
    const targetContent = that.ScTuluCamp.querySelectorAll(
      `.sc-tulu-camp-tab__content-item[data-tab-content="${targetId}"]`
    );
    if (!targetContent.length) return;

    // Remove active class from all tabs and content items in this tab group
    that.tabs.forEach((t) =>
      t.classList.remove("sc-tulu-camp-tab__head-button--active")
    );
    that.contents.forEach((c) =>
      c.classList.remove("sc-tulu-camp-tab__content-item--active")
    );

    // Add active class to clicked tab and corresponding content
    const activeTabs = that.ScTuluCamp.querySelectorAll(
      `[data-tab-btn-id="${targetId}"]`
    );
    activeTabs.forEach((activeTab) => {
      if (!activeTab.classList.contains("sc-tooltip")) {
        activeTab.classList.add("sc-tulu-camp-tab__head-button--active");
      }
    });
    targetContent[0].classList.add("sc-tulu-camp-tab__content-item--active");
  }

  /**
   * Handles opening and closing modals, updating UI states, and tracking analytics events.
   *
   * @function handleModal
   */
  handleModal() {
    const that = this;
    //Open Modal
    that.ScTuluCamp.addEventListener("click", (event) => {
      const modal = event.target.closest("[data-modal-selector]");
      const articleAnchor = event.target.closest(
        "a.sc-tulu-camp-timeline__box--article"
      );
      if (modal) {
        event.preventDefault();
        const selector = modal.getAttribute("data-modal-selector");
        if (selector) {
          const parentModal = event.target.closest(".sc-tulu-camp-modal");
          if (parentModal) {
            that.parentModalId = parentModal.getAttribute("id") || "";
            parentModal.classList.remove("visible");
          }

          const selectedModal = that.ScTuluCamp.querySelector(`.${selector}`);
          if (selectedModal) {
            selectedModal.classList.add("visible");

            document.querySelector("html").classList.add("sc-modal__no-scroll");

            //Activities for questionnaire
            if (selectedModal.closest(".sc-questionnaire")) {
              const feedbackShow = selectedModal.querySelector(
                ".sc-tulu-camp-questionnaire__feedback--show"
              );
              if (feedbackShow) {
                feedbackShow.classList.remove(
                  "sc-tulu-camp-questionnaire__feedback--show"
                );
              }

              //Unchecked all questionnaire radio button
              const questionnaireRadios = selectedModal.querySelectorAll(
                '.sc-questionnaire input[type="radio"]'
              );
              if (questionnaireRadios.length) {
                questionnaireRadios.forEach((radio) => {
                  radio.checked = false;
                });
              }

              const btn = selectedModal.querySelector(
                ".sc-tulu-camp-modal__footer-btn"
              );
              if (btn) {
                btn.classList.add("sc-tulu-camp-modal__footer-btn--disabled");
                btn.innerText = btn.getAttribute("data-text-default");
              }

              const article = event.target.closest("[data-article-id]");
              if (article) {
                that.currentArticleId = article.getAttribute("data-article-id");
              }
            }
          }
        }

        let ctaObj = { ctaType: "button" };

        const anchorElement = event.target.closest("a");
        if (anchorElement) {
          const modalSelector = anchorElement.getAttribute(
            "data-modal-selector"
          );
          if (modalSelector === "sc-guidance" || modalSelector === "sc-help") {
            Object.assign(ctaObj, {
              ctaPosition: "middle",
              xLinkRegion: "middle",
            });
          } else if (modalSelector === "sc-terms-and-condition") {
            Object.assign(ctaObj, {
              ctaPosition: "bottom",
              xLinkRegion: "middle",
            });
          }
        }

        const buttonElement = event.target.closest("button");
        if (buttonElement) {
          const modalSelector = buttonElement.getAttribute(
            "data-modal-selector"
          );
          if (modalSelector === "sc-help") {
            Object.assign(ctaObj, {
              ctaPosition: "top",
              xLinkRegion: "right",
            });
          }
        }

        //Next Task
        const nextTaskElement = event.target.closest(
          ".sc-tulu-camp-product-card__bottom"
        );
        if (nextTaskElement) {
          const title = trim(
            nextTaskElement
              .closest(".sc-tulu-camp-product-card")
              .querySelector(".sc-tulu-camp-product-card__title").innerText
          );

          Object.assign(ctaObj, {
            context:
              `${title} next task - ` +
              trim(
                nextTaskElement.querySelector(
                  ".sc-tulu-camp-product-card__task-desc"
                ).innerText
              ),
            ctaPosition: "middle",
            xLinkRegion: "middle",
          });
        }

        //Handle DeepLink
        const deepLink = event.target.closest("[data-link-url]");
        if (deepLink) {
          let title = "";

          const diversifyNextTask = deepLink.querySelector(
            ".sc-tulu-camp-product-card__task-desc-content"
          );
          const dataContext = deepLink
            .closest(".sc-tulu-camp-wrapper-full__column")
            ?.querySelector("[data-context]");
          if (dataContext) {
            //diversify section
            title = dataContext.getAttribute("data-context");
            const content = trim(
              deepLink.querySelector(".sc-tulu-camp-timeline__box-title")
                ?.innerText || ""
            );

            Object.assign(ctaObj, {
              context: `${title} - ${content}`,
              ctaPosition: "middle",
              xLinkRegion: "middle",
            });
          } else if (diversifyNextTask) {
            Object.assign(ctaObj, {
              context: trim(diversifyNextTask.innerText),
              ctaPosition: "middle",
              xLinkRegion: "middle",
            });
          }

          const selectedModal =
            that.ScTuluCamp.querySelector(".sc-deeplink-modal");
          selectedModal.classList.add("visible");
          document.querySelector("html").classList.add("sc-modal__no-scroll");
          that.deepLinkUrl = deepLink.getAttribute("data-link-url");
          that.handleDeepLinkModal("diversify", selector);
        }

        if (anchorElement ?? buttonElement ?? nextTaskElement ?? deepLink) {
          handleAnalyticsCTA(
            event,
            anchorElement ?? buttonElement ?? nextTaskElement ?? deepLink,
            ctaObj
          );
        }
      } else if (articleAnchor) {
        // const selectedModal =
        //   that.ScTuluCamp.querySelector(".sc-deeplink-modal");
        // selectedModal.classList.add("visible");
        // document.querySelector("html").classList.add("sc-modal__no-scroll");

        // that.handleDeepLinkModal("article", articleId);
        // that.deepLinkUrl = articleAnchor.getAttribute("href");

        handleAnalyticsCTA(event, "", {
          ctaType: "button",
          context: "article link - " + trim(articleAnchor.innerText),
          xLinkRegion: "middle",
          ctaPosition: "middle",
        });

        const articleId = articleAnchor
          .closest("[data-article-id]")
          .getAttribute("data-article-id");
        that.handleQuizImpression("Impression", articleId);
      }
    });

    //Close Modal
    const modalCloses = that.ScTuluCamp.querySelectorAll(
      ".sc-tulu-camp-modal__close"
    );
    if (modalCloses.length) {
      modalCloses.forEach((modalClose) => {
        modalClose.addEventListener("click", (event) => {
          if (event.target.closest(".sc-get-started")) {
            window.location = "https://www.sc.com/exit";
          } else {
            event.target
              .closest(".sc-tulu-camp-modal")
              .classList.remove("visible");
            if (that.parentModalId) {
              that.ScTuluCamp.querySelector(
                `.${that.parentModalId}`
              ).classList.add("visible");
              that.parentModalId = "";
            } else {
              document
                .querySelector("html")
                .classList.remove("sc-modal__no-scroll");
            }
          }

          const deepLink = event.target.closest(".sc-deeplink-modal");
          const closeBtn = event.target.closest(
            ".sc-tulu-camp-modal--close-btn"
          );
          if (deepLink) {
            if (window.cordova) {
              window.cordova.InAppBrowser.open(
                that.deepLinkUrl,
                "_blank",
                "location=yes"
              );
            } else {
              window.open(that.deepLinkUrl, "_blank");
            }
            window.open(that.deepLinkUrl, "_blank", "location=yes");

            handleAnalyticsCTA(event, event.target.closest("button"), {
              ctaType: "button",
              xLinkRegion: "bottom",
              ctaPosition: "bottom",
            });
            that.deepLinkUrl = "";
          } else if (event.target.closest(".sc-tulu-camp-modal__footer-btn")) {
            handleAnalyticsCTA(event, event.target.closest("button"), {
              ctaType: "button",
              xLinkRegion: "bottom",
              ctaPosition: "bottom",
            });
          } else if (closeBtn) {
            handleAnalyticsCTA(event, event.target.closest("button"), {
              ctaType: "button",
              xLinkRegion: "right",
              ctaPosition: "top",
            });
          } else {
            handleAnalyticsCTA(event, event.target.closest("button"), {
              ctaType: "button",
              xLinkRegion: "left",
              ctaPosition: "top",
            });
          }
        });
      });
    }

    //handle Download Button
    const downloads = that.ScTuluCamp.querySelectorAll(
      ".sc-tulu-camp-modal__download"
    );
    downloads.forEach((download) => {
      download.addEventListener("click", (event) => {
        handleAnalyticsCTA(event, event.target.closest("button"), {
          context: "download",
          ctaType: "button",
          xLinkRegion: "right",
          ctaPosition: "top",
        });
      });
    });
  }

  /**
   * Handles displaying the deep link modal with the appropriate content.
   *
   * @param {string} type - The type of deep link (e.g., "diversify" or "article").
   * @param {string} key - The key or ID used to find the corresponding content.
   */
  handleDeepLinkModal(type, key) {
    const that = this;
    const modalContent = that.ScTuluCamp.querySelector(
      ".sc-deeplink-modal .sc-tulu-camp-doc__content"
    );
    if (type === "diversify") {
      // eslint-disable-next-line no-unused-vars
      Object.entries(this.textObj.diversify).forEach(([category, items]) => {
        items.forEach((item) => {
          if (item.key === key) {
            modalContent.querySelector(".sc-tulu-camp-doc__title").innerText =
              item.popupTitle;
            modalContent.querySelector("p").innerText = item.popupDescription;
          }
        });
      });
    } else if (type === "article") {
      that.textObj.levelUp.articles.forEach((item) => {
        if (item.articleId === key) {
          modalContent.querySelector(".sc-tulu-camp-doc__title").innerText =
            item.popupTitle;
          modalContent.querySelector("p").innerText = item.popupDescription;
        }
      });
    }
  }

  /**
   * Generates a SHA-256 hash of a given string.
   * @param {string} message - The input string to hash.
   * @returns {Promise<string>} The SHA-256 hash in hexadecimal format.
   */
  async sha256(message) {
    const msgBuffer = new TextEncoder().encode(message);
    const hashBuffer = await crypto.subtle.digest("SHA-256", msgBuffer);
    // eslint-disable-next-line no-undef
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
  }

  /**
   * Handles tracking of analytics events when FAQ accordion labels are clicked.
   * It sends data related to the clicked FAQ item to the analytics service.
   *
   * @function handleFaqAnalytics
   */
  handleFaqAnalytics() {
    const that = this;
    const labels = that.ScTuluCamp.querySelectorAll(".sc-faq__accordion-label");
    labels.forEach((label) => {
      label.addEventListener("click", (event) => {
        const closest = event.target.closest("label");
        handleAnalyticsCTA(event, closest, {
          ctaType: "button",
          context: "faq - " + trim(closest.innerText),
          xLinkRegion: "middle",
          ctaPosition: "middle",
        });
      });
    });
  }

  /**
   * Handles tracking of analytics events when terms and conditions links are clicked.
   * It sends data related to the clicked link to the analytics service.
   *
   * @function handleTermsAnalytics
   */
  handleTermsAnalytics() {
    const that = this;
    const labels = that.ScTuluCamp.querySelectorAll(".sc-faq__terms-link");
    labels.forEach((label) => {
      label.addEventListener("click", (event) => {
        const closest = event.target.closest("a");
        handleAnalyticsCTA(event, closest, {
          ctaType: "button",
          context: "tnc - " + trim(closest.innerText),
          xLinkRegion: "middle",
          ctaPosition: "top",
        });
      });
    });
  }

  /**
   * Formats a date string in the format "DD MMM YYYY" from a given input string "MM/DD/YYYY".
   *
   * @param {string} inputDate - The date string in "MM/DD/YYYY" format.
   * @returns {string} The formatted date string in "DD MMM YYYY" format.
   */
  formatDate(inputDate) {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    // Ensure inputDate is a string and extract year, month, and day
    const dateStr = inputDate.toString();
    const year = dateStr.substring(0, 4);
    const month = parseInt(dateStr.substring(4, 6), 10) - 1;
    const day = parseInt(dateStr.substring(6, 8), 10);

    return `${day} ${months[month]} ${year}`;
  }

  /**
   * Retrieves the value of a key from an array of objects, where each object has "Name" and "Value" properties.
   *
   * @param {Array} data - The array of objects to search through.
   * @param {string} key - The key to search for in the "Name" property of the objects.
   * @returns {string} The value associated with the key, or an empty string if the key is not found.
   */
  getObjectValue(data, key) {
    if (!Array.isArray(data)) return ""; // Ensure 'data' is an array
    return data.find((item) => item?.name === key)?.value || "";
  }

  /**
   * Handles the display and interactions of the "Get Started" modal.
   * It shows different content based on a query parameter, manages checkbox states,
   * and sets up event listeners for button clicks and form interactions.
   *
   * @returns {void}
   */
  async getStartedModal() {
    const that = this;

    const queryString = getPageContext().queryString;
    const tuluParam = that.textObj.queryParameterName;
    that.paramExist = false;
    if (tuluParam) {
      const value = getQueryParam(queryString, tuluParam);
      if (value) {
        const targetTab = document.querySelector(
          `[data-tab-content='${value}']`
        );
        if (targetTab) {
          that.paramExist = true;
          const tabContent = that.ScTuluCamp.querySelector(
            `[data-tab-content='${value}']`
          );

          if (tabContent) {
            const campMains =
              that.ScTuluCamp.querySelectorAll(".sc-tulu-camp-main");
            campMains.forEach((campMain) => {
              campMain.classList.remove("active");
            });

            const closestMain = tabContent.closest(".sc-tulu-camp-main");
            if (closestMain) {
              closestMain.classList.add("active");

              const headButtons = closestMain.querySelectorAll(
                ".sc-tulu-camp-tab__head-button"
              );

              headButtons.forEach((headButton) => {
                headButton.classList.remove(
                  "sc-tulu-camp-tab__head-button--active"
                );
              });
              closestMain
                .querySelector(`[data-tab-btn-id='${value}']`)
                .classList.add("sc-tulu-camp-tab__head-button--active");
            }

            const tabContents =
              that.ScTuluCamp.querySelectorAll("[data-tab-content]");
            tabContents.forEach((tabContent) => {
              tabContent.classList.remove(
                "sc-tulu-camp-tab__content-item--active"
              );
            });

            that.ScTuluCamp.querySelector(
              `[data-tab-content='${value}']`
            ).classList.add("sc-tulu-camp-tab__content-item--active");
          }
        }
      }
    }

    if (that.paramExist) {
      return;
    }

    try {
      let jsonData;
      if (that.desktopDevice) {
        jsonData = await this.fetchApiData(
          "http://127.0.0.1:5502/json/updated/rewards_registration.json"
        );
      } else {
        jsonData = await this.getDataFromJsBridge(
          that.textObj.registrationPlacementId
        );
        jsonData = JSON.parse(jsonData);
      }

      that.regPlacementData = jsonData?.data?.offers?.offers?.[0] || {};

      // document.write('===========registration=============');
      // document.write(JSON.stringify(jsonData));

      const tuluRegistered = that.getObjectValue(
        that.regPlacementData.fields,
        "TuluRegistered"
      );
      const CXCardHolder = that.getObjectValue(
        that.regPlacementData.fields,
        "CXCardHolder"
      );

      if (tuluRegistered === "Y") {
        await that.loadCommonDataApi();
        await that.loadArticleDataApi();
        await that.rtimLoaded();
      } else {
        if (CXCardHolder === "Y") {
          //Three
          that.ScTuluCamp.querySelector(".sc-get-started-yes").classList.add(
            "visible"
          );
        } else {
          that.ScTuluCamp.querySelector(".sc-get-started-no").classList.add(
            "visible"
          );
        }
        document.querySelector("html").classList.add("sc-modal__no-scroll");
        await that.rtimLoaded();
      }
    } catch (error) {
      that.errorFound = that.errorFound || true;
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

            that.handleRegistrationImpression(
              "Clicked",
              that.regPlacementData.feedback
            );
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

  /**
   * Handles the "Asia Miles Yes" modal interactions, including switching between main pages
   * and managing the "back" button functionality. This function is responsible for the user
   * flow between product cards and the main page. It also tracks button clicks for analytics.
   *
   * @returns {void}
   */
  asiaMilesYesModal() {
    const that = this;
    const startButton = document.getElementById("sc-get-started-btn");
    const tcModal = document.getElementById("sc-terms-and-condition");
    const cardMain = document.querySelectorAll(
      ".sc-tulu-camp-product-card__main"
    );
    const mainPage = document.querySelectorAll(".sc-tulu-camp-main");
    const backBtn = document.querySelector(".sc-tulu-camp-header__back");
    const taskDesk = that.ScTuluCamp.querySelectorAll(
      ".sc-tulu-camp-product-card__bottom"
    );

    if (startButton && tcModal) {
      cardMain.forEach((card) => {
        card.addEventListener("click", () => {
          mainPage[0].classList.remove("active");
          mainPage[1].classList.add("active");
        });
      });
      taskDesk.forEach((el) => {
        el.addEventListener("click", (event) => {
          const closest = event.target.closest("[data-link-url]");
          if (!closest) {
            mainPage[0].classList.remove("active");
            mainPage[1].classList.add("active");
          }
          handleAnalyticsCTA(event, el, {
            ctaType: "button",
            ctaPosition: "middle",
            xLinkRegion: "middle",
            context: trim(
              event.target
                .closest(".sc-tulu-camp-product-card__bottom")
                .querySelector(".sc-tulu-camp-product-card__task-desc-content")
                .innerText
            ),
          });
        });
      });

      backBtn.addEventListener("click", (event) => {
        if (mainPage[0].className.includes("active")) {
          window.location = "https://www.sc.com/exit";
        } else {
          mainPage[1].classList.remove("active");
          mainPage[0].classList.add("active");
          document
            .querySelector(`[data-tab-btn-id='1']`)
            .classList.add("sc-tulu-camp-tab__head-button--active");
          document
            .querySelector(`[data-tab-content='1']`)
            .classList.add("sc-tulu-camp-tab__content-item--active");

          const closestBtn = event.target.closest("button");
          if (closestBtn) {
            handleAnalyticsCTA(event, closestBtn, {
              ctaType: "button",
              ctaPosition: "top",
              xLinkRegion: "middle",
            });
          }
        }
      });
    }
  }

  /**
   * Asynchronously loads article data from an API and processes it.
   *
   * @async
   * @function loadArticleDataApi
   * @returns {Promise<void>} A promise that resolves when the data is loaded and processed.
   * @throws {Error} Logs an error if the API request fails.
   */

  async loadArticleDataApi() {
    const that = this;
    try {
      // Now fetch the article data
      let jsonData;
      if (that.desktopDevice) {
        jsonData = await this.fetchApiData(
          "http://127.0.0.1:5502/json/updated/levelup.json"
        );
      } else {
        jsonData = await this.getDataFromJsBridge(
          that.textObj.articlePlacementId
        );
        jsonData = JSON.parse(jsonData);
      }

      that.articlePlacementData = jsonData?.data?.offers || {};

      // document.write('============Article============');
      // document.write(JSON.stringify(jsonData));

      that.generateLevelUp();
      that.levelUpEarningHistory();
      // Do something with the fetched data, if needed
    } catch (error) {
      that.errorFound = that.errorFound || true;
      console.error("Error fetching consolidate data:", error);
    }
  }

  /**
   * Generates a formatted date string for a campaign cycle.
   *
   * @param {string} campaignStartDate - The start date of the campaign in "MM/DD/YYYY" format.
   * @param {string} campaignEndDate - The end date of the campaign in "MM/DD/YYYY" format.
   * @returns {string} - A formatted string in the format:
   *                     "As of DD MMM YYYY (DD MMM YYYY - DD MMM YYYY Cycle)"
   *                     Example: "As of 17 Mar 2025 (01 Jan - 31 Mar 2025 Cycle)"
   */
  generateDateString(campaignStartDate, campaignEndDate) {
    campaignStartDate = new Date(campaignStartDate);
    // eslint-disable-next-line no-unused-vars
    campaignEndDate = new Date(campaignEndDate);
    const currentDate = new Date(); // Today's date

    // Function to format date as "DD MMM YYYY"
    const formatDate = (date) =>
      !isNaN(date.getTime()) // Check if date is valid
        ? date.toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "short",
            year: "numeric",
          })
        : "Invalid Date"; // Handle invalid dates

    // Generate and return the formatted string
    return `As of ${formatDate(currentDate)} (${formatDate(
      campaignStartDate
    )} - ${formatDate(campaignEndDate)} Cycle)`;
  }

  /**
   * Initializes tab functionality by adding event listeners to tabs.
   * Handles tab switching and triggers analytics tracking based on user interactions.
   *
   * @returns {void}
   */
  handleTabsContent() {
    const that = this;
    // Get all the tabs in this tab group
    that.tabs = that.ScTuluCamp.querySelectorAll("[data-tab-btn-id]");
    // Get all the content items in this tab group
    that.contents = that.ScTuluCamp.querySelectorAll(
      ".sc-tulu-camp-tab__content-item"
    );

    that.tabs.forEach((tab) => {
      tab.addEventListener("click", (event) => {
        const targetId = tab.getAttribute("data-tab-btn-id");
        that.handleTabs(targetId);

        const wrapperInner = event.target.closest(
          ".sc-tulu-camp__wrapper-inner"
        );
        const closestBtn = event.target.closest("button");
        const closestPdt = event.target.closest(
          ".sc-tulu-camp-product-card__main"
        );
        if (wrapperInner) {
          handleAnalyticsCTA(event, wrapperInner, {
            ctaType: "button",
            xLinkRegion: "middle",
            ctaPosition: "top",
            context: event.target.innerText,
          });
        } else if (closestBtn) {
          handleAnalyticsCTA(event, closestBtn, {
            ctaType: "button",
            xLinkRegion: "middle",
            ctaPosition: "top",
          });
        } else if (closestPdt) {
          handleAnalyticsCTA(event, "", {
            context: trim(
              closestPdt.querySelector(".sc-tulu-camp-product-card__title")
                .innerText
            ),
            ctaType: "button",
            xLinkRegion: "middle",
            ctaPosition: "middle",
          });
        }
      });
    });
  }

  /**
   * Handles interactions with the questionnaire form, including radio button changes, label clicks,
   * and the continue button functionality. It also manages the feedback display and tracking analytics events.
   *
   * @function handleQuestionnaire
   */
  handleQuestionnaire() {
    const that = this;
    //questionnaire radio
    const questionnaireRadios = that.ScTuluCamp.querySelectorAll(
      '.sc-questionnaire input[type="radio"]'
    );
    if (questionnaireRadios.length) {
      questionnaireRadios.forEach((questionnaireRadio) => {
        questionnaireRadio.addEventListener("change", (event) => {
          event.target
            .closest(".sc-tulu-camp-questionnaire")
            .querySelector(".sc-tulu-camp-modal__footer-btn")
            .classList.remove("sc-tulu-camp-modal__footer-btn--disabled");
        });
      });
    }

    const questionnaireLabels = that.ScTuluCamp.querySelectorAll(
      ".sc-questionnaire .sc-radio-box__input-label"
    );
    if (questionnaireLabels.length) {
      questionnaireLabels.forEach((questionnaireLabel) => {
        questionnaireLabel.addEventListener("click", (event) => {
          event.target
            .closest(".sc-tulu-camp-questionnaire")
            .querySelector(".sc-tulu-camp-modal__footer-btn")
            .classList.remove("sc-tulu-camp-modal__footer-btn--disabled");
        });
      });
    }

    const continueButtons = that.ScTuluCamp.querySelectorAll(
      ".sc-tulu-camp-questionnaire__btn .sc-tulu-camp-modal__footer-btn"
    );

    let completed = false;
    continueButtons.forEach((continueButton) => {
      continueButton.addEventListener("click", async (event) => {
        const closest = event.target.closest(".sc-questionnaire");
        const checkedRadio = closest.querySelector(`[type='radio']:checked`);

        if (checkedRadio) {
          const hash = await that.sha256(checkedRadio.value);
          const result =
            that.textObj.levelUp.articles.find(
              (item) => item.articleId === that.currentArticleId
            )?.quizValue || null;
          let context;
          const feedback = closest.querySelector(
            ".sc-tulu-camp-questionnaire__feedback"
          );

          if (completed) {
            context = "continue";
            event.target
              .closest(".sc-tulu-camp-modal")
              .classList.remove("visible");
            document
              .querySelector("html")
              .classList.remove("sc-modal__no-scroll");
            completed = false;
          } else if (hash === result) {
            //Correct Answer
            context = event.target.getAttribute("data-text-continue");
            event.target.innerText = context;

            feedback.classList.add(
              "sc-tulu-camp-questionnaire__feedback--success"
            );
            feedback.innerHTML = that.textObj.levelUp.feedbackSuccess;
            context = "submit - correct";
            completed = true;

            const article = that.ScTuluCamp.querySelector(
              `[data-article-id='${that.currentArticleId}'] [data-modal-selector]`
            );
            if (article) {
              article.classList.add("sc-tulu-camp-timeline__box--active");
              // article.querySelector(
              //   ".sc-tulu-camp-timeline__box-title"
              // ).innerText = that.textObj.levelUp.feedbackSuccessDesc;
              article.removeAttribute("data-modal-selector");
            }
            that.handleQuizImpression("Clicked");
          } else {
            context = event.target.getAttribute("data-text-continue");
            event.target.innerText = context;

            feedback.classList.add(
              "sc-tulu-camp-questionnaire__feedback--error"
            );
            feedback.innerHTML = that.textObj.levelUp.feedbackError;
            context = "submit - incorrect";
            completed = true;

            const article = that.ScTuluCamp.querySelector(
              `[data-article-id='${that.currentArticleId}'] [data-modal-selector]`
            );
            if (article) {
              article.classList.add("sc-tulu-camp-timeline__box--disable");
              article.querySelector(
                ".sc-tulu-camp-timeline__box-text"
              ).innerText = that.textObj.levelUp.feedbackFailedText;
              article.removeAttribute("data-modal-selector");
            }
            feedback
              .closest(".sc-tulu-camp-questionnaire__question")
              .querySelector(".sc-tulu-camp-questionnaire__feedback-desc")
              .classList.remove("hide");
            that.handleQuizImpression("Dismissed");
          }

          closest.querySelectorAll(".sc-radio-box__input").forEach((radio) => {
            radio.disabled = true;
          });

          handleAnalyticsCTA(event, closest, {
            ctaType: "button",
            context: context,
            xLinkRegion: "middle",
            ctaPosition: "bottom",
          });
        }
      });
    });
  }

  /**
   * Sends a quiz impression update request via Cordova.
   *
   * This function checks for the specific article based on the current article ID,
   * and sends an impression update including details like article name, group, rank, and the outcome.
   *
   * @param {string} outcome - The outcome of the quiz impression, e.g., "Clicked" or "Dismissed".
   * @returns {void} - Does not return anything.
   */
  // eslint-disable-next-line no-unused-vars
  handleQuizImpression(outcome, articleId = "") {
    console.log("handleQuizImpression");
    if (!window.cordova) return;
    const that = this;
    articleId = articleId || that.currentArticleId;
    // Find the correct article object
    const articleObj = that.articlePlacementData.offers.find((obj) =>
      obj.fields.some(
        (field) => field.name === "ArticleID" && field.value === articleId
      )
    );
    if (!articleObj) {
      console.error(
        `Error: No matching article found for ArticleID: ${articleId}`
      );
      return;
    }
    // Build the Impression Header based on the country
    let ImpressionHeader = {
      "X-APOLLO-OPERATION-NAME": "updateImpression",
    };
    if (getCurrentCountry() === "hk") {
      const icm_id = sessionStorage.getItem("icmpid") || ""; // Ensure no null value
      ImpressionHeader["icm-id"] = icm_id;
    }
    // Construct the request payload
    const requestPayload = {
      operationName: "updateImpression",
      variables: {
        input: {
          name: articleObj.feedback.name,
          group: articleObj.feedback.group,
          interactionId: articleObj.feedback.interactionId,
          issue: articleObj.feedback.issue,
          placement: articleObj.feedback.placement,
          rank: articleObj.feedback.rank,
          outcome: outcome, // Clicked/Dismissed
        },
      },
      query: `mutation updateImpression($input: CustomerOfferFeedbackInput!) {
            updateImpression(feedback: $input) {
                __typename
                status
                message
            }
        }`,
    };
    console.log("Quiz ImpressionHeader: ", ImpressionHeader);
    console.log("Quiz requestPayload: ", requestPayload);
    // Execute the Cordova function
    window.cordova.exec(
      (response) => console.log("Success 1:", response), // No need for JSON.stringify
      (error) => console.log("Error 1:", error),
      "gqlplugin", // Plugin name
      "request", // Function name
      [JSON.stringify(requestPayload), JSON.stringify(ImpressionHeader), "POST"]
    );
  }

  /**
   * Sends a registration impression update request via Cordova.
   *
   * @param {string} outcome - The outcome of the impression (e.g., "Clicked" or "Dismissed").
   * @returns {void} - Does not return anything.
   */
  handleRegistrationImpression(outcome, obj) {
    if (!window.cordova) return;

    let ImpressionHeader = {
      "X-APOLLO-OPERATION-NAME": "updateImpression",
    };

    if (getCurrentCountry() === "hk") {
      const icm_id = sessionStorage.getItem("icmpid") || ""; // Default to empty string if null
      ImpressionHeader["icm-id"] = icm_id;
    }

    const requestPayload = {
      operationName: "updateImpression",
      variables: {
        input: {
          name: obj.name,
          group: obj.group,
          interactionId: obj.interactionId,
          issue: obj.issue,
          placement: obj.placement,
          rank: obj.rank,
          outcome: outcome, // Clicked/Dismissed
        },
      },
      query: `mutation updateImpression($input: CustomerOfferFeedbackInput!) { 
            updateImpression(feedback: $input) { 
                __typename 
                status 
                message 
            } 
        }`,
    };

    document.write(JSON.stringify(ImpressionHeader));
    document.write("<br>");
    document.write("<br>");
    document.write("<br>");
    document.write(JSON.stringify(requestPayload));

    window.cordova.exec(
      (response) => console.log("Success 2:", response), // Response is already JSON
      (error) => console.log("Error 2:", error),
      "gqlplugin", // Plugin name
      "request", // Function name
      [JSON.stringify(requestPayload), JSON.stringify(ImpressionHeader), "POST"]
    );
  }

  /**
   * Handles the loading state of the RTIM (Real-Time Interaction Management) component.
   * Hides the loader and displays an error message if an error is found.
   *
   * @returns {void}
   */
  rtimLoaded() {
    const that = this;
    that.ScTuluCamp.querySelector(".sc-tulu-camp__loader")?.classList.add(
      "hide"
    );
    if (that.errorFound) {
      that.ScTuluCamp.querySelector(
        ".sc-tulu-camp__loader-error"
      )?.classList.remove("hide");
    }
  }
}

const instance = new ScTuluCampaign();
window.addEventListener("load", () => {
  instance.init();
});

// export default instance;
