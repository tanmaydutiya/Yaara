/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useCallback, useContext, useEffect, useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { UserContext } from "../../store";

const Signup = () => {
  const { pathname } = useLocation(),
    { userInfo } = useContext(UserContext),
    history = useHistory(),
    [inputs, setInputs] = useState({
      name: "",
      email: "",
      password: "",
      address: "",
    }),
    [location, setLocation] = useState({
      latitude: null,
      longitude: null,
    }),
    [error, setError] = useState(""),
    [isDoctor, setIsDoctor] = useState(false),
    handleChange = useCallback(
      (e) => {
        const { name, value } = e.currentTarget;
        setInputs({
          ...inputs,
          [name]: value,
        });
      },
      [inputs]
    ),
    getLocation = () => {
      navigator.geolocation.getCurrentPosition((res, err) => {
        setLocation({
          latitude: res.coords.latitude,
          longitude: res.coords.longitude,
        });
      });
    },
    handleSubmit = useCallback(
      (e) => {
        e.preventDefault();
        if (isDoctor) {
          getLocation();
          if (location.latitude === null || location.longitude === null) {
            setError("Please allow location");
            return;
          }
        }
        fetch(`${process.env.REACT_APP_API_URL}/signup/`, {
          method: "POST",
          body: JSON.stringify({
            ...inputs,
            location,
            role: isDoctor ? "doctor" : "patient",
          }),
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((res) => {
            if (res.success) {
              history.push("/login");
            } else {
              setError(res.error);
            }
          })
          .catch((err) => {
            setError("Something went wrong");
          });
      },
      [inputs, isDoctor, location, history]
    );
  useEffect(() => {
    pathname.includes("doctor") && setIsDoctor(true);
  }, [pathname]);
  useEffect(() => {
    userInfo.isAuthenticated && history.push("/");
  }, [history, userInfo]);
  useEffect(() => {
    if (isDoctor) {
      getLocation();
    }
  }, [isDoctor]);
  useEffect(() => {
    let id;
    if (error !== "") {
      id = setTimeout(() => {
        setError("");
      }, 3000);
    }
    return () => clearTimeout(id);
  }, [error]);
  return (
    <div className="row margin">
      <div className="col-md-4 mx-auto mb-4">
        <h1 className="text-center">
          Sign up as {isDoctor ? "Doctor" : "Patient"}
        </h1>
        <div className="myform form">
          {error !== "" && (
            <div
              className="alert alert-warning alert-dismissible fade show text-center"
              role="alert"
            >
              {error}
            </div>
          )}
          <form name="login" onSubmit={handleSubmit}>
            <div className="form-group mt-3">
              <input
                type="text"
                name="name"
                className="form-control my-input"
                id="name"
                placeholder="Name"
                required
                value={inputs.name}
                onChange={handleChange}
              />
            </div>
            <div className="form-group mt-3">
              <input
                type="email"
                name="email"
                className="form-control my-input"
                id="email"
                placeholder="Email"
                required
                value={inputs.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group mt-3">
              <input
                type="password"
                min="0"
                name="password"
                id="password"
                className="form-control my-input"
                placeholder="Password"
                required
                value={inputs.password}
                onChange={handleChange}
              />
            </div>
            {isDoctor && (
              <div className="form-group mt-3">
                <textarea
                  name="address"
                  id="address"
                  className="form-control my-input"
                  placeholder="address"
                  required
                  value={inputs.address}
                  onChange={handleChange}
                />
              </div>
            )}
            <div className="text-center mt-3">
              <button
                type="submit"
                className="btn btn-primary send-button tx-tfm"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
