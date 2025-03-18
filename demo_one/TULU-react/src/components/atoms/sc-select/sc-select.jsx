import React, { useEffect } from 'react';
import SelectBox from './sc-select';

export const Selects = props => {
  useEffect(() => {
    SelectBox.init();
  }, []);
  return (
    <div className={`sc-select ${props.class}`}>
      <select className="sc-select__select">
        <option value="">Select</option>
        <option value="one">One</option>
        <option value="two">Two</option>
      </select>
    </div>
  );
};
