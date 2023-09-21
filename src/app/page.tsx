'use client'

import ParticlesBlock from "@/components/particles-block/particles-block"
import ProjectableButton from "@/components/circle-button/circle-button"
import Person from "@/components/person/person"

import { fadeIn } from "../utils/variant"
import { motion } from "framer-motion"

export default function Page() {
  return (
    <div className="bg-primary/10 h-full ">
     
      {/* text */}
      <div className=" w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">
          
          {/* title */}
          <motion.h1
            className="h1"
            variants={fadeIn('down', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'>Criando um Universo  <br /> Melhor com{' '}
            <span className="text-teal-300">Soluções Digitais</span></motion.h1>

          <motion.p
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16"
            variants={fadeIn('down', 0.3)}
            initial='hidden'
            animate='show'
            exit='hidden'>
            A inovação é o melhor e mais duradouro combustível para alcançarmos o <span className="text-teal-300">futuro.</span> 
          </motion.p>
          
          {/*btn*/}
          <div className="flex justify-center xl:hidden relative">
            <ProjectableButton />
          </div>
          <motion.div
            variants={fadeIn('down', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className="hidden xl:flex"
          >
            <ProjectableButton />
          </motion.div>
        </div>
      </div>
      
      {/* Image */}
      <div className=" w-full md:w-[62%] h-[65%] md:h-full absolute right-0 top-0">
        
        {/* bg image */}
        <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0" />
        
        {/* Particles */}
        <ParticlesBlock />

        {/* Person image */}
        <motion.div
          className="w-full h-full max-w-[480px] max-h-[651px] absolute -bottom-32 lg:bottom-0 lg:right-[16%]"
          variants={fadeIn('up', 0.4)}
          initial='hidden'
          animate='show'
          exit='hidden'>
          <Person />
        </motion.div> 
      </div>
    </div>
  )
}