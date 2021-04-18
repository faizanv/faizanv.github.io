import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import { headerSection, bioList, textSection } from './header.module.scss';

const getAge = birthDate => Math.floor((new Date() - new Date(birthDate).getTime()) / 3.15576e+10)

const Header = () => (
    <div className={headerSection}>
        <StaticImage
            src="../images/portrait.jpg"
            alt="Illustration of Faizan"
            height={300}
            width={300}
        />
        <div className={textSection}>
            <h1>Faizan Virani</h1>
            <ul className={bioList}>
                <li>{getAge('1996-04-04')} year-old fullstack developer</li>
                <li>(yes the age is dynamic)</li>
                <li>Writes a lot of Javascript</li>
                <li>Once wrote a <a href="https://faizanv.medium.com/authentication-for-your-react-and-express-application-w-json-web-tokens-923515826e0">viral blog post</a></li>
                <li>Based in Miami <span role="img" aria-label="Location pin emoji">📍</span></li>
                <li>(no the location is not dynamic)</li>
            </ul>
        </div>
    </div>
);

export default Header;