import express from "express";
import sqlite3 from "sqlite3";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// chemin vers ta DB SQLite
const db = new sqlite3.Database(
  "C:\\Users\\FORMATION6\\Sabathgron\\site_esa\\DB\\comnet.db",
  sqlite3.OPEN_READWRITE,
  (err) => {
    if (err) console.error("Erreur DB:", err.message);
    else console.log("Connecte a SQLite");
  }
);

// route GET pour /user
app.get("/user", (req, res) => {
  db.all("SELECT * FROM user", [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    return res.json(rows);
  });
});

// route POST pour /login
app.post("/login", (req, res) => {
  const { login, password } = req.body;

  if (!login || !password) {
    return res.status(400).json({ error: "Login et mot de passe requis." });
  }

  db.get(
    "SELECT login FROM user WHERE login = ? AND password = ?",
    [login, password],
    (err, row) => {
      if (err) return res.status(500).json({ error: err.message });
      if (!row) {
        return res.status(401).json({ error: "Identifiants invalides." });
      }

      return res.json({
        success: true,
        user: { login: row.login },
      });
    }
  );
});

// demarrer le serveur
app.listen(5000, () => {
  console.log("Backend demarre sur http://localhost:5000");
});
