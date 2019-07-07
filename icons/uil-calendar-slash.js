import React from 'react';
import PropTypes from 'prop-types';

const UilCalendarSlash = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M11.66,7H15V8a1,1,0,0,0,2,0V7h1a1,1,0,0,1,1,1v3H17.66a1,1,0,0,0,0,2H19v1.34a1,1,0,1,0,2,0V8a3,3,0,0,0-3-3H17V4a1,1,0,0,0-2,0V5H11.66a1,1,0,0,0,0,2ZM21.71,20.29l-1.6-1.6h0L3.71,2.29A1,1,0,0,0,2.29,3.71L4.2,5.61A3,3,0,0,0,3,8V18a3,3,0,0,0,3,3H18a3,3,0,0,0,1.29-.3l1,1a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM5,8a1,1,0,0,1,.66-.93L9.59,11H5ZM6,19a1,1,0,0,1-1-1V13h6.59l6,6Z'
  }));
};

UilCalendarSlash.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilCalendarSlash.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilCalendarSlash;