import React from 'react';

export const Titles = props => {
  const Tag = `${props.tag}`;
  return <Tag className={`sc-title ${props.class} `}>{props.label}</Tag>;
};
