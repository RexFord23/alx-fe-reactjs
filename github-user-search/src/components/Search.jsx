import { useState } from "react";
import {
  fetchUserData,
  fetchAdvancedUsers,
} from "../services/githubService";

const Search = () => {
  /* ===== BASIC SEARCH ===== */
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);

  /* ===== ADVANCED SEARCH ===== */
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  /* ===== BASIC SEARCH HANDLER ===== */
  const handleBasicSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setUser(null);

    try {
      const data = await fetchUserData(username);
      setUser(data);
    } catch {
      setError("Looks like we cant find the user");
    } finally {
      setLoading(false);
    }
  };

  /* ===== ADVANCED SEARCH HANDLER ===== */
  const handleAdvancedSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setUsers([]);
    setPage(1);

    try {
      const data = await fetchAdvancedUsers({
        username,
        location,
        minRepos,
        page: 1,
      });
      setUsers(data.items);
    } catch {
      setError("Looks like we cant find the user");
    } finally {
      setLoading(false);
    }
  };

  const loadMore = async () => {
    const nextPage = page + 1;
    setPage(nextPage);

    const data = await fetchAdvancedUsers({
      username,
      location,
      minRepos,
      page: nextPage,
    });

    setUsers((prev) => [...prev, ...data.items]);
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      {/* ===== BASIC SEARCH FORM (TASK 1) ===== */}
      <form onSubmit={handleBasicSearch} className="mb-6 space-y-2">
        <input
          type="text"
          placeholder="Search GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full border p-2"
        />
        <button className="w-full bg-black text-white p-2">
          Basic Search
        </button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {user && (
        <div className="border p-4 mb-6">
          <img src={user.avatar_url} className="w-20" />
          <h3>{user.name || user.login}</h3>
          <a href={user.html_url} target="_blank">
            View Profile
          </a>
        </div>
      )}

      {/* ===== ADVANCED SEARCH FORM (TASK 2) ===== */}
      <form onSubmit={handleAdvancedSearch} className="space-y-2">
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full border p-2"
        />
        <input
          type="number"
          placeholder="Minimum repositories"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="w-full border p-2"
        />
        <button className="w-full bg-gray-800 text-white p-2">
          Advanced Search
        </button>
      </form>

      {/* ===== ADVANCED RESULTS ===== */}
      <div className="mt-6 space-y-4">
        {users.map((u) => (
          <div key={u.id} className="border p-3 flex gap-4">
            <img src={u.avatar_url} className="w-14 h-14" />
            <div>
              <p className="font-bold">{u.login}</p>
              <a
                href={u.html_url}
                target="_blank"
                className="text-blue-600"
              >
                View Profile
              </a>
            </div>
          </div>
        ))}
      </div>

      {users.length > 0 && (
        <button
          onClick={loadMore}
          className="w-full mt-4 border p-2"
        >
          Load More
        </button>
      )}
    </div>
  );
};

export default Search;
