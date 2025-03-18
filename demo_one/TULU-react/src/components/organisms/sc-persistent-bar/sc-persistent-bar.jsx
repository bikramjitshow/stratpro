import React, { useEffect, useRef } from 'react';

export const PersistentBars = props => {
  const divRef = useRef(null);

  useEffect(() => {
    if (divRef.current) {
      divRef.current.style.setProperty('bottom', '0', 'important');
    }
  }, []);
  return (
    // sc-persistent-bar--white : add this className on main div for make white background
    <div ref={divRef} className={`sc-persistent-bar ${props.class}`}>
      <div className="sc-content-wrapper">
        <div className="sc-persistent-bar__content">
          <div className="sc-persistent-bar__main-content">
            <span className="sc-only-desktop">
              Earn 1.5% cashback. No cashback cap and no minimum spend.
            </span>
            <span className="sc-only-mobile">Earn 1.5% cashback.</span>
          </div>
          <div className="sc-persistent-bar__btn-content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, possimus?
          </div>
        </div>
        <ul className="sc-inline-buttons">
          <li className="sc-inline-buttons__item">
            <a className="sc-btn sc-btn--medium" href="" title="Apply Now">
              Apply Now
            </a>
          </li>
          <li className="sc-inline-buttons__item">
            <a className="sc-btn sc-btn--medium sc-btn--secondary" href="" title="Apply Now">
              Apply Now
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
