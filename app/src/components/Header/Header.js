import React,{ useState,useEffect } from 'react';
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
        setOpen(!open);
        e.preventDefault();
    }

    const classNameNav = ClassNames({
        "sp-toggle": true,
        "sp-toggle-active": open
    })

    return (
        <>
        <Nav
            menus={menus}
            classNameNav={classNameNav}
            handleNav={handleNav}
        />
        <header id="Top">
            <div className="sp-nav-wrapper">
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
