import React from 'react'
import { Flex, Heading, Text, Box, Image } from '@chakra-ui/react'
import heart from '../Assets/Icons/icons8-heart.png'

function Footer() {
    return (
        <Flex className="footer">
            <Text>Made with </Text>
            &nbsp;
            <Image src={heart}></Image>
            &nbsp;
            <Text>by Bhargey Shingala</Text>
        </Flex>
    )
}

export default Footer