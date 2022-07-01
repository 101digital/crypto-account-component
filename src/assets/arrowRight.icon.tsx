import * as React from 'react';
import { SvgCss } from 'react-native-svg';

interface Props {
  width?: number;
  height?: number;
  color?: string;
}

const ArrowRightIcon: React.FC<Props> = ({ width, height, color }) => {
  return (
    <SvgCss
      xml={`<?xml version="1.0" encoding="UTF-8"?>
      <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 13L7 7L0.999999 1" stroke="#FF9800" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`}
      width={width}
      height={height}
      fill={color}
    />
  );
};
export { ArrowRightIcon };
