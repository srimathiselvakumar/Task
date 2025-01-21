import React, { useState } from 'react';

const Menu = () => {
  const [count, newCount] = useState(0);  // Use correct naming conventions
  const add = () => newCount(count + 1);  // Increment count by 1

  return (
    <div>
      <h1>Count: {count}</h1>  {/* Display the current count */}
      <button onClick={add}>Counter</button>  {/* Corrected onClick */}
    </div>
  );
};

export default Menu;
