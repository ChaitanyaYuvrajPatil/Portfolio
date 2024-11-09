import { Container } from "./styles";
import Developer from "../../assets/developer.png";
import wordpress from "../../assets/wordpress.svg";
import shopify from "../../assets/shopify.svg";
import htmlIcon from "../../assets/html-icon.svg";
import cssIcon from "../../assets/css-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import nodeIcon from "../../assets/node-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";
import vueIcon from "../../assets/vue-icon.svg";
import boostrapIcon from "../../assets/bootstrap-icon.svg";
import ScrollAnimation from "react-animate-on-scroll";
import "./about.css"

import reactLogo from "../../assets/reactjs.png";
import angularLogo from "../../assets/angular.png";
import adonisjsLogo from "../../assets/adonisjs.png";
import laravelLogo from "../../assets/laravel.png";
import ionicLogo from "../../assets/ionic.png";

export function About() {
  return (
    <Container id="about">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>About me</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.1 * 1000}>
          <p>
            Hi there! I'm Chaitanya Patil,I am a dedicated Software Engineer with 1.5 years of experience in the dynamic world of web development, specializing in React, Angular, AdonisJS, and SQL. My journey in the tech industry has been marked by a relentless pursuit of excellence, demonstrated through the development of numerous industry-ready projects. 
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000} style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <p>
            These projects not only showcase my technical prowess but also my commitment to writing optimized code that adheres to industry standards. My expertise lies in crafting scalable, efficient, and user-centric applications that solve real-world problems. Whether it's leveraging the power of React and Angular for dynamic frontends or harnessing the robustness of AdonisJS and SQL for backend logic, my goal is to deliver solutions that drive success and innovation.</p>
        </ScrollAnimation>
        
        <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000}>
          <h3>Here are my main skills:</h3>
        </ScrollAnimation>
        <div className="hard-skills">
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.10 * 1000}>
              <img src={reactIcon} alt="react" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.12 * 1000}>
              <img src={angularLogo} alt="Angular" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.13 * 1000}>
              <img src={ionicLogo} alt="Ionic" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.14 * 1000}>
              <img src={typescriptIcon} alt="Typescript" />
            </ScrollAnimation>
          </div>
           <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.14 * 1000}>
              <img src={adonisjsLogo} alt="Adonis Js" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.15 * 1000}>
              <img src={laravelLogo} alt="Laravel" />
            </ScrollAnimation>
          </div>

        </div>
      </div>
      <div className="about-image">
        <ScrollAnimation animateIn="fadeInRight" delay={0.20 * 1000}>
          <img src={Developer} alt="Chaitanya Patil" className="animate-up-down"/>
        </ScrollAnimation>
      </div>
    </Container>
  )
}
