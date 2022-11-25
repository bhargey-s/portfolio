import React, {useState, useEffect} from 'react'
import { Flex, Box, Heading, Link } from "@chakra-ui/layout";
import {Image} from '@chakra-ui/react';
import hamburgerIcon from '../Assets/Icons/hamburger.svg'
import cancelIcon from '../Assets/Icons/cancel.svg'
import NavMobile from '../NavMobile';

function HeaderMobile() {
    const [modalShow, setModalShow] = useState(false);
    const [show, handleShow] = useState(false);
  
    const showModal = () => {
      setModalShow(true);
    };
    const hideModal = () => {
      setModalShow(false);
      return true;
    };

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
        <Flex as="header" style={show ? { background: "#24253D" } : {}} justify="center">
            <Heading as='h2' fontFamily="Clash Display" bgGradient="linear(to-br,#fff 30%, rgba(255,255,255,0.38))" bgClip='text'>bhargey</Heading>
            </Flex>
            )
        }
        
        // <Image src={modalShow ? cancelIcon : hamburgerIcon} onClick={() => modalShow ? hideModal() : showModal()}/>
        // <NavMobile isClicked={modalShow}></NavMobile>
export default HeaderMobile