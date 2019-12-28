import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Nav = ({ menus, navClassNames, handleNav }) => {
    const pageScroll = (e) => {
        handleNav(e);
    }

    return (
        <div className={navClassNames}>
            <ul className="sp-navigation">
            {
                menus.map((menu, i) => 
                    <li key={i}>
                        <AnchorLink href={`#${menu}`} offset="50" onClick={(e) => pageScroll(e)}>{menu}</AnchorLink>
                    </li>
            )}
            </ul>
        </div>
    )
}

export default Nav;
