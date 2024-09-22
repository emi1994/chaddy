import React, { CSSProperties } from 'react';

interface DividerProps {
  color?: string;
  thickness?: number | string;
  margin?: string;
  width?: string;
  style?: 'solid' | 'dashed' | 'dotted';
  className?:string;
}

export const Divider: React.FC<DividerProps> = ({
  color = '#e0e0e0',
  thickness = 1,
  margin = '1rem 0',
  width = '100%',
  style = 'solid',
  className,
  ...rest
}) => {
  const dividerStyle: CSSProperties = {
    border: 'none',
    borderTop: `${thickness}px ${style} ${color}`,
    margin,
    width,
  };

  return <hr style={dividerStyle} {...rest} className={className}/>;
};