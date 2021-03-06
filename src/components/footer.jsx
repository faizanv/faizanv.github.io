import * as React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faFilePdf } from "@fortawesome/free-regular-svg-icons";

import { footerStyles, connectLink } from './footer.module.scss';

const Footer = () => (
    <footer className={footerStyles}>
        <a
            href="https://linkedin.com/in/faizanv/" 
            className={connectLink} 
            aria-label="Link to Faizan Virani's LinkedIn profile"
        >
            <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a
            href="https://twitter.com/OfficialFaizanV/"
            className={connectLink}
            aria-label="Link to Faizan Virani's Twitter profile"
        >
            <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a
            href="https://instagram.com/faizanv"
            className={connectLink}
            aria-label="Link to Faizan Virani's Instagram profile"
        >
            <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a
            href="/Resume.pdf"
            className={connectLink}
            aria-label="Link to Faizan Virani's resume pdf"
        >
            <FontAwesomeIcon icon={faFilePdf} />
        </a>
    </footer>
);

export default Footer;