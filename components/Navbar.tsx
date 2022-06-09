import React from 'react'

function Navbar() {
  return (
    <div className='fixed w-full top-0 lg:px-8 px-5 lg:pt-8 pt-5 z-70 max-w-[1400px]'>
      <div className='flex h-full border-b border-white items-center justify-center max-w-11xl mx-auto border-opacity-0'>
      <div className='flex-grow'>
        <button className='bg-blue-500 rounded-md px-3 py-2 hover:bg-blue-400'>
          <p className='text-white text-[24px]'>
            FRNDZ
          </p>
        </button>
      </div>
        <div className='flex my-auto'>
          <ul className='flex space-x-10'>
            <li>
              <a className='px-2 cursor-pointer hover:underline'>
                Roadmap
              </a>
            </li>
            <li>
              <a className='px-2 cursor-pointer hover:underline'>
                Our Team
              </a>
            </li>
            <li>
              <a className='px-2 cursor-pointer hover:underline'>
                Governance
              </a>
            </li>
            <li>
              <a className='px-2 cursor-pointer hover:underline'>
                What We Do
              </a>
            </li>
            <li>
              
            </li>
          </ul>
        </div>
    </div>
    </div>
  )
}

export default Navbar