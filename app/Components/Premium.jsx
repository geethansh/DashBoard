import { Button } from '@mui/material'
import React from 'react'
import BoltIcon from '@mui/icons-material/Bolt';

const Premium = () => {
  return (
    <div className=' box-content bg-black text-gray-100 rounded-3xl pt-2 pb-3 ml-4 mr-4 mt-12 relative flow-root'>
        <div className=' float-left pl-14 '>
        <p className=' text-4xl pt-4 pb-2'>Unlock premium stats</p>
        <p className='text-md pt-1 pb-4'>Get upto 10TB of storage for a limited time</p> 
        </div>

        <div className=' float-right pt-8 pr-20 justify-center'>
        <button className=' box-border h-10 w-28 bg-white text-black rounded-full'><BoltIcon/>Upgrade</button>
        </div>
        
        
       
    </div>
  )
}

export default Premium