class InputTabs {
  init() {
    let inputTab = document.querySelectorAll(".sc-input-tab__list");
    this.deviceWidth =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;
    this.setTabsEventListener();
    const firstTab = document.querySelector(".sc-input-tab__step-item");
    const firstInputOption = document.querySelector(
      ".sc-input-tab__panels-input"
    );
    firstTab.click();
    firstInputOption.checked = true;
    // if (firstTab) {
    //   // if (this.deviceWidth >= 1024) {
    //     firstTab.click();
    //   // }
    // }
    // if (firstInputOption) {
    //   // if (this.deviceWidth >= 1024) {
    //     firstInputOption.checked = true;
    //   // } else {
    //     firstInputOption.checked = false;
    //   // }
    // }
  }

  /**
   * `click` eventlistener
   */
  setTabsEventListener() {
    const tabs = document.querySelectorAll(".sc-input-tab__step-item");
    for (let i = 0; i < tabs.length; i++) {
      tabs[i].addEventListener("click", clickPressEvent);
      tabs[i].addEventListener("keyup", clickPressEvent);
    }

    function clickPressEvent(event) {
      // only allow space and enter keys
      if (event.type == "keyup" && event.keyCode != 32 && event.keyCode != 13) {
        return;
      }
      if (event.type == "keyup") {
        event.target.click();
      }
      // remove active class from tabs
      for (let n = 0; n < tabs.length; n++) {
        tabs[n].className = tabs[n].className.replace(
          " sc-input-tab__step-item--active",
          ""
        );
      }
      // add active class to the tab clicked
      event.target.className += " " + "sc-input-tab__step-item--active";
    }
  }
}

class radioTab {
  init() {
    const self = this;
    const triggerElement = ".sc-tab-radio-card__radio-labels";

    self.tabChange(triggerElement);
  }

  tabChange(triggerElement) {
    document.addEventListener("DOMContentLoaded", function () {
      const elements = document.querySelectorAll(triggerElement);

      elements.forEach((element) => {
        element.addEventListener("change", function () {
          const targetId = element.querySelector("input").dataset.target;
          const specificElement = document.getElementById(targetId);

          specificElement.scrollIntoView({ behavior: "smooth" });
        });
      });
    });
  }
}

const instanceInputTabs = new InputTabs();
const instanceRadioTab = new radioTab();
window.addEventListener("load", function () {
  instanceInputTabs.init();
  instanceRadioTab.init();
});

module.exports = {
  instanceInputTabs,
  instanceRadioTab,
};
