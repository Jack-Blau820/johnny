import React from "react";
import "../About/About.css";
import Html5 from "/Logos/html.png";
import Css3 from "/Logos/css.png";
import Javascript from "/Logos/javascript.png";
import Git from "/Logos/git.png";
import Github from "/Logos/github.png";
import Npm from "/Logos/npm.png";
import Sass from "/Logos/sass.png";
import Vite from "/Logos/vite.png";
import Tailwind from "/Logos/tailwind.png";
import Reacts from "/Logos/react.png";
import Vue from "/Logos/vuejs-seeklogo.com.svg";
import Bootstrap from "/Logos/bootstrap.png";
import Reactrouter from "/Logos/react-router.png";
import Netlify from "/Logos/netlify.png";
import Ejs from "/Logos/ejs.png";
import Nodejs from "/Logos/nodejs.png";
import Mysql from "/Logos/mysql.png";
import Express from "/Logos/express.png";
import Django from "/Logos/django-logo.png";
import Vscode from "/Logos/vscode.png";
import Koa from "/Logos/koa-seeklogo.com.svg";
import Nest from "/Logos/nest-js-icon.png";
import Terminal from "/Logos/terminal.png";
import Yarn from "/Logos/yarn.png";
import Jquery from "/Logos/jquey.png";
import Motion from "/Logos/motion.png";
import Modules from "/Logos/css-modules.png";
import AnimateOnScroll from "react-animate-on-scroll";
import Next from '/Logos/Next.js.png';


function About() {
  return (
    <>
      {/* contenedor principal */}
      <div className="about"></div>
      <section className="about_container">
        <AnimateOnScroll animateIn="about_title">
          <p className="about_title">About Me</p>
        </AnimateOnScroll>

        {/* subcontenedor */}

        <div className="cards_container">
          {/* contenedor pricipal de las tarjetas */}
          <AnimateOnScroll animateIn="about_box" className="card_container">
            <section>
              <p className="card_text">
                As a well-experienced web developer, I always persist brand new
                techniques and methods with careful analysis, in order to make
                both clients and me achieve a big deal of success.
                'The Better Service I Give, The Better Success I'll Get'.
              </p>

              {/* <p className="card_text">
                <strong>Ciudad: </strong>La Dorada Caldas - Colombia
              </p> */}

              <div className="skills"></div>
            </section>
          </AnimateOnScroll>

          <AnimateOnScroll animateIn="skills_title">
            <p className="about_title2">Proud Skills</p>
          </AnimateOnScroll>
          <section className="card_container-general">
            <AnimateOnScroll
              animateIn="skills_backend"
              className="card_container"
            >
              <section>
                <p className="about_title3">BackEnd</p>

                <div className="card_tecnology">
                  <img src={Ejs} alt="" className="grid_item" />
                  <img src={Nodejs} alt="" className="grid_item" />
                  <img src={Mysql} alt="" className="grid_item" />
                  <img src={Express} alt="" className="grid_item" />
                  <img src={Koa} alt="" className="grid_item" />
                  <img src={Nest} alt="" className="grid_item" />
                  <img src={Django} alt="" className="grid_item" />
                </div>
              </section>
            </AnimateOnScroll>

            <AnimateOnScroll
              animateIn="skills_frontend"
              className="card_container"
            >
              <section>
                <p className="about_title3">FrontEnd</p>

                <div className="card_tecnology">
                  <img src={Html5} alt="" className="grid_item" />
                  <img src={Css3} alt="" className="grid_item" />
                  <img src={Javascript} alt="" className="grid_item" />
                  

                  <img src={Reacts} alt="" className="grid_item" />
                  <img src={Vue} alt="" className="grid_item" />
                  <img src={Next} alt="" className="grid_item" />
                  
                  <img src={Tailwind} alt="" className="grid_item" />
                  <img src={Bootstrap} alt="" className="grid_item" />
                  <img src={Sass} alt="" className="grid_item" />
                  <img src={Reactrouter} alt="" className="grid_item" />
                  
                  <img src={Jquery} alt="" className="grid_item" />
                  <img src={Motion} alt="" className="grid_item" />
                  <img src={Modules} alt="" className="grid_item" />
                </div>
              </section>
            </AnimateOnScroll>

            <AnimateOnScroll
              animateIn="skills_tools"
              className="card_container"
            >
              <section>
                <p className="about_title3">Tools</p>

                <div className="card_tecnology">
                <img src={Npm} alt="" className="grid_item" />
                <img src={Yarn} alt="" className="grid_item" />
                  <img src={Netlify} alt="" className="grid_item" />
                  <img src={Github} alt="" className="grid_item" />
                  <img src={Git} alt="" className="grid_item" />
                  <img src={Vite} alt="" className="grid_item" />
                  <img src={Vscode} alt="" className="grid_item" />
                  {/* <img src={Terminal} alt="" className="grid_item" /> */}
                </div>
              </section>
            </AnimateOnScroll>
          </section>
        </div>
      </section>
    </>
  );
}

export default About;
