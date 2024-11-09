import { Container } from './styles'
import reactIcon from '../../assets/react-icon.svg'
import linkedin from '../../assets/linkedin.svg'
import githubIcon from '../../assets/github.svg'
import whatsapp from '../../assets/whatsapp.svg'
import telegram from '../../assets/telegram.svg'
import gmailIcon from '../../assets/gmail.png'
// import discordIcon from '../../assets/discord.png'

export function Footer() {
  return (
    <Container className="footer">
     
      <div>
        <p>
          This Website was made with <img src={reactIcon} alt="React" />
          {/* <span>❤️</span> */}
        </p>
      </div>
        <div className="social-media">
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
    </Container>
  )
}
