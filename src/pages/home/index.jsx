
import {
  Box, Flex, Avatar, Divider, HStack, Button, Menu, MenuButton, AlertIcon, Alert,
  MenuDivider, Text, Icon, useDisclosure, Link, Modal, ModalOverlay
 } from '@chakra-ui/react';
 import NavBar from "../../Component/User/Navbar/NavBar"
 import NavBarSignIn from "../../Component/User//Navbar/NavBarSignIn"
import Footer from "../../Component/User//footer/Footer2"
 import Banner from "../../Component/User//homecomponent/banner"
 import HomeCategory from "../../Component/User//homecomponent/category"
 import HomePrduct from "../../Component/User//homecomponent/product"
 import HomeBadge from "../../Component/User//homecomponent/badge";
 import react from "react";
 import { useSelector } from 'react-redux';  
 import { useState } from 'react';
 import { useEffect } from 'react';
 
 export default function Home() {
     const userSelector = useSelector((state) => state.auth);
 
  return (
   <>    
     {userSelector.id ? <NavBarSignIn />: <NavBar /> }
    
    
    {/* <Alert status='error'>
     <AlertIcon />
     Verify Your Account! please confirm your email address or &nbsp;
     <Button colorScheme='telegram' variant='link'>resend the email verification</Button>
    </Alert> */}
    <Flex flexWrap={'wrap'} justifyContent={'center'} bgGradient='linear(to-tr, #ffffff 50%, #ddf1f9 )'>
     <HomeCategory />
     <Banner />
     <Box m='15px' mb='15px' w='80vw' borderBottomWidth='2px'></Box>
     <HomeBadge />
     <Box m='15px' mb='15px' w='80vw' borderBottomWidth='2px'></Box>
     <HomePrduct />
     <Footer /> 
    </Flex>
   </>
  )
 }