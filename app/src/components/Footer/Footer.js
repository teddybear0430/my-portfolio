import React from 'react';
import '../../styles/footer.scss';

const nowYear = () => {
    const getYear = new Date().getFullYear();
    return getYear;
}

const Footer = ({ title }) => {
    return (
        <footer id="Footer">
            <span className="copyright">Copyright {title} © {nowYear()}</span>
        </footer>
    );
}

export default Footer;
