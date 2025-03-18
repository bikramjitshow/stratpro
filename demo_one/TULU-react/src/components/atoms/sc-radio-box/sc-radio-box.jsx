import React from 'react';

export const RadioBoxs = props => {
  return (
    <div className={`sc-radio-box ${props.class} `}>
      <input
        type={props.type}
        className="sc-radio-box__input"
        id={props.id}
        tabIndex="-1"
        name={props.name}
        checked={props.checked}
      />
      <label className="sc-radio-box__input-label" htmlFor={props.id} tabIndex="0">
        {props.text}
      </label>
    </div>
  );
};
