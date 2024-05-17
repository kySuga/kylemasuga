import Link from "next/link";
import FooterDate from "./footerDate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCodepen,
  faEtsy,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer>
      <div className="footer__wrap">
        <nav className="footer__nav">
          <ul className="nav__ul">
            <li>
              <Link href="https://www.linkedin.com/in/kyle-masuga">
                <span className="visually-hidden">LinkedIn</span>
                <FontAwesomeIcon icon={faLinkedin} />
              </Link>
            </li>
            <li>
              <Link href="https://github.com/kySuga">
                <span className="visually-hidden">Github</span>
                <FontAwesomeIcon icon={faGithub} />
              </Link>
            </li>
            <li>
              <Link href="https://codepen.io/kySuga">
                <span className="visually-hidden">Code Pen</span>
                <FontAwesomeIcon icon={faCodepen} />
              </Link>
            </li>
            <li>
              <Link href="https://www.etsy.com/shop/kySugaDesigns">
                <span className="visually-hidden">Etsy</span>
                <FontAwesomeIcon icon={faEtsy} />
              </Link>
            </li>
          </ul>
        </nav>
        <div className="footer__content">
          <FooterDate />
        </div>
      </div>
    </footer>
  );
}
