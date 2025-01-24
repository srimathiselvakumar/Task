import React from 'react';
import College from './College';
import Authorization from './Authorization';

const Auth = Authorization(College);

function App() {
  const college = { college: "XYZ University", admin: "Cityville",user:"9.00" };
  const isAuthorization = true;

  return (
    <>
      <h1>College Profile</h1>
      <h1>college</h1>
      <h1>admin</h1>
      <h1>user</h1>


      <Auth isAuthorization={isAuthorization} college={college} />
    </>
  );
}

export default App;
