import Navbar from "../components/Navbar.tsx"
import { motion } from "framer-motion"
import { Canvas } from '@react-three/fiber'
import Sphere from '../components/AnimatedSphere.js'
import { DownArrow, Map } from "styled-icons/boxicons-regular"
import Image from "next/image"
import promo from '../public/images/promo.gif'
import Ethereum from '../components/Ethereum.js'

export default function Home() {
  return (
      <>
      <Navbar />
      <div className="mx-6">
      <div className="h-screen align-middle flex" id="top">
        <div className="h-full fixed w-full my-auto mx-auto top-0 left-0 -z-10 flex">
        <Canvas>
            <ambientLight intensity={1} />
            <directionalLight position={-2, 5, 2} intensity={1} />
            <Sphere/>
        </Canvas>
        </div>
        <div className="my-auto mx-auto">
          <motion.div className="mx-auto my-auto" initial={{opacity: 0, x: -60}} 
          animate={{opacity: 1, x: 0}} transition={{duration: .8}}>
            <h1 className=" xl:text-[175px] text-[12vw] font-bold mx-auto text-center my-auto select-none w-full">
              JUNGLE FRNDZ
            </h1>
            <p className="xl:text-[25px] text-[2.5vw] -z-20">
              <a href="#friendmap"><DownArrow className="xl:w-[30px] w-[2.5vw] hover:animate-bounce"/></a> Whats the deal?
            </p>
          </motion.div>
        </div>
        </div>

        <div id='friendmap' className="mb-[100px] "/>
        <div className="h-screen relative">
          <div className='w-1/2 bg-white outline outline-1 p-8 absolute'>
          <motion.div className="mx-auto my-auto" initial={{opacity: 0}} 
         transition={{duration: .8}} whileInView={{opacity: 1}}>
            <h1 className=" xl:text-8xl text-4xl font-bold mx-auto my-auto align-middle">
               FRNDZ //
            </h1>
          </motion.div>
          <div className="h-[1px] w-1/2 bg-gray-300 my-5 rounded-lg ml-3 mx-auto"/>
            <h1 className="xl:text-2xl text-lg text-gray-800 leading-relaxed mx-auto">
              Q: Huh? It's more than a PFP? A: Yup.
            </h1>
            <br />
            <h1 className="xl:text-2xl text-md text-gray-500 leading-relaxed mx-auto ">
              &lt;p&gt;
              Jungle FRNDZ on the surface is just another collection of flippable jpegs,
               but to the it gives users access to a group of highly qualified developers at their
               fingertips. Every FRNDZ holder is given VIP access to an exclusive developer discord
               to heighten their skills.  &lt;/p&gt;
            </h1>
        </div>

        <motion.div className='w-5/12 bg-white outline outline-1 p-8 absolute bottom-1/4 right-0' initial={{opacity: 0}} 
         transition={{duration: .8}} whileInView={{opacity: 1}}>
          <motion.div className="mx-auto my-auto" >
            <h1 className=" xl:text-8xl text-4xl font-bold mx-auto my-auto align-middle">
              <Map className="xl:w-[60px] w-[20px]" /> MAP
            </h1>
          </motion.div>
          <div className="h-[1px] w-1/2 bg-gray-300 my-5 rounded-lg ml-3 mx-auto"/>
            <h1 className="xl:text-2xl text-md leading-relaxed mx-auto">
              &lt;h1&gt;
              Jungle FRNDZ are dropped from this website for FREE. We want to be as accessible as possible
              in the initial launch. Discord is opened, and slots are filled. &lt;/h1&gt;
            </h1>
            <div className="h-[1px] w-1/6 bg-gray-300 my-5 rounded-lg ml-3 mx-auto"/>
            <h1 className="xl:text-2xl text-md leading-relaxed mx-auto">
              &lt;h2&gt;
              Community establishes collaborations with other like-minded NFT and DeFi projects like Kaiju Kingz and
              Tiny Dinos. &lt;/h2&gt;
            </h1>
        </motion.div>

        <motion.div className="absolute bottom-1/4 outline outline-1 p-5 bg-white" initial={{opacity: 0}} 
         transition={{duration: .8}} whileInView={{opacity: 1}}>
          <Image src={promo}/>
        </motion.div>

        <motion.div className="absolute top-0 right-0 p-5 w-[500px] h-[500px]" initial={{opacity: 0}} 
         transition={{duration: .8}} whileInView={{opacity: 1}}>
          <Canvas>
            <ambientLight intensity={.1} />
            <directionalLight position={-2, 5, 2} intensity={.3} />
            <directionalLight position={2, -5, -2} intensity={.3} />
            <Ethereum />
        </Canvas>
        </motion.div>
        <div id='friendmap' className="mb-[100px] "/>
        <div className="h-screen relative">
          <div className='w-1/2 bg-white outline outline-1 p-8 absolute'>
          <motion.div className="mx-auto my-auto" initial={{opacity: 0}} 
         transition={{duration: .8}} whileInView={{opacity: 1}}>
            <h1 className=" xl:text-8xl text-4xl font-bold mx-auto my-auto align-middle">
               FRNDZ //
            </h1>
          </motion.div>
          <div className="h-[1px] w-1/2 bg-gray-300 my-5 rounded-lg ml-3 mx-auto"/>
            <h1 className="xl:text-2xl text-lg text-gray-800 leading-relaxed mx-auto">
              Q: Huh? It's more than a PFP? A: Yup.
            </h1>
            <br />
            <h1 className="xl:text-2xl text-md text-gray-500 leading-relaxed mx-auto ">
              &lt;p&gt;
              Jungle FRNDZ on the surface is just another collection of flippable jpegs,
               but to the it gives users access to a group of highly qualified developers at their
               fingertips. Every FRNDZ holder is given VIP access to an exclusive developer discord
               to heighten their skills.  &lt;/p&gt;
            </h1>
        </div>

        <motion.div className='w-5/12 bg-white outline outline-1 p-8 absolute bottom-1/4 right-0' initial={{opacity: 0}} 
         transition={{duration: .8}} whileInView={{opacity: 1}}>
          <motion.div className="mx-auto my-auto" >
            <h1 className=" xl:text-8xl text-4xl font-bold mx-auto my-auto align-middle">
              <Map className="xl:w-[60px] w-[20px]" /> MAP
            </h1>
          </motion.div>
          <div className="h-[1px] w-1/2 bg-gray-300 my-5 rounded-lg ml-3 mx-auto"/>
            <h1 className="xl:text-2xl text-md leading-relaxed mx-auto">
              &lt;h1&gt;
              Jungle FRNDZ are dropped from this website for FREE. We want to be as accessible as possible
              in the initial launch. Discord is opened, and slots are filled. &lt;/h1&gt;
            </h1>
            <div className="h-[1px] w-1/6 bg-gray-300 my-5 rounded-lg ml-3 mx-auto"/>
            <h1 className="xl:text-2xl text-md leading-relaxed mx-auto">
              &lt;h2&gt;
              Community establishes collaborations with other like-minded NFT and DeFi projects. &lt;/h2&gt;
            </h1>
        </motion.div>
        </div>
      </div>
      
      </div>
      </>
  )
}
