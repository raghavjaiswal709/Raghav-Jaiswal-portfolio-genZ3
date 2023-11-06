import Header,{HeaderPhone} from "./components/Header";
import Home from "./components/Home";
import Timeline from "./components/Timeline";
import Work from "./components/Work";
import Services from "./components/Services";
import Testimonial from "./components/Testimonial";
import Contact from "./components/Contact";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";
import { useState } from "react";





function App() {

  const[menuOpen, setMenuOpen]=useState(false);
  console.log(menuOpen);
  return <>
  <HeaderPhone menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
    <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    <Home />
    <Work />
    <Timeline />
    <Services />
    <Testimonial />
    <Contact />
    <Toaster />
    <Footer />
  </>
}

export default App;
