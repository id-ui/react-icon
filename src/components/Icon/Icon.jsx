import React from 'react';
import PropTypes from 'prop-types';
import { icons } from 'config';
import { Container } from './styled';

function Icon({ className, name, hoverColor, color, size, ...props }) {
  const icon = icons[name];

  if (!icon) {
    return null;
  }

  return (
    <Container
      className={className}
      color={color}
      hoverColor={hoverColor || color}
      {...props}
    >
      <svg
        width={size}
        height={size}
        viewBox={icon.viewBox}
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        {icon.content}
      </svg>
    </Container>
  );
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.string,
  color: PropTypes.string,
  hoverColor: PropTypes.string,
  cursor: PropTypes.string,
  className: PropTypes.string,
};

Icon.defaultProps = {
  size: '1.2rem',
  color: 'inherit',
  cursor: 'inherit',
};

export default Icon;
