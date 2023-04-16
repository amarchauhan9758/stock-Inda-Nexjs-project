import React from 'react'
import { AiOutlineHome, AiOutlineQrcode, AiOutlineAppstore, AiOutlineTable, AiOutlineWechat } from "react-icons/ai"

function BottomNavigation() {
  return (
    <div>
      <nav class=" block lg:hidden fixed bottom-0 w-full">
        <ul class="flex justify-between text-2xl bg-[#1D3B61] text-white font-semibold   px-5">
          <li class="py-2    font-medium"><AiOutlineAppstore /></li>
          <li class="py-2   font-medium"><AiOutlineQrcode /> </li>
          <li class="py-2   font-medium">
            <AiOutlineHome />
          </li>
          <li class="py-2   font-medium">
            <AiOutlineWechat />
          </li>

          <li class="py-2   font-medium"><AiOutlineTable /> </li>
        </ul>
      </nav>
    </div>

  )
}

export default BottomNavigation