import React from 'react';

import './resume.css'
import constants from '../../constants';

const { skill_details } = constants

const Programming = (props) => {

    const renderSkill = (item, index) => (
        <div key={index} className="col-lg-6 col-mg-6 col-sm-12 my-2">
            <span className="language">{item.name}</span>
            <div className="progress-some">
                <div
                    className="progress-new"
                    style={{ width: `${item.percentage}%` }}
                ></div>
            </div>
        </div>
    )

    return (
        <div>
            <div className="row">
                {skill_details.map((item, index) => renderSkill(item, index))}
            </div>
        </div>
    );
}

export default Programming;
