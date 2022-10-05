import React from 'react'
import '../../App.css'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import HomeSidebar from '../../components/HomeSidebar/HomeSidebar'
import RightSidebar from  '../../components/RightSidebar/RightSidebar'

const Home = () => {
  return (
    <div className='home-container-1'>
      <LeftSidebar/>
      <div className='home-container-2'>
       <HomeSidebar/>
       <RightSidebar/>

      </div>
      </div>
    
  )
}

export default Home