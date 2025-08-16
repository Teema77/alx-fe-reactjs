/*import React, { useState } from 'react';
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

export default App;*/


/*import React from "react";
import Search from "./components/Search";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-blue-600 text-white p-4 text-center">
        <h1 className="text-2xl font-bold">GitHub User Search</h1>
        <p className="text-sm">Find users by username, location, and repositories</p>
      </header>

      <main className="max-w-4xl mx-auto mt-6">
        <Search />
      </main>

      <footer className="mt-10 p-4 text-center text-gray-500 text-sm">
        Powered by GitHub API
      </footer>
    </div>
  );
}

export default App;*/


function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold text-blue-600">
        Tailwind is working!
      </h1>
    </div>
  );
}

