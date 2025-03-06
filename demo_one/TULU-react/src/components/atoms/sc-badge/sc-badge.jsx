import React from 'react';

export const Badges = props => {
  return (
    <div className={`sc-badge ${props.class} `}>
      <span className="sc-badge__text">Recommended for you</span>
    </div>
  );
};
