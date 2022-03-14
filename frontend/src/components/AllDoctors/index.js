import { useEffect, useState } from "react";

const AllDoctors = () => {
  const [doctors, setDoctors] = useState([]);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/getDoctors/all`)
      .then((res) => res.json())
      .then((res) => {
        if (res.success) {
          setDoctors(res.results);
        } else {
        }
      })
      .catch((err) => {
      });
  }, []);
  return (
    <div className="container margin">
      <h1>Doctors</h1>
      {doctors.length !== 0 ? (
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Sr. </th>
              <th scope="col">Doctor name</th>
              <th scope="col">Address</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
            </tr>
          </thead>
          <tbody>
            {doctors.map((doc, index) => (
              <tr key={doc.id}>
                <td className="align-middle">{index + 1}</td>
                <td className="align-middle">{doc.name}</td>
                <td className="align-middle">{doc.address}</td>
                <td className="align-middle">{doc.email}</td>
                <td className="align-middle">{doc.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <h4 className="mt-4">No Doctors Found.</h4>
      )}
    </div>
  );
};

export default AllDoctors;
