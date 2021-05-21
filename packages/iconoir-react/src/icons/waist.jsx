import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

export const Waist = forwardRef(
  ({ color = 'currentColor', size = 24 }, ref) => {
    return (
      <svg
        ref={ref}
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        color={color}
        xmlns="http://www.w3.org/2000/svg"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.4 4C18.4 4 16.8 7.75071 16.8 10.8571C16.8 11.8517 17.1408 12.684 17.6 13.5129M5.6 4C5.6 4 7.2 7.75071 7.2 10.8571C7.2 11.8517 6.85919 12.684 6.40001 13.5129M6.40001 13.5129H17.6M6.40001 13.5129C5.87156 14.4669 5.18633 15.4163 4.68341 16.6035M17.6 13.5129C18.1284 14.4669 18.8137 15.4163 19.3166 16.6035M4.68341 16.6035C4.2843 17.5456 4 18.6374 4 20M4.68341 16.6035C4.68341 16.6035 10.4 17.7143 12 20C13.6 17.7143 19.3166 16.6035 19.3166 16.6035M19.3166 16.6035C19.7157 17.5456 20 18.6374 20 20"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </svg>
    );
  }
);

Waist.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Waist.displayName = 'Waist';

export default Waist;