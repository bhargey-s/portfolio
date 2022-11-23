import React from 'react'
import { Flex, Box, Heading, Link, Text } from "@chakra-ui/layout";

function AboutMe() {
    return (
        <Flex className="about-me" id="aboutme">
            <Flex>
                <Box>
                    <Text display="inline" >I'm a Web Developer expertised in </Text>
                    &nbsp;
                    <Text display="inline" bgGradient="linear-gradient(92.88deg, rgb(69, 94, 181) 9.16%, rgb(86, 67, 204) 43.89%, rgb(103, 63, 215) 64.72%);" bgClip="text">Frontend</Text>
                    &nbsp;
                    <Text display="inline" >Development.</Text>
                </Box>
                <Box>
                    <Text display="inline" >I love to design and develop </Text>
                    &nbsp;
                    <Text display="inline" bgGradient="linear-gradient(92.88deg, rgb(69, 94, 181) 9.16%, rgb(86, 67, 204) 43.89%, rgb(103, 63, 215) 64.72%);" bgClip="text">scalable</Text>
                    &nbsp;
                    <Text display="inline-block" >and</Text>
                    &nbsp;
                    <Text display="inline" bgGradient="linear-gradient(92.88deg, rgb(69, 94, 181) 9.16%, rgb(86, 67, 204) 43.89%, rgb(103, 63, 215) 64.72%);" bgClip="text">performant</Text>
                    &nbsp;
                    <Text>websites.</Text>
                </Box>
                <Box>
                    <Text display="inline">I try to craft a good</Text>
                    &nbsp;
                    <Text display="inline" bgGradient="linear-gradient(92.88deg, rgb(69, 94, 181) 9.16%, rgb(86, 67, 204) 43.89%, rgb(103, 63, 215) 64.72%);" bgClip="text">user experience</Text> 
                    &nbsp;
                    <Text display="inline">using modern frontend architecture.</Text>
                </Box>
            </Flex>
        </Flex>
    )
}
// <Heading display="inline" bgGradient="linear-gradient(92.88deg, rgb(69, 94, 181) 9.16%, rgb(86, 67, 204) 43.89%, rgb(103, 63, 215) 64.72%);" bgClip="text">Me</Heading>

export default AboutMe