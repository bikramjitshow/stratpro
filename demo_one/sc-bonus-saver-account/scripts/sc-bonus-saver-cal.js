class bsTabs {
  init() {
    let bsTab = document.querySelectorAll(".sc-bs-tab__list");
    this.deviceWidth =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;
    this.setTabsEventListener();
    const firstTab = document.querySelector(".sc-bs-tab__step-item");
    const firstInputOption = document.querySelector(".sc-bs-tab__panels-input");
    firstTab.click();
    firstInputOption.checked = true;
  }

  /**
   * `click` eventlistener
   */
  setTabsEventListener() {
    const tabs = document.querySelectorAll(".sc-bs-tab__step-item");
    console.log('clickPressEvent',tabs)

    for (let i = 0; i < tabs.length; i++) {
      tabs[i].addEventListener("click", clickPressEvent);
      tabs[i].addEventListener("keyup", clickPressEvent);
    }

    function clickPressEvent(event) {
      console.log('clickPressEvent',event.target)
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
          " sc-bs-tab__step-item--active",
          ""
        );
      }
      // add active class to the tab clicked
      event.target.className += " " + "sc-bs-tab__step-item--active";
    }
  }
}

const instanceBsTabs = new bsTabs();

window.addEventListener("load", function () {
  instanceBsTabs.init();
});

// module.exports = {
//   instanceBsTabs,
// };

export default instanceBsTabs;
