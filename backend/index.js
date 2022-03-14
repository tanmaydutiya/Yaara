const firebaseConfig = require("./firebase");
const { initializeApp } = require("firebase/app");
initializeApp(firebaseConfig);
const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const getDoctorsRoute = require("./routes/getDoctors");
const bodyParser = require("body-parser");
const bookAppointment = require("./routes/bookAppointment");
const signup = require("./routes/signup");
const login = require("./routes/login");
const getAppointments = require("./routes/getAppointments");
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(
  cors({
    origin: ["http://localhost:3000/", "http://localhost:3000"],
    credentials: true,
  })
);
app.use(morgan("dev"));
app.use(bodyParser.json());

app.get("/", (_, res) => {
  res.send("You're On!");
});
app.use("/signup", signup);
app.use("/login", login);
app.use("/getDoctors", getDoctorsRoute);
app.use("/bookAppointment", bookAppointment);
app.use("/getAppointments", getAppointments);

app.listen(5000, () => console.log("Server started at 5000"));
