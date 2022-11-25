import React from 'react'
import ReactDom from 'react-dom'
import { Flex, Box, Heading, Link } from "@chakra-ui/layout";
import { useState } from 'react';
import Scrollspy from 'react-scrollspy'


function NavMobile({ isClicked }) {
    if (!isClicked) return null;


    return ReactDom.createPortal(
        <div className="modal">
            <div className="overlay">
            </div>
            <Flex as="nav">
                <Scrollspy currentClassName='active-link' items={['home', 'aboutme', 'skills', 'projects', 'connect']}>
                    <Link href='/portfolio/#home'>Home</Link>
                    <Link href='/portfolio/#aboutme'>About Me</Link>
                    <Link href='/portfolio/#skills'>Skills</Link>
                    <Link href='/portfolio/#projects'>Projects</Link>
                    <Link href='/portfolio/#connect'>Connect</Link>
                </Scrollspy>
            </Flex>
        </div>
        , document.getElementById("modal"));
}

export default NavMobile