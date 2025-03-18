import React from 'react';

/**
 * Primary UI component for user interaction
 */
export const Button = props => {
  const Tag = `${props.tag}`;
  return (
    <Tag href={props.href} title={props.label} className={`sc-btn ${props.class} `}>
      {props.label}
    </Tag>
  );
};
