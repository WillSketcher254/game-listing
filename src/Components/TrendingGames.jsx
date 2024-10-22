import React, { useEffect } from 'react'

function TrendingGames({ gameList }) {
    useEffect(() => {
        console.log(gameList)
    }, [])
    return (
        <div className='mt-5 hidden md:block'>
            <h2 className='font-bold text-[30px] mt-5 mx-5 '>Trending Action Games</h2>
            <div className='md:grid md:grid-cols-3 lg:grid-cols-4 gap-3'>
                {gameList.map((item, index) => index < 4 && (
                    <div className='bg-[#76a8f75e] m-1 rounded-2xl group 
                    hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer mt-5'>
                        <img src={item.background_image} className='h-[270px] rounded-xl object-cover ' />
                        <h2 className='text-[20px] font-bold p-2'>{item.name}</h2>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TrendingGames