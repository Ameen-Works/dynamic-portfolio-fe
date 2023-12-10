import React, { useEffect, useState } from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experiences from "./components/experinces/Experiences";
import Services from "./components/services/Services";
import Testimonials from "./components/testimonials/Testimonials";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contacts/Contact";
import Footer from "./components/footer/Footer";
import { data } from "./Data";

const App = () => {
  // const url = "https://myportfolio-r9dm.onrender.com/myPortfolio/";
  const [loading, setLoading] = useState(true);
  // const [data, setData] = useState([]);

  const fetchInfo = async () => {
    // const res = await fetch(url);
    // const d = await res.json();
    if (data) {
      setLoading(false);
    }
    return data;
  };

  useEffect(() => {
    fetchInfo();
  }, []);
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experiences />
      <Services />
      <Portfolio data={data} loading={loading} />
      <Testimonials data={data} loading={loading} />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
