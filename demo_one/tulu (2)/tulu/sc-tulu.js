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

    this.textObj = {
      queryParameterName: "tab",
      registrationPlacementId: "registration.json",
      commonPlacementId: "main_page.json",
      articlePlacementId: "article.json",
      diversifyText:
        "You're all set. Check out the other missions to get rewarded.",
      levelUp: {
        feedbackSuccess: "Feedback Success",
        feedbackError: "Feedback Error",
        feedbackFailedText: "Failed",
        feedbackFailedDesc: "Sorry! You failed the test.",
        feedbackSuccessDesc: "Congratulations! You passed the test.",
        articles: [
          {
            articleId: "wealth-needs-1",
            quizValue:
              "ca978112ca1bbdcafac231b39a23dc4da786eff8147c4e72b9807785afee48bb", //A
          },
          {
            articleId: "wealth-needs-2",
            quizValue:
              "3e23e8160039594a33894f6564e1b1348bbd7a0088d42c4acb73eeaed59c009d", //B
          },
          {
            articleId: "wealth-needs-3",
            quizValue:
              "ca978112ca1bbdcafac231b39a23dc4da786eff8147c4e72b9807785afee48bb", //A
          },
          {
            articleId: "wealth-needs-4",
            quizValue:
              "2e7d2c03a9507ae265ecf5b5356885a53393a2029d241394997265a1a25aefc6", //C
          },
          {
            articleId: "wealth-needs-5",
            quizValue:
              "3e23e8160039594a33894f6564e1b1348bbd7a0088d42c4acb73eeaed59c009d", //B
          },
          {
            articleId: "wealth-needs-6",
            quizValue:
              "18ac3e7343f016890c510e93f935261169d9e3f565436429830faf0934f4f8e4", //d
          },
          {
            articleId: "wealth-needs-7",
            quizValue:
              "18ac3e7343f016890c510e93f935261169d9e3f565436429830faf0934f4f8e4", //d
          },
          {
            articleId: "wealth-needs-8",
            quizValue:
              "ca978112ca1bbdcafac231b39a23dc4da786eff8147c4e72b9807785afee48bb", //A
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
            url: "https://retail.sc.com/scmobile/hk?ngroute=web/oe-webview",
            value: "77",
            conditional: true,
          },
          {
            key: "FirstTradeSXA",
            text: "Make your first trade",
            url: "https://retail.sc.com/scmobile/hk?ngroute=web/oe-webview",
            value: "1000",
            conditional: true,
          },
          {
            key: "CompletionBonusSXA",
            text: "Completion Bonus",
            url: "#",
            value: "1000",
            conditional: false,
          },
        ],
        fx: [
          {
            key: "FirstTradeFX",
            text: "Make your first trade",
            url: "https://retail.sc.com/scmobile/hk?ngroute=web/livefx-webview",
            value: "1000",
            conditional: true,
          },
        ],
        ut: [
          {
            key: "OpenAccountUT",
            text: "Open An Account",
            url: "https://retail.sc.com/scmobile/hk?ngroute=web/omf-webview",
            value: "1000",
            conditional: true,
          },
          {
            key: "FirstTradeUT",
            text: "Make your first trade",
            url: "https://retail.sc.com/scmobile/hk?ngroute=web/omf-webview",
            value: "1000",
            conditional: true,
          },
          {
            key: "CompletionBonusUT",
            text: "Finish all actions to earn bonus miles",
            url: "#",
            value: "1000",
            conditional: false,
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
    that.handleTabActivation();
    that.asiaMilesYesModal();
    that.handleModal();
    that.handleQuestionnaire();
    that.handleFaqAnalytics();
    that.handleTermsAnalytics();
    that.loadCommonDataApi();
    that.loadArticleDataApi();
  }

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
          console.log("Tab 1");
          handleAnalyticsCTA(event, wrapperInner, {
            ctaType: "button",
            xLinkRegion: "middle",
            ctaPosition: "top",
            context: event.target.innerText,
          });
        } else if (closestBtn) {
          console.log("Tab 2");
          handleAnalyticsCTA(event, closestBtn, {
            ctaType: "button",
            xLinkRegion: "middle",
            ctaPosition: "top",
          });
        } else if (closestPdt) {
          console.log("Tab 3");
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
              // article.querySelector(
              //   ".sc-tulu-camp-timeline__box-title"
              // ).innerText = that.textObj.levelUp.feedbackFailedDesc;
              article.querySelector(
                ".sc-tulu-camp-timeline__box-text"
              ).innerText = that.textObj.levelUp.feedbackFailedText;
              article.removeAttribute("data-modal-selector");
            }
            that.handleQuizImpression("Dismissed");
          }
          closest.querySelector(
            ".sc-tulu-camp-questionnaire__test-text span"
          ).innerText = 2;

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
   * Fetches and caches the topology data for world continents.
   * Ensures that the topology data is loaded only once.
   */

  async fetchApiData2(url) {
    if (!url) {
      throw new Error("URL is required to fetch data.");
    }

    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      if (!response.ok) {
        throw new Error(
          `Failed to fetch data: ${response.status} ${response.statusText}`
        );
      }
      return await response.json();
    } catch (error) {
      console.error("Fetch API Error:", error);
      throw error;
    }
  }
  async fetchApiData(url) {
    if (!url) {
      throw new Error("URL is required to fetch data.");
    }

    // url = `${window.location.protocol}//${window.location.hostname}:${window.location.port}/${url}`;
    // console.log("url", url);

    url = url.split("/");

    const data = {
      "registration.json": {
        Issue: "AcquisitionSales",
        InteractionID: "-3569455782704439973",
        Placement: "rewards_registration",
        Name: " EGSRTULURegistration ",
        GroupID: "Deposits",
        Rank: 2,
        Fields: [
          {
            Value: "Y",
            Name: "RegistrationFlag",
          },
        ],
      },
      "main_page.json": {
        Fields: [
          {
            Value: "5000",
            Name: "ConsolidatedDiversify",
          },
          {
            Value: "300",
            Name: "ConsolidatedTradeup",
          },
          {
            Value: "50",
            Name: "ConsolidatedLevelup",
          },
          {
            Value: "03/31/2025",
            Name: "CampaignEndDate",
          },
          {
            Value: "01/01/2025",
            Name: "CampaignStartDate",
          },
          {
            Value: "1000",
            Name: "ConsolidatedAmount",
          },
          {
            Value: "1000",
            Name: "ConsolidatedAmountFX",
          },
          {
            Value: "1000",
            Name: "ConsolidatedAmountUT",
          },
          {
            Value: "Y",
            Name: "OpenAccountSXA",
          },
          {
            Value: "N",
            Name: "FirstTradeSXA",
          },
          {
            Value: "N",
            Name: "CompletionBonusSXA",
          },
          {
            Value: "Y",
            Name: "FirstTradeFX",
          },
          {
            Value: "Y",
            Name: "OpenAccountUT",
          },
          {
            Value: "N",
            Name: "FirstTradeUT",
          },
          {
            Value: "N",
            Name: "CompletionBonusUT",
          },
          {
            Value: "100",
            Name: "RewardValue100",
          },
          {
            Value: "2",
            Name: "RewardCountSXA",
          },
          {
            Value: "8",
            Name: "RewardCountUT",
          },
          {
            Value: "",
            Name: "RewardCountFX",
          },
        ],
      },
      "article.json": [
        {
          Issue: "AcquisitionSales1",
          Name: "EGSRTULULevelupArticlenQuiz",
          GroupID: "Deposits",
          InteractionID: "-3569455782704439973",
          Placement: "levelup_page",
          Rank: 1,
          Fields: [
            {
              Name: "ArticleID",
              Value: "wealth-needs-1",
            },
            {
              Name: "ArticleRead",
              Value: "Y",
            },
            {
              Name: "ArticleTotalAmount",
              Value: 400,
            },
            {
              Name: "QuizCompleted",
              Value: "",
            },
            {
              Name: "QuizTotalAmount",
              Value: 100,
            },
          ],
        },
        {
          Issue: "AcquisitionSales2",
          Name: "EGSRTULULevelupArticlenQuiz",
          GroupID: "Deposits",
          InteractionID: "-3569455782704439973",
          Placement: "levelup_page",
          Rank: 2,
          Fields: [
            {
              Name: "ArticleID",
              Value: "wealth-needs-2",
            },
            {
              Name: "ArticleRead",
              Value: "Y",
            },
            {
              Name: "ArticleTotalAmount",
              Value: 400,
            },
            {
              Name: "QuizCompleted",
              Value: "Y",
            },
            {
              Name: "QuizTotalAmount",
              Value: 100,
            },
          ],
        },
        {
          Issue: "AcquisitionSales3",
          Name: "EGSRTULULevelupArticlenQuiz",
          GroupID: "Deposits",
          InteractionID: "-3569455782704439973",
          Placement: "levelup_page",
          Rank: 3,
          Fields: [
            {
              Name: "ArticleID",
              Value: "wealth-needs-3",
            },
            {
              Name: "ArticleRead",
              Value: "Y",
            },
            {
              Name: "ArticleTotalAmount",
              Value: 600,
            },
            {
              Name: "QuizCompleted",
              Value: "N",
            },
            {
              Name: "QuizTotalAmount",
              Value: 200,
            },
          ],
        },
        {
          Issue: "AcquisitionSales4",
          Name: "EGSRTULULevelupArticlenQuiz",
          GroupID: "Deposits",
          InteractionID: "-3569455782704439973",
          Placement: "levelup_page",
          Rank: 4,
          Fields: [
            {
              Name: "ArticleID",
              Value: "wealth-needs-4",
            },
            {
              Name: "ArticleRead",
              Value: "N",
            },
            {
              Name: "ArticleTotalAmount",
              Value: 600,
            },
            {
              Name: "QuizCompleted",
              Value: "N",
            },
            {
              Name: "QuizTotalAmount",
              Value: 200,
            },
          ],
        },
        {
          Issue: "AcquisitionSales5",
          Name: "EGSRTULULevelupArticlenQuiz",
          GroupID: "Deposits",
          InteractionID: "-3569455782704439973",
          Placement: "levelup_page",
          Rank: 5,
          Fields: [
            {
              Name: "ArticleID",
              Value: "wealth-needs-5",
            },
            {
              Name: "ArticleRead",
              Value: "Y",
            },
            {
              Name: "ArticleTotalAmount",
              Value: 600,
            },
            {
              Name: "QuizCompleted",
              Value: "N",
            },
            {
              Name: "QuizTotalAmount",
              Value: 200,
            },
          ],
        },
        {
          Issue: "AcquisitionSales6",
          Name: "EGSRTULULevelupArticlenQuiz",
          GroupID: "Deposits",
          InteractionID: "-3569455782704439973",
          Placement: "levelup_page",
          Rank: 6,
          Fields: [
            {
              Name: "ArticleID",
              Value: "wealth-needs-6",
            },
            {
              Name: "ArticleRead",
              Value: "",
            },
            {
              Name: "ArticleTotalAmount",
              Value: 600,
            },
            {
              Name: "QuizCompleted",
              Value: "",
            },
            {
              Name: "QuizTotalAmount",
              Value: 200,
            },
          ],
        },
        {
          Issue: "AcquisitionSales7",
          Name: "EGSRTULULevelupArticlenQuiz",
          GroupID: "Deposits",
          InteractionID: "-3569455782704439973",
          Placement: "levelup_page",
          Rank: 7,
          Fields: [
            {
              Name: "ArticleID",
              Value: "wealth-needs-7",
            },
            {
              Name: "ArticleRead",
              Value: "",
            },
            {
              Name: "ArticleTotalAmount",
              Value: 600,
            },
            {
              Name: "QuizCompleted",
              Value: "",
            },
            {
              Name: "QuizTotalAmount",
              Value: 200,
            },
          ],
        },
        {
          Issue: "AcquisitionSales8",
          Name: "EGSRTULULevelupArticlenQuiz",
          GroupID: "Deposits",
          InteractionID: "-3569455782704439973",
          Placement: "levelup_page",
          Rank: 8,
          Fields: [
            {
              Name: "ArticleID",
              Value: "wealth-needs-8",
            },
            {
              Name: "ArticleRead",
              Value: "",
            },
            {
              Name: "ArticleTotalAmount",
              Value: 600,
            },
            {
              Name: "QuizCompleted",
              Value: "",
            },
            {
              Name: "QuizTotalAmount",
              Value: 200,
            },
          ],
        },
      ],
    };

    const lastIndex = url[url.length - 1];
    return data[lastIndex];

    // try {
    //   const response = await fetch(url, {
    //     method: "GET",
    //     headers: {
    //       "Content-Type": "application/json",
    //       Accept: "application/json",
    //     },
    //   });

    //   if (!response.ok) {
    //     throw new Error(
    //       `Failed to fetch data: ${response.status} ${response.statusText}`
    //     );
    //   }

    //   return await response.json();
    // } catch (error) {
    //   console.error("Fetch API Error:", error);
    //   throw error;
    // }
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
      const data = await this.fetchApiData(that.textObj.commonPlacementId);
      that.commonPlacementData = data.Fields ?? data;
      const diversify = Number(
        that.getObjectValue(data.Fields, "ConsolidatedDiversify")
      );
      const tradeUp = Number(
        that.getObjectValue(data.Fields, "ConsolidatedTradeup")
      );
      const levelUp = Number(
        that.getObjectValue(data.Fields, "ConsolidatedLevelup")
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

      console.log("valueFound", valueFound);
    } catch (error) {
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
      const value = that.getObjectValue(that.commonPlacementData, item.key);
      if (value === "N") {
        that.ScTuluCamp.querySelector(
          ".sc-tulu-camp-product-card-diversify .sc-tulu-camp-product-card__bottom .sc-tulu-camp-product-card__task-desc span"
        ).innerText = item.text;
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
    const data = that.commonPlacementData;
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
                htmlCode += generateHTML(item, activeClass);
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
              htmlCode += generateHTML(
                itemObj,
                className,
                "sc-account-opening-confirmation"
              );
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

    function generateHTML(item, activeClass, modalAttr = "") {
      const urlAttr =
        item.conditional &&
        activeClass === "sc-tulu-camp-timeline__box--progress"
          ? `data-link-url="${item.url}"`
          : "";
      return `<div class="sc-tulu-camp-timeline__box ${activeClass}" ${urlAttr} data-modal-selector='${modalAttr}'>
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
                            ${item.value}
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
    const data = that.commonPlacementData;
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
        ".sc-tulu-camp-product-card-trade-up .sc-tulu-camp-product-card__bottom .sc-tulu-camp-product-card__task-desc span"
      ).innerText = that.textObj.nextTask.tradeUp.labelText
        .split("data-number")
        .join(getFormattedNumber(rewardCount++));
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
      }
      const numberText =
        that.textObj.tradeUp.progressNumber[
          Math.floor((i - 1) / that.textObj.tradeUp.perRow)
        ]; //get 100, 200, 300

      const counter = i >= rewardCount + 1 ? `<span>${i}</span>` : "";
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
                          <span>${numberText}</span>
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
              <span>${item.points}</span>
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

    articles.forEach((article) => {
      const id = article.getAttribute("data-article-id");
      const articleObj = data.find((item) =>
        item.Fields.some(
          (field) => field.Name === "ArticleID" && field.Value === id
        )
      );

      if (articleObj) {
        const classMap = {
          Y: "sc-tulu-camp-timeline__box--active",
          N: "sc-tulu-camp-timeline__box--progress",
        };

        const ArticleRead = that.getObjectValue(
          articleObj.Fields,
          "ArticleRead"
        );
        const QuizCompleted = that.getObjectValue(
          articleObj.Fields,
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
          }
        }
      }
    });

    if (articleImg && articleModal) {
      const levelUpNextTask = that.ScTuluCamp.querySelector(
        ".sc-tulu-camp-product-card-level-up .sc-tulu-camp-product-card__bottom"
      );
      if (levelUpNextTask) {
        levelUpNextTask
          .querySelector(".sc-tulu-camp-product-card__task-desc img")
          .setAttribute("src", articleImg);
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
    console.log("targetId", targetId);
    const that = this;
    const targetContent = that.ScTuluCamp.querySelectorAll(
      `.sc-tulu-camp-tab__content-item[data-tab-content="${targetId}"]`
    );
    if (!targetContent.length) return;
    console.log("YYYYYYYYY");

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
        "a.sc-tulu-camp-timeline__cvp-title"
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

        //Timeline boxes
        let anchorExist = false;
        const timeLineElement = event.target.closest(
          ".sc-tulu-camp-wrapper-full__column"
        );
        if (timeLineElement) {
          const diversifyTitle = timeLineElement.querySelector(
            ".sc-tulu-camp-wrapper-full__title"
          );
          if (diversifyTitle && diversifyTitle.getAttribute("data-context")) {
            //diversify section
            const title = trim(diversifyTitle.getAttribute("data-context"));
            const content = trim(
              event.target
                .closest(".sc-tulu-camp-timeline__box")
                .querySelector(".sc-tulu-camp-timeline__box-title").innerText
            );

            Object.assign(ctaObj, {
              context: `${title} - ${content}`,
              ctaPosition: "middle",
              xLinkRegion: "middle",
            });

            const linkUrl = event.target.closest("[data-link-url]");
            if (linkUrl) {
              window.open(linkUrl.getAttribute("data-link-url"), "_blank");
              anchorExist = true;
            }
          } else if (
            timeLineElement.querySelector(".sc-tulu-camp-timeline__box")
          ) {
            //article section
            Object.assign(ctaObj, {
              context:
                `article test - ` +
                trim(
                  timeLineElement.querySelector(
                    ".sc-tulu-camp-timeline__box-title"
                  ).innerText
                ),
              ctaPosition: "middle",
              xLinkRegion: "middle",
            });
          }
        }

        if (anchorElement ?? buttonElement ?? nextTaskElement ?? anchorExist) {
          handleAnalyticsCTA(
            event,
            anchorElement ??
              buttonElement ??
              nextTaskElement ??
              timeLineElement,
            ctaObj
          );
        }
      } else if (articleAnchor) {
        handleAnalyticsCTA(event, "", {
          ctaType: "button",
          context: "article link - " + trim(articleAnchor.innerText),
          xLinkRegion: "middle",
          ctaPosition: "middle",
        });
      }
    });

    //Close Modal
    const modalCloses = that.ScTuluCamp.querySelectorAll(
      ".sc-tulu-camp-modal__close"
    );
    if (modalCloses.length) {
      modalCloses.forEach((modalClose) => {
        modalClose.addEventListener("click", (event) => {
          if (!event.target.closest(".sc-get-started")) {
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

          const closeBtn = event.target.closest(
            ".sc-tulu-camp-modal--close-btn"
          );
          if (event.target.closest(".sc-tulu-camp-modal__footer-btn")) {
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
    console.log("labels", labels.length);
    labels.forEach((label) => {
      label.addEventListener("click", (event) => {
        console.log("ddddddddd");
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

    const [month, day, year] = inputDate.split("/");
    return `${parseInt(day)} ${months[parseInt(month) - 1]} ${year}`;
  }

  /**
   * Retrieves the value of a key from an array of objects, where each object has "Name" and "Value" properties.
   *
   * @param {Array} data - The array of objects to search through.
   * @param {string} key - The key to search for in the "Name" property of the objects.
   * @returns {string} The value associated with the key, or an empty string if the key is not found.
   */
  getObjectValue(data, key) {
    return data.find((item) => item.Name === key)?.Value || "";
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
    try {
      const data = await this.fetchApiData(
        that.textObj.registrationPlacementId
      );
      that.regPlacementData = data;
      const registrationFlag = that.getObjectValue(
        that.regPlacementData.Fields,
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

  /**
   * Handles the "Asia Miles Yes" modal interactions, including switching between main pages
   * and managing the "back" button functionality. This function is responsible for the user
   * flow between product cards and the main page. It also tracks button clicks for analytics.
   *
   * @returns {void}
   */
  asiaMilesYesModal() {
    const startButton = document.getElementById("sc-get-started-btn");
    const tcModal = document.getElementById("sc-terms-and-condition");
    const cardMain = document.querySelectorAll(".sc-tulu-camp-product-card");
    const mainPage = document.querySelectorAll(".sc-tulu-camp-main");
    const backBtn = document.querySelector(".sc-tulu-camp-header__back");

    if (startButton && tcModal) {
      // scrollButton.addEventListener("click", (event) => {
      //   const closest = event.target.closest("button");
      //   if (
      //     closest &&
      //     !closest.classList.contains(
      //       "sc-tulu-camp-modal__footer-btn--disabled"
      //     )
      //   ) {
      //     event.preventDefault();
      //     tcModal.classList.remove("visible");
      //     document
      //       .querySelector(".sc-modal__no-scroll")
      //       ?.classList.remove("sc-modal__no-scroll");
      //   }
      // });

      cardMain.forEach((card) => {
        card.addEventListener("click", () => {
          console.log(1111111);
          mainPage[0].classList.remove("active");
          mainPage[1].classList.add("active");
        });
      });

      backBtn.addEventListener("click", (event) => {
        if (mainPage[0].className.includes("active")) {
          window.location = "https://www.sc.com/exit";
          console.log("Webview Exit");
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
          console.log("Only Back");
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
      const data = await that.fetchApiData(that.textObj.articlePlacementId);
      that.articlePlacementData = data.Fields ?? data;
      that.generateLevelUp();

      // Do something with the fetched data, if needed
    } catch (error) {
      console.error("Error fetching consolidate data:", error);
    }
  }

  handleTabActivation() {
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

            console.log("SSSSSSS");
          }
        }
      }
    }

    if (!that.paramExist) {
      that.getStartedModal();
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
   * Sends a quiz impression update request via Cordova.
   *
   * This function checks for the specific article based on the current article ID,
   * and sends an impression update including details like article name, group, rank, and the outcome.
   *
   * @param {string} outcome - The outcome of the quiz impression, e.g., "Clicked" or "Dismissed".
   * @returns {void} - Does not return anything.
   */
  handleQuizImpression(outcome) {
    if (!window.cordova) return;

    const that = this;

    // Find the correct article object
    const articleObj = that.articlePlacementData.find((obj) =>
      obj.Fields.some(
        (field) =>
          field.Name === "ArticleID" && field.Value === that.currentArticleId
      )
    );

    if (!articleObj) {
      console.error(
        `Error: No matching article found for ArticleID: ${that.currentArticleId}`
      );
      return;
    }

    // Build the Impression Header based on the country
    const ImpressionHeader = {
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
          name: articleObj.Name,
          group: articleObj.GroupID,
          interactionId: articleObj.InteractionID,
          issue: articleObj.Issue,
          placement: articleObj.Placement,
          rank: articleObj.Rank,
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

    // Execute the Cordova function
    window.cordova.exec(
      (response) => console.log("Success:", response), // No need for JSON.stringify
      (error) => console.error("Error:", error),
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
  handleRegistrationImpression(outcome) {
    if (!window.cordova) return;

    const that = this;
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
          name: that.regPlacementData.Name,
          group: that.regPlacementData.GroupID,
          interactionId: that.regPlacementData.InteractionID,
          issue: that.regPlacementData.Issue,
          placement: that.regPlacementData.Placement,
          rank: that.regPlacementData.Rank,
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

    window.cordova.exec(
      (response) => console.log("Success:", response), // Response is already JSON
      (error) => console.error("Error:", error),
      "gqlplugin", // Plugin name
      "request", // Function name
      [JSON.stringify(requestPayload), JSON.stringify(ImpressionHeader), "POST"]
    );
  }
}

const instance = new ScTuluCampaign();
instance.init();

// export default instance;
