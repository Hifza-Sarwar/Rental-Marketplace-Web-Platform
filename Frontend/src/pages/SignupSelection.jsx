import { Link } from "react-router-dom";

function SignupSelection() {
  return (
    <section className="selection-auth-page">

      <div className="selection-auth-card">

        <h2>Choose Account Type</h2>

        <Link to="/signup">
          <button>User Sign Up</button>
        </Link>


        <Link to="/vendor-signup">
          <button>Vendor Sign Up</button>
        </Link>

      </div>

    </section>
  );
}

export default SignupSelection;