import React from 'react';

export const InputSelectors = () => {
  return (
    <div className="sc-input-selector">
      <div className="sc-input-selector__wrapper ">
        <div className="sc-input-selector__container">
          <input
            id={1}
            className="sc-input-selector__input"
            type="radio"
            name="period"
            defaultChecked
          />
          <label htmlFor={1} tabIndex={0} className="sc-input-selector__label">
            <span>1</span>
          </label>
          <input id={2} className="sc-input-selector__input" type="radio" name="period" />
          <label htmlFor={2} tabIndex={0} className="sc-input-selector__label">
            <span>2</span>
          </label>
          <input id={3} className="sc-input-selector__input" type="radio" name="period" />
          <label htmlFor={3} tabIndex={0} className="sc-input-selector__label">
            <span>3</span>
          </label>
          <input id={4} className="sc-input-selector__input" type="radio" name="period" />
          <label htmlFor={4} tabIndex={0} className="sc-input-selector__label">
            <span>4</span>
          </label>
          <input id={5} className="sc-input-selector__input" type="radio" name="period" />
          <label htmlFor={5} tabIndex={0} className="sc-input-selector__label">
            <span>5</span>
          </label>
        </div>
      </div>
    </div>
  );
};
