import React, { useState } from 'react';

import './resume.css'
import constants from '../../constants';

import Work from './Work';
import Projects from './Projects';
import Education from './Education';
import Programming from './Programming';

const { resume_section_header, resume_section_subheader, resume_education_section, resume_programming_section, resume_projects_section, resume_work_section } = constants

const ResumeSection = (props) => {

    const [visibleSection, setVisibleSection] = useState(0)

    const renderSection = () => {
        if (visibleSection === 0) return <Work />
        else if (visibleSection === 1) return <Programming />
        else if (visibleSection === 2) return <Projects />
        else return <Education />
    }

    const onWorkTap = () => setVisibleSection(0)
    const onProgrammingTap = () => setVisibleSection(1)
    const onProjectsTap = () => setVisibleSection(2)
    const onEducationTap = () => setVisibleSection(3)

    const workCss = visibleSection === 0 ? "selected resume-options-items" : "resume-options-items"
    const programmingCss = visibleSection === 1 ? "selected resume-options-items" : "resume-options-items"
    const projectsCss = visibleSection === 2 ? "selected resume-options-items" : "resume-options-items"
    const educationCss = visibleSection === 3 ? "selected resume-options-items" : "resume-options-items"

    return (
        <div id={"resume-section"} className='resume-outer-section d-flex flex-column'>

            <span className='section-header'>{resume_section_header}</span>

            <span className='section-sub-header'>{resume_section_subheader}</span>

            <div
                className="resume-new-section row"
                style={{ width: '70%', marginInline: 'auto' }}
            >

                <div className="col-lg-4 col-md-4 col-sm-12 resume-left-section px-0 shadow-lg d-flex flex-row">

                    <div className="d-flex flex-column bg-new text-white" >
                        <span className="icons-span" onClick={onWorkTap}>
                            <i class="fa-solid fa-briefcase"></i>{" "}
                        </span>
                        <span className="icons-span" onClick={onProgrammingTap}>
                            <i class="fa-solid fa-code"></i>{" "}
                        </span>
                        <span className="icons-span" onClick={onProjectsTap}>
                            <i class="fa-solid fa-tasks"></i>{" "}
                        </span>
                        <span className="icons-span" onClick={onEducationTap}>
                            <i class="fa-solid fa-user-graduate"></i>{" "}
                        </span>
                    </div>

                    <div className="d-flex flex-column bg-white" style={{ width: '70%' }}>
                        <span className={workCss} onClick={onWorkTap}>{resume_work_section}</span>
                        <span className={programmingCss} onClick={onProgrammingTap}>{resume_programming_section}</span>
                        <span className={projectsCss} onClick={onProjectsTap}>{resume_projects_section}</span>
                        <span className={educationCss} onClick={onEducationTap}>{resume_education_section}</span>
                    </div>

                </div>

                <div className="col-lg-8 col-md-8 resume-right-section">
                    {renderSection()}
                </div>

            </div>

        </div >
    );

}

export default ResumeSection;
