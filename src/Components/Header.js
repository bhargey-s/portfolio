import React, { useState, useEffect, useRef } from 'react'
import { Flex, Box, Heading, Link } from "@chakra-ui/layout";
import Scrollspy from 'react-scrollspy'
import { useColorMode } from "@chakra-ui/color-mode";
import { IconButton } from "@chakra-ui/button";

function Header() {
    const [show, handleShow] = useState(false);

    const scrollEvent = () => {
        if (window.scrollY > 100)
            handleShow(true);
        else
            handleShow(false);
    }

    useEffect(() => {
        window.addEventListener("scroll", scrollEvent);

        return () => { window.removeEventListener("scroll", scrollEvent()) };
    });

    return (
        <Flex as="header" p="2vh 2vw" w="100%" h="10vh" justify="space-between" align="center" style={show ? { background: "#24253D" } : {}}>
            <Heading as='h2' fontFamily="Clash Display" bgGradient="linear(to-br,#fff 30%, rgba(255,255,255,0.38))" bgClip='text'>bhargey</Heading>
            <Flex as="nav" w="40%" justify="space-between" align="center">
                <Scrollspy currentClassName='active-link' items={ ['home', 'aboutme', 'skills','projects','connect'] }>
                    <Link href='/#home'>Home</Link>
                    <Link href='/#aboutme'>About Me</Link>
                    <Link href='/#skills'>Skills</Link>
                    <Link href='/#projects'>Projects</Link>
                    <Link href='/#connect'>Connect</Link>
                </Scrollspy>
            </Flex>
        </Flex>
    )
}

// <IconButton icon={isDark ? <FaSun /> : <FaMoon />} onClick={toggleColorMode}></IconButton>
export default Header