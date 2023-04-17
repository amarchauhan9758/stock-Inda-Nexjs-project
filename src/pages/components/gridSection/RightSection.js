import React from "react";
import { data } from "../../Data/data"




function RightSection({ isOpen }) {

    return (
        <><div className="p-5">
            <div>
                <h1 className="text-lg text-center md:text-start font-semibold text-red-400  uppercase ">Market Stories </h1>
            </div>
            <div  className={ isOpen == false ? "   mx-auto    grid grid-cols-1   xl:grid-cols-2  gap-5   " : "   grid grid-cols-1    h-[800px] overflow-y-scroll gap-5 "} >

                {data &&
                    data.map((item) => (<>
                            <div key={item.id} style={{ backgroundImage: `url(${item.img})` }} className={ isOpen == false ?" w-[350px] md:w-[250px] h-[250px]  rounded-2xl flex justify-center items-end " :"w-[280px] h-[250px] rounded-2xl  flex justify-center items-end"  } >
                                <p className=" font-semibold text-white text-start px-2 " >{item.desc}</p>
                            </div>
                        </>
                    ))}
            </div>
            </div>

        </>
    )
}
export default RightSection;

export const MobileViewSection = ()=>{
    return (
        <>
        <div className="p-5">
            <div>
                <h1 className=" text-baseline  md:text-start font-semibold text-red-400">Market Stories </h1>
            </div>
            <div  className="grid grid-cols-1 h-[800px] overflow-y-scroll gap-5" >

                {data &&
                    data.map((item) => (<>
                            <div key={item.id} style={{ backgroundImage: `url(${item.img})` }}  className="w-[300px] h-[300px] rounded-lg  flex justify-center items-end " >
                                <p className="text-sm font-semibold text-white text-start  px-2  " >{item.desc}</p>
                            </div>
                        </>
                    ))}
            </div>
        </div>
        </>
    )
}