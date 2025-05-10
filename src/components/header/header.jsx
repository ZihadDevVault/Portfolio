import { assets } from "../../assets/assets";

const Header=()=>{
    return(
        <div className="w-11/12 max-w-3xl text-center mx-auto  flex flex-col items-center gap-4 h-screen z-60">
      
        <div>
            <img src={assets.profile_img} alt="profile_img"  className="rounded-full w-32" />
            </div>
                <h3 className="flex items-end gap-2 tex-xl md:text-2xl mb-3 font-Ovo">Hi! I'm Md Zihad mia <img src={assets.hand_icon} alt="profile_icon"  className="rounded-full w-6" /></h3>
                <h1 className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo">Full-Stack Web Developer based on Bangladesh</h1>
                <p className="max-w-2xl mx-auto font-Ovo">
                    I am Full-Stack Developer In Bangladesh.I completed computer Engineering in from Sherpur polytechnic Institute. I Love Learn and write code. expert in Node Js, Javascript, tailwindcss, express Js etc.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-4">
                    <a href="#contact" className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2" >Contact Me <img src={assets.right_arrow_white} alt="profile_img"  className="w-4" /></a>

                    <a href="#sample-rusume.pdf" download className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2">Download CV <img src={assets.download_icon} alt="profile_img"  className="w-4"/></a>
                </div>

           
      
        </div>
    )
}

export default Header;