import React from 'react';
import { AiOutlineCaretLeft, AiOutlineCaretRight, AiOutlineHeart, AiOutlineEye } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import RightSection from "../gridSection/RightSection"
import { BsChatLeft, BsShare } from "react-icons/bs";
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import Avatar from '@mui/material/Avatar';
import { companydata } from "../Data/companydata"

function HeroSection() {
  return (
    <>
      <div className=" overflow-hidden">
        <div className=' p-5'>
          <div>
            <h1 className="text-2xl md:text-start text-center font-semibold text-red-400"  >Disscussion Fourm </h1>
          </div>
          <div>
            <h1 className=" md:text-start text-center  font-semibold mb-2 ">Filters</h1>
            <div className="bg-white shadow-md  mx-auto  shadow-black rounded-lg p-4 md:p-8">
              <div className="flex flex-wrap gap-5 justify-center ">
                <button className="bg-red-600 text-white px-8 py-2 rounded-full font-semibold hover:bg-red-800 hover:text-cyan-200  " >Sector 1</button>
                <button className="bg-blue-600 text-white px-8 py-2 rounded-full font-semibold hover:bg-blue-800 hover:text-cyan-200  " >Sector 1</button>
                <button className="bg-yellow-600 text-white px-8 py-2 rounded-full font-semibold hover:bg-yellow-800 hover:text-cyan-200  " >Sector 1</button>
                <div className="bg-gray-500 px-2 py-2  rounded-full font-semibold flex items-center md:gap-6 ">
                  <span className="text-white text-2xl" ><AiOutlineSearch /> </span>
                  <input type='text' className="bg-gray-500" placeholder="Search here" />
                </div>
              </div>
            </div>
            <div className=" mt-4  mb-5 mx-auto h-[600px] overflow-y-scroll text-center bg-white rounded-lg  md:pr-4 ">

              {
                companydata.map((item) => {
                  return (

                    <div className=" mb-5 p-5 shadow-md shadow-black rounded-lg">
                      <h1 className="text-end text-blue-500 font-semibold " >2 min ago</h1>
                      <div className="relative  mx-auto  " >
                        <img className=" mx-auto " src={item.img} alt="InfiBeam" width="210px" height="92px" />
                        <h1 className=" absolute lg:-bottom-8 left-0 right-0   uppercase font-semibold text-3xl ">Payments | Platforms</h1>
                      </div>

                      <div className="md:text-start text-center mt-20 lg:mt-12 mb-5  flex flex-wrap gap-4  items-center " >


                        <Avatar alt="Remy Sharp" src={item.avatar} />
                        <span className="font-semibold text-sm  uppercase" >{item.profile}</span>
                        <button className=" bg-red-900 text-white text-sm font-semibold px-4 py-1 rounded-full" >Sector {item.sector}</button>

                      </div>
                      <div>
                        <p className="md:px-5  text-gray-600 text-justify  md:text-start" >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s </p>
                        <div className=" mt-5 flex flex-wrap gap-5 justify-evenly items-center font-semibold text-lg cursor-pointer " >
                          <span><AiOutlineHeart /></span>
                          <div className="flex items-center gap-4 ">
                            <span><AiOutlineEye /></span>
                            <h1> View </h1>
                          </div>
                          <div className="flex items-center gap-4 ">
                            <span><BsChatLeft /></span>
                            <h1>  Comments</h1>
                          </div>
                          <div className="flex items-center gap-4 ">
                            <span><BsShare /></span>
                            <h1>   Share </h1>
                          </div>
                        </div>
                      </div>
                    </div>


                  )
                })
              }

            </div>
          </div>
        </div>


      </div>

    </>
  )
}
export default HeroSection;