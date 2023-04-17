import React from 'react'
import { companydata } from '../../Data/companydata'

function Banner() {
  return (
    <>
    <div className=' lg:px-5 mb-5'>


     <div className='  mx-auto bg-[#1D3B61]'>


        <ul className='ul-list list-none flex justify-between lg:justify-evenly items-center gap-3 text-white font-semibold'>
       <li> Nifty 50 : 17634 .4%
       </li>
       <li> Sensex : <span className="text-red-500">4523.2%</span>
       </li>
       <li> Bank Nifity :  <span className="text-green-500"> 42106.60%</span>
       </li>
       <li> BSE CD :  <span className="text-green-500"> 3861.046 % </span>
       </li>
        </ul>
        </div>
        </div>

        <div className=' mx-auto px-5 '>
   <nav>
   <h1 className='uppercase text-2xl font-semibold text-red-400'>Featured companies</h1>
   <div className="flex  flex-wrap bg-white lg:bg-[#E7F0FB] p-5 justify-center items-center gap-12">
   {
    companydata.map((item)=>{
    return  (
        <img className='border-2 rounded-full lg:rounded-none  border-red-400 lg:border-none  h-28 w-28  lg:w-[100px] lg:h-[80px]' src={item.img} alt="pics"  />
    )
    })
   }


   </div>
   </nav>
        </div>
    </>
  )
}

export default Banner