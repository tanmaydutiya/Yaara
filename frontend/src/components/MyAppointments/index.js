import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../store";
import { useHistory } from "react-router-dom";

const MyAppointments = () => {
  const [appointments, setAppointments] = useState([]),
    [isUser, setIsUser] = useState(false),
    history = useHistory(),
    { userInfo } = useContext(UserContext);
  useEffect(() => {
    if (!userInfo.isAuthenticated) {
      history.push("/login");
    } else {
      fetch(`${process.env.REACT_APP_API_URL}/getAppointments/`, {
        method: "POST",
        body: JSON.stringify({
          data: {
            email: userInfo.data.email,
            role: userInfo.data.role,
          },
        }),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.success) {
            setAppointments(res.results);
          } else {
          }
        })
        .catch((err) => {});
    }
  }, [history, userInfo]);
  useEffect(() => {
    userInfo.data.role === "patient" && setIsUser(true);
  }, [userInfo]);
  return (
    <div className="container margin">
      <h1>My Appointments</h1>
      {appointments ? (
        appointments.length !== 0 ? (
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Sr. No</th>
                <th scope="col">{isUser ? "Doctor name" : "Patient name"}</th>
                <th scope="col">Date and Time</th>
                {isUser && <th scope="col">Location</th>}
                {!isUser && <th scope="col">Action</th>}
              </tr>
            </thead>
            <tbody>
              {appointments.map((apt, index) => (
                <tr key={apt.uid}>
                  <th className="align-middle" scope="row">
                    {index + 1}
                  </th>
                  {isUser ? (
                    <td className="align-middle">{apt.doctorName}</td>
                  ) : (
                    <td className="align-middle">{apt.name}</td>
                  )}
                  <td className="align-middle">
                    {apt.appointmentDate.split("T").join(" ") +
                      " " +
                      apt.appointmentTime}
                  </td>{" "}
                  {isUser && apt.doctorLocation ? (
                    <td className="align-middle">
                      <a
                        target="_blank"
                        href={`https://www.google.com/maps/search/?api=1&query=${apt.doctorLocation.latitude},${apt.doctorLocation.longitude}`}
                        rel="noreferrer"
                      >
                        View
                      </a>
                    </td>
                  ) : (
                    <td className="align-middle">No location found.</td>
                  )}
                  {!isUser && (
                    <td className="align-middle">
                      <button type="button" class="btn btn-primary btn-sm">
                        Accept
                      </button>{" "}
                      <button type="button" class="btn btn-danger btn-sm my-2">
                        Reject
                      </button>
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <h4 className="mt-4">No Appointments Found.</h4>
        )
      ) : (
        ""
      )}
    </div>
  );
};

export default MyAppointments;
