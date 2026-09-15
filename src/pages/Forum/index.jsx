import { useEffect, useState } from "react";
import "../../assets/styles/Forum.scss";

function Forum() {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [comment, setComment] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [connectedUser, setConnectedUser] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("comnet.user"));
    } catch {
      return null;
    }
  });

  useEffect(() => {
    const controller = new AbortController();

    async function loadComments() {
      try {
        const response = await fetch("http://localhost:5000/user", {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error("Impossible de récupérer les utilisateurs.");
        }

        setComments(await response.json());
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

    loadComments();

    return () => controller.abort();
  }, []);

  useEffect(() => {
    const updateConnectedUser = () => {
      try {
        setConnectedUser(JSON.parse(localStorage.getItem("comnet.user")));
      } catch {
        setConnectedUser(null);
      }
    };

    window.addEventListener("comnet-auth-change", updateConnectedUser);
    window.addEventListener("storage", updateConnectedUser);

    return () => {
      window.removeEventListener("comnet-auth-change", updateConnectedUser);
      window.removeEventListener("storage", updateConnectedUser);
    };
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitError("");

    if (!comment.trim()) {
      setSubmitError("Veuillez saisir un commentaire.");
      return;
    }

    setSubmitting(true);

    try {
      const response = await fetch("http://localhost:5000/commentaire", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          login: connectedUser.login,
          commentaire: comment,
        }),
      });

      const contentType = response.headers.get("content-type") || "";
      if (!contentType.includes("application/json")) {
        throw new Error(
          "Le serveur ne reconnaît pas la publication de commentaires. Redémarrez le backend."
        );
      }

      const newComment = await response.json();

      if (!response.ok) {
        throw new Error(newComment.error || "Impossible d'ajouter le commentaire.");
      }

      setComments((previousComments) => [...previousComments, newComment]);
      setComment("");
    } catch (err) {
      setSubmitError(err.message || "Impossible d'ajouter le commentaire.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="page-forum">
      <h1>Forum</h1>

      {connectedUser && (
        <form className="forum-form" onSubmit={handleSubmit}>
          <label className="forum-form-label" htmlFor="commentaire">
            Ajouter un commentaire
          </label>
          <textarea
            className="forum-form-input"
            id="commentaire"
            value={comment}
            onChange={(event) => setComment(event.target.value)}
            placeholder="commentaire"
            rows="4"
          />
          <button className="forum-form-button" type="submit" disabled={submitting}>
            {submitting ? "Publication..." : "Publier"}
          </button>
          {submitError && <p role="alert">{submitError}</p>}
        </form>
      )}

      {loading && <p>Chargement des commentaires...</p>}
      {error && <p role="alert">{error}</p>}
      {!loading && !error && (
        <ul className="forum-list">
          {comments.map((forumComment, index) => (
            <li className="forum-message" key={`${forumComment.ID}-${index}`}>
              <strong className="forum-message-login">
                {forumComment.login || "Utilisateur inconnu"}
              </strong>
              <p className="forum-message-comment">{forumComment.Commentaire}</p>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default Forum;
