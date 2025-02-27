import React from 'react';

const Authorization = (Wrap) => {
  return ({ isAuthorization, ...props }) => {
    if (isAuthorization) {
      return <p>Access Denied</p>;
    }
    return <Wrap {...props} />;
  };
};

export default Authorization;
