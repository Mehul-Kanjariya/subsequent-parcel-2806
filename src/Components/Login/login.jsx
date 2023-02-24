import React, { useEffect, useState } from 'react'



import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../../Redux/Auth/actions';
  
  export default function Login() {
    const dispatch = useDispatch();
    const {data} = useSelector((store)=>store.auth)

    const [email,setemail] = useState('')
    const [password,setpassword] = useState("")

  useEffect(()=>{
    dispatch(fetchData());
  },[])

  
  const login = () => { 
    let a =  data?.filter((e)=>{
      if(e.email===email && e.password===password){
        return e;
      }
    })
    console.log(a)
  };

    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading  color={'gray.600'}fontSize={'3xl'}>Sign in to your account ✌️</Heading>
            {/* <Text fontSize={'lg'} color={'gray.600'}>
              to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
            </Text> */}
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input type="email" onChange={(e)=>setemail(e.target.value)} value={email} />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input type={'password'}  onChange={(e)=>setpassword(e.target.value)} value={password} />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                  <Checkbox>Remember me</Checkbox>
                  <Link color={'blue.400'}>Forgot password?</Link>
                </Stack>
                <Button
                  bg={'blue.400'}
                  color={'white'}
                  onClick={login}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                  Log in
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }










