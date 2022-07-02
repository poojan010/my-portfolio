import React from 'react';
import './resume.css'

const workData = [
    {
        name : "Bacancy Technology",
        duration : "2021-Present",
        position : "Software Developer",
        description : [
            "I am responsible for designing, building and maintaining efficient and user-friendly mobile applications.",
            "I am working on the project which requires maintenance of existing application where I deliver new features according to client needs and i make sure that user gets the seem less experience.",
            "I have worked on many modules like handling notification re directions, deep linking, UI development, Accessing native modules(location, gallery, contacts, calendar etc..)"
        ]
    }
]



const Work = (props) => {

    const renderWork = (item,index) => (
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
                        {item.description.map((descr) => <li>{descr}</li> )}
                    </ul>
                </span>
            </div>
        </div>
    )


    return (
        <div className="work-inside-new mx-2 my-4">

            {workData.map((item,index) => renderWork(item,index))}
            
        </div>
    );
}

export default Work;
