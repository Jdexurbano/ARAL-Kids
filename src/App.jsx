import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Feature from "./pages/Feature";
import Contact from "./pages/Contact";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <main className="bg-primary tracking-tighter">
          <Home />
          <About />
          <Feature />
          <Contact />
          <Footer />
        </main>
      </BrowserRouter>
    </>
  );
}
export default App;
