import React, { useEffect, useState } from "react";
import axios from "axios";

import { Link } from "react-router-dom";
import "./Navigation.scss";
import LoginModal from "./Login";
import Logout from "./Logout";
import DashboardButton from "./DashboardButton";

// import pkg from "semantic-ui-react/package.json";

const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href =
  "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);

export default function Navigation() {
  const [logStatus, setLogStatus] = useState(false);
  const [userI, setUserI] = useState("");

  useEffect(() => {
    axios.get("/users/me").then((res) => {
      let name = "";
      if (res.data.user) {
        if (res.data.user.first_name) name = res.data.user.first_name;
        else name = res.data.user.name;
      }
      setUserI(name);
      setLogStatus(true);
    });
  }, []);
  return (
    <nav>
      <div>
        <Link className="navigation-logo" to="/">
          <svg
            id="Capa_1"
            enableBackground="new 0 0 512 512"
            height="512"
            viewBox="0 0 512 512"
            width="512"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <path d="m442.916 396.921c-28.67-81.325-59.178-170.917-186.916-170.917-56.898 0-99.567 17.909-130.446 54.751-26.783 31.955-41.203 72.859-56.47 116.166-17.916 50.964 26.102 100.847 78.111 90.856 43.022-8.274 102.11-22.214 186.562-5.971l31.047 5.971c51.461 9.894 96.179-39.463 78.112-90.856zm-72.445 61.395c-43.913-8.445-107.638-23.326-197.894-5.971l-31.047 5.971c-29.322 5.64-54.38-22.465-44.152-51.421 28.543-80.967 53.194-150.891 158.622-150.891s130.079 69.925 158.623 150.892c10.238 28.983-14.867 57.059-44.152 51.42z" />
              <path d="m381.941 156.168c22.746-30.326 22.765-78.158 0-108.51-24.724-32.966-67.164-32.958-91.882 0-22.746 30.326-22.765 78.158 0 108.51 24.724 32.966 67.164 32.958 91.882 0zm-45.941-103.255c17.888 0 33 22.439 33 49s-15.112 49-33 49-33-22.439-33-49 15.112-49 33-49z" />
              <path d="m221.941 156.168c22.746-30.326 22.765-78.158 0-108.51-24.724-32.966-67.163-32.958-91.882 0-22.746 30.326-22.765 78.158 0 108.51 24.724 32.966 67.164 32.958 91.882 0zm-45.941-103.255c17.888 0 33 22.439 33 49s-15.112 49-33 49-33-22.439-33-49 15.112-49 33-49z" />
              <path d="m110 205.913c0-30.327-24.673-55-55-55s-55 24.673-55 55 24.673 55 55 55 55-24.673 55-55zm-55 25c-13.785 0-25-11.215-25-25s11.215-25 25-25 25 11.215 25 25-11.215 25-25 25z" />
              <path d="m457 150.913c-30.327 0-55 24.673-55 55s24.673 55 55 55 55-24.673 55-55-24.673-55-55-55zm0 80c-13.785 0-25-11.215-25-25s11.215-25 25-25 25 11.215 25 25-11.215 25-25 25z" />
              <path d="m296 342.913h-25v-25c0-8.284-6.716-15-15-15s-15 6.716-15 15v25h-25c-8.284 0-15 6.716-15 15s6.716 15 15 15h25v25c0 8.284 6.716 15 15 15s15-6.716 15-15v-25h25c8.284 0 15-6.716 15-15s-6.716-15-15-15z" />
            </g>
          </svg>
          <div className="navigation-text">
            Virtual <span>Vet</span>
          </div>
        </Link>
      </div>
      <Link to="/signup"></Link>
      {logStatus ? (
        <>
          <span className="welcome">
            <span className="welcome-name">{userI}</span>, welcome back!
          </span>
          <div className="nav-right">
            <DashboardButton />
            <Logout setLogStatus={setLogStatus} />
          </div>
        </>
      ) : (
        <LoginModal setLogStatus={setLogStatus} />
      )}
    </nav>
  );
}
