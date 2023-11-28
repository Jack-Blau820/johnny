import React from "react";
import "../Projects/Projects.css";
//import Alpha from "/pages_images/alpha-pegasus.PNG?url";
import Traveller from '../../assets/img/traveller.com.au-thumb.png'
import Carousell from "../../assets/img/carousell.com-thumb.png";
import Tailwind from "/pages_images/tailwind.PNG?url";
import Kaligo from "../../assets/img/kaligo.com-thumb.png";
import Cermati from "../../assets/img/cermati.com-thumb.png"
import Maxipan from '/pages_images/maxipan.png'
import AnimateOnScroll from "react-animate-on-scroll";
import Pluto from '../../assets/img/pluto.tv-thumb.png'
import ntu from '../../assets/img/ntuclearninghub.com-thumb.png'

function Projects() {
  return (
    <>
      <div className="project"></div>
      <AnimateOnScroll animateIn="proyect_title">
        <p className="project_title">Projects</p>
      </AnimateOnScroll>
      <section className="project_container_general">
        <div className="projects_container">
          <AnimateOnScroll
            animateIn="proyects"
            className="project_container"
            delay={100}
          >
            <section>
              <a
                href="https://traveller.com.au/"
                target="_blank"
              >
                <img src={Traveller} alt="Projecto-1" />
              </a>
            </section>
          </AnimateOnScroll>

          <AnimateOnScroll
            animateIn="proyects"
            className="project_container"
            delay={300}
          >
            <section>
              <a href="https://pluto.tv/" target="_blank">
                <img src={Pluto} alt="" />
              </a>
            </section>
          </AnimateOnScroll>

          <AnimateOnScroll
            animateIn="proyects"
            className="project_container"
            delay={300}
          >
            <section>
              <a href="https://carousell.com/" target="_blank">
                <img src={Carousell} alt="" />
              </a>
            </section>
          </AnimateOnScroll>

          <AnimateOnScroll
            animateIn="proyects"
            className="project_container"
            delay={100}
          >
            <section>
              <a href="https://supermario3dworldsfans.netlify.app" target="_blank">
                <img src={Tailwind} alt="" />
              </a>
            </section>
          </AnimateOnScroll>

          <AnimateOnScroll
            animateIn="proyects"
            className="project_container"
            delay={100}
          >
            <section>
              <a href="https://kaligo.com/" target="_blank">
                <img src={Kaligo} alt="" />
              </a>
            </section>
          </AnimateOnScroll>

          <AnimateOnScroll
            animateIn="proyects"
            className="project_container"
            delay={100}
          >
            <section>
              <a href="https://manueldavgomez.github.io/Dictionary-animals/" target="_blank">
                <img src={Cermati} alt="" />
              </a>
            </section>
          </AnimateOnScroll>

          <AnimateOnScroll
            animateIn="proyects"
            className="project_container"
            delay={100}
          >
            <section>
              <a href="https://ntuclearninghub.com/" target="_blank">
                <img src={ntu} alt="" />
              </a>
            </section>
          </AnimateOnScroll>

          <AnimateOnScroll
            animateIn="proyects"
            className="project_container"
            delay={100}
          >
            <section>
              <a href="https://maxipan.co/" target="_blank">
                <img src={Maxipan} alt="" />
              </a>
            </section>
          </AnimateOnScroll>
          
        </div>
      </section>
    </>
  );
}

export default Projects;
