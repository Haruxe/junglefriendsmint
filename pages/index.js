import Navbar from "../components/Navbar.tsx"
import { motion } from "framer-motion"
import promo from '../public/images/promo.gif'
import Image from 'next/image'

export default function Home() {
  return (
      <div className="mx-auto px-2">
      <Navbar />
      <motion.div className="px-3 flex flex-col lg:flex-row pt-[10rem]" initial={{opacity: 0, x: -50}} animate={{opacity: 1, x: 0}} transition={{duration: .5}}>
        <div>
          <h1 className=" text-8xl font-bold">
            Jungle FRNDZ //
          </h1>
          <h2 className="pt-4 text-2xl w-8/12 text-gray-500 leading-relaxed">
            &lt;h2&gt;
            Lets change the game. This is the end of generic PFP
            projects, and we stand to stop it. Join our &lt;a&gt;
          <a href="https://discord.com" className="text-red-400">
            discord</a>&lt;/a&gt;.
            &lt;/h2&gt;
          </h2>
        </div>
        <div className="mt-5 rounded-sm outline outline-1 p-5 outline-gray-400 h-[300px] w-[300px] lg:w-auto lg:h-auto lg:mr-[100px]">
          <Image src={ promo } width={500} height={500} alt='nft gif'/>
        </div>
      </motion.div>
      </div>
  )
}
