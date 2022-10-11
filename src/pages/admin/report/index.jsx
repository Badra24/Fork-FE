import {
    Box, Flex, InputGroup, InputLeftElement, InputRightElement, Input, Menu, MenuButton, AlertIcon, Alert,
    MenuDivider, Text, Icon, useDisclosure, Link, Modal, Button, Center, VStack
   } from '@chakra-ui/react';
   import AdminNavBar from "../../../Component/Admin/adminNavbar/AdminNavBar"
   import SideBar from "../../../Component/Admin/sidebar/sidebar"
   import {  useSelector } from 'react-redux';
   import { useRouter } from "next/router";
   import { useEffect } from 'react';
   import SalesReport from "../../../Component/Admin/report/salesReport"
   import SortProduct from "../../../Component/Admin/product/sortProduct/sortDashboard"
   
   export default function dashboard() {
   
     const router = useRouter();
     const userSelector = useSelector((state) => state.auth);
   
   
   
     useEffect(() => {
       if (userSelector?.role === "admin") {
         router.push("/admin/report");
       } else {
         router.push("/home");
       }
     }, [userSelector?.role === "admin"]);
   
    return (
       <>
     <Flex >
      <SideBar />
      <Box >
       <AdminNavBar />
       <Flex flexWrap={'wrap'} p='30px'>
   <SortProduct/>
       </Flex>
       <Flex m='15px'   >
        <Box h='300px' w='1400px' pb= "100px">

        <SalesReport/>
        </Box>
       </Flex>
   
      </Box>
   
     </Flex>
       </>
   
    )
   }