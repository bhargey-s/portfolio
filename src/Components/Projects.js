import React, { useState } from 'react'
import { Flex, Heading, Text, Box } from '@chakra-ui/layout'
import { Button, Link } from '@chakra-ui/react';
import ProjectsObj from './ProjectsObj';
import ProjectCard from './ProjectCard';

function Projects() {
    const [isClicked, setIsClicked] = useState(false);
    return (
        <Flex className="projects" id="projects">
            <Box>
                <Heading as="h1">Recent</Heading>
                &nbsp;
                <Heading bgGradient="linear-gradient(92.88deg, rgb(69, 94, 181) 9.16%, rgb(86, 67, 204) 43.89%, rgb(103, 63, 215) 64.72%)" bgClip="text" as="h1">Projects</Heading>
            </Box>
            <Flex className="projects-list">
                {
                    isClicked ? ProjectsObj.map((projectObj) => {
                        return <ProjectCard img1={projectObj.img1} img2={projectObj.img2} text={projectObj.text} links={projectObj.links}></ProjectCard>
                    }) : <ProjectCard
                        img1={ProjectsObj[0].img1} img2={ProjectsObj[0].img2}
                        text={ProjectsObj[0].text}
                        links={ProjectsObj[0].links}>
                    </ProjectCard>
                }

            </Flex>
            <Flex className="more-projects">
                <Heading>{!isClicked ? "Aap convince nahi hue kya?" : "Aap convince ho gaye?"}</Heading>
                <button onClick={() => setIsClicked(!isClicked)}>{!isClicked ? "See More" : "See Less"}</button>
            </Flex>
        </Flex>
    )
}

export default Projects