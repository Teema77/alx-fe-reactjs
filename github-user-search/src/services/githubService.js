import axios from 'axios';

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
};
