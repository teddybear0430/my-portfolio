import React,{ useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import ClassNames from 'classnames';

import Animation from './Animation.js';
import Nav from './Nav.js';
import '../../styles/header.scss';

const menus = [
    'Top',
    'Profile',
    'Skills',
    'Works',
    'Contact',
];

const Header = () => {
    const [open, setOpen] = useState(false);

    const handleNav = (e) => {
        const spToggleClass = document.getElementsByClassName('sp-toggle')[0];
        spToggleClass.classList.toggle('sp-toggle-active');
        setOpen(!open);
        e.preventDefault();
    }

    const navClassNames = ClassNames({
        "sp-nav": true,
        "sp-nav-active": open
    })

    return (
        <>
        <Nav
            menus={menus}
            navClassNames={navClassNames}
            handleNav={handleNav}
        />
        <header id="Top">
            <div className="sp-nav-container">
            <a className="sp-toggle" href="#" onClick={(e) => handleNav(e)}>
                <span></span>
                <span></span>
                <span></span>
            </a>
            </div>
            <ul id="navigation">
            {
                menus.map((menu, i) => 
                    <li className="page-link" key={i}>
                        <AnchorLink href={`#${menu}`} offset="50">{menu}</AnchorLink>
                    </li>
            )}
            </ul>
            <Animation />
        </header>
        </>
    );
}

export default Header;
