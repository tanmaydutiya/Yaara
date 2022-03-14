/* eslint-disable jsx-a11y/anchor-is-valid */
import Doc1 from "../../assets/img/doctors/doctors-5.jfif";
import Doc2 from "../../assets/img/doctors/doctors-5.jfif";
import Doc3 from "../../assets/img/doctors/doctors-5.jfif";
import Doc4 from "../../assets/img/doctors/doctors-5.jfif";
export default function Doctors() {
  return (
    <section id="doctors" className="doctors">
      <div className="container">
        <div className="section-title">
          <h2>Doctors</h2>
          <p>
          </p>
        </div>

        <div className="row">
          <div className="col-lg-6">
            <div className="member d-flex align-items-start">
              <div className="pic">
                <img src={Doc1} className="img-fluid" alt="" />
              </div>
              <div className="member-info">
                <h4>Dr. Milan Balakrishnan</h4>
                <span>Psychtrics</span>
                <p>
                  Marine Lines, Mumbai, Maharashtra
                </p>
                <div className="social">
                  <a href="">
                    <i className="ri-twitter-fill"></i>
                  </a>
                  <a href="">
                    <i className="ri-facebook-fill"></i>
                  </a>
                  <a href="">
                    <i className="ri-instagram-fill"></i>
                  </a>
                  <a href="">
                    {" "}
                    <i className="ri-linkedin-box-fill"></i>{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 mt-4 mt-lg-0">
            <div className="member d-flex align-items-start">
              <div className="pic">
                <img src={Doc2} className="img-fluid" alt="" />
              </div>
              <div className="member-info">
                <h4>Dr. Priyanka Raut</h4>
                <span>Psychtrics</span>
                <p>
                  Near Laal Maidan, Parel, Mumbai, Maharashtra.
                </p>
                <div className="social">
                  <a href="">
                    <i className="ri-twitter-fill"></i>
                  </a>
                  <a href="">
                    <i className="ri-facebook-fill"></i>
                  </a>
                  <a href="">
                    <i className="ri-instagram-fill"></i>
                  </a>
                  <a href="">
                    {" "}
                    <i className="ri-linkedin-box-fill"></i>{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 mt-4">
            <div className="member d-flex align-items-start">
              <div className="pic">
                <img src={Doc3} className="img-fluid" alt="" />
              </div>
              <div className="member-info">
                <h4>Dr. Pavan Sonar</h4>
                <span>Psychtrics</span>
                <p>
                  S V Road, Malad West, Mumbai.
                </p>
                <div className="social">
                  <a href="">
                    <i className="ri-twitter-fill"></i>
                  </a>
                  <a href="">
                    <i className="ri-facebook-fill"></i>
                  </a>
                  <a href="">
                    <i className="ri-instagram-fill"></i>
                  </a>
                  <a href="">
                    {" "}
                    <i className="ri-linkedin-box-fill"></i>{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 mt-4">
            <div className="member d-flex align-items-start">
              <div className="pic">
                <img src={Doc4} className="img-fluid" alt="" />
              </div>
              <div className="member-info">
                <h4>Dr. Chandni Goel</h4>
                <span>Psychtrics</span>
                <p>
                  Off 90 Feet Road, Kandivali East, Mumbai
                </p>
                <div className="social">
                  <a href="">
                    <i className="ri-twitter-fill"></i>
                  </a>
                  <a href="">
                    <i className="ri-facebook-fill"></i>
                  </a>
                  <a href="">
                    <i className="ri-instagram-fill"></i>
                  </a>
                  <a href="">
                    {" "}
                    <i className="ri-linkedin-box-fill"></i>{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
