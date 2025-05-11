import { useEffect, useRef, useState } from 'react';
import {assets} from '../../assets/assets'

const Navbar=({isDarkMode, setIsDarkMode})=>{
    const[isScroll,setIsScroll]=useState(false)

    const myref=useRef();
    const openMenu=()=>{
        myref.current.style.transform='translateX(-16rem)'
    }
    const closeMenu=()=>{
        myref.current.style.transform='translateX(16rem)'
    }


    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            if(scrollY>50){
                    setIsScroll(true)
            }else{
                    setIsScroll(false)
            }
        })
    },[])

    return(
        <>

    <div className="fixed  top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden">
        <img src={assets.header_bg_color} alt="Bg-color" className="w-full"/>
    </div>

        <nav className={`w-full mb-10 sticky top-0 right-0 px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${isScroll ? 'bg-white-500/50 backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:shadow-white/20' : ""}`}>
            <a href='#top'>
            <h1 className='font-bold text-black/80 dark:text-white text-2xl font-Outfit'>Engr.Zihad<span className='text-[#ff0000] font-bold text-2xl ms-2'>.</span></h1>
            
            </a>

            <ul className={`hidden  md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3  ${isScroll? "" : " shadow-sm bg-white-500/50 dark:border dark:border-white-500/50 dark:bg-transparent"}`}>
                <li><a className='font-Ovo' href="#top">Home</a></li>
                <li><a className='font-Ovo' href="#About">About me</a></li>
                <li><a className='font-Ovo' href="#Sevices">Services</a></li>
                <li><a className='font-Ovo' href="#Work">My Work</a></li>
                <li><a className='font-Ovo' href="#Contact">Contact me</a></li>
            </ul>

        <div className="flex items-center gap-4">
            
            <button onClick={()=>{setIsDarkMode(prev=>!prev)}} >
                <img src={isDarkMode?assets.sun_icon:assets.moon_icon} alt="Dark-mood" className="w-6 cursor-pointer"/>
            </button>

            <a href="#Contact" className='hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo dark:border-white-500/50'>
               Contact<img src={isDarkMode? assets.arrow_icon_dark: assets.arrow_icon} className='w-3'/>
            </a>

            <button className='block md:hidden ml-3'  onClick={openMenu}>
                <img src={isDarkMode? assets.menu_white:assets.menu_black} alt="Menu-Icon" className="w-6" />
            </button>

        </div>


        {/* nav  */}

        <ul ref={myref} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 dark:bg-darkHover dark:text-white'>
            <div className='absolute right-6 top-6' onClick={closeMenu}>
                <img src={isDarkMode? assets.close_white:assets.close_black} alt='closebtn' className="w-5 cursor-pointer" />
            </div>
             <li><a className='font-Ovo'    onClick={closeMenu} href="#top">Home</a></li>
                <li><a className='font-Ovo' onClick={closeMenu} href="#About">About me</a></li>
                <li><a className='font-Ovo' onClick={closeMenu} href="#Sevices">Services</a></li>
                <li><a className='font-Ovo' onClick={closeMenu} href="#Work">My Work</a></li>
                <li><a className='font-Ovo' onClick={closeMenu} href="#Contact">Contact me</a></li>
        </ul>

        </nav>
        </>
    )
}

export default Navbar;