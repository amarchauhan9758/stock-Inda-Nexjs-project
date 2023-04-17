import React, {useState} from 'react'
import BottomNavigation from '@/pages/components/bottom-navigation/BottomNavigation'
import Header from '@/pages/components/header/Header'
import Sidebar from '@/pages/components/sidebar/SideBar'
import Banner from '@/pages/components/banner/Banner';


function HomePages() {

  const [activeItem, setActiveItem] = useState(1);

  const handleItemClick = (index) => {
    setActiveItem(index);
  }


  return (
    <div className='overflow-hidden'>

    <div className=" hidden lg:block" >
        <Header   activeItem={activeItem} />
        <Banner/>
    </div>
        <Sidebar  activeItem={activeItem}  handleItemClick={handleItemClick} />
        <BottomNavigation/>


    </div>
  )
}

export default HomePages