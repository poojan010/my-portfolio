import React from 'react';
import './resume.css'

const projectData = [
    { 
        name : 'Chat Application', 
        tech : "React native, Redux, Firebase"
    },
    { 
        name : "Real Time Sharing White board",
        tech : "React Js, Node Js"
    },
]

const Projects = (props) => {


    const renderEducation = (item,index) => (

        <div key={index} className="education-one my-4 justify-content-between d-flex flex-row">

            <div className="d-flex flex-column new-one">
                <span className="university-name">{item.name}</span>
                <span className="university-degree">Tech Stack : {item.tech}</span>
            </div>

        </div>
        
    )

    return (
        <div className="d-flex flex-column">
        
            {projectData.map((item,index) => renderEducation(item,index))}

        </div>
    );
}

export default Projects;
