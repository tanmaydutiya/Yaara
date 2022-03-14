/* eslint-disable jsx-a11y/anchor-is-valid */
export default function TopBar({ scrolled }) {
  return (
    <div
      id="topbar"
      className={`d-flex align-items-center fixed-top ${
        scrolled ? "header-scrolled" : ""
      }`}
    >
      <div className="container d-flex justify-content-between">
        <div className="contact-info d-flex align-items-center">
          <i className="bi bi-envelope"></i>{" "}
          <a href="mailto:info@yaara.com">info@yaara.com</a>
          <i className="bi bi-phone"></i> 0000000000
        </div>
        <div className="d-none d-lg-flex social-links align-items-center">
          <a href="#" className="twitter">
            <i className="bi bi-twitter"></i>
          </a>
          <a href="#" className="facebook">
            <i className="bi bi-facebook"></i>
          </a>
          <a href="#" className="instagram">
            <i className="bi bi-instagram"></i>
          </a>
          <a href="#" className="linkedin">
            <i className="bi bi-linkedin"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
