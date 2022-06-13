import React from 'react'

function Navbar() {
  return (
    <>
    <div className='fixed w-full top-0 lg:px-8 px-5 lg:py-5 pt-5 z-70 max-w-[1400px] z-20 bg-white'>
      <div className='flex h-full border-b border-white items-center justify-center max-w-11xl mx-auto border-opacity-0'>
      <div className='flex-grow'>
        <button className='bg-red-500 rounded-md px-5 py-3 hover:bg-blue-400'>
          <a className='text-white text-[20px] font-bold' href='#top'>
            F R N D Z
          </a>
        </button>
      </div>
        <div className='flex my-auto'>
          <ul className='flex space-x-10'>
            <li>
              <a className='px-2 cursor-pointer hover:underline' href='#friendmap'>
                Friendmap
              </a>
            </li>
            <li>
              <a className='px-2 cursor-pointer hover:underline' href='#tribe'>
                Our Tribe
              </a>
            </li>
          </ul>
        </div>
    </div>
    </div>
    </>
  )
}

export default Navbar