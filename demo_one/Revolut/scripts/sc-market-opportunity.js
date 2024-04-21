class InputTabs {
  static intervalId;
  init() {
    const that = this;
    console.log("TABBB CALLLED");
    document.addEventListener("DOMContentLoaded", function () {
      let inputTab = document.querySelectorAll(
        ".sc-market-opportunity__mo-tab-list"
      );
      this.deviceWidth =
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth;
      const firstTab = document.querySelector(
        ".sc-market-opportunity__mo-tab-step-item"
      );
      const firstInputOption = document.querySelector(
        ".sc-market-opportunity__mo-tab-panels-input"
      );
      that.setTabsEventListener();
      that.autoCLick();
      firstTab.click();
      firstInputOption.checked = true;

      that.setHeadItem();

      const headItems = document.querySelectorAll(
        ".sc-market-opportunity__head-item"
      );
      if (headItems.length) {
        headItems.forEach((headitem, index) => {
          if (index > 0) {
            headitem.style.visibility = "hidden";
            headitem.style.display = "none";
            headitem.style.opacity = 0;
          } else {
            headitem.style.visibility = "visible";
            headitem.style.display = "flex";
            headitem.style.opacity = 1;
          }
        });
      }
    });
  }

  /**
   * autoCLick Tab 8s interval
   * `click` eventlistener
   */
  autoCLick() {
    // Initialize index to track which tab to click
    let currentIndex = 1;

    const alltabs = document.querySelectorAll(
      ".sc-market-opportunity__mo-tab-step-item"
    );

    // Define the setInterval function to click tabs at intervals
    InputTabs.intervalId = setInterval(() => {
      // console.log(alltabs[currentIndex].classList.contains("sc-market-opportunity__mo-tab-step-item--active"))
      if (
        !alltabs[currentIndex].classList.contains(
          "sc-market-opportunity__mo-tab-step-item--active"
        )
      ) {
        // Click the current tab
        alltabs[currentIndex].click();
        console.log(`Clicked tab ${currentIndex}`);

        const headItems = document.querySelectorAll(
          ".sc-market-opportunity__head-item"
        );
        if (headItems.length) {
          headItems.forEach((headitem, index) => {
            if (index == currentIndex) {
              headitem.style.visibility = "visible";
              headitem.style.display = "flex";
              headitem.style.opacity = 1;
            } else {
              headitem.style.visibility = "hidden";
              headitem.style.display = "none";
              headitem.style.opacity = 0;
            }
          });
        }
      }

      // Move to the next tab or start from the beginning if reached the end
      currentIndex = (currentIndex + 1) % alltabs.length;
    }, 8000);
  }

  /**
   * `click` eventlistener
   */
  setTabsEventListener() {
    console.log("tigger click");
    const tabs = document.querySelectorAll(
      ".sc-market-opportunity__mo-tab-step-item"
    );
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
          " sc-market-opportunity__mo-tab-step-item--active",
          ""
        );
      }
      // add active class to the tab clicked
      event.target.className +=
        " " + "sc-market-opportunity__mo-tab-step-item--active";
    }
  }

  setHeadItem() {
    const that = this;
    console.log("trigger");
    let currentIndex = 0; // Start currentIndex from 0
    const headItems = document.querySelectorAll(
      ".sc-market-opportunity__head-item"
    );
    const alltabs = document.querySelectorAll(
      ".sc-market-opportunity__mo-tab-step-item"
    );

    alltabs.forEach((tab, i) => {
      tab.addEventListener("click", () => callHead(i));
      clearInterval(InputTabs.intervalId);
      that.autoCLick();
    });

    function callHead(i) {
      if (headItems.length) {
        headItems.forEach((headitem, index) => {
          if (index === i) {
            headitem.style.visibility = "visible";
            headitem.style.display = "flex";
            headitem.style.opacity = 1;
          } else {
            headitem.style.visibility = "hidden";
            headitem.style.display = "none";
            headitem.style.opacity = 0;
          }
        });
        currentIndex = i; // Update currentIndex to the clicked tab index
      }
    }
  }
}

const instance = new InputTabs();
instance.init();

// export default instance;
