import React from 'react';

const IsOnline = (bool) => {
  return <div className={`isOnline isOnline--${bool ? 'true' : 'false'}`}/>;
};

export default IsOnline;