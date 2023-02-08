import React from 'react';

const index = ({ children, className, type, target }) => {
  return (
    <button type={type} className={className} onClick={target}>
      {children}
    </button>
  );
};

export default index;
