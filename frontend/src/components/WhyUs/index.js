/* eslint-disable jsx-a11y/anchor-is-valid */
export default function WhyUs() {
  return (
    <>
      <section id="why-us" className="why-us">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 d-flex align-items-stretch">
              <div className="content">
                <h3>Why Choose Yaara?</h3>
                <p>
                Backed by a simple and easy to navigate UI, our website is your 
                go to solution when seeking mental health related help. You’d find 
                the most trusted and verified therapists here and are free to choose 
                the one you’d want. We want to reduce the stigma around mental health 
                issues and this is our contribution as part of the same.
                </p>
                <div className="text-center">
                  {/* <a href="#" className="more-btn"> */}
                    {/* Learn More <i className="bx bx-chevron-right"></i> */}
                  {/* </a> */}
                </div>
              </div>
            </div>
            <div className="col-lg-8 d-flex align-items-stretch">
              <div className="icon-boxes d-flex flex-column justify-content-center">
                <div className="row">
                  <div className="col-xl-4 d-flex align-items-stretch">
                    <div className="icon-box mt-4 mt-xl-0">
                      <i className="bx bx-receipt"></i>
                      <h4>List of Docotors</h4>
                      <p>
                      You will find the most trusted and verified therapists here
                      and are free to choose the one you want.
                      </p>
                    </div>
                  </div>
                  <div className="col-xl-4 d-flex align-items-stretch">
                    <div className="icon-box mt-4 mt-xl-0">
                      <i className="bx bx-cube-alt"></i>
                      <h4>Book Appointment</h4>
                      <p>
                        Easy to use UI for booking appointments with the doctor you want.
                      </p>
                    </div>
                  </div>
                  <div className="col-xl-4 d-flex align-items-stretch">
                    <div className="icon-box mt-4 mt-xl-0">
                      <i className="bx bx-images"></i>
                      <h4>Locate the Doctor</h4>
                      <p>
                      We use KNN technology to locate the nearest therapist
                      so that you can locate the doctor.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
