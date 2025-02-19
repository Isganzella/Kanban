import React from 'react'
import { UserRound } from 'lucide-react'

const Header = () => {
  return (
    <header className='w-[calc(100vw-84px)] h-[84px] flex justify-end items-center p-8'>
        <a href=""><UserRound /></a>
    </header>
  )
}

export default Header