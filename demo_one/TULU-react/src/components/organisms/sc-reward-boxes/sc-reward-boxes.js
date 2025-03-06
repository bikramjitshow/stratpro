class ScRewardBoxes {
  init() {
    let that = this;
    that.rewardBoxes = document.querySelector('.sc-reward-boxes');
    if (!that.rewardBoxes) return;
    that.handleRadioInput();
  }

  handleRadioInput() {
    let that = this;
    let radioBox = that.rewardBoxes.querySelectorAll('.sc-radio-box__input');
    radioBox.forEach(element => {
      element.addEventListener('change', event => {
        const className = event.target.value;
        const closest = event.target.closest('.sc-reward-boxes__box');
        const resultTiles = closest.querySelectorAll('.sc-reward-boxes__result');
        resultTiles.forEach(tile => {
          tile.classList.add('hide');
        });

        const boxTiles = closest.querySelectorAll('.sc-reward-boxes__cvp-tile');
        boxTiles.forEach(tile => {
          tile.classList.add('hide');
        });

        const selectedFields = that.rewardBoxes.querySelectorAll(`.${className}`);
        selectedFields.forEach(tile => {
          tile.classList.remove('hide');
        });
      });
    });
  }
}

const instance = new ScRewardBoxes();
window.addEventListener('load', () => instance.init());

export default instance;
