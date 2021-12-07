import React from "react";
import { Link ,useHistory } from "react-router-dom";

export default function Navbar({ token, setToken }) {
  const history = useHistory()
  return (
    <div>
      {token ? (
        <ul>
          <li>
            <Link className="link" to="/courses">
              courses
            </Link>
          </li>
          <li>
            {/* <Link className="link" to="/login">log out</Link> */}
            <button onClick={() => {setToken("")
            history.push("/login")
            }}>log out</button>
          </li>
        </ul>
      ) : (
        <ul>
          <li>
            <Link className="link" to="/login">
              login
            </Link>
          </li>
          <li>
            <Link className="link" to="/signUp">
              signUp
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
}
