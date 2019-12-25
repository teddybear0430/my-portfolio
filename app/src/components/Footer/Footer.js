import React from 'react';
import '../../styles/footer.scss';

const nowYear = () => {
    const getYear = new Date().getFullYear();
    return getYear;
}

const Footer = (props) => {
    return (
        <footer id="Footer">
            <span className="copyright">Copyright {props.title} © {nowYear()}</span>
        </footer>
    );
}

export default Footer;
