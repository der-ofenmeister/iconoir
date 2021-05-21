import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

export const BinHalf = forwardRef(
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
            d="M3.03919 4.2939C3.01449 4.10866 3.0791 3.92338 3.23133 3.81499C3.9272 3.31953 6.3142 2 12 2C17.6858 2 20.0728 3.31952 20.7687 3.81499C20.9209 3.92338 20.9855 4.10866 20.9608 4.2939L19.2616 17.0378C19.0968 18.2744 18.3644 19.3632 17.2813 19.9821L16.9614 20.1649C13.8871 21.9217 10.1129 21.9217 7.03861 20.1649L6.71873 19.9821C5.6356 19.3632 4.90325 18.2744 4.73838 17.0378L3.03919 4.2939Z"
            stroke="currentColor"
            stroke-width="1.5"
          />
          <path
            d="M3 5C5.57143 7.66666 18.4286 7.66662 21 5"
            stroke="currentColor"
            stroke-width="1.5"
          />
          <path
            d="M8 15.5L10.6149 12.4493C10.8284 12.2001 11.2025 12.1688 11.4546 12.3788L14 14.5M8 15.5L11 18M8 15.5L4.5 16M11 18L14 14.5M11 18L14 21M14 14.5L19 17M14 14.5L20 11.5"
            stroke="currentColor"
            stroke-width="1.5"
          />
        </svg>
      </svg>
    );
  }
);

BinHalf.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

BinHalf.displayName = 'BinHalf';

export default BinHalf;