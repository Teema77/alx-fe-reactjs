/*import axios from 'axios';

const API_KEY = import.meta.env.VITE_APP_GITHUB_API_KEY;


const BASE_URL = 'https://api.github.com';

export const getUser = async (username) => {
  try {
    const res = await axios.get(`${BASE_URL}/users/${username}`, {
      headers: {
        Authorization: `token ${import.meta.env.VITE_APP_GITHUB_API_KEY}`
      }
    });
    return res.data;
  } catch (err) {
    console.error('Error fetching GitHub user:', err);
    throw err;
  }
};*/


/*import axios from 'axios';

export const fetchUserData = async (username) => {
  const response = await axios.get(`https://api.github.com/users/${username}`, {
    headers: {
      Authorization: `token ${import.meta.env.VITE_APP_GITHUB_API_KEY || ''}`
    }
  });
  return response.data;
};*/


/*import axios from "axios";

export const fetchAdvancedUsers = async ({ username, location, minRepos }) => {
  let query = "";
  if (username) query += `${username}`;
  if (location) query += `+location:${location}`;
  if (minRepos) query += `+repos:>${minRepos}`;

  const res = await axios.get(`https://api.github.com/search/users?q=${query}`);
  return res.data.items; // Array of users
};*/



import axios from 'axios';

export const fetchUserData = async (username) => {
  const response = await axios.get(`https://api.github.com/users/${username}`);
  return response.data;
};

