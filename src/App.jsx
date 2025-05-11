'use client'
import { useEffect, useState } from "react";
import About from "./components/about/about";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Navbar from "./components/navbar/navbar";
import Service from "./components/service/service";
import Work from "./components/work/work";


function App() {

  const [isDarkMode,setIsDarkMode]=useState(true)


    useEffect(()=>{
        if(localStorage.theme==='dark' || (!('them' in localStorage) && window.matchMedia('(prefers-color-scheme:dark)').matches)){
            setIsDarkMode(true)
        }else{
            setIsDarkMode(false)
        }
    },[])

  useEffect(()=>{
    if(isDarkMode){
      document.documentElement.classList.add('dark')
      localStorage.theme='dark'
    }else{
      document.documentElement.classList.remove('dark')
localStorage.theme=''
    }
    
  },[isDarkMode])

  return (
   <>     
<Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
<Header isDarkMode={isDarkMode} />
<About isDarkMode={isDarkMode} />
<Service isDarkMode={isDarkMode} />
<Work isDarkMode={isDarkMode} />
<Contact isDarkMode={isDarkMode} />
<Footer isDarkMode={isDarkMode} />
   </>
  )
}

export default App;
