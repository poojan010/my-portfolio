import React from 'react';

import './resume.css'
import constants from '../../constants';

const { work_details } = constants

const Work = (props) => {

    const renderWork = (item, index) => (
        <div key={index}>
            <div className="d-flex flex-column">
                <div className="d-flex flex-row justify-content-between">
                    <span className="company-name">{item.name}</span>
                    <span className="duration">{item.duration}</span>
                </div>
            </div>

            <div className='d-flex flex-column'>
                <span className="position">{item.position}</span>
                <span className="description-position">
                    <ul>
                        {item.description.map((descr) => <li>{descr}</li>)}
                    </ul>
                </span>
            </div>
        </div>
    )


    return (
        <div className="work-inside-new mx-2 my-4">

            {work_details.map((item, index) => renderWork(item, index))}

        </div>
    );
}

export default Work;
