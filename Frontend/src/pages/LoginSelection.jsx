import { Link } from "react-router-dom";

function LoginSelection() {
  return (
    <section className="selection-auth-page">

      <div className="selection-auth-card">

        <h2>Choose Login Type</h2>

        <Link to="/login">
          <button>User Login</button>
        </Link>


        <Link to="/vendor-login">
          <button>Vendor Login</button>
        </Link>


        <Link to="/admin-login">
          <button>Admin Login</button>
        </Link>

      </div>

    </section>
  );
}

export default LoginSelection;