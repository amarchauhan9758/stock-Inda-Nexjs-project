import React, { useState, useRef } from 'react'
import { AiOutlineCaretLeft, AiOutlineCaretRight, AiOutlineHeart, AiOutlineEye } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import HeroSection from "../heroSection/HeroSection"
import RightSection from "../gridSection/RightSection"
import { BsChatLeft, BsShare } from "react-icons/bs";
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import Avatar from '@mui/material/Avatar';



function SideBar() {
  const [isOpen, setIsOpen] = useState(false);
  const mainRef = useRef(null);
  const sidebarRef = useRef(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);
    if (isOpen) {
      sidebarRef.current.style.transform = 'translateX(250px)';
      mainRef.current.style.transform = 'translateX(250px)';
    } else {
      sidebarRef.current.style.transform = 'translateX(0px)';
      mainRef.current.style.transform = 'translateX(0px)';
    }
  };

  return (
    <>
    <div className="">
      <div ref={sidebarRef} className={`sidebar ${isOpen ? 'open' : 'null'}`}>

        <div className='text-center text-white text-lg font-semibold py-5'>
          <p className=' py-5'>Hello User</p>
          <hr />
          <div className='text-left'>

            <p className='mx-auto py-2 '>Discussion Forum</p>
            <p className='mx-auto py-2  '>Market Stories</p>
            <p className='mx-auto py-2 '>Sentiment</p>
            <p className='mx-auto py-2 '>Market</p>
            <p className='mx-auto py-2 '>Sector</p>
            <p className='mx-auto py-2 '>Watchlist</p>
            <p className='mx-auto py-2 '>Events</p>
          </div>
        </div>

      </div>

      <main  ref={mainRef}>
      <button className=' py-5 rounded bg-[#1D3B61] text-white' onClick={handleToggle} >{isOpen ? <AiOutlineCaretRight /> : <AiOutlineCaretLeft />} </button>

      <div className="flex flex-col md:flex-row  w-[100%]">
         <div className="  w-full md:w-[70%]">
        <HeroSection  isOpen={isOpen} />
         </div>
         <div className=" w-full md:w-[30%]" >
        <RightSection isOpen={isOpen} />
         </div>
      </div>
      </main>
    </div>
    </>
  )
}

export default SideBar