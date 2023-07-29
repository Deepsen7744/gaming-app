import React, { useEffect } from 'react'
import { Box, Grid, Heading, Image, keyframes, transform, transition,Hide } from '@chakra-ui/react'





const TrendingGames = ({gameList}) => {

    useEffect(()=>{
        console.log(gameList)
    },[])
    
  return (
    <Box marginTop={'6'} display={{base:'none',sm:'grid'}}>
        <Heading fontWeight={'bold'} >Trending Games</Heading>
        
    <Grid templateColumns={{base:'none' , sm: 'repeat(2, 1fr)', 
    md: 'repeat(3, 1fr)',
    lg: 'repeat(4, 1fr)'}} gap={'4'} paddingTop={'4'} >
      {gameList.map((item,index)=>index<4 &&(
        <Box paddingBottom={'100'} bgColor={'#76a8f75e'} rounded={'lg'} h={'90%'} _hover = { { transform: "scale(1.1)",transition:'1s' } }>
           <Image src={item.background_image} h={'390'} roundedTop={'lg'}  objectFit={'cover'}></Image> 
           <Box fontWeight={'bold'} fontSize={'2xl'} textAlign={'center'} paddingTop={'3'}>{item.name}</Box>
        </Box>
      ))}
    </Grid>
    
    </Box>
  )
}

export default TrendingGames
