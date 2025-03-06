class ScSelections {
  init() {
    const selection = document.querySelector('.sc-selection');
    if (!selection) return;

    const selected = selection.querySelector('.sc-selection__selected');
    if (selected) {
      selected.addEventListener('click', () => {
        selected.classList.contains('sc-selection__selected--active')
          ? selected.classList.remove('sc-selection__selected--active')
          : selected.classList.add('sc-selection__selected--active');
      });

      const optionsAnchor = selection.querySelectorAll('.sc-selection__options a');
      if (optionsAnchor.length) {
        optionsAnchor.forEach(el => {
          el.addEventListener('click', event => {
            selected.classList.remove('sc-selection__selected--active');
            const optionsActive = selection.querySelector('.sc-selection__options-active');
            if (optionsActive) {
              optionsActive.classList.remove('sc-selection__options-active');
            }
            event.target.classList.add('sc-selection__options-active');

            selected.innerText = event.target.closest('a').innerText.trim();
          });
        });
      }
    }
  }
}

const instance = new ScSelections();
instance.init();

export default instance;
