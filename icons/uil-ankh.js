import React from 'react';
import PropTypes from 'prop-types';

const UilAnkh = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M18,12H14.91A7.23,7.23,0,0,0,17,7,5,5,0,0,0,7,7a7.23,7.23,0,0,0,2.09,5H6a1,1,0,0,0,0,2h5v7a1,1,0,0,0,2,0V14h5a1,1,0,0,0,0-2Zm-6-.16C11.07,11.22,9,9.58,9,7a3,3,0,0,1,6,0C15,9.58,12.93,11.23,12,11.84Z'
  }));
};

UilAnkh.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilAnkh.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilAnkh;