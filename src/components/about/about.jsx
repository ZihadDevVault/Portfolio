import { assets,infoList,toolsData } from "../../assets/assets";

const About =()=>{
    return(

        <div id="About" className="w-full px-[12%] py-10 scroll-mt-20">
        <h4 className="text-center mb-2 text-lg font-Ovo">Inroduction</h4>
        <h2 className="text-center text-5xl font-Ovo">About me</h2>

        <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-20 ">
            <div className="w-64 sm:w-80 rounded-3xl max-w-none ">
                <img src={assets.user_image} alt="User-Img" className='w-full rounded-3xl' />
                
            </div>
            <div className="flex-1 mb-10 mx-w-2xl  font-Ovo">
                <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores molestiae amet consequuntur, aut cumque numquam odio dolores distinctio at perferendis officiis, optio facere dolorem fugiat delectus! Accusamus reprehenderit veniam harum architecto excepturi rerum officia nihil praesentium quis voluptatibus vel animi molestias nemo voluptates eius consectetur aspernatur suscipit omnis, possimus quam quidem. Aut, reprehenderit? Inventore, tempore hic, accusamus qui nobis nihil suscipit molestias quod maiores perspiciatis delectus aut vero quae sapiente!</p>

                <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
                    {infoList.map(({icon,iconDark,title,description},index)=>{
                       return(<li className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black' key={index}>
                            <img src={icon} alt="icon" className="w-7 mt-3"/>
                            <h3 className="my-4 font-semibold text-gray-700">{title}</h3>
                            <p className="text-gray-600 text-sm">{description}</p>
                        </li>)
                    })}
                </ul>

                <h4 className="my-6 text-gray-700 font-Ovo">Tools I use</h4>
                <ul className="flex items-center gap-3 sm:gap-5">
                    {toolsData.map((tool, index)=>{
                            return(
                                <li key={index} className="flex items-center justify-center w-12 sm:w-14 aspect-squre border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500">
                                    <img src={tool} alt="Tool" className="w-5 sm:w-7"/>
                                </li>
                            )
                    })}
                </ul>
            </div>
        </div>

        </div>

        
    )
}

export default About;