class ScTulu {
  init() {
    const that = this;
    that.parentModalId = "";
    that.ScTuluCamp = document.querySelector(".sc-tulu-camp");

    // Get all the tabs in this tab group
    that.tabs = that.ScTuluCamp.querySelectorAll("[data-tab-btn-id]");
    // Get all the content items in this tab group
    that.contents = that.ScTuluCamp.querySelectorAll(
      ".sc-tulu-camp-tab__content-item"
    );

    that.tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        const targetId = tab.getAttribute("data-tab-btn-id");
        that.handleTabs(targetId);
      });
    });

    that.getStartedModal();
    that.asiaMilesYesModal();
    // that.handleScrollDown();
    that.handleMissionTracking();
    that.handleModal();
    that.handleQuestionnaire();
    that.objectList();
  }

  /**
   * Fetches and caches the topology data for world continents.
   * Ensures that the topology data is loaded only once.
   */
  async fetchApiData(url) {
    if (!url) {
      throw new Error("URL is required to fetch data.");
    }

    // url = `${window.location.protocol}//${window.location.hostname}:${window.location.port}/${url}`;
    // console.log("url", url);

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

  getStartedModal() {
    const that = this;
    const queryString = getQueryParam(getPageContext().queryString, "param");
    if (queryString === "yes") {
      that.ScTuluCamp.querySelector(".sc-get-started-yes").classList.add(
        "visible"
      );
    } else {
      that.ScTuluCamp.querySelector(".sc-get-started-no").classList.add(
        "visible"
      );
    }
    document.querySelector("html").classList.add("sc-modal__no-scroll");

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
            that.loadConsolidateApi();
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

  asiaMilesYesModal() {
    const that = this;
    const startButton = document.getElementById("sc-get-started-btn");
    const tcModal = document.getElementById("sc-terms-and-condition");
    const scrollButton = document.getElementById("sc-scroll-tc-btn");
    const cardMain = document.querySelectorAll(
      ".sc-tulu-camp-product-card__main"
    );
    const mainPage = document.querySelectorAll(".sc-tulu-camp-main");
    const backBtn = document.querySelector(".sc-tulu-camp-header__back");

    if (startButton && tcModal) {
      console.log(21111);

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
          mainPage[0].classList.remove("active");
          mainPage[1].classList.add("active");
        });
      });

      backBtn.addEventListener("click", () => {
        mainPage[1].classList.remove("active");
        mainPage[0].classList.add("active");
        document
          .querySelector(`[data-tab-btn-id='1']`)
          .classList.add("sc-tulu-camp-tab__head-button--active");
        document
          .querySelector(`[data-tab-content='1']`)
          .classList.add("sc-tulu-camp-tab__content-item--active");
      });
    }
  }

  async handleMissionTracking() {
    const that = this;
    const consolidates = that.ScTuluCamp?.querySelectorAll("[data-tab-btn-id]");
    if (!consolidates || consolidates.length === 0) return;

    consolidates.forEach((el) => {
      el.addEventListener("click", async (event) => {
        // Make the callback async
        const attrName = event.target
          .closest("[data-attribute-name]")
          .getAttribute("data-attribute-name");
        if (attrName) {
          const attrs = that.ScTuluCamp.querySelectorAll(`[${attrName}]`);
          if (attrs.length) {
            for (const attr of attrs) {
              try {
                const url = attr.getAttribute(attrName);
                const data = await this.fetchApiData(url);
                that.generateHTMLCode(
                  attr,
                  data.Fields,
                  attr.getAttribute("data-design-type")
                );

                // Do something with the fetched data, if needed
              } catch (error) {
                console.error("Error fetching consolidate data:", error);
              }
            }
          }
        }
      });
    });
  }

  generateHTMLCode(selector, data, type = "design-1") {
    console.log("type", type);
    const that = this;
    if (!data.length) return "";
    let htmlCode = "";
    if (type === "design-1") {
      data.forEach((item) => {
        const classMap = {
          Y: "sc-tulu-camp-timeline__box--active",
          N: "sc-tulu-camp-timeline__box--progress",
        };
        let modalAttr = "";
        let activeClass = "";
        if (classMap[item.Value]) {
          activeClass = classMap[item.Value];
        } else {
          activeClass = "sc-tulu-camp-timeline__box--disable";
          modalAttr = "sc-account-opening-confirmation";
        }

        htmlCode += `<div class="sc-tulu-camp-timeline__box ${activeClass}" data-modal-selector='${modalAttr}'>
            <div class="sc-tulu-camp-timeline__box-wrapper">
              <div class="sc-tulu-camp-timeline__box-title">
                ${this.textObj[item.Name] || item.Name}
              </div>
              <div class="sc-tulu-camp-timeline__box-right">
                <div class="sc-tulu-camp-timeline__box-icon">
                  <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.5 0L7.89583 4.60417L12.5 6L7.89583 7.39583L6.5 12L5.10417 7.39583L0.5 6L5.10417 4.60417L6.5 0Z" fill="#939393"></path>
                  </svg>
                </div>
                <p class="sc-tulu-camp-timeline__box-text">
                  1000
                </p>
              </div>
            </div>
          </div>`;
      });
      selector.querySelector(".sc-tulu-camp-timeline__wrapper").innerHTML =
        htmlCode;
    } else if (type === "design-2") {
      let rewardCount = 0;
      let rewardValue = 0;
      data.forEach((item) => {
        if (item.Name === "RewardCount") {
          rewardCount = Number(item.Value);
        } else if (item.Name === "RewardValue") {
          rewardValue = Number(item.Value);
        }
      });

      for (let i = 1; i <= 6; i++) {
        let activeClass = "sc-tulu-camp-progress__section--disable"; // default to disabled

        if (rewardCount) {
          if (i < rewardCount) {
            activeClass = "sc-tulu-camp-progress__section--completed"; // completed section
          } else if (i === rewardCount) {
            activeClass =
              "sc-tulu-camp-progress__section--completed sc-tulu-camp-progress__section--next-in-progress"; // current section in progress
          } else if (i === rewardCount + 1) {
            activeClass = "sc-tulu-camp-progress__section--progress"; // next section in progress
          }
        }
        htmlCode += `<li class="sc-tulu-camp-progress__section ${activeClass}">
                        <div class="sc-tulu-camp-progress__circle">
                          <svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.8334 2L7.72224 13.6667L2.16675 7.83333" stroke="#0C3A66" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path>
                          </svg>
                        </div>
                        <div class="sc-tulu-camp-progress__number">
                          <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.5 0.5L7.89583 5.10417L12.5 6.5L7.89583 7.89583L6.5 12.5L5.10417 7.89583L0.5 6.5L5.10417 5.10417L6.5 0.5Z" fill="#3BBD77"></path>
                          </svg>
                          <span>${rewardValue}</span>
                        </div>
                        <div class="sc-tulu-camp-progress__line"></div>
                      </li>`;
      }

      selector.querySelector(".sc-tulu-camp-progress__inner").innerHTML =
        htmlCode;
    }
  }

  async loadConsolidateApi() {
    const that = this;
    const consolidates = that.ScTuluCamp?.querySelectorAll(
      ".sc-tulu-camp-product-card__main[data-consolidate]"
    );
    if (!consolidates || consolidates.length === 0) return; // Exit if no elements found
    let totalMiles = 0;
    let totalMilesAccumulated = 0;

    for (const el of consolidates) {
      try {
        const data = await this.fetchApiData(
          el.getAttribute("data-consolidate")
        );
        let value = Number(data.Fields?.[0]?.Value) || 0;
        totalMiles += value;
        value = convertNumbers(that.ScTuluCamp, value);

        const accumulated = el.querySelector(
          ".sc-tulu-camp-product-card__progress-total strong"
        );

        if (accumulated) {
          let accumulatedValue = accumulated.innerText
            .trim()
            .replace(/[^0-9.]/g, "");
          accumulatedValue = accumulatedValue ? Number(accumulatedValue) : 0; // Ensure numeric conversion
          totalMilesAccumulated += accumulatedValue;
          accumulated.innerText = convertNumbers(
            that.ScTuluCamp,
            accumulatedValue.toString()
          );
        }

        // Update progress value in the current element
        el.querySelector(
          ".sc-tulu-camp-product-card__progress-value"
        ).innerText = value;

        // Find the child class and update its progress value
        const childClass = that.ScTuluCamp.querySelector(
          "." + el.getAttribute("data-child-class")
        );
        if (childClass) {
          childClass.querySelector(
            ".sc-tulu-camp-product-card__progress-value"
          ).innerText = value;
        }
      } catch (error) {
        console.error("Error fetching consolidate data:", error);
      }
    }

    // Update total miles display
    const milesSelector = that.ScTuluCamp?.querySelector(
      ".sc-cvp__middle strong"
    );
    if (milesSelector) {
      milesSelector.innerText = convertNumbers(that.ScTuluCamp, totalMiles);
    }
    const totalAccumulated = that.ScTuluCamp?.querySelector(
      ".sc-tulu-camp-milescard__desc strong"
    );
    if (totalAccumulated) {
      totalAccumulated.innerText = convertNumbers(
        that.ScTuluCamp,
        totalMilesAccumulated
      );
    }
  }

  handleScrollDown() {
    const modalModal = document.querySelectorAll(
      ".sc-tulu-camp-modal__body-declaration"
    );
    modalModal.forEach((el) => {
      el.addEventListener("scroll", function (event) {
        const footer = event.target.querySelector(
          ".sc-tulu-camp-modal__footer button"
        );
        if (
          Math.floor(event.target.scrollHeight - event.target.scrollTop) <=
          event.target.clientHeight
        ) {
          footer.classList.remove("sc-tulu-camp-modal__footer-btn--disabled");
          footer.innerText = "I understand & accept";
        }
      });
    });
  }

  objectList() {
    this.textObj = {
      OpenAccount: "Open An Account",
      FirstTrade: "Make your first trade",
      CompletionBonus: "Completion Bonus",
      FirstTrade: "First Trade",
    };
  }

  handleTabs(targetId) {
    const that = this;
    const targetContent = that.ScTuluCamp.querySelector(
      `.sc-tulu-camp-tab__content-item[data-tab-content="${targetId}"]`
    );
    if (!targetContent) return;

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
    targetContent.classList.add("sc-tulu-camp-tab__content-item--active");
  }

  handleModal() {
    const that = this;
    //Open Modal
    that.ScTuluCamp.addEventListener("click", (event) => {
      const modal = event.target.closest("[data-modal-selector]");
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
            }
          }
        }
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
        });
      });
    }
  }

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

    const continueBtn = that.ScTuluCamp.querySelector(
      ".sc-questionnaire .sc-tulu-camp-modal__footer-btn"
    );
    if (continueBtn) {
      continueBtn.addEventListener("click", (event) => {
        const closest = event.target.closest(".sc-tulu-camp-modal__footer-btn");
        if (
          !closest.classList.contains(
            "sc-tulu-camp-modal__footer-btn--disabled"
          )
        ) {
          closest.innerText = closest.getAttribute("data-text-continue");
          that.ScTuluCamp.querySelector(
            ".sc-tulu-camp-questionnaire__feedback--success"
          ).classList.add("sc-tulu-camp-questionnaire__feedback--show");
        }
      });
    }
  }
}

const instance = new ScTulu();
instance.init();
