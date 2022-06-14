import Navbar from "../components/Navbar.tsx"
import { motion } from "framer-motion"
import { Canvas } from '@react-three/fiber'
import Sphere from '../components/AnimatedSphere.js'
import { DownArrow, Map } from "styled-icons/boxicons-regular"
import Image from "next/image"
import promo from '../public/images/promo.gif'
import haruxeETH from '../public/images/haruxeETH.png'
import unknown from '../public/images/unknown.png'

export default function Home() {
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
        <div className="my-auto mx-auto z-10">
          <motion.div className="mx-auto my-auto" initial={{opacity: 0, x: -60}} 
          animate={{opacity: 1, x: 0}} transition={{duration: .8}}>
            <h1 className=" xl:text-[250px] text-[23vw] font-bold mx-auto text-center my-auto select-none w-full dark:text-white">
              JUNGLE
              <div className="h-[4px] bg-black dark:bg-white my-5 rounded-lg mx-auto"/>
              FRNDZ
            </h1>
          </motion.div>
        </div>
        </div>

        <div id='friendmap' className="mb-[100px]"/>
        <div className=" space-y-[200px] justify-center relative">

        <div className="mx-auto justify-center w-1/2">
            <div className="xl:text-8xl  text-4xl p-5 font-bold bg-white dark:bg-black dark:text-white outline outline-1 dark:outline-white" href='/mint'>
              <a href="/mint">
              <center>
              - MINT TBA -
              </center>
              </a>
            </div>
          </div>
          <div className='xl:w-1/2 bg-white outline outline-1 p-8 mx-auto z-30 dark:outline-white dark:bg-black'>
          <motion.div className="mx-auto my-auto" initial={{opacity: 0}} 
         transition={{duration: .8}} whileInView={{opacity: 1}}>
            <h1 className=" xl:text-8xl text-4xl font-bold mx-auto my-auto align-middle z-10 dark:text-white">
               FRNDZ //
            </h1>
          </motion.div>
          
          <div className="h-[1px] xl:w-1/2 bg-gray-300 my-5 rounded-lg ml-3 mx-auto z-10"/>
            <h1 className="xl:text-2xl text-lg text-gray-800 leading-relaxed mx-auto z-10 dark:text-gray-400">
              Q: Huh? It's more than a PFP? A: Yup.
            </h1>
            <br />
            <h1 className="xl:text-2xl text-md dark:text-white leading-relaxed mx-auto z-10 ">
              &lt;p&gt;
              Jungle FRNDZ on the surface is just another collection of jpegs,
               but it gives users access to a group of highly qualified developers at their
               fingertips. Every FRNDZ holder is given VIP access to an exclusive developer discord
               to heighten their skills.  &lt;/p&gt;
            </h1>
        </div>

        <motion.div className='xl:w-1/2 bg-white outline outline-1 p-8 mx-auto dark:outline-white dark:bg-black' initial={{opacity: 0}} 
         transition={{duration: .8}} whileInView={{opacity: 1}}>
          <motion.div className="mx-auto my-auto" >
            <h1 className=" xl:text-8xl text-4xl font-bold mx-auto my-auto align-middle dark:text-white">
              <Map className="xl:w-[60px] w-[20px]" /> MAP
            </h1>
          </motion.div>
          <div className="h-[1px] w-1/2 bg-gray-300 my-5 rounded-lg ml-3 mx-auto"/>
            <h1 className="xl:text-2xl text-md leading-relaxed mx-auto dark:text-white">
              &lt;h1&gt;
              Jungle FRNDZ are dropped from this website for FREE. We want to be as accessible as possible
              in the initial launch. Discord is opened, and slots are filled. &lt;/h1&gt;
            </h1>
            <div className="h-[1px] w-1/6 bg-gray-300 my-5 rounded-lg ml-3 mx-auto"/>
            <h2 className="xl:text-2xl text-md leading-relaxed mx-auto dark:text-white">
              &lt;h2&gt;
              Community establishes collaborations with other like-minded NFT and DeFi projects like Kaiju Kingz and
              Tiny Dinos. &lt;/h2&gt;
            </h2>
            <div className="h-[1px] w-1/6 bg-gray-300 my-5 rounded-lg ml-3 mx-auto "/>
            <h3 className="xl:text-2xl text-md leading-relaxed mx-auto dark:text-white">
              &lt;h3&gt;
              Jungle FRNDZ holders are given the opportunity to create R̶E̶D̶A̶C̶T̶E̶D̶ &lt;/h3&gt;
            </h3>
        </motion.div>

        <motion.div className="outline outline-1 p-5 bg-white lg:w-[500px] w-[60vw] mx-auto dark:outline-white dark:bg-black" initial={{opacity: 0}} 
         transition={{duration: .8}} whileInView={{opacity: 1}}>
          <Image src={promo}/>
        </motion.div>

        <div className='bg-white outline outline-1 p-8 mx-auto xl:w-1/2 dark:outline-white dark:bg-black' id='tribe'>
          <motion.div className="mx-auto " initial={{opacity: 0}} 
         transition={{duration: .8}} whileInView={{opacity: 1}}>
            <h1 className=" xl:text-8xl text-4xl font-bold mx-auto my-auto align-middle dark:text-white">
               Our Tribe //
            </h1>
          </motion.div>
          <div className="h-[1px] w-1/2 bg-gray-300 my-5 rounded-lg ml-3 mx-auto "/>
            <h1 className="xl:text-2xl text-lg text-gray-800 dark:text-gray-400 leading-relaxed mx-auto">
              Q: Whos behind it? A: Its complicated.
            </h1>
            <br />
            <h1 className="xl:text-2xl text-md leading-relaxed mx-auto dark:text-white">
              &lt;h1&gt;
              Jungle FRNDZ started as an idea, but it will grow as a brand as the community grows.  &lt;/h1&gt;
            </h1>
            <br />
            <div className="flex flex-row space-x-4 ">
              <Image src={haruxeETH} alt='haruxeETH PFP' width={100} height={100}/>
            <h1 className="xl:text-4xl leading-relaxed my-auto dark:text-white">
              Founder: HaruxeETH
            </h1>
            </div>
            <br />
            <div className="flex flex-row space-x-4">
              <Image src={unknown} alt='your PFP' width={100} height={100}/>
            <h1 className="xl:text-4xl leading-relaxed my-auto dark:text-white">
              More to come
            </h1>
            </div>

            

      </div>
      <div className=' bg-white outline outline-1 p-8 xl:w-1/2 mx-auto dark:outline-white dark:bg-black'>
          <motion.div className="mx-auto my-auto" initial={{opacity: 0}} 
         transition={{duration: .8}} whileInView={{opacity: 1}}>
            <h1 className=" xl:text-8xl text-4xl font-bold mx-auto my-auto align-middle dark:text-white">
               Whats Next? //
            </h1>
          </motion.div>
          <div className="h-[1px] w-1/2 bg-gray-300 my-5 rounded-lg ml-3 mx-auto"/>
            <h1 className="xl:text-2xl text-md leading-relaxed mx-auto dark:text-white">
              &lt;h1&gt;
              We hope to push the next generation of developers to create great web3 applications with the help
              of those who have already created apps. For those who have experience, joining our community helps
              you establish a career and network with other creators. &lt;/h1&gt;
            </h1>
            <br />
            
            
        </div>
        <div className="xl:text-xl p-5 dark:text-white">
        <p>Website created by haruxeETH</p>
      </div>

        
      </div>
      
      </div>
      </>
  )
}
