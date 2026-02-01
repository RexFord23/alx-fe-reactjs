import { useState } from "react";
import { fetchAdvancedUsers } from "../services/githubService";

const Search = () => {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [repos, setRepos] = useState("");
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setUsers([]);
    setPage(1);

    try {
      const data = await fetchAdvancedUsers({
        username,
        location,
        repos,
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
      repos,
      page: nextPage,
    });

    setUsers((prev) => [...prev, ...data.items]);
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <form onSubmit={handleSearch} className="grid gap-3">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border p-2"
        />

        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="border p-2"
        />

        <input
          type="number"
          placeholder="Minimum repositories"
          value={repos}
          onChange={(e) => setRepos(e.target.value)}
          className="border p-2"
        />

        <button className="bg-black text-white p-2">
          Search
        </button>
      </form>

      {loading && <p className="mt-4">Loading...</p>}
      {error && <p className="mt-4 text-red-500">{error}</p>}

      {/* ✅ Enhanced results display */}
      <div className="mt-6 space-y-4">
        {users.map((user) => (
          <div
            key={user.id}
            className="border p-4 flex items-center gap-4"
          >
            <img
              src={user.avatar_url}
              alt={user.login}
              className="w-16 h-16 rounded-full"
            />
            <div>
              <p className="font-semibold">{user.login}</p>
              <a
                href={user.html_url}
                target="_blank"
                rel="noreferrer"
                className="text-blue-600"
              >
                View GitHub Profile
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* ✅ Pagination / Load more */}
      {users.length > 0 && (
        <button
          onClick={loadMore}
          className="mt-6 w-full border p-2"
        >
          Load More
        </button>
      )}
    </div>
  );
};

export default Search;
