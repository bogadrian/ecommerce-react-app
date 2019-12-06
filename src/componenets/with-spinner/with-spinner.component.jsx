import React from 'react';

import './with-spinner.style.scss';

const WithSpinner = WrappedComponent => ({ isLoading, ...otherProps }) => {
  return isLoading ? (
    <div className="spinner-center">
      <div className="spinner"></div>
    </div>
  ) : (
    <WrappedComponent {...otherProps} />
  );
};

export default WithSpinner;
