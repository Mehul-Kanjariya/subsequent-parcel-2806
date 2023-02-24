import React from 'react'
import { Radio, RadioGroup } from '@chakra-ui/react'
import axios from "axios"
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Link,
  } from '@chakra-ui/react';
  import { useState } from 'react';
  import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
const Signup = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [value, setValue] = useState('')
 
    const [email,setemail] = useState('')
    const [password,setpassword] = useState("")
    const[firstname,setfirstname] = useState('')
    const[lastname,setlastname] = useState('')

    
    const postdetails=async ()=>{
     
      
      const payload={
        email,
        password,
        firstname,
        lastname,
        Auth:false,
        user:value==="user"?true:false,
        admin:value==="admin"?true:false
      }

     try {
      
     let res = await axios.post(`https://alok-verma-rct.onrender.com/userlogin`,payload)
     console.log(res.data)

     } catch (error) {
      console.log(error)
     }

    }
  
    const handleclick=()=>{

    postdetails()
    setemail('')
    setfirstname('')
    setpassword('')
    setlastname('')
    setValue('')

    }


  return (
    
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'}>
            Sign up
          </Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
          to crack our  exciting deals✌️
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <HStack>
              <Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel>First Name</FormLabel>
                  <Input type="text" onChange={(e)=>setfirstname(e.target.value)} value={firstname} />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName">
                  <FormLabel>Last Name</FormLabel>
                  <Input type="text" onChange={(e)=>setlastname(e.target.value)} value={lastname} />
                </FormControl>
              </Box>
            </HStack>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input type="email" onChange={(e)=>setemail(e.target.value)} value={email} />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input type={showPassword ? 'text' : 'password'}  onChange={(e)=>setpassword(e.target.value)} value={password} />
                <InputRightElement h={'full'}>
                  <Button
                    variant={'ghost'}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }>
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>

            <RadioGroup onChange={setValue} value={value}>
      <Stack direction='row'>
        <Radio value='admin'>Admin</Radio>
        <Radio value='user'>User</Radio>
        
      </Stack>
    </RadioGroup>


            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                size="lg"

               onClick={()=>handleclick()}

                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                Sign up
              </Button>
            </Stack>

            <Stack pt={6}>
              
              <Text align={'center'}>
                Already a user? <Link color={'blue.400'} href={'/userlogin'}   >Login</Link>
              </Text>
            
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  )
}

export default Signup;