import React, { useEffect, useRef } from 'react';

const loadScript = (url, onLoad, onError) => {
  const script = document.createElement('script');
  script.src = url;
  script.onload = onLoad;
  script.onerror = onError;
  script.async = true;
  document.body.appendChild(script);
};

export const RangeSliders = props => {
  const sliderRef = useRef(null);

  useEffect(() => {
    // Function to initialize the slider
    const initializeSlider = () => {
      if (window.noUiSlider && sliderRef.current) {
        noUiSlider.create(sliderRef.current, {
          start: 40,
          connect: 'lower',
          range: {
            min: 0,
            max: 100
          },
          step: 1
        });
      }
    };

    // Load the external script
    const handleLoad = () => {
      initializeSlider(); // Initialize slider after the script is loaded
    };

    loadScript('https://av.sc.com/assets/global/js/vendor/nouislider.min.js', handleLoad);
    return () => {
      const scripts = document.querySelectorAll(
        `script[src="https://av.sc.com/assets/global/js/vendor/nouislider.min.js"]`
      );
      scripts.forEach(script => script.remove());
    };
  }, []);

  // Range Slider HTML
  return <div ref={sliderRef} className={`sc-range-slider ${props.className}`}></div>;
};
