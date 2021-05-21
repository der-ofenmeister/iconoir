import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

export const Heptagon = forwardRef(
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
            d="M11.7397 1.62537C11.9042 1.54614 12.0958 1.54614 12.2603 1.62537L20.3398 5.51624C20.5043 5.59547 20.6238 5.7453 20.6644 5.92331L22.6599 14.666C22.7005 14.844 22.6579 15.0309 22.5441 15.1736L16.9529 22.1848C16.839 22.3275 16.6664 22.4107 16.4838 22.4107H7.51622C7.33363 22.4107 7.16097 22.3275 7.04712 22.1848L1.45595 15.1736C1.3421 15.0309 1.29946 14.844 1.34009 14.666L3.33556 5.92331C3.37619 5.7453 3.49567 5.59547 3.66018 5.51624L11.7397 1.62537Z"
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

Heptagon.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Heptagon.displayName = 'Heptagon';

export default Heptagon;