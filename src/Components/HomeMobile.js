import React from 'react'
import Typewriter from 'typewriter-effect';
import { Flex, Box, Heading, Link, Text } from "@chakra-ui/layout";
import { Button, Image } from '@chakra-ui/react';

function HomeMobile() {
    return (
        <Flex className='index' id='home'>
            <Flex className='index-text'>
                <Flex as="section">
                    <Heading as="h3">
                        <Typewriter
                            options={{
                                loop: true
                            }}
                            onInit={(typewriter) => {
                                typewriter
                                    .typeString("Hello World!")
                                    .pauseFor(1000)
                                    .deleteAll()
                                    .typeString("Welcome to my Portfolio")
                                    .pauseFor(1000)
                                    .start();
                            }}
                        />
                    </Heading>
                    <Heading as="h1">I'm Bhargey Shingala</Heading>
                    <Box>
                        <Heading display="inline" bgGradient="linear-gradient(92.88deg, rgb(69, 94, 181) 9.16%, rgb(86, 67, 204) 43.89%, rgb(103, 63, 215) 64.72%);" bgClip="text">Developer</Heading>
                        &nbsp;
                        <Heading display="inline">with Designer's Eyes</Heading>
                    </Box>
                </Flex>
                <a href="#aboutme">
                    <Button bgGradient="linear-gradient(92.88deg, rgb(69, 94, 181) 9.16%, rgb(86, 67, 204) 43.89%, rgb(103, 63, 215) 64.72%);" borderRadius="25px">Know More</Button>
                </a>
            </Flex>
        </Flex>
    )
}
export default HomeMobile