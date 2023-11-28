import React from "react";
import "../Hero/Hero.css";
import Typed from "react-typed";


function Hero() {
  return (
    <>
      <main id="hero">
        <section className="hero_container">
          <p className="hero_title">I am</p>
          <p className="hero_title2 name">Jack Blau</p>
          <p className="hero_title2 name">Web Magician</p>
          <Typed className="hero_title3"
          strings={[
            "Front-End Developer",
            "Responsive Web Designer",
            "Backend Developer",
            "Web Magician"
          ]}
          typeSpeed={50}
          backSpeed={100}
          loop
          />
        </section>
      </main>
    </>
  );
}

window.addEventListener("load", Hero);

export default Hero;
