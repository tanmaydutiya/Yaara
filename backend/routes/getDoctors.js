const express = require("express");
const getDoctors = express.Router();
const geoFire = require("geofire-common");
const getAptByDate = require("../utils/getAptByDate");
const getData = require("../utils/getData");

getDoctors.post("/", async (req, res) => {
  const doctors = await (
    await getData()
  ).map((doc) => ({ id: doc.id, ...doc.data() }));
  const date = req.body.date;
  const posArray = req.body.location;
  const getNearbyDoctors = (radius = 5) =>
    doctors.filter(
      ({ location }) =>
        geoFire.distanceBetween(
          [parseFloat(location.latitude), parseFloat(location.longitude)],
          posArray
        ) <= radius
    );
  let nearbyDoctors = getNearbyDoctors();
  if (nearbyDoctors.length <= 3) {
    nearbyDoctors = getNearbyDoctors(10);
  }
  if (nearbyDoctors.length === 0) {
    nearbyDoctors = getNearbyDoctors(15);
  }
  if (nearbyDoctors.length === 0) {
    nearbyDoctors = doctors;
  }
  // get the appointments based on coming date
  const appointments = await getAptByDate(date);
  if (appointments.length !== 0) {
    const docsWithUpdatedApt = nearbyDoctors.map((doc) => {
      // filter appointments by doctor
      const docAppointments = appointments.filter(
        (apt) => apt.doctorMail === doc.email
      );
      const docAptLabels = docAppointments.map((apt) => apt.appointmentTime);
      const newAppointments = doc.appointments.filter(
        (apt) => docAptLabels.indexOf(apt.label) === -1
      );
      return {
        ...doc,
        appointments: newAppointments,
      };
    });
    res.send({
      doctors: docsWithUpdatedApt,
    });
  } else if (appointments.length === 0) {
    res.send({
      doctors: nearbyDoctors,
    });
  } else {
    res.send({
      success: false,
      error: "Something went wrong",
    });
  }
});

getDoctors.get("/all", async (_, res) => {
  const doctors = await (
    await getData()
  ).map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  res.send({
    success: true,
    results: doctors,
  });
});

module.exports = getDoctors;
