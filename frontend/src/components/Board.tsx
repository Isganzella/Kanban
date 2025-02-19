import React from 'react'

const Board = () => {
  return (
    <main className='pt-8 pr-40 pl-40 bg-[#F2F4F7] h-screen'>
        <div className='container mx-auto flex justify-between items-center'>
            <h1 className='text-2xl font-bold text-[#1d2939]'>Board</h1>
            <button className='px-[20px] py-4 bg-green-500 rounded-md text-white font-bold'>Adicionar tarefa</button>
        </div>
    </main>
  )
}

export default Board