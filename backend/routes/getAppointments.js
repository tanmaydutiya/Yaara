const express = require("express");
const getApptsQuery = require("../utils/getApptsQuery");
const getAppointments = express.Router();

getAppointments.post("/", async (req, res) => {
  const { email, role } = req.body.data;
  const field = role === "patient" ? "userMail" : "doctorMail";
  const results = await getApptsQuery(email, field);
  if (results) {
    res.send({ success: true, results });
  } else {
    res.send({ success: false, error: "Something went wrong" });
  }
});

module.exports = getAppointments;
