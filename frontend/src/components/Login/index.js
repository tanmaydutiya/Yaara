/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useCallback, useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../store";
import { loginAction } from "../../store/actions";

const Login = () => {
  const history = useHistory(),
    { userInfo, dispatch } = useContext(UserContext),
    [inputs, setInputs] = useState({
      email: "",
      password: "",
    }),
    [error, setError] = useState(""),
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
    handleSubmit = useCallback(
      (e) => {
        e.preventDefault();
        fetch(`${process.env.REACT_APP_API_URL}/login/`, {
          method: "POST",
          body: JSON.stringify({
            ...inputs,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((res) => {
            if (res.success) {
              dispatch(loginAction(res.userInfo));
              history.push("/");
            } else {
              setError(res.error);
            }
          })
          .catch((err) => {
            setError("Something went wrong");
          });
      },
      [inputs, dispatch, history]
    );
  useEffect(() => {
    let id;
    if (error !== "") {
      id = setTimeout(() => {
        setError("");
      }, 3000);
    }
    return () => clearTimeout(id);
  }, [error]);
  useEffect(() => {
    userInfo.isAuthenticated && history.push("/");
  }, [history, userInfo]);
  return (
    <div className="row margin">
      <div className="col-md-4 mx-auto mb-4">
        <h1 className="text-center">Log in</h1>
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
            <div className="text-center mt-3">
              <button
                type="submit"
                className="btn btn-primary send-button tx-tfm"
              >
                Log in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
