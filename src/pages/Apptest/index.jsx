import { useEffect, useState } from "react";

function Apptest() {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch("http://localhost:5000/user");

        if (!response.ok) {
          throw new Error(`Erreur HTTP : ${response.status}`);
        }

        const data = await response.json();
        setRows(data);
      } catch (err) {
        setError("Impossible de charger les donn�es.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  return (
    <div>
      <h1>Apptest</h1>

      {loading && <p>Chargement...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {!loading && !error && rows.length === 0 && (
        <p>Aucune donn�e trouv�e.</p>
      )}

      {!loading && !error && rows.map((row) => (
        <pre key={row.id}>{JSON.stringify(row, null, 2)}</pre>
      ))}
    </div>
  );
}

export default Apptest;
