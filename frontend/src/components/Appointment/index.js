import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../store";

/* eslint-disable jsx-a11y/no-redundant-roles */
export default function Appointment() {
  const [inputs, setInputs] = useState({
      name: "",
      email: "",
      phone: "",
      doctorMail: "",
      doctorName: "",
      message: "",
      appointmentDate: "",
      appointmentTime: "",
    }),
    [location, setLocation] = useState({
      latitude: null,
      longitude: null,
    }),
    [error, setError] = useState(""),
    { userInfo } = useContext(UserContext),
    [doctors, setDoctors] = useState([]),
    [appointments, setAppointments] = useState([]),
    fetchData = (value) => {
      if (location.latitude !== null && location.longitude !== null) {
        if (value === "") {
          return;
        }
        fetch(`${process.env.REACT_APP_API_URL}/getDoctors/`, {
          method: "POST",
          body: JSON.stringify({
            location: [location.latitude, location.longitude],
            date: value,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((data) => data.json())
          .then((data) => setDoctors(data.doctors));
      }
    },
    handleChange = (e) => {
      const { name, value } = e.currentTarget;
      if (name === "appointmentDate") {
        getLocation();
        fetchData(value);
      }
      if (name === "doctor") {
        const doctor = doctors.find((doc) => doc.email === value);
        if (!doctor || Object.entries(doctor) === 0) {
          setError("Please choose a doctor");
          return;
        } else {
          setError("");
          setAppointments(doctor.appointments);
        }
        setInputs({
          ...inputs,
          doctorMail: value,
          doctorName: doctor.name,
          doctorLocation: doctor.location,
        });
      } else {
        setInputs({
          ...inputs,
          [name]: value,
        });
      }
    },
    getLocation = () => {
      navigator.geolocation.getCurrentPosition(
        (res) =>
          setLocation({
            latitude: res.coords.latitude,
            longitude: res.coords.longitude,
          }),
        (err) => {
          setError("Please allow location and refresh the page.");
        }
      );
    },
    handleSubmit = (e) => {
      e.preventDefault();
      if (!userInfo.isAuthenticated) {
        return;
      }
      if (location.latitude === null || location.longitude === null) {
        return;
      }
      if (inputs.appointmentTime === "" || inputs.doctorMail === "") {
        return;
      }
      fetch(`${process.env.REACT_APP_API_URL}/bookAppointment/`, {
        method: "POST",
        body: JSON.stringify({
          data: {
            ...inputs,
            userMail: userInfo.data.email,
          },
        }),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((data) => data.json())
        .then((data) => {
          alert(data.success && "Appointment is scheduled!");
          if (data.success) {
            setInputs({
              name: "",
              email: "",
              phone: "",
              appointmentDate: "",
              doctorMail: "",
              doctorName: "",
              appointmentTime: "",
              message: "",
            });
          } else {
            setError(data.error);
          }
        })
        .catch(() => {
          alert("Something went wrong");
        });
    };
  useEffect(() => {
    getLocation();
  }, []);
  return (
    <section id="appointment" className="appointment section-bg">
      <div className="container">
        <div className="section-title">
          <h2>Make an Appointment</h2>
          <p>
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
            fugiat sit in iste officiis commodi quidem hic quas.
          </p>
        </div>
        {error !== "" && (
          <div
            className="alert alert-warning alert-dismissible fade show text-center"
            role="alert"
          >
            {error}
          </div>
        )}
        <form role="form" className="php-email-form" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-4 form-group">
              <input
                type="text"
                name="name"
                value={inputs.name}
                onChange={handleChange}
                className="form-control"
                id="name"
                placeholder="Your Name"
                data-rule="minlen:4"
                data-msg="Please enter at least 4 chars"
                required
              />
              <div className="validate"></div>
            </div>
            <div className="col-md-4 form-group mt-3 mt-md-0">
              <input
                type="email"
                className="form-control"
                name="email"
                value={inputs.email}
                onChange={handleChange}
                id="email"
                placeholder="Your Email"
                data-rule="email"
                data-msg="Please enter a valid email"
                required
              />
              <div className="validate"></div>
            </div>
            <div className="col-md-4 form-group mt-3 mt-md-0">
              <input
                type="tel"
                className="form-control"
                name="phone"
                value={inputs.phone}
                onChange={handleChange}
                id="phone"
                placeholder="Your Phone"
                data-rule="minlen:4"
                data-msg="Please enter at least 4 chars"
                required
              />
              <div className="validate"></div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 form-group mt-3">
              <input
                type="date"
                className="form-control"
                name="appointmentDate"
                value={inputs.appointmentDate}
                onChange={handleChange}
                id="appointmentDate"
                min={new Date().toISOString().split("T")[0]}
                data-rule="minlen:4"
                required
              />
              <div className="validate"></div>
            </div>
            <div className="col-md-4 form-group mt-3">
              <select
                required
                name="doctor"
                value={inputs.doctorMail}
                onChange={handleChange}
                id="doctorMail"
                className="form-select"
              >
                <option value="">Select Doctor</option>
                {doctors.map((option) => (
                  <option key={option.id} value={option.email}>
                    {option.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-md-4 form-group mt-3">
              <select
                required
                name="appointmentTime"
                value={inputs.appointmentTime}
                onChange={handleChange}
                id="appointmentTime"
                className="form-select"
              >
                <option value="">Select Timeslot</option>
                {appointments.map((option, i) => (
                  <option key={i} value={option.label}>
                    {option.label}
                  </option>
                ))}
              </select>
              {inputs.doctorMail !== "" && appointments.length === 0 ? (
                <div className="validate">No timeslot available.</div>
              ) : (
                ""
              )}
            </div>
          </div>

          <div className="form-group mt-3">
            <textarea
              className="form-control"
              name="message"
              value={inputs.message}
              onChange={handleChange}
              rows="5"
              placeholder="Message (Optional)"
            ></textarea>
            <div className="validate"></div>
          </div>
          <div className="text-center">
            {location.latitude === null ? (
              <button
                style={{ cursor: "not-allowed", background: "#8cc5f8" }}
                type="submit"
                title={"Please enable location"}
                disabled
              >
                Make an Appointment
              </button>
            ) : (
              <button type="submit" title={"Submit"}>
                Make an Appointment
              </button>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
