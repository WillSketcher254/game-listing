import React, { useContext, useState } from 'react'
import logo from './../assets/images/logo.jpg'
import { HiMagnifyingGlass } from "react-icons/hi2";
import { IoMoon } from "react-icons/io5";
import { IoMdSunny } from 'react-icons/io';
import { ThemeContext } from '../assets/Context/ThemeContext';

function Header() {
    const [toggle, setToggle] = useState(true)
    const { theme, setTheme } = useContext(ThemeContext)


    return (
        <div className='flex items-center p-3' >
            <img src={logo} width={60} height={60} className='rounded-full' />
            <div className='mx-5 rounded-full flex bg-slate-300 text-black p-2 w-full'>
                <HiMagnifyingGlass />
                <input type="text" placeholder='Search Games' className='px-3 bg-transparent outline-none' />
            </div>
            <div className='mx-5 rounded-full flex bg-slate-300 text-black p-2 cursor-pointer text-[30px]'>
                {theme == 'light' ? <IoMoon onClick={() => setTheme('dark')}/> : <IoMdSunny onClick={() => setTheme('light')} />}
            </div>
        </div>
    )
}

export default Header