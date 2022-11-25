import React from 'react'
import AboutMe from './AboutMe';
import HomeMobile from './HomeMobile';
import Home from './Home';
import Skills from './Skills';
import SkillsMobile from './SkillsMobile';
import Projects from './Projects';
import Connect from './Connect';
import { useMediaQuery } from 'react-responsive';

function Main() {
    const isMobile = useMediaQuery({ query: '(max-width: 767px)' })
    return (
        <div>
            {isMobile ? <HomeMobile /> : <Home />}
            <AboutMe />
            {isMobile ? <SkillsMobile /> : <Skills />}
            <Projects />
            <Connect />
        </div>
    )
}

export default Main