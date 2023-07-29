import React, { useEffect } from 'react'
import { Image,Heading,Box, Grid, ScaleFade } from '@chakra-ui/react';


function GamesByGenresId({gameList,selectedGenresName}) {
   useEffect(()=>{
    console.log('GameList',gameList);
   })
  return (
    <Box>
        <Heading marginTop={'5'}>{selectedGenresName}</Heading>
    <Grid templateColumns={{  base: 'repeat(1, 1fr)', 
    md: 'repeat(2, 1fr)',
    lg: 'repeat(3, 1fr)'}} gap={'6'} marginTop={'5'}>
      {gameList.map((item)=>{
        return(
        <Box bgColor={'#76a8f75e'} p={'3'} rounded={'lg'} paddingBottom={'10'} height={'full'}  _hover = { { transform: "scale(1.1)",transition:'1s' } }>
            <Image w={'full'} h={'80%'} rounded={'xl'} objectFit={'cover'} src={item.background_image}></Image>
            <Heading paddingTop={'2'} fontSize={{base:'10',sm:'16',md:'lg'}}>{item.name}<span>{item.metacritic}</span></Heading>
            <Heading fontStyle={'normal'}  fontSize={'small'}>⭐{item.rating} 💬{item.reviews_count} 🔥{item.suggestions_count}</Heading>
        </Box>
        )
      })}
    </Grid>
    </Box>
    
  )
}

export default GamesByGenresId
