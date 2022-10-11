import { Flex } from '@chakra-ui/react';
import Footer from "../../Component/User/footer/Footer2";
import NavBar from "../../Component/User/Navbar/NavBar"
import NavBarSignIn from "../../Component/User/Navbar/NavBarSignIn"
import ListProduct from "../../Component/User/productList/ProductList";
import { useSelector } from 'react-redux';
export default function productlist() {
    const userSelector = useSelector((state)=> state.auth);
 return (
  <>

  { userSelector.id ? <NavBarSignIn /> : <NavBar/>}
   <Flex flexWrap={'wrap'} minH={'80vh'} justifyContent={'center'} py='20px' bgGradient='linear(to-tr, #ffffff 50%, #ddf1f9 )'>
    <ListProduct />
   </Flex>
   <Footer />
  </>
 )
}