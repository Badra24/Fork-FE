import {
    Box, Flex, InputGroup, InputLeftElement, InputRightElement, Input, Menu, MenuButton, AlertIcon, Alert,
    MenuDivider, Text, Icon, useDisclosure, Link, Modal, Button, Center, VStack
   } from '@chakra-ui/react';
   import AdminNavBar from "../../../Component/Admin/adminNavbar/AdminNavBar";
   import SideBar from "../../../Component/Admin/sidebar/sidebar"
   import { AiOutlinePlus } from "react-icons/ai";
   import {  useSelector } from 'react-redux';
   import { useRouter } from "next/router";
   import { useEffect } from 'react';
   import Navpro from "../../../Component/Admin/product/navProduct/navPro"
   import ProductTabel from "../../../Component/Admin/product/productTabel/productTabel";
   import FilterDate from '../../../Component/Admin/filterDate/Date';
   import SortProduct from '../../../Component/Admin/product/sortProduct/sort';
   
   export default function listProduct() {
   
     const router = useRouter();
     const userSelector = useSelector((state) => state.auth);

   
   
   


     useEffect(() => {
      if (userSelector?.role === "admin") {
        router.push("/admin/product");
      } else {
        router.push("/home");
      }
    }, [userSelector?.role === "admin" ]);

    const AddnewPro = () =>{
      router.push("/admin/product/addNewproduct")
    }
  

    return (
       <>
     <Flex bgGradient='linear(to-tr, #ffffff 50%, ##ffffff )'  w="100%" h="100%" >

      <SideBar />
      <Box >
       <AdminNavBar />
       <Flex flexWrap={'wrap'}  paddingTop="10px"  justifyContent={'space-around'}>
        <Box   m='10px' h='50px' w='100px'fontWeight='semibold'> Product List </Box>
        <Flex  >
        <Box m="5px" h='50px' w='200px' > 
        <Button w='full' bg= '#00A8B5'  borderRadius='5px'  size='md' my='5px' textColor={"white"}
      disabled = {userSelector.id ? false : true } onClick={AddnewPro}>
      <Icon boxSize='3' as={AiOutlinePlus} mr='5px' />
      Add New Product</Button>
</Box>
          </Flex>
       </Flex>
      <Flex dir='row'>
      <Box mb={"10px"} ml="10px" h='100px' w='800px'fontWeight='semibold'>  
      <Navpro/>
      
     
      </Box>

      </Flex>
      <Flex mt="10px">
        {/* <FilterProduct/> */}
        <SortProduct/>
        <Box mb="20px" mt='10px'>

        <Button>
<FilterDate/>

</Button>
        </Box>
        </Flex>

   <Flex>

      <Box m='15px' h='300px' w='1400px'fontWeight='semibold'pb= "100px" bg="#ffffff">  
     <ProductTabel/> </Box>
   </Flex>
      </Box>
   
     </Flex>
       </>
   
    )
   }