import { assets,infoList,toolsData } from "../../assets/assets";
import { motion } from "motion/react"
const About =({isDarkMode})=>{
    return(

        <motion.div 
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            transition={{duration:1}}
        id="About" className="w-full px-[12%] py-10 scroll-mt-20">
        <motion.h4
             initial={{opacity:0, y:-20}}
            whileInView={{opacity:1 , y:0}}
            transition={{duration:0.5, delay:.3}}
        className="text-center mb-2 text-lg font-Ovo">Inroduction</motion.h4>
        <motion.h2 
              initial={{opacity:0, y:-20}}
            whileInView={{opacity:1 , y:0}}
            transition={{duration:0.5, delay:.3}}
        className="text-center text-5xl font-Ovo">About me</motion.h2>

        <motion.div
         initial={{opacity:0}}
            whileInView={{opacity:1}}
            transition={{duration:0.8}}
        className="flex w-full flex-col lg:flex-row items-center gap-20 my-20 ">
            <motion.div 
             initial={{opacity:0, scale:0.9}}
            whileInView={{opacity:1 ,scale:1}}
            transition={{duration:0.6}}
            className="w-64 sm:w-80 rounded-3xl max-w-none ">
                <img src={assets.user_image} alt="User-Img" className='w-full rounded-3xl' />
                
            </motion.div>
            <motion.div 

             initial={{opacity:0}}
            whileInView={{opacity:1}}
            transition={{duration:0.6, delay:0.8}}

            className="flex-1">
                <p className=" mb-10 mx-w-2xl  font-Ovo">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores molestiae amet consequuntur, aut cumque numquam odio dolores distinctio at perferendis officiis, optio facere dolorem fugiat delectus! Accusamus reprehenderit veniam harum architecto excepturi rerum officia nihil praesentium quis voluptatibus vel animi molestias nemo voluptates eius consectetur aspernatur suscipit omnis, possimus quam quidem. Aut, reprehenderit? Inventore, tempore hic, accusamus qui nobis nihil suscipit molestias quod maiores perspiciatis delectus aut vero quae sapiente!</p>

                <motion.ul
                     initial={{opacity:0}}
            whileInView={{opacity:1}}
            transition={{duration:0.8, delay:1}}
                className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
                    {infoList.map(({icon,iconDark,title,description},index)=>{
                       return(<motion.li
                    
                    whileInView={{scale:1.03}}
                    
                       className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50' key={index}>
                            <img src={isDarkMode?iconDark:icon} alt="icon" className="w-7 mt-3"/>
                            <h3 className="my-4 font-semibold text-gray-700 dark:text-white">{title}</h3>
                            <p className="text-gray-600 text-sm dark:text-white/80">{description}</p>
                        </motion.li>)
                    })}
                </motion.ul>

                <h4 className="my-6 text-gray-700 font-Ovo dark:text-white/80">Tools I use</h4>
                <ul className="flex items-center gap-3 sm:gap-5">
                    {toolsData.map((tool, index)=>{
                            return(
                                <li key={index} className="flex items-center py-1 justify-center w-12 sm:w-14 aspect-squre border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500">
                                    <img src={tool} alt="Tool" className="w-5 sm:w-7"/>
                                </li>
                            )
                    })}
                </ul>
            </motion.div>
        </motion.div>

        </motion.div>

        
    )
}

export default About;