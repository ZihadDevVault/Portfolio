import { assets } from "../../assets/assets";

const Footer=({isDarkMode})=>{
    return(
        <div className="mt-20">
            <div className="text-center ">
                <a href='#top'>
            <h1 className='font-bold text-black/80 dark:text-white text-2xl font-Outfit'>Engr.Zihad<span className='text-[#ff0000] font-bold text-2xl ms-2'>.</span></h1>
            
            </a>
            </div>
            <div className="w-max flex items-center gap-2 mx-auto">
                <img src={isDarkMode?assets.mail_icon_dark:assets.mail_icon} className="w-6"/>
                engr.zihadmia@gmail.com
            </div>
            <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6 ">
                <p>© 2025 william Mark. All rights reserved</p>
                <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
                    <li><a href="#" target="_blank"> Github</a></li>
                    <li><a href="#" target="_blank"> Linkedin</a></li>
                    <li><a href="#" target="_blank"> Twitter</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Footer;