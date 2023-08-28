import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../../../ContextProvider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogout = () => {
    logOut().then(() => {});
  };

  const navOption = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/order">Order</NavLink>
      </li>
      <li>
        <NavLink to="/offered">Offered</NavLink>
      </li>

      {user ? (
        <>
          <li onClick={handleLogout}>
            <NavLink to="/login">LogOut</NavLink>
          </li>
        </>
      ) : (
        <>
          <li>
            <NavLink to="/signUp">signUp</NavLink>
          </li>
        </>
      )}
    </>
  );
  return (
    <div>
      <div className="navbar text-white bg-slate-600">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navOption}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">Mobile shop</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOption}</ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
