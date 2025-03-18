import React from 'react';

export const CheckBoxs = props => {
  return (
    <div className={`sc-checkbox ${props.class} `}>
      This is sample
      <input
        className="sc-checkbox__input"
        type={props.type}
        id={props.id}
        name="radio-option"
        tabIndex="-1"
      />
      <label className="sc-checkbox__checkmark" htmlFor={props.id} tabIndex="0"></label>
    </div>
  );
};
