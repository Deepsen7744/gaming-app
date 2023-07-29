import React from 'react'
import logo from '../assets/5.png';
import logo1 from '../assets/logo.png';
import {
    
    Container,
  
    Input,
    
  } from '@chakra-ui/react';
import { Image} from '@chakra-ui/react';
import { AiOutlineSearch } from 'react-icons/ai';
import {im} from '../assets/5.png'
import { HStack } from '@chakra-ui/react';


const VideoHeader = () => {
  return (
    <Container>
        <HStack
          alignItems={'center'}
          spacing={'8'}
          w={['full', '90%']}
          m={'auto'}
          my={'1'}
        >
        <Image src={logo1} w={'16'} h={'16'}></Image>
         <AiOutlineSearch/>
          <Input
            placeholder={'Name'}
            type={'text'}
            required
            focusBorderColor={'purple.500'}
          />
        
         
        </HStack>
        

       </Container>
     
    
  )
}

export default VideoHeader
