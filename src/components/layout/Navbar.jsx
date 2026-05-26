import { Link, useNavigate } from "react-router-dom";

function Navbar() {

  const navigate = useNavigate();

  // logged-in user
  const user =
    JSON.parse(localStorage.getItem("user"));

  // LOGOUT
  const handleLogout = () => {

    localStorage.removeItem("user");

    alert("Logout Successful");

    navigate("/login");

  };

  return (

    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">

      {/* LOGO */}
      <Link
        className="navbar-brand"
        to="/"
      >
        Job Portal
      </Link>

      <div className="ms-auto">

        {/* HOME */}
        <Link
          className="btn btn-outline-light me-2"
          to="/"
        >
          Home
        </Link>

        {/* JOBS */}
        <Link
          className="btn btn-outline-light me-2"
          to="/jobs"
        >
          Jobs
        </Link>

        {/* USER DASHBOARD */}
        {user?.role === "user" && (

          <Link
            className="btn btn-info me-2"
            to="/dashboard"
          >
            Dashboard
          </Link>

        )}

        {/* ADMIN ONLY */}
        {user?.role === "admin" && (

          <Link
            className="btn btn-warning me-2"
            to="/add-job"
          >
            Add Job
          </Link>

        )}

        {/* NOT LOGGED IN */}
        {!user && (
          <>

            <Link
              className="btn btn-success me-2"
              to="/login"
            >
              Login
            </Link>

            <Link
              className="btn btn-primary"
              to="/register"
            >
              Register
            </Link>

          </>
        )}

        {/* LOGGED IN */}
        {user && (
          <>

            <span className="text-white me-3">
              Welcome {user.name}
            </span>

            <button
              className="btn btn-danger"
              onClick={handleLogout}
            >
              Logout
            </button>

          </>
        )}

      </div>

    </nav>

  );

}

export default Navbar;