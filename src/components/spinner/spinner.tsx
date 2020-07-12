import React from 'react';
import './spinner.scss';

const Spinner: React.FC = () => {
  return (
    <div className="container">
      <p className="spinner">loading...</p>
    </div>
  );
};

export { Spinner };
