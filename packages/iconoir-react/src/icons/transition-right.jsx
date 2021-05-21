import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

export const TransitionRight = forwardRef(
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
            d="M2 18V6C2 4.34315 3.34315 3 5 3H7C8.65685 3 10 4.34315 10 6V18C10 19.6569 8.65685 21 7 21H5C3.34315 21 2 19.6569 2 18Z"
            stroke="currentColor"
            stroke-width="1.5"
          />
          <path
            d="M16 3H18C20.2091 3 22 4.79086 22 7V17C22 19.2091 20.2091 21 18 21H16"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M10 12H18M18 12L15 9M18 12L15 15"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </svg>
    );
  }
);

TransitionRight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

TransitionRight.displayName = 'TransitionRight';

export default TransitionRight;