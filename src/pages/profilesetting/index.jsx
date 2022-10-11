import {
 Box, Text, Stack, Avatar, Link, Divider, Button, InputGroup, Icon, FormHelperText, Progress,
 InputRightElement, FormControl, FormLabel, Input, Center, Flex, AvatarBadge
} from '@chakra-ui/react';
import NavBarSignIn from "../../Component/User/Navbar/NavBarSignIn"
import ProfileSetting from "../../Component/User/profilesetting/ProfileSetting";

export default function profile_setting() {
 return (
  <>
   <NavBarSignIn />
   <Flex flexWrap={'wrap'} minH={'80vh'} justifyContent={'center'} padding={'30px'} bgGradient='linear(to-t, #ffffff 50%, #ddf1f9 )'>
    <ProfileSetting />
   </Flex>
  </>
 )
}