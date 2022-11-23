import React from 'react'
import { Flex, Heading, Text, Box } from '@chakra-ui/layout'
import linkedinIcon from '../Assets/Icons/linkedin.svg'
import githubIcon from '../Assets/Icons/github.svg'
import twitterIcon from '../Assets/Icons/twitter.svg'
import { Link, Image } from '@chakra-ui/react'

function Connect() {
    return (
        <Flex className="connect" id="connect">
            <Box>
                <Heading as="h1" display="inline">Let's</Heading>
                &nbsp;
                <Heading as="h1" bgGradient="linear-gradient(92.88deg, rgb(69, 94, 181) 9.16%, rgb(86, 67, 204) 43.89%, rgb(103, 63, 215) 64.72%)" bgClip="text">Connect</Heading>
            </Box>
            <Flex className="connect-content">
                <Flex className="connect-card">
                    <Box>
                        <Heading as="h3">A developer looking to</Heading>
                        &nbsp;
                        <Heading as="h3" bgGradient="linear-gradient(92.88deg, rgb(69, 94, 181) 9.16%, rgb(86, 67, 204) 43.89%, rgb(103, 63, 215) 64.72%);" bgClip="text">collabarate</Heading>
                        &nbsp;
                        <Heading as="h3">on a project ?</Heading>
                    </Box>
                    <Link href="https://wa.me/9979614636" target="_blank">Do DM</Link>
                </Flex>
                <Flex className="connect-card">
                    <Box>
                        <Heading as="h3">An Enterprise owner looking for</Heading>
                        &nbsp;
                        <Heading as="h3" bgGradient="linear-gradient(92.88deg, rgb(69, 94, 181) 9.16%, rgb(86, 67, 204) 43.89%, rgb(103, 63, 215) 64.72%);" bgClip="text">web services ?</Heading>
                    </Box>
                    <Link href="https://wa.me/9979614636" target="_blank">Know More</Link>
                </Flex>
            </Flex>
            <Flex className="connect-social">
                <Text>Feel free to connect : </Text>
                <Flex className="social-media">
                    <a href="https://www.linkedin.com/in/bhargey-shingala-984331197" target="_blank">
                        <Image src={linkedinIcon}></Image>
                    </a>
                    <a href="https://www.github.com/bhargey-s" target="_blank">
                        <Image src={githubIcon}></Image>
                    </a>
                    <a href="https://www.twitter.com/BhargeyS" target="_blank">
                    <Image src={twitterIcon}></Image>
                </a>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default Connect