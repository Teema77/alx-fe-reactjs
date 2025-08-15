import React, { useState } from 'react';
import { getUser } from './services/githubService';

function App() {
  const [username, setUsername] = useState('');
  const [user, setUser] = useState(null);

  const handleSearch = async () => {
    if (!username) return;
    try {
      const data = await getUser(username);
      setUser(data);
    } catch (err) {
      setUser(null);
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>GitHub User Search</h1>
      <input
        type="text"
        placeholder="Enter GitHub username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      {user && (
        <div style={{ marginTop: '1rem' }}>
          <img src={user.avatar_url} alt={user.login} width="100" />
          <h2>{user.name || user.login}</h2>
          <p>{user.bio}</p>
          <p>Followers: {user.followers} | Following: {user.following}</p>
        </div>
      )}
    </div>
  );
}

export default App;
