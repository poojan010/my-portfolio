import React from 'react';
import './resume.css'

const educationData = [
    { 
        institue : 'Vishwakarma Goverment Engineering College', 
        degree : 'Bachelors in Computer Engineering',
        duration : '2017-2021' 
    },
    { 
        institue : 'Diwan Ballubhai Higher Secondary School', 
        degree : '12th Boards',
        duration : '2017' 
    },
    { 
        institue : 'Diwan Ballubhai Secondary School', 
        degree : '10th Board',
        duration : '2015' 
    }
]

const Education = (props) => {

    const renderEducation = (item,index) => (

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
        
            {educationData.map((item,index) => renderEducation(item,index))}

        </div>
    );
}

export default Education;
