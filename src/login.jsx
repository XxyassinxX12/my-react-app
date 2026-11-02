import { useState } from "react";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setData(null);
    setLoading(true);

    try {
      const res = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          username: username, 
          password: password,
          expiresInMins: 30, // optional, defaults to 60[cite: 1]
        }),
        credentials: 'include' // Include cookies in the request[cite: 1]
      });

      const result = await res.json();
      console.log(result); //[cite: 1]

      if (!res.ok) {
        setError(result.message || "Login failed");
      } else {
        localStorage.setItem('token', result.accessToken); //[cite: 1]
        setData(result);
      }
    } catch (err) {
      setError("Mochkil f connexion, 3awd jreb.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section style={styles.page}>
      <h1 style={styles.title}>Login</h1>

      <form onSubmit={handleSubmit} style={styles.card}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={styles.input}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
          required
        />

        <button type="submit" style={styles.button} disabled={loading}>
          {loading ? "..." : "Valider"}
        </button>

        <div style={styles.message}>
          {error && <p style={styles.error}>{error}</p>}

          {data ? (
            <>
              <img src={data.image} alt={data.username} style={styles.avatar} />
              <p style={styles.line}>
                <strong>Bienvenue</strong> {data.firstName} {data.lastName}
              </p>
              <p style={styles.line}>
                <strong>Username:</strong> {data.username}
              </p>
              <p style={styles.line}>
                <strong>Email:</strong> {data.email}
              </p>
            </>
          ) : (
            !error && <p style={styles.line}>no data</p>
          )}
        </div>
      </form>
    </section>
  );
}

const styles = {
  page: {
    padding: "60px 20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  title: {
    color: "#00573f",
    fontSize: "40px",
    marginBottom: "30px",
  },
  card: {
    width: "100%",
    maxWidth: "380px",
    background: "#fff",
    padding: "30px",
    borderRadius: "12px",
    boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },
  input: {
    padding: "12px 14px",
    fontSize: "16px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    outline: "none",
  },
  button: {
    padding: "12px",
    fontSize: "16px",
    fontWeight: "bold",
    color: "#fff",
    background: "#00573f",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },
  message: {
    textAlign: "center",
    color: "#555",
  },
  line: {
    margin: "4px 0",
    wordBreak: "break-all",
  },
  error: {
    color: "#e0245e",
    fontWeight: "600",
  },
  avatar: {
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    background: "#f0f0ee",
  },
};