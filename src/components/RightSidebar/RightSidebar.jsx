import React from 'react'
import './RightSidebar.css'
import Widgets from './Widgets'
import WidgetsTags from './WidgetsTags'
const RightSidebar = () => {
  return (
    <aside className='right-sidebar'>
      <Widgets />
      <WidgetsTags />

    </aside>
  )
}

export default RightSidebar