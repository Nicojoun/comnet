import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../assets/styles/Login.scss";

function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ login: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");

    if (!form.login.trim() || !form.password.trim()) {
      setError("Merci de renseigner le login et le mot de passe.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          login: form.login.trim(),
          password: form.password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Connexion impossible.");
      }

      localStorage.setItem("comnet.user", JSON.stringify(data.user));
      window.dispatchEvent(new Event("comnet-auth-change"));
      navigate("/", { replace: true });
    } catch (err) {
      setError(err.message || "Erreur de connexion.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login">
      <h1 className="login-title">LOGIN</h1>

      <form className="login-form" onSubmit={handleSubmit}>
        <label className="login-label" htmlFor="login">
          Login
        </label>
        <input
          className="login-input"
          id="login"
          name="login"
          type="text"
          placeholder="login"
          value={form.login}
          onChange={handleChange}
          autoComplete="username"
        />

        <label className="login-label" htmlFor="password">
          Mot de passe
        </label>
        <input
          className="login-input"
          id="password"
          name="password"
          type="password"
          placeholder="Mot de passe"
          value={form.password}
          onChange={handleChange}
          autoComplete="current-password"
        />

        <button className="login-button" type="submit" disabled={loading}>
          {loading ? "Connexion..." : "Connexion"}
        </button>

        {error && <p style={{ color: "#d33" }}>{error}</p>}
      </form>
    </div>
  );
}

export default Login;
