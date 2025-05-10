import { useEffect, useRef, useState } from 'react';
import {assets} from '../../assets/assets'

const Navbar=()=>{
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

    <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]">
        <img src={assets.header_bg_color} alt="Bg-color" className="w-full"/>
    </div>

        <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${isScroll ? 'bg-white bg-opacity-50 backdrop-blur-lg shadow-sm' : ""}`}>
            <a href='#top'>

            <img src={assets.logo} className="w-28 cursor-pointer mr1-4"/>
            </a>

            <ul className={`hidden  md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3  ${isScroll? "" : "bg-white shadow-sm bg-opacity-50"}`}>
                <li><a className='font-Ovo' href="#top">Home</a></li>
                <li><a className='font-Ovo' href="#About">About me</a></li>
                <li><a className='font-Ovo' href="#Sevices">Services</a></li>
                <li><a className='font-Ovo' href="#Work">My Work</a></li>
                <li><a className='font-Ovo' href="#Contact">Contact me</a></li>
            </ul>

        <div className="flex items-center gap-4">
            
            <button >
                <img src={assets.moon_icon} alt="Dark-mood" className="w-6"/>
            </button>

            <a href="#Contact" className='hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo'>
               Contact<img src={assets.arrow_icon} className='w-3'/>
            </a>

            <button className='block md:hidden ml-3'  onClick={openMenu}>
                <img src={assets.menu_black} alt="Menu-Icon" className="w-6" />
            </button>

        </div>


        {/* nav  */}

        <ul ref={myref} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500'>
            <div className='absolute right-6 top-6' onClick={closeMenu}>
                <img src={assets.close_black} alt='closebtn' className="w-5 cursor-pointer" />
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