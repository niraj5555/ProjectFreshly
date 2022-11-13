import React from 'react';
import {Link, useNavigate} from 'react-router-dom';
import { Flex, Spacer, Box, Heading,Button, Text, Image } from '@chakra-ui/react'
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

export const Navbar = () => {
  const {authState, logoutHandle} = useContext(AuthContext)
  const navigate = useNavigate();
  const handleClick = ()=>{
    logoutHandle()
    navigate('/')
  }
  return (
    <Flex p='20px'  fontFamily={"-moz-initial"} fontWeight="bold">
      <Box>
        <Link to='/' fontSize='18px'>
          <Image src='./FreshMeal.png' w='100px' h='80px' alt='img'/>
        </Link>
      </Box>
      <Flex gap='10px' p='10px' align="center" justifyContent="center" ml="550px" w="25%">
      <Box >Plans & Menu</Box>
      <Spacer/>
      <Box>How Its Work</Box>
      <Spacer/>
      <Box>Gifts</Box>
      <Spacer/>
      <Box>Refer A Friend</Box>
      <Spacer/>
      <Box>Help</Box>

      </Flex>
      <Spacer/>
      <Flex gap='10px' p='10px'>
        <Link to='/'>Signup</Link>
        {!authState.isAuth?<Link fontSize="md"  to='/login'>Loign</Link>:<Text fontSize="1em" cursor='pointer' onClick={handleClick}>Logout</Text>}
        
      </Flex>
    </Flex>
  )
}
