import React from 'react';

export const ToggleButtons = props => {
  return (
    <div className={`sc-btn-toggle ${props.class} `}>
      <p className="sc-btn-toggle__text">No</p>
      <input
        className="sc-btn-toggle__input"
        tabIndex={-1}
        id="sc-toggle"
        type="checkbox"
        defaultChecked=""
      />
      <label
        className="sc-btn-toggle__switch"
        htmlFor="sc-toggle"
        tabIndex={0}
        aria-label="Toggle button"
      />
      <p className="sc-btn-toggle__text">Yes</p>
    </div>
  );
};
