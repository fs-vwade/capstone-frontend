import { NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../features/account/authSlice"; //need to change this

import bookImg from "../assets/logo.png"; //need to change folder path?
import "./Navbar.scss"; //should present as verticle navbar

function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const token = useSelector((state) => state.auth.token);

  const attemptLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <nav>
      <NavLink to="/" className="logo">
        /* need to be lookat */
        <img src={logoImg} />
      </NavLink>
      <menu>
        <li>
          <NavLink to="/Profile">Profile</NavLink>
        </li>

        {token ? (
          <>
            <li>
              <NavLink to="/Projects">Projects</NavLink>
            </li>
          </>
        ) : (
          <li>
            {/* not sure how to setup profile and login button */}
            <NavLink to="/login">Log In</NavLink>
          </li>
        )}
      </menu>
    </nav>
  );
}

export default Navbar;
