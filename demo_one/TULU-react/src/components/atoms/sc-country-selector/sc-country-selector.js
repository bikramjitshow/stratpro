class SCCountrySelector {
  init() {
    let dropdown = document.querySelector('.sc-country-selector');
    let selectedCountryButton = dropdown?.querySelector('button.sc-flag');
    let selectedCountryName = selectedCountryButton?.querySelector('.sc-country-selector__name');
    let dropdownList = dropdown?.querySelector('.sc-country-selector__dropdown');

    if (!dropdown || !selectedCountryButton || !selectedCountryName || !dropdownList) return;

    // Toggle dropdown visibility on button click
    selectedCountryButton.addEventListener('click', () => {
      dropdownList.classList.toggle('hide');
    });

    // Handle country selection
    dropdownList.addEventListener('click', event => {
      let countryButton = event.target.closest('button');
      if (countryButton) {
        let countryCode = countryButton.querySelector('.sc-country-selector__name').textContent;
        selectedCountryName.textContent = countryCode;

        let flagClass = Array.from(countryButton.classList).find(cls =>
          cls.startsWith('sc-flag--')
        );
        selectedCountryButton.className = `sc-flag ${flagClass}`;

        dropdownList.classList.add('hide');
      }
    });
  }
}

let instance = new SCCountrySelector();
instance.init();

export default instance;
