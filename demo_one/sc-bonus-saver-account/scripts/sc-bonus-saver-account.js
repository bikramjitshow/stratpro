/* global Utils, _satellite, digitalData */
class Features {
  /**
   * Init function to be called on page load
   */
  init() {
    const parentThis = this;
    const labels = document.querySelectorAll(".sc-features__step-item");
    if (labels.length) {
      labels.forEach((elem) => {
        elem.addEventListener("click", (e) => {
          parentThis.labelEvtCallback(e);
        });

        elem.addEventListener("keyup", function (e) {
          if (e.keyCode == 13 || e.keyCode == 32) {
            e.target.click();
          }
        });
      });
    }
  }
  /**
   * On click event callback function
   * @param {object} e
   * @example
   *
   * this.labelEvtCallback(e);
   *
   */
  labelEvtCallback(e) {
    const targetelem = document.querySelectorAll(".sc-features__step-item");
    targetelem.forEach((el) => {
      el.classList.remove("sc-features__step-item--active");
    });
    e.target.classList.add("sc-features__step-item--active");
    let labelFor = e.target;
    console.log('labelFor', labelFor)
    // selectedLabels.forEach((el) => {
    //   el.classList.add("sc-features__step-item--active");
    // });
  }
}

const instance = new Features();
window.addEventListener("load", function () {
  instance.init();
});
export default instance;
