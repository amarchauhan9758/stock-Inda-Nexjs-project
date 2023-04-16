
import BottomNavigation from '@/pages/components/bottom-navigation/BottomNavigation'
import Header from '@/pages/components/header/Header'
import Sidebar from '@/pages/components/sidebar/SideBar'
import React from 'react'

function HomePages() {

  

  return (
    <div className='overflow-hidden'>
        <Header/>
        <Sidebar/>
        <BottomNavigation/>


    </div>
  )
}

export default HomePages