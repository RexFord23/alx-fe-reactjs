import axios from "axios";

export const fetchUserData = async (username) => {
  const response = await axios.get(
    `https://api.github.com/users/${username}`,
    {
      headers: {
        Accept: "application/vnd.github.v3+json",
        Authorization: `token ${import.meta.env.VITE_APP_GITHUB_API_KEY}`,
      },
    }
  );

  return response.data;
};

export const fetchAdvancedUsers = async ({
  username,
  location,
  minRepos,
  page = 1,
}) => {
  let query = "";

  if (username) query += username;
  if (location) query += ` location:${location}`;
  if (minRepos) query += ` repos:>${minRepos}`;

  const response = await axios.get(
    `https://api.github.com/search/users?q=${query}&page=${page}&per_page=10`,
    {
      headers: {
        Accept: "application/vnd.github.v3+json",
        Authorization: `token ${import.meta.env.VITE_APP_GITHUB_API_KEY}`,
      },
    }
  );

  return response.data;
};
