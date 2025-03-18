class InputNumber {
  init() {
    try {
      const minusButtons = document.querySelectorAll('.sc-input-number__minus');
      const plusButtons = document.querySelectorAll('.sc-input-number__plus');

      minusButtons.forEach(minusButton => {
        /**
         * Click event handler for the minus button.
         * @param {MouseEvent} event - The click event.
         */
        minusButton.addEventListener('click', event => {
          const input = minusButton.parentElement.querySelector('.sc-input-number__input');
          let count = parseInt(input.value) - 1;
          count = count < 1 ? 1 : count;
          input.value = count;
          input.dispatchEvent(new Event('change'));
          event.preventDefault();
        });
      });

      plusButtons.forEach(plusButton => {
        /**
         * Click event handler for the plus button.
         * @param {MouseEvent} event - The click event.
         */
        plusButton.addEventListener('click', event => {
          const input = plusButton.parentElement.querySelector('.sc-input-number__input');
          input.value = parseInt(input.value) + 1;
          input.dispatchEvent(new Event('change'));
          event.preventDefault();
        });
      });
    } catch (e) {
      console.log(e);
    }
  }
}

const instance = new InputNumber();
instance.init();

export default instance;
