import { useEffect, useState } from "react";
import "../../assets/styles/Forum.scss";

function Forum() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    async function loadUsers() {
      try {
        const response = await fetch("http://localhost:5000/user", {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error("Impossible de récupérer les utilisateurs.");
        }

        setUsers(await response.json());
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message);
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    loadUsers();

    return () => controller.abort();
  }, []);

  return (
    <section className="page-forum">
      <h1>Forum</h1>

      {loading && <p>Chargement des utilisateurs...</p>}
      {error && <p role="alert">{error}</p>}
      {!loading && !error && (
        <ul className="forum-list">
          {users.map((user) => (
            <li className="forum-message" key={user.ID}>
              <strong className="forum-message-id">{user.ID}</strong>
              <p className="forum-message-comment">{user.Commentaire}</p>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default Forum;
