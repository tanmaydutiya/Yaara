import { useContext } from "react";
import { UserContext } from "../../store";

export default function Hero() {
  const { userInfo } = useContext(UserContext);

  return (
    <section id="hero" className="d-flex align-items-center">
      <div className="container">
        <h1>Welcome to Yaara</h1>
        <h2>
        Platform for seeking mental health related help.
        </h2>
        <a
          href={`${userInfo.isAuthenticated ? "/#appointment" : "/login"}`}
          className="btn-get-started scrollto"
        >
          Get Started
        </a>
      </div>
    </section>
  );
}
