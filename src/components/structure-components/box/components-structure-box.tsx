'use client'

import React, { CSSProperties } from 'react';

interface BoxProps extends React.HTMLAttributes<HTMLDivElement> {
  width?: string | number;
  height?: string | number;
  padding?: string | number;
  margin?: string | number;
  backgroundColor?: string;
  borderRadius?: string | number;
  display?: CSSProperties['display'];
}

export const Box: React.FC<BoxProps> = ({
  width,
  height,
  padding,
  margin,
  backgroundColor,
  borderRadius,
  display,
  style,
  children,
  ...rest
}) => {
  const boxStyle: CSSProperties = {
    width,
    height,
    padding,
    margin,
    backgroundColor,
    borderRadius,
    display,
    ...style,
  };

  return (
    <div style={boxStyle} {...rest}>
      {children}
    </div>
  );
};