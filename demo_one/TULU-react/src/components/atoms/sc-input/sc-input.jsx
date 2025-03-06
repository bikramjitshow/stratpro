import React from 'react';

export const Inputs = props => {
  return (
    <>
      {props.InputOne && (
        <div className="sc-input ">
          <input
            className="sc-input__input"
            placeholder="Enter here"
            type="text"
            aria-label="This is input"
            defaultValue={20000}
          />
        </div>
      )}
      {props.InputTwo && (
        <div className="sc-input ">
          <input type="text" defaultValue={'+65'} className="sc-input__input sc-input__code" />
          <input
            className="sc-input__input"
            placeholder="Enter here"
            type="text"
            aria-label="This is input"
            defaultValue={20000}
          />
        </div>
      )}
      {props.InputThree && (
        <div className="sc-input">
          <span className="sc-input__text">SGD</span>
          <input
            className="sc-input__input"
            placeholder="Enter here"
            type="text"
            aria-label="This is input"
            defaultValue={20000}
          />
        </div>
      )}
      {props.InputFour && (
        <div className="sc-input">
          <select className="sc-input__input sc-input__select" name="" id="">
            <option value={12}>12</option>
            <option value={12}>13</option>
            <option value={12}>14</option>
            <option value={12}>15</option>
          </select>
          <span className="sc-input__text">Years</span>
        </div>
      )}
      {props.InputFive && (
        <div className="sc-input sc-input--small">
          <input
            className="sc-input__input"
            placeholder="Enter here"
            type="text"
            aria-label="This is input"
            defaultValue={20000}
          />
        </div>
      )}
      {props.InputSix && (
        <div className="sc-input sc-input--error">
          <input
            className="sc-input__input"
            placeholder="Enter here"
            type="text"
            aria-label="This is input"
            defaultValue={20000}
          />
        </div>
      )}
      {props.InputSeven && (
        <div className="sc-input sc-input--blue">
          <input
            className="sc-input__input"
            placeholder="Enter here"
            type="text"
            aria-label="This is input"
            defaultValue={20000}
          />
        </div>
      )}
    </>
  );
};
