import React, { useEffect } from 'react';
import ScSelection from './sc-selection.js';

export const Selections = () => {
  useEffect(() => {
    ScSelection.init();
  }, []);
  return (
    <div className="sc-selection" tabIndex={0}>
      <div className="sc-selection__selected">Introducing First$aver</div>
      <ul className="sc-selection__options">
        <li>
          <a href="#" data-value="apply" className="sc-selection__options-active">
            Introducing First$aver
          </a>
        </li>
        <li>
          <a href="#sc-lb-module-tab-minimal-module" data-value="keyben">
            Key Benefits
          </a>
        </li>
        <li>
          <a href="#sc-lb-module-privilege-module" data-value="promotion">
            Promotion
          </a>
        </li>
      </ul>
    </div>
  );
};
