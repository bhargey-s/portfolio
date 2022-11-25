import React from 'react'
import { Flex, Box, Heading, Link, Text } from "@chakra-ui/layout";
import { Image } from '@chakra-ui/react'
import javaIcon from '../Assets/Icons/java.svg'
import jsIcon from '../Assets/Icons/javascript.svg'
import htmlIcon from '../Assets/Icons/html.svg'
import cssIcon from '../Assets/Icons/css3.svg'
import cIcon from '../Assets/Icons/c.svg'
import reactIcon from '../Assets/Icons/react.svg'
import reduxIcon from '../Assets/Icons/redux.svg'
import sassIcon from '../Assets/Icons/sass.svg'
import nodejsIcon from '../Assets/Icons/node-js.svg'
import firebaseIcon from '../Assets/Icons/firebase.svg'
import gitIcon from '../Assets/Icons/git.svg'
import mongodbIcon from '../Assets/Icons/mongodb.svg'
import mysqlIcon from '../Assets/Icons/mysql.svg'
import skillsIcon from '../Assets/Icons/skills-illustration.png'
import chakraUiIcon from '../Assets/Icons/chakra-ui.svg'

function SkillsMobile() {
    return (
        <Flex className="skills" id="skills">
            <Heading bgGradient="linear-gradient(92.88deg, rgb(69, 94, 181) 9.16%, rgb(86, 67, 204) 43.89%, rgb(103, 63, 215) 64.72%);" bgClip="text" display="inline" as="h1">Skills</Heading>
            <Flex className="skills-content">
                <Flex className="skills-icons">
                    <Flex as="section">
                        <Heading>Languages</Heading>
                        <Flex className="icons-list">
                            <Flex className="icon">
                                <img src={javaIcon} alt="" />
                            </Flex>
                            <Flex className="icon">
                                <img src={jsIcon} alt="" />
                            </Flex>
                            <Flex className="icon">
                                <img src={htmlIcon} alt="" />
                            </Flex>
                            <Flex className="icon">
                                <img src={cssIcon} alt="" />
                            </Flex>
                            <Flex className="icon">
                                <img src={cIcon} alt="" />
                            </Flex>
                        </Flex>
                    </Flex>
                    <Flex as="section">
                        <Heading>Tools & Technologies</Heading>
                        <Flex className="icons-list">
                            <Flex className="icon">
                                <img src={reactIcon} alt="" />
                            </Flex>
                            <Flex className="icon">
                                <img src={reduxIcon} alt="" />
                            </Flex>
                            <Flex className="icon">
                                <img src={firebaseIcon} alt="" />
                            </Flex>
                            <Flex className="icon">
                                <img src={sassIcon} alt="" />
                            </Flex>
                            <Flex className="icon">
                                <img src={chakraUiIcon} alt="" />
                            </Flex>
                            <Flex className="icon">
                                <img src={nodejsIcon} alt="" />
                            </Flex>
                            <Flex className="icon">
                                <img src={gitIcon} alt="" />
                            </Flex>
                        </Flex>
                    </Flex>
                    <Flex as="section">
                        <Heading>Databases</Heading>
                        <Flex className="icons-list">
                            <Flex className="icon">
                                <img src={mysqlIcon} alt="" />
                            </Flex>
                            <Flex className="icon">
                                <img src={mongodbIcon} alt="" />
                            </Flex>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    )
}
// <Flex className='skills-img'>
//     <Image src={skillsIcon}></Image>
// </Flex>

export default SkillsMobile