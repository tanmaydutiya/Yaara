const express = require("express");
const addData = require("../utils/addData");
const bookAppointment = express.Router();

bookAppointment.post("/", async (req, res) => {
  const aptInfo = req.body.data;
  if (aptInfo) {
    const id = await addData("appointments", aptInfo);
    if (id !== -1) {
      res.send({ success: true });
    } else {
      res.send({ success: false });
    }
  }
});

module.exports = bookAppointment;
