import React, { useEffect, useState } from 'react'
import GenreList from '../Components/GenreList'
import GlobalApi from '../Services/GlobalApi'
import Banner from '../Components/Banner';
import TrendingGames from '../Components/TrendingGames';
import GamesByGenresId from '../Components/GamesByGenresId';

function Home() {
  const [allGameList, setAllGameList] = useState();
  const [gameListByGenres, setGameListByGenres]=useState([])
  const [selectedGenresName, setSelectedGenresName]=useState('Adventure')
  useEffect(() => {
    getAllGamesList();
    getGamesByGenreId(3);
  }, [])

  const getAllGamesList = () => {
    GlobalApi.getAllGames.then((resp) => {

      setAllGameList(resp.data.results)
    })
  }

  const getGamesByGenreId=(id)=>{
    console.log('GENREID',id)
    GlobalApi.getGamesByGenreId(id).then((resp)=>{
      console.log("Game list by genre id: ",resp.data.results)
      setGameListByGenres(resp.data.results)
    })
  }
  return (
    <div className='grid grid-cols-4'>
      <div className='h-full hidden md:block'>
        <GenreList genreID = {(genreID)=>getGamesByGenreId(genreID)}
        selectedGenresName={(name)=>setSelectedGenresName(name)} />
      </div>
      <div className='col-span-4 md:col-span-3'>
        {allGameList?.length > 0 &&gameListByGenres.length>0?
        <div>
        <Banner gameBanner={allGameList[0]} />
        <TrendingGames gameList ={allGameList}/>
        <GamesByGenresId gameList = {gameListByGenres}/>
        </div>
          : null}
      </div>
    </div>
  )
}

export default Home