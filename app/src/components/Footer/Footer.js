import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Link } from '@material-ui/core';
import '../../styles/footer.scss';

const nowYear = () => {
    const getYear = new Date().getFullYear();
    return getYear;
}

const Footer = ({ title }) => {
    return (
        <footer id="Footer">
            <span className="copyright">Copyright {title} © {nowYear()}</span>
            <div className="icon-container">
                <a href="https://github.com/Yota-K" color="inherit">
                    <FontAwesomeIcon className="github-icon" icon={faGithub} />
                </a>
            </div>
        </footer>
    );
}

export default Footer;
