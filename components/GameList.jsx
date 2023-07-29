import { Container, ScaleFade, background, scaleFadeConfig } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import GlobalApi from '../Services/GlobalApi'
import { Heading } from '@chakra-ui/react'
import { Image,Box,Flex } from '@chakra-ui/react'
import { BiAlbum, BiBold } from 'react-icons/bi'
import { CPseudoBox } from '@chakra-ui/react'
import { transform } from 'framer-motion'
import { AiOutlineFontSize } from 'react-icons/ai'
// import { hover } from '@testing-library/user-event/dist/types/convenience'




const GenreList = ({genreId,selectedGenresName}) => {

     const [GenreList,setGenreList]=useState([])

     const [activeIndex,setActiveIndex]=useState(0);
  useEffect(()=>{
   getGenreList();
  },[])
  const getGenreList=()=>{
      GlobalApi.getGenreList.then((resp)=>{
      
        setGenreList(resp.data.results)
       
      })
  }
  return (
     
      <Container>
         <Heading fontSize={'3xl'}>Genra</Heading>
          {GenreList.map((item,index)=>{
             const colorChange = (activeIndex,index) => {
              let bgColor
              if (activeIndex===index){
                  bgColor="rgb(209 213 219)"
              } 
              return bgColor
            }
            return(
             
              <Flex onClick={()=>{setActiveIndex(index);genreId(item.id );selectedGenresName(item.name)}} direction={{ base: 'column', md: 'row' }} gap={'2'} alignItems={'center'} marginBottom={'3'} cursor={'pointer'} colorSheme={"red"} _hover={{ bg: "rgb(209 213 219)", color: " white"}} p={'2'} rounded={'2xl'}  bgColor={colorChange(activeIndex,index)}  >
               
                <Image src={item.image_background} alt="" width={'20'} height={'20'} objectFit={'cover'} rounded={'3xl'}/>
                <Box fontWeight={'bold'}>{item.name}</Box>
               
              </Flex>
            )
          })}
      </Container>
  )
}

export default GenreList
