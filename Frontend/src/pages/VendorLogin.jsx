import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../api/auth";
import { saveAuth } from "../utils/auth";

function VendorLoginModal() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const data = await login({ email, password });

      if (data.user.role !== "vendor") {
        alert("Please use the correct login page.");
        return;
      }
      
      saveAuth(data.user, data.token);
      
      alert("Login Successful!");

      navigate("/");
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
            className="close-btn"
            onClick={() => navigate("/")}
          >
            ✕
          </button>

        <h2> Vendor Login</h2>

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

export default VendorLoginModal;
