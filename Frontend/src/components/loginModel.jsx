import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { login } from "../api/auth";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const data = await login({ email, password });

      if (data.user.role !== "user") {
        alert("Please use the vendor login for vendor accounts.");
        return;
      }

      alert("Login Successful!");
      const redirectTo = location.state?.redirectTo;

      if (redirectTo) {
        navigate(redirectTo);
      } else {
        navigate("/user-dashboard");
      }
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-modal-overlay">

      <div className="login-auth-card">

      <button
  className="login-close-btn"
  onClick={() => navigate("/")}
>
  ✕
</button>

        <h2> User Login</h2>

        <form onSubmit={handleLogin}>

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>

        </form>

      </div>

    </div>
  );
}

export default Login;
