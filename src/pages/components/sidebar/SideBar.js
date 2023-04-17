import React, { useState, useRef } from 'react'
import { AiOutlineCaretLeft, AiOutlineCaretRight, AiOutlineHeart, AiOutlineEye } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import HeroSection from "../heroSection/HeroSection"
import RightSection, { MobileViewSection } from "../gridSection/RightSection"
import { BsChatLeft, BsShare } from "react-icons/bs";
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import Avatar from '@mui/material/Avatar';
import {BiComment , BiBarChartAlt2} from "react-icons/bi"
import { CiUser } from "react-icons/ci";
import Header from '../header/Header';
import Banner from '../banner/Banner';

function SideBar({ activeItem, handleItemClick }) {
  const [isOpen, setIsOpen] = useState(false);
  const mainRef = useRef(null);
  const sidebarRef = useRef(null);

  if (sidebarRef.current !== null) {
    if (isOpen) {
      sidebarRef.current.style.transform = 'translateX(250px)';
      mainRef.current.style.transform = 'translateX(250px)';
    } else {
      sidebarRef.current.style.transform = 'translateX(0px)';
      mainRef.current.style.transform = 'translateX(0px)';
    }


  }



  const handleToggle = () => {
    setIsOpen(!isOpen);

  };



  return (
    <>
      <div className="">
        <div ref={sidebarRef} className={`sidebar ${isOpen ? 'open' : 'null'}`}>

          <div className='text-center text-white text-lg font-semibold py-5'>
            <li className=' px-5 list-none py-5'><span className="flex items-center"> <CiUser/> Hello User </span>  </li>
            <hr />
            <div className=' px-5 mt-5  text-start'>
            <ul>
              <li className=" text-lg ">

              <button onClick={() =>{ handleItemClick(1) ; handleToggle() }} className={activeItem === 1 ? " bg-[#061d3a]  p-3 " : "bg-[#1D3B61]   "}  >  <span className="flex items-center gap-1"><BiComment/> Discussion Forum </span> </button>
              </li>
              <li className=" text-lg ">

              <button onClick={() =>{ handleItemClick(2) ; handleToggle()}} className={activeItem === 2 ? " bg-[#061d3a]  p-3 " : "bg-[#1D3B61]   "}  >  <span className="flex items-center gap-1"><BiBarChartAlt2/> Market Stories</span> </button>
              </li>
              <li className=" text-lg ">

                <button className='mx-auto py-2 '></button>
              <button onClick={() =>{ handleItemClick(3); handleToggle()}} className={activeItem === 3 ? " bg-[#061d3a]  p-3 " : "bg-[#1D3B61]   "}  >  <span className="flex items-center gap-1"><BiComment/>     Senitment            </span> </button>
              </li>
              <li className=" text-lg ">

              <button onClick={() => handleItemClick(4)} className={activeItem === 4 ? " bg-[#061d3a]  p-3 " : "bg-[#1D3B61]   "}  >  <span className="flex items-center gap-1"><BiComment/> Market </span> </button>
              </li>
              <li className=" text-lg ">

              <button onClick={() => handleItemClick(5)} className={activeItem === 5 ? " bg-[#061d3a]  p-3 " : "bg-[#1D3B61]   "}  >  <span className="flex items-center gap-1"><BiComment/> Sector </span> </button>
              </li>
              <li className=" text-lg ">

              <button onClick={() => handleItemClick(6)} className={activeItem === 6 ? " bg-[#061d3a]  p-3 " : "bg-[#1D3B61]   "}  >  <span className="flex items-center gap-1"><BiComment/> Watchlist </span> </button>
              </li>


              </ul>
            </div>
          </div>

        </div>

        <main className=' flex justify-start items-start w-[100%] ' ref={mainRef}>

          <div className="w-[5%]   flex  items-center lg:items-start  h-screen  ">
            <button className=' py-5 border rounded bg-[#1D3B61] text-white' onClick={handleToggle} >{isOpen ? <AiOutlineCaretLeft /> : <AiOutlineCaretRight />} </button>
          </div>
  {/* for mobile view and tablets */}
          <div className="w-full  block lg:hidden  ">
          <Header/>
        <Banner/>
            <div className="   flex justify-center items-center gap-12 text-white font-semibold ">

              <button onClick={() => handleItemClick(1)} className={activeItem === 1 ? "border-b-4 border-red-400 bg-[#1D3B61]  px-5 " : "bg-[#1D3B61]   px-5"} >Disscussion Fourm </button>
              <button onClick={() => handleItemClick(2)} className={activeItem === 2 ? "border-b-4 border-red-400 bg-[#1D3B61]  px-5 " : "bg-[#1D3B61]  px-5"}>Market Stories </button>



            </div>

            <div>
              <div className={activeItem === 2 ? "content  active-content" : "content"} >
                <MobileViewSection />
              </div>
              <div className={activeItem === 1 ? "content  active-content" : "content"} >
                <HeroSection isOpen={isOpen} />
              </div>
            </div>
          </div>



          <div className="hidden lg:flex item-center justify-center  flex-col lg:flex-row  w-full">
            <div className="  w-full lg:w-[70%]">
              <HeroSection isOpen={isOpen} />
            </div>
            <div className=" w-full lg:w-[30%]" >
              <RightSection isOpen={isOpen} />
            </div>
          </div>
        </main>
      </div>
    </>
  )
}

export default SideBar