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
    else console.log("Connecté à SQLite");
  }
);

// route GET pour /user
app.get("/user", (req, res) => {
  db.all("SELECT * FROM user", [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

// démarrer le serveur
app.listen(5000, () => {
  console.log("Backend démarré sur http://localhost:5000");
});


