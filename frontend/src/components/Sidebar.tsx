import React from 'react'
import { House, LayoutGrid, LogOut, Settings } from 'lucide-react'

const Sidebar = () => {
  return (
    <aside className='w-[84px] min-h-screen flex justify-center border-r p-4'>
        <nav className='flex flex-col items-center h-screen'>
            <div className='py-2 px-3 bg-green-400 rounded-md mb-10'>
                <a href=""><h1 className='text-white font-bold'>DL</h1></a>
            </div> 
            <ul className='flex flex-col gap-8 h-screen relative *:text-[#314d4a] duration-200 '>
                <li><a href="" title='Home'><House className='hover:scale-110'/><h1></h1></a></li>
                <li><a href="" title='Board'><LayoutGrid className='hover:scale-110'/><h1></h1></a></li>
                <li><a href="" title='Settings'><Settings className='hover:scale-110'/><h1></h1></a></li>
                <li className='absolute bottom-20'><a href="" title='Exit'><LogOut className='hover:scale-110'/><h1></h1></a></li>

            </ul>
        </nav>
    </aside>
  )
}

export default Sidebar

