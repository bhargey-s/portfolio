import React from 'react'
import AboutMe from './Components/AboutMe';
import Header from './Components/Header';
import Index from './Components/Home';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Connect from './Components/Connect';

function Main() {
    return (
        <div>
            <Header />
            <Index />
            <AboutMe />
            <Skills />
            <Projects />
            <Connect />
        </div>
    )
}

export default Main