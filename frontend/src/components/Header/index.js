/* eslint-disable jsx-a11y/anchor-is-valid */

import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../store";
import { logoutAction } from "../../store/actions";

export default function Header({ scrolled }) {
  const { userInfo, dispatch } = useContext(UserContext);
  const [isDoctor, setIsDoctor] = useState(false);
  useEffect(() => {
    if (Object.entries(userInfo).length !== 0) {
      userInfo.data.role === "doctor" && setIsDoctor(true);
    }
  }, [userInfo]);
  return (
    <header
      id="header"
      className={`fixed-top ${scrolled ? "header-scrolled" : ""}`}
    >
      <div className="container d-flex align-items-center">
        <h1 className="logo me-auto">
          <a href="/">Yaara</a>
        </h1>
        {/* <a href="index.html" className="logo me-auto"><img src="assets/img/logo.png" alt="" className="img-fluid"></a> */}

        <nav id="navbar" className="navbar order-last order-lg-0">
          <ul>
            <li>
              <a
                className={`nav-link scrollto ${
                  window.location.pathname === "/" ||
                  window.location.href.includes("#hero")
                    ? "active"
                    : ""
                }`}
                href="/#hero"
              >
                Home
              </a>
            </li>
            <li>
              <a
                className={`nav-link scrollto ${
                  window.location.href.includes("doctors") && "active"
                }`}
                href="/doctors"
              >
                Doctors
              </a>
            </li>
            <li>
              <a
                className={`nav-link scrollto ${
                  window.location.href.includes("about") && "active"
                }`}
                href="/#about"
              >
                About
              </a>
            </li>
            {!userInfo.isAuthenticated && (
              <li>
                <a
                  className={`nav-link scrollto ${
                    window.location.href.includes("signup") && "active"
                  }`}
                  href="/signup/patient"
                >
                  Sign up
                </a>
              </li>
              // <li className="dropdown">
              //   <span style={{ fontSize: "14px" }}>Sign Up</span>{" "}
              //   <i className="bi bi-chevron-down"></i>
              //   <ul>
              //     <li>
              //       <a href="/signup/user">User</a>
              //     </li>
              //     <li>
              //       <a href="/signup/doctor">Doctor</a>
              //     </li>
              //   </ul>
              // </li>
            )}
            {userInfo.isAuthenticated && (
              <li className="nav-link">
                <a href="/my-appointments">My Appointments</a>
              </li>
            )}
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>
        {!isDoctor && (
          <a
            href={`${userInfo.isAuthenticated ? "/#appointment" : "/login"}`}
            className="appointment-btn scrollto"
          >
            <span className="d-none d-md-inline">Make an</span> Appointment
          </a>
        )}
        {!userInfo.isAuthenticated && (
          <a href="/login" className="appointment-btn">
            Log In
          </a>
        )}
        {userInfo.isAuthenticated && (
          <span
            className="appointment-btn"
            style={{ cursor: "pointer" }}
            onClick={() => dispatch(logoutAction())}
          >
            Log out
          </span>
        )}
      </div>
    </header>
  );
}
