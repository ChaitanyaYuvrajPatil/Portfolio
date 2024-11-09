import { Container } from "./styles";
import githubIcon from "../../assets/github.svg";

import travelxLogo from "../../assets/travelxLogo.png";
import reactLogo from "../../assets/reactjs.png";
import angularLogo from "../../assets/angular.png";
import adonisjsLogo from "../../assets/adonisjs.png";
import laravelLogo from "../../assets/laravel.png";
import ionicLogo from "../../assets/ionic.png";

import ScrollAnimation from "react-animate-on-scroll";
import "./Experience.css";


export function Experience() {
  return (
    <Container id="Experience">
      <h2>Experience</h2>
      <div className="projects">
        <ScrollAnimation animateIn="fadeInDown">
          <div className="project">
            <header className="head">
              <img src={travelxLogo} alt="Visit site" className="travelxLogo" />
            </header>
            <div className="body">
              <h3>Software Engineer, Travelx.ai (Present)</h3>
              <p>
                {" "}
                Developed and maintained web applications using React and
                Angular, focusing on enhancing user experience through dynamic
                content and responsive design.
              </p>
              <p>
                Implemented server-side logic with Laravel and AdonisJS,
                optimizing data processing and ensuring secure transactions.
              </p>
              <p>
                Utilized Material-UI to design intuitive interfaces,
                significantly improving application usability.
              </p>
              <p>
                Collaborated closely with cross-functional teams to define,
                prioritize, and meet project requirements, contributing to the
                successful delivery of high-quality software solutions.
              </p>
              <p>
                Employed Git for version control, streamlining collaboration and
                project management processes.
              </p>
              <p>
                Expanded skill set to mobile application development, utilizing
                Ionic to build cross-platform apps for Android and iOS,
                enhancing the company’s mobile presence.
              </p>
              <p>Tech used : - Laravel, Ionic, Adonis Js, React,Angular</p>
            </div>

            <div className="social-media">
              <img src={reactLogo} alt="React" />
              <img src={angularLogo} alt="Angular" />
              <img src={adonisjsLogo} alt="Instagram" />
              <img src={ionicLogo} alt="Adonis Js" />
              <img src={laravelLogo} alt="Laravel" />
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </Container>
  );
}
