import Image from 'next/image'
import React from 'react'

import { AiOutlineSearch } from "react-icons/ai";

function Header() {
  return (
    <>
      <div className="bg-white  w-full  container mx-auto">


        <header classsName=" ">
          <div className=" w-[100%] py-2  flex   items-center  gap-10  " >
            <div className='w-[10%] mx-auto '>
              <Image src="https://www.goindiastocks.com/Content/assets/images/logewithname.png" alt="logo" width={80} height={80} />
            </div>
            <div className=" lg:w-[50%] border  rounded-md shadow-md bg-blue-500 justify-center flex items-center">
              <input className=' w-full py-2 px-2 bg-gray-100' type="text" placeholder='Enter Stock Here' />
              <span className='p-2'> <AiOutlineSearch className='text-white  ' /></span>
            </div>
            <div className='hidden lg:block  mx-auto '>
              <nav className='flex  gap-5  items-center justify-between md:px-12  '>
                <li className=' list-none text-lg font-semibold  '> Contact us </li>
                <button className='border  px-5 py-2 font-semibold uppercase hover:bg-blue-600 hover:duration-300 ease-in-out hover:text-white ' >Sign UP</button>
                <button className='border  px-5 py-2 font-semibold uppercase hover:bg-blue-600 hover:duration-300 ease-in-out hover:text-white ' >Sign IN</button>
              </nav>
            </div>
          </div>
        </header>
      </div>
    </>
  )
}

export default Header