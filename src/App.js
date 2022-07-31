import './App.css';

import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ResumeSection from './components/ResumeSection';
import ContactSection from './components/ContactSection';
import CodingProfileSection from './components/CodingProfilesSection';

const App = () => {

    return (
        <div className="App">

            <HeroSection />

            <AboutSection />

            <ResumeSection />

            <CodingProfileSection />

            <ContactSection />

        </div>
    );

}

export default App;
