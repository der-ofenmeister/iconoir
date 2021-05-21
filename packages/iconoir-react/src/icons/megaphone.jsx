import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

export const Megaphone = forwardRef(
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
            d="M14 14V6M14 14L20.1023 17.487C20.5023 17.7156 21 17.4268 21 16.9661V3.03391C21 2.57321 20.5023 2.28439 20.1023 2.51296L14 6M14 14H11M14 6H7C4.79086 6 3 7.79086 3 10V10C3 12.2091 4.79086 14 7 14V14M7 14L7.75716 19.3001C7.8965 20.2755 8.73186 21 9.71716 21V21C10.922 21 11.8476 19.9329 11.6772 18.7401L11 14M7 14H11"
            stroke="black"
            stroke-width="1.5"
          />
        </svg>
      </svg>
    );
  }
);

Megaphone.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Megaphone.displayName = 'Megaphone';

export default Megaphone;