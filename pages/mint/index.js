import React from 'react'
import Navbar from '../../components/Navbar.tsx'
import { motion } from "framer-motion"
import { Canvas } from '@react-three/fiber'
import Sphere from '../../components/AnimatedSphere.js'
import { Coffee, DownArrow, Map } from "styled-icons/boxicons-regular"

function index() {
  return (
    <>
      <Navbar />
      <div className="mx-6">
      <div className="h-screen align-middle flex" id="top">
        <div className="h-full fixed w-full my-auto mx-auto top-0 left-0 flex" >
        <Canvas>
            <ambientLight intensity={1} />
            <directionalLight position={-2, 5, 2} intensity={1} />
            <Sphere/>
        </Canvas>
        </div>
        <div className="my-auto mx-auto z-20">
          <motion.div className="mx-auto my-auto" initial={{opacity: 0, x: -60}} 
          animate={{opacity: 1, x: 0}} transition={{duration: 1}}>
            <h1 className=" xl:text-[100px] text-[10vw] font-bold mx-auto text-center my-auto select-none w-full dark:text-white">
              MINT TBA
            </h1>
            <p className="xl:text-[25px] text-[2.5vw] -z-20 dark:text-white">
              <a href='https://twitter.com/junglefriendNFT' target={'_blank'}>Follow FRNDZ on Twitter to stay updated <Coffee className='xl:w-[25px] w-[2.5vw]' /></a>
            </p>
          </motion.div>
        </div>
        </div>
            
            
        </div>
        <div className="xl:text-xl p-5 absolute bottom-0 dark:text-white">
        <p>Website created by haruxeETH</p>
      </div>
      </>
  )
}

export default index