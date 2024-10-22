import React, { useEffect } from 'react'
import { IoTerminalSharp } from 'react-icons/io5'

function GamesByGenresId({gameList}) {
    useEffect(()=>{
        console.log('Gamelist: ',gameList)
    },[])
  return (
    <div>
        <h2 className='font-bold text-[30px] mt-5 mx-5 '>Games by Genre</h2>
        <div className='md:grid md:grid-cols-2 lg:grid-cols-3 gap-3'>
        {gameList.map((item)=>(
            <div className='bg-[#76a8f75e] m-1 rounded-2xl group 
                    hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer mt-5'>
                <img src={item.background_image} className='h-[270px] rounded-xl object-cover' />
                <h2 className='text-[20px] font-bold p-2'>{item.name} </h2>
                <h2 className='text-[17px] font-bold'>⭐{item.rating} --💬{item.reviews_count} --📅{item.released} </h2>
            </div>
        ))}
        </div>
    </div>
  )
}

export default GamesByGenresId