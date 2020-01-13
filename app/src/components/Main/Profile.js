import React from 'react';
import Img from 'gatsby-image';

import '../../styles/profile.scss';

const Profile = ( props ) => {
    const html = props.html;
    const icon = props.icon;
    return (
        <section id="Profile">
            <div className="container">
            <h2 className="heading">Profile</h2>
                <div className="profile-area">
                    <div className="icon">
                        <Img className="icon-img" fixed={icon} />
                    </div>
                    <div className="profile" dangerouslySetInnerHTML={{ __html: html }} />
                </div>
            </div>
        </section>
    );
}

export default Profile;
