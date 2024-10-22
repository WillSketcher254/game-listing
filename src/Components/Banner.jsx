import React, { useEffect } from 'react'

function Banner({ gameBanner }) {
    useEffect(() => {
        console.log('Gamebanner', gameBanner)
    }, [])
    return (
        <div className='relative'>
            <div className='absolute bottom-1 left-5'>
                <h2 className='text-[24px] text-white font-bold bg-gray-500 bg-opacity-50 px-3'>{gameBanner.name}</h2>
                <button className='bg-blue-600 text-white'>Get Now</button>
            </div>
            <img src={gameBanner.background_image} className='md:h-[330px] w-full object-cover px-2 rounded-3xl' />
        </div>
    )
}

export default Banner