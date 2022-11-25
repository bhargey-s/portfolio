import React from 'react'
import { Flex, Heading, Text, Box } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/react'
import githubIcon from '../Assets/Icons/icons8-github.svg'
import linkIcon from '../Assets/Icons/link.svg'

function ProjectCard({ img1, text, img2, links }) {
    console.log(text,links);
    return (
        <Flex className="project-card">
            {img1.src!="" && <Image src={img1.src} alt="" borderRadius="5px"/>}
            <Flex className="project-card-text">
                <h2>{text.h2}</h2>
                <h3>{text.h3}</h3>
                <Flex className="project-card-links">
                    <a href={links.github} target="_blank"><Image src={githubIcon}/></a>
                    <a href={links.live} target="_blank"><Image src={linkIcon}/></a>
                </Flex>
            </Flex>
            {img2.src!=="" && <Image src={img2.src} alt="" borderRadius="5px"/>}
        </Flex>
    ) 
}

export default ProjectCard