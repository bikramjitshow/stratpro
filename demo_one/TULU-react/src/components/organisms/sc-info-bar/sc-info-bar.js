class ScInfoBar {
  init() {
    const button = document.querySelector('.sc-info-bar__dismiss');
    const main = document.querySelector('.sc-info-bar');

    if (button && main) {
      button.addEventListener('click', () => {
        main.style.display = 'none';
      });
    }
  }
}

const instance = new ScInfoBar();
window.addEventListener('DOMContentLoaded', () => instance.init());

export default instance;
