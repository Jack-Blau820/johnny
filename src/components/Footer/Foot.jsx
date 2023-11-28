import React from "react";
import "../Footer/foot.css";
import AnimateOnScroll from "react-animate-on-scroll";

function Foot() {
  return (
    <>
      <section className="foot_container">
        <AnimateOnScroll animateIn="footer" delay={100}>
          <div>
            {/* <img src={Logo} alt="" className="logo_foot" /> */}
          </div>
        </AnimateOnScroll>

        <div className="copy_foot">
          <p className="paragraph_foot">
            Jack Blau <br /> © 2023
          </p>
        </div>
      </section>
    </>
  );
}

export default Foot;
