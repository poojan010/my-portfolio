import React from 'react';
import './resume.css'

const skillData = [
    { name: "Javascript", percentage : 80 },
    { name: "Typescript", percentage : 80 },
    { name: "C++", percentage : 80 },
    { name: "Python", percentage : 80 },
    { name: "Java", percentage : 80 },
]

const Programming = (props) => {

    const renderSkill = (item,index) => (
        <div key={index} className="col-lg-6 col-mg-6 col-sm-12 my-2">
            <span className="language">{item.name}</span>
            <div className="progress-some">
                <div 
                    className="progress-new"
                    style={{ width : `${item.percentage}%` }}
                ></div>
            </div>
        </div>
    )

    return (
        <div>
            <div className="row">
                {skillData.map((item,index) => renderSkill(item,index) )}
            </div>
        </div>
    );
}

export default Programming;
