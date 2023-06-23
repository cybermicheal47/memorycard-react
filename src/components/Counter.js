import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  const [quantity, setQuantity] = useState(0);

  const handleAddOne = () => {
    setCount(count + 1);
  };

  const handleResetCounter = () => {
    setCount(0);
    setQuantity(0);
  };




  return (
    <div>
      <button onClick={handleAddOne}>COUNT</button>
      <h3>{count}</h3>
      <button onClick={handleResetCounter}>Reset counter</button>

    </div>
  );
};

export default Counter;
