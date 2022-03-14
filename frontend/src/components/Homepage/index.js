import Hero from "../Hero";
import WhyUs from "../WhyUs";
import About from "../About";
import Counts from "../Counts";
import Appointment from "../Appointment";
import Doctors from "../Doctors";
import FAQs from "../FAQs";
import Testimonials from "../Testimonials";
import Gallery from "../Gallery";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../store";

const Homepage = () => {
  const { userInfo } = useContext(UserContext);
  const [isDoctor, setIsDoctor] = useState(false);
  useEffect(() => {
    if (Object.entries(userInfo).length !== 0) {
      userInfo.data.role === "doctor" && setIsDoctor(true);
    }
  }, [userInfo]);
  return (
    <>
      <Hero />
      <main id="main">
        <WhyUs />
        <About />
        {/* <Counts /> */}
        {userInfo.isAuthenticated && !isDoctor ? <Appointment /> : ""}
        <Doctors />
        {/* <FAQs /> */}
        <Testimonials />
        {/* <Gallery /> */}
      </main>
    </>
  );
};

export default Homepage;
