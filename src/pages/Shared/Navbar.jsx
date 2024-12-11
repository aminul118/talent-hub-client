import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logos/talenthub-logo.png";
import useAuth from "../../hooks/useAuth";

const Navbar = () => {
  const { user, handleLogOut, loading } = useAuth();

  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/jobs">Jobs</NavLink>
      </li>
    </>
  );

  // Logged in user's profile

  const loggedInUser = (
    <>
      <li>
        <NavLink to="/profile" className="justify-between">
          Profile
        </NavLink>
      </li>
      <li>
        <NavLink to="/setting">Setting</NavLink>
      </li>
      <li>
        <button onClick={handleLogOut}>Logout</button>
      </li>
    </>
  );

  return (
    <section className="bg-base-100">
      <div className="container mx-auto navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navLinks}
            </ul>
          </div>
          <Link to="/" className="flex items-center gap-3">
            <img className="w-14" src={logo} alt="Logo" />
            <p className="text-2xl font-semibold">Talent Hub</p>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>

        <div className="navbar-end">
          {/* if loading is true then show spinner. else  show user. But if user here show user else show login button 
          Here i am using two nested if else ex. 
          loading ? <p>Loading</p> : user ? <p>show user</p> : <button>login</button>
          */}
          {loading ? (
            <div className="flex items-center space-x-2">
              <span className="loading loading-ring loading-lg"></span>
            </div>
          ) : user ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="User Avatar"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                {loggedInUser}
              </ul>
            </div>
          ) : (
            <NavLink to="/login" className="btn btn-warning">
              Login
            </NavLink>
          )}
        </div>
      </div>
    </section>
  );
};

export default Navbar;
