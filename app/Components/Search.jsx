import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import GridViewIcon from '@mui/icons-material/GridView';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

const Search = () => {
  return (
    <div className="flex w-full gap-4 mt-2 mr-14">
    <SearchIcon className='mt-3 ml-4 '/>
      <input type="text" placeholder="Search..." className="bg-[transparent] border-none w-full py-3 pl-2 pr-3 gap-5"/>
      
      <NotificationsNoneIcon className='mt-3'/>

      <CalendarTodayIcon className='mt-3'/>

      <GridViewIcon className='mt-3'/>

      <PersonOutlineIcon className='mt-3'/>
      

    </div>

  )
}

export default Search