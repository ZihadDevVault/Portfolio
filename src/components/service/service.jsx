import { assets, serviceData } from "../../assets/assets";

const Service=()=>{
    return(



    <div id="Service" className="w-full px-[12%] py-10 scroll-mt-20">
        <h4 className="text-center mb-2 text-lg font-Ovo">What I offer</h4>
        <h2 className="text-center text-5xl font-Ovo">My Services</h2>
        <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam eos mollitia temporibus vitae dolorum repudiandae, illo quaerat, at eaque inventore saepe ducimus repellendus laboriosam adipisci eveniet, voluptatem culpa nisi. Pariatur animi aperiam laborum eligendi similique obcaecati quis eum quibusdam dolore.</p>


        <div className="grid grid-cols-['repeat(auto-fit, minmax(200px, 1fr) )'] gap-6 my-10 ">
        {serviceData.map(({icon,title,description,link},index)=>{
            return(
                <div key={index} className="border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lighHover hover:-translate-y-1 duration-500">
                    <img src={icon} alt="icon" className="w-10" />
                    <h4 className="text-lg my-4 text-gray-700">{title}</h4>
                    <p className="text-sm text-gray-600 leading-5">{description}</p>
                    <a href={link} className="flex items-center gap-2 text-sm mt-5">
                        Read more <img src={assets.right_arrow} alt="rightArrow" />
                    </a>
                </div>
            )
        })} 
        </div>

        </div>

        
    )
}

export default Service;