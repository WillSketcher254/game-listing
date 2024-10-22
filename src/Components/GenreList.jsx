import React, { useEffect, useState } from 'react'
import GlobalApi from '../Services/GlobalApi'

function GenreList({genreID, selectedGenresName}) {

    const [genreList, setGenreList] = useState([])
    const [activeIndex, setActiveIndex] = useState(0)
    useEffect(()=>{
        getGenreList();
    },[])

    const getGenreList = () => {
        GlobalApi.getGenreList.then((resp) => {
            setGenreList(resp.data.results)
        })
    }
    return (
        <div className='px-3 rounded-xl bg-slate-300 dark:bg-slate-900 sticky top-0'>
            
            <h2 className=' text-[30px] font-bold px-8'>Genre</h2>
            {genreList.map((item, index)=>(
                <div 
                onClick={()=>{setActiveIndex(index);genreID(item.id);
                    selectedGenresName(item.name)
                }}
                className={`hover:scale-110 transition-all duration-300 ease-in-out flex items-center font-bold cursor-pointer hover:bg-gray-400 md-1 rounded-xl
                ${activeIndex==index?'bg-gray-300 dark:bg-gray-600':null}`}>
                    <img src={item.image_background} className='w-[40px] h-[40px] object-cover rounded-lg m-3' />
                    <h3>{item.name}</h3>
                </div>
            ))}
        </div>
    )
}

export default GenreList

// className='bg-slate-300 '

