import React, { useState } from 'react'
import { Discord, DiscordAlt, Twitter } from 'styled-icons/boxicons-logos';
import { LightMode } from 'styled-icons/material';
import { DarkMode } from 'styled-icons/material'

function Navbar() {

  const [isDark, setDark] = useState(false)
  return (
    <>
    <div className='fixed w-full top-0 lg:px-8 px-5 lg:py-5 pt-5 z-50 max-w-[1400px] bg-white dark:bg-black'>
      <div className='flex h-full border-b border-white items-center justify-center max-w-11xl mx-auto border-opacity-0'>
      <div className='flex-grow'>
        <button className='bg-red-500 dark:bg-blue-400 rounded-md px-5 py-3 hover:bg-blue-400 dark:hover:bg-red-500'>
          <a className='text-white md:text-[20px] font-bold' href='/#top'>
            F R N D Z
          </a>
        </button>
      </div>
        <div className='flex my-auto align-middle'>
          <ul className='mx-auto flex space-x-10 align-middle place-items-center'>
            <li>
              <a className='mx-auto px-2 cursor-pointer hover:underline md:text-md text-sm dark:text-white' href='/#friendmap'>
                Friendmap
              </a>
            </li>
            <li>
              <a className='mx-auto px-2 cursor-pointer hover:underline md:text-md text-sm sm:visibile dark:text-white' href='/#tribe'>
                Our Tribe
              </a>
            </li>
            <li>
              <a className='mx-auto px-2 cursor-pointer hover:underline md:text-md text-sm dark:text-white' href='/mint'>
                Mint
              </a>
            </li>
            <li>
              <a className='mx-auto px-2 cursor-pointer hover:underline md:text-md text-sm dark:text-white' href='https://twitter.com/junglefriendNFT' target={'_blank'}>
                <Twitter className='w-8'/>
              </a>
            </li>
            <li>
              <a className='mx-auto px-2 cursor-pointer hover:underline md:text-md text-sm dark:text-white' href='https://discord.gg/s3ej7ZG4DZ' target={'_blank'}>
                <DiscordAlt className='w-8'/>
              </a>
            </li>
            <li>
              {isDark ? <button className='px-2 cursor-pointer' onClick={() => {document.documentElement.classList.remove('dark'); setDark(false)}}>
              <LightMode className='w-12 p-3 outline outline-black bg-white outline-2 rounded-full'/> </button>
              :
              <button className='px-2 cursor-pointer' onClick={() => {document.documentElement.classList.add('dark'); setDark(true)}}>
                <DarkMode className='w-12 p-3 outline outline-black bg-white outline-2 rounded-full'/>
              </button>

              }
            </li>
          </ul>
        </div>
    </div>
    </div>
    </>
  )
}

export default Navbar