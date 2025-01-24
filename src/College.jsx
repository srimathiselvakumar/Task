import React from 'react';

const College = ({ college }) => {
  return (
    <div>
      <h1>{college.name}</h1>
      <p> {college.location}</p>
      <h2>{college.timing}</h2>
      <h2>{college.place}</h2>
    </div>
  );
};

export default College;
