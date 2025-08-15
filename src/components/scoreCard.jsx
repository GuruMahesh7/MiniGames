import React from 'react'

function scoreCard() {
  return (
    <div className='h-screen w-full bg-linear-to-b from-[#9796F0] to-[#FBC7D4]'>
      <div className='flex justify-between p-6 px-16 bg-white/30 backdrop-blur-sm'>
        <h1 className='text-xl pl-2 flex'><img src="/logoimage.png" className='size-8 w-10 pr-2'/>Emoji Game</h1>
        <p className='pl-2'>Score: 12</p>
      </div>
       <div className='flex justify-between px-60 pt-10'>
        <button className='flex'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5">
            <path fill-rule="evenodd" d="M17 10a.75.75 0 0 1-.75.75H5.612l4.158 3.96a.75.75 0 1 1-1.04 1.08l-5.5-5.25a.75.75 0 0 1 0-1.08l5.5-5.25a.75.75 0 1 1 1.04 1.08L5.612 9.25H16.25A.75.75 0 0 1 17 10Z" clip-rule="evenodd" />
          </svg>
          Back
        </button>
        <button>Rules</button>
       </div>
       
    </div>
  )
}

export default scoreCard
