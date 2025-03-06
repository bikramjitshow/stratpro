import React from 'react';

export const Tooltips = props => {
  return (
    <div style={{ marginLeft: 100 + 'px', marginTop: 130 + 'px' }}>
      {/* The above margin added for visible the tooltip on storybook */}
      {props.showText && <span>{props.text}</span>}
      <span className={`sc-tooltip ${props.class}`} tabIndex="0">
        {props.showIcon && (
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            width="64"
            height="64"
            viewBox="0 0 64 64"
            role="img"
            aria-label="icon-info"
          >
            <path
              fill="none"
              stroke="#919191"
              strokeLinejoin="miter"
              strokeLinecap="butt"
              strokeMiterlimit="10"
              strokeWidth="3.563"
              d="M32 3.299c15.851 0 28.701 12.848 28.701 28.701 0 15.851-12.85 28.701-28.701 28.701-15.854 0-28.701-12.85-28.701-28.701S16.147 3.299 32 3.299z"
            />
            <path
              fill="#919191"
              d="M30.351 27.162h2.639v18.474h-2.639V27.162zm0-10.556h2.639v5.278h-2.639v-5.278z"
            />
          </svg>
        )}

        <span className="sc-tooltip__text">{props.tooltiptext}</span>
      </span>
    </div>
  );
};
