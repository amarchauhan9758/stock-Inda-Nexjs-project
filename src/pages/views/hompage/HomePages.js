import React, {useState} from 'react'
import BottomNavigation from '@/pages/components/bottom-navigation/BottomNavigation'
import Header from '@/pages/components/header/Header'
import Sidebar from '@/pages/components/sidebar/SideBar'


function HomePages() {

  const [activeItem, setActiveItem] = useState(1);

  const handleItemClick = (index) => {
    setActiveItem(index);
  }


  return (
    <div className='overflow-hidden'>
        <Header  activeItem={activeItem} />
        <Sidebar  activeItem={activeItem}  handleItemClick={handleItemClick} />
        <BottomNavigation/>


    </div>
  )
}

export default HomePages