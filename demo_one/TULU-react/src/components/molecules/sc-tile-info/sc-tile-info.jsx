import React from 'react';
import { HeadingGradients } from '../sc-heading-gradient/sc-heading-gradient';
import { ButtonLink } from '../../atoms/sc-button-link/sc-button-link';
import { Button } from '../../atoms/sc-button/sc-button';
import { CVPs } from '../sc-cvp/sc-cvp';

export const TileInfos = props => {
  return (
    <div className={`sc-tile-info ${props.class}`}>
      <div className="sc-tile-info__top">
        <HeadingGradients
          class=""
          icon={true}
          title="You may be interested in"
          desc="Bonus$aver Account"
        />
        <div className="sc-only-desktop">
          <ButtonLink href="#" label="Show More Loans" class="sc-btn-link--blue" showIcon={true} />
        </div>
      </div>
      <div className="sc-tile-info__content-wrapper">
        <CVPs class="" />
      </div>

      <ul className="sc-inline-buttons">
        <li className="sc-inline-buttons__item">
          <Button tag="a" href="#" label="Find out more" class="sc-btn--medium" />
        </li>
      </ul>

      <div className="sc-only-mobile">
        <ButtonLink href="#" label="View all Accounts" class="sc-btn-link--blue" showIcon={true} />
      </div>
    </div>
  );
};
