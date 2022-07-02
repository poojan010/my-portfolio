import React, { useState } from 'react';
import './resume.css'

import Work from './Work';
import Projects from './Projects';
import Education from './Education';
import Programming from './Programming';



const ResumeSection = (props) => {

    const [visibleSection,setVisibleSection] = useState(0)

    const renderSection = () => {
        if(visibleSection === 0) return <Education />
        else if(visibleSection === 1) return <Work />
        else if(visibleSection === 2) return <Programming />
        else return <Projects/>
    }

    const onEducationTap = () => setVisibleSection(0)
    const onWorkTap = () => setVisibleSection(1)
    const onProgrammingTap = () => setVisibleSection(2)
    const onProjectsTap = () => setVisibleSection(3)

    const educationCss = visibleSection === 0 ? "selected resume-options-items" : "resume-options-items"
    const workCss = visibleSection === 1 ? "selected resume-options-items" : "resume-options-items"
    const programmingCss = visibleSection === 2 ? "selected resume-options-items" : "resume-options-items"
    const projectsCss = visibleSection === 3 ? "selected resume-options-items" : "resume-options-items"

    return (
        <div className='resume-outer-section d-flex flex-column'>
            
            <span className='section-header'>Resume </span>

            <span className='section-sub-header'>My formal Bio Details </span>
       
            <div 
                className="resume-new-section row" 
                style={{ width : '70%', marginInline : 'auto', height : '400px' }}
            >

                <div className="col-lg-4 col-md-4 col-sm-12 resume-left-section px-0 shadow-lg d-flex flex-row">

                    <div className="d-flex flex-column bg-new text-white">
                        <span className="icons-span" onClick={onEducationTap}>
                            <i class="fa-solid fa-user-graduate"></i>{" "}
                        </span>
                        <span className="icons-span" onClick={onWorkTap}>
                            <i class="fa-solid fa-briefcase"></i>{" "}
                        </span>
                        <span className="icons-span" onClick={onProgrammingTap}>
                            <i class="fa-solid fa-code"></i>{" "}
                        </span>
                        <span className="icons-span" onClick={onProjectsTap}>
                            <i class="fa-solid fa-tasks"></i>{" "}
                        </span>
                    </div>

                    <div className="d-flex flex-column bg-white">
                        <span className={educationCss} onClick={onEducationTap}>Education</span>
                        <span className={workCss} onClick={onWorkTap}>Work</span>
                        <span className={programmingCss} onClick={onProgrammingTap}>Programming</span>
                        <span className={projectsCss} onClick={onProjectsTap}>Projects</span>
                    </div>

                </div>

                <div className="col-lg-8 col-md-8 resume-right-section">
                    {renderSection()}
                </div>

            </div>

        </div>
    );

}

export default ResumeSection;
