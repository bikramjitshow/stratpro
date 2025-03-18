import React from 'react';
import { ButtonLink } from '../../atoms/sc-button-link/sc-button-link';

export const GuideCard = props => {
  return (
    <div className={`sc-guide-card ${props.class}`}>
      <div className="sc-guide-card__top">
        {props.title && <h3 className="sc-guide-card__content-title">{props.title}</h3>}
        {props.icon && (
          <div className="sc-guide-card__icon">
            <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="5.45 9.1 48.93 37.78">
              <path
                d="M19.6875 27.1875C19.6875 25.1164 21.3664 23.4375 23.4375 23.4375H50.625C52.6961 23.4375 54.375 25.1164 54.375 27.1875V43.125C54.375 45.1961 52.6961 46.875 50.625 46.875H23.4375C21.3664 46.875 19.6875 45.1961 19.6875 43.125V27.1875Z"
                fill="#38D200"
              />
              <path
                d="M7.89168 18.6438C5.97176 19.3593 4.9815 21.4832 5.66777 23.4138L11.1138 38.734C11.8127 40.7001 13.9811 41.7163 15.9377 40.999V25.3124C15.9377 22.2058 18.4561 19.6874 21.5627 19.6874H40.579L37.703 11.5971C37.0019 9.62469 34.8217 8.60822 32.8601 9.33919L7.89168 18.6438Z"
                fill="#0F7AED"
              />
            </svg>
          </div>
        )}
      </div>
      <div className="sc-guide-card__content">
        <div className="sc-guide-card__col">
          {props.head && <p className="sc-guide-card__col-head">{props.head}</p>}
          {props.main && (
            <p className="sc-guide-card__col-main">
              <strong>{props.main}</strong>
            </p>
          )}
          {props.desc && <p className="sc-guide-card__col-desc">{props.desc}</p>}
        </div>
        {props.tag && <div className="sc-guide-card__tag">Make Your Cash Work Harder</div>}
        {props.summary && (
          <div className="sc-guide-card__summary sc-rte">
            <ul>
              <li>Lower risk and stable</li>
              <li>For clients seeking income over the mid to long term</li>
              <li>Invests in bonds and money market instruments, no equities</li>
            </ul>
            <p>Invests in bonds and money market instruments, no equities</p>
          </div>
        )}
      </div>
      {props.button && (
        <div className="sc-guide-card__link">
          <ButtonLink class="sc-btn-link--arrow sc-btn-link--blue" href="#" label="Learn More" />
        </div>
      )}
    </div>
  );
};
