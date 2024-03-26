'use client'
import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';

export default function Chart() {
  return (
    <div className=' box-content mt-10'>
    <div className='mt-6 pt-5 ml-6'>
        <b>Performance</b>
    </div>
    <LineChart
      xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
      series={[
        {
          data: [2, 5.5, 2, 8.5, 1.5, 5],
        },
        {
          data: [1, 3, 5, 7, 9, 11], // Second line data
        }
      ]}
      width={1700}
      height={400}
    />
    <div className='flex justify-center'>
    <div className=' box-border w-5 h-5 bg-blue-400 rounded-full '/>
        <p>Instagram</p>

    
    <div className=' box-border w-5 h-5 bg-green-300 rounded-full '/>
        <p>Facebook</p>

    
    </div>
    </div>
    
  );
}