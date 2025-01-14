import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg";
import { Form } from "../Form/Form";
import "./Contact.css";

import linkedin from "../../assets/linkedin.svg";
import githubIcon from "../../assets/github.svg";
import whatsapp from "../../assets/whatsapp.svg";
import telegram from "../../assets/telegram.svg";
import gmailIcon from "../../assets/gmail.png";

export function Contact() {
  return (
    <Container id="contact">
      <header>
        <h2>Contact</h2>
        {/* <p>Ready to get started on your project? </p> */}
        {/* <p>Contact me now for a Free consultation.</p> */}
      </header>
      {/* <div className="contacts">
        <div>
        <a href=""><img src={emailIcon} alt="Email" /></a> 
          <a href=""></a>
        </div>
        <div>
        <a href="tel:+919630576848"><img src={phoneIcon} alt="Phone No" /></a>
          <a href="tel:+919630576848">(+91) 9630576848</a>
        </div>  
      </div> */}

      {/* <div className="icons">

    <ul className="example-2">
  <li className="icon-content">
    <a
      href="https://linkedin.com/"
      aria-label="LinkedIn"
      data-social="linkedin"
    >
      <div className="filled"></div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        className="bi bi-linkedin"
        viewBox="0 0 16 16"
       
      >
        <path
          d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"
          fill="currentColor"
        ></path>
      </svg>
    </a>
    <div className="tooltip">LinkedIn</div>
  </li>
  <li className="icon-content">
    <a href="https://www.github.com/" aria-label="GitHub" data-social="github">
      <div className="filled"></div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        className="bi bi-github"
        viewBox="0 0 16 16"
        
      >
        <path
          d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"
          fill="currentColor"
        ></path>
      </svg>
    </a>
    <div className="tooltip">GitHub</div>
  </li>

</ul>

</div> */}
      <div className="box">
        <div className="social-media-1">
          <a
            href="https://www.linkedin.com/in/chaitanya-patil-3508a021a/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={linkedin} alt="Linkedin" />
          </a>
          <a
            href="https://github.com/ChaitanyaYuvrajPatil"
            target="_blank"
            rel="noreferrer"
          >
            <img src={githubIcon} alt="GitHub" />
          </a>

          <a
            href="https://t.me/+vTGQfEPOjp9kYTI1"
            target="_blank"
            rel="noreferrer"
          >
            <img src={telegram} alt="telegram" />
          </a>
          <a
            href="mailto:cpatil27112001@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <img src={gmailIcon} alt="Gamil" />
          </a>
        </div>
      </div>

      {/* <Form></Form> */}
    </Container>
  );
}
