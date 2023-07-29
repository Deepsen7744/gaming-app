// import { Button, Heading, Stack, Text, VStack } from '@chakra-ui/react';
// import React, { useState } from 'react';

import { useEffect, useState } from "react";
import GlobalApi from "../Services/GlobalApi";
import GenreList from "./GameList";

import VideoHeader from "./VideoHeader";
import Banner from "./Banner";
import TrendingGames from "./TrendingGames";
import GamesByGenresId from "./GamesByGenresId";



const Videos = () => {

  const [allGameList,setAllGameList]=useState();
  const [gameListByGenres,setGameListByGenres]=useState([]);
  const [selectedGenresName,setSelectedGenresName]=useState('Action')
  
  useEffect(()=>{
    getAllGamesList();
    getGameListByGenresId(4);
    
  },[])

  
   const getAllGamesList=()=>{
    GlobalApi.getAllGames.then((resp)=>{
      console.log(resp.data.results);
      setAllGameList(resp.data.results)
    })
   }

   const getGameListByGenresId=(id)=>{
    console.log(id)
    GlobalApi.getGameListByGenreId(id).then((resp)=>{
      console.log(resp.data.results);
      setGameListByGenres(resp.data.results);
            
    })
   }
  
  return (
      <div>
        
        <VideoHeader/>
          <div style={{display:"grid",gridTemplateColumns:"1fr 4fr",padding:"10px" }}>
            <div >
              <GenreList genreId={(genreId)=>getGameListByGenresId(genreId)} selectedGenresName={(name)=>setSelectedGenresName(name)}  />
            </div>
            <div style={{backgroundColor:"transparent",columnSpan:"4",borderRadius: "30px"}}>
              {allGameList?.length>0&&gameListByGenres.length>0?<div>
                <Banner gameBanner={allGameList[0]}/>
                <TrendingGames gameList={allGameList}/>
                <GamesByGenresId gameList={gameListByGenres} selectedGenresName={selectedGenresName} />
                </div>
                :null}
              
            </div>
          </div>

      </div>
  );
};

export default Videos;
