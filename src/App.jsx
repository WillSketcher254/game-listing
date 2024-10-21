import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Pages/Home'
import Header from './Components/Header'
import { ThemeContext } from './assets/Context/ThemeContext'

function App() {
  const [count, setCount] = useState(0)
  const [theme, setTheme] = useState('light')


  return (
    <>
      <ThemeContext.Provider value={{theme, setTheme}}>
        <div className={`${theme} ${theme == 'dark' ? 'bg-[#121212] text-white' : 'bg-slate-100 text-black'}`}>
          <Header />
          <Home />
        </div>
      </ThemeContext.Provider>
    </>
  )
}

export default App
