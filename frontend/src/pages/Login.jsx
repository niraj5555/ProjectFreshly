import React,{useState} from 'react';
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    Box,
    Button
  } from '@chakra-ui/react'
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('321313')
    const {authState, loginHandle, logoutHandle} = useContext(AuthContext)
    const handleEmailChange = (e) => setEmail(e.target.value)
    const handlePassChange = (e) => setPassword(e.target.value)
    
    const isError = email === ''
    const getToken = async ()=>{
       try{
        let res = await fetch('https://reqres.in/api/login',{
            method:'POST',
            headers:{'Content-Type' : 'application/json'},
            body:JSON.stringify({email, password})
        })
        let data = await res.json();
        if(data.token){
            console.log(data.token)
            loginHandle(data.token)
        }}catch(e){
            console.log(e)
        }

    }
    return (
      <Box w="50%" m='auto'>        
        <FormControl w="50%" m='auto' isInvalid={isError}>
            <FormLabel>Email</FormLabel>
            <Input type='email' id='email' value={email} onChange={handleEmailChange} />
            {!isError ? (
            <FormHelperText>
                Enter the email you'd like to receive the newsletter on.
            </FormHelperText>
            ) : (
            <FormErrorMessage>Email is required.</FormErrorMessage>
            )}
            <FormLabel>Password</FormLabel>
            <Input type='password' id='pass' value={password} onChange={handlePassChange} />

            <Button
            w='80%'
            mt={4}
            colorScheme='teal'
            type='submit'
            onClick={getToken}
          >
            Submit
          </Button>
        </FormControl>
      </Box>  
    )
}

export default Login