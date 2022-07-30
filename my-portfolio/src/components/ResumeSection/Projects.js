import React from 'react';

import './resume.css'
import constants from '../../constants';

const { project_details, tech_stack_str } = constants

const Projects = (props) => {


    const renderEducation = (item, index) => (

        <div key={index} className="education-one my-2 justify-content-between d-flex flex-row">

            <div className="d-flex flex-column new-one">
                <span className="university-name">{item.name}</span>
                <span className="university-degree">{tech_stack_str} {item.tech}</span>
                <span className="description-position">
                    <ul>
                        {item.descr.map((descr) => <li>{descr}</li>)}
                    </ul>
                </span>
            </div>

        </div>

    )

    return (
        <div className="d-flex flex-column">

            {project_details.map((item, index) => renderEducation(item, index))}

        </div>
    );
}

export default Projects;
