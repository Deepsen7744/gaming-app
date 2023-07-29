import React, { useEffect } from 'react'
import { Image } from '@chakra-ui/react';
import { Heading ,Button,Container,Box} from '@chakra-ui/react';
import { blue } from '@mui/material/colors';

function Banner({gameBanner}) {
    useEffect(()=>{
      

    },[])

  return (
    <Box style={{position:'relative', borderRadius:'2xl'}} paddingTop={'20'}>
        <Box  position="absolute" bottom={'0'} p={'7'} bgGradient='linear(to-t,#0f172a,transparent)'w={'full'} color={'white'} rounded={'2xl'}> 
            <Heading paddingBottom={'3'} fontSize={{base:'9',md:'3xl'}} >{gameBanner.name}</Heading>
            <Button bgColor={'#0000FF'}  >Get Now</Button>
            
        </Box>
        <Image  src={gameBanner.background_image} rounded={'2xl'} />
     
    </Box>
  )
}

export default Banner
