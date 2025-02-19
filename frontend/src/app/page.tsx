import Board from '@/components/Board';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import React from 'react'

const Page = () => {
  return (
    <div className='flex'>
      <Sidebar />
      <div>
        <Header />
        <Board />
      </div>
    </div>
  )
}

export default Page;