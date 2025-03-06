class RangeSlider {
  init() {
    if (document.getElementsByClassName('sc-range-slider').length) {
      let sliders = document.querySelectorAll('.sc-range-slider');
      sliders.forEach(function(element) {
        let min = element.getAttribute('data-min') || 0;
        let max = element.getAttribute('data-max') || 100;
        let defaultVal = element.getAttribute('data-default') || 50;
        let step = element.getAttribute('data-step') || 10;
        let start = min;
        let format = {
          range: {
            min: parseFloat(min),
            max: parseFloat(max)
          },
          start: start,
          connect: 'lower'
        };
        if (step != undefined) {
          format.step = parseFloat(step);
        }
        if (start != undefined) {
          format.start = parseFloat(start);
        }
        // eslint-disable-next-line no-undef
        noUiSlider.create(element, format);
        element.noUiSlider.set(parseFloat(defaultVal));
      });
      let handles = document.querySelectorAll('.noUi-handle');
      handles.forEach(function(el) {
        el.setAttribute('aria-label', 'Drage here to move slider');
      });
    }
  }
}

const instance = new RangeSlider();
instance.init();

export default instance;
