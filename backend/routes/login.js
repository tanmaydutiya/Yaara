const express = require("express");
const { getAuth, signInWithEmailAndPassword } = require("firebase/auth");
const getUser = require("../utils/getUser");
const login = express.Router();

login.post("/", (req, res) => {
  const { email, password } = req.body;
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
    .then(async (useCredential) => {
      if (useCredential) {
        const user = await getUser(email);
        res.send({
          success: true,
          userInfo: {
            uid: user.uid,
            ...user.userInfo,
          },
        });
      } else {
        res.send({ success: false, error: "Trouble Signing in" });
      }
    })
    .catch((error) => {
      if (error) {
        res.send({ success: false, error: "Email/password is invalid" });
      } else {
        res.send({ success: false, error: "Trouble Signing in" });
      }
    });
});

module.exports = login;
