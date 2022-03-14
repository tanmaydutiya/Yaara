/* eslint-disable jsx-a11y/anchor-is-valid */
import "./assets/vendor/fontawesome-free/css/all.min.css";
import "./assets/vendor/animate.css/animate.min.css";
import "./assets/vendor/bootstrap/css/bootstrap.min.css";
import "./assets/vendor/bootstrap-icons/bootstrap-icons.css";
import "./assets/vendor/boxicons/css/boxicons.min.css";
import "./assets/vendor/glightbox/css/glightbox.min.css";
import "./assets/vendor/remixicon/remixicon.css";
import "./assets/vendor/swiper/swiper-bundle.min.css";
import "./assets/css/style.css";
import Header from "./components/Header";
import TopBar from "./components/Topbar";
import Footer from "./components/Footer";
import { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import MyAppointments from "./components/MyAppointments";
import UserContextProvider from "./store";
import Homepage from "./components/Homepage";
import AllDoctors from "./components/AllDoctors";

function App() {
  const [scrolled, setScrolled] = useState(false);
  const onScroll = () => {
    window.scrollY > 100 ? setScrolled(true) : setScrolled(false);
  };
  window.addEventListener("scroll", onScroll);
  return (
    // <Provider store={store}>
    // <Context.Provider value={{ userInfo: userInfo, dispatch: dispatch }}>
    <UserContextProvider>
      <BrowserRouter>
        <TopBar scrolled={scrolled} />
        <Header scrolled={scrolled} />
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/login" exact component={Login} />
          <Route path="/signup/:user" exact component={Signup} />
          <Route path="/doctors" exact component={AllDoctors} />
          <Route path="/my-appointments" exact component={MyAppointments} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </UserContextProvider>
  );
}

export default App;
