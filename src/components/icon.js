import React from 'react'
import master from '../assets/img/master.svg'
import PropTypes from 'prop-types'

const Icon = ({ name, className, ...restProps }) => (
  <svg 
    aria-hidden="true"
    focusable="false"
    role="img"
    width="16"
    height="16"
    className={`fill-currentColor ${className}`} {...restProps}>
    <use href={`${master}#${name}`} />
  </svg>
);

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Icon