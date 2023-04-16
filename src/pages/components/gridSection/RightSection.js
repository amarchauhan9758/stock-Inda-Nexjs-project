import React from "react";
import { data } from "../Data/data"


function RightSection({ isOpen }) {
    const containerStyle = {
        // display: 'flex',
        // flexDirection: isOpen == false ? 'column' : 'row',
        // flexWrap: isOpen == false ? "wrap" : 'nowrap', // This allows the items to wrap to the next line
        gap: '12px'
    };

    const itemStyle = {
        width: isOpen == false ? '50%' : '100%',  // Each item takes up 50% of the width when sidebar is closed
        border: "2px solid red",

    };

    const imageStyle = {

        flexShrink: 0 // This prevents the images from shrinking too much
    };
    return (
        <>
            <div>
                <h1 className="text-2xl text-center md:text-start font-semibold text-red-400">Market Stories </h1>
            </div>
            <div  className={ isOpen == false ? "grid grid-cols-1  gap-5 " : "  grid grid-cols-2  gap-5   "} >

                {data &&
                    data.map((item) => (<>
                            <div key={item.id} style={{ backgroundImage: `url(${item.img})` }} className={ isOpen == false ?"w-[300px] h-[250px] rounded-2xl  flex justify-center items-end " :"w-[250px] h-[250px] rounded-2xl  flex justify-center items-end"  } >
                                <p className="text-lg font-semibold text-white text-start" >{item.desc}</p>
                            </div>
                        </>
                    ))}
            </div>

        </>
    )
}
export default RightSection;