import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logos/talenthub-logo.png";
import { useContext } from "react";
import AuthContext from "../../providers/AuthProvider/AuthContext";

const Navbar = () => {
  const { user } = useContext(AuthContext);
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

  // Logged in user profile
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
        <button>Logout</button>
      </li>
    </>
  );
  return (
    <section className=" bg-base-100">
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
          <Link to="/" className="flex items-center gap-3 ">
            <img className="w-14" src={logo} alt="" />
            <p className="text-2xl font-semibold ">Talent Hub</p>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
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
            <>
              <button className="btn btn-warning">Login</button>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Navbar;
