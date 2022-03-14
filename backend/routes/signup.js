const express = require("express");
const addData = require("../utils/addData");
const { getAuth, createUserWithEmailAndPassword } = require("firebase/auth");
const { GeoPoint } = require("firebase/firestore");
const signup = express.Router();

signup.post("/", (req, res) => {
  const {
    email,
    password,
    name,
    location,
    address,
    role = "patient",
  } = req.body;
  const userInfo = { name, email, role };
  if (role === "doctor") {
    userInfo.address = address;
    userInfo.location = new GeoPoint(location.latitude, location.longitude);
  }
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, password)
    .then(async (useCredential) => {
      if (useCredential) {
        const id = await addData("users", userInfo);
        if (id !== -1) {
          res.send({
            success: true,
            userInfo: {
              uid: id,
              data: useCredential.user,
            },
          });
        } else {
          res.send({ success: false, error: "Trouble Signing up" });
        }
      }
    })
    .catch((error) => {
      if (error.code === "auth/email-already-in-use") {
        res.send({ success: false, error: "User already exists!" });
      } else {
        res.send({ success: false, error: "Trouble Signing up" });
      }
    });
});

module.exports = signup;
