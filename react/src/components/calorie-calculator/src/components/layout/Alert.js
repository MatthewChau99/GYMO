import React from 'react';

const Alert = ({ alert, emptyFoods, emptyName }) => {
  return (
    alert !== null && <div>{alert.msg}</div>,
    emptyFoods !== false && (
      <div>
        No product with the name '<b>{emptyName}</b>' was found.
      </div>
    )
  );
};

export default Alert;
