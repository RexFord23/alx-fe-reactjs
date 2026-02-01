import axios from "axios";

const api = axios.create({
  baseURL: "https://api.github.com",
  headers: {
    Accept: "application/vnd.github.v3+json",
    Authorization: `token ${import.meta.env.VITE_APP_GITHUB_API_KEY}`,
  },
});

/**
 * Advanced GitHub user search
 * Supports username, location and min repos
 */
export const fetchAdvancedUsers = async ({
  username,
  location,
  repos,
  page = 1,
}) => {
  let query = "";

  if (username) query += `${username}`;
  if (location) query += ` location:${location}`;
  if (repos) query += ` repos:>${repos}`;

  const response = await api.get(
    `/search/users?q=${query}&page=${page}&per_page=10`
  );

  return response.data;
};
