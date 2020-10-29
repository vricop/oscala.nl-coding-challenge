import React from 'react'
import master from '../assets/img/master.svg'
import PropTypes from 'prop-types'

const Icon = ({ name, width=16, height, className, ...restProps }) => (
  <svg 
    aria-hidden="true"
    focusable="false"
    role="img"
    width={width}
    height={height || width}
    className={`fill-currentColor pointer-events-none ${className}`} {...restProps}>
    <use href={`${master}#${name}`} />
  </svg>
);

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Icon