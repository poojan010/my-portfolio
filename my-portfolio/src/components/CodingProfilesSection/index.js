import React from 'react';

import './coding-profile.css'
import constants from '../../constants';
import images from '../../assets/images';

const {
    coding_profile_section_header, coding_profile_section_subheader,
    profile_codechef, profile_github, profile_leetcode,
    github_url, leetcode_url, codechef_url
} = constants


const ProfileCard = ({ name, logo, url }) => {
    return (
        <a href={url} target="_blank" class="col-lg-2 profile-card col-md-3 col-sm-4 col-6 shadow-lg m-5 p-4 d-flex flex-column align-items-center" >
            <img src={logo} className="profile-logo" />
            <span className='profile-name'>{name}</span>
        </a>
    )
}

const CodingProfileSection = (props) => {

    return (
        <div id={"about-section"} className=" coding-profile-section my-5">
            <div className="d-flex flex-column">

                <span className="section-header" >{coding_profile_section_header}</span>

                <span className="section-sub-header">{coding_profile_section_subheader}</span>

                <div className='row justify-content-center'>

                    <ProfileCard
                        url={github_url}
                        name={profile_github}
                        logo={images.githubLogo}
                    />
                    <ProfileCard
                        url={leetcode_url}
                        name={profile_leetcode}
                        logo={images.leetcodeLogo}
                    />
                    <ProfileCard
                        url={codechef_url}
                        name={profile_codechef}
                        logo={images.codechefLogo}
                    />

                </div>

            </div>
        </div>
    );
}

export default CodingProfileSection
