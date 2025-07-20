/*const UserProfile = (props) => {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>Age: {props.age}</p>
      <p>Bio: {props.bio}</p>
    </div>
  );
};

export default UserProfile;*/

import React, { useContext } from 'react'; // ✅ Imports useContext and React
import UserContext from '../UserContext';  // ✅ Import the context

const UserProfile = () => {
  const user = useContext(UserContext);   // ✅ Use the context to get user data

  return (
    <div style={{ border: '1px solid gray', padding: '10px', margin: '10px' }}>
      <h2 style={{ color: 'blue' }}>{user.name}</h2>
      <p>Age: <span style={{ fontWeight: 'bold' }}>{user.age}</span></p>
      <p>Bio: <span style={{ fontStyle: 'italic' }}>{user.bio}</span></p>
    </div>
  );
};

export default UserProfile;

