import React from 'react';
import './error-indicator.css';

import { Props } from './types';

const ErrorIndicator: React.FC<Props> = ({ error: { message } }) => {
  return (
    <div className="error-box">
      <h4>{message || 'Something wrong!'}</h4>
      <p>However, we caught the case.</p>
    </div>
  );
};

export { ErrorIndicator };
