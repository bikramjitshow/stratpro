import React from 'react';
import { Button } from '../sc-button/sc-button';

export const InlineButtons = () => {
  return (
    <ul className="sc-inline-buttons">
      <li className="sc-inline-buttons__item">
        <Button tag="a" label="Apply Now" />
      </li>
      <li className="sc-inline-buttons__item">
        <Button tag="a" label="Learn More" class="sc-btn--secondary-black" />
      </li>
    </ul>
  );
};
