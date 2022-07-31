import React from 'react';

import './resume.css'
import constants from '../../constants';

const { education_details } = constants

const Education = (props) => {

    const renderEducation = (item, index) => (

        <div key={index} className="education-one my-4 justify-content-between d-flex flex-row">

            <div className="d-flex flex-column new-one">
                <span className="university-name">{item.institue}</span>
                <span className="university-degree">{item.degree}</span>
            </div>

            <div>
                <span className="year-passout">{item.duration}</span>
            </div>

        </div>

    )

    return (
        <div className="d-flex flex-column">

            {education_details.map((item, index) => renderEducation(item, index))}

        </div>
    );
}

export default Education;
