import React, { useEffect } from 'react';
import InputNumber from './sc-input-number';

export const InputNumbers = () => {
  useEffect(() => {
    InputNumber.init();
  }, []);
  return (
    <div className="sc-input-number ">
      <button tabIndex={0} className="sc-input-number__minus" aria-label="Minus" />
      <input className="sc-input-number__input" type="text" defaultValue={10} />
      <button tabIndex={0} className="sc-input-number__plus" aria-label="Plus" />
    </div>
  );
};
